import { DATASET_SEEDS } from '../src/data/datasets-seed.js';
import { writeFileSync } from 'fs';

const BASE = 'https://kartkatalog.geonorge.no/api/getdata';
const BATCH = 5; // concurrent requests
const TIMEOUT = 5000; // 5 second timeout per request

function normalizeAccess(dataset) {
  // Use the boolean flags first (most reliable)
  if (dataset.AccessIsOpendata === true) return 'open';
  if (dataset.AccessIsRestricted === true) return 'restricted';
  if (dataset.AccessIsProtected === true) return 'contact';

  // Fallback to AccessConstraints text
  const raw = (dataset?.Constraints?.AccessConstraints ?? '').toLowerCase();
  if (raw.includes('no restriction') || raw.includes('open') || raw.includes('åpne data')) return 'open';
  if (raw.includes('restricted')) return 'restricted';

  return 'contact';
}

function normalizeProto(dataset) {
  const protos = new Set();

  // Check ServiceDistributionProtocolForDataset
  if (dataset.ServiceDistributionProtocolForDataset) {
    const p = dataset.ServiceDistributionProtocolForDataset.replace(/^OGC:/, '').replace(/-tjeneste$/, '').trim();
    if (p) protos.add(p);
  }

  // Check related services in Distributions
  if (dataset.Distributions?.RelatedViewServices?.length) {
    dataset.Distributions.RelatedViewServices.forEach(svc => {
      const p = (svc.Protocol ?? '').replace(/^OGC:/, '').replace(/-tjeneste$/, '').trim();
      if (p) protos.add(p);
    });
  }

  // Check DistributionDetails (WMS, WFS, etc)
  if (dataset.DistributionDetails?.Protocol) {
    const p = (dataset.DistributionDetails.Protocol ?? '').replace(/^(OGC:|GEONORGE:)/, '').trim();
    if (p && p !== 'DOWNLOAD') protos.add(p);
  }

  // Check DistributionFormats
  if (dataset.DistributionsFormats?.length) {
    dataset.DistributionsFormats.forEach(fmt => {
      const proto = (fmt.Protocol ?? '').replace(/^(OGC:|GEONORGE:|W3C:)/, '').replace(/-tjeneste$/, '').trim();
      if (proto && proto !== 'DOWNLOAD' && proto !== 'AtomFeed') protos.add(proto);
    });
  }

  return Array.from(protos).sort().join('/') || '';
}

async function fetchWithTimeout(url, timeout = TIMEOUT) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return res;
  } catch (e) {
    clearTimeout(timeoutId);
    throw e;
  }
}

async function fetchOne(seed, index) {
  try {
    const res = await fetchWithTimeout(`${BASE}/${seed.uuid}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const d = await res.json();

    // Extract WMS URL from ServiceDistributionUrlForDataset or first related view service
    let wmsUrl = d.ServiceDistributionUrlForDataset;
    if (!wmsUrl && d.Distributions?.RelatedViewServices?.length) {
      const wmsService = d.Distributions.RelatedViewServices.find(s =>
        s.Protocol?.includes('WMS')
      );
      if (wmsService?.GetCapabilitiesUrl) {
        wmsUrl = wmsService.GetCapabilitiesUrl;
      }
    }

    return {
      no: d.Title ?? seed.enFallback,
      en: (d.EnglishTitle?.trim()) || seed.enFallback,
      ownerNo: d.ContactMetadata?.Organization ?? 'Unknown',
      ownerEn: seed.ownerEnFallback,
      url: `https://kartkatalog.geonorge.no/metadata/${seed.uuid}`,
      access: normalizeAccess(d),
      proto: normalizeProto(d),
      wmsUrl: wmsUrl || '',
      notes: seed.notes,
      tags: seed.tags,
      abstractNo: (d.Abstract ?? '').trim(),
      abstractEn: ((d.EnglishAbstract ?? '').trim() || (d.Abstract ?? '').trim()),
    };
  } catch (e) {
    console.warn(`⚠ [${index + 1}/${DATASET_SEEDS.length}] Failed UUID ${seed.uuid}: ${e.message} — using fallback`);
    return {
      no: seed.enFallback,
      en: seed.enFallback,
      ownerNo: seed.ownerEnFallback,
      ownerEn: seed.ownerEnFallback,
      url: `https://kartkatalog.geonorge.no/metadata/${seed.uuid}`,
      access: 'open',
      proto: '',
      wmsUrl: '',
      notes: seed.notes,
      tags: seed.tags,
      abstractNo: '',
      abstractEn: '',
    };
  }
}

async function main() {
  console.log(`Fetching metadata for ${DATASET_SEEDS.length} datasets from Geonorge...`);
  const results = [];
  let failureCount = 0;

  // Process in batches to avoid hammering the API
  for (let i = 0; i < DATASET_SEEDS.length; i += BATCH) {
    const batch = DATASET_SEEDS.slice(i, i + BATCH);
    const batchResults = await Promise.all(
      batch.map((seed, idx) => fetchOne(seed, i + idx))
    );

    // Count failures (when fallback values were used)
    batchResults.forEach((result, idx) => {
      const seed = batch[idx];
      // Fallback is used when name matches fallback AND access is generic 'open' AND no proto
      if (result.no === seed.enFallback && result.access === 'open' && !result.proto) {
        failureCount++;
      }
    });

    results.push(...batchResults);
    const pct = Math.round((i + batch.length) / DATASET_SEEDS.length * 100);
    console.log(`  [${pct}%] Processed ${i + batch.length}/${DATASET_SEEDS.length}`);
  }

  writeFileSync(
    'src/data/datasets.js',
    `export const DATASETS = ${JSON.stringify(results, null, 2)};\n`
  );

  console.log(`✓ Wrote ${results.length} datasets to src/data/datasets.js`);
  if (failureCount > 0) {
    console.warn(`⚠ ${failureCount} datasets fell back to seed values`);
    if (failureCount > 20) {
      console.error(`✗ Too many failures. Check Geonorge API availability.`);
      process.exit(1);
    }
  }
}

main().catch(e => {
  console.error('Fatal error:', e.message);
  process.exit(1);
});
