import { useState, useMemo, useRef, useEffect } from 'react';
import { DATASETS } from './data/datasets.js';
import { CATS } from './data/categories.js';
import { T } from './i18n/translations.js';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { DatasetCard } from './components/DatasetCard.jsx';
import { MapView } from './components/MapView.jsx';

export default function App() {
  const [lang, setLang] = useState("no");
  const [activeCat, setActiveCat] = useState("alle");
  const [search, setSearch] = useState("");
  const [view, setView] = useState("list");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const headerRef = useRef(null);
  const t = T[lang];

  // Set CSS variable for header height on mobile
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-h', `${height}px`);
      }
    };

    updateHeaderHeight();
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const items = useMemo(() => {
    let list = activeCat === "alle" ? DATASETS : DATASETS.filter(d => d.tags.includes(activeCat));
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(d =>
        d.no?.toLowerCase().includes(q) ||
        d.en?.toLowerCase().includes(q) ||
        d.ownerNo?.toLowerCase().includes(q) ||
        d.ownerEn?.toLowerCase().includes(q) ||
        d.notes?.toLowerCase().includes(q) ||
        d.abstractNo?.toLowerCase().includes(q) ||
        d.abstractEn?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCat, search]);

  const activeCatObj = CATS.find(c => c.id === activeCat);

  return (
    <div style={{ minHeight: "100vh", background: "#0A1628" }}>
      <Header
        ref={headerRef}
        lang={lang}
        setLang={setLang}
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
        t={t}
        onMenuClick={() => setSidebarOpen(true)}
      />

      {view === "map" ? (
        <MapView activeCat={activeCat} lang={lang} t={t} search={search} />
      ) : (
        <>
          {/* Mobile sidebar overlay */}
          {sidebarOpen && (
            <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}>
              <div className="sidebar-drawer" onClick={e => e.stopPropagation()}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#3A6080", letterSpacing: "0.1em" }}>
                    {t.categories}
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#60A5FA",
                      cursor: "pointer",
                      fontSize: 20,
                      padding: 0,
                    }}
                  >
                    ×
                  </button>
                </div>
                <Sidebar activeCat={activeCat} setActiveCat={cat => { setActiveCat(cat); setSidebarOpen(false); }} lang={lang} t={t} />
              </div>
            </div>
          )}

          {/* Desktop sidebar + main content */}
          <div className="layout-outer" style={{ maxWidth: 1240, margin: "0 auto", padding: "18px 28px", display: "flex", gap: 20 }}>
            <div className="sidebar-desktop">
              <Sidebar activeCat={activeCat} setActiveCat={setActiveCat} lang={lang} t={t} />
            </div>

            <main style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ fontSize: 12, color: "#5A7EA0" }}>
                {t.showing} <span style={{ color: "#60A5FA", fontWeight: 600 }}>{items.length}</span> {t.datasets}
                {activeCat !== "alle" && (
                  <span style={{ color: activeCatObj?.color, fontWeight: 600 }}>
                    {" "}· {lang === "no" ? activeCatObj?.no : activeCatObj?.en}
                  </span>
                )}
                {search && (
                  <span>
                    {" "}{t.for} "<em>{search}</em>"
                  </span>
                )}
              </div>
            </div>
            {items.length === 0 ? (
              <div style={{ textAlign: "center", padding: "50px 20px", color: "#3A6080" }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>◌</div>
                <div style={{ fontSize: 14, color: "#5A7EA0", marginBottom: 5 }}>{t.noResults}</div>
                <div style={{ fontSize: 12 }}>{t.tryAnother}</div>
              </div>
            ) : (
              <div className="card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(285px,1fr))", gap: 12 }}>
                {items.map(item => (
                  <DatasetCard key={`${item.url}-${item.no}`} item={item} lang={lang} color={activeCatObj?.color || "#60A5FA"} />
                ))}
              </div>
            )}
            </main>
          </div>
        </>
      )}
    </div>
  );
}
