import { useMemo } from 'react';
import { CATS } from '../data/categories.js';
import { DATASETS } from '../data/datasets.js';

export function Sidebar({ activeCat, setActiveCat, lang, t }) {
  const countFor = useMemo(() => {
    const counts = new Map();
    counts.set("alle", DATASETS.length);
    CATS.forEach(cat => {
      if (cat.id !== "alle") {
        counts.set(cat.id, DATASETS.filter(d => d.tags.includes(cat.id)).length);
      }
    });
    return counts;
  }, [DATASETS, CATS]);

  return (
    <nav style={{ width: 200, flexShrink: 0 }}>
      <div style={{ position: "sticky", top: 128 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: "#3A6080", letterSpacing: "0.1em", marginBottom: 7, paddingLeft: 4 }}>
          {t.categories}
        </div>
        {CATS.map(cat => {
          const isActive = activeCat === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 10px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                marginBottom: 2,
                transition: "all 0.12s",
                background: isActive ? `${cat.color}18` : "transparent",
                borderLeft: isActive ? `3px solid ${cat.color}` : "3px solid transparent",
              }}
            >
              <span style={{ fontSize: 13, width: 16, textAlign: "center" }}>{cat.icon}</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? cat.color : "#8AA5C0",
                  flex: 1,
                  lineHeight: 1.2,
                }}
              >
                {lang === "no" ? cat.no : cat.en}
              </span>
              <span
                style={{
                  fontSize: 10,
                  padding: "1px 5px",
                  borderRadius: 10,
                  background: isActive ? `${cat.color}20` : "rgba(255,255,255,0.04)",
                  color: isActive ? cat.color : "#3A6080",
                }}
              >
                {countFor.get(cat.id)}
              </span>
            </button>
          );
        })}
        <div style={{ marginTop: 18, padding: "10px 12px", background: "rgba(255,255,255,0.02)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.04)" }}>
          <div style={{ fontSize: 10, color: "#3A6080", marginBottom: 4, fontWeight: 600, letterSpacing: "0.08em" }}>
            {t.source}
          </div>
          <a
            href="https://kartkatalog.geonorge.no"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 11, color: "#5A8FAA", textDecoration: "none", display: "block", marginBottom: 1 }}
          >
            kartkatalog.geonorge.no
          </a>
          <div style={{ fontSize: 10, color: "#2A5070" }}>Kartverket · NVE · DSB · SSB · NGU</div>
        </div>
      </div>
    </nav>
  );
}
