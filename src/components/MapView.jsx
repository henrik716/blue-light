import { useState, useMemo, useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { DATASETS } from '../data/datasets.js';
import { CATS } from '../data/categories.js';

function LegendImage({ url }) {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setStatus("loading");
  }, [url]);

  if (status === "error") return null;

  return (
    <div
      style={{
        padding: "8px 12px",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        background: "rgba(255, 255, 255, 0.02)",
        minHeight: 28,
        display: "flex",
        alignItems: "center",
      }}
    >
      {status === "loading" && (
        <div
          style={{
            fontSize: 10,
            color: "#3A6080",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <span style={{ animation: "spin 1s linear infinite", display: "inline-block" }}>
            ⟳
          </span>
          <span>Legend…</span>
        </div>
      )}
      <img
        src={url}
        alt="Legend"
        style={{
          maxWidth: "100%",
          height: "auto",
          maxHeight: 150,
          borderRadius: 4,
          display: status === "loaded" ? "block" : "none",
        }}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
    </div>
  );
}

export function MapView({ activeCat, lang, t, search = "" }) {
  const [visibleLayers, setVisibleLayers] = useState(new Map());
  const [panelExpanded, setPanelExpanded] = useState(window.innerWidth > 640);
  const [wmsLayers, setWmsLayers] = useState({});
  const [validWmsIndices, setValidWmsIndices] = useState(new Set());
  const [isValidating, setIsValidating] = useState(false);
  const [expandedLegends, setExpandedLegends] = useState(new Set());
  const [expandedServices, setExpandedServices] = useState(new Set());
  const mapRef = useRef(null);
  const wmsLayersRef = useRef({});
  const wmsParamsRef = useRef({});

  // Filter datasets by active category and those with WMS
  const wmsDatasets = useMemo(() => {
    let list = activeCat === "alle" ? DATASETS : DATASETS.filter(d => d.tags.includes(activeCat));
    return list.filter(d => d.wmsUrl && d.wmsUrl.trim() !== "");
  }, [activeCat]);

  // Clear visible layers when category changes
  useEffect(() => {
    setVisibleLayers(new Map());
    setExpandedServices(new Set());
  }, [activeCat]);

  const toggleService = (idx) => {
    const allNames = wmsLayers[idx]?.layers.map(l => l.name) ?? [];
    setVisibleLayers(prev => {
      const next = new Map(prev);
      const isFull = next.get(idx)?.size === allNames.length && allNames.length > 0;
      if (isFull) {
        next.delete(idx);
        setExpandedLegends(p => { const n = new Set(p); n.delete(idx); return n; });
      } else {
        next.set(idx, new Set(allNames));
      }
      return next;
    });
  };

  const toggleSubLayer = (idx, name) => {
    setVisibleLayers(prev => {
      const next = new Map(prev);
      const current = new Set(next.get(idx) ?? []);
      current.has(name) ? current.delete(name) : current.add(name);
      if (current.size === 0) {
        next.delete(idx);
        setExpandedLegends(p => { const n = new Set(p); n.delete(idx); return n; });
      } else {
        next.set(idx, current);
      }
      return next;
    });
  };

  const toggleExpanded = (idx) => {
    setExpandedServices(prev => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  const toggleLegend = (index) => {
    setExpandedLegends(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  // Helper predicates
  const isServiceOn = (idx) => (visibleLayers.get(idx)?.size ?? 0) > 0;
  const isServiceFull = (idx) => visibleLayers.get(idx)?.size === wmsLayers[idx]?.layers.length;
  const isLayerOn = (idx, name) => visibleLayers.get(idx)?.has(name) ?? false;

  const getWmsBaseUrl = (url) => {
    if (!url) return "";
    return url.split('?')[0];
  };

  // Validate and fetch layer names from GetCapabilities - in parallel
  useEffect(() => {
    if (wmsDatasets.length === 0) return;

    const validateAndFetchLayers = async () => {
      setIsValidating(true);
      const layers = { ...wmsLayers };
      const validIndices = new Set(validWmsIndices);

      // Create validation tasks for all datasets
      const validationTasks = wmsDatasets.map((dataset, i) => async () => {
        if (!dataset.wmsUrl) return;

        try {
          const baseUrl = getWmsBaseUrl(dataset.wmsUrl);
          const capUrl = `${baseUrl}?service=WMS&request=GetCapabilities&version=1.1.0`;

          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 5000);

          const response = await fetch(capUrl, { signal: controller.signal });
          clearTimeout(timeoutId);

          if (!response.ok) throw new Error(`HTTP ${response.status}`);

          const text = await response.text();
          const parser = new DOMParser();
          const xml = parser.parseFromString(text, 'application/xml');

          // Parse all named layers (skip container layers without a direct <Name>)
          const layerEls = Array.from(xml.querySelectorAll('Layer')).filter(el =>
            Array.from(el.children).some(c => c.tagName === 'Name' && c.textContent.trim())
          );

          const parsedLayers = layerEls.map(el => {
            const nameEl = Array.from(el.children).find(c => c.tagName === 'Name');
            const name = nameEl?.textContent.trim() || '';
            const titleEl = Array.from(el.children).find(c => c.tagName === 'Title');
            const title = titleEl?.textContent.trim() || name;
            const legendUrl = `${baseUrl}?service=WMS&request=GetLegendGraphic&version=1.1.0&layer=${encodeURIComponent(name)}&format=image/png`;
            return { name, title, legendUrl };
          });

          const allLayers = parsedLayers.length > 0
            ? parsedLayers
            : [{ name: dataset.no || `layer_${i}`, title: dataset.no || `layer_${i}`, legendUrl: '' }];

          if (allLayers.length > 0) {
            validIndices.add(i);
            layers[i] = { layers: allLayers };

            // Update state immediately so layer appears in list
            setWmsLayers(prev => ({ ...prev, [i]: { layers: allLayers } }));
            setValidWmsIndices(prev => new Set([...prev, i]));
          }
        } catch (error) {
          // Silently skip invalid WMS services
        }
      });

      // Run validations in parallel batches of 5
      const batchSize = 5;
      for (let i = 0; i < validationTasks.length; i += batchSize) {
        const batch = validationTasks.slice(i, i + batchSize);
        await Promise.all(batch.map(task => task()));
      }

      setIsValidating(false);
    };

    validateAndFetchLayers();
  }, [wmsDatasets]);

  const activeCatObj = CATS.find(c => c.id === activeCat);
  const accentColor = activeCatObj?.color || "#60A5FA";

  // Filter to only show valid WMS datasets, with original indices
  const validWmsDatasets = useMemo(() => {
    let filtered = [];

    for (let i = 0; i < wmsDatasets.length; i++) {
      if (validWmsIndices.has(i)) {
        filtered.push({ index: i, dataset: wmsDatasets[i] });
      }
    }

    // Apply search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(({ dataset }) =>
        dataset.no?.toLowerCase().includes(q) ||
        dataset.en?.toLowerCase().includes(q) ||
        dataset.ownerNo?.toLowerCase().includes(q) ||
        dataset.ownerEn?.toLowerCase().includes(q) ||
        dataset.notes?.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [wmsDatasets, validWmsIndices, search]);

  // Initialize map
  useEffect(() => {
    if (mapRef.current) return;

    const map = L.map('map-container', {
      center: [65, 14],
      zoom: 5,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
    }).addTo(map);

    mapRef.current = map;
  }, []);

  // Update WMS layers when visibility changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Remove layers no longer active
    Object.keys(wmsLayersRef.current).forEach(key => {
      const idx = parseInt(key);
      if (!isServiceOn(idx)) {
        map.removeLayer(wmsLayersRef.current[idx]);
        delete wmsLayersRef.current[idx];
        delete wmsParamsRef.current[idx];
      }
    });

    // Add or update active service layers
    visibleLayers.forEach((activeNames, idx) => {
      const dataset = wmsDatasets[idx];
      const baseUrl = getWmsBaseUrl(dataset?.wmsUrl);
      const layersParam = [...activeNames].join(',');
      if (!layersParam || !dataset) return;

      const prevParams = wmsParamsRef.current[idx];

      // Only recreate layer if params changed
      if (prevParams !== layersParam) {
        if (wmsLayersRef.current[idx]) {
          map.removeLayer(wmsLayersRef.current[idx]);
        }

        const layer = L.tileLayer.wms(baseUrl, {
          layers: layersParam,
          transparent: true,
          version: '1.1.0',
          format: 'image/png',
          opacity: 0.7,
        });
        layer.addTo(map);
        wmsLayersRef.current[idx] = layer;
        wmsParamsRef.current[idx] = layersParam;
      }
    });
  }, [visibleLayers, wmsDatasets, wmsLayers]);

  return (
    <div style={{ height: "calc(100vh - var(--header-h, 128px))", position: "relative" }}>
      {/* Leaflet Map */}
      <div
        id="map-container"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Layer Panel - Floating Glass Panel */}
      <div
        style={{
          position: "absolute",
          left: 12,
          top: 12,
          bottom: 12,
          width: panelExpanded ? Math.min(320, window.innerWidth - 24) : 44,
          background: "rgba(10, 22, 40, 0.85)",
          backdropFilter: "blur(12px)",
          borderRadius: 12,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          flexDirection: "column",
          zIndex: 9999,
          transition: "width 0.25s ease",
          overflow: "hidden",
        }}
      >
        {/* Panel Header */}
        <div
          style={{
            padding: "12px 12px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: 0,
            gap: 8,
          }}
        >
          {panelExpanded && (
            <div style={{ fontSize: 12, fontWeight: 600, color: "#E8F0FA", flex: 1, display: "flex", alignItems: "center", gap: 8 }}>
              <span>{t.layers || "Layers"} ({validWmsDatasets.length})</span>
              {isValidating && (
                <div style={{ fontSize: 14, animation: "spin 1s linear infinite", color: "#60A5FA" }}>
                  ⟳
                </div>
              )}
            </div>
          )}
          <button
            onClick={() => setPanelExpanded(!panelExpanded)}
            style={{
              background: "none",
              border: "none",
              color: "#60A5FA",
              cursor: "pointer",
              fontSize: 16,
              padding: "4px 4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title={panelExpanded ? "Collapse" : "Expand"}
          >
            {panelExpanded ? "◀" : "▶"}
          </button>
        </div>

        {/* Panel Content - Scrollable List */}
        {panelExpanded && (
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "8px 0",
            }}
          >
            {validWmsDatasets.length === 0 && !isValidating ? (
              <div
                style={{
                  padding: "16px 12px",
                  fontSize: 12,
                  color: "#5A7EA0",
                  textAlign: "center",
                }}
              >
                {validWmsIndices.size === 0 && wmsDatasets.length > 0
                  ? "No working WMS services found"
                  : t.noResults || "No WMS available"}
              </div>
            ) : (
              validWmsDatasets.map(({ index: originalIndex, dataset }) => {
                const catColor = CATS.find(c => c.id === dataset.tags?.[0])?.color || accentColor;
                const serviceLayers = wmsLayers[originalIndex]?.layers ?? [];
                const isMulti = serviceLayers.length > 1;
                const isOn = isServiceOn(originalIndex);
                const isFull = isServiceFull(originalIndex);
                const activeLayers = visibleLayers.get(originalIndex) ?? new Set();
                const firstActive = serviceLayers.find(l => activeLayers.has(l.name));
                const legendUrl = firstActive?.legendUrl ?? null;
                const isExpanded = expandedServices.has(originalIndex);
                const isLegendExpanded = expandedLegends.has(originalIndex);

                // Indicator
                const indicator = !isOn ? "○" : isFull ? "◉" : "◎";
                const indicatorColor = !isOn ? "#3A6080" : "#60A5FA";

                return (
                  <div
                    key={`layer-${originalIndex}`}
                    style={{
                      borderLeft: `3px solid ${catColor}`,
                    }}
                  >
                    {/* Service Header Row */}
                    <div
                      onClick={() => toggleService(originalIndex)}
                      style={{
                        padding: "10px 12px",
                        cursor: "pointer",
                        userSelect: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        justifyContent: "space-between",
                        background: isOn ? "rgba(96, 165, 250, 0.1)" : "transparent",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = isOn ? "rgba(96, 165, 250, 0.15)" : "rgba(255, 255, 255, 0.05)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = isOn ? "rgba(96, 165, 250, 0.1)" : "transparent";
                      }}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: "#E8F0FA",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {lang === "no" ? dataset.no : dataset.en}
                        </div>
                        <div
                          style={{
                            fontSize: 9,
                            color: "#5A7EA0",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {lang === "no" ? dataset.ownerNo : dataset.ownerEn}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          flexShrink: 0,
                        }}
                      >
                        {isOn && legendUrl && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLegend(originalIndex);
                            }}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              fontSize: 11,
                              color: isLegendExpanded ? "#60A5FA" : "#3A6080",
                              padding: "0 4px",
                              flexShrink: 0,
                            }}
                            title="Toggle legend"
                          >
                            ≡
                          </button>
                        )}
                        {isMulti && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpanded(originalIndex);
                            }}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              fontSize: 10,
                              color: "#60A5FA",
                              padding: "0 4px",
                              flexShrink: 0,
                            }}
                            title="Toggle sublayers"
                          >
                            {isExpanded ? "▼" : "▶"}
                          </button>
                        )}
                        <div
                          style={{
                            fontSize: 14,
                            color: indicatorColor,
                            flexShrink: 0,
                          }}
                        >
                          {indicator}
                        </div>
                      </div>
                    </div>

                    {/* Sublayer List */}
                    {isMulti && isExpanded && (
                      <div style={{ paddingLeft: 16, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                        {serviceLayers.map(layer => (
                          <div
                            key={layer.name}
                            onClick={e => {
                              e.stopPropagation();
                              toggleSubLayer(originalIndex, layer.name);
                            }}
                            style={{
                              padding: "6px 12px",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              borderBottom: "1px solid rgba(255,255,255,0.02)",
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = "transparent";
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={isLayerOn(originalIndex, layer.name)}
                              readOnly
                              style={{ pointerEvents: "none", cursor: "pointer" }}
                            />
                            <span
                              style={{
                                fontSize: 10,
                                color: "#C0D8F0",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {layer.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Legend - Show only if layer is visible, legend exists, and is expanded */}
                    {isOn && legendUrl && isLegendExpanded && (
                      <LegendImage url={legendUrl} />
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}
