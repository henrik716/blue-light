import React from 'react';
import { createPortal } from 'react-dom';
import { CATS } from '../data/categories.js';
import { T } from '../i18n/translations.js';

function truncate(s, n) {
  if (!s) return "";
  return s.length > n ? s.slice(0, n) + "…" : s;
}

export function DatasetCard({ item, lang, color }) {
  const t = T[lang];
  const title = lang === "no" ? item.no : item.en;
  const owner = lang === "no" ? item.ownerNo : item.ownerEn;
  const [copied, setCopied] = React.useState(false);
  const [showAbstractTooltip, setShowAbstractTooltip] = React.useState(false);
  const [tooltipPos, setTooltipPos] = React.useState(null);
  const abstractRef = React.useRef(null);

  const copyWmsUrl = () => {
    if (item.wmsUrl) {
      navigator.clipboard.writeText(item.wmsUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#0F2040 0%,#0A1628 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderLeft: `3px solid ${color}`,
        borderRadius: 10,
        padding: "15px 17px",
        display: "flex",
        flexDirection: "column",
        gap: 7,
        transition: "transform 0.15s, box-shadow 0.15s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px ${color}33`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
        <h3 style={{ fontFamily: "Syne,sans-serif", fontSize: 13, fontWeight: 700, color: "#E8F4FF", lineHeight: 1.3, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {title}
        </h3>
        <div style={{ display: "flex", gap: 4, flexShrink: 0, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {item.access === "open" && (
            <span style={{ background: "#065F46", color: "#6EE7B7", fontSize: 11, fontWeight: 600, padding: "4px 8px", borderRadius: 20 }}>
              {t.openData}
            </span>
          )}
          {item.access === "restricted" && (
            <span style={{ background: "rgba(251,191,36,0.15)", color: "#FCD34D", fontSize: 11, fontWeight: 600, padding: "4px 8px", borderRadius: 20 }}>
              {t.restricted}
            </span>
          )}
          {item.access === "contact" && (
            <span style={{ background: "rgba(248,113,113,0.15)", color: "#FCA5A5", fontSize: 11, fontWeight: 600, padding: "4px 8px", borderRadius: 20 }}>
              {t.contact}
            </span>
          )}
          {item.wmsUrl && (
            <button
              onClick={copyWmsUrl}
              style={{
                background: copied ? "rgba(74,222,128,0.15)" : "rgba(96,165,250,0.15)",
                color: copied ? "#4EDE80" : "#93C5FD",
                fontSize: 11,
                fontWeight: 600,
                padding: "6px 10px",
                borderRadius: 20,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              title="Copy WMS service URL"
            >
              {copied ? "✓ Copied" : "WMS"}
            </button>
          )}
        </div>
      </div>
      {owner && <span style={{ fontSize: 11, color: "#7BA7C4", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "block" }}>▸ {owner}</span>}
      {(lang === "no" ? item.abstractNo : item.abstractEn) && (
        <div style={{ position: "relative", overflow: "visible" }}>
          <p
            ref={abstractRef}
            style={{ fontSize: 11, color: "#8AACCA", lineHeight: 1.5, margin: "6px 0 0", cursor: "help" }}
            onMouseEnter={() => {
              if (abstractRef.current) {
                const rect = abstractRef.current.getBoundingClientRect();
                setTooltipPos({
                  top: rect.bottom + 6,
                  left: rect.left,
                });
              }
              setShowAbstractTooltip(true);
            }}
            onMouseLeave={() => setShowAbstractTooltip(false)}
          >
            {truncate(lang === "no" ? item.abstractNo : item.abstractEn, 150)}
          </p>
          {showAbstractTooltip && tooltipPos && createPortal(
            <div
              style={{
                position: "fixed",
                top: `${tooltipPos.top}px`,
                left: `${tooltipPos.left}px`,
                background: "#030D1A",
                border: "1px solid rgba(139, 172, 202, 0.4)",
                borderRadius: 8,
                padding: "12px 14px",
                maxWidth: 320,
                maxHeight: "60vh",
                overflow: "auto",
                fontSize: 11,
                color: "#8AACCA",
                lineHeight: 1.6,
                zIndex: 10000,
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.8), 0 0 2px rgba(139, 172, 202, 0.3)",
                animation: "tooltipSlideIn 0.15s ease-out forwards",
                pointerEvents: "auto",
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
              onMouseLeave={() => setShowAbstractTooltip(false)}
            >
              {lang === "no" ? item.abstractNo : item.abstractEn}
            </div>,
            document.body
          )}
        </div>
      )}
      {item.notes && (
        <p style={{ fontSize: 11, color: "#6A90B0", lineHeight: 1.45, fontStyle: "italic" }}>
          {t.notes}: {truncate(item.notes, 100)}
        </p>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 2 }}>
        {item.tags.map(tag => {
          const cat = CATS.find(c => c.id === tag);
          if (!cat) return null;
          return (
            <span key={tag} style={{ fontSize: 10, padding: "1px 7px", borderRadius: 10, background: `${cat.color}18`, color: cat.color, fontWeight: 500 }}>
              {lang === "no" ? cat.no : cat.en}
            </span>
          );
        })}
      </div>
      <div style={{ marginTop: "auto", paddingTop: 4 }}>
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 12, color, textDecoration: "none", padding: "8px 12px", borderRadius: 6, background: `${color}15`, fontWeight: 500, display: "inline-block" }}
            onMouseEnter={e => e.currentTarget.style.background = `${color}30`}
            onMouseLeave={e => e.currentTarget.style.background = `${color}15`}
          >
            {t.catalog}
          </a>
        )}
      </div>
    </div>
  );
}
