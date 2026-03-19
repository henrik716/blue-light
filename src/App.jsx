import { useState, useMemo } from 'react';
import { DATASETS } from './data/datasets.js';
import { CATS } from './data/categories.js';
import { T } from './i18n/translations.js';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { DatasetCard } from './components/DatasetCard.jsx';

export default function App() {
  const [lang, setLang] = useState("no");
  const [activeCat, setActiveCat] = useState("alle");
  const [search, setSearch] = useState("");
  const t = T[lang];

  const items = useMemo(() => {
    let list = activeCat === "alle" ? DATASETS : DATASETS.filter(d => d.tags.includes(activeCat));
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(d =>
        d.no?.toLowerCase().includes(q) ||
        d.en?.toLowerCase().includes(q) ||
        d.ownerNo?.toLowerCase().includes(q) ||
        d.ownerEn?.toLowerCase().includes(q) ||
        d.notes?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCat, search]);

  const activeCatObj = CATS.find(c => c.id === activeCat);

  return (
    <div style={{ minHeight: "100vh", background: "#0A1628" }}>
      <Header lang={lang} setLang={setLang} search={search} setSearch={setSearch} t={t} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "18px 28px", display: "flex", gap: 20 }}>
        <Sidebar activeCat={activeCat} setActiveCat={setActiveCat} lang={lang} t={t} />

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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(285px,1fr))", gap: 12 }}>
              {items.map(item => (
                <DatasetCard key={`${item.url}-${item.no}`} item={item} lang={lang} color={activeCatObj?.color || "#60A5FA"} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
