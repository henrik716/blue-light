import { useState, useMemo } from "react";

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0A1628; color: #E8F0FA; font-family: 'IBM Plex Sans', sans-serif; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #0A1628; }
  ::-webkit-scrollbar-thumb { background: #1E3A5F; border-radius: 3px; }
`;

const T = {
  no: {
    appTitle: "Geonorge · Blålysetatene",
    appSub: "Geografiske datasett for politi, brannvesen og helse",
    search: "Søk etter datasett, etat eller tema…",
    categories: "KATEGORIER",
    datasets: "datasett",
    showing: "Viser",
    for: "for",
    source: "DATAKILDE",
    openData: "ÅPEN",
    restricted: "Pålogging",
    contact: "Kontakt",
    catalog: "Se i kartkatalog →",
    noResults: "Ingen datasett funnet",
    tryAnother: "Prøv et annet søkeord",
    notes: "Merknad",
  },
  en: {
    appTitle: "Geonorge · Blue Light Services",
    appSub: "Geospatial datasets for police, fire and health services",
    search: "Search by dataset name, organisation or theme…",
    categories: "CATEGORIES",
    datasets: "datasets",
    showing: "Showing",
    for: "for",
    source: "DATA SOURCE",
    openData: "OPEN",
    restricted: "Login req.",
    contact: "Contact",
    catalog: "View in catalogue →",
    noResults: "No datasets found",
    tryAnother: "Try a different search term",
    notes: "Note",
  }
};

const CATS = [
  { id: "alle", no: "Alle", en: "All", icon: "◈", color: "#60A5FA" },
  { id: "basemap", no: "Bakgrunnskart", en: "Basemap", icon: "🗺", color: "#60A5FA" },
  { id: "politi", no: "Politi", en: "Police", icon: "👮", color: "#A78BFA" },
  { id: "brann", no: "Brann", en: "Fire", icon: "🔥", color: "#F87171" },
  { id: "helse", no: "AMK / Helse", en: "AMK / Health", icon: "🏥", color: "#34D399" },
  { id: "naturfare", no: "Naturfare", en: "Natural Hazard", icon: "⛰", color: "#FBBF24" },
  { id: "forurensning", no: "Forurensning", en: "Pollution", icon: "☣", color: "#6EE7B7" },
  { id: "brann_ind", no: "Brann & Industri", en: "Fire & Industry", icon: "🏭", color: "#F87171" },
  { id: "transport", no: "Samferdselsulykke", en: "Transport Accident", icon: "🚗", color: "#38BDF8" },
  { id: "forsyning", no: "Forsyningssvikt", en: "Supply Failure", icon: "⚡", color: "#FBBF24" },
  { id: "sykdom", no: "Sykdomsutbrudd", en: "Disease Outbreak", icon: "🦠", color: "#34D399" },
  { id: "befolket", no: "Befolkede områder", en: "Populated Areas", icon: "🏙", color: "#A78BFA" },
];

const DATASETS = [
  {
    "no": "Administrative enheter fylker",
    "en": "Administrative units counties",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/administrative-enheter-fylker/6093c8a8-fa80-11e6-bc64-92361f002671",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "befolket"
    ]
  },
  {
    "no": "Administrative enheter kommuner",
    "en": "Administrative units municipalities",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/administrative-enheter-kommuner/041f1e6e-bdbc-4091-b48f-8a5990f3cc5b",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "befolket"
    ]
  },
  {
    "no": "Arealressurskart - AR50 - Arealtyper",
    "en": "AR50 (Land Resource Map 1:50 000) - Land types",
    "ownerNo": "Norsk institutt for bioøkonomi",
    "ownerEn": "Norwegian Institute of Bioeconomy Research",
    "url": "https://kartkatalog.geonorge.no/metadata/arealressurskart-ar50-arealtyper/41f6b000-c394-41c5-8ebb-07a0a3ec914f",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "AR50 can replace FKB-AR5",
    "tags": [
      "basemap"
    ]
  },
  {
    "no": "Arealressurskart - FKB-AR5",
    "en": "FKB-AR5 (Land resource map 1:5.000)",
    "ownerNo": "Norsk institutt for bioøkonomi",
    "ownerEn": "Norwegian Institute of Bioeconomy Research",
    "url": "https://kartkatalog.geonorge.no/metadata/arealressurskart-fkb-ar5/243751e8-5803-4627-898c-d0ddabe82056",
    "access": "restricted",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap"
    ]
  },
  {
    "no": "Barnehager",
    "en": "Nurseries",
    "ownerNo": "Utdanningsdirektoratet",
    "ownerEn": "Norwegian Directorate for Education and Training",
    "url": "https://kartkatalog.geonorge.no/metadata/barnehager/e229a364-0caa-4a24-8dbe-225b3d83e075",
    "access": "open",
    "proto": "WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Befolkning på grunnkretsnivå",
    "en": "Population by Basic Statistical Unit",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/befolkning-paa-grunnkretsniv/7eb907de-fdaa-4442-a8eb-e4bd06da9ca8",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "befolket"
    ]
  },
  {
    "no": "Befolkning på rutenett 1000 m",
    "en": "Population Grid 1000 m",
    "ownerNo": "SSB",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/befolkning-paa-rutenett-1000-m/38b714b5-6251-41df-8dd9-f0cde540ac03",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "Last year's figures. Contact data owner for updated figures",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Befolkning på rutenett 250 m",
    "en": "Population Grid 250 m",
    "ownerNo": "SSB",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/befolkning-paa-rutenett-250-m/0c0ad0ce-55e8-4d73-9c12-0eb0e2454acb",
    "access": "open",
    "proto": "WFS",
    "notes": "Last year's figures. Contact data owner for updated figures",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Boligstatistikk på rutenett",
    "en": "Residential Statistics on Grid",
    "ownerNo": "SSB",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/boligstatistikk-paa-rutenett/8dc5008b-0c61-44ca-a173-3470f5fa962f",
    "access": "open",
    "proto": "WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "brann_ind",
      "befolket"
    ]
  },
  {
    "no": "Brannalarmsentraler",
    "en": "Fire services' control rooms",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/brannalarmsentraler/c4436a5f-1e22-461a-8209-786f7052acb5",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Brannstasjoner",
    "en": "Fire stations",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/brannstasjoner/0ccce81d-a72e-46ca-8bd9-57b362376485",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "brann_ind",
      "befolket"
    ]
  },
  {
    "no": "Bygninger på rutenett",
    "en": "Buildings on Grid",
    "ownerNo": "SSB",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/bygninger-paa-rutenett/2916e7b3-c7bd-471b-abf1-8297ddbd24b0",
    "access": "open",
    "proto": "WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "brann_ind",
      "befolket"
    ]
  },
  {
    "no": "Digitale ortofoto",
    "en": "Digital Orthoimagery",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/digitale-ortofoto/d5b180dd-0cef-4c4a-9174-ba5af69c3551",
    "access": "restricted",
    "proto": "WMS/WMTS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "befolket"
    ]
  },
  {
    "no": "DTM 10 Terrengmodell (UTM33)",
    "en": "Height DTM 10",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/dtm-10-terrengmodell-utm33/dddbb667-1303-4ac5-8640-7ec04c0e3918",
    "access": "open",
    "proto": "WMS",
    "notes": "Terrain model for mainland Norway",
    "tags": [
      "basemap",
      "naturfare",
      "brann_ind"
    ]
  },
  {
    "no": "Finnsenderen.no",
    "en": "Finnsenderen.no",
    "ownerNo": "Nasjonal kommunikasjonsmyndighet",
    "ownerEn": "Norwegian Communications Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/finnsenderenno/bd02a3e6-893b-4721-b146-9bc3b3fbd5a4",
    "access": "open",
    "proto": "",
    "notes": "Search service for mobile transmitters",
    "tags": [
      "basemap",
      "politi",
      "brann_ind",
      "transport",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "FKB-arealbruk",
    "en": "FKB Land Use",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/fkb-arealbruk/87b31015-a3de-4540-9b8b-cb1bf4e1cb3a",
    "access": "restricted",
    "proto": "WMS",
    "notes": "Low zoom level",
    "tags": [
      "basemap",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal"
    ]
  },
  {
    "no": "FKB-bane",
    "en": "FKB Rail",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/fkb-bane/3165138f-1461-44fe-8b10-eac44e08a10a",
    "access": "restricted",
    "proto": "WMS",
    "notes": "Low zoom level",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "FKB-BygnAnlegg",
    "en": "FKB Building Facilities",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/fkb-bygnanlegg/ede5ffb2-ee2a-44a3-852d-369a14d97f2e",
    "access": "restricted",
    "proto": "WMS",
    "notes": "Low zoom level",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "FKB-Bygning",
    "en": "FKB Buildings",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/fkb-bygning/8b4304ea-4fb0-479c-a24d-fa225e2c6e97",
    "access": "restricted",
    "proto": "WMS",
    "notes": "Low zoom level",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "FKB-Grønnstruktur",
    "en": "FKB Green Structure",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/fkb-groennstruktur/86d6201a-4e0b-4f61-a1dc-c94164cfd160",
    "access": "restricted",
    "proto": "WMS",
    "notes": "Low zoom level",
    "tags": [
      "basemap",
      "politi"
    ]
  },
  {
    "no": "FKB-Høydekurve",
    "en": "FKB Contour Lines",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/fkb-hoeydekurve/b49478fd-038e-4c2c-ae28-dda1958a8048",
    "access": "restricted",
    "proto": "WMS",
    "notes": "Low zoom level",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal"
    ]
  },
  {
    "no": "FKB-Ledning",
    "en": "FKB Utility Lines",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/fkb-ledning/6e05aefb-f90e-4c7d-9fb9-299574d0bbf6",
    "access": "restricted",
    "proto": "WMS",
    "notes": "Low zoom level",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal"
    ]
  },
  {
    "no": "FKB-Lufthavn",
    "en": "FKB Airport",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/fkb-lufthavn/23dfcc33-fb04-4898-aa88-68b49c4bfea7",
    "access": "restricted",
    "proto": "WMS",
    "notes": "Low zoom level",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "FKB-Naturinfo",
    "en": "FKB Nature Information",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/fkb-naturinfo/aa3c01f3-0678-470d-b03b-33085a7bae28",
    "access": "restricted",
    "proto": "WMS",
    "notes": "Low zoom level",
    "tags": [
      "basemap",
      "politi"
    ]
  },
  {
    "no": "FKB-Tiltak",
    "en": "FKB Construction Measures",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/fkb-tiltak/8944603c-9414-43a7-9421-9a1de9850a96",
    "access": "restricted",
    "proto": "WMS",
    "notes": "Low zoom level",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal"
    ]
  },
  {
    "no": "FKB-TraktorvegSti",
    "en": "FKB Tractor Roads and Paths",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/fkb-traktorvegsti/cc3a2d98-52ac-4699-9947-ed0625903de4",
    "access": "restricted",
    "proto": "WMS",
    "notes": "Low zoom level",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "FKB-Vann",
    "en": "FKB Water",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/fkb-vann/595e47d9-d201-479c-a77d-cbc1f573a76b",
    "access": "restricted",
    "proto": "WMS",
    "notes": "Low zoom level",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal"
    ]
  },
  {
    "no": "FKB-Veg",
    "en": "FKB Roads",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/fkb-veg/4920b452-75cc-45f2-964c-3378204c3517",
    "access": "restricted",
    "proto": "WMS",
    "notes": "Low zoom level",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Fritidsbyggområder",
    "en": "Recreational Building Areas",
    "ownerNo": "SSB",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/fritidsbyggomraader/a2f2e360-b822-4b5b-9d3b-972f58a872ba",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "befolket"
    ]
  },
  {
    "no": "Grunnskoler",
    "en": "Primary and secondary schools",
    "ownerNo": "Utdanningsdirektoratet",
    "ownerEn": "Norwegian Directorate for Education and Training",
    "url": "https://kartkatalog.geonorge.no/metadata/grunnskoler/db4b872f-264d-434c-9574-57232f1e90d2",
    "access": "open",
    "proto": "WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Hovedled og biled",
    "en": "Maritime transport - Fairways",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/hovedled-og-biled/8ff1538a-a93c-4391-8d6f-3555fc37819c",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal"
    ]
  },
  {
    "no": "Høydedata - laser",
    "en": "Elevation Data - Laser",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/hoeydedata-laser/f297e948-8a34-4e6c-9740-54b3a657f8d5",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "Several versions exist",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "brann_ind",
      "befolket"
    ]
  },
  {
    "no": "Interkommunale brannvesen",
    "en": "Intermunicipal fire services",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/interkommunale-brannvesen/5bbce535-f909-44b8-b89f-1c395dc92598",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "J50 Kartdata",
    "en": "J50 Map data",
    "ownerNo": "Norsk polarinstitutt",
    "ownerEn": "Norwegian Polar Institute",
    "url": "https://kartkatalog.geonorge.no/metadata/j50-kartdata/3832caa3-6e5d-450c-9041-35f68852b0c9",
    "access": "open",
    "proto": "",
    "notes": "Map Data Jan Mayen",
    "tags": [
      "basemap",
      "brann_ind",
      "internasjonal"
    ]
  },
  {
    "no": "Kommuneplaner",
    "en": "Municipal Master Plans",
    "ownerNo": "Direktoratet for byggkvalitet",
    "ownerEn": "Norwegian Building Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/kommuneplaner-landsdekkende-kopi/41435fda-93ba-48a8-bd56-79a9287b6dad",
    "access": "restricted",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "basemap"
    ]
  },
  {
    "no": "Matrikkelen - Adresse Leilighetsnivå",
    "en": "Cadastre – Address apartment level",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/matrikkelen-adresse-leilighetsnivaa/365b0591-b536-42a6-a20d-22e404fbfe55",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Matrikkelen - bygningspunkt",
    "en": "Cadastre – Building points",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/matrikkelen-bygningspunkt/24d7e9d1-87f6-45a0-b38e-3447f8d7f9a1",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Matrikkelen - eiendomskart Teig",
    "en": "Cadastre - property",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/matrikkelen-eiendomskart-teig/74340c24-1c8a-4454-b813-bfe498e80f16",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Matrikkelen, Norges offisielle eiendomsregister",
    "en": "The Cadastre, Norway's official property register",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/e77e6fdc-591d-4b1b-91b2-bd9d13fb33b7",
    "access": "restricted",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Matrikkelkart WMS",
    "en": "Cadastre Map WMS",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/matrikkelkart-wms/30dda4c6-2cba-4378-b2e7-26f644df9d99",
    "access": "open",
    "proto": "WMS",
    "notes": "Address, building points and parcel",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "N20 Kartdata",
    "en": "N20 Map Data",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/n20-kartdata/c9e53371-c296-4631-a08d-2e7248a81757",
    "access": "restricted",
    "proto": "WMS",
    "notes": "FKB WMS",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "N250 Kartdata",
    "en": "N250 Map Data",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/n250-kartdata/442cae64-b447-478d-b384-545bc1d9ab48",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "N250 Raster",
    "en": "N250 Raster",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/n250-raster/d2ae29bd-0692-40de-a173-833afcddfe22",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "befolket"
    ]
  },
  {
    "no": "N5 Kartdata",
    "en": "N5 Map Data",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/n5-kartdata/6bb353c3-2b21-42fe-b296-31e60f64f95d",
    "access": "restricted",
    "proto": "WMS",
    "notes": "FKB WMS",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "N50 Kartdata",
    "en": "N50 Map Data",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/n50-kartdata/ea192681-d039-42ec-b1bc-f3ce04c189ac",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "N50 Raster (UTM33) - Rutevis",
    "en": "N50 Raster (UTM33) - Map tiles",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/n50-raster-utm33-rutevis/1a7d4919-fc5d-4278-9ae9-45ee23f26808",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "befolket"
    ]
  },
  {
    "no": "N500 Kartdata",
    "en": "N500 Map Data",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/n500-kartdata/58e0dbf8-0d47-47c8-8086-107a3fa2dfa4",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "N500 Raster",
    "en": "N500 Raster",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/n500-raster/b466d866-8e32-438b-bb58-80e52fe85ada",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "befolket"
    ]
  },
  {
    "no": "N5000 Kartdata",
    "en": "N5000 Map Data",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/n5000-kartdata/c777d53d-8916-4d9d-bae4-6d5140e0c569",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Nasjonale grenser",
    "en": "Norwegian National Boarders",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/nasjonale-grenser/8f1a7a13-095e-43f8-8e97-81ed57be40ad",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "basemap",
      "politi"
    ]
  },
  {
    "no": "Norge i bilder",
    "en": "Norge i bilder",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/norge-i-bilder/e7cd5f9b-20e1-4f59-b379-64828cd38062",
    "access": "restricted",
    "proto": "Nettside",
    "notes": "Background map",
    "tags": [
      "basemap",
      "politi",
      "befolket"
    ]
  },
  {
    "no": "Norges maritime grenser",
    "en": "Norway's maritime boundaries",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/norges-maritime-grenser/e106adf4-c9d8-4fce-a9b5-7886a4126d23",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "Contains several relevant maritime datasets",
    "tags": [
      "basemap",
      "politi",
      "brann_ind"
    ]
  },
  {
    "no": "NVDB rutedatasett 2.0",
    "en": "NVDB Route Dataset 2.0",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/nvdb-rutedatasett-20/8c971626-e007-4b7d-9db1-425a72174ce7",
    "access": "open",
    "proto": "",
    "notes": "Navigation and route planning",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "NVDB Ruteplan nettverksdatasett",
    "en": "National roads database - road network for routing",
    "ownerNo": "Statens vegvesen",
    "ownerEn": "Norwegian Public Roads Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/nvdb-ruteplan-nettverksdatasett/8d0f9066-34f9-4423-be12-8e8523089313",
    "access": "open",
    "proto": "",
    "notes": "Route planning for cars",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "NVDB Vegnett Pluss",
    "en": "NVDB Road Network Plus",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/nvdb-vegnett-pluss/97e6a869-8dd4-4379-bf39-f7d7dbf94863",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "transport",
      "befolket"
    ]
  },
  {
    "no": "Politisoner og -distrikter",
    "en": "Police Zones and Districts",
    "ownerNo": "Politi og lensmannsetaten",
    "ownerEn": "The police",
    "url": "https://kartkatalog.geonorge.no/metadata/politisoner-og--distrikter/cf2f458c-8648-45cd-b106-d63a72686f95",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Postnummerområder",
    "en": "Postal districts",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/postnummeromraader/462a5297-33ef-438a-82a5-07fff5799be3?search=postnummer",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "befolket"
    ]
  },
  {
    "no": "Reguleringsplaner (landsdekkende kopi)",
    "en": "Municipal Zoning Plans (Nationwide Copy)",
    "ownerNo": "Direktoratet for byggkvalitet",
    "ownerEn": "Norwegian Building Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/reguleringsplaner-landsdekkende-kopi/dac27348-5c2e-4a6a-9497-c4c792108cae",
    "access": "restricted",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "basemap"
    ]
  },
  {
    "no": "S100 Kartdata",
    "en": "S100 Map data",
    "ownerNo": "Norsk polarinstitutt",
    "ownerEn": "Norwegian Polar Institute",
    "url": "https://kartkatalog.geonorge.no/metadata/s100-kartdata/bd6050e8-7182-459b-9989-66c4ecbae874",
    "access": "open",
    "proto": "WMS",
    "notes": "Map data for Svalbard",
    "tags": [
      "basemap",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "befolket"
    ]
  },
  {
    "no": "S250 Kartdata",
    "en": "S250 Map data",
    "ownerNo": "Norsk polarinstitutt",
    "ownerEn": "Norwegian Polar Institute",
    "url": "https://kartkatalog.geonorge.no/metadata/s250-kartdata/4bccbc7b-f808-4e12-bf5f-38ad496fe9ca",
    "access": "open",
    "proto": "WMS",
    "notes": "Map data for Svalbard",
    "tags": [
      "basemap",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "befolket"
    ]
  },
  {
    "no": "Sentrumssoner",
    "en": "Central Area Zones",
    "ownerNo": "SSB",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/sentrumssoner/b7b6a84e-de26-4c26-a6fb-81140c517b5b",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "befolket"
    ]
  },
  {
    "no": "Sivilforsvarsdistrikter",
    "en": "Civil Defence districts",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/sivilforsvarsdistrikter/44ecfa66-3d7e-4ace-a10a-fccb6961301c",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Stedsnavn",
    "en": "Names from the Central Register of Place Names (SSR)",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/stedsnavn/30caed2f-454e-44be-b5cc-26bb5c0110ca",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Tettsteder",
    "en": "Urban Settlements",
    "ownerNo": "SSB",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/tettsteder/173f4a15-dead-4f82-b92e-f37396b72cea",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "befolket"
    ]
  },
  {
    "no": "Traktorveg og skogsbilveg WMS",
    "en": "Tractor Roads and Forest Roads (WMS)",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/traktorveg-og-skogsbilveg-wms/e45aea66-5d98-4703-8026-692c782eb5b0",
    "access": "open",
    "proto": "WMS",
    "notes": "Alternative to FKB Tractor Roads and Paths + forest roads from NVDB Vegnett Pluss",
    "tags": [
      "basemap",
      "politi",
      "transport"
    ]
  },
  {
    "no": "Vegkart",
    "en": "Roadmap",
    "ownerNo": "Statens vegvesen",
    "ownerEn": "Norwegian Public Roads Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/vegkart/d599a118-4072-49e7-86b8-e18070188374",
    "access": "open",
    "proto": "",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "transport",
      "befolket"
    ]
  },
  {
    "no": "Videregående skoler",
    "en": "Secondary schools",
    "ownerNo": "Utdanningsdirektoratet",
    "ownerEn": "Norwegian Directorate for Education and Training",
    "url": "https://kartkatalog.geonorge.no/metadata/videregaaende-skoler/c8acfd4f-c285-45a6-9a9b-3ab8d7d3af19",
    "access": "open",
    "proto": "WFS",
    "notes": "",
    "tags": [
      "basemap",
      "politi",
      "naturfare",
      "brann_ind",
      "sykdom",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "AIS Trafikktetthetsrutenett",
    "en": "AIS Traffic Density Grid",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/ais-trafikktetthetsrutenett/90f2e393-c145-4039-b36b-36deb335b905",
    "access": "open",
    "proto": "WMS",
    "notes": "Traffic density for marine vessels",
    "tags": [
      "brann_ind",
      "transport",
      "internasjonal"
    ]
  },
  {
    "no": "Aktsomhetskart for jord- og flomskred",
    "en": "Debris slide and debris flow - rough susceptibility zones",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/aktsomhetskart-for-jord--og-flomskred/30e1883e-70e9-4510-9e97-00edbdcddc02",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "politi",
      "naturfare"
    ]
  },
  {
    "no": "Aktsomhetskart for kvikkleireskred",
    "en": "Quick Clay Landslide Susceptibility",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/aktsomhetskart-for-kvikkleireskred/dabd2a2c-36d5-4ed7-a4c9-d49808a2b848",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "politi",
      "naturfare"
    ]
  },
  {
    "no": "Aktsomhetskart for snøskred",
    "en": "Snow Avalanche Susceptibility",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/aktsomhetskart-for-snoeskred/54ada9d8-e6fc-48d6-82b0-5477166a4aaa",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "politi",
      "naturfare"
    ]
  },
  {
    "no": "Aktsomhetskart svakhetssoner i fjell",
    "en": "Rock Weakness Zones Susceptibility",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/aktsomhetskart-svakhetssoner-i-fjell/71240e94-f915-4da0-9225-7840625b6a17",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "politi",
      "naturfare"
    ]
  },
  {
    "no": "Anlegg med farlig stoff",
    "en": "Hazardous substances",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/anlegg-med-farlig-stoff/12fa3360-ce91-4f02-82c8-22ff85cf0c67",
    "access": "restricted",
    "proto": "",
    "notes": "",
    "tags": [
      "politi",
      "forurensning",
      "brann_ind",
      "befolket"
    ]
  },
  {
    "no": "Arter funksjonsområde",
    "en": "Species Functional Areas",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/arter-funksjonsomraader/49c3c642-87d5-480a-bd67-53a8fe6732b8",
    "access": "open",
    "proto": "WMS",
    "notes": "Wildlife - grazing areas, habitats, nesting areas",
    "tags": [
      "forsyning",
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Automatisk identifikasjonssytem (AIS) - Shipsposisjoner - nedlastning - 12 nm fra grunnlinja",
    "en": "Automatic identification system (AIS) - Marine traffic - download for Norway",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/automatisk-identifikasjonssystem-ais-shipsposisjoner-nedlasting-12nm-fra-grunnlinja/7997fd76-83f9-4e94-bfe7-f4677a6cd787",
    "access": "open",
    "proto": "API",
    "notes": "",
    "tags": [
      "forurensning",
      "brann_ind",
      "transport",
      "internasjonal"
    ]
  },
  {
    "no": "Avløpsanlegg",
    "en": "Wastewater treatment locations WMS",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/avloepsanlegg/276db913-395d-4867-9717-eb86636806d9",
    "access": "open",
    "proto": "WMS",
    "notes": "Discharge of municipal wastewater",
    "tags": [
      "forsyning",
      "forurensning"
    ]
  },
  {
    "no": "Barenswatch WMS",
    "en": "Barenswatch WMS",
    "ownerNo": "Barentswatch",
    "ownerEn": "Barentswatch",
    "url": "https://kartkatalog.geonorge.no/metadata/barentswatch-wms/270f936d-ebed-42b0-a127-545383d773fc",
    "access": "open",
    "proto": "WMS",
    "notes": "Display of operational and statistical data on fisheries, aquaculture, wave and current forecasts",
    "tags": [
      "politi",
      "naturfare",
      "brann_ind",
      "transport",
      "internasjonal"
    ]
  },
  {
    "no": "Barmarksløyper i Finnmark",
    "en": "Motorized off-road trails",
    "ownerNo": "Statsforvalteren",
    "ownerEn": "County Governor",
    "url": "https://kartkatalog.geonorge.no/metadata/barmarksloeyper-i-finnmark/d80faca7-2a0d-47de-b58b-5007a2afdc74",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "politi",
      "naturfare",
      "transport"
    ]
  },
  {
    "no": "Barnetråkk - fullstendig",
    "en": "Play areas",
    "ownerNo": "Universitetet i Bergen",
    "ownerEn": "University of Bergen",
    "url": "https://kartkatalog.geonorge.no/metadata/barnetraakk-fullstendig/3b1cbed1-5537-4f61-90df-3b396c656813",
    "access": "restricted",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "befolket"
    ]
  },
  {
    "no": "Bedrifter på rutenett",
    "en": "Businesses in Grid Cells",
    "ownerNo": "SSB",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/bedrifter-paa-rutenett/7dcf4a32-b150-48f6-bae6-f8a25fab300c",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "politi",
      "brann_ind",
      "befolket"
    ]
  },
  {
    "no": "Beredskapsdepoter",
    "en": "Pollution emerency response depots",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/beredskapsdepoter/e2475b7c-798b-4e5f-bd0e-a5fb9b0ad3b0",
    "access": "open",
    "proto": "WMS",
    "notes": "Shows where the national oil spill response depots are located",
    "tags": [
      "politi",
      "naturfare",
      "forurensning",
      "brann_ind"
    ]
  },
  {
    "no": "Berggrunn N50",
    "en": "Bedrock, scale 1:50,000",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/berggrunn-n50/a5c76d05-33bd-4a1d-b28b-81575092e468",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "naturfare",
      "forsyning"
    ]
  },
  {
    "no": "Bølgevarsel - Kryssende bølger",
    "en": "Waveforecast - Crossing waves",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/boelgevarsel-kryssende-blger/8075102b-01e2-47ac-b885-f5f0ff193203",
    "access": "open",
    "proto": "PNG",
    "notes": "",
    "tags": [
      "naturfare",
      "transport"
    ]
  },
  {
    "no": "Bølgevarsel - punkt",
    "en": "Waveforecast - Point",
    "ownerNo": "Barentswatch",
    "ownerEn": "Barentswatch",
    "url": "https://kartkatalog.geonorge.no/metadata/boelgevarsel-punkt/d99fb1fc-ed98-42ab-92d3-9c382c70ca33",
    "access": "open",
    "proto": "API",
    "notes": "",
    "tags": [
      "naturfare"
    ]
  },
  {
    "no": "Dam",
    "en": "Hydrology - dams",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/dam/8c906c83-5192-4c2b-86ca-0d85759d37b8",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "naturfare",
      "brann_ind"
    ]
  },
  {
    "no": "Delfelt vannkraft",
    "en": "Catchment areas - hydropower",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/delfelt-vannkraft/220f22c9-d415-4b20-bd0c-c3842be4874e",
    "access": "open",
    "proto": "WMS",
    "notes": "Catchment areas that drain to water intakes for hydropower production",
    "tags": [
      "forsyning"
    ]
  },
  {
    "no": "DOK fullstendighetsdekningskart",
    "en": "DOK Completeness Map",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/dok-fullstendighetdekningskart/5acae376-a6ed-46eb-880a-64ea27e08cef",
    "access": "open",
    "proto": "",
    "notes": "Under development",
    "tags": []
  },
  {
    "no": "Dreneringslinjer",
    "en": "Drainage Lines",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/dreneringslinjer/52ae2a6f-cb80-40c2-823c-fa7b928fad15",
    "access": "open",
    "proto": "",
    "notes": "Caution related to stormwater",
    "tags": [
      "naturfare"
    ]
  },
  {
    "no": "Drikkevann - inntakspunkt",
    "en": "Drinking Water – Intake Point",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/drikkevann-inntakspunkter/2303ad8a-eee1-446e-824f-13a46004a8f2",
    "access": "open",
    "proto": "WMS",
    "notes": "Data hidden at low zoom level",
    "tags": [
      "politi",
      "forsyning",
      "forurensning",
      "sykdom",
      "befolket"
    ]
  },
  {
    "no": "Dybdekart",
    "en": "Lake bathymetry",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/dybdekart/9285f93e-d6d7-498c-a289-35700d795fc1",
    "access": "open",
    "proto": "WMS",
    "notes": "Lake",
    "tags": [
      "naturfare",
      "forurensning",
      "transport"
    ]
  },
  {
    "no": "Dyrehold med produksjonsdyr",
    "en": "Livestock Holdings (Production Animals)",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/dyrehold-med-produksjonsdyr/e7459ac1-1f3d-4210-ac3e-c7ce68001190",
    "access": "open",
    "proto": "WMS",
    "notes": "Shared WMS",
    "tags": [
      "forsyning",
      "sykdom"
    ]
  },
  {
    "no": "Dyrkbar jord",
    "en": "Arable land (1:5.000)",
    "ownerNo": "Norsk institutt for bioøkonomi",
    "ownerEn": "Norwegian Institute of Bioeconomy Research",
    "url": "https://kartkatalog.geonorge.no/metadata/dyrkbar-jord/8252baea-5bad-428b-8f18-fe236fa4ced6",
    "access": "restricted",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "forsyning",
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Eksplosivanlegg",
    "en": "Explosive substances",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/eksplosivanlegg/ceef6c79-27ea-4e3e-895d-33d2a64763bf",
    "access": "restricted",
    "proto": "",
    "notes": "",
    "tags": [
      "politi",
      "brann_ind",
      "befolket"
    ]
  },
  {
    "no": "ELVIS elvenett",
    "en": "Hydrology - river network",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/elvis-elvenett/3f95a194-0968-4457-a500-912958de3d39",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "naturfare",
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Elvis hovedelv",
    "en": "Hydrology - river network - main",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/elvis-hovedelv/b2300e43-2a61-4e77-ab97-27567b2295e6",
    "access": "open",
    "proto": "WMS",
    "notes": "Main river system",
    "tags": [
      "naturfare",
      "forurensning",
      "brann_ind"
    ]
  },
  {
    "no": "Faresonekart for skred i bratt terreng",
    "en": "Hazard Zones for Steep-Terrain Landslides",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/faresonekart-for-skred-i-bratt-terreng/d4a61153-3a21-4593-900c-1587b5b1c42d",
    "access": "open",
    "proto": "WMS",
    "notes": "Replaces the dataset “Landslide Hazard Zones” – available for download from mid‑February 2026",
    "tags": [
      "politi",
      "naturfare"
    ]
  },
  {
    "no": "Flom aktsomhetsområder",
    "en": "Flooding - rough susceptiblitity zones",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/flom-aktsomhetsomraader/60c5024f-bf93-4d7a-888a-5fe001427195",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "politi",
      "naturfare"
    ]
  },
  {
    "no": "Flomsoner",
    "en": "Flood hazard map",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/flomsoner/e95008fc-0945-4d66-8bc9-e50ab3f50401",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "politi",
      "naturfare"
    ]
  },
  {
    "no": "Forurenset grunn",
    "en": "Contaminated sites",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/forurenset-grunn/e48e71ac-16fc-4e47-9e7f-c0a4a4bbfad0",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "forurensning",
      "brann_ind"
    ]
  },
  {
    "no": "Gravbarhet",
    "en": "Diggabilitiy",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/gravbarhet/6f383993-592d-4c1f-bcaf-e4c905af6ddb",
    "access": "open",
    "proto": "WMS",
    "notes": "Stability of the seabed",
    "tags": [
      "naturfare"
    ]
  },
  {
    "no": "Grunnforurensning WMS",
    "en": "Contaminated sites 2 WMS",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/grunnforurensning-2-wms/9f51ffea-549b-48a7-9d6e-19cf7c84cc40",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "forurensning"
    ]
  },
  {
    "no": "Grunnvann (Granada) WMS",
    "en": "Granada WMS",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/grunnvann-granada-wms/4a0f9676-7cd0-4555-a8f3-763bb769d5d4",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "forsyning",
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Grunnvannsborehull",
    "en": "Groundwater borehole",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/grunnvannsborehull/82cd33ef-52dd-4c83-b2d6-e55a0941b33b",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "forsyning"
    ]
  },
  {
    "no": "Hav og is - Iskart (shapefil)",
    "en": "Sea and Ice – Ice Map (Shapefile)",
    "ownerNo": "Meteorologisk institutt",
    "ownerEn": "Norwegian Meteorological Institute",
    "url": "https://kartkatalog.geonorge.no/metadata/hav-og-is-iskart-shapefil/79013154-92ee-4647-b160-925cbc148601",
    "access": "open",
    "proto": "",
    "notes": "Ice map of the Norwegian part of the Arctic",
    "tags": [
      "naturfare",
      "transport"
    ]
  },
  {
    "no": "Hav og is; Bølgevarsler",
    "en": "Sea surface forecast",
    "ownerNo": "Meteorologisk institutt",
    "ownerEn": "Norwegian Meteorological Institute",
    "url": "https://kartkatalog.geonorge.no/metadata/hav-og-is-boelgevarsler/73bc1af3-5a14-4480-9b9c-2b7edda20fef",
    "access": "open",
    "proto": "",
    "notes": "",
    "tags": [
      "naturfare",
      "transport"
    ]
  },
  {
    "no": "Havnedata WMS",
    "en": "Port Data WMS",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/havnedata-wms/6e0d1be6-0ea4-4d11-aaf3-76ccec945d65",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "politi",
      "brann_ind",
      "transport",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Innsjødatabase",
    "en": "Hydrology - lakes",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/innsjoedatabase/823b8639-9a49-41bf-8571-3608435eb149",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "naturfare",
      "forurensning"
    ]
  },
  {
    "no": "INSPIRE Transport Network Water",
    "en": "INSPIRE Transport Network Water",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/inspire-transport-network-water/f2c0561c-3c4f-4ec8-8a57-f2a27526c5e9",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "European specification",
    "tags": [
      "transport",
      "internasjonal"
    ]
  },
  {
    "no": "ISPS Havneanlegg",
    "en": "Marine transport - ISPS ports",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/isps-havneanlegg/dc9b4d63-8597-4971-92a4-9f665abc3e21",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "politi",
      "forurensning",
      "brann_ind",
      "transport",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "IUA - Interkommunale utvalg mot akutt forurensning",
    "en": "Pollution emergency response regions (IUA)",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/iua-interkommunale-utvalg-mot-akutt-forurensning/c9a242b5-43dc-469a-8b06-12c151d7fd12",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "forurensning",
      "brann_ind"
    ]
  },
  {
    "no": "Jernbane – Banenettverk",
    "en": "Railway Network",
    "ownerNo": "Bane Nor",
    "ownerEn": "Bane Nor",
    "url": "https://kartkatalog.geonorge.no/metadata/jernbane-banenettverk/c3da3591-cded-4584-a4b1-bc61b7d1f4f2",
    "access": "open",
    "proto": "WMS",
    "notes": "Replacement for FKB Rail which is login required?",
    "tags": [
      "politi",
      "brann_ind",
      "transport",
      "befolket"
    ]
  },
  {
    "no": "Jordskjelvsoneringskart",
    "en": "Earthquake Zonation Map",
    "ownerNo": "NORSAR",
    "ownerEn": "NORSAR",
    "url": "https://kartkatalog.geonorge.no/metadata/jordskjelvsoneringskart/52e8d522-8ee1-46fc-8ee9-9210354f9606",
    "access": "restricted",
    "proto": "",
    "notes": "",
    "tags": [
      "naturfare",
      "internasjonal"
    ]
  },
  {
    "no": "Jordsmonn",
    "en": "Soil Data",
    "ownerNo": "Norsk institutt for bioøkonomi",
    "ownerEn": "Norwegian Institute of Bioeconomy Research",
    "url": "https://kartkatalog.geonorge.no/metadata/jordsmonn/0b960bb3-d9af-499e-a204-72833a4bcaaa",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "forsyning",
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Kraftlinjer",
    "en": "Hydroelectric power system - power lines",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/kraftlinjer/4ab8c70a-215a-4e1a-847b-b3c044526d5e",
    "access": "open",
    "proto": "WMS",
    "notes": "Included in the dataset “Nettanlegg”",
    "tags": [
      "politi",
      "forsyning",
      "brann_ind",
      "transport",
      "internasjonal"
    ]
  },
  {
    "no": "Kulturminner - brannsmitteområder WFS",
    "en": "Cultural Heritage – Fire Spread Zones (WFS)",
    "ownerNo": "Riksantikvaren",
    "ownerEn": "Directorate for Cultural Heritage",
    "url": "https://kartkatalog.geonorge.no/metadata/kulturminner-brannsmitteomraader-wfs/cbe4baab-94c0-449b-bea9-ce1084cf373d",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "Also included in Cultural Heritage – Fire Protection",
    "tags": [
      "brann_ind"
    ]
  },
  {
    "no": "Kulturminner - brannvern",
    "en": "Cultural Heritage – Fire Protection",
    "ownerNo": "Riksantikvaren",
    "ownerEn": "Directorate for Cultural Heritage",
    "url": "https://kartkatalog.geonorge.no/metadata/kulturminner-brannvern/68f6a2e5-8c8a-4976-870c-670add90fff6",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "naturfare",
      "brann_ind"
    ]
  },
  {
    "no": "Kulturminner - Freda bygninger",
    "en": "Cultural heritage - Protected buildings",
    "ownerNo": "Riksantikvaren",
    "ownerEn": "Directorate for Cultural Heritage",
    "url": "https://kartkatalog.geonorge.no/metadata/kulturminner-freda-bygninger/a4bfd879-120f-490e-9907-68ba870664b1",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "brann_ind"
    ]
  },
  {
    "no": "Kulturminner - Lokaliteter, Enkeltminner og Sikringssoner",
    "en": "Cultural Heritage – Sites, Single Objects, and Protection Zones",
    "ownerNo": "Riksantikvaren",
    "ownerEn": "Directorate for Cultural Heritage",
    "url": "https://kartkatalog.geonorge.no/metadata/kulturminner-lokaliteter-enkeltminner-og-sikringssoner/c72906a0-2bc2-41d7-bea2-c92d368e3c49",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "brann_ind"
    ]
  },
  {
    "no": "Kulturminner - Verneverdig tette trehusmiljøer WFS",
    "en": "Cultural heritage - Listed wooden buildings environments",
    "ownerNo": "Riksantikvaren",
    "ownerEn": "Directorate for Cultural Heritage",
    "url": "https://kartkatalog.geonorge.no/metadata/kulturminner-verneverdig-tette-trehusmiljoeer-wfs/68eb7647-cd2e-4d76-ad0c-44ff459b7656",
    "access": "open",
    "proto": "WFS",
    "notes": "",
    "tags": [
      "brann_ind"
    ]
  },
  {
    "no": "Kvikkleire",
    "en": "Quick clay",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/kvikkleire/a29b905c-6aaa-4283-ae2c-d167624c08a8",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "politi",
      "naturfare"
    ]
  },
  {
    "no": "Landformer",
    "en": "Landforms",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/landformer/7d220e23-5835-4f83-ba96-1156c154e566",
    "access": "open",
    "proto": "",
    "notes": "Impact assessments",
    "tags": [
      "naturfare"
    ]
  },
  {
    "no": "Lufthavn – punkt (Avinor)",
    "en": "Airport - point features Avinor",
    "ownerNo": "Avinor",
    "ownerEn": "Avinor",
    "url": "https://kartkatalog.geonorge.no/metadata/lufthavn-punkt-avinor/22485273-dc0c-4484-a8be-357105d65689",
    "access": "open",
    "proto": "WFS",
    "notes": "",
    "tags": [
      "brann_ind",
      "transport",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Løsmasser",
    "en": "Superficial deposits",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/loesmasser/3de4ddf6-d6b8-4398-8222-f5c47791a757",
    "access": "open",
    "proto": "WMS",
    "notes": "Vulnerability analyses",
    "tags": [
      "politi",
      "naturfare"
    ]
  },
  {
    "no": "Marin grense",
    "en": "Marine limit",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/marin-grense/cf8ccec7-9505-4d84-94a9-eac9c69971d3",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "naturfare"
    ]
  },
  {
    "no": "Marine geofarer WMS",
    "en": "Marine Geohazards (WMS)",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/marine-geofarer-wms/cedb4894-8662-4819-b202-7b0ce31a4366",
    "access": "open",
    "proto": "WMS",
    "notes": "Aggregates several marine datasets such as slide names, shallow gas, slide boundaries, etc",
    "tags": [
      "naturfare"
    ]
  },
  {
    "no": "Mattilsynet - Drikkevann fra brønner",
    "en": "Drinking Water from Wells",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/mattilsynets-wms/cf630753-508a-4e7a-99da-ae1111090248",
    "access": "open",
    "proto": "WMS",
    "notes": "Shared WMS",
    "tags": [
      "politi",
      "forsyning",
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Mattilsynet - fjørfehold",
    "en": "Poultry Holdings",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/mattilsynets-wms/cf630753-508a-4e7a-99da-ae1111090248",
    "access": "open",
    "proto": "WMS",
    "notes": "Shared WMS",
    "tags": [
      "forsyning",
      "sykdom"
    ]
  },
  {
    "no": "Mattilsynet - grunnvann",
    "en": "Groundwater",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/mattilsynets-wms/cf630753-508a-4e7a-99da-ae1111090248",
    "access": "open",
    "proto": "WMS",
    "notes": "Shared WMS",
    "tags": [
      "forsyning",
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Mattilsynet - Grunnvannsforekomster",
    "en": "Groundwater Bodies",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/mattilsynets-wms/cf630753-508a-4e7a-99da-ae1111090248",
    "access": "open",
    "proto": "WMS",
    "notes": "Shared WMS",
    "tags": [
      "forsyning",
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Mattilsynet - Innsjø drikkevann",
    "en": "Lake-Based Drinking Water",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/mattilsynets-wms/cf630753-508a-4e7a-99da-ae1111090248",
    "access": "open",
    "proto": "WMS",
    "notes": "Shared WMS",
    "tags": [
      "forsyning",
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Mattilsynet - Innsjø drikkevannsforekomster",
    "en": "Drinking Water Lake Bodies",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/mattilsynets-wms/cf630753-508a-4e7a-99da-ae1111090248",
    "access": "open",
    "proto": "WMS",
    "notes": "Shared WMS",
    "tags": [
      "forsyning",
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Mattilsynet - Innsjøer for drikkevann",
    "en": "Lakes Used for Drinking Water",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/mattilsynets-wms/cf630753-508a-4e7a-99da-ae1111090248",
    "access": "open",
    "proto": "WMS",
    "notes": "Shared WMS",
    "tags": [
      "forsyning",
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Mattilsynet - Uttak av vann til drikkevannsforemål",
    "en": "Water Extraction for Drinking Water Purposes",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/mattilsynets-wms/cf630753-508a-4e7a-99da-ae1111090248",
    "access": "open",
    "proto": "WMS",
    "notes": "Shared WMS",
    "tags": [
      "politi",
      "forsyning",
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Mattilsynet - Vannverk inntakspunkter",
    "en": "Waterworks Intake Points",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/mattilsynets-wms/cf630753-508a-4e7a-99da-ae1111090248",
    "access": "open",
    "proto": "WMS",
    "notes": "Shared WMS",
    "tags": [
      "forsyning",
      "sykdom"
    ]
  },
  {
    "no": "Mattilsynet - Varsomhetsområder for innsjøer",
    "en": "Caution Areas for Lakes",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/mattilsynets-wms/cf630753-508a-4e7a-99da-ae1111090248",
    "access": "open",
    "proto": "WMS",
    "notes": "Shared WMS",
    "tags": [
      "politi",
      "forsyning",
      "sykdom"
    ]
  },
  {
    "no": "Meteorologisk kartinformasjon",
    "en": "Meteorological Map Information",
    "ownerNo": "Meteorologisk institutt",
    "ownerEn": "Norwegian Meteorological Institute",
    "url": "https://kartkatalog.geonorge.no/metadata/meteorologisk-kartinformasjon/c247f4a3-56a8-49fa-afe0-a0329b9453e1",
    "access": "open",
    "proto": "WMS",
    "notes": "Forecast data from weather and ocean models",
    "tags": [
      "naturfare",
      "brann_ind"
    ]
  },
  {
    "no": "Nasjonal database for grunnundersøkelser (NADAG)",
    "en": "National database for ground investigation (NADAG)",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/nasjonal-database-for-grunnundersoekelser-nadag/bf45a463-434d-4b4d-84dc-9325780ab5fb",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "naturfare",
      "forurensning"
    ]
  },
  {
    "no": "Nasjonalt register over luftfartshindre",
    "en": "Norwegian register of aviation obstacles",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/nasjonalt-register-over-luftfartshindre/28c896d0-8a0d-4209-bf31-4931033b1082",
    "access": "open",
    "proto": "WMS",
    "notes": "Under consideration for closure",
    "tags": [
      "politi",
      "naturfare",
      "brann_ind",
      "transport",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Naturvernområder",
    "en": "Protected sites",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/naturvernomraader/5857ec0a-8d2c-4cd8-baa2-0dc54ae213b4",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "naturfare",
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Navigasjonsinstallasjon",
    "en": "Navigation installations",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/navigasjonsinstallasjon/94b8c392-e2c8-426a-8dbe-ae828049a1df",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "transport"
    ]
  },
  {
    "no": "Nedbørsfelt til hav",
    "en": "Catchment areas - sea drainage systemes",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/nedboerfelt-til-hav/f637a925-28b5-457b-846c-f5000b3c2b00",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "naturfare",
      "forurensning"
    ]
  },
  {
    "no": "Nettanlegg utbygd",
    "en": "Hydroelectric power system - facilities and network",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/nettanlegg-utbygd/9f71a24b-9997-409f-8e42-ce6f0c62e073",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "Includes masts and poles, subsea cables, distribution networks, regional overhead lines, etc. Updated only when needed – may be incomplete",
    "tags": [
      "forsyning"
    ]
  },
  {
    "no": "Nettkonsensjonsområde",
    "en": "Electricity network licencing areas",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/nettkonsesjonsomraader/890fe9ea-5111-459b-aebd-450480c7713a",
    "access": "open",
    "proto": "WMS",
    "notes": "Supply areas for the country’s power utilities/grid companies",
    "tags": [
      "forsyning",
      "brann_ind"
    ]
  },
  {
    "no": "Norkyst - gjennomsnittlig strømstyrke og retning",
    "en": "Norkyst - Average current speed and direction",
    "ownerNo": "Havforskningsinstituttet",
    "ownerEn": "Institute of Marine Research",
    "url": "https://kartkatalog.geonorge.no/metadata/norkyst-gjennomsnittlig-stroemstyrke-og-retning/bc3c3c2f-4de8-4d2d-9bed-a2052d998400",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "transport"
    ]
  },
  {
    "no": "Norske IBAer",
    "en": "Norwegian IBAs",
    "ownerNo": "Birdlife Norge",
    "ownerEn": "Birdlife Norge",
    "url": "https://kartkatalog.geonorge.no/metadata/norske-ibaer/2e21d615-4f33-4dc6-a8d6-7e724f2cf82f",
    "access": "open",
    "proto": "Nettside",
    "notes": "Important bird areas",
    "tags": [
      "sykdom"
    ]
  },
  {
    "no": "NVDB - Ledningsregister",
    "en": "NVDB Utility Register",
    "ownerNo": "Statens vegvesen",
    "ownerEn": "Norwegian Public Roads Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/nvdb-ledningsregister/42f91a2f-3484-4236-8a71-50f3018b768d",
    "access": "open",
    "proto": "",
    "notes": "",
    "tags": [
      "forsyning",
      "transport",
      "befolket"
    ]
  },
  {
    "no": "Nødhavner",
    "en": "Emergency ports",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/noedhavner/7d76ca2a-31c7-482c-8557-e477c9ac12a2",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "politi",
      "forurensning",
      "brann_ind",
      "transport",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Nødnett-dekning for håndholdt radioterminal",
    "en": "Emergency Network Coverage for Handheld Terminals",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/noednett-dekning-for-haandholdt-radioterminal/f6ff0f09-b353-492d-a98f-1dfcc7902324",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "politi",
      "brann_ind",
      "transport",
      "internasjonal"
    ]
  },
  {
    "no": "Nødnett-dekning for kjøretøymontert radioterminal",
    "en": "Emergency Network Coverage for Vehicle-Mounted Terminals",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/noednett-dekning-for-kjretymontert-radioterminal/2721172e-2531-4b52-b6d9-64706121fbf6",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "politi",
      "brann_ind",
      "transport",
      "internasjonal"
    ]
  },
  {
    "no": "Oppslagsområder",
    "en": "Maritime transport - lay-up areas",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/opplagsomraader/14771301-a73b-4c95-8270-5822f9b1510c",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "politi",
      "brann_ind",
      "transport"
    ]
  },
  {
    "no": "Prioriteringskart akutt forurensning",
    "en": "Priority Map for Acute Pollution",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/prioriteringskart-akutt-forurensning/6aa73fa2-2752-4dfd-b3f0-19fe15928288",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "forurensning"
    ]
  },
  {
    "no": "Radioaktivitet i marint miljø",
    "en": "Radioactivity in the Marine Environment",
    "ownerNo": "Direktoratet for strålevern og atomsikkerhet",
    "ownerEn": "Norwegian Radiation and Nuclear Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/radioaktivitet-i-marint-miljoe/7704fe93-c609-4b3a-9d10-e5a7d08979a2",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "forurensning",
      "internasjonal"
    ]
  },
  {
    "no": "Radnett - doseratemålestasjoner",
    "en": "RADNETT",
    "ownerNo": "Direktoratet for strålevern og atomsikkerhet",
    "ownerEn": "Norwegian Radiation and Nuclear Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/radnett-doseratemaalestasjoner/e379ef5e-8851-4305-b900-44a4587cf14c",
    "access": "open",
    "proto": "Nettside",
    "notes": "",
    "tags": [
      "forurensning",
      "internasjonal"
    ]
  },
  {
    "no": "Radon aktsomhet",
    "en": "Radon susceptibility",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/radon-aktsomhet/dc0605f3-2301-4abe-a91f-6da42464c281",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "forurensning"
    ]
  },
  {
    "no": "Referanseruter for navigasjon",
    "en": "Reference routes for navigation",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/referanseruter-for-navigasjon/25b83fc1-f2bd-4052-bd2d-bd949ac0f402",
    "access": "open",
    "proto": "WMS/API",
    "notes": "",
    "tags": [
      "politi",
      "transport"
    ]
  },
  {
    "no": "REGINE enhet",
    "en": "Catchment areas Regine Units",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/regine-enhet/8721cdac-f959-4adc-9d54-d3b770e5fa1e",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "naturfare",
      "forurensning"
    ]
  },
  {
    "no": "Riggområder",
    "en": "Maritime transport - rig anchoring areas",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/riggomraader/91a9a937-3c03-44e2-9dd8-c347031e52a9",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "brann_ind",
      "transport",
      "internasjonal"
    ]
  },
  {
    "no": "Rørledninger",
    "en": "Pipelines",
    "ownerNo": "Sokkeldirektoratet",
    "ownerEn": "Norwegian Offshore Directorate",
    "url": "https://kartkatalog.geonorge.no/metadata/roerledninger/3a31a1f1-f836-4565-937f-731286fb8baa",
    "access": "open",
    "proto": "WMS",
    "notes": "Pipelines from Norway",
    "tags": [
      "forsyning",
      "befolket"
    ]
  },
  {
    "no": "Sensitive artsdata WMS",
    "en": "Sensitive Species Data (WMS)",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/sensitive-artsdata-wms/f871159f-a2b3-4dca-a5f6-e89770dd70c5",
    "access": "restricted",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Servitutt",
    "en": "Property Easement",
    "ownerNo": "Geovekst",
    "ownerEn": "Geovekst",
    "url": "https://kartkatalog.geonorge.no/metadata/servitutt/7e39afd2-5af6-435f-a859-5a86d136945b",
    "access": "restricted",
    "proto": "",
    "notes": "Property rights not registered in the cadastre",
    "tags": [
      "forsyning",
      "brann_ind",
      "befolket"
    ]
  },
  {
    "no": "Sidenedbørsfelt",
    "en": "Subcatchment areas - secondary catchment division",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/sidenedboerfelt/8a0545fe-025c-4afb-a3ab-5b8cb922ef03",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "naturfare",
      "forurensning"
    ]
  },
  {
    "no": "Sikringstiltak",
    "en": "Protective Measures",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/sikringstiltak/26e3a047-d2d3-4a6f-a24e-67c8e97e4c29",
    "access": "open",
    "proto": "",
    "notes": "",
    "tags": [
      "naturfare"
    ]
  },
  {
    "no": "Sjøfugl - utbredelseskart for utvalgte arter i norsk farvann",
    "en": "Seabirds – Distribution Maps for Selected Species in Norwegian Waters",
    "ownerNo": "Norsk institutt for bioøkonomi",
    "ownerEn": "Norwegian Institute of Bioeconomy Research",
    "url": "https://kartkatalog.geonorge.no/metadata/sjoefugl-utbredelseskart-for-utvalgte-arter-i-norske-farvann/7a7187fc-1253-44ef-b880-24aa7239ba45",
    "access": "open",
    "proto": "WMS",
    "notes": "Included in the dataset “Nettanlegg”",
    "tags": [
      "forurensning",
      "sykdom"
    ]
  },
  {
    "no": "Skogsmark - NiN",
    "en": "Forest Land – NiN",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/skogsmark-nin/bc063468-9454-4ff6-b948-451b68eaade1",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "naturfare"
    ]
  },
  {
    "no": "Skredfaresoner",
    "en": "Land slide - susceptibility zones",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/skredfaresoner/b2d5aaf8-79ac-40f3-9cd6-fdc30bc42ea1",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "Replaced by the hazard map for landslides in steep terrain",
    "tags": [
      "politi",
      "naturfare"
    ]
  },
  {
    "no": "Skredhendelser",
    "en": "Avalanche incidents",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/skredhendelser/de19fbbf-3734-47a0-89f5-6c5769071cdd",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "politi",
      "naturfare"
    ]
  },
  {
    "no": "Små vannverk",
    "en": "Small Waterworks",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/smaa-vannverk/8adefb0a-d020-4adb-858f-a27d03dd4184",
    "access": "restricted",
    "proto": "",
    "notes": "",
    "tags": [
      "forsyning"
    ]
  },
  {
    "no": "Snøscooterløyper",
    "en": "Snowmobile trails - regulated routes",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/snoescooterlyper/07e6b8af-84a7-43cb-9d91-887885a7342f",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "politi",
      "naturfare",
      "brann_ind",
      "transport"
    ]
  },
  {
    "no": "Steinsprang - aktsomhetsområde",
    "en": "Rockfall - rough susceptibility zones",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/steinsprang-aktsomhetsomraader/02c6d51c-4e8c-4948-a620-dc046c8cb747",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "Automatically generated by data models – does not capture small slopes in urban areas or along roads",
    "tags": [
      "politi",
      "naturfare"
    ]
  },
  {
    "no": "Store fjellskred",
    "en": "Rock and mountain slides hazard zones",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/store-fjellskred/17149f79-1289-4e3c-b964-94113eeb14c8",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "politi",
      "naturfare"
    ]
  },
  {
    "no": "Storulykkeanlegg",
    "en": "Enterprises with danger of major accidents",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/storulykkeanlegg/63190f80-8692-492a-8e7a-b2cb0a59d27a",
    "access": "restricted",
    "proto": "",
    "notes": "",
    "tags": [
      "politi",
      "forsyning",
      "forurensning",
      "brann_ind",
      "transport",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Tilfluktsrom - Offentlige",
    "en": "Public Shelters",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/tilfluktsrom-offentlige/dbae9aae-10e7-4b75-8d67-7f0e8828f3d8",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "politi",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Trafikkmengde",
    "en": "Roads - traffic volumes",
    "ownerNo": "Statens vegvesen",
    "ownerEn": "Norwegian Public Roads Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/trafikkmengde/af2c4a0a-1978-4e62-b08d-ed1f36bd5023",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "politi",
      "brann_ind",
      "transport",
      "befolket"
    ]
  },
  {
    "no": "Transformatorstasjoner",
    "en": "Tranformer stations - Hydroelectric power system",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/transformatorstasjoner/ae55f901-480d-4fdc-8f1e-58ef3004d169",
    "access": "open",
    "proto": "WMS",
    "notes": "Included in the dataset Nettanlegg WMS",
    "tags": [
      "politi",
      "forsyning",
      "brann_ind",
      "internasjonal",
      "befolket"
    ]
  },
  {
    "no": "Turrutebasen",
    "en": "Hiking and outdoor recreation routes",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/turrutebasen/d1422d17-6d95-4ef1-96ab-8af31744dd63",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "politi",
      "brann_ind",
      "befolket"
    ]
  },
  {
    "no": "Uran aktsomshet",
    "en": "Uranium Caution Areas",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/uran-aktsomhet/66f7f33e-d5ba-4a22-83e6-cb5385ec284a",
    "access": "open",
    "proto": "",
    "notes": "",
    "tags": [
      "forurensning"
    ]
  },
  {
    "no": "Utredninger av flomfare",
    "en": "Flood Hazard Assessments",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/utredninger-av-flomfare/3e19b6af-5079-4e05-8ccf-72f8a32bd315",
    "access": "open",
    "proto": "",
    "notes": "Report database only",
    "tags": [
      "naturfare"
    ]
  },
  {
    "no": "Utredninger av skredfare",
    "en": "Landslide Hazard Assessments",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/utredninger-av-skredfare/48d23852-bb09-4116-8e9a-e9eb35ddaeab",
    "access": "open",
    "proto": "",
    "notes": "Report database only",
    "tags": [
      "naturfare"
    ]
  },
  {
    "no": "Vannforekomster",
    "en": "Water bodies - Water framework directive",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/vannforekomster/b203e422-5270-4efc-93a5-2073725c43ef",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "naturfare",
      "forsyning"
    ]
  },
  {
    "no": "Vannkraft, Utbygd og ikke utbygd",
    "en": "Hydroelectric power system - utilised catchments",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/vannkraft-utbygd-og-ikke-utbygd/f587a15a-c72a-4b21-aae9-4132df1bdd27",
    "access": "open",
    "proto": "WMS/WFS",
    "notes": "",
    "tags": [
      "forsyning"
    ]
  },
  {
    "no": "Vannområder",
    "en": "River Basin District Sub-units",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/vannomraader/6705ade7-5785-4611-9110-17bcb21d2ff9",
    "access": "open",
    "proto": "WMS",
    "notes": "Several water areas within one water region",
    "tags": [
      "naturfare",
      "forurensning"
    ]
  },
  {
    "no": "Vannregioner",
    "en": "River Basin Districts",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/vannregioner/6488264e-4ade-4430-bb27-96f0824e0eb8",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "naturfare",
      "forurensning"
    ]
  },
  {
    "no": "Vannstandsdata og vannstandsinformasjon",
    "en": "Water level data and information",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/vannstandsdata-og-vannstandsinformasjon/999386cb-926e-45b5-9a1b-f71022747486",
    "access": "open",
    "proto": "WMS/API",
    "notes": "",
    "tags": [
      "naturfare"
    ]
  },
  {
    "no": "Vernskog",
    "en": "Protective forests",
    "ownerNo": "Landbruksdirektoratet",
    "ownerEn": "Norwegian Agriculture Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/vernskog/7f854c3d-4c65-4581-ab94-087a76564ee2",
    "access": "open",
    "proto": "WMS",
    "notes": "Vulnerable forest",
    "tags": [
      "naturfare",
      "sykdom"
    ]
  },
  {
    "no": "Vindkraftverk",
    "en": "Wind power plants",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/vindkraftverk/ac249604-cd82-490c-83cc-9cd24fe18088",
    "access": "open",
    "proto": "WMS",
    "notes": "",
    "tags": [
      "forsyning",
      "brann_ind"
    ]
  },
  {
    "no": "Værdata og havdata i GRIB-format",
    "en": "Normals (precipitation, temperature, wind and air pressure)",
    "ownerNo": "Meteorologisk institutt",
    "ownerEn": "Norwegian Meteorological Institute",
    "url": "https://kartkatalog.geonorge.no/metadata/vaerdata-og-havdata-i-grib-format/6578c540-8a28-4ca9-921c-c5afbed79326",
    "access": "open",
    "proto": "GRIB-format",
    "notes": "",
    "tags": [
      "naturfare",
      "forurensning",
      "brann_ind",
      "transport"
    ]
  }
];

function truncate(s, n) {
  if (!s) return "";
  return s.length > n ? s.slice(0, n) + "…" : s;
}

function DatasetCard({ item, lang, color }) {
  const t = T[lang];
  const title = lang === "no" ? item.no : item.en;
  const owner = lang === "no" ? item.ownerNo : item.ownerEn;
  return (
    <div
      style={{
        background: "linear-gradient(135deg,#0F2040 0%,#0A1628 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderLeft: `3px solid ${color}`,
        borderRadius: 10, padding: "15px 17px",
        display: "flex", flexDirection: "column", gap: 7,
        transition: "transform 0.15s, box-shadow 0.15s",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px ${color}33`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
        <h3 style={{ fontFamily: "Syne,sans-serif", fontSize: 13, fontWeight: 700, color: "#E8F4FF", lineHeight: 1.3, flex: 1 }}>{title}</h3>
        <div style={{ display: "flex", gap: 4, flexShrink: 0, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {item.access === "open" && <span style={{ background: "#065F46", color: "#6EE7B7", fontSize: 10, fontWeight: 600, padding: "2px 7px", borderRadius: 20 }}>{t.openData}</span>}
          {item.access === "restricted" && <span style={{ background: "rgba(251,191,36,0.15)", color: "#FCD34D", fontSize: 10, fontWeight: 600, padding: "2px 7px", borderRadius: 20 }}>{t.restricted}</span>}
          {item.access === "contact" && <span style={{ background: "rgba(248,113,113,0.15)", color: "#FCA5A5", fontSize: 10, fontWeight: 600, padding: "2px 7px", borderRadius: 20 }}>{t.contact}</span>}
          {item.proto && <span style={{ background: "rgba(96,165,250,0.15)", color: "#93C5FD", fontSize: 10, fontWeight: 600, padding: "2px 7px", borderRadius: 20 }}>{item.proto}</span>}
        </div>
      </div>
      {owner && <span style={{ fontSize: 11, color: "#7BA7C4" }}>▸ {owner}</span>}
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
          <a href={item.url} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 11, color, textDecoration: "none", padding: "4px 10px", borderRadius: 6, background: `${color}15`, fontWeight: 500, display: "inline-block" }}
            onMouseEnter={e => e.currentTarget.style.background = `${color}30`}
            onMouseLeave={e => e.currentTarget.style.background = `${color}15`}
          >{t.catalog}</a>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("no");
  const [activeCat, setActiveCat] = useState("alle");
  const [search, setSearch] = useState("");
  const t = T[lang];

  useState(() => {
    const style = document.createElement("style");
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
  });

  const items = useMemo(() => {
    let list = activeCat === "alle" ? DATASETS : DATASETS.filter(d => d.tags.includes(activeCat));
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(d =>
        d.no.toLowerCase().includes(q) || d.en.toLowerCase().includes(q) ||
        d.ownerNo.toLowerCase().includes(q) || d.ownerEn.toLowerCase().includes(q) ||
        d.notes.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCat, search]);

  const activeCatObj = CATS.find(c => c.id === activeCat);
  const countFor = id => id === "alle" ? DATASETS.length : DATASETS.filter(d => d.tags.includes(id)).length;

  return (
    <div style={{ minHeight: "100vh", background: "#0A1628" }}>
      {/* Header */}
      <header style={{ background: "linear-gradient(180deg,#071020 0%,#0A1628 100%)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "20px 28px 16px", position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 3 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#1D4ED8,#DC2626)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⚡</div>
                <h1 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: 19, background: "linear-gradient(135deg,#60A5FA,#E8F0FA 60%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {t.appTitle}
                </h1>
              </div>
              <p style={{ fontSize: 12, color: "#5A7EA0" }}>{t.appSub}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Dataset count */}
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "Syne,sans-serif", fontSize: 24, fontWeight: 800, color: "#60A5FA", lineHeight: 1 }}>{DATASETS.length}</div>
                <div style={{ fontSize: 10, color: "#5A7EA0" }}>{t.datasets}</div>
              </div>
              {/* Language toggle */}
              <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, overflow: "hidden" }}>
                {["no","en"].map(l => (
                  <button key={l} onClick={() => setLang(l)} style={{
                    padding: "6px 14px", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600,
                    background: lang === l ? "rgba(96,165,250,0.2)" : "transparent",
                    color: lang === l ? "#60A5FA" : "#5A7EA0",
                    fontFamily: "IBM Plex Sans, sans-serif", transition: "all 0.15s"
                  }}>{l.toUpperCase()}</button>
                ))}
              </div>
            </div>
          </div>
          {/* Search */}
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#3A6080", fontSize: 13, pointerEvents: "none" }}>⌕</span>
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder={t.search}
              style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "9px 34px 9px 32px", color: "#E8F0FA", fontSize: 13, outline: "none", fontFamily: "IBM Plex Sans,sans-serif" }}
              onFocus={e => e.target.style.borderColor = "rgba(96,165,250,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
            />
            {search && <button onClick={() => setSearch("")} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#5A7EA0", cursor: "pointer", fontSize: 16 }}>×</button>}
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "18px 28px", display: "flex", gap: 20 }}>
        {/* Sidebar */}
        <nav style={{ width: 200, flexShrink: 0 }}>
          <div style={{ position: "sticky", top: 128 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: "#3A6080", letterSpacing: "0.1em", marginBottom: 7, paddingLeft: 4 }}>{t.categories}</div>
            {CATS.map(cat => {
              const isActive = activeCat === cat.id;
              return (
                <button key={cat.id} onClick={() => setActiveCat(cat.id)} style={{
                  width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "7px 10px",
                  borderRadius: 8, border: "none", cursor: "pointer", textAlign: "left", marginBottom: 2,
                  transition: "all 0.12s",
                  background: isActive ? `${cat.color}18` : "transparent",
                  borderLeft: isActive ? `3px solid ${cat.color}` : "3px solid transparent",
                }}>
                  <span style={{ fontSize: 13, width: 16, textAlign: "center" }}>{cat.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: isActive ? 600 : 400, color: isActive ? cat.color : "#8AA5C0", flex: 1, lineHeight: 1.2 }}>
                    {lang === "no" ? cat.no : cat.en}
                  </span>
                  <span style={{ fontSize: 10, padding: "1px 5px", borderRadius: 10, background: isActive ? `${cat.color}20` : "rgba(255,255,255,0.04)", color: isActive ? cat.color : "#3A6080" }}>
                    {countFor(cat.id)}
                  </span>
                </button>
              );
            })}
            <div style={{ marginTop: 18, padding: "10px 12px", background: "rgba(255,255,255,0.02)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ fontSize: 10, color: "#3A6080", marginBottom: 4, fontWeight: 600, letterSpacing: "0.08em" }}>{t.source}</div>
              <a href="https://kartkatalog.geonorge.no" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#5A8FAA", textDecoration: "none", display: "block", marginBottom: 1 }}>kartkatalog.geonorge.no</a>
              <div style={{ fontSize: 10, color: "#2A5070" }}>Kartverket · NVE · DSB · SSB · NGU</div>
            </div>
          </div>
        </nav>

        {/* Main */}
        <main style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ fontSize: 12, color: "#5A7EA0" }}>
              {t.showing} <span style={{ color: "#60A5FA", fontWeight: 600 }}>{items.length}</span> {t.datasets}
              {activeCat !== "alle" && <span style={{ color: activeCatObj?.color, fontWeight: 600 }}> · {lang === "no" ? activeCatObj?.no : activeCatObj?.en}</span>}
              {search && <span> {t.for} "<em>{search}</em>"</span>}
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
              {items.map((item, i) => (
                <DatasetCard key={i} item={item} lang={lang} color={activeCatObj?.color || "#60A5FA"} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
