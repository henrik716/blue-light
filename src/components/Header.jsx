import { forwardRef } from 'react';
import { DATASETS } from '../data/datasets.js';

export const Header = forwardRef(function Header({ lang, setLang, search, setSearch, view, setView, t, onMenuClick }, ref) {
  return (
    <header
      ref={ref}
      style={{
        background: "linear-gradient(180deg,#071020 0%,#0A1628 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "20px 28px 16px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(12px)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 3 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "linear-gradient(135deg,#1D4ED8,#DC2626)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                }}
              >
                ⚡
              </div>
              <h1
                style={{
                  fontFamily: "Syne,sans-serif",
                  fontWeight: 800,
                  fontSize: 19,
                  background: "linear-gradient(135deg,#60A5FA,#E8F0FA 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t.appTitle}
              </h1>
            </div>
            <p style={{ fontSize: 12, color: "#5A7EA0" }}>{t.appSub}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={onMenuClick}
              className="mobile-cat-bar"
              style={{
                background: "none",
                border: "none",
                color: "#60A5FA",
                cursor: "pointer",
                fontSize: 20,
                padding: "6px 8px",
              }}
              title="Open categories"
            >
              ☰
            </button>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "Syne,sans-serif", fontSize: 24, fontWeight: 800, color: "#60A5FA", lineHeight: 1 }}>
                {DATASETS.length}
              </div>
              <div style={{ fontSize: 10, color: "#5A7EA0" }}>{t.datasets}</div>
            </div>
            <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, overflow: "hidden" }}>
              {[
                { id: "list", icon: "☰", title: "List view" },
                { id: "map", icon: "🗺", title: "Map view" },
              ].map(v => (
                <button
                  key={v.id}
                  onClick={() => setView(v.id)}
                  style={{
                    padding: "6px 12px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 14,
                    background: view === v.id ? "rgba(96,165,250,0.2)" : "transparent",
                    color: view === v.id ? "#60A5FA" : "#5A7EA0",
                    transition: "all 0.15s",
                  }}
                  title={v.title}
                >
                  {v.icon}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, overflow: "hidden" }}>
              {["no", "en"].map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    padding: "6px 14px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 12,
                    fontWeight: 600,
                    background: lang === l ? "rgba(96,165,250,0.2)" : "transparent",
                    color: lang === l ? "#60A5FA" : "#5A7EA0",
                    fontFamily: "IBM Plex Sans, sans-serif",
                    transition: "all 0.15s",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#3A6080", fontSize: 13, pointerEvents: "none" }}>
            ⌕
          </span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={t.search}
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 8,
              padding: "9px 34px 9px 32px",
              color: "#E8F0FA",
              fontSize: 16,
              outline: "none",
              fontFamily: "IBM Plex Sans,sans-serif",
            }}
            onFocus={e => (e.target.style.borderColor = "rgba(96,165,250,0.5)")}
            onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "#5A7EA0",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              ×
            </button>
          )}
        </div>
      </div>
    </header>
  );
});
