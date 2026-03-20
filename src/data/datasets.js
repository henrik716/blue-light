export const DATASETS = [
  {
    "no": "Administrative enheter fylker",
    "en": "Administrative units counties",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/6093c8a8-fa80-11e6-bc64-92361f002671",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.adm_enheter2?service=wms&request=GetCapabilities",
    "notes": "",
    "tags": [
      "admin"
    ],
    "abstractNo": "Datasettet viser fylkesinndelingen i landet med de mest nøyaktige grensene som er registrert digitalt og som er samlet i ett datasett. Datasettet har referansedato 1.1.2026, og er oppdatert med overføring av to arealer mellom Indre Østfold og Nordre Follo ved Slemmestadveien, og et areal mellom Indre Østfold og Vestby ved Laaskenveien. Det er i tillegg oppdatert med en del mindre kvalitetshevinger, som følge av jordskiftesaker og klarlegging av eksisterende grense på kommune-/fylkesgrenser.\n\nFlatene inneholder egenskaper som forteller om offisielle fylkesnumre. De offisielle norske, samiske og kvenske navnene for fylkene er hentet fra SSR. I tillegg finnes informasjon om samiske forvaltningsområder.\n\nGeodataene er fra nasjonal inndelingsbase, som er en del av matrikkelen. Ved overgang til ny forvaltningsløsning, ble det også gjort endringer i UML-modellen.",
    "abstractEn": "The dataset administrative units shows the county divisions within the country with the most accurate boundaries that have been recorded digitally and are collected in a dataset. \\\\n\\\\nThe counties are delimited by National Border, Outer Limit of Territorial Waters, Agreed Delimitation Line and county boundaries.\\\\n\\\\nThe units include properties which indicate official county numbers. The official Norwegian and Sami names for counties are taken from SSR. There is also information about Sami language administrative districts.\\\\n\\\\nThe geometry is derived from the Cadastre, which is updated by the municipalities. National Borders and Outer Limit of Territorial Waters are inserted from the Norwegian Mapping Authority's own established files."
  },
  {
    "no": "Administrative enheter kommuner",
    "en": "Administrative units municipalities",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/041f1e6e-bdbc-4091-b48f-8a5990f3cc5b",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.adm_enheter2?service=wms&request=GetCapabilities",
    "notes": "",
    "tags": [
      "admin"
    ],
    "abstractNo": "Datasettet viser kommuneinndelinga i landet med de mest nøyaktige grensene som er registrert digitalt og som er samlet i ett datasett. Datasettet har referansedato 1.1.2026, og er oppdatert med overføring av to arealer mellom Indre Østfold og Nordre Follo ved Slemmestadveien, og et areal mellom Indre Østfold og Vestby ved Laaskenveien. Det er i tillegg oppdatert med en del mindre kvalitetshevinger, som følge av jordskiftesaker og klarlegging av eksisterende grense på kommune-/fylkesgrenser.\n \nFlatene inneholder egenskaper som forteller om offisielle kommunenumre. De offisielle norske, samiske og kvenske navnene for kommunene er hentet fra SSR. I tillegg finnes informasjon om samiske forvaltningsområder.\n\nGeodataene er fra nasjonal inndelingsbase, som er en del av matrikkelen. Ved overgang til ny forvaltningsløsning, ble det også gjort endringer i UML-modellen.",
    "abstractEn": "The dataset shows national, county and municipal divisions within the country. It has the most accurate boundaries that have been recorded digitally and are collected in a dataset. \n\nThe municipalities are delimited by National Border, Outer Limit of Territorial Waters 12 Nautical Miles, Agreed Delimitation Line, county boundary and municipal boundary. \n\nThe dataset also includes a baseline and 1 nautical mile, which are legal lines that can be used when processing cases linked with specific laws. \n\nThe units include properties which indicate official municipal numbers. The official Norwegian, Sami and Kven names for counties and municipalities are taken from SSR. There is also information about Sami language administrative districts."
  },
  {
    "no": "Arealressurskart - AR50 - Arealtyper",
    "en": "AR50 (Land Resource Map 1:50 000) - Land types",
    "ownerNo": "Norsk institutt for bioøkonomi",
    "ownerEn": "Norwegian Institute of Bioeconomy Research",
    "url": "https://kartkatalog.geonorge.no/metadata/41f6b000-c394-41c5-8ebb-07a0a3ec914f",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.nibio.no/cgi-bin/ar50_2?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
    "notes": "AR50 can replace FKB-AR5",
    "tags": [
      "land"
    ],
    "abstractNo": "Arealtype er et kartlag eller egenskap med egne presentasjonsregler i det landsdekkende datasettet AR50. Det viser hovedtyper av arealessurser tilpasset bruk i målestokker fra 1:20 000 til 1:100 000. \nArealtype er en inndeling i åtte arealressursklasser. Egenskap/kolonne i datasettet som skal brukes til å fremstille kartlaget heter ARTYPE i SOSI-format og arealtype i gml og gdb-format. Lovlige egenskapverdier i henhold til kodelisten er: 10 - Bebygd og samferdsel; 20 - Jordbruksareal; 30 - Skog; 50 - Snaumark; 60 - Myr; 70 - SnøIsbre; 81 - Ferskvann; 82 - Hav; 99 - Ikke kartlagt. \n\nFor mer informasjon om datasettet AR50, les om Arealressurskart - AR50 Serie på https://kartkatalog.geonorge.no/metadata/arealressurskart-ar50-serie/4bc2d1e0-f693-4bf2-820d-c11830d849a3",
    "abstractEn": "Land type is the main classification theme in AR50 based on vegetation, natural drainage and cultivation. \n\nMain classes are:\n10 Built-up area and transportation networks; 20 Cultivated land; 30 Forest; 60 Peat bog; 50 Open land;   70 Glacier and permanent snow; 81 Fresh water; 82 Salt water;\n\nThe national land resource database (AR) classifies the land cover of mainland Norway according to its suitability for agriculture and natural plant production. National land resource datasets are available at scale 1:5.000 (AR5), 1:50.000 (AR50) and 1:250.000 (AR250). \n AR50 is the Norwegian medium resolution land resource dataset which covers the whole of mainland Norway. It is build and maintained for cartographic representations at regional level (1:100.000 to 1:300.000). The dataset is not intended for spatial analysis. \nFeatures in AR50 are continuous areas representated as polygons with attributes assigned according to the AR50 classification criteria. The primary level of classification is land type (arealtype) based on a combination of land cover and land useSecond level attributes are forest site quality class (skogbonitet) and forest cover type (treslag). Areas above the tree line, mountains and other open areas have been classified according to richness of the vegetation. AR50 contain also includes information about arable land when the land cover is bare land, marsh or forest. \nIn AR50, the general minimum mapping unit is 1.5 hectares for polygons that have identical combinations of attribute values. Smaller mapping units occur between identical land types if they have different forest cover or forest site quality."
  },
  {
    "no": "Arealressurskart - FKB-AR5",
    "en": "FKB-AR5 (Land resource map 1:5.000)",
    "ownerNo": "Norsk institutt for bioøkonomi",
    "ownerEn": "Norwegian Institute of Bioeconomy Research",
    "url": "https://kartkatalog.geonorge.no/metadata/243751e8-5803-4627-898c-d0ddabe82056",
    "access": "restricted",
    "proto": "",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "land"
    ],
    "abstractNo": "FKB-AR5 er et detaljert arealressurskart tilpasset målestokk 1:1000 og oppover, og viser arealressursene med vekt på produksjonsgrunnlaget for jord- og skogbruk. Det er et detaljert, nasjonalt heldekkende datasett, der landareal er delt inn etter arealtype, skogbonitet, treslag og grunnforhold.\n\nJordbruksarealet er delt i arealtypene fulldyrka jord, overflatedyrka jord og innmarksbeite. Skog er en egen arealtype, og er delt inn etter treslag og skogbonitet. Resten av arealet er delt i arealtypene myr, åpen fastmark, bebygd, samferdsel, snø/isbre, ferskvann og hav.\n\nUproduktive områder og områder over tregrensa mangler dekning i AR5. Disse er registrert med arealtypen \"ikke kartlagt\" i datasettet.\n\nAR5-datasettet består av fire egenskaper som kan brukes til å fremstille kartlag med forhåndsdefinerte presentasjonsregler. Disse er: arealtype (ARTYPE), grunnforhold (ARGRUNNF), treslag (ARTRESLAG), skogbonitet (ARSKOGBON). Areal mindre enn to dekar blir vanligvis ikke skilt ut som egen figur. Jordbruksareal skilles ut ned til 0,5 dekar.",
    "abstractEn": "The national land resource database (AR) classifies the land cover of mainland Norway according to its suitability for agriculture and natural plant production. National land resource datasets are available at scale 1:5.000 (AR5), 1:50.000 (AR50) and 1:250.000 (AR250). \\\\nAR5 is a national, seamless land resource database. The dataset describes land resources (mainly land cover and productivity) based on a standardized national classification system with 104 classes. Special attention is given to the suitability of land for agricultural and forest production. Substantial areas of Norway are above the tree line. These areas are only mapped as “not classified” in AR5. Areas above the tree line have been mapped in AR50.\\\\nFeatures in AR5 are continuous areas with the same attributes assigned according to the classification criteria of AR5 with a geometric representation as polygons. The minimum mapping unit in AR5 is 0.05 hectare (500 m2) for agricultural areas, transport networks and water bodies. Furthermore 0.2 hectare (2000 m2) is the minimum mapping unit for forest, peat bogs and open areas. For urban areas the minimum mapping unit is 0.5 hectare and 2.5 hectare for perpetual snow and glaciers. The geometric accuracy for well-defined boundaries is 2 m or better. The point density is normally between 5 and 50 m.\\\\nAR5 is continually updated by municipal administrations and priority is given to agricultural- and urban areas. This is an integrated part of the maintenance of the municipal geospatial database. A centralized control and editing program is carried out by NFLI with a five year turnover period."
  },
  {
    "no": "Barnehager",
    "en": "Nurseries",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Directorate for Education and Training",
    "url": "https://kartkatalog.geonorge.no/metadata/e229a364-0caa-4a24-8dbe-225b3d83e075",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "society"
    ],
    "abstractNo": "Datasettet gir oversikt over plassering av norske barnehager med noe tilhørende kontaktinformasjon og opplysninger om barnehagen. Data er hentet fra Utdanningsdirektoratets API over barnehager fra www.barnehagefakta.no. Barnehagefakta er basert på opplysninger barnehagene selv rapporterer, og kvalitetssikres av kommunen og Utdanningsdirektoratet. Det rapporteres inn årlig til Barnehagefakta, imidlertid kan informasjonen kan ha endret seg siden tallene ble rapportert. Barnehager som kun har postnummer som adresse kan ha en noe omtrentlig plassering.",
    "abstractEn": "This dataset provides an overview of the locations of Norwegian nurseries with associated contact information and information on the nursery."
  },
  {
    "no": "Befolkning på grunnkretsnivå",
    "en": "Population by Basic Statistical Unit",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/7eb907de-fdaa-4442-a8eb-e4bd06da9ca8",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "society"
    ],
    "abstractNo": "Dette er aktuell versjon med statistikk og grunnkretser fra 01.01.2024. Tidligere versjoner finnes i datasettserien \"Befolkning på grunnkretsnivå - historiske versjoner\" Datasettet genereres fra Kartverkets datasett \"Statistiske enheter grunnkretser\" og kobles mot statistikk fra SSB som viser befolkningsmengde for grunnkretser. Datasettet viser totalbefolkning, antall menn, antall kvinner og befolkning i fem-års aldersgrupper fra 0 til 90 år og over pr. grunnkrets. Det viser også befolkningsendringen totalt, for menn og for kvinner i forhold til befolkning pr. 1. januar for fem år tilbake.",
    "abstractEn": "Dette er aktuell versjon med statistikk og grunnkretser fra 01.01.2024. Tidligere versjoner finnes i datasettserien \"Befolkning på grunnkretsnivå - historiske versjoner\" Datasettet genereres fra Kartverkets datasett \"Statistiske enheter grunnkretser\" og kobles mot statistikk fra SSB som viser befolkningsmengde for grunnkretser. Datasettet viser totalbefolkning, antall menn, antall kvinner og befolkning i fem-års aldersgrupper fra 0 til 90 år og over pr. grunnkrets. Det viser også befolkningsendringen totalt, for menn og for kvinner i forhold til befolkning pr. 1. januar for fem år tilbake."
  },
  {
    "no": "Befolkning på rutenett 1000 m",
    "en": "Population Grid 1000 m",
    "ownerNo": "Statistisk sentralbyrå",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/38b714b5-6251-41df-8dd9-f0cde540ac03",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart.ssb.no/api/mapserver/v1/wms/befolkning_paa_rutenett?service=WMS&version=1.3.0&request=GetCapabilities",
    "notes": "Last year's figures. Contact data owner for updated figures",
    "tags": [
      "transport",
      "society"
    ],
    "abstractNo": "Viser bosatte på ruter 1000 m x 1000 m, for gjeldende år og historiske versjoner siden 2001. Grunnlaget for dataene er folkeregistrert befolkning knyttet mot adressepunkter i Matrikkelen. Dette er summert til rutenett,  hvor variabelen \"totalt bosatte\" gis.\n\nBosatte på ruter finnes også for inndelingene 250m X 250m og 5km x 5km.  For 5km x 5km gis flere variabler : antall menn, antall kvinner, og snittalder i ruta. \n\nÅrsdatasett er nedlastbar både fra Geonorge og i SSBs kartportal https://kart.ssb.no  > Se eget Tema \"Befolkning\" eller gå til \"Innholdskatalog\" og  søk på \"befolkning\" for oversikt over alle datasett",
    "abstractEn": "Viser bosatte på ruter 1000 m x 1000 m, for gjeldende år og historiske versjoner siden 2001. Grunnlaget for dataene er folkeregistrert befolkning knyttet mot adressepunkter i Matrikkelen. Dette er summert til rutenett,  hvor variabelen \"totalt bosatte\" gis.\n\nBosatte på ruter finnes også for inndelingene 250m X 250m og 5km x 5km.  For 5km x 5km gis flere variabler : antall menn, antall kvinner, og snittalder i ruta. \n\nÅrsdatasett er nedlastbar både fra Geonorge og i SSBs kartportal https://kart.ssb.no  > Se eget Tema \"Befolkning\" eller gå til \"Innholdskatalog\" og  søk på \"befolkning\" for oversikt over alle datasett"
  },
  {
    "no": "Befolkning på rutenett 250 m",
    "en": "Population - 250 meter grid",
    "ownerNo": "Statistisk sentralbyrå",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/0c0ad0ce-55e8-4d73-9c12-0eb0e2454acb",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart.ssb.no/api/mapserver/v1/wms/befolkning_paa_rutenett?service=WMS&version=1.3.0&request=GetCapabilities",
    "notes": "Last year's figures. Contact data owner for updated figures",
    "tags": [
      "transport",
      "society"
    ],
    "abstractNo": "Bosatte på ruter 250 m x 250 m, for siste år og historiske versjoner siden 2001. Grunnlaget for dataene er folkeregistrert befolkning knyttet mot adressepunkter i Matrikkelen. Dette er summert til rutenett, hvor variabelen \"totalt bosatte\" gis.\nBosatte på ruter finnes også for inndelingene 1km X 1km og 5km x 5km.  For 5km x 5km finnes flere variabler : antall menn, antall kvinner, og snittalder i ruta. \n\nÅrsdatasett er nedlastbar både fra Geonorge og i SSBs kartportal https://kart.ssb.no  > Se eget Tema \"Befolkning\" eller gå til \"Innholdskatalog\" og  søk på \"befolkning\" for oversikt over alle datasett",
    "abstractEn": "Total population on 250 meter grids. The basis for the data is registered population linked to address points in the cadastre and then summed up to grids"
  },
  {
    "no": "Boligstatistikk på rutenett",
    "en": "Residential Statistics on Grid",
    "ownerNo": "Statistisk sentralbyrå",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/8dc5008b-0c61-44ca-a173-3470f5fa962f",
    "access": "open",
    "proto": "WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "transport",
      "society"
    ],
    "abstractNo": "Boligstatistikk på ruter 250mx250m, 1km x 1 km og 5km x 5km for alle årganger fra 2008.  Datasettene inneholder statistikk over antall boliger og tilknyttede variabler pr 01. januar.\n\nDataene tilgjengelig for innsyn og nedlasting fra SSBs kartportal https://kart.ssb.no\n Andre temaer det finnes lages rutenettdatasett for er \"Bygningsmasse\", \"Bedrifter\" og \"Befolkning\"",
    "abstractEn": "Boligstatistikk på ruter 250mx250m, 1km x 1 km og 5km x 5km for alle årganger fra 2008.  Datasettene inneholder statistikk over antall boliger og tilknyttede variabler pr 01. januar.\n\nDataene tilgjengelig for innsyn og nedlasting fra SSBs kartportal https://kart.ssb.no\n Andre temaer det finnes lages rutenettdatasett for er \"Bygningsmasse\", \"Bedrifter\" og \"Befolkning\""
  },
  {
    "no": "Brannalarmsentraler",
    "en": "Fire services' control rooms",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/c4436a5f-1e22-461a-8209-786f7052acb5",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://ogc.dsb.no/wms.ashx?SERVICE=WMS&REQUEST=GetCapabilities&version=1.3.0",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Datasettet viser lokalisering av brannalarmsentralene (\"110-sentralene\") i Norge og deres distrikter.\nNorge har i dag 14 brannalarmsentraler som mottar meldinger om brann og ulykker på vegne av landets brannvesen. De skal etter hvert bli samlokalisert med politiets operasjonssentraler med samme distriktsinndeling. \nSentralene er stedfestet til bygning.  Distriktene følger kommunegrenser.",
    "abstractEn": "The dataset shows the location of the fire services' control rooms in Norway, and their districts.\nNorway currently has 17 control rooms which receive emergency calls concerning fires and accidents on behalf of the country's fire services.  \nThe districts follow the municipal boundaries."
  },
  {
    "no": "Brannstasjoner",
    "en": "Fire stations",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/0ccce81d-a72e-46ca-8bd9-57b362376485",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://ogc.dsb.no/wms.ashx?SERVICE=WMS&REQUEST=GetCapabilities&version=1.3.0",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Datasettet viser alle brannstasjoner og en del av brannvesenets depoter i Norge.  \n\nMålsettingen med stedfestingen er å stedfeste til riktig bygning, men kvaliteten er varierende.  \nEgenskapsinformasjon og oppdatering er basert på en årlig innrapportering fra landets brannvesen til DSB.",
    "abstractEn": "The dataset shows all fire stations and fire equipment depots in Norway.  \n\nThe intention is to position the fire stations at the correct buildings, but the quality varies.   \nAttribute information and updating are based on annual reporting from Norway's fire services to the Norwegian Directorate for Civil Protection. \nAttributes:\nFIRE SERVICE: Name of the fire service to which the station belongs\nFIRE STATION: Name of the fire station\nSTATION TYPE: Codes: H = main station L = local station D = depot\n**KASERNERT**: Codes: DN = 24-hour resident service DA = day shift resident service IK = no resident service D = depot"
  },
  {
    "no": "Bygninger på rutenett",
    "en": "Buildings on Grid",
    "ownerNo": "Statistisk sentralbyrå",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/2916e7b3-c7bd-471b-abf1-8297ddbd24b0",
    "access": "open",
    "proto": "WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "transport",
      "land"
    ],
    "abstractNo": "Inneholder rutenettstatistikk over bygningsmasse og tilknyttede variabler, på ruter med størrelse 250mx250m, 1km x  1km og 5km x 5km, pr. 01. januar.  Årsdatasett tilbake til 2008.  Tilgjengelig i flere formater .\nDataene tilgjengelig for innsyn og nedlasting fra fra SSBs kartportal https://kart.ssb.no\n Andre temaer det finnes lages rutenettdatasett for er \"Bolig\", \"Bedrifter\" og \"Befolkning\"",
    "abstractEn": "Inneholder rutenettstatistikk over bygningsmasse og tilknyttede variabler, på ruter med størrelse 250mx250m, 1km x  1km og 5km x 5km, pr. 01. januar.  Årsdatasett tilbake til 2008.  Tilgjengelig i flere formater .\nDataene tilgjengelig for innsyn og nedlasting fra fra SSBs kartportal https://kart.ssb.no\n Andre temaer det finnes lages rutenettdatasett for er \"Bolig\", \"Bedrifter\" og \"Befolkning\""
  },
  {
    "no": "Digitale ortofoto",
    "en": "Digital Orthoimagery",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/d5b180dd-0cef-4c4a-9174-ba5af69c3551",
    "access": "restricted",
    "proto": "WMS/WMTS/WWW:LINK-1.0-http--link",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.nib?service=WMS&request=GetCapabilities",
    "notes": "",
    "tags": [
      "elevation"
    ],
    "abstractNo": "Ortofoto er flybilder med de samme geometriske egenskaper som et kart og kan knyttes til et referansesystem. Ortofotoene dekker hele landet med varierende oppløsning og nøyaktighet. Bilder over by- og utbyggingsområder har som regel best oppløsning og nøyaktighet. Bildeprosjektene varierer i utstrekning, fra små prosjekter i en kommune, til store prosjekter som kan dekke hele regioner.",
    "abstractEn": "Ortofoto er flybilder med de samme geometriske egenskaper som et kart og kan knyttes til et referansesystem. Ortofotoene dekker hele landet med varierende oppløsning og nøyaktighet. Bilder over by- og utbyggingsområder har som regel best oppløsning og nøyaktighet. Bildeprosjektene varierer i utstrekning, fra små prosjekter i en kommune, til store prosjekter som kan dekke hele regioner."
  },
  {
    "no": "DTM 10 Terrengmodell (UTM33)",
    "en": "Height DTM 10",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/dddbb667-1303-4ac5-8640-7ec04c0e3918",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.terrengmodell?request=GetCapabilities&service=WMS",
    "notes": "Terrain model for mainland Norway",
    "tags": [
      "elevation",
      "risk"
    ],
    "abstractNo": "Digital terrengmodell over fastlands-Norge med høyder i et rutenett på 10 x 10 meter. Terrengmodellen er en rutenettsmodell med oppløsning (rutenettstørrelse) på 10 x 10 meter. \n\nNøyaktighet:\n± 2 til 3 meter standardavvik i høyde avhengig av terreng og kartdataenes alder i FKB A – C-området.\n± 4 til 6 meter standardavvik i høyde avhengig av terreng og kartdataenes alder utenfor FKB A – C-området.\n\nArbeidet med ajourhold av dette datasettet blir ikke prioritert. De siste filene som ble oppdatert er fra 2013. Kartverket prioriterer isteden etablering av Nasjonal detaljert høydemodell (hoydedata.no), der nye høydemodeller tilgjengeliggjøres etter hvert som de blir produsert.\nPå hoydedata.no finnes også ferdigproduserte eksporterer av landsdekkende terrengmodeller med 10 meters oppløsning. Disse er generert ut fra detaljerte laserdata der slike finnes. Dette suppleres med høydedata fra 2013-utgaven av DTM10 dersom det er nødvendig for å få full dekning.",
    "abstractEn": "Digital terrain model with heights in a 10 x 10-metre grid. The terrain model is a grid model with a resolution (grid size) of 10 x 10 metres. \n\nAccuracy:\n± 2 to 3 metres standard deviation in height depending on terrain and map data age in the FKB A – C area.\n± 4 to 6 metres standard deviation in height depending on terrain and map data age outside the FKB A – C area."
  },
  {
    "no": "Finnsenderen.no",
    "en": "Finnsenderen.no",
    "ownerNo": "Nasjonal kommunikasjonsmyndighet",
    "ownerEn": "Norwegian Communications Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/bd02a3e6-893b-4721-b146-9bc3b3fbd5a4",
    "access": "open",
    "proto": "WWW:LINK-1.0-http--link",
    "wmsUrl": "",
    "notes": "Search service for mobile transmitters",
    "tags": [
      "elevation",
      "infrastructure"
    ],
    "abstractNo": "Finnsenderen er en søketjeneste som gir deg oversikt over mobilsendere i Norge, hvor de er plassert, og hvilke selskap som eier og driver dem.",
    "abstractEn": "Finnsenderen er en søketjeneste som gir deg oversikt over mobilsendere i Norge, hvor de er plassert, og hvilke selskap som eier og driver dem."
  },
  {
    "no": "FKB-Arealbruk",
    "en": "FKB Land Use",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/87b31015-a3de-4540-9b8b-cb1bf4e1cb3a",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.fkb?service=wms&request=getcapabilities",
    "notes": "Low zoom level",
    "tags": [
      "land"
    ],
    "abstractNo": "FKB-Arealbruk er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Arealbruk beskriver den fysiske bruken av et areal. Datasettet er ikke heldekkende.\n\nMarkslagsbeskrivelser kartlegges i datasettet FKB-AR5 (arealtilstand, bonitet, markslag og mineralske råstoffer). Arealplandata (kommuneplaner, reguleringsplaner osv.) viser juridiske bestemmelser om hvordan et område skal disponeres. FKB-Arealbruk er viser altså en tredje type kartlegging av et areal der det fokuseres på den fysiske bruken av et geografisk område uavhengig av jordas produksjonsevne eller hva området er planlagt/bestemt brukt til. Eksempel på dette kan være et utbyggingsområde som i FKB-Arealbruk vil kodes som et anleggsområde, uavhengig av om dette arealstykke egner seg som fulldyrka areal og hva området er regulert til i plandataene.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler.",
    "abstractEn": "FKB-Arealbruk er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Arealbruk beskriver den fysiske bruken av et areal. Datasettet er ikke heldekkende.\n\nMarkslagsbeskrivelser kartlegges i datasettet FKB-AR5 (arealtilstand, bonitet, markslag og mineralske råstoffer). Arealplandata (kommuneplaner, reguleringsplaner osv.) viser juridiske bestemmelser om hvordan et område skal disponeres. FKB-Arealbruk er viser altså en tredje type kartlegging av et areal der det fokuseres på den fysiske bruken av et geografisk område uavhengig av jordas produksjonsevne eller hva området er planlagt/bestemt brukt til. Eksempel på dette kan være et utbyggingsområde som i FKB-Arealbruk vil kodes som et anleggsområde, uavhengig av om dette arealstykke egner seg som fulldyrka areal og hva området er regulert til i plandataene.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler."
  },
  {
    "no": "FKB-Bane",
    "en": "FKB Rail",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/3165138f-1461-44fe-8b10-eac44e08a10a",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.fkb?service=wms&request=getcapabilities",
    "notes": "Low zoom level",
    "tags": [
      "elevation",
      "transport"
    ],
    "abstractNo": "FKB-Bane er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Bane omfatter data om infrastruktur for skinnegående kjøretøy, bl.a. jernbane, tunnelbane, forstadsbane, sporveg og kabelbane. Datasettet er avgrenset til den delen av infrastrukturen som betegnes overbygning, dvs. spor og plattform.\n\nØvrige deler av infrastrukturen, i hovedsak underbygning (fylling, skjæring, bru, tunnel, støttemur mv), elkraftanlegg, signalanlegg og teleanlegg, omfattes av andre FKB-datasett, f.eks. FKB-Høydekurve, FKB-Bygning, FKB-BygnAnlegg og FKB-Ledning.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler.",
    "abstractEn": "FKB-Bane er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Bane omfatter data om infrastruktur for skinnegående kjøretøy, bl.a. jernbane, tunnelbane, forstadsbane, sporveg og kabelbane. Datasettet er avgrenset til den delen av infrastrukturen som betegnes overbygning, dvs. spor og plattform.\n\nØvrige deler av infrastrukturen, i hovedsak underbygning (fylling, skjæring, bru, tunnel, støttemur mv), elkraftanlegg, signalanlegg og teleanlegg, omfattes av andre FKB-datasett, f.eks. FKB-Høydekurve, FKB-Bygning, FKB-BygnAnlegg og FKB-Ledning.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler."
  },
  {
    "no": "FKB-BygnAnlegg",
    "en": "FKB Building Facilities",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/ede5ffb2-ee2a-44a3-852d-369a14d97f2e",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.fkb?service=wms&request=getcapabilities",
    "notes": "Low zoom level",
    "tags": [
      "land"
    ],
    "abstractNo": "FKB-BygnAnlegg er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-BygnAnlegg beskriver bygningsmessige anlegg som ikke er spesifisert i andre fagspesifikke FKB-datasett som FKB-Bygning eller FKB-Veg. Dette inkluderer objekter som murer, gjerder, kaier, moloer, tanker etc.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler.",
    "abstractEn": "FKB-BygnAnlegg er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-BygnAnlegg beskriver bygningsmessige anlegg som ikke er spesifisert i andre fagspesifikke FKB-datasett som FKB-Bygning eller FKB-Veg. Dette inkluderer objekter som murer, gjerder, kaier, moloer, tanker etc.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler."
  },
  {
    "no": "FKB-Bygning",
    "en": "FKB-Buildings",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/8b4304ea-4fb0-479c-a24d-fa225e2c6e97",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.fkb?service=wms&request=getcapabilities",
    "notes": "Low zoom level",
    "tags": [
      "land"
    ],
    "abstractNo": "FKB-Bygning er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Bygning inneholder detaljert bygningsinformasjon. Dataene omfatter beskrivelse av alle typer bygninger, takoverbygg, beskrivende bygningslinjer (for eksempel mønelinje) samt bygningsvedheng (for eksempel veranda).\n\nFKB-Bygning benytter samme definisjon/inndeling av en bygning som matrikkelen og har en 1:1 kobling mot matrikkelen ved at bygningsnummer fra matrikkelen legges inn på bygningene i FKB-Bygning.\n\nFKB-Bygning bygger på en 2.5D bygningsmodell. Det innebærer at dataene ikke inneholder volum/3D-objekter, men at høydeverdiene til toppen av objektene registreres. Enkle 3D-modeller kan dermed lages ved å projisere FKB-dataene ned på en terrengmodell.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler.",
    "abstractEn": "FKB-Bygning er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Bygning inneholder detaljert bygningsinformasjon. Dataene omfatter beskrivelse av alle typer bygninger, takoverbygg, beskrivende bygningslinjer (for eksempel mønelinje) samt bygningsvedheng (for eksempel veranda).\n\nFKB-Bygning benytter samme definisjon/inndeling av en bygning som matrikkelen og har en 1:1 kobling mot matrikkelen ved at bygningsnummer fra matrikkelen legges inn på bygningene i FKB-Bygning.\n\nFKB-Bygning bygger på en 2.5D bygningsmodell. Det innebærer at dataene ikke inneholder volum/3D-objekter, men at høydeverdiene til toppen av objektene registreres. Enkle 3D-modeller kan dermed lages ved å projisere FKB-dataene ned på en terrengmodell.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler."
  },
  {
    "no": "FKB-Grønnstruktur",
    "en": "FKB Green Structure",
    "ownerNo": "Geovekst",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/86d6201a-4e0b-4f61-a1dc-c94164cfd160",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.nibio.no/cgi-bin/gronnstruktur?REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0",
    "notes": "Low zoom level",
    "tags": [
      "land"
    ],
    "abstractNo": "FKB-Grønnstruktur 1.0 er et datasett som kombinerer informasjon fra fjernmålingsdata og FKB-data. Datasettet viser vegetasjonsdekke inndelt i tre kategorier av sjikt: feltsjikt, busksjikt og tresjikt. I tillegg vises grå arealer som bygninger og infrastruktur, altså områder uten vegetasjon. \n\nPresisjonsnivået for enkelte egenskaper, særlig de grønne strukturene, vil være lavere enn i tradisjonelle FKB-datasett.\n\nGrønnstrukturkartet etableres ved å kombinere detaljerte offentlige kartdata, som til enhver tid omfatter alle relevante data, satellittdata fra Copernicus-programmet (VHR-opptak via Norsk Romsenter) med oppløsning 2–4 meter og høydedata fra NDH (Nasjonal detaljert høydemodell) med romlig oppløsning 1 meter x 1 meter. I tillegg benyttes informasjon fra SSB Arealbruk for å avgrense kartleggingsområdet og FKB-AR5 for å gi informasjon om jordbruksareal innenfor kartleggingsområdet.",
    "abstractEn": "FKB-Grønnstruktur 1.0 er et datasett som kombinerer informasjon fra fjernmålingsdata og FKB-data. Datasettet viser vegetasjonsdekke inndelt i tre kategorier av sjikt: feltsjikt, busksjikt og tresjikt. I tillegg vises grå arealer som bygninger og infrastruktur, altså områder uten vegetasjon. \n\nPresisjonsnivået for enkelte egenskaper, særlig de grønne strukturene, vil være lavere enn i tradisjonelle FKB-datasett.\n\nGrønnstrukturkartet etableres ved å kombinere detaljerte offentlige kartdata, som til enhver tid omfatter alle relevante data, satellittdata fra Copernicus-programmet (VHR-opptak via Norsk Romsenter) med oppløsning 2–4 meter og høydedata fra NDH (Nasjonal detaljert høydemodell) med romlig oppløsning 1 meter x 1 meter. I tillegg benyttes informasjon fra SSB Arealbruk for å avgrense kartleggingsområdet og FKB-AR5 for å gi informasjon om jordbruksareal innenfor kartleggingsområdet."
  },
  {
    "no": "FKB-Høydekurve",
    "en": "FKB Contour Lines",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/b49478fd-038e-4c2c-ae28-dda1958a8048",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.fkb?service=wms&request=getcapabilities",
    "notes": "Low zoom level",
    "tags": [
      "elevation"
    ],
    "abstractNo": "FKB-Høydekurve er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Høydekurve omfatter data som er nødvendig for å beskrive terrengets form og høyde over et gitt referansenivå. Objekttypene høydekurve, forsenkningskurve, toppunkt, forsenkningspunkt, terrengpunkt og terrenglinje omfattes av spesifikasjonen.\n\nNye høydekurver genereres hovedsaklig fra en terrengmodell basert på punktskyer fra laserskanning. Høydekurvene blir da bare en visning av terrengmodellen. Best informasjon om terrenget fås ved direkte bruk av terrengmodellen.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler.",
    "abstractEn": "FKB-Høydekurve er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Høydekurve omfatter data som er nødvendig for å beskrive terrengets form og høyde over et gitt referansenivå. Objekttypene høydekurve, forsenkningskurve, toppunkt, forsenkningspunkt, terrengpunkt og terrenglinje omfattes av spesifikasjonen.\n\nNye høydekurver genereres hovedsaklig fra en terrengmodell basert på punktskyer fra laserskanning. Høydekurvene blir da bare en visning av terrengmodellen. Best informasjon om terrenget fås ved direkte bruk av terrengmodellen.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler."
  },
  {
    "no": "FKB-Ledning",
    "en": "FKB Utility Lines",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/6e05aefb-f90e-4c7d-9fb9-299574d0bbf6",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.fkb?service=wms&request=getcapabilities",
    "notes": "Low zoom level",
    "tags": [
      "elevation",
      "infrastructure"
    ],
    "abstractNo": "FKB-Ledning er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Ledning omfatter ledningsdata innenfor elektrisitet, elektrisk kommunikasjon, belysningsanlegg, ledningsanlegg tilknyttet bane og VA. Det er kun objekter som er synlig i terrenget (ligger på eller over bakkenivå) som inngår i produktspesifikasjonen. Produktspesifikasjonen er tenkt benyttet ved datafangst av ledningsobjekter og som et grunnlag for distribusjon av FKB-data.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler.",
    "abstractEn": "FKB-Ledning er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Ledning omfatter ledningsdata innenfor elektrisitet, elektrisk kommunikasjon, belysningsanlegg, ledningsanlegg tilknyttet bane og VA. Det er kun objekter som er synlig i terrenget (ligger på eller over bakkenivå) som inngår i produktspesifikasjonen. Produktspesifikasjonen er tenkt benyttet ved datafangst av ledningsobjekter og som et grunnlag for distribusjon av FKB-data.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler."
  },
  {
    "no": "FKB-Lufthavn",
    "en": "FKB Airport",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/23dfcc33-fb04-4898-aa88-68b49c4bfea7",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.fkb?service=wms&request=getcapabilities",
    "notes": "Low zoom level",
    "tags": [
      "elevation",
      "transport"
    ],
    "abstractNo": "FKB-Lufthavn er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Lufthavn omfatter et begrenset utvalg av objekttyper for lufthavner som skal registreres og forvaltes i FKB. Avinor har en mer detaljert spesifikasjon som benyttes for datafangst og forvaltning av data for Avinors egne lufthavner. Data etter denne spesifikasjonen skal kunne avledes fra Avinors data.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler.",
    "abstractEn": "FKB-Lufthavn er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Lufthavn omfatter et begrenset utvalg av objekttyper for lufthavner som skal registreres og forvaltes i FKB. Avinor har en mer detaljert spesifikasjon som benyttes for datafangst og forvaltning av data for Avinors egne lufthavner. Data etter denne spesifikasjonen skal kunne avledes fra Avinors data.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler."
  },
  {
    "no": "FKB-Naturinfo",
    "en": "FKB Nature Information",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/aa3c01f3-0678-470d-b03b-33085a7bae28",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.fkb?service=wms&request=getcapabilities",
    "notes": "Low zoom level",
    "tags": [
      "land"
    ],
    "abstractNo": "FKB-Naturinfo er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Naturinfo beskriver naturinformasjon som ikke faller inn under de andre naturressurskapitlene - konkret hekk, innmålte trær og steiner.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler.",
    "abstractEn": "FKB-Naturinfo er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Naturinfo beskriver naturinformasjon som ikke faller inn under de andre naturressurskapitlene - konkret hekk, innmålte trær og steiner.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler."
  },
  {
    "no": "FKB-Tiltak",
    "en": "FKB-Measures",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/8944603c-9414-43a7-9421-9a1de9850a96",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.fkb?service=wms&request=getcapabilities",
    "notes": "Low zoom level",
    "tags": [
      "land"
    ],
    "abstractNo": "FKB-Tiltak er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Tiltak skal inneholde objekter (områder der det skjer utbygging) som er omsøkt/godkjent gjennom saksbehandling i kommunen eller andre offentlige myndigheter. Denne informasjonen viser hvor det skjer endringer i terrenget og kan derfor brukes som metadata for de øvrige FKB-datasettene. I tillegg er målet at dataene i FKB-Tiltak nyttes til å få til en raskere oppdatering av grunnkartet når utbyggingen er ferdig. For objekttypene BygningTiltak/BygningKnekklinje overføres geometrien automatisk til FKB-Bygning når bygningen ferdigstilles (dersom data av bedre kvalitet ikke finnes).\n\nObjekter som er ferdig bygd og registrert i grunnkartet merkes som kartlagt (KARTREG 2) i tiltaksbasen, men vil normalt ikke bli slettet slik at historikken i FKB-Tiltak er tilgjengelig.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler.",
    "abstractEn": "Abstract"
  },
  {
    "no": "FKB-TraktorvegSti",
    "en": "FKB Tractor Roads and Paths",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/cc3a2d98-52ac-4699-9947-ed0625903de4",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.fkb?service=wms&request=getcapabilities",
    "notes": "Low zoom level",
    "tags": [
      "elevation",
      "transport"
    ],
    "abstractNo": "FKB-TraktorvegSti er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-TraktorvegSti er et landsdekkende FKB-datasett som inneholder traktorveger, stier og stitrapp med senterlinjegeometri.\n\nFKB-TraktorvegSti må sees i sammenheng med Elveg 2.0 som inneholder øvrig vegnett og som forvaltes i Nasjonal vegdatabank (NVDB). Sammen med vegnettet fra NVDB skal FKB-TraktorvegSti kunne danne et komplett samferdselsnettverk for kjørende, syklende og gående.\n\nDatagrunnlaget i FKB-TraktorvegSti vil ha svært varierende grad av nettverkstopologi. Man må regne med å gjøre en jobb med sammenknytning av FKB-TraktorvegSti og Elveg 2.0 før dette kan betraktes som ett nettverk og benyttes i nettverksanalyser.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler.",
    "abstractEn": "FKB-TraktorvegSti er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-TraktorvegSti er et landsdekkende FKB-datasett som inneholder traktorveger, stier og stitrapp med senterlinjegeometri.\n\nFKB-TraktorvegSti må sees i sammenheng med Elveg 2.0 som inneholder øvrig vegnett og som forvaltes i Nasjonal vegdatabank (NVDB). Sammen med vegnettet fra NVDB skal FKB-TraktorvegSti kunne danne et komplett samferdselsnettverk for kjørende, syklende og gående.\n\nDatagrunnlaget i FKB-TraktorvegSti vil ha svært varierende grad av nettverkstopologi. Man må regne med å gjøre en jobb med sammenknytning av FKB-TraktorvegSti og Elveg 2.0 før dette kan betraktes som ett nettverk og benyttes i nettverksanalyser.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler."
  },
  {
    "no": "FKB-Vann",
    "en": "FKB Water",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/595e47d9-d201-479c-a77d-cbc1f573a76b",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.fkb?service=wms&request=getcapabilities",
    "notes": "Low zoom level",
    "tags": [
      "elevation",
      "infrastructure"
    ],
    "abstractNo": "FKB-Vann beskriver geografisk beliggenhet, forløp og form for bekker, elver, kanaler, grøfter, innsjøer, isbreer og den topografiske delen av kyst og sjø. Primærdata kystkontur er identisk med kystkonturen i FKB-Vann",
    "abstractEn": "FKB-Vann beskriver geografisk beliggenhet, forløp og form for bekker, elver, kanaler, grøfter, innsjøer, isbreer og den topografiske delen av kyst og sjø. Primærdata kystkontur er identisk med kystkonturen i FKB-Vann"
  },
  {
    "no": "FKB-Veg",
    "en": "FKB Roads",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/4920b452-75cc-45f2-964c-3378204c3517",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.fkb?service=wms&request=getcapabilities",
    "notes": "Low zoom level",
    "tags": [
      "elevation",
      "transport"
    ],
    "abstractNo": "FKB-Veg er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Veg inneholder detaljert informasjon om alle offentlige og private veganlegg. Spesifikasjonen gjelder for de enkelte vegelementene som beskriver veglegemets geometri. Dataene omfatter beskrivelse av alle typer veger for kjørende, syklende og gående samt et utvalg av tilhørende objekter og avgrensninger.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler.",
    "abstractEn": "FKB-Veg er en del av Felles Kartdatabase (FKB). FKB er en samling datasett som utgjør en sentral del av grunnkartet. Se metadataoppføring for Felles Kartdatabase for mer info.\n\nFKB-Veg inneholder detaljert informasjon om alle offentlige og private veganlegg. Spesifikasjonen gjelder for de enkelte vegelementene som beskriver veglegemets geometri. Dataene omfatter beskrivelse av alle typer veger for kjørende, syklende og gående samt et utvalg av tilhørende objekter og avgrensninger.\n\nFKB-data er ikke-sensistive og åpne data. FKB-dataene er finansiert gjennom Geovekst-samarbeidet, eller kommunene alene for kommuner som står utenfor Geovekst. FKB-dataene er fritt tilgjengelige for Norge digitalt parter og kan lastes ned gjennom nedlastingsløsningen på Geonorge. Private aktører må kjøpe tilgang til dataene gjennom en forhandler."
  },
  {
    "no": "Fritidsbyggområder",
    "en": "Recreational Building Areas",
    "ownerNo": "Statistisk sentralbyrå",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/a2f2e360-b822-4b5b-9d3b-972f58a872ba",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart.ssb.no/api/mapserver/v1/wms/fritidsbyggomraader?service=WMS&version=1.3.0&request=GetCapabilities",
    "notes": "",
    "tags": [
      "land"
    ],
    "abstractNo": "Datasettet viser Fritidsbyggområder (Tettbygde) pr. 01.januar for året. Fritidsbyggområder er geografiske områder som har en dynamisk avgrensing, og antall områder og deres yttergrenser vil endre seg over tid avhengig av byggeaktivitet. \n\nMed fritidsbyggområde (tettbygde) menes en samling med minst 5 fritidsbygg, der avstanden mellom byggene ikke overstiger 75 meter\nDatakilder for avgrensing av områdene:\na. Kategorien Fritidsbolig i bygningsregisteret til Matrikkelen.\n    -  Bygningstyper 161, 162 og 163\nb. Arealfigurer i SSBs kartdatasett : Arealbruk (SSB-Arealbruk). \n\nLes mer om avgrensning, statistikk og tilhørende produktside :  https://www.ssb.no/natur-og-miljo/areal/statistikk/fritidsbyggomrader\n\nÅrsdatasett er nedlastbar både fra SSBs kartportal https://kart.ssb.no  > Se eget Tema \"Fritidsbyggområder\" eller gå til \"Innholdskatalog\" og  søk på \"fritid\" for oversikt over alle datasett",
    "abstractEn": "Datasettet viser Fritidsbyggområder (Tettbygde) pr. 01.januar for året. Fritidsbyggområder er geografiske områder som har en dynamisk avgrensing, og antall områder og deres yttergrenser vil endre seg over tid avhengig av byggeaktivitet. \n\nMed fritidsbyggområde (tettbygde) menes en samling med minst 5 fritidsbygg, der avstanden mellom byggene ikke overstiger 75 meter\nDatakilder for avgrensing av områdene:\na. Kategorien Fritidsbolig i bygningsregisteret til Matrikkelen.\n    -  Bygningstyper 161, 162 og 163\nb. Arealfigurer i SSBs kartdatasett : Arealbruk (SSB-Arealbruk). \n\nLes mer om avgrensning, statistikk og tilhørende produktside :  https://www.ssb.no/natur-og-miljo/areal/statistikk/fritidsbyggomrader\n\nÅrsdatasett er nedlastbar både fra SSBs kartportal https://kart.ssb.no  > Se eget Tema \"Fritidsbyggområder\" eller gå til \"Innholdskatalog\" og  søk på \"fritid\" for oversikt over alle datasett"
  },
  {
    "no": "Grunnskoler",
    "en": "Primary and secondary schools",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Directorate for Education and Training",
    "url": "https://kartkatalog.geonorge.no/metadata/db4b872f-264d-434c-9574-57232f1e90d2",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "society"
    ],
    "abstractNo": "Datasettet viser norske grunnskoler med noe tilhørende kontaktinformasjon og opplysninger. Datasettet omfatter offentlige og private barne- og ungdomsskoler. For enkelte skoler kan posisjonsnøyaktigheten avvike.\nDataene hentes fra en Nasjonalt skoleregister API som drives av Utdanningsdirektoratet (https://data-nsr.udir.no/swagger/index.html). Dataene i Nasjonalt Skoleregister oppdateres basert på informasjon fra Virksomhets- og foretaksregisteret (VoF)/Brønnøysundregisteret, Grunnskolens Informasjonssystem (GSI) og andre kilder.",
    "abstractEn": "The data set shows Norwegian primary schools with some associated contact information and information. The data set includes public and private primary and secondary schools. For some schools the accuracy may differ."
  },
  {
    "no": "Hovedled og Biled",
    "en": "Maritime transport - Fairways",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/8ff1538a-a93c-4391-8d6f-3555fc37819c",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://services.kystverket.no/wms.ashx?service=WMS&request=GetCapabilities",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "Farleden er gitt gjennom forskrift av 11. desember 2019 nr. 1834 (forskrift om farleder).\n\nHele norskekysten er i dag dekket av et standardisert referansesystem av ulike farledskategorier. Farledsstrukturen omfatter nettverket av sjøverts transportårer og er et nasjonalt geografisk referansesystem for tiltak innen forvaltning, planlegging, utbygging og operativ virksomhet i kystsonen.\n\nMer om farledsstrukturen:\n\nhttp://www.kystverket.no/Maritim-infrastruktur/Farleder\n/Farledsstrukturen/",
    "abstractEn": "Fairways are indicated through the Regulation dated 30 November 2009, no. 1477 (Regulation on fairways).\n\nThe entire coast of Norway is currently covered by a standardised reference system of various fairway categories. The fairway structure includes the network of maritime transport arteries and is a national geographical reference system for measures within administration, planning, development and operational activities in the coastal zone.\n\nMore about the fairway structure:\n\nhttp://www.kystverket.no/Maritim-infrastruktur/Farleder\n/Farledsstrukturen/"
  },
  {
    "no": "Høydedata - laser",
    "en": "Elevation Data - Laser",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/f297e948-8a34-4e6c-9740-54b3a657f8d5",
    "access": "open",
    "proto": "WMS/WWW:LINK-1.0-http--link",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.hoyde-dtm-nhm-topobathy-25833?request=getcapabilities&service=wms",
    "notes": "Several versions exist",
    "tags": [
      "elevation"
    ],
    "abstractNo": "Høydedata blir samlet inn gjennom ulike laserprosjekter, og dataene blir tilgjengeliggjort på høydedata.no. Hvert enkelt prosjekt blir lagt inn med metadata i Geonorge og referanse til prosjektet i kartløsningen.\n\nHøydedata gir en detaljert beskrivelse av terreng og overflate. Dataene er etablert som punktskyer fra flybåren laserskanning eller matching fra flybilder. Punktskyene har varierende tetthet (punkt/m2 ) tilpasset ulike formål. Fra punktskyene er det generert høydemodeller på grid-format av terreng (DTM) og overflate (DOM).",
    "abstractEn": "Høydedata blir samlet inn gjennom ulike laserprosjekter, og dataene blir tilgjengeliggjort på høydedata.no. Hvert enkelt prosjekt blir lagt inn med metadata i Geonorge og referanse til prosjektet i kartløsningen.\n\nHøydedata gir en detaljert beskrivelse av terreng og overflate. Dataene er etablert som punktskyer fra flybåren laserskanning eller matching fra flybilder. Punktskyene har varierende tetthet (punkt/m2 ) tilpasset ulike formål. Fra punktskyene er det generert høydemodeller på grid-format av terreng (DTM) og overflate (DOM)."
  },
  {
    "no": "Interkommunale brannvesen",
    "en": "Intermunicipal fire services",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/5bbce535-f909-44b8-b89f-1c395dc92598",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://ogc.dsb.no/wms.ashx?SERVICE=WMS&REQUEST=GetCapabilities&version=1.3.0",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Brannvesen i Norge er enten kommunale eller interkommunale.  Datasettet viser områdeavgrensingen for landets interkommunale brannvesen.  Områdene følger kommunegrenser.",
    "abstractEn": "The fire services in Norway is either municipal or intermunicipal.  The dataset shows the districts for the country's intermunicipal fire services.  The areas follow municipal boundaries."
  },
  {
    "no": "J50 Kartdata",
    "en": "J50 Map data",
    "ownerNo": "Norsk Polarinstitutt",
    "ownerEn": "Norwegian Polar Institute",
    "url": "https://kartkatalog.geonorge.no/metadata/3832caa3-6e5d-450c-9041-35f68852b0c9",
    "access": "open",
    "proto": "WWW:LINK-1.0-http--link",
    "wmsUrl": "",
    "notes": "Map Data Jan Mayen",
    "tags": [
      "elevation"
    ],
    "abstractNo": "J50 Kartdata er den mest detaljerte, heldekkende kartdatasamlingen for Jan Mayen. Produktet har et innhold som i all hovedsak tilsvarer kartserien Jan Mayen 1:50 000, og med en detaljering passende også for større målestokker. Produktet dekker landarealet av Jan Mayen.",
    "abstractEn": "J50 Kartdata er den mest detaljerte, heldekkende kartdatasamlingen for Jan Mayen. Produktet har et innhold som i all hovedsak tilsvarer kartserien Jan Mayen 1:50 000, og med en detaljering passende også for større målestokker. Produktet dekker landarealet av Jan Mayen."
  },
  {
    "no": "Kommuneplaner (landsdekkende kopi)",
    "en": "Municipal Master Plans",
    "ownerNo": "Direktoratet for byggkvalitet",
    "ownerEn": "Norwegian Building Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/41435fda-93ba-48a8-bd56-79a9287b6dad",
    "access": "restricted",
    "proto": "API-Features/WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nap.ft.dibk.no/services/wms/kommuneplaner/?service=WMS&request=GetCapabilities",
    "notes": "",
    "tags": [
      "land"
    ],
    "abstractNo": "Fra 1.1.2026 vil Direktoratet for byggkvalitet opprettholde «Norge digitalt arealplankartløsning» (NAP) med datasett for kommuneplaner og denne oppføringen er oppdatert med distribusjoner.\n\nKommuneplanen skal være kommunens overordnede styringsdokument. Den skal gi rammer for virksomhetenes planer og tiltak, og planer for bruk og vern av arealer i kommunen. Alle kommuner skal ha en kommuneplan. En samlet kommuneplan består både av en samfunnsdel med handlingsdel og en arealdel. Kommunen bestemmer gjennom vedtak av kommunal planstrategi om kommunen skal gjennomføre en full kommuneplanrevisjon av alle delene, eller om bare deler av kommuneplanen skal revideres, og hva revisjonen skal gå ut på. Kommuneplanen skal ivareta både kommunale, regionale og nasjonale mål, interesser og oppgaver, og bør omfatte alle viktige mål og oppgaver i kommunen. Den skal ta utgangspunkt i den kommunale planstrategien og legge retningslinjer og pålegg fra statlige og regionale myndigheter til grunn. Det kan utarbeides kommunedelplan for bestemte områder, temaer eller virksomhetsområder. Kommuneplanen skal ha en handlingsdel som angir hvordan planen skal følges opp de fire påfølgende år eller mer, og revideres årlig (Regjeringen.no).\n\nDatasettet genereres fra den landsdekkende kopien av kommuneplaner . Denne holdes oppdatert med data fra de originale plandataene i kommunene. Oppdateringen skjer ved synkronisering fra kommunene.",
    "abstractEn": "Fra 1.1.2026 vil Direktoratet for byggkvalitet opprettholde «Norge digitalt arealplankartløsning» (NAP) med datasett for kommuneplaner og denne oppføringen er oppdatert med distribusjoner.\n\nKommuneplanen skal være kommunens overordnede styringsdokument. Den skal gi rammer for virksomhetenes planer og tiltak, og planer for bruk og vern av arealer i kommunen. Alle kommuner skal ha en kommuneplan. En samlet kommuneplan består både av en samfunnsdel med handlingsdel og en arealdel. Kommunen bestemmer gjennom vedtak av kommunal planstrategi om kommunen skal gjennomføre en full kommuneplanrevisjon av alle delene, eller om bare deler av kommuneplanen skal revideres, og hva revisjonen skal gå ut på. Kommuneplanen skal ivareta både kommunale, regionale og nasjonale mål, interesser og oppgaver, og bør omfatte alle viktige mål og oppgaver i kommunen. Den skal ta utgangspunkt i den kommunale planstrategien og legge retningslinjer og pålegg fra statlige og regionale myndigheter til grunn. Det kan utarbeides kommunedelplan for bestemte områder, temaer eller virksomhetsområder. Kommuneplanen skal ha en handlingsdel som angir hvordan planen skal følges opp de fire påfølgende år eller mer, og revideres årlig (Regjeringen.no).\n\nDatasettet genereres fra den landsdekkende kopien av kommuneplaner . Denne holdes oppdatert med data fra de originale plandataene i kommunene. Oppdateringen skjer ved synkronisering fra kommunene."
  },
  {
    "no": "Matrikkelen - Adresse Leilighetsnivå",
    "en": "Cadastre – Address apartment level",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/365b0591-b536-42a6-a20d-22e404fbfe55",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "land"
    ],
    "abstractNo": "Offisielle adresser registrert i Matrikkelen. En offisiell adresse er den fullstendige adressen for en bygning, bygningsdel, bruksenhet, eiendom eller et annet objekt. En adresse er enten Vegadresse (Storgata 10) eller Matrikkeladresse (33/2-2). Dette datasettet leverer adressen på leilighetsnivå, det vil si med bruksenhetsnummer (H0102). En bygning med f.eks ti leiligheter er representert med ti adresseobjekter. \n\nAdressen er merket med tilhørighet til postkrets, grunnkrets, valgkrets, tettsted og sokn og i tillegg er adressens eller bruksenhetens knytning til matrikkelnummer (eiendom) med.\nAdresserte bygningsendringer er ikke med i dette produktet. \n\nAdressene som leveres i dette produktet er sammensatt og har ingen unik id i matrikkesystemet. Men adresseId og bruksenhetId (eller deres UUID-er) danner tilsammen unikhet. Adresser som ikke adresserer byginger eller som mangler knytning mot bruksenhet i matrikkelen har ingen bruksenhetId. \n\nDistribusjoner er satt opp mot en løsning som gir noe forsinkelse fra det offisielle Matrikkelsystemet. Fra ca. 15 minutters forsinkelse på WFS og for nedlasting av fritt valgt område fra kart, en dags forsinkelse for kommunefiler og WMS og ukentlig for fylkes-/landsfiler (ny filgenerering kun hvis det har skjedd endringer i Matrikkelen). Ved større endringer/lastinger kan forsinkelse bli større.",
    "abstractEn": "Offisielle adresser registrert i Matrikkelen. En offisiell adresse er den fullstendige adressen for en bygning, bygningsdel, bruksenhet, eiendom eller et annet objekt. En adresse er enten Vegadresse (Storgata 10) eller Matrikkeladresse (33/2-2). Dette datasettet leverer adressen på leilighetsnivå, det vil si med bruksenhetsnummer (H0102). En bygning med f.eks ti leiligheter er representert med ti adresseobjekter. \n\nAdressen er merket med tilhørighet til postkrets, grunnkrets, valgkrets, tettsted og sokn og i tillegg er adressens eller bruksenhetens knytning til matrikkelnummer (eiendom) med.\nAdresserte bygningsendringer er ikke med i dette produktet. \n\nAdressene som leveres i dette produktet er sammensatt og har ingen unik id i matrikkesystemet. Men adresseId og bruksenhetId (eller deres UUID-er) danner tilsammen unikhet. Adresser som ikke adresserer byginger eller som mangler knytning mot bruksenhet i matrikkelen har ingen bruksenhetId. \n\nDistribusjoner er satt opp mot en løsning som gir noe forsinkelse fra det offisielle Matrikkelsystemet. Fra ca. 15 minutters forsinkelse på WFS og for nedlasting av fritt valgt område fra kart, en dags forsinkelse for kommunefiler og WMS og ukentlig for fylkes-/landsfiler (ny filgenerering kun hvis det har skjedd endringer i Matrikkelen). Ved større endringer/lastinger kan forsinkelse bli større."
  },
  {
    "no": "Matrikkelen - Bygningspunkt",
    "en": "Cadastre – Building points",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/24d7e9d1-87f6-45a0-b38e-3447f8d7f9a1",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.matrikkelkart?service=wms&request=getcapabilities",
    "notes": "",
    "tags": [
      "land"
    ],
    "abstractNo": "Datasettet Matrikkelen-Bygningspunkt inneholder et lite utdrag av bygningsinformasjonen som er registrert i Matrikkelen, Norges offisielle register over fast eiendom, herunder bygninger.\\\\nDatasettet inneholder representasjonspunkt, bygningstype, bygningsnummer, nåværende bygningsstatus. I tillegg inneholder det ulike id-er for gjenfinning og koblinger (lokal id eller universell uuid) for bygning, og det leveres id(er) for adresse og eiendom pr bygning (hentet fra bruksenhetobjekter i matrikkelsystemet) samt Sefrak-id. \\\\n\\\\nUtgåtte bygninger er ikke med, - heller ikke bygningsendringer som for eksempel påbygg eller tilbygg.\\\\nProduktet inneholder data som er fritt tilgjengelig for alle.\\\\n\\\\nDistribusjoner er satt opp mot en distribusjonsløsning som baserer seg på endringslogg-tjeneste fra Matrikkelsystemet. De ulike distribusjonene har ulik oppdateringsfrekvens, fra 15 minutters forsinkelse på WFS og nedlasting av fritt valgt område fra kart, daglig for kommunevise filer og ukentlig for fylkes- og lands-filer (ny fil kun hvis det er skjedd endringer i Matrikkelen). Ved større endringer/lastinger kan forsinkelsen bli større.",
    "abstractEn": "Existing buildings with building point with building number, building status and building type. Does not include building modifications."
  },
  {
    "no": "Matrikkelen - Eiendomskart Teig",
    "en": "Cadastre - property",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/74340c24-1c8a-4454-b813-bfe498e80f16",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.matrikkel?service=wms&request=getcapabilities",
    "notes": "",
    "tags": [
      "land"
    ],
    "abstractNo": "Datasettet Matrikkelen-Eiendomskart Teig inneholder et utdrag av eiendomsinformasjon som er registrert i Matrikkelen, Norges offisielle register over fast eiendom.   Datasettet inneholder teiger (avgrensede arealer/jordstykker) med informasjon om hvilken eiendom (matrikkelenhet) de tilhører. Matrikkelnummeret (kommunenummer-gårdsnummer/bruksnummer eventulet festenummer, seksjonsnummer) identifiserer eiendommen og ligger til datatypen Matrikkelenhet. Matrikkelenhet inneholder også andre nøkkelopplysninger og \"varsel-flagg\" om eiendommen. Grensepunkt, grenser og teigareal med kvalitetsopplysninger er med i datasettet.  Volumer til anleggseiendommer (eiendommer over/under bakken) leveres som et areal, - et plant \"fotavtrykk\", men oppgittVolum kan være registrert.\n\nI tillegg fins ulike id-er for enklere gjenfinning og koblinger (lokal id eller universell uuid). Matrikkelen-Eiendomskart Teig inneholder data som er fritt tilgjengelig for alle (åpne data). Produktet Matrikkelen-Bygningspunkt inneholder id-er for kobling mellom Adresse, Bygning og Eiendom. \n\nDistribusjonen er satt opp mot en distribusjonsløsning som gir noe forsinkelse fra Matrikkelsystemet, - fra 30 minutters forsinkelse ved nedlasting av data i fritt valgt område fra kart, daglig for WMS og WFS, ukentlige for nedlasting av ferdiglagde filer og databaser (ny fil kun hvis det er skjedd endringer i Matrikkelen). Ved større endringer/lastinger kan forsinkelsen være større.",
    "abstractEn": "Datasettet Matrikkelen-Eiendomskart Teig inneholder et utdrag av eiendomsinformasjon som er registrert i Matrikkelen, Norges offisielle register over fast eiendom.   Datasettet inneholder teiger (avgrensede arealer/jordstykker) med informasjon om hvilken eiendom (matrikkelenhet) de tilhører. Matrikkelnummeret (kommunenummer-gårdsnummer/bruksnummer eventulet festenummer, seksjonsnummer) identifiserer eiendommen og ligger til datatypen Matrikkelenhet. Matrikkelenhet inneholder også andre nøkkelopplysninger og \"varsel-flagg\" om eiendommen. Grensepunkt, grenser og teigareal med kvalitetsopplysninger er med i datasettet.  Volumer til anleggseiendommer (eiendommer over/under bakken) leveres som et areal, - et plant \"fotavtrykk\", men oppgittVolum kan være registrert.\n\nI tillegg fins ulike id-er for enklere gjenfinning og koblinger (lokal id eller universell uuid). Matrikkelen-Eiendomskart Teig inneholder data som er fritt tilgjengelig for alle (åpne data). Produktet Matrikkelen-Bygningspunkt inneholder id-er for kobling mellom Adresse, Bygning og Eiendom. \n\nDistribusjonen er satt opp mot en distribusjonsløsning som gir noe forsinkelse fra Matrikkelsystemet, - fra 30 minutters forsinkelse ved nedlasting av data i fritt valgt område fra kart, daglig for WMS og WFS, ukentlige for nedlasting av ferdiglagde filer og databaser (ny fil kun hvis det er skjedd endringer i Matrikkelen). Ved større endringer/lastinger kan forsinkelsen være større."
  },
  {
    "no": "Matrikkelen, Norges offisielle eiendomsregister",
    "en": "The Cadastre, Norway's official property register",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/e77e6fdc-591d-4b1b-91b2-bd9d13fb33b7",
    "access": "restricted",
    "proto": "W3C:WS/WMS/WS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.matrikkelkart?service=wms&request=getcapabilities",
    "notes": "",
    "tags": [
      "land"
    ],
    "abstractNo": "Matrikkelen er Norges offisielle register over fast eiendom, herunder bygninger, boliger/bruksenheter og offisielle adresser.\nMatrikkelen er regulert av matrikkelloven som trådte i kraft 1.1.2010 og erstattet den tidligere delingsloven. \n\nMatrikkelen inkluderer også data fra tinglysingen, folkeregisteret, enhetsregisteret, grunnforurensing og kulturminner.",
    "abstractEn": "The Cadastre is Norway's official register of real property, including buildings, housing/housing units and physical addresses.\nThe Cadastre is regulated by the Cadastre Act which came into force on 1 January 2010 and replaced the previous Land Partition Act.  \n\nThe Cadastre also includes data from official registration, the population register, the central coordinating register for legal entities, ground contamination and cultural monuments."
  },
  {
    "no": "Matrikkelkart WMS",
    "en": "Cadastre Map WMS",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/30dda4c6-2cba-4378-b2e7-26f644df9d99",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "Address, building points and parcel",
    "tags": [
      "land"
    ],
    "abstractNo": "Tegner de geografiske objektene (eiendomskart-teig, bygningspunkt og adresse) fra Matrikkelen, Norges offisielle eiendomsregister. Tjenesten går mot et uttrekk av matrikkelen som oppdateres daglig (ved større endringer eller ved ny lasting kan det gå noen dager). Tjenesten viser informasjon om enkelt-objekter som er \"åpne data\"/tilgjengelig for alle\n\n•\tTegner grensepunkt og grenselinjer med ulik farge etter hvilken nøyaktighetsklasse de blir beregnet til, - unntatt \"fotavtrykket\" til anleggseiendommer som tegnes svart\n\n•\tTegner matrikkelnummer \"flytende\", det flytter seg etter hvilket bildeutsnitt som vises på skjermen\n\n•\tTegner eksisterende bygninger, ikke utgåtte. Velg å tegne bygningssymbol og/eller bygningsnummer\n\n•\tAdressetekst viser eventuelle adressetilleggsnavn, men ikke bruksenhetsnummer som er del av offisiell adresse på f.eks leiligheter. \nTegner Atkomstpunkt og viser stiplet linje mot tilhørende adresse",
    "abstractEn": "Tegner de geografiske objektene (eiendomskart-teig, bygningspunkt og adresse) fra Matrikkelen, Norges offisielle eiendomsregister. Tjenesten går mot et uttrekk av matrikkelen som oppdateres daglig (ved større endringer eller ved ny lasting kan det gå noen dager). Tjenesten viser informasjon om enkelt-objekter som er \"åpne data\"/tilgjengelig for alle\n\n•\tTegner grensepunkt og grenselinjer med ulik farge etter hvilken nøyaktighetsklasse de blir beregnet til, - unntatt \"fotavtrykket\" til anleggseiendommer som tegnes svart\n\n•\tTegner matrikkelnummer \"flytende\", det flytter seg etter hvilket bildeutsnitt som vises på skjermen\n\n•\tTegner eksisterende bygninger, ikke utgåtte. Velg å tegne bygningssymbol og/eller bygningsnummer\n\n•\tAdressetekst viser eventuelle adressetilleggsnavn, men ikke bruksenhetsnummer som er del av offisiell adresse på f.eks leiligheter. \nTegner Atkomstpunkt og viser stiplet linje mot tilhørende adresse"
  },
  {
    "no": "N20 Kartdata",
    "en": "N20 Map Data",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/c9e53371-c296-4631-a08d-2e7248a81757",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.fkb?service=wms&request=getcapabilities",
    "notes": "FKB WMS",
    "tags": [
      "elevation"
    ],
    "abstractNo": "N20 Kartdata er basert på utvalgte og generaliserte FKB data. Informasjonen er ytterligere generalisert i forhold til N5 Kartdata. Temagrupper N20 Kartdata: Høyde:  Høydekurver (ekvidistanse 10 meter) og høydepunkt. Vann: Kyst, sjø, innsjø og vassdrag. Administrative grenser: Administrasjonsgrenser, eiendomsinformasjon, servituttgrenser, verneområder og kulturminner. Markslag: Markslaginformasjon. Areal: Arealbruk. Bygg og anlegg: Utvalgte bygningstyper, bygningsmessige anlegg og  ledninger. Samferdsel: Silt/tynnet VBASE, jernbane, annen samferdsel og lufthavn. Tekst: Utvalgte presentasjonsdata.",
    "abstractEn": "N20 Kartdata er basert på utvalgte og generaliserte FKB data. Informasjonen er ytterligere generalisert i forhold til N5 Kartdata. Temagrupper N20 Kartdata: Høyde:  Høydekurver (ekvidistanse 10 meter) og høydepunkt. Vann: Kyst, sjø, innsjø og vassdrag. Administrative grenser: Administrasjonsgrenser, eiendomsinformasjon, servituttgrenser, verneområder og kulturminner. Markslag: Markslaginformasjon. Areal: Arealbruk. Bygg og anlegg: Utvalgte bygningstyper, bygningsmessige anlegg og  ledninger. Samferdsel: Silt/tynnet VBASE, jernbane, annen samferdsel og lufthavn. Tekst: Utvalgte presentasjonsdata."
  },
  {
    "no": "N250 Kartdata",
    "en": "N250 Map Data",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/442cae64-b447-478d-b384-545bc1d9ab48",
    "access": "open",
    "proto": "WMS/WMTS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.topo?service=wms&request=getcapabilities",
    "notes": "",
    "tags": [
      "elevation"
    ],
    "abstractNo": "N250 Kartdata er en generalisering av N50 Kartdata og kartografisk tilpasset målestokk 1:100 000 - 1:300 000. N250 Kartdata dekker fastlands-Norge begrenset av riksgrensen mot nabolandene og territorialgrensen i havet. N250 Kartdata ajourføres kontinuerlig og distribueres ukentlig.",
    "abstractEn": "N250 Map Data is a generalisation of N50 Map Data and cartographically adapted to a scale of 1:100,000 - 1:300,000. N250 Map Data covers mainland Norway delimited by the national borders with neighbouring countries and the territorial boundaries in the sea."
  },
  {
    "no": "N250 Raster",
    "en": "N250 Raster",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/d2ae29bd-0692-40de-a173-833afcddfe22",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "elevation",
      "risk"
    ],
    "abstractNo": "N250 Raster er en gjengivelse av temaene i N250 Kartdata og har en presentasjon som så langt mulig er lik N50 Raster. N250 Raster dekker fastlands-Norge og er begrenset av riksgrensen mot nabolandene og territorialgrensen i havet. N250 Raster baserer seg på N250 Kartdata og distribueres ukentlig. N250 Raster på GeoTIFF-format leveres tile-vis i områder 1 grad Ø-V og 0,5 grader N-S. \nFølgende referansefiler medfølger GeoTIFF-formatet: SOSI og TFW.",
    "abstractEn": "N250 Raster is a reiteration of the themes in N250 Map Data and has a presentation that is similar to N50 Raster \nas far as possible. N250 Raster covers mainland Norway and is delimited by the national borders with neighbouring countries and the territorial boundaries in the sea.\n\nN250 Raster is based on N250 Map Data and distributed monthly. N250 Raster in GeoTIFF format is supplied on a per-tile basis in areas 1 degree E-W and 0.5 degrees N-S. \nThe following reference files accompany the GeoTIFF format: SOSI and TFW."
  },
  {
    "no": "N5 Kartdata",
    "en": "N5 Map Data",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/6bb353c3-2b21-42fe-b296-31e60f64f95d",
    "access": "restricted",
    "proto": "WMS/WMTS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.fkb?service=wms&request=getcapabilities",
    "notes": "FKB WMS",
    "tags": [
      "elevation"
    ],
    "abstractNo": "Informasjon tilsvarende digitalt ØK. N5 Kartdata er basert på utvalgte, generaliserte FKB data.\nTemagrupper:\nHøyde: Høydekurver, 5 m ekv. og høydepunkt.\nVann: Kyst, sjø, innsjø og vassdrag.\nAdministrative grenser: Administrasjonsgrenser, eiendomsinformasjon, servituttgrenser, verneområder og kulturminner.\nMarkslag: Markslaginformasjon.\nAreal: Arealbruk.\nBygg og anlegg: Bygninger, bygningsmessige anlegg og ledninger.\nSamferdsel: Vegsituasjon, jernbane, annen samferdsel og flyplass.\nTekst: Presentasjonsdata. \nDekning: Dekningen varierer, avhengig av hvor det har vært gjennomført Geovekst - prosjekter. For informasjon om dekning ta kontakt med det lokale fylkeskartkontor",
    "abstractEn": "Informasjon tilsvarende digitalt ØK. N5 Kartdata er basert på utvalgte, generaliserte FKB data.\nTemagrupper:\nHøyde: Høydekurver, 5 m ekv. og høydepunkt.\nVann: Kyst, sjø, innsjø og vassdrag.\nAdministrative grenser: Administrasjonsgrenser, eiendomsinformasjon, servituttgrenser, verneområder og kulturminner.\nMarkslag: Markslaginformasjon.\nAreal: Arealbruk.\nBygg og anlegg: Bygninger, bygningsmessige anlegg og ledninger.\nSamferdsel: Vegsituasjon, jernbane, annen samferdsel og flyplass.\nTekst: Presentasjonsdata. \nDekning: Dekningen varierer, avhengig av hvor det har vært gjennomført Geovekst - prosjekter. For informasjon om dekning ta kontakt med det lokale fylkeskartkontor"
  },
  {
    "no": "N50 Kartdata",
    "en": "N50 Map Data",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/ea192681-d039-42ec-b1bc-f3ce04c189ac",
    "access": "open",
    "proto": "WMS/WMTS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.topo?service=wms&request=getcapabilities",
    "notes": "",
    "tags": [
      "elevation"
    ],
    "abstractNo": "Kartdata tilpasset målestokkområdet 1:25 000 til 1:100 000. Produktet har et innhold som tilsvarer papirkartserien Norge 1:50 000 med unntak av bathymetri (dybder). Temaer som inngår i produktet er arealdekke (vann, markslag, etc.), administrative områder, bygninger og anlegg, høyde, restriksjonsområder, samferdsel og stedsnavn. N50 Kartdata dekker fastlands-Norge og er begrenset av riksgrensen mot nabolandene og territorialgrensen i havet. Produktet er kartografisk redigert med tanke på presentasjon i målestokk 1:50 000. N50 Kartdata ajourføres kontinuerlig og distribueres ukentlig.",
    "abstractEn": "Map data customised for the scale range 1:25,000 to 1:100,000. This product has a content corresponding to the paper map series Norway 1:50,000, with the exception of bathymetry (depths). Themes included in the product are land cover (water, soil type, etc.), administrative areas, buildings and facilities, height, restricted areas, transport and communications and place names. N50 Map Data covers mainland Norway and is delimited by the national borders with neighbouring countries and the territorial boundaries in the sea.  This product has been cartographically edited with a view to presentation on a scale of 1:50,000.\\\\n\\\\nN50 Map Data is updated regularly and distributed weekly."
  },
  {
    "no": "N50 Raster (UTM33) - Rutevis",
    "en": "N50 Raster (UTM33) - Map tiles",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/1a7d4919-fc5d-4278-9ae9-45ee23f26808",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.topo?service=wms&request=getcapabilities",
    "notes": "",
    "tags": [
      "elevation",
      "risk",
      "transport"
    ],
    "abstractNo": "N50 Raster har lik presentasjon (symbolikk) som kartserien Norge 1:50 000. N50 Raster er begrenset av riksgrensen mot nabolandene og territorialgrensen i havet. Datasettet inneholder sjøinformasjon.\n\nN50 Raster baserer seg på N50 Kartdata og distribueres ukentlig.\n\nN50 Raster på GeoTIFF-format leveres i ruter á 20 km x 20 km. \nFølgende referansefil medfølger GeoTIFF-formatet: SOSI og TFW.\n\nØnskes N50 Raster som regionvise filer må dette lastes ned som MrSID-format. Disse filene kan lastes ned fra www.geonorge.no under oppføringen N50 Raster - Regionsvis",
    "abstractEn": "N50 Raster uses similar presentation (symbols) to the map series Norway 1:50,000. N50 Raster is delimited by the national borders with neighbouring countries and the territorial boundaries in the sea.  The dataset includes hydrographic information.\n\nN50 Raster is updated regularly and distributed weekly."
  },
  {
    "no": "N500 Kartdata",
    "en": "N500 Map Data",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/58e0dbf8-0d47-47c8-8086-107a3fa2dfa4",
    "access": "open",
    "proto": "WMS/WMTS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.topo?service=wms&request=getcapabilities",
    "notes": "",
    "tags": [
      "elevation"
    ],
    "abstractNo": "N500 Kartdata er en generalisering av N250 Kartdata og kartografisk tilpasset målestokk 1:300 000 - 1:700 000. N500 Kartdata dekker fastlands-Norge begrenset av riksgrensen mot nabolandene og territorialgrensen i havet. N500 Kartdata ajourføres kontinuerlig og distribueres ukentlig.",
    "abstractEn": "N500 Map Data is a generalisation of N250 Map Data and cartographically adapted to a scale of 1:300,000 - 1:700,000. N500 Map Data covers mainland Norway delimited by the national borders with neighbouring countries and the territorial boundaries in the sea."
  },
  {
    "no": "N500 Raster",
    "en": "N500 Raster",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/b466d866-8e32-438b-bb58-80e52fe85ada",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "elevation",
      "risk"
    ],
    "abstractNo": "N500 Raster er en gjengivelse av temaene i N500 Kartdata og har en presentasjon som så langt mulig er lik N250 Raster. N500 Raster dekker fastlands-Norge og er begrenset av riksgrensen mot nabolandene og territorialgrensen i havet. N500 Raster baserer seg på N500 Kartdata og distribueres ukentlig. N500 Raster på GeoTiFF-format leveres  tile-vis i områder 2 grader Ø-V og 1 grad N-S. \nFølgende referansefiler medfølger: SOSI og TFW",
    "abstractEn": "N500 Raster is a reiteration of the themes in N500 Map Data and has a presentation that is similar to N250 Raster as far as possible. N500 Raster covers mainland Norway and is delimited by the national borders with neighbouring countries and the territorial boundaries in the sea.\nN500 Raster is based on N500 Map Data and distributed monthly. N500 Raster in GeoTIFF format is supplied on a per-tile basis in areas 2 degrees E-W and 1 degree N-S. \nThe following reference files are supplied: SOSI and TFW."
  },
  {
    "no": "N5000 Kartdata",
    "en": "N5000 Map Data",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/c777d53d-8916-4d9d-bae4-6d5140e0c569",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.topo?service=wms&request=getcapabilities",
    "notes": "",
    "tags": [
      "elevation"
    ],
    "abstractNo": "N5000 Kartdata er tilpasset målestokk 1:3 000 000 til \n1:7 000 000 og dekker fastlands-Norge begrenset av riksgrensen mot nabolandene og territorialgrensen i havet. Kartdatabasen er en generalisering av N2000 Kartdata og er kartografisk redigert med tanke på presentasjon i målestokk 1: 5 000 000. N5000 Kartdata ajourføres kontinuerlig og distribueres ukentlig.",
    "abstractEn": "N5000 Map Data is adapted to a scale of 1: 3,000,000 to \n1:7,000,000 and covers mainland Norway delimited by the national borders with neighbouring countries and the territorial boundaries in the sea.  The map database is a generalisation of N2000 Map Data and has been cartographically edited with a view to presentation on a scale of 1: 5,000,000."
  },
  {
    "no": "Nasjonale grenser",
    "en": "Nasjonale grenser",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/8f1a7a13-095e-43f8-8e97-81ed57be40ad",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "admin"
    ],
    "abstractNo": "Sirkumpolært bakgrunnskart med landområder, sjøområder, kystkonturer, isbreer og riksgrenser fra Vmap0.",
    "abstractEn": "Sirkumpolært bakgrunnskart med landområder, sjøområder, kystkonturer, isbreer og riksgrenser fra Vmap0."
  },
  {
    "no": "Norge i bilder",
    "en": "Norge i bilder",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/e7cd5f9b-20e1-4f59-b379-64828cd38062",
    "access": "open",
    "proto": "WWW:LINK-1.0-http--link",
    "wmsUrl": "",
    "notes": "Background map",
    "tags": [
      "elevation"
    ],
    "abstractNo": "Norge i bilder er et nettsted realisert i et samarbeid mellom Statens vegvesen, Norsk institutt for Bioøkonomi (NIBIO) og Statens kartverk.\n\nHer får du oversikt over ortofoto (målestokkriktige flybilder) som samarbeidspartene i Norge digitalt tilbyr på nettet. Publisering i Norge i bilder er også åpnet for datatilbydere utenfor Norge digitalt.",
    "abstractEn": "Norge i bilder er et nettsted realisert i et samarbeid mellom Statens vegvesen, Norsk institutt for Bioøkonomi (NIBIO) og Statens kartverk.\n\nHer får du oversikt over ortofoto (målestokkriktige flybilder) som samarbeidspartene i Norge digitalt tilbyr på nettet. Publisering i Norge i bilder er også åpnet for datatilbydere utenfor Norge digitalt."
  },
  {
    "no": "Norges maritime grenser",
    "en": "Norway's maritime boundaries",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/e106adf4-c9d8-4fce-a9b5-7886a4126d23",
    "access": "open",
    "proto": "Tjenestelag/WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.nmg?service=wms&request=getcapabilities",
    "notes": "Contains several relevant maritime datasets",
    "tags": [
      "admin",
      "transport"
    ],
    "abstractNo": "Norges maritime grenser er en samlebetegnelse for grenser og soner i havområder som inngår i Norges lover og forskrifter. Grensene og områdene er sammenstilt i et offisielt vektordatasett som dekker områdene Fastlands-Norge, Jan Mayen og Svalbard, samt Bouvetøya.",
    "abstractEn": "\"Norway's maritime boundaries\" is a generic term for boundaries and zones in sea areas that are subject to Norwegian laws and regulations. These boundaries and areas are compiled into an official vector dataset which covers the areas mainland Norway, Jan Mayen and Svalbard, and Bouvetøya."
  },
  {
    "no": "NVDB Rutedatasett 2.0",
    "en": "NVDB Route Dataset 2.0",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/8c971626-e007-4b7d-9db1-425a72174ce7",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "Navigation and route planning",
    "tags": [
      "transport"
    ],
    "abstractNo": "NVDB-Rutedatasett 2.0 er et produkt fra NVDB som er beregnet på navigasjon og ruteplanlegging. Datasettet har et vegnett segmentert på aktuelle strekningsegenskaper fra NVDB. Vegsperringer og svingerestriksjoner leveres som egne objekter. Produktet leveres fylkesvis på filformatet SpatiaLite.  \n\nProduktet fra NVDB oppdateres en gang pr måned, men normalt med unntak av starten av januar og starten av august. Massivklienten skal også nå fungere for NVDB Rutedatasett. \n\nDette er ny versjon av NVDB-Rutedatasett.",
    "abstractEn": "NVDB-Rutedatasett 2.0 er et produkt fra NVDB som er beregnet på navigasjon og ruteplanlegging. Datasettet har et vegnett segmentert på aktuelle strekningsegenskaper fra NVDB. Vegsperringer og svingerestriksjoner leveres som egne objekter. Produktet leveres fylkesvis på filformatet SpatiaLite.  \n\nProduktet fra NVDB oppdateres en gang pr måned, men normalt med unntak av starten av januar og starten av august. Massivklienten skal også nå fungere for NVDB Rutedatasett. \n\nDette er ny versjon av NVDB-Rutedatasett."
  },
  {
    "no": "NVDB Ruteplan nettverksdatasett",
    "en": "National roads database - road network for routing",
    "ownerNo": "Statens vegvesen",
    "ownerEn": "Norwegian Public Roads Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/8d0f9066-34f9-4423-be12-8e8523089313",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "Route planning for cars",
    "tags": [
      "transport"
    ],
    "abstractNo": "Vegvesenet deler data som brukes i vegvesenets ruteplan-tjeneste, se https://dataut.vegvesen.no/dataset/ruteplandata-bil, i formatvariantene SpatiaLite og ESRI filgeodatabase. Anbefalt format er SpatiaLite, ettersom det er hva vi bruker i vår egen applikasjon.  Datasettet inneholder NVDB vegnett tilrettelagt for bil.\nDatasett oppdateres ca. en gang pr. måned.\n\nESRI network filgeodatabase er en \"best effort\" konvertering av SpatiaLite-formatet:\n\n- Vegnettsrestriksjoner: er delvis implementert (originaldata finnes i tabellen main.nvdb_vegnettsrestriksjon)\nAlle veglenker har en attributt som heter vegnettsrestriksjon\nHvis veglenken har en oppføring i tabellen main.nvdb_vegnettsrestriksjon får attributten verdien \"ja\". Veglenken er likevel satt opp som 100% åpen i nettverket.\nHvis veglenken ikke har en oppføring i tabellen main.nvdb_vegnettsrestriksjon får attributten verdien \"nei\".\n\n- Vegsperringer: er delvis implementert (originaldata finnes i tabellen main.nvdb_vegsperring)\nAlle veglenker har tre attributter som heter vegsperring, vegsperring_type og vegsperring_function\nHvis veglenken har en oppføring i tabellen main.nvdb_vegnettsperring og med Function = «Betalingssperre» får attributten vegsperring verdien \"nei\". For alle andre veglenker med oppføring i tabellen main.nvdb_vegnettsperring får attributten vegsperring verdien \"ja\".\nHvis veglenken ikke har en oppføring i tabellen main.nvdb_vegnettsperring får attributten vegsperring verdien \"nei\".\n\n- Gjennomkjøring forbudt er delvis implementert (originaldata finnes i tabellen main.nvdb_gjkring_forbudt)\nAlle veglenker har en attributt som heter gjennomkjoring_forbudt\nHvis veglenken har en oppføring i tabellen main.nvdb_gjkring_forbudt får attributten verdien \"ja\". Veglenken er satt opp som \"åpen\" i nettverket, men med en Restriction \"Usage Type\" = Avoid, og med customverdien 100. Denne restriksjonen benyttes for travel modes Bil tid og Bil distanse.\nHvis veglenken ikke har en oppføring i tabellen main.nvdb_gjkring_forbudt får attributten verdien \"nei\"\n\n- Svingerestriksjoner: er implementert (originaldata finnes i tabellen main.turnrestrictions).\n\n- I datasettet er det satt opp to travel modes: Bil tid og Bil distanse, der begge tar hensyn til hierarki basert på attributten «level\".",
    "abstractEn": "The Norwegian Public Road administration publishes the data used in our own routing planner, http://data.norge.no/data/api-ruteplantjeneste-bil. Formats are SpatialLite and ESRI geodatabase. Dataset are optimized for car routing (Route) and bike (Route_bike).\n\nData will be updatet monthly, except in August and January."
  },
  {
    "no": "NVDB Vegnett Pluss",
    "en": "NVDB Road Network Plus",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/97e6a869-8dd4-4379-bf39-f7d7dbf94863",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "NVDB Vegnett Pluss er et forvaltningsdatasett for kommunene til forvaltning av vegnettet i SFKB. En kvalitetssikret versjon tilgjengeliggjøres på Geonorge. Datasettet omfatter alle kjørbare veger som er lengre enn 50 meter, eller del av et nettverk, samt gang- og sykkelveger og sykkelveger representert som veglenkegeometri. Fortau, gangveger, gangfelt, traktorveger og stier som tidligere fantes i FKB-TraktorvegSti, vil også være en del av NVDB Vegnett Pluss. For disse typene veg gjenstår noe innsamling av data.\n\nI tillegg inneholder datasettet adresseinformasjon (som gir mulighet for kobling til matrikkelen og andre registre), fartsgrenser, trafikkreguleringer og vegklasser. Veglenkens attributter er tematisert etter typeveg, vegkategori og vegfase.",
    "abstractEn": "NVDB Vegnett Pluss er et forvaltningsdatasett for kommunene til forvaltning av vegnettet i SFKB. En kvalitetssikret versjon tilgjengeliggjøres på Geonorge. Datasettet omfatter alle kjørbare veger som er lengre enn 50 meter, eller del av et nettverk, samt gang- og sykkelveger og sykkelveger representert som veglenkegeometri. Fortau, gangveger, gangfelt, traktorveger og stier som tidligere fantes i FKB-TraktorvegSti, vil også være en del av NVDB Vegnett Pluss. For disse typene veg gjenstår noe innsamling av data.\n\nI tillegg inneholder datasettet adresseinformasjon (som gir mulighet for kobling til matrikkelen og andre registre), fartsgrenser, trafikkreguleringer og vegklasser. Veglenkens attributter er tematisert etter typeveg, vegkategori og vegfase."
  },
  {
    "no": "Politisoner og -distrikter",
    "en": "Police Zones and Districts",
    "ownerNo": "Politi og lensmannsetaten",
    "ownerEn": "The police",
    "url": "https://kartkatalog.geonorge.no/metadata/cf2f458c-8648-45cd-b106-d63a72686f95",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.politisonerdistrikter?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "admin"
    ],
    "abstractNo": "Datasettet viser inndelingen av landet i politisoner- og distrikter. Politisoner er delt inn i hovedpolitisoner og politisoner.",
    "abstractEn": "Datasettet viser inndelingen av landet i politisoner- og distrikter. Politisoner er delt inn i hovedpolitisoner og politisoner."
  },
  {
    "no": "Postal districts",
    "en": "Postal districts",
    "ownerNo": "Norwegian Mapping Authority",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "admin"
    ],
    "abstractNo": "",
    "abstractEn": ""
  },
  {
    "no": "Reguleringsplaner (landsdekkende kopi)",
    "en": "Municipal Zoning Plans (Nationwide Copy)",
    "ownerNo": "Direktoratet for byggkvalitet",
    "ownerEn": "Norwegian Building Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/dac27348-5c2e-4a6a-9497-c4c792108cae",
    "access": "restricted",
    "proto": "API-Features/WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nap.ft.dibk.no/services/wms/reguleringsplaner/?service=WMS&request=GetCapabilities",
    "notes": "",
    "tags": [
      "land"
    ],
    "abstractNo": "Fra 1.1.2026 vil Direktoratet for byggkvalitet opprettholde «Norge digitalt arealplankartløsning» (NAP) med datasett for reguleringsplaner og denne oppføringen er oppdatert med distribusjoner.\n\nReguleringsplan er et arealplankart med tilhørende bestemmelser som fastlegger bruk, flerbruk og vern i bestemte områder, og som gir grunnlag for avklaring av hvilke bygge- og anleggstiltak som kan gjennomføres i planområdet. Kommunestyret skal sørge for at det blir utarbeidet reguleringsplan for de områder i kommunen hvor dette følger av loven eller av kommuneplanens arealdel, samt der det ellers er behov for å sikre forsvarlig planavklaring og gjennomføring av bygge- og anleggstiltak, flerbruk og vern i forhold til berørte private og offentlige interesser. For gjennomføring av større bygge- og anleggstiltak og andre tiltak som kan få vesentlige virkninger for miljø og samfunn, kreves det reguleringsplan. Reguleringsplan kan utarbeides som en områderegulering for et større område eller som en detaljregulering for enkelttiltak eller mindre områder. Staten kan, når viktige statlige eller regionale interesser tilsier det, vedta statlig reguleringsplan. Private har rett til å fremme forslag til detaljregulering.\n\nDatasettet genereres fra den landsdekkende kopien av reguleringsplaner. Denne holdes oppdatert med data fra de originale plandataene som forvaltes i kommunene. Oppdateringen skjer ved synkronisering eller periodisk kopiering fra kommunene sine data.",
    "abstractEn": "Fra 1.1.2026 vil Direktoratet for byggkvalitet opprettholde «Norge digitalt arealplankartløsning» (NAP) med datasett for reguleringsplaner og denne oppføringen er oppdatert med distribusjoner.\n\nReguleringsplan er et arealplankart med tilhørende bestemmelser som fastlegger bruk, flerbruk og vern i bestemte områder, og som gir grunnlag for avklaring av hvilke bygge- og anleggstiltak som kan gjennomføres i planområdet. Kommunestyret skal sørge for at det blir utarbeidet reguleringsplan for de områder i kommunen hvor dette følger av loven eller av kommuneplanens arealdel, samt der det ellers er behov for å sikre forsvarlig planavklaring og gjennomføring av bygge- og anleggstiltak, flerbruk og vern i forhold til berørte private og offentlige interesser. For gjennomføring av større bygge- og anleggstiltak og andre tiltak som kan få vesentlige virkninger for miljø og samfunn, kreves det reguleringsplan. Reguleringsplan kan utarbeides som en områderegulering for et større område eller som en detaljregulering for enkelttiltak eller mindre områder. Staten kan, når viktige statlige eller regionale interesser tilsier det, vedta statlig reguleringsplan. Private har rett til å fremme forslag til detaljregulering.\n\nDatasettet genereres fra den landsdekkende kopien av reguleringsplaner. Denne holdes oppdatert med data fra de originale plandataene som forvaltes i kommunene. Oppdateringen skjer ved synkronisering eller periodisk kopiering fra kommunene sine data."
  },
  {
    "no": "S100 Kartdata",
    "en": "S100 Map data",
    "ownerNo": "Norsk Polarinstitutt",
    "ownerEn": "Norwegian Polar Institute",
    "url": "https://kartkatalog.geonorge.no/metadata/bd6050e8-7182-459b-9989-66c4ecbae874",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://geodata.npolar.no/arcgis/services/Basisdata/NP_Basiskart_Svalbard_WMS/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "Map data for Svalbard",
    "tags": [
      "elevation"
    ],
    "abstractNo": "S100 Kartdata er den mest detaljerte, heldekkende kartdatasamlingen for Svalbard. Produktet har et innhold som i all hovedsak tilsvarer kartserien Svalbard 1:100 000, og med en detaljering passende også for større målestokker. Produktet dekker landarealet av Svalbard.",
    "abstractEn": "S100 Map data is the most detailed map data collection covering all of Svalbard. The product has a content which largely corresponds to the Svalbard 1:100 000 map series, and with a level of detail also suitable for larger scales. The product covers the land area of Svalbard."
  },
  {
    "no": "S250 Kartdata",
    "en": "S250 Map data",
    "ownerNo": "Norsk Polarinstitutt",
    "ownerEn": "Norwegian Polar Institute",
    "url": "https://kartkatalog.geonorge.no/metadata/4bccbc7b-f808-4e12-bf5f-38ad496fe9ca",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://geodata.npolar.no/arcgis/services/Basisdata/NP_Basiskart_Svalbard_WMS/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "Map data for Svalbard",
    "tags": [
      "elevation"
    ],
    "abstractNo": "S250 Kartdata er en generalisering av S100 Kartdata kartografisk tilpasset målestokkområdet 1:100 000 - 1:300 000. Produktet dekker landarealet av Svalbard.",
    "abstractEn": "S250 Map data is a generalization of S100 Map data, cartographically suited for scales 1:100 000 to 1:300 000. The product covers the land area of Svalbard."
  },
  {
    "no": "Sentrumssoner",
    "en": "Central Area Zones",
    "ownerNo": "Statistisk sentralbyrå",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/b7b6a84e-de26-4c26-a6fb-81140c517b5b",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart.ssb.no/api/mapserver/v1/wms/sentrumssoner?service=WMS&version=1.3.0&request=GetCapabilities",
    "notes": "",
    "tags": [
      "society"
    ],
    "abstractNo": "Inneholder avgrensning av og statistikk knyttet til sentrumssoner pr. 01.januar   Består av 3 lag:  Handels- og servicesoner, Sentrumsanalyseruter og Sentrumssoner.  Produseres årlig, kun siste eksisterende år tilgjengeliggjøres.  For info om eldre datasett kontakt gisressurssenter@ssb.no\n1. Eit sentrum er eit område sett saman av ein eller fleire sentrumskjernar og ei sone på 100 meter i kring. 2. Ein sentrumskjerne er eit område med minst 4 ulike hovudnæringsgrupper med sentrumsfunksjonar. I tillegg til detaljvarehandel, må offentleg administrasjon eller helse- og sosialtenester eller kulturell verksemd, underhaldning eller annan tenesteyting vere representert. Avstanden mellom bedriftene skal ikkje vere meir enn 50 meter. Det må vere minst 50 tilsette i sentrumssona. For mer informasjon: http://www.ssb.no/arealsentrum.\n\nÅrsdatasett er nedlastbar både fra SSBs kartportal https://kart.ssb.no  > Se eget Tema \"Sentrumssoner\" eller gå til \"Innholdskatalog\" for oversikt over alle tilgjengelig datasett",
    "abstractEn": "Inneholder avgrensning av og statistikk knyttet til sentrumssoner pr. 01.januar   Består av 3 lag:  Handels- og servicesoner, Sentrumsanalyseruter og Sentrumssoner.  Produseres årlig, kun siste eksisterende år tilgjengeliggjøres.  For info om eldre datasett kontakt gisressurssenter@ssb.no\n1. Eit sentrum er eit område sett saman av ein eller fleire sentrumskjernar og ei sone på 100 meter i kring. 2. Ein sentrumskjerne er eit område med minst 4 ulike hovudnæringsgrupper med sentrumsfunksjonar. I tillegg til detaljvarehandel, må offentleg administrasjon eller helse- og sosialtenester eller kulturell verksemd, underhaldning eller annan tenesteyting vere representert. Avstanden mellom bedriftene skal ikkje vere meir enn 50 meter. Det må vere minst 50 tilsette i sentrumssona. For mer informasjon: http://www.ssb.no/arealsentrum.\n\nÅrsdatasett er nedlastbar både fra SSBs kartportal https://kart.ssb.no  > Se eget Tema \"Sentrumssoner\" eller gå til \"Innholdskatalog\" for oversikt over alle tilgjengelig datasett"
  },
  {
    "no": "Sivilforsvarsdistrikter",
    "en": "Civil Defence districts",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/44ecfa66-3d7e-4ace-a10a-fccb6961301c",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://ogc.dsb.no/wms.ashx?SERVICE=WMS&REQUEST=GetCapabilities&version=1.3.0",
    "notes": "",
    "tags": [
      "risk",
      "admin"
    ],
    "abstractNo": "Sivilforsvaret er en statlig forsterkningsressurs og er en del av Direktoratet for samfunnssikkerhet og beredskap.  Sivilforsvaret er organisert i 20 distrikter.\nDatasettet viser distriktsinndelingen og lokaliseringen av distriktskontorene.\nDistriktsinndelingen følger kommunegrenser.  Enhetene er stedfestet til riktig bygning eller område med bygninger.",
    "abstractEn": "The Norwegian Civil Defence is a governmental reinforcement resource and part of the Norwegian Directorate for Civil Protection.  The dataset shows the twenty regional districts and the locations of the district offices.\nThe districts follows municipal boundaries.  The units are positioned at the correct building or building area."
  },
  {
    "no": "Stedsnavn",
    "en": "Names from the Central Register of Place Names (SSR)",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/30caed2f-454e-44be-b5cc-26bb5c0110ca",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.stedsnavnenkel?version=1.3.0&service=wms&request=getcapabilities",
    "notes": "",
    "tags": [
      "basemap"
    ],
    "abstractNo": "Stedsnavn på geografiske detaljer basert på kartseriene Norge 1:50 000, økonomisk kartverk, sjøkart og navnevedtak gjort etter lov 18. mai 1990 nr.11 om stadnamn. Hvert navn har opplysninger om språk/språkform, koordinater for posisjon (punkt) , kommunetilhørighet, temakode for navnetype, vedtakstype, dato for registrering av navnevedtak og i hvilken sammenheng navnet er benyttet.",
    "abstractEn": "Place names for geographical details based on the map series Norway 1:50,000, economic maps, nautical charts and naming decisions made pursuant to the Act on place names of 18 May 1990, no. 111. Each name has information on the language/linguistic form, position (point) coordinates, municipal affiliation, feature code for name type, decision type, date of registration of name decision and the context in which the name is used."
  },
  {
    "no": "Tettsteder",
    "en": "Urban Settlements",
    "ownerNo": "Statistisk sentralbyrå",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/173f4a15-dead-4f82-b92e-f37396b72cea",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart.ssb.no/api/mapserver/v1/wms/tettsteder?service=WMS&version=1.3.0&request=GetCapabilities",
    "notes": "",
    "tags": [
      "society"
    ],
    "abstractNo": "Datasettet viser Tettsteder pr. 01.01 for årsversjon. Det er DOK-datasett. Tettsteder er geografiske områder som har en dynamisk avgrensing, og antall tettsteder og deres yttergrenser vil endre seg over tid avhengig av byggeaktivitet og befolkningsutvikling. \nEt tettsted er en hussamling med minst 200 bosatte og der avstanden mellom husene normalt ikke skal overstige 50 meter. Les mer om tettsted og fullstendig definisjon her: https://www.ssb.no/befolkning/folketall/statistikk/tettsteders-befolkning-og-areal\n\nDataene er tilgjengelig for innsyn og nedlasting fra Geonorge\nÅrsdatasett er også nedlastbar fra SSBs kartportal https://kart.ssb.no  > Se eget Tema \"Tettsteder\" eller gå til \"Innholdskatalog\" for oversikt over alle tilgjengelig datasett",
    "abstractEn": "Datasettet viser Tettsteder pr. 01.01 for årsversjon. Det er DOK-datasett. Tettsteder er geografiske områder som har en dynamisk avgrensing, og antall tettsteder og deres yttergrenser vil endre seg over tid avhengig av byggeaktivitet og befolkningsutvikling. \nEt tettsted er en hussamling med minst 200 bosatte og der avstanden mellom husene normalt ikke skal overstige 50 meter. Les mer om tettsted og fullstendig definisjon her: https://www.ssb.no/befolkning/folketall/statistikk/tettsteders-befolkning-og-areal\n\nDataene er tilgjengelig for innsyn og nedlasting fra Geonorge\nÅrsdatasett er også nedlastbar fra SSBs kartportal https://kart.ssb.no  > Se eget Tema \"Tettsteder\" eller gå til \"Innholdskatalog\" for oversikt over alle tilgjengelig datasett"
  },
  {
    "no": "Traktorveg og Skogsbilveg WMS",
    "en": "Traktorveg og Skogsbilveg WMS",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/e45aea66-5d98-4703-8026-692c782eb5b0",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "Alternative to FKB Tractor Roads and Paths + forest roads from NVDB Vegnett Pluss",
    "tags": [
      "transport"
    ],
    "abstractNo": "Traktorveger fra FKB data og Skogsbilveger fra Vegnett data. Tjenesten har blitt gjort for bruk i en NIBIO web klient.",
    "abstractEn": "Traktorveger fra FKB data og Skogsbilveger fra Vegnett data. Tjenesten har blitt gjort for bruk i en NIBIO web klient."
  },
  {
    "no": "Vegkart",
    "en": "Roadmap",
    "ownerNo": "Statens vegvesen",
    "ownerEn": "Norwegian Public Roads Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/d599a118-4072-49e7-86b8-e18070188374",
    "access": "open",
    "proto": "WWW:LINK-1.0-http--link",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "I Vegkart kan du se data fra Nasjonal vegdatabank (NVDB) og laste ned data på forskjellige formater.",
    "abstractEn": "I Vegkart kan du se data fra Nasjonal vegdatabank (NVDB) og laste ned data på forskjellige formater."
  },
  {
    "no": "Videregående skoler",
    "en": "Secondary schools",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Directorate for Education and Training",
    "url": "https://kartkatalog.geonorge.no/metadata/c8acfd4f-c285-45a6-9a9b-3ab8d7d3af19",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "society"
    ],
    "abstractNo": "Datasettet inneholder offentlige og private videregående skoler i Norge med tilhørende kontaktinformasjon og opplysninger. For enkelte skoler kan posisjonsnøyaktigheten avvike. Dataene hentes fra en Nasjonalt skoleregister API som drives av Utdanningsdirektoratet (https://data-nsr.udir.no/swagger/). Dataene i Nasjonalt Skoleregister oppdateres basert på informasjon fra Virksomhets- og foretaksregisteret (VoF)/Brønnøysundregisteret, Grunnskolens Informasjonssystem (GSI) og andre kilder.",
    "abstractEn": "The data set contains public and private secondary schools in Norway with associated contact information and information. For some schools the accuracy may differ."
  },
  {
    "no": "AIS Trafikktetthetsrutenett",
    "en": "AIS Traffic Density Grid",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/90f2e393-c145-4039-b36b-36deb335b905",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "Traffic density for marine vessels",
    "tags": [
      "transport"
    ],
    "abstractNo": "Dette datasettet lar deg hente ut utseilt distanse over et valgfritt område, filtrert på skipstype, bruttotonn og lengde. Datasettet er generalisert, dvs. at det er knyttet noe usikkerhet rundt de absolutte tallene. Datakilden er AIS. Basert på tallene som hentes inn fra AIS systemet dannes det er tetthetsplott som er datagrunnlaget for denne analysen.\n\nDette datasettet består av et 1x1km grid hvor celleverdiene reflekterer antall ganger seilaslinjer har berørt en celle. For å beregne denne verdien er det først rekonstruert seilaslinjer for hvert enkelt skip. Disse gir oss en vektorlinje med geografiske posisjoner. Denne linjen overlagres så mot 1x1km griddatasettet og hver gang en seilaslinje berører en underliggende celle økes celleverdien med 1. Hvis en linje berører en celle mer enn en gang, f.eks, to ganger så økes celleverdien med 2. Datasettet som fremkommer som resultat av denne operasjonen representerer en pålitelig indikator for trafikktetthet etter valgfrie kombinasjoner av skipsgruppe, lengdegruppe og tonnasjegrupper.\n\n\nData er tilgjengelige som WMS tjenester og kan filtreres ved hjelp av WMS-dimensjoner slik at man kan få frem data for valgfrie kombinasjoner av skipsgrupper, lengder og tonnasje for fritt valgte områder.\n\n\nDen første generasjonen av datasettet er basert på AIS-data fra Kystdatahuset—en tjeneste fra Kystverket. Opprinnelig hadde Kystdatahuset et mer avgrenset dekningsområde enn Barentswatch, noe som medfører at den første versjonen av datasettet mangler full dekning for f.eks. forvaltningsplanområdene. Kystdatahuset er for tiden under utviding og innen April regner vi med å ha full dekning for alle forvaltningsplanområder.\nTips: Konvertering av vektorlinjer til grid-celler involverer vesentlig generalisering og om man forsøker å måle lengden på en linje i et raster vil man få verdier som avviker vesentlig fra data i de seilaslinjene beregningen er basert på. Som en tommelfingerregel kan man ved å multiplisere celleverdien med 0,7 få en verdi som er et anslag på utseilt distanse innen cellen.\n\n\nMan kommer frem til dette nummeret ved å anta at for det meste vil de segmentene av en seilas som berører en gridcelle være «rette linjer». En rett linje som passerer gjennom en gridcelle på 1x1km kan maksimalt være 1,4km lang dersom den går i en perfekt diagonal og må være større enn 0km. Vi kan anta at passeringene gjennom celler vil gi en normalfordeling, således vil 0.7 gi et anslag. For enkeltceller vil dette ikke gi noe pålitelig tall – men for større områder bestående av mange celler med mye trafikk vil summen gi et akseptabelt anslag.",
    "abstractEn": "This dataset consists of a 1x1km grid where cell values reflect the number of voyages that have travelled through the respective grid cell. To calculate this value, tracks of ship movements are reconstructed that results in a continuous vector line of geographical locations. This line is overlaid on the 1x1 km grid and every time the line passes through a cell, a value is assigned to the underlying cell. A line that intersects the cell two times will increment the cell value by two. The resulting dataset provides a reliable indicator of the frequency with which vessels belonging to different ship groups, length groups and gross tonnage groups have visited areas.\n\nData is available as WMS services that can be filtered by means of WMS dimensions to show possible combinations of ship groups, lengths and tonnage characteristics for the users chosen area of interest. \n\nThe first generation of the dataset is based on AIS data from Kystdatahuset—a service provided by the Norwegian Coastal Administration. Initially the data in Kystdatahuset cover a smaller area than Barentswatch, leaving e.g., parts of the management plan areas uncovered. This is presently being amended and within April ‘22, complete coverage is envisioned for all areas.\n\nTip: Conversion of vector lines to a grid cells involves generalization, and the length of the corresponding raster will deviate from the accuracy of the tracks the grid is based on. As a rule of thumb, multiplying the cell value with 0.7 would give an approximation of the number of kilometres. \n\nThis number of arrived at by assuming that for the most part, the segments of a ships track that intersects a grid cell will be a straight line. In a 1x1 km grid, each straight-line segment can be a maximum of 1.4 km long and at minimum >0. We may assume a normal distribution between >0 and 1.4km, resulting in 0.7km as an approximate number. For single cells, this will not be an exact number—but for larger areas consisting of multiple cells with a lot of traffic, the sum will provide an acceptable approximation."
  },
  {
    "no": "Aktsomhetskart for jord- og flomskred",
    "en": "Debris slide and debris flow - rough susceptibility zones",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/30e1883e-70e9-4510-9e97-00edbdcddc02",
    "access": "open",
    "proto": "OFFLINE/WMS",
    "wmsUrl": "https://kart.nve.no/enterprise/services/JordFlomskredAktsomhet/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "NVEs aktsomhetskart for jord- og flomskred viser potensielle utløpsområder for ulike typer løsmasseskred. Det omfatter ikke kvikkleireskred og grunne utglidninger i lave løsmasseskråninger, og ikke masseførende flom.\n\nAktsomhetskartet er basert på deldatasettene «jord- og flomskred» (2025) og «mellomstore flomskred» (2014). \n\nVed bruk av datasettet til analyseformål bør som hovedregel hele utløpsområdet vurderes. Utløpsområdet dekker alle areal hvor skredet fortsatt inneholder en viss andel fast materiale som kan avsettes.Dersom vanninnholdet i skredet er veldig høyt, kan den mest flytende delen av skredet i visse tilfeller nå enda lenger.",
    "abstractEn": "Susceptibility areas for debris slides and debris flows reveal potential runout areas for all type of soil landslides, with the exception of quick clay slides and large debris flows in river channels.\nThe entire runout area should be assessed when using the dataset for analysis purposes.  The runout area includes all the area where the landslide still contains material that can be deposited. If the water content of the landslide is very high, the water can continue to travel farther than the solid material.\nThe susceptibility map may be useful in connection with monitoring and contingency planning, particularly in vulnerable areas where more detailed maps are unavailable."
  },
  {
    "no": "Aktsomhetskart for kvikkleireskred",
    "en": "Quick Clay Landslide Susceptibility",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/dabd2a2c-36d5-4ed7-a4c9-d49808a2b848",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://kart.nve.no/enterprise/services/KvikkleireskredAktsomhet/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Aktsomhetskart for kvikkleireskred er utviklet av NVE, og tar hensyn til både løsmassene og terrenget. Det kan brukes for å følge steg 2 og 3 i «Prosedyre for utredning av områdeskredfare» i NVE veileder 1/2019 «Sikkerhet mot kvikkleireskred» kapittel 3.2.\n\nTidligere var det kartet «Aktsomhet marin leire» som ble benyttet for å sjekke steg 2 i prosedyren (Avgrens områder med mulig marin leire). «Aktsomhet marin leire» baserte seg på NGUs kart Mulighet for marin leire, og viste mulighet for sammenhengende forekomster av marin leire basert på løsmassekartene (kvartær-geologisk kartlegging). Det forelå ikke noe verktøy for steg 3 i prosedyren (Avgrens områder med terreng som kan være utsatt for områdeskred /kvikkleireskred).\n\nAktsomhetskartet bruker «Aktsomhet marin leire» som utgangspunkt og tar i tillegg hensyn til \nterreng-kriteriene som er gitt i NVE veileder 1/2019. Flate områder langt unna skråninger, er dermed fjernet fra aktsomhetskartet, i tillegg til områder uten sammenhengende marin leire. Områder kartlagt som «grunnlendt» og «fjell i dagen» i Nibio AR5 Grunnforhold er tatt vekk fra kartet.\n\n\nDersom planlagte tiltak ligger innenfor aktsomhetsområde for kvikkleireskred, må man gå videre i prosedyren i NVE veileder 1/2019. \nMetodikken aktsomhetskartet bygger på identifiserer mulige løsneområder for kvikkleireskred. NVE vurderte at aktsomhetskartet også markerer i tilstrekkelig grad hvor det kan være fare for skade fra utløp fra et kvikkleire-skred. Det er dermed ikke nødvendig å vurdere fare for utløp utenfor aktsomhetskartet. \nUnntaket er der det ligger utløp fra registrerte faresoner utenom aktsomhetsområdet, dette må i så fall følge prosedyren i NVE veileder 1/2019 videre fra steg 4.",
    "abstractEn": "Aktsomhetskart for kvikkleireskred er utviklet av NVE, og tar hensyn til både løsmassene og terrenget. Det kan brukes for å følge steg 2 og 3 i «Prosedyre for utredning av områdeskredfare» i NVE veileder 1/2019 «Sikkerhet mot kvikkleireskred» kapittel 3.2.\n\nTidligere var det kartet «Aktsomhet marin leire» som ble benyttet for å sjekke steg 2 i prosedyren (Avgrens områder med mulig marin leire). «Aktsomhet marin leire» baserte seg på NGUs kart Mulighet for marin leire, og viste mulighet for sammenhengende forekomster av marin leire basert på løsmassekartene (kvartær-geologisk kartlegging). Det forelå ikke noe verktøy for steg 3 i prosedyren (Avgrens områder med terreng som kan være utsatt for områdeskred /kvikkleireskred).\n\nAktsomhetskartet bruker «Aktsomhet marin leire» som utgangspunkt og tar i tillegg hensyn til \nterreng-kriteriene som er gitt i NVE veileder 1/2019. Flate områder langt unna skråninger, er dermed fjernet fra aktsomhetskartet, i tillegg til områder uten sammenhengende marin leire. Områder kartlagt som «grunnlendt» og «fjell i dagen» i Nibio AR5 Grunnforhold er tatt vekk fra kartet.\n\n\nDersom planlagte tiltak ligger innenfor aktsomhetsområde for kvikkleireskred, må man gå videre i prosedyren i NVE veileder 1/2019. \nMetodikken aktsomhetskartet bygger på identifiserer mulige løsneområder for kvikkleireskred. NVE vurderte at aktsomhetskartet også markerer i tilstrekkelig grad hvor det kan være fare for skade fra utløp fra et kvikkleire-skred. Det er dermed ikke nødvendig å vurdere fare for utløp utenfor aktsomhetskartet. \nUnntaket er der det ligger utløp fra registrerte faresoner utenom aktsomhetsområdet, dette må i så fall følge prosedyren i NVE veileder 1/2019 videre fra steg 4."
  },
  {
    "no": "Aktsomhetskart for snøskred",
    "en": "Snow Avalanche Susceptibility",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/54ada9d8-e6fc-48d6-82b0-5477166a4aaa",
    "access": "open",
    "proto": "REST/WMS",
    "wmsUrl": "https://kart.nve.no/enterprise/services/SnoskredAktsomhet/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Aktsomhetskart for snøskred er et GIS-generert landsdekkende datasett som gir en grov oversikt over områder som potensielt kan være snøskredutsatt. Aktsomhetskartet ble ferdigtstilt i 2023 med ny metodikk. Kartet er utviklet av Norges Geotekniske Institutt (NGI) og blir forvaltet av NVE.\n\nNye aktsomhetskart for snøskred 2023 finnes i tre forskjellige utgaver:\n\nAktsomhetskart snøskred S3 til bruk i kommuneplan for å avklare sikkerhet for bygg opp til \nsikkerhetsklasse S3. Kartet er sammensatt av aktsomhetskart for snøskred fra 2010 og \nAktsomhetskart for snøskred S2 uten skog fra 2023.\n\nAktsomhetskart snøskred S2 uten skogeffekt til å avklare sikkerhet for bygg opp til og med \nsikkerhetsklasse S2 uten å måtte båndlegge skog.\n\nAktsomhetskart snøskred S2 med skogeffekt til å avklare sikkerhet for bygg opp til \nsikkerhetsklasse S2, dersom skogen sin sikringseffekt er sikret.\n\nNasjonal høydemodell er brukt som grunnlag for å identifisere områder der snøskred kan løsne. \nKlimadata fra SeNorge og skogdata fra SR16-datasettet til NIBIO er brukt til å estimere \nsnømengder og sannsynlighet for skred. Kartet bruker en dynamisk utløpsmodell som gir \nutløpssoner som er mer tilpasset terrenget og dermed gir mer realistiske utløpssoner enn tidligere \naktsomhetskart.",
    "abstractEn": "Aktsomhetskart for snøskred er et GIS-generert landsdekkende datasett som gir en grov oversikt over områder som potensielt kan være snøskredutsatt. Aktsomhetskartet ble ferdigtstilt i 2023 med ny metodikk. Kartet er utviklet av Norges Geotekniske Institutt (NGI) og blir forvaltet av NVE.\n\nNye aktsomhetskart for snøskred 2023 finnes i tre forskjellige utgaver:\n\nAktsomhetskart snøskred S3 til bruk i kommuneplan for å avklare sikkerhet for bygg opp til \nsikkerhetsklasse S3. Kartet er sammensatt av aktsomhetskart for snøskred fra 2010 og \nAktsomhetskart for snøskred S2 uten skog fra 2023.\n\nAktsomhetskart snøskred S2 uten skogeffekt til å avklare sikkerhet for bygg opp til og med \nsikkerhetsklasse S2 uten å måtte båndlegge skog.\n\nAktsomhetskart snøskred S2 med skogeffekt til å avklare sikkerhet for bygg opp til \nsikkerhetsklasse S2, dersom skogen sin sikringseffekt er sikret.\n\nNasjonal høydemodell er brukt som grunnlag for å identifisere områder der snøskred kan løsne. \nKlimadata fra SeNorge og skogdata fra SR16-datasettet til NIBIO er brukt til å estimere \nsnømengder og sannsynlighet for skred. Kartet bruker en dynamisk utløpsmodell som gir \nutløpssoner som er mer tilpasset terrenget og dermed gir mer realistiske utløpssoner enn tidligere \naktsomhetskart."
  },
  {
    "no": "Aktsomhetskart svakhetssoner i fjell",
    "en": "Rock Weakness Zones Susceptibility",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/71240e94-f915-4da0-9225-7840625b6a17",
    "access": "open",
    "proto": "API-Features/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Aktsomhetskart svakhetssoner i fjell viser områder hvor det er sannsynlig eller mindre sannsynlig at det forekommer svakhetssoner i fjellet, som er forårsaket av leiromvandling. Kartet er et hjelpemiddel ved planlegging av tunneler, fjellhaller og lignende anlegg i fjell. Kartet viser fire klasser basert på sannsynlighet for at det skal forekomme svakhetssoner i fjell. \nKartet er utarbeidet ved å samtolke (korrelere) magnetiske data målt fra fly og helikopter og digital terrengmodell. Der begge disse datasettene viser lave verdier, kan det indikere dypforvitrede soner som kan forårsake problemer under anleggsfase og etter ferdigstilling av et utbyggingstiltak. Datasettet er ikke landsdekkende. Det nye aktsomhetskartet dekker kystområdene i Sør-Norge og store deler av Midt-Norge.",
    "abstractEn": "Aktsomhetskart svakhetssoner i fjell viser områder hvor det er sannsynlig eller mindre sannsynlig at det forekommer svakhetssoner i fjellet, som er forårsaket av leiromvandling. Kartet er et hjelpemiddel ved planlegging av tunneler, fjellhaller og lignende anlegg i fjell. Kartet viser fire klasser basert på sannsynlighet for at det skal forekomme svakhetssoner i fjell. \nKartet er utarbeidet ved å samtolke (korrelere) magnetiske data målt fra fly og helikopter og digital terrengmodell. Der begge disse datasettene viser lave verdier, kan det indikere dypforvitrede soner som kan forårsake problemer under anleggsfase og etter ferdigstilling av et utbyggingstiltak. Datasettet er ikke landsdekkende. Det nye aktsomhetskartet dekker kystområdene i Sør-Norge og store deler av Midt-Norge."
  },
  {
    "no": "Anlegg med farlig stoff",
    "en": "Hazardous substances",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/12fa3360-ce91-4f02-82c8-22ff85cf0c67",
    "access": "contact",
    "proto": "OFFLINE",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Datasettet viser anlegg med farlig stoff, dvs. brannfarlig og giftig gass, stoff og væske. Dataene er etablert ved innmelding fra eierne av anleggene.  DSB har derfor liten kontroll med kvaliteten på stedfestingen. DSB gjør disse dataene tilgjengelig bare for utvalgte brukere innenfor Norge digitalt. Dette vil særlig være brukere innenfor arealplanlegging, byggesaksbehandling og beredskap. Disse får bare tilgang til data for eget distrikt ved direkte henvendelse til DSB ved kart@dsb.no. Brukeretatene må forplikte seg til å behandle dataene slik at de bare er tilgjengelig for brukere med reelt behov for informasjonen.  Dataene kan ikke legges på åpne kartapplikasjoner på internett.\n\nDSB har en online-løsning, FAST, som krever brukernavn og passord, og som gjøres tilgjengelig for de samme brukergruppene som vektordataene.  FAST består av en kartløsning med farlig stoff-dataene og en database med mer informasjon om anleggene. Se DSBs nettsider https://www.dsb.no/farlige-stoffer/farlige-stoffer/informasjon-og-verktoy/fast---anlegg-og-kart/",
    "abstractEn": "The dataset shows facilities with hazardous substances, i.e. flammable and toxic gases, solids and liquids.\n\nThe data is registered by the owners of the facilites.  Therefore, the Norwegian Directorate for Civil Protection cannot control the quality of the positioning.\n\nThe Norwegian Directorate for Civil Protection only makes this data available  to users within Norway working with spatial planning, building application processing and emergency response.  These are given access only to data for their own districts. The data is only available by contacting Karen Lie at the Norwegian Directorate for Civil Protection directly.\n\nUser agencies must commit to only making data accessible to users who genuinely need the information.  The data cannot be placed in open map applications online."
  },
  {
    "no": "Arter funksjonsområder",
    "en": "Species Functional Areas",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/49c3c642-87d5-480a-bd67-53a8fe6732b8",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart.miljodirektoratet.no/arcgis/services/artfunksjon/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "Wildlife - grazing areas, habitats, nesting areas",
    "tags": [
      "infrastructure",
      "environment"
    ],
    "abstractNo": "Datasettet viser forekomst av arter og funksjonsområder for disse. Med funksjonsområder menes beiteområder, leveområder, hekkeområder etc. Datasettet er ikke et fullstendig datasett for alle arter, men er hovedsakelig fokusert på prioriterte arter etter naturmangfoldloven, rødlistearter og artene som inngår i viltkartleggingen etter DN håndbok nr. 11- 2000 Viltkartlegging. Datasettet inneholder - Hjortevilt, herunder villrein - Småvilt - Trua og sårbare arter innen alle organismegrupper - Økologiske funksjonsområder for prioriterte arter etter naturmangfoldloven DNs artsdata utveksles med Artsdatabankens tjeneste Artskart og kan gjenfinnes der sammen med data fra andre leverandører.",
    "abstractEn": "Datasettet viser forekomst av arter og funksjonsområder for disse. Med funksjonsområder menes beiteområder, leveområder, hekkeområder etc. Datasettet er ikke et fullstendig datasett for alle arter, men er hovedsakelig fokusert på prioriterte arter etter naturmangfoldloven, rødlistearter og artene som inngår i viltkartleggingen etter DN håndbok nr. 11- 2000 Viltkartlegging. Datasettet inneholder - Hjortevilt, herunder villrein - Småvilt - Trua og sårbare arter innen alle organismegrupper - Økologiske funksjonsområder for prioriterte arter etter naturmangfoldloven DNs artsdata utveksles med Artsdatabankens tjeneste Artskart og kan gjenfinnes der sammen med data fra andre leverandører."
  },
  {
    "no": "Automatisk identifikasjonssystem (AIS) - Shipsposisjoner - nedlasting - 12nm fra grunnlinja",
    "en": "Automatic identification system (AIS) - Marine traffic  - download for Norway",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/7997fd76-83f9-4e94-bfe7-f4677a6cd787",
    "access": "open",
    "proto": "WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "Denne tjenesten gir deg mulighet til å laste ned data over skipstrafikk. Løsningen inneholder skip innenfor territorialfarvannet (12 nm) som er over 45 meter lang.",
    "abstractEn": "This service allows you to download shiptraffic data. The data includes all ships in territorial waters (12 nm) that are more than 45 metres in length."
  },
  {
    "no": "Avløpsanlegg",
    "en": "Wastewater treatment locations",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/276db913-395d-4867-9717-eb86636806d9",
    "access": "open",
    "proto": "W3C:AtomFeed/WMS",
    "wmsUrl": "https://kart.miljodirektoratet.no/arcgis/services/avlop/MapServer/WMSServer?service=wms&request=getcapabilities",
    "notes": "Discharge of municipal wastewater",
    "tags": [
      "environment",
      "infrastructure"
    ],
    "abstractNo": "Datasettet omfatter oversikt over utslipp av kommunalt avløpsvann. Dataene er framskaffet ved den årlige rapporteringen fra kommunene til KOSTRA.",
    "abstractEn": "Datasettet omfatter oversikt over utslipp av kommunalt avløpsvann. Dataene er framskaffet ved den årlige rapporteringen fra kommunene til KOSTRA."
  },
  {
    "no": "BarentsWatch WMS",
    "en": "BarentsWatch WMS",
    "ownerNo": "Barentswatch",
    "ownerEn": "Barentswatch",
    "url": "https://kartkatalog.geonorge.no/metadata/270f936d-ebed-42b0-a127-545383d773fc",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "Display of operational and statistical data on fisheries, aquaculture, wave and current forecasts",
    "tags": [
      "meteorology",
      "risk"
    ],
    "abstractNo": "BarentsWatch sin WMS tjeneste leverer de tjenestelagene som brukes i tjenestene på barentswatch.no og noen tilleggslag for å gjøre informasjonen mer tilgjengelig for annen bruk. Ved tydeliggjorte behov kan tjenestelagene tilpasses ytterligere. Enkelte tjenestelag som ikke egner seg for ekstern bruk er ikke omtalt.\nAlle tjenestelagene baserer seg på andre etaters data. BarentsWatch/Kystverket er derfor ikke dataeier for alle. Der BarentsWatch ikke tilfører ny informasjon og tjenestelaget allerede presenteres fra dataeier, er det ikke lagt inn i Geonorge selv om det forekommer i tjenesten.\n\nSe også BarentsWatch API for annen tilgang til de samme dataene.",
    "abstractEn": "BarentsWatch sin WMS tjeneste leverer de tjenestelagene som brukes i tjenestene på barentswatch.no og noen tilleggslag for å gjøre informasjonen mer tilgjengelig for annen bruk. Ved tydeliggjorte behov kan tjenestelagene tilpasses ytterligere. Enkelte tjenestelag som ikke egner seg for ekstern bruk er ikke omtalt.\nAlle tjenestelagene baserer seg på andre etaters data. BarentsWatch/Kystverket er derfor ikke dataeier for alle. Der BarentsWatch ikke tilfører ny informasjon og tjenestelaget allerede presenteres fra dataeier, er det ikke lagt inn i Geonorge selv om det forekommer i tjenesten.\n\nSe også BarentsWatch API for annen tilgang til de samme dataene."
  },
  {
    "no": "Barmarksløyper i Finnmark",
    "en": "Motorized off-road trails",
    "ownerNo": "Statsforvalteren",
    "ownerEn": "County Governor",
    "url": "https://kartkatalog.geonorge.no/metadata/d80faca7-2a0d-47de-b58b-5007a2afdc74",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "http://wms.nordatlas.no/wms.ashx?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "Data knyttet til motorisert ferdsel i utmark. Data over vedtatte og dermed lovlig ruter for terrengkjøretøy sommerstid. Grunnlag for vedtak er lov om motorferdsel i utmark og håndteres av fylkesmannen, eventuelt andre vedtak i kommunen. Motorisert ferdsel i utmark. Gjelder spesifiserte ruter for terrengkjøretøy sommerstid.",
    "abstractEn": "Data knyttet til motorisert ferdsel i utmark. Data over vedtatte og dermed lovlig ruter for terrengkjøretøy sommerstid. Grunnlag for vedtak er lov om motorferdsel i utmark og håndteres av fylkesmannen, eventuelt andre vedtak i kommunen. Motorisert ferdsel i utmark. Gjelder spesifiserte ruter for terrengkjøretøy sommerstid."
  },
  {
    "no": "Barnetråkk - fullstendig",
    "en": "Play areas",
    "ownerNo": "Universitetet i Bergen",
    "ownerEn": "University of Bergen",
    "url": "https://kartkatalog.geonorge.no/metadata/3b1cbed1-5537-4f61-90df-3b396c656813",
    "access": "restricted",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "society"
    ],
    "abstractNo": "Barnetråkk inneholder data om barna sitt nærmiljø og er registrert av skoleelever. Data omfatter veier barn bruker til skole- og fritidsaktiviteter, samt informasjon om steder barn bruker til fritidsaktiviteter. Det registreres også steder barn liker eller misliker. Datasettet gir nyttig informasjon til bruk i kommunal og regional planlegging, statistikk, forskning og utdanning.\n\nData fra egen kommune er tilgjengelig for norske kommuner til bruk i arealplanlegging, og har en egen nedlastingsløsning.",
    "abstractEn": "Play area data includes school routes and recreational routes with associated information on factors such as whether or not the road is dangerous, the type of hazard, etc. The data also includes areas where children play/spend time and areas that are perceived as good and less good. Children are the primary providers of information and participants in play area mapping. This method is used to support municipal planning and impact assessments with regard to road issues, etc. 70-100 municipalities currently have play area data."
  },
  {
    "no": "Bedrifter på rutenett",
    "en": "Businesses in Grid Cells",
    "ownerNo": "Statistisk sentralbyrå",
    "ownerEn": "Statistics Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/7dcf4a32-b150-48f6-bae6-f8a25fab300c",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart.ssb.no/api/mapserver/v1/wms/bedrifter_paa_rutenett?service=WMS&version=1.3.0&request=GetCapabilities",
    "notes": "",
    "tags": [
      "society",
      "transport"
    ],
    "abstractNo": "Antall bedrifter i ruter, for 250m X 250m  og 1km x 1km, pr 01. januar for årsversjonen. Årslag siden 2013,  tilgjengelig i flere formater.  250m-inndelingen gir også antall ansatte.\n\nDataene er tilgjengelig for innsyn og nedlasting fra fra SSBs kartportal https://kart.ssb.no  \nSe eget Tema \"Bedrifter\" eller gå til \"Innholdskatalog\" og  søk på \"bedrift..\" for oversikt over alle datasett\n\nAndre temaer det finnes lages rutenettdatasett for er \"Befolkning\", \"Bygg\" og \"Bolig\"",
    "abstractEn": "Antall bedrifter i ruter, for 250m X 250m  og 1km x 1km, pr 01. januar for årsversjonen. Årslag siden 2013,  tilgjengelig i flere formater.  250m-inndelingen gir også antall ansatte.\n\nDataene er tilgjengelig for innsyn og nedlasting fra fra SSBs kartportal https://kart.ssb.no  \nSe eget Tema \"Bedrifter\" eller gå til \"Innholdskatalog\" og  søk på \"bedrift..\" for oversikt over alle datasett\n\nAndre temaer det finnes lages rutenettdatasett for er \"Befolkning\", \"Bygg\" og \"Bolig\""
  },
  {
    "no": "Beredskapsdepoter",
    "en": "Pollution emerency response depots",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/e2475b7c-798b-4e5f-bd0e-a5fb9b0ad3b0",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://services.kystverket.no/wms.ashx?service=WMS&request=GetCapabilities",
    "notes": "Shows where the national oil spill response depots are located",
    "tags": [
      "risk",
      "environment"
    ],
    "abstractNo": "Statlige depoter med oljevernutstyr. Stedfestingen er knyttet opp mot stedsnavn og er derfor ikke helt nøyaktig. Inneholder lenker til materielllister. Datasettet inngår også i Kystverkets WMS",
    "abstractEn": "Governmental oil spill response equipment depots. The positioning is geolocated based on place names and is therefore not entirely accurate. Includes links to lists of equipment. This dataset is also part of the Norwegian Coastal Administration's WMS."
  },
  {
    "no": "Berggrunn N50",
    "en": "Bedrock, scale 1:50,000",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/a5c76d05-33bd-4a1d-b28b-81575092e468",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://geo.ngu.no/mapserver/BerggrunnWMS3?request=GetCapabilities&SERVICE=WMS",
    "notes": "",
    "tags": [
      "environment"
    ],
    "abstractNo": "NGUs berggrunnsdata viser utbredelsen av bergarter og bergartsstrukturer på jordens overflate. Kartdataene i Berggrunn N50 er hovedsakelig basert på den trykte berggrunnsgeologiske kartserien i målestokk 1:50.000, men inkluderer også kart i samme målestokktall fra prosjektdefinerte områder.",
    "abstractEn": "The bedrock data shows the prevalence of rocks and rock structures on the earth's surface. The data is based on the printed bedrock geological map series at a scale 1: 50,000."
  },
  {
    "no": "Bølgevarsel - Kryssende bølger",
    "en": "Waveforecast - Crossing waves",
    "ownerNo": "Barentswatch",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/8075102b-01e2-47ac-b885-f5f0ff193203",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Viser områder med fare for kryssende sjø i spesielle områder Stadt, Nordmøre, Ytre Lofoten.\n\nSe BarentsWatch.no for bølgevarselet i sin helhet.",
    "abstractEn": "Forecast for crossing waves in selected areas on the Norwegian coast the coming 66 hours."
  },
  {
    "no": "Bølgevarsel - Punkt",
    "en": "Waveforecast - Point",
    "ownerNo": "Barentswatch",
    "ownerEn": "Barentswatch",
    "url": "https://kartkatalog.geonorge.no/metadata/d99fb1fc-ed98-42ab-92d3-9c382c70ca33",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Varslet bølgehøyde for et punkt på gitt tidspunkt. Gir illustrasjoner gradert på 0 - 1 m, 1 - 3 m og > 3 m.",
    "abstractEn": "Significant waveheight on selected points. Indicating 0-1m, 1-3m and >3m"
  },
  {
    "no": "Dam",
    "en": "Hydrology  - dams",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/8c906c83-5192-4c2b-86ca-0d85759d37b8",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nve.geodataonline.no/arcgis/services/Vannkraft1/MapServer/WmsServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Databasen over dammer som er underlagt offentlig tilsyn. Egenskapsdata er Sosikode, dammnr og damnavn.",
    "abstractEn": "Database of dams subject to public inspections. Attribute data is made up of SOSI code, dam no. and dam name."
  },
  {
    "no": "Delfelt vannkraft",
    "en": "Catchment areas - hydropower",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/220f22c9-d415-4b20-bd0c-c3842be4874e",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nve.geodataonline.no/arcgis/services/Vannkraft1/MapServer/WmsServer?request=GetCapabilities&service=WMS",
    "notes": "Catchment areas that drain to water intakes for hydropower production",
    "tags": [
      "infrastructure"
    ],
    "abstractNo": "Database over nedbørfelt (def. i REGINE) som drenerer til et vanninntak for kraftproduksjon. Egenskapsdata er delfeltnr., delfeltnavn, navn og nr. på tilhørende vannkraftverk, areal, middel årtilsig og nedenforliggende delfelt",
    "abstractEn": "Database of catchment areas (def. in REGINE) which drain to a water intake for power production. Attribute data is made up of catchment no., catchment name, name and no. of associated hydroelectric power station, area, mean annual inflow and downstream catchment"
  },
  {
    "no": "DOK fullstendighetdekningskart",
    "en": "DOK Completeness Map",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/5acae376-a6ed-46eb-880a-64ea27e08cef",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "Under development",
    "tags": [],
    "abstractNo": "Brukes for å finne dekning for et datasett i et gitt område. Datasettet er under etablering.",
    "abstractEn": "Brukes for å finne dekning for et datasett i et gitt område. Datasettet er under etablering."
  },
  {
    "no": "Dreneringslinjer",
    "en": "Drainage Lines",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/52ae2a6f-cb80-40c2-823c-fa7b928fad15",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "Caution related to stormwater",
    "tags": [
      "risk"
    ],
    "abstractNo": "«Dreneringslinjer» er et kart for overvann som viser:\n1.\tHvor i terrenget det dannes nye dreneringslinjer. \n2.\tForsenkninger i terrenget der vann samler seg opp.",
    "abstractEn": "«Dreneringslinjer» er et kart for overvann som viser:\n1.\tHvor i terrenget det dannes nye dreneringslinjer. \n2.\tForsenkninger i terrenget der vann samler seg opp."
  },
  {
    "no": "Drikkevann - inntakspunkter",
    "en": "Drinking Water – Intake Point",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/2303ad8a-eee1-446e-824f-13a46004a8f2",
    "access": "open",
    "proto": "OFFLINE/Tjenestelag/WMS",
    "wmsUrl": "https://kart.mattilsynet.no/wmscache/service?Request=GetCapabilities",
    "notes": "Data hidden at low zoom level",
    "tags": [
      "infrastructure"
    ],
    "abstractNo": "Karttjenesten viser hvor vannverkene tar ut vann fra innsjøer, bekker eller grunnvann. Det forutsettes at vannverkene har rapportert koordinatene til Mattilsynet. Vannverk som fremkommer er primært de som forsyner 50 personer eller flere med vann. I tillegg inngår alle kommunalt eide virksomheter med egen vannforsyning uavhengig av størrelse.\n\nFor å unngå å gi for presis informasjon om stedet, blir informasjonen borte når det zoomes inn mer enn det som Mattilsynet har satt som grense.\n\nDet er bare hovedkilder som angis i karttjenesten. Ved å klikke på de enkelte punktene vil man få informasjon om navn på vannverk og innrapporterte analysedata for råvannet.",
    "abstractEn": "Karttjenesten viser hvor vannverkene tar ut vann fra innsjøer, bekker eller grunnvann. Det forutsettes at vannverkene har rapportert koordinatene til Mattilsynet. Vannverk som fremkommer er primært de som forsyner 50 personer eller flere med vann. I tillegg inngår alle kommunalt eide virksomheter med egen vannforsyning uavhengig av størrelse.\n\nFor å unngå å gi for presis informasjon om stedet, blir informasjonen borte når det zoomes inn mer enn det som Mattilsynet har satt som grense.\n\nDet er bare hovedkilder som angis i karttjenesten. Ved å klikke på de enkelte punktene vil man få informasjon om navn på vannverk og innrapporterte analysedata for råvannet."
  },
  {
    "no": "Dybdekart",
    "en": "Lake bathymetry",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/9285f93e-d6d7-498c-a289-35700d795fc1",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nve.geodataonline.no/arcgis/services/Innsjodatabase2/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "Lake",
    "tags": [
      "risk",
      "environment"
    ],
    "abstractNo": "Basen inneholder info om ca 600 dybdekart. Egenskapsdata i basen er bla. vassdragsnr, navn, areal, omkrets, middel- og maks.dyp, volum, teoretisk oppholdstid, måleår/-metode. Dybdekart er en integrert del av datasettet Innsjødatabase.",
    "abstractEn": "The database includes info on approx. 600 bathymetric maps. Attribute data in the database includes water system no., name, area, circumference, mean and maximum depth, volume, theoretical retention time, measurement year/method"
  },
  {
    "no": "Dyrehold med produksjonsdyr",
    "en": "Livestock Holdings (Production Animals)",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/e7459ac1-1f3d-4210-ac3e-c7ce68001190",
    "access": "open",
    "proto": "OFFLINE/Tjenestelag/WMS",
    "wmsUrl": "https://kart.mattilsynet.no/wmscache/service?Request=GetCapabilities",
    "notes": "Shared WMS",
    "tags": [
      "society"
    ],
    "abstractNo": "Aktive dyrehold med produksjonsdyr.",
    "abstractEn": "Aktive dyrehold med produksjonsdyr."
  },
  {
    "no": "Dyrkbar jord",
    "en": "Arable land (1:5.000)",
    "ownerNo": "Norsk institutt for bioøkonomi",
    "ownerEn": "Norwegian Institute of Bioeconomy Research",
    "url": "https://kartkatalog.geonorge.no/metadata/8252baea-5bad-428b-8f18-fe236fa4ced6",
    "access": "restricted",
    "proto": "WMS",
    "wmsUrl": "https://wms.nibio.no/cgi-bin/dyrkbarjord_2?service=wms&request=getcapabilities",
    "notes": "",
    "tags": [
      "infrastructure",
      "environment"
    ],
    "abstractNo": "Dyrkbar jord er i år (2025) revidert gjennom bruk av flere datakilder og nye metoder, og det nye datsettet ble gjort tilgjengelig via Geonorge den 16. september. Det er nå lagt inn flere nye tematiske egenskaper i datasettet, og det er gjort en teknisk rydding som innebærer nye objekter og ny geometri. Gå til produktsiden for å lese mer om det reviderte datasettet.\n\nDatasettet Dyrkbar jord er et landsdekkende data-sett som viser arealer som per i dag ikke er fulldyrka jord, men som ut fra agronomiske perspektiv kan dyrkes opp, og som holder kravene til klima og jordkvalitet for plantedyrking. Dyrkbar jord kan være registrert på arealtypene Overflatedyrka jord, Innmarksbeite, Skog, Åpen fastmark og Myr, slik disse er klassifisert i AR5.\n\nDatasettet er et automatisk avledet produkt som produseres årlig.",
    "abstractEn": "The national land resource database (AR) classifies the land cover of mainland Norway according to its suitability for agriculture and natural plant production. National land resource datasets are available at scale 1:5.000 (AR5), 1:50.000 (AR50) and 1:250.000 (AR250). \nArable land is a valid land resource attribute for certain classes of land types derived from the dataset AR5.  These land types are pasture, forest, open land and marshland (peat bog). The land types have to fulfill requirements for soil quality and climate for plant production. \nFeatures in the dataset Arable land are continuous areas with the same attributes assigned according to the classification criteria of AR5 with a geometric representation as polygons. The dataset is updated annually."
  },
  {
    "no": "Eksplosivanlegg",
    "en": "Explosive  substances",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/ceef6c79-27ea-4e3e-895d-33d2a64763bf",
    "access": "contact",
    "proto": "OFFLINE",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Datasettet Eksplosivanlegg viser anlegg hvor eksplosive varer tilvirkes eller oppbevares, og  som har tillatelse fra Direktoratet for samfunnssikkerhet og beredskap (DSB) , se §§ 6.1 og 7.1 i Eksplosivforskriften. Merk at dette ikke omfatter Forsvarets anlegg. Datasettet gis bare ut til bruk i kommunal og regional beredskap, arealplanlegging og byggesaksbehandling og bare ved direkte henvendelse til DSB ved kart@dsb.no.",
    "abstractEn": "The dataset Explosives facilities shows sites where explosive substances are manufactured or stored. The sites have permits from the Norwegian Directorate for Civil Protection (DSB); see sections 6.1 and 7.1 in the Regulation of 26 June 2002, no. 922 on the handling of potentially explosive substances (the Regulation on Explosives).  Note that this does not include facilities belonging to the Norwegian Armed Forces. \nThe dataset is only issued for use for municipal and regional emergency response, spatial planning and building application processing, and only upon direct application to kart@dsb.no or karen.lie@dsb.no at the Norwegian Directorate for Civil Protection."
  },
  {
    "no": "ELVIS elvenett",
    "en": "Hydrology  - river network",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/3f95a194-0968-4457-a500-912958de3d39",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nve.geodataonline.no/arcgis/services/Elvenett1/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk",
      "environment"
    ],
    "abstractNo": "Elvenettverkdatabase etablert for våre vassdrag (inkl. kystfelt i REGINE). I ELVIS er alle vassdragselement (elv, bekk, vann) omdannet til linjer. Disse er knyttet sammen i et nettverk med definert strømretning. Alle linjesegmentene i ELVIS er tilordnet entydig nasjonalt løpenummer/ID - kalt strekn_lnr",
    "abstractEn": "River network database established for our watercourses (inc. coastal fields in REGINE). All watercourse elements (rivers, streams, lakes) are converted into lines in ELVIS. These are linked together in a network with a defined direction of flow. All the line segments in ELVIS are assigned a unique national serial numbers/IDs, known as **strekn_lnr**"
  },
  {
    "no": "Elvis hovedelv",
    "en": "Hydrology - river network - main",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/b2300e43-2a61-4e77-ab97-27567b2295e6",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nve.geodataonline.no/arcgis/services/Elvenett1/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "Main river system",
    "tags": [
      "risk",
      "environment"
    ],
    "abstractNo": "Elvenettverk for hovedvassdragene, slik disse er definert i REGINE. Egenskapsdata fra REGINE er koblet til elvenettverket. I dette temaet kan en søke på elvenavn, hierarki og Vassdragsnr.",
    "abstractEn": "River network for the main watercourses as defined in REGINE. Attribute data from REGINE is linked to the river network. It is possible to search on river name, hierarchy and Watercourse no. in this theme."
  },
  {
    "no": "Faresonekart for skred i bratt terreng",
    "en": "Hazard Zones for Steep-Terrain Landslides",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/d4a61153-3a21-4593-900c-1587b5b1c42d",
    "access": "open",
    "proto": "REST/WMS",
    "wmsUrl": "https://kart.nve.no/enterprise/services/Skredfaresoner3/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "Replaces the dataset “Landslide Hazard Zones” – available for download from mid‑February 2026",
    "tags": [
      "risk"
    ],
    "abstractNo": "Planlagt ferdig februar/mars 2026\n\nDatasettet «Faresonekart for skred i bratt terreng» erstatter datasettet «Skredfaresoner». \n\nVi jobber fortløpende med å få lagt ut mer faresoner spesifisert per skredtype, for de prosjektene der vi har slike data\n\nViktigste nyheter er:\n- Nye objekttyper: Påvirkningsområde og Skreddimensjonerende (punkt for visuell visning av skredtype)\n- Ny egenskap: HensynTilSkog (ja/nei), gir info om faresoner kartlagt uten hensyn til dagens skog.\n- Nye tegneregler (WMS) for punktene over og mulighet for detaljert visning av faresoner for hver enkelt skredtype. Det er fortsatt visning av faresoner over samlet skredfare for alle skredtyper i bratt terreng.\n\n«Faresonekart for skred i bratt terreng» består av detaljerte skredfareutredninger/-kartlegginger som skal avdekke den reelle skredfaren og dokumentere om et område oppfyller sikkerhetskravene i Byggteknisk forskrift (TEK17 § 7-3) (https://www.dibk.no/regelverk/byggteknisk-forskrift-tek17/7/7-3/  ). Skredfaren kvantifiseres som nominell årlig sannsynlighet (≥1/100, ≥1/1000 og ≥1/5000) og presenteres i et faresonekart, med tilhørende skredfarerapport. \n\nDatasettet er en sammenstilling av prosjekter utført av eller for NVE, samt av andre aktører som har fulgt NVEs veileder \"Utredning av sikkerhet mot skred i bratt terreng\": https://veiledere.nve.no/utredning-av-sikkerhet-mot-skred-i-bratt-terreng/hvordan-utfore-en-skredfareutredning/ (UKS).\nVeilederen dekker kartlegging av skredtypene steinsprang-, stein-, snø-, sørpe-, jord- og flomskred. \n\nDatasettet inneholder også eldre rapporter/faresoner som ikke nødvendigvis oppfyller dagens veileder/krav.\n\nNVE kartlegger utvalgte områder prioritert etter \"Plan for skredfarekartlegging\" ( https://publikasjoner.nve.no/rapport/2011/rapport2011_14.pdf), med hovedvekt på eksisterende bebyggelse og områder der mennesker oppholder seg. Det finnes en kartbasert oversikt (https://nve.maps.arcgis.com/apps/webappviewer/index.html?id=2e2412461a9d4ef6ac370edaa09a0a1e) over hvilke kommuner som er eller skal bli kartlagt i statlig regi. I tillegg utføres mange kartlegginger av konsulenter for kommuner, offentlige etater, private selskaper og privatpersoner, ofte som grunnlag for plan- og byggesaker. For enkelte områder er kun én faresone tilgjengelig (f.eks. 1000-årsfaresone), typisk når utredningen gjelder en spesifikk sikkerhetsklasse. Etter innføring av pliktig innmelding av grunnundersøkelser og naturfareutredninger fra 01.01.2025, har tilfanget av faresonekart økt betydelig.\n\nEksterne utredninger der NVE ikke er oppdragsgiver blir kun tilrettelagt for kart-presentasjon av NVE. NVE har ikke vurdert den faglige kvaliteten eller datagrunnlaget. Bruk av data og rapporter skjer derfor på eget ansvar og NVE fraskriver seg ansvar for feil og mangler i rapportene og i de digitale dataene. Det er en forutsetning at tilhørende rapporter gjennomgås nøye før faresoner tas i bruk, og at brukeren, eventuelt ved hjelp av konsulent, vurderer kvalitet og egnethet for formålet.",
    "abstractEn": "Planlagt ferdig februar/mars 2026\n\nDatasettet «Faresonekart for skred i bratt terreng» erstatter datasettet «Skredfaresoner». \n\nVi jobber fortløpende med å få lagt ut mer faresoner spesifisert per skredtype, for de prosjektene der vi har slike data\n\nViktigste nyheter er:\n- Nye objekttyper: Påvirkningsområde og Skreddimensjonerende (punkt for visuell visning av skredtype)\n- Ny egenskap: HensynTilSkog (ja/nei), gir info om faresoner kartlagt uten hensyn til dagens skog.\n- Nye tegneregler (WMS) for punktene over og mulighet for detaljert visning av faresoner for hver enkelt skredtype. Det er fortsatt visning av faresoner over samlet skredfare for alle skredtyper i bratt terreng.\n\n«Faresonekart for skred i bratt terreng» består av detaljerte skredfareutredninger/-kartlegginger som skal avdekke den reelle skredfaren og dokumentere om et område oppfyller sikkerhetskravene i Byggteknisk forskrift (TEK17 § 7-3) (https://www.dibk.no/regelverk/byggteknisk-forskrift-tek17/7/7-3/  ). Skredfaren kvantifiseres som nominell årlig sannsynlighet (≥1/100, ≥1/1000 og ≥1/5000) og presenteres i et faresonekart, med tilhørende skredfarerapport. \n\nDatasettet er en sammenstilling av prosjekter utført av eller for NVE, samt av andre aktører som har fulgt NVEs veileder \"Utredning av sikkerhet mot skred i bratt terreng\": https://veiledere.nve.no/utredning-av-sikkerhet-mot-skred-i-bratt-terreng/hvordan-utfore-en-skredfareutredning/ (UKS).\nVeilederen dekker kartlegging av skredtypene steinsprang-, stein-, snø-, sørpe-, jord- og flomskred. \n\nDatasettet inneholder også eldre rapporter/faresoner som ikke nødvendigvis oppfyller dagens veileder/krav.\n\nNVE kartlegger utvalgte områder prioritert etter \"Plan for skredfarekartlegging\" ( https://publikasjoner.nve.no/rapport/2011/rapport2011_14.pdf), med hovedvekt på eksisterende bebyggelse og områder der mennesker oppholder seg. Det finnes en kartbasert oversikt (https://nve.maps.arcgis.com/apps/webappviewer/index.html?id=2e2412461a9d4ef6ac370edaa09a0a1e) over hvilke kommuner som er eller skal bli kartlagt i statlig regi. I tillegg utføres mange kartlegginger av konsulenter for kommuner, offentlige etater, private selskaper og privatpersoner, ofte som grunnlag for plan- og byggesaker. For enkelte områder er kun én faresone tilgjengelig (f.eks. 1000-årsfaresone), typisk når utredningen gjelder en spesifikk sikkerhetsklasse. Etter innføring av pliktig innmelding av grunnundersøkelser og naturfareutredninger fra 01.01.2025, har tilfanget av faresonekart økt betydelig.\n\nEksterne utredninger der NVE ikke er oppdragsgiver blir kun tilrettelagt for kart-presentasjon av NVE. NVE har ikke vurdert den faglige kvaliteten eller datagrunnlaget. Bruk av data og rapporter skjer derfor på eget ansvar og NVE fraskriver seg ansvar for feil og mangler i rapportene og i de digitale dataene. Det er en forutsetning at tilhørende rapporter gjennomgås nøye før faresoner tas i bruk, og at brukeren, eventuelt ved hjelp av konsulent, vurderer kvalitet og egnethet for formålet."
  },
  {
    "no": "Flom aktsomhetsområder",
    "en": "Flooding - rough susceptiblitity zones",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/60c5024f-bf93-4d7a-888a-5fe001427195",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://kart.nve.no/enterprise/services/Flomaktsomhet/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "NVEs aktsomhetskart for flom er et nasjonalt datasett som på oversiktsnivå viser hvilke arealer som kan være utsatt for flomfare. Potensielt flomutsatte områder vises som polygon på kartet, men inneholder ikke informasjon om den årlige sannsynligheten for flom.",
    "abstractEn": "The Norwegian Water Resources and Energy Directorate's susceptibility map for flooding is a national map at a general level which shows which areas may be vulnerable to flooding. It will never be possible to make the map entirely accurate, but it is good enough to provide an indication of where the risk of flooding should be assessed in greater detail if new development is in the offing. The information on the map can be used as an initial assessment base in impact assessment and/or risk and vulnerability analyses linked with the municipal plan, and in order to identify potential flood hazard areas. The potential hazard areas can be used as a basis when establishing flood zones requiring special consideration and planning provisions."
  },
  {
    "no": "Flomsoner",
    "en": "Flood hazard map",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/e95008fc-0945-4d66-8bc9-e50ab3f50401",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://kart.nve.no/enterprise/services/Flomsoner2/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Flomsoner viser arealer som oversvømmes ved ulike flomstørrelser (gjentaksintervall).  Det blir utarbeidet flomsoner for 20-, 200- og 1000-årsflommene. I områder der klimaendringene gir en forventet økning i vannføringen på mer enn 20 %, utarbeides det flomsone for 200-årsflommen i år 2100.",
    "abstractEn": "Flood hazard maps show areas that are prone to flooding at various flood levels ( return periods).  Flood hazard maps are prepared for floods with 20-, 200- and 1000-year return period. In areas where climate change is expected to increase water discharge with more than 20%, flood hazard maps are being prepared for a 200-year flood in the year 2100."
  },
  {
    "no": "Forurenset grunn",
    "en": "Contaminated sites",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/e48e71ac-16fc-4e47-9e7f-c0a4a4bbfad0",
    "access": "open",
    "proto": "REST/WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart.miljodirektoratet.no/arcgis/services/grunnforurensning2/MapServer/WMSServer?service=wms&version=1.3.0&request=getcapabilities",
    "notes": "",
    "tags": [
      "environment"
    ],
    "abstractNo": "Datasettet omfatter eiendommer med forurenset grunn samt kommunale og private-/ industrideponier. Datasettet er fremskaffet ved kartlegging av lokaliteter med forurenset grunn og/eller med mistanke om forurenset grunn og ved innrapporteringer gjort i forbindelse med bygge- og gravesaker, pålegg om undersøkelser etter tiltak eller på eget initiativ.",
    "abstractEn": "Datasettet omfatter eiendommer med forurenset grunn samt kommunale og private-/ industrideponier. Datasettet er fremskaffet ved kartlegging av lokaliteter med forurenset grunn og/eller med mistanke om forurenset grunn og ved innrapporteringer gjort i forbindelse med bygge- og gravesaker, pålegg om undersøkelser etter tiltak eller på eget initiativ."
  },
  {
    "no": "Gravbarhet",
    "en": "Diggability",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/6f383993-592d-4c1f-bcaf-e4c905af6ddb",
    "access": "open",
    "proto": "Tjenestelag/WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://geo.ngu.no/mapserver/MarineGrunnkartWMS?REQUEST=GetCapabilities&SERVICE=WMS",
    "notes": "Stability of the seabed",
    "tags": [
      "environment"
    ],
    "abstractNo": "Datasettet viser om det er lett eller vanskelig å grave i bunnen. Gravbarhet er basert på sedimentfordeling, og angir både hvor enkelt det er å grave i bunnen og den forventede stabiliteten til det utgravde området. For eksempel vil sandige sedimenter gjerne kollapse fortere etter utgravning enn hva mer finkornig materiale vil.",
    "abstractEn": "The data set is based on grain size distribution and indicates how easy it is to excavate an area and the expected stability of excavated areas."
  },
  {
    "no": "Grunnforurensning 2 WMS",
    "en": "Contaminated sites 2 WMS",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/9f51ffea-549b-48a7-9d6e-19cf7c84cc40",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "environment"
    ],
    "abstractNo": "Tjenesten omfatter eiendommer med forurenset grunn samt kommunale og private-/ industrideponier. Tjenesten er fremskaffet ved kartlegging av lokaliteter med forurenset grunn og/eller med mistanke om forurenset grunn og ved innrapporteringer gjort i forbindelse med bygge- og gravesaker, pålegg om undersøkelser etter tiltak eller på eget initiativ.",
    "abstractEn": "Tjenesten omfatter eiendommer med forurenset grunn samt kommunale og private-/ industrideponier. Tjenesten er fremskaffet ved kartlegging av lokaliteter med forurenset grunn og/eller med mistanke om forurenset grunn og ved innrapporteringer gjort i forbindelse med bygge- og gravesaker, pålegg om undersøkelser etter tiltak eller på eget initiativ."
  },
  {
    "no": "Grunnvann (Granada) WMS",
    "en": "Granada WMS",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/4a0f9676-7cd0-4555-a8f3-763bb769d5d4",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "environment",
      "infrastructure"
    ],
    "abstractNo": "GRANADA, Nasjonal grunnvannsdatabase, er tilgjengelig som en karttjeneste på internett. Den nasjonale grunnvannsdatabasen (GRANADA) gir informasjon om brønner og oppkommer (kilder) i løsmasser og fjell, sonderboringer, grunnvannskvalitet, dyp til fjell, brønnparker, samt overvåking av grunnvann.",
    "abstractEn": "The national groundwater database GRANADA is available as web map service. The service is related to groundwater in Norway, and provides information on wells and springs in soils and rock, probing, groundwater quality and monitoring of groundwater."
  },
  {
    "no": "Grunnvannsborehull",
    "en": "Groundwater borehole",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/82cd33ef-52dd-4c83-b2d6-e55a0941b33b",
    "access": "open",
    "proto": "API-Features/WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://geo.ngu.no/mapserver/GranadaWMS5?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "environment",
      "infrastructure"
    ],
    "abstractNo": "Datasettet gir en landsdekkende oversikt over borede grunnvannsbrønner, energibrønner og naturlige oppkommer av grunnvann (tidligere kalt kilder). Datasettet viser lokalisering og tekniske, administrative og geologiske forhold registrert for grunnvanns- og energibrønner. Oftest er de registrert av borefirma iht. oppgaveplikten etter Vannressursloven §46. Dataene er tilgjengelig i GRANADA - Nasjonal grunnvannsdatabase https://geo.ngu.no/kart/granada_mobil/",
    "abstractEn": "The dataset provides an overview of the country's groundwater wells and sources, and groundwater quality. It is primarily the well drilling companies that supply reports on wells, and the data is recorded for a specific template in accordance with regulations. Reported well data are quality assured by NGU."
  },
  {
    "no": "Hav og is - Iskart (shapefil)",
    "en": "Sea and Ice – Ice Map (Shapefile)",
    "ownerNo": "Meteorologisk institutt",
    "ownerEn": "Norwegian Meteorological Institute",
    "url": "https://kartkatalog.geonorge.no/metadata/79013154-92ee-4647-b160-925cbc148601",
    "access": "open",
    "proto": "WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "",
    "notes": "Ice map of the Norwegian part of the Arctic",
    "tags": [
      "meteorology",
      "transport"
    ],
    "abstractNo": "Istjenesten ved Meteorologisk institutt utarbeider hver virkedag høyoppløselige iskart over den norsk del av Arktis, og ved behov også for Norskekysten f.eks. Oslofjorden. Kartene viser iskonsentrasjon og er basert på en manuell tolkning av ulike satellittdata.Det benyttes i hovedsak væruavhengige Synthetic Aperture Radar data fra Radarsat-2 og Envisat-satellittene. I tillegg til disse dataene brukes visuelle og infrarøde data fra MODIS og NOAA satellitter.",
    "abstractEn": "Istjenesten ved Meteorologisk institutt utarbeider hver virkedag høyoppløselige iskart over den norsk del av Arktis, og ved behov også for Norskekysten f.eks. Oslofjorden. Kartene viser iskonsentrasjon og er basert på en manuell tolkning av ulike satellittdata.Det benyttes i hovedsak væruavhengige Synthetic Aperture Radar data fra Radarsat-2 og Envisat-satellittene. I tillegg til disse dataene brukes visuelle og infrarøde data fra MODIS og NOAA satellitter."
  },
  {
    "no": "Hav og is; Bølgevarsler",
    "en": "Sea surface forecast",
    "ownerNo": "Meteorologisk institutt",
    "ownerEn": "Norwegian Meteorological Institute",
    "url": "https://kartkatalog.geonorge.no/metadata/73bc1af3-5a14-4480-9b9c-2b7edda20fef",
    "access": "open",
    "proto": "WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "The Arctic Ocean Wave Analysis and Forecast system uses the WAM model which is forced with surface winds and boundary wave spectra from ECMWF (European Centre for Medium-Range Weather Forecasts) together with ice concentration from OSI SAF (Ocean and Sea Ice). WAM runs daily providing an hourly 5 days forecast. From the output variables the most commonly used are significant wave height, peak period and mean direction.",
    "abstractEn": "Met Norway's operational numerical wave model MyWaveWam is run on a 4 km grid covering Europe and the Arctic. The model is run twice daily with ECMWF and AROME atmospheric forcing to give forecasts to +66 hrs"
  },
  {
    "no": "Havnedata WMS",
    "en": "Port Data WMS",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/6e0d1be6-0ea4-4d11-aaf3-76ccec945d65",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "Havnedata er detaljert geografisk informasjon om havner og kaier, med tilhørende objekter som havneanlegg, kaier, vannuttak, EL-koblinger, sensorer, beredskapspunkter, avfallspunkter, kraner, slipp, fender, fortøyningsinretninger, tømmestasjoner, gjerder, m.fl. \n\nDataene inneholder mulighet for å bruke koblingsnøkler for å koble de geografiske objektene til bakenforliggende systemer med ytterligere informasjon om havnene. Spesifikasjonen er laget med tanke på forvaltning i en sentral base etter samme forvaltningskonsept som Sentral FKB.  \n\nRegulereringer i form av lovverk, regler, restriksjoner eller annet, som er relatert til havn og har en geografisk utstrekning/avgrensning som kan kartfestes, utgjør også en del av Havnedata.",
    "abstractEn": "Port Data is detailed geographical information about ports and quays, with associated objects such as port facilities, quays, water connections, electrical connections, sensor, emergency response equipment, waste disposal, cranes, slipways, fenders, mooring facilities, liquid waste facilities, etc.\n\nThe data contains the possibility of using keys to connect the geographical objects to underlying systems with further information about the ports. The specification is made for the purpose with storage in a central base according to the same management concept as Sentral FKB. \n\nRegulations in the form of legislation, rules, restrictions or other, which are related to the port and have a geographical extent that can be mapped, is also a part of the Port Data set."
  },
  {
    "no": "Innsjødatabase",
    "en": "Hydrology - lakes",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/823b8639-9a49-41bf-8571-3608435eb149",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nve.geodataonline.no/arcgis/services/Innsjodatabase2/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk",
      "environment"
    ],
    "abstractNo": "Innsjødatabasen fra NVE inneholder (punkt-)informasjon knyttet til alle innsjøer større enn 2500 m2 med tilhørende nasjonalt løpenummer vatn_lnr. Basen inneholder data for ca 243 000 innsjøer. Egenskapsdata er bla. vassdragsnr., vannkraftmagasinnr., navnehierarki, og kommunenr.",
    "abstractEn": "The lake database from the Norwegian Water Resources and Energy Directorate includes (dot) information linked with all lakes larger than 2500 m2 with associated national serial numbers, **vatn_lnr**. This database includes data for approx. 243,000 lakes. Attribute data is made up of information such as watercourse no., hydroelectric power reservoir no., name hierarchy and municipality no."
  },
  {
    "no": "INSPIRE Transport Network Water",
    "en": "INSPIRE Transport Network Water",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/f2c0561c-3c4f-4ec8-8a57-f2a27526c5e9",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "European specification",
    "tags": [
      "transport"
    ],
    "abstractNo": "Farled og biled i henhold til europeisk spesifikasjon; Inspire Transport network.",
    "abstractEn": "Fairway and secondary watercourse in accordance with European specification; Inspire Transport network."
  },
  {
    "no": "ISPS Havneanlegg",
    "en": "Marine transport - ISPS ports",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/dc9b4d63-8597-4971-92a4-9f665abc3e21",
    "access": "open",
    "proto": "WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "Datasettet inneholder beskrivelse av havneanlegg som Kystverkets fører tilsyn med etter den såkalte ISPS koden. Denne omhandler havnesikring mot ytre trusler/terroranslag:\n\nhttp://www.imo.org/ourwork/security/instruments/pages/ispscode.aspx\n\nObjektene i datasettet beskrives med ISPS status, hvilken type trafikk som går over havneanlegget samt en del forhold som for eksempel eierskap, myndighet mv.",
    "abstractEn": "The dataset includes a description of port facilities that are inspected by the Norwegian Coastal Administration pursuant to what is known as the ISPS code. This deals with port security against external threats/terrorist attacks:\n\nhttp://www.imo.org/ourwork/security/instruments/pages/ispscode.aspx\n\nThe objects in the dataset are described with ISPS status, what type of traffic uses the port facility, and a number of circumstances such as ownership, authority, etc."
  },
  {
    "no": "IUA - Interkommunale utvalg mot akutt forurensning",
    "en": "Pollution emergency response regions (IUA)",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/c9a242b5-43dc-469a-8b06-12c151d7fd12",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://services.kystverket.no/wms.ashx?service=WMS&request=GetCapabilities",
    "notes": "",
    "tags": [
      "environment"
    ],
    "abstractNo": "Den kommunale beredskapen er basert på risikovurderinger av normal virksomhet i kommunen. Landets kommuner er organisert i 32 beredskapsregioner. Et Interkommunalt utvalg for akutt forurensning (IUA) i hver region ivaretar beredskaps- og aksjonsplikten. Denne interkommunale beredskapen er dimensjonert for å håndtere mindre, akutte utslipp. Forurensningshendelser som er, eller utvikler seg til å bli, av en slik størrelse at de blir for store for et IUA å håndtere, vil bli overtatt av Kystverket (\"Statlig aksjon\").",
    "abstractEn": "The municipal emergency response is based on risk assessments from normal enterprise in the municipality. Norway's municipalities are arranged into 34 emergency response regions. An Intermunicipal committee for acute contamination (IUA) in each region meets the requirement to maintain emergency response and take action. This intermunicipal emergency response is dimensioned to deal with smaller, acute discharges. Contamination incidents that are or develop into incidents that are too major for an IUA to deal with will be taken over by the Norwegian Coastal Administration (\"Governmental action\")."
  },
  {
    "no": "Jernbane - Banenettverk",
    "en": "Railway Network",
    "ownerNo": "Bane NOR SF",
    "ownerEn": "Bane Nor",
    "url": "https://kartkatalog.geonorge.no/metadata/c3da3591-cded-4584-a4b1-bc61b7d1f4f2",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.banenettverk?request=GetCapabilities&service=WMS",
    "notes": "Replacement for FKB Rail which is login required?",
    "tags": [
      "transport"
    ],
    "abstractNo": "Datasettet Banenettverk inneheld referanselinjer for jernbanestrekningar som er ein del av statens jernbaneinfrastruktur (samt museumsbanar) i Norge med geografisk stedfesta linjegeometri og noder i eit topologisk nettverk. Nettverket har verdiar i samsvar med Bane NOR sin modell for lineære referansar (kilometrering).",
    "abstractEn": "The dataset Railway Network consist of geographic reference lines for railway lines that form part of the Norwegian national railway infrastructure. The dataset uses linear referencing according to Bane NOR's model using kilometer chainage."
  },
  {
    "no": "Jordskjelvsoneringskart",
    "en": "Earthquake Zonation Map",
    "ownerNo": "NORSAR",
    "ownerEn": "NORSAR",
    "url": "https://kartkatalog.geonorge.no/metadata/52e8d522-8ee1-46fc-8ee9-9210354f9606",
    "access": "contact",
    "proto": "WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Stiftelsen NORSAR har etablert et nytt kunnskapsgrunnlag for norsk jordskjelvsonering basert på nye og harmoniserte data, bedre regnemodeller og metodeutvikling fra inn- og utland. Kartet viser sannsynligheten for jordskjelv og hvilket skadepotensiale skjelvene har for hele Norge, inkludert Svalbard.\n\nDet nye jordskjelvsoneringskartet er digitalt tilgjengelig. Dataene kan hentes ut direkte for en adresse for en utbygging eller som en tjeneste for samfunnsplanlegging. NORSAR er en uavhengig forskningsstiftelse. Tjenesten finansieres derfor ved abonnement eller enkeltkjøp via portalen som du finner her: https://www.norsar.no/soneringskart",
    "abstractEn": "Stiftelsen NORSAR har etablert et nytt kunnskapsgrunnlag for norsk jordskjelvsonering basert på nye og harmoniserte data, bedre regnemodeller og metodeutvikling fra inn- og utland. Kartet viser sannsynligheten for jordskjelv og hvilket skadepotensiale skjelvene har for hele Norge, inkludert Svalbard.\n\nDet nye jordskjelvsoneringskartet er digitalt tilgjengelig. Dataene kan hentes ut direkte for en adresse for en utbygging eller som en tjeneste for samfunnsplanlegging. NORSAR er en uavhengig forskningsstiftelse. Tjenesten finansieres derfor ved abonnement eller enkeltkjøp via portalen som du finner her: https://www.norsar.no/soneringskart"
  },
  {
    "no": "Jordsmonn",
    "en": "Soil Data",
    "ownerNo": "Norsk institutt for bioøkonomi",
    "ownerEn": "Norwegian Institute of Bioeconomy Research",
    "url": "https://kartkatalog.geonorge.no/metadata/0b960bb3-d9af-499e-a204-72833a4bcaaa",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.nibio.no/cgi-bin/jordsmonn?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
    "notes": "",
    "tags": [
      "environment"
    ],
    "abstractNo": "Jordsmonn inneholder basisdata fra NIBIOs jordkartlegging. \nNIBIO jobber med å få på plass det nye nedlastbare datasettet på GeoNorge. \nWMS'en er oppdatert, men for tilgang til data kontakt NIBIO. \n\nDatasettet inneholder en beskrivelse av seks temakart som har opphav i jorddata fra jordsmonn-kartleggingen hos NIBIO, samt informasjon om helling, stein og blokkinnhold, tilleggsinformasjon, kartleggingsmetodikk og kartleggingsår.\n\nJordsmonndataene gir en god og detaljert oversikt over jordressursene i Norge. Jordsmonndata utgjør et objektivt kunnskapsgrunnlag for beslutninger om bruk av jordressursen.",
    "abstractEn": "Jordsmonn inneholder basisdata fra NIBIOs jordkartlegging. \nNIBIO jobber med å få på plass det nye nedlastbare datasettet på GeoNorge. \nWMS'en er oppdatert, men for tilgang til data kontakt NIBIO. \n\nDatasettet inneholder en beskrivelse av seks temakart som har opphav i jorddata fra jordsmonn-kartleggingen hos NIBIO, samt informasjon om helling, stein og blokkinnhold, tilleggsinformasjon, kartleggingsmetodikk og kartleggingsår.\n\nJordsmonndataene gir en god og detaljert oversikt over jordressursene i Norge. Jordsmonndata utgjør et objektivt kunnskapsgrunnlag for beslutninger om bruk av jordressursen."
  },
  {
    "no": "Kraftlinjer",
    "en": "Hydroelectric power system - power lines",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/4ab8c70a-215a-4e1a-847b-b3c044526d5e",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nve.geodataonline.no/arcgis/services/Nettanlegg4/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "Included in the dataset “Nettanlegg”",
    "tags": [
      "infrastructure"
    ],
    "abstractNo": "Oversikt over det høyspente luftledningsnettet i Norge. Dette innbefatter sentral-, regional- og høyspent distribusjonsnett, dvs. nett med spenning 1 kV og over. Datasettet inkluderer kun luftledninger, ikke jordkabler.",
    "abstractEn": "Overview of the high voltage overhead power line network in Norway. This includes central, regional and high voltage distribution networks, i.e. networks with a voltage of 1 kV and above. The dataset includes overhead power lines only, not underground cables."
  },
  {
    "no": "Kulturminner - Brannsmitteområder WFS",
    "en": "Kulturminner - Brannsmitteområder WFS",
    "ownerNo": "Riksantikvaren",
    "ownerEn": "Directorate for Cultural Heritage",
    "url": "https://kartkatalog.geonorge.no/metadata/cbe4baab-94c0-449b-bea9-ce1084cf373d",
    "access": "open",
    "proto": "WFS",
    "wmsUrl": "",
    "notes": "Also included in Cultural Heritage – Fire Protection",
    "tags": [
      "culture"
    ],
    "abstractNo": "Denne tjenesten gir tilgang til GML-data for datasettet \" Brannsmitteområde\". Dette er områder med verneverdig tett trehusbebyggelse der det er spesielt stor fare for at brann i ein bygning skal smitte over på dei øvrige.",
    "abstractEn": "Denne tjenesten gir tilgang til GML-data for datasettet \" Brannsmitteområde\". Dette er områder med verneverdig tett trehusbebyggelse der det er spesielt stor fare for at brann i ein bygning skal smitte over på dei øvrige."
  },
  {
    "no": "Kulturminner - Brannvern",
    "en": "Cultural Heritage – Fire Protection",
    "ownerNo": "Riksantikvaren",
    "ownerEn": "Directorate for Cultural Heritage",
    "url": "https://kartkatalog.geonorge.no/metadata/68f6a2e5-8c8a-4976-870c-670add90fff6",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://kart.ra.no/wms/brannvern",
    "notes": "",
    "tags": [
      "culture"
    ],
    "abstractNo": "Datasettet inneholder områder som Riksantikvaren definerer som tette trehusmiljøer. Områder der det må tas særskilte brannvernhensyn. I tillegg inneholder det brannsmitteområder, dvs. områder i, eller i nærhet til, et tett trehusmiljø der det er spesielt stor fare for at brann i en bygning skal smitte over på de øvrige.\n\nTett bebyggelse med trehus er spesielt sårbar om det skulle oppstå brann. De største områdene med sammenhengende, gammel trehusbebyggelse har vi i byer, for eksempel i Halden sentrum, gamle Stavanger og i store deler av Trondheim. Tette trehusmiljøer finnes imidlertid også på større gårdstun, som Havråtunet i Hordaland, og i gamle fiskevær, som Sør-Gjæslingan i Nord-Trøndelag.",
    "abstractEn": "Datasettet inneholder områder som Riksantikvaren definerer som tette trehusmiljøer. Områder der det må tas særskilte brannvernhensyn. I tillegg inneholder det brannsmitteområder, dvs. områder i, eller i nærhet til, et tett trehusmiljø der det er spesielt stor fare for at brann i en bygning skal smitte over på de øvrige.\n\nTett bebyggelse med trehus er spesielt sårbar om det skulle oppstå brann. De største områdene med sammenhengende, gammel trehusbebyggelse har vi i byer, for eksempel i Halden sentrum, gamle Stavanger og i store deler av Trondheim. Tette trehusmiljøer finnes imidlertid også på større gårdstun, som Havråtunet i Hordaland, og i gamle fiskevær, som Sør-Gjæslingan i Nord-Trøndelag."
  },
  {
    "no": "Kulturminner - Freda bygninger",
    "en": "Cultural heritage - Protected buildings",
    "ownerNo": "Riksantikvaren",
    "ownerEn": "Directorate for Cultural Heritage",
    "url": "https://kartkatalog.geonorge.no/metadata/a4bfd879-120f-490e-9907-68ba870664b1",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://kart.ra.no/wms/freda_bygninger?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
    "notes": "",
    "tags": [
      "culture"
    ],
    "abstractNo": "Bygninger og kirker som er automatisk, vedtaks-, forskrifts- eller midlertidig fredet etter lov og kirker som har status som listeførte.\n\nBygninger kan fredes etter ulike paragrafer i kulturminneloven: Bygninger som blir vedtatt fredet (kml § 15), statlige bygninger som blir vedtatt fredet i forskrift (kml § 22a), bygninger som er eldre enn 1537 er automatisk fredet (kml § 4), stående byggverk med opprinnelse fra perioden 1537-1649 kan bli erklært fredet (kml § 4), samiske bygninger eldre enn 100 år er automatisk fredet (kml § 4).",
    "abstractEn": "Buildings and churches that are protected according to Norwegian law, either automatically, permanently or temporary by individual order, or by regulation. Buildings can be protected through several paragraphs in the Cultural heritage act. Buildings that are protected through individual order (§ 15), and government owned buildings that are protected through regulation (§ 22a). Buildings that are older than 1537 are automatically protected, buildings from between 1537 and 1649 can be declared protected, and Sami buildings older than 100 years are also automatically protected (§ 4)."
  },
  {
    "no": "Kulturminner - Lokaliteter, Enkeltminner og Sikringssoner",
    "en": "Cultural Heritage – Sites, Single Objects, and Protection Zones",
    "ownerNo": "Riksantikvaren",
    "ownerEn": "Directorate for Cultural Heritage",
    "url": "https://kartkatalog.geonorge.no/metadata/c72906a0-2bc2-41d7-bea2-c92d368e3c49",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://kart.ra.no/wms/kulturminner2?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
    "notes": "",
    "tags": [
      "culture"
    ],
    "abstractNo": "Datasettet Kulturminner – Lokaliteter, Enkeltminner og Sikringssoner inneholder alle  kulturminner på fastlands-Norge og Svalbard (bortsett fra kulturminner som har begrenset offentlighet) som er registrert i Riksantikvarens offisielle database over kulturminner og kulturmiljøer, Askeladden, uavhengig av vernestatus. Et kulturminne er i denne sammenhengen en helhet bestående av en lokalitet med et eller flere enkeltminner, samt sikringssoner (hvis vernestatus tilsier det). \n\nOverordnet kan man si at et enkeltminne representerer et fysisk kulturminne, med dets geografiske utstrekning og informasjon som er spesifikt for det. En lokalitet representerer et geografisk område som inneholder et eller flere enkeltminner som hører sammen på en eller annen måte. Lokaliteten inneholder generell informasjon om dette området, samt informasjon om høyeste vern («høyesteVern») blant enkeltminnene innenfor.\n\nEksempelvis vil et gravfelt utgjøre en lokalitet, mens gravhaug(er)/gravrøys(er) i gravfeltet utgjør enkeltminner. For nyere tids kulturminner kan lokaliteten være ett anlegg som er representert av et enkelt bygg, et gårdstun bestående av flere bygninger, eller én eller flere bygninger med et vedtaksfredet område rundt (park, hage, o.l.).\n\nEn sikringssone er et geografisk område rundt automatisk fredede kulturminner. Området er ment for å gi et ekstra vern mot tiltak, og er derfor særlig viktig å ta hensyn til.",
    "abstractEn": "Datasettet Kulturminner – Lokaliteter, Enkeltminner og Sikringssoner inneholder alle  kulturminner på fastlands-Norge og Svalbard (bortsett fra kulturminner som har begrenset offentlighet) som er registrert i Riksantikvarens offisielle database over kulturminner og kulturmiljøer, Askeladden, uavhengig av vernestatus. Et kulturminne er i denne sammenhengen en helhet bestående av en lokalitet med et eller flere enkeltminner, samt sikringssoner (hvis vernestatus tilsier det). \n\nOverordnet kan man si at et enkeltminne representerer et fysisk kulturminne, med dets geografiske utstrekning og informasjon som er spesifikt for det. En lokalitet representerer et geografisk område som inneholder et eller flere enkeltminner som hører sammen på en eller annen måte. Lokaliteten inneholder generell informasjon om dette området, samt informasjon om høyeste vern («høyesteVern») blant enkeltminnene innenfor.\n\nEksempelvis vil et gravfelt utgjøre en lokalitet, mens gravhaug(er)/gravrøys(er) i gravfeltet utgjør enkeltminner. For nyere tids kulturminner kan lokaliteten være ett anlegg som er representert av et enkelt bygg, et gårdstun bestående av flere bygninger, eller én eller flere bygninger med et vedtaksfredet område rundt (park, hage, o.l.).\n\nEn sikringssone er et geografisk område rundt automatisk fredede kulturminner. Området er ment for å gi et ekstra vern mot tiltak, og er derfor særlig viktig å ta hensyn til."
  },
  {
    "no": "Kulturminner - Verneverdig tette trehusmiljøer WFS",
    "en": "Cultural heritage - Listed wooden buildings environments",
    "ownerNo": "Riksantikvaren",
    "ownerEn": "Directorate for Cultural Heritage",
    "url": "https://kartkatalog.geonorge.no/metadata/68eb7647-cd2e-4d76-ad0c-44ff459b7656",
    "access": "open",
    "proto": "WFS",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "culture",
      "environment"
    ],
    "abstractNo": "WFS for Verneverdig tette trehusmiljøer",
    "abstractEn": "The dataset covers the Directorate for Cultural Heritage's listed wooden buildings environments. These are cultural historical wooden buildings environments subject to special fire protection considerations. These environments are especially vulnerable to fires. The largest areas of continuous, historical wooden buildings environments are found in cities, such as central Halden, historical Stavanger, and large parts of Trondheim. Even so, wooden buildings environments are also found on larger farmyards, such as Havråtunet in Hordaland, and in historical fishing communities, such as Sør-Gjæslingan in Nord-Trøndelag."
  },
  {
    "no": "Kvikkleire",
    "en": "Quick clay",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/a29b905c-6aaa-4283-ae2c-d167624c08a8",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://kart.nve.no/enterprise/services/SkredKvikkleire2/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "environment",
      "risk"
    ],
    "abstractNo": "Kartene gir en oversikt over soner med potensiell fare (aktsomhetsområder) for større kvikkleireskred. Sonene er identifisert og avgrenset ved kvartærgeologisk kartlegging (for å identifisere områder med marin leire), geoteknisk vurdering av topografi og grove, geotekniske undersøkelser.  Sonene omfatter løsneområder for kvikkleireskred (områder som kan gli ut) og utløpsområder (områder som kan rammes av skredmasser) for nye kartlegginger. For identifiserte soner som kun inneholder løsneområder, må utløpsområdene vurderes særskilt.\\\\nDe identifiserte kvikkleiresonene er klassifisert i tre faregradsklasser (høy-, middels- og lav faregrad), basert på topografiske, geotekniske og hydrologiske kriterier. Sonene er videre klassifisert i tre konsekvensklasser(høy-, middels- og lav konsekvensklasse) avhengig av konsekvenser som et skred i sonen vil ha på bebyggelse og infrastruktur. Sonene er deretter klassifisert i fem risikoklasser, utledet fra faregrads- og konsekvensklassifiseringen.",
    "abstractEn": "The maps provide an overview of areas with a potential risk (susceptibility areas) of major quick clay slides. The zones are identified and defined by means of quaternary geological mapping (in order to identify areas with marine clay), geotechnical assessment of topography and basic geotechnical surveys.  The zones include only trigger areas for quick clay slides (areas that may slip out), not run-out areas (areas that may be affected by slide masses). The quick clay zones identified are classified in three hazard level classes (high, medium and low hazard level) on the basis of topographic, geotechnical and hydrological criteria. The zones are also classified in three consequence classes (high, medium and low consequence class) depending on the consequences of a landslide in the zone on buildings and infrastructure. The zones are then classified into five risk classes, derived from the hazard level and consequence classifications."
  },
  {
    "no": "Landformer",
    "en": "Landforms",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/7d220e23-5835-4f83-ba96-1156c154e566",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://geo.ngu.no/mapserver/LandformerWMS?REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0",
    "notes": "Impact assessments",
    "tags": [
      "risk"
    ],
    "abstractNo": "Datasettet viser landformer, geotopverdi og dekning. Data for landformer består av linjer og polygoner. Kartlegging av ulike landformtyper er pågående, og dekningsgrad av ulike landformtyper varierer. Datasettet inneholder også landformer som er verdivurdert i henhold til geotopverdsettings-kriteriene, beskrevet i veilederen M-1941 Konsekvensutredninger for klima og miljø. Landformer er geologiske formasjoner i landskapet som er definert ut fra form og utseende, og ut fra hvilke prosesser som har dannet dem. Landformtypene er definert i i NiN (Natur i Norge). Et utvalg av rødlistede landformer har tidligere blitt kartlagt etter Miljødirektoratets instruks (Christoffersen mfl. 2021; van Boeckel mfl. 2023, 2024) og blitt publisert ved Miljødirektoratet under navnet “Landformer”. Datasettet viser ikke landformer i marint miljø.",
    "abstractEn": "Datasettet viser landformer, geotopverdi og dekning. Data for landformer består av linjer og polygoner. Kartlegging av ulike landformtyper er pågående, og dekningsgrad av ulike landformtyper varierer. Datasettet inneholder også landformer som er verdivurdert i henhold til geotopverdsettings-kriteriene, beskrevet i veilederen M-1941 Konsekvensutredninger for klima og miljø. Landformer er geologiske formasjoner i landskapet som er definert ut fra form og utseende, og ut fra hvilke prosesser som har dannet dem. Landformtypene er definert i i NiN (Natur i Norge). Et utvalg av rødlistede landformer har tidligere blitt kartlagt etter Miljødirektoratets instruks (Christoffersen mfl. 2021; van Boeckel mfl. 2023, 2024) og blitt publisert ved Miljødirektoratet under navnet “Landformer”. Datasettet viser ikke landformer i marint miljø."
  },
  {
    "no": "Lufthavn-punkt Avinor",
    "en": "Airport - point features Avinor",
    "ownerNo": "Avinor",
    "ownerEn": "Avinor",
    "url": "https://kartkatalog.geonorge.no/metadata/22485273-dc0c-4484-a8be-357105d65689",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "Punktdata fra Avinor som representerer Avinors lufthavner.",
    "abstractEn": "Punktdata fra Avinor som representerer Avinors lufthavner."
  },
  {
    "no": "Løsmasser",
    "en": "Superficial deposits",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/3de4ddf6-d6b8-4398-8222-f5c47791a757",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://geo.ngu.no/mapserver/LosmasserWMS2?request=GetCapabilities&service=WMS",
    "notes": "Vulnerability analyses",
    "tags": [
      "environment",
      "risk"
    ],
    "abstractNo": "Løsmassedataene viser utbredelsen av løsmassetyper (også benevnt jordarter). Løsmassetypene er klassifisert etter deres dannelsesmåte. Dataene viser hvilken løsmassetype som dominerer i terrengoverflaten, og avspeiler landskapets oppbygning og utvikling. Det er viktig å være klar over at andre løsmassetyper kan opptre i dypet. Dataene viser også arealer med fjell uten løsmassedekke. Datasettet er landsdekkende og representerer de beste løsmasseregistreringene i databasen.",
    "abstractEn": "Sediment data show mainly the prevalence of soil types covering the bedrock surface. Most of the soils were formed during and after the last ice age. The data shows only the soil that dominates in the upper meters of the terrain surface. Thick and thin layers by other soils may occur further down in the soil profile."
  },
  {
    "no": "Marin grense",
    "en": "Marine limit",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/cf8ccec7-9505-4d84-94a9-eac9c69971d3",
    "access": "open",
    "proto": "API-Features/WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://geo.ngu.no/mapserver/MarinGrenseWMS4?REQUEST=GetCapabilities&SERVICE=WMS",
    "notes": "",
    "tags": [
      "basemap"
    ],
    "abstractNo": "Marin grense angir det høyeste nivået som havet nådde etter siste istid. Informasjon om marin grense er sentral i arbeidet med å avgrense områder med marine leirer i Norge. Marin grense angir høyeste nivået for marint avsatte sedimenter på land. Problemstillinger som involverer slike avsetninger kan utelukkes over marin grense, hvilket er viktig informasjon i bl.a. offentlig planarbeid. For eksempel kan kvikkleire og skred i hav- og fjordavsetninger som marin leire kun forekomme under marin grense. Videre kan grunnvannskvaliteten under marin grense være påvirket av relikt saltvann, og leire kan begrense utbredelsen av akviferer. Informasjon vedrørende tidligere havnivå er også av betydning for forståelsen av landskapsutvikling generelt.\n\nDataene består av punktregistreringer, linjer samt polygoner. Linjer og polygoner er modellert fra punktene og en 10 m terrengmodell. Terrengmodellen som er benyttet i analysen har oppløsning (rutenettstørrelse) på 10x10 meter, og er hentet fra hoydedata.no. Terrengmodellen er generert ut fra de detaljerte laserdata som var tilgjengelig høsten 2020, supplert med høydedata fra 2013-utgaven av DTM10 for områder uten dekning. Datasettet er landsdekkende.",
    "abstractEn": "Marine limit indicates the highest level the sea reached after the last Ice Age. \nInformation about marine limit is central in the work of delimiting areas with marine clay in Norway. Marin limit indicates the highest level of marine sediments deposited on land. Issues involving such deposits may be excluded over the marine limit, which is important information in i.a. public planning. For example, quick clay and landslides in marine fine-grained deposits and fjord deposits as marine clay only occur under marine limit. Furthermore, groundwater quality below marine limit can be affected by relict salt water and clay can limit the spread of aquifers.\nThe data consists of point registrations, lines and polygons. Lines and polygons are modeled from points and a 10 meter digital elevation model. The dataset is nationwide."
  },
  {
    "no": "Marine geofarer WMS",
    "en": "Marine Geohazards (WMS)",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/cedb4894-8662-4819-b202-7b0ce31a4366",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "Aggregates several marine datasets such as slide names, shallow gas, slide boundaries, etc",
    "tags": [
      "risk"
    ],
    "abstractNo": "Karttjenesten viser undersjøiske landformer relatert til skredhendelser på havbunnen samt naturfenomener som kan forårsake ustabilitet i havbunnen og dermed utgjøre fare for undersjøiske installasjoner og/eller utsatte kystområder.",
    "abstractEn": "The map service shows submarine landforms related to landslides on the seabed as well as natural phenomena that can cause instability in the seabed and thus pose a danger to underwater installations and/or exposed coastal areas."
  },
  {
    "no": "Mattilsynets WMS",
    "en": "Drinking Water from Wells",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/cf630753-508a-4e7a-99da-ae1111090248",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "Shared WMS",
    "tags": [
      "drikkevann",
      "infrastructure"
    ],
    "abstractNo": "Aktive dyrehold med produksjonsdyr og inntakspunkt for vannverk",
    "abstractEn": "Aktive dyrehold med produksjonsdyr og inntakspunkt for vannverk"
  },
  {
    "no": "Meteorologisk kartinformasjon",
    "en": "Meteorological Map Information",
    "ownerNo": "Meteorologisk institutt",
    "ownerEn": "Norwegian Meteorological Institute",
    "url": "https://kartkatalog.geonorge.no/metadata/c247f4a3-56a8-49fa-afe0-a0329b9453e1",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "Forecast data from weather and ocean models",
    "tags": [
      "meteorology",
      "risk"
    ],
    "abstractNo": "Karttjeneste med prognosedata fra værmodeller og havmodeller, samt observasjoner fra radar og satelitt.",
    "abstractEn": "Karttjeneste med prognosedata fra værmodeller og havmodeller, samt observasjoner fra radar og satelitt."
  },
  {
    "no": "Nasjonal database for grunnundersøkelser (NADAG)",
    "en": "National database for ground investigation (NADAG)",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/bf45a463-434d-4b4d-84dc-9325780ab5fb",
    "access": "open",
    "proto": "API-Features/WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://geo.ngu.no/geoserver/nadag/ows?request=GetCapabilities&service=WMS&version=1.3.0",
    "notes": "",
    "tags": [
      "risk",
      "environment"
    ],
    "abstractNo": "NGU har utviklet Nasjonal database for grunnundersøkelser (NADAG) med tilhørende karttjenester og muligheter for innmelding og nedlasting av data fra geotekniske undersøkelser. Fra og med 2025 er det lovfestet plikt for innmelding av komplette geotekniske grunnundersøkelser til NADAG. Eldre data har stor nytteverdi, og ønskes også meldt inn. Prosjektet for utvikling av NADAG er et samarbeid mellom NGU og etatene Statens vegvesen, Bane NOR, og Norges vassdrags- og energidirektorat (NVE). NGU samarbeider også med ulike konsulenter i utviklingen av løsningene. \n\nPunktene i NADAGs kartinnsyn representerer geotekniske borehull (GB), hvor metadata vises (f.eks. boretype, oppdragsfirma, oppdragsgiver, stedfestelse (posisjon), boret dybde, ev. dyp til berg). For noen punkter vil mer informasjon være tilgjengelig (f.eks. lenke til rapport og ev. rådata, boreprofil og måleresultater). NADAGs datamodell er basert på en datastruktur beskrevet i SOSI-standardene for Geovitenskapelige undersøkelser og Geotekniske undersøkelser. NADAG er innlemmet i listen over datasett til DOK. Visningstjenesten til NADAG har to innsynsløsninger, der «Mobilvennlig versjon» ligner de andre kartinnsynene til NGU, mens «NADAG fullversjon» har litt annet oppsett og andre verktøy. \n\nNye data skal leveres komplett til NADAG, enten ved bruk av GeoSuite toolbox eller gjennom et innmeldings-API som er under utarbeidelse. Eldre data kan alternativt leveres gjennom NADAG WebReg. \n\nNADAG er landsdekkende. Alle data som ligger i NADAG er fritt tilgjengelig for alle, og lastes ned vederlagsfritt. Det vil være varierende mengde informasjon tilhørende hvert datapunkt, noe som vil avhenge blant annet av formatet data er levert på, og dataeiers vilje til å offentliggjøre data utover kun å vise metadata. Tilgjengelige rapporter (pdf) kan lastes ned fra NADAGs infoark. Data kan lastes ned på formatene GML, Filgeodatabase og GeoSuite. I tillegg kan man benytte NADAGs WMS, samt at det arbeides med lese-API (OGC API Features). Nedlasting kan gjøres via Geonorge, men dette gjelder enkle datasett, dvs. primært metadata og URL-lenker til rapporter. Komplette data må lastes ned gjennom NADAGs kartinnsyn. \n\nNADAG og bidragsytere er ikke ansvarlige for den enkeltes bruk av datasettene. Datasettene og rapportene ble laget for bestemte formål/prosjekt. Den som benytter data for nye formål/prosjekt må gjøre egne og selvstendige vurderinger av dataenes kvalitet, egnethet og gyldighet. Ved bruk av data skal det refereres til rapport/dataeier. Datasettet er gjort tilgjengelig under Norsk lisens for offentlige data (NLOD). Ved å starte NADAG nettjeneste godtar du disse vilkårene for bruk.",
    "abstractEn": "National database for ground investigations (NADAG) shows borehole (points) where ground surveys are carried out. NADAG includes geotechnical data (boreholes) and has a view service for this. The services NADAG offers are free. Where raw data or reports are linked to the survey point, this can be downloaded free of charge. The information associated with each data point varies and partly depends on the format of data are passed on. There have been no attempts to correct errors in the data sets. NADAG and contributors are not responsible for the individual's use of the data sets. Use of data must be referenced to data owner."
  },
  {
    "no": "Nasjonalt register over luftfartshindre",
    "en": "Norwegian register of aviation obstacles",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/28c896d0-8a0d-4209-bf31-4931033b1082",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.nrl5?request=GetCapabilities&service=WMS",
    "notes": "Under consideration for closure",
    "tags": [
      "infrastructure",
      "risk"
    ],
    "abstractNo": "Nasjonalt register over luftfartshindre (NRL) inneholder luftfartshindre som er samlet inn som følge av \"Forskrift om rapportering, registrering og merking av luftfartshinder\". NRL inneholder posisjon og andre egenskaper for menneskeskapte objekter som stikker opp fra terrenget (master, tårn, kraner, kraftledninger m.m.). Hindre i NRL er representert som vektorer, enten punkter, linjer eller flater.\n\nNB! Luftfartshinder under 15 meter med registreringsdato etter 3.7.2025 inngår ikke i de nedlastbare dataene. NRL-data er ikke komplett og må ikke benyttes til planlegging av flyvning.",
    "abstractEn": "The national register of aviation obstacles (NRL) includes aviation obstacles collected as a consequence of \"Regulation on reporting, recording and marking of aviation obstacles\". NRL includes position and other attributes for man-made objects that rise from the terrain (masts, towers, cranes, power lines etc.). Obstacles are represented as vectors, either points, lines or polygons.\n\nN.B. Aviation obstacles lower than 15 meters with a registration date after 3.7.2025 are not included in the downloadable data. NRL data is not complete and must not be used for flight planning."
  },
  {
    "no": "Naturvernområder",
    "en": "Protected sites",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/5857ec0a-8d2c-4cd8-baa2-0dc54ae213b4",
    "access": "open",
    "proto": "REST/WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart.miljodirektoratet.no/arcgis/services/vern/mapserver/WMSServer?service=wms&request=getcapabilities",
    "notes": "",
    "tags": [
      "risk",
      "environment"
    ],
    "abstractNo": "Datasettet inneholder verneområder og vernede enkeltobjekt i Norge, herunder Svalbard og Jan Mayen. Verneområder opprettes først og fremst for å bevare naturverdier av nasjonal betydning. Dette er verdier vi skal ta vare på for all overskuelig framtid, også med tanke på naturopplevelse og kunnskap om naturen. Verneområdene forvaltes av fylkesmannen, kommunen, et nasjonalparkstyre eller et interkommunalt verneområdestyre.\\\\n\\\\nDatasettet gir en oversikt over hvilke områder som er vernet etter følgende lover:\\\\n- naturmangfoldloven av 2009\\\\n- biotopvern etter viltloven av 1981\\\\n- naturvernloven av 1970\\\\n- lov om naturvern av 1954\\\\n- lov om Jan Mayen av 1930\\\\n- lov om naturfredning av 1910. \\\\n\\\\nI tillegg inneholder det områder vernet etter følgende lovverk på Svalbard: \\\\n- Svalbardloven av 1925\\\\n- Svalbardmiljøloven av 2002.\\\\n\\\\nFor vernevedtak etter 1970 gir datasettet også tilgang til verneforskriften som gjelder for hvert enkelt verneområde.",
    "abstractEn": "Datasettet inneholder verneområder og vernede enkeltobjekt i Norge, herunder Svalbard og Jan Mayen. Verneområder opprettes først og fremst for å bevare naturverdier av nasjonal betydning. Dette er verdier vi skal ta vare på for all overskuelig framtid, også med tanke på naturopplevelse og kunnskap om naturen. Verneområdene forvaltes av fylkesmannen, kommunen, et nasjonalparkstyre eller et interkommunalt verneområdestyre.\\\\n\\\\nDatasettet gir en oversikt over hvilke områder som er vernet etter følgende lover:\\\\n- naturmangfoldloven av 2009\\\\n- biotopvern etter viltloven av 1981\\\\n- naturvernloven av 1970\\\\n- lov om naturvern av 1954\\\\n- lov om Jan Mayen av 1930\\\\n- lov om naturfredning av 1910. \\\\n\\\\nI tillegg inneholder det områder vernet etter følgende lovverk på Svalbard: \\\\n- Svalbardloven av 1925\\\\n- Svalbardmiljøloven av 2002.\\\\n\\\\nFor vernevedtak etter 1970 gir datasettet også tilgang til verneforskriften som gjelder for hvert enkelt verneområde."
  },
  {
    "no": "Navigasjonsinstallasjon",
    "en": "Navigation installations",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/94b8c392-e2c8-426a-8dbe-ae828049a1df",
    "access": "open",
    "proto": "OFFLINE/WMS",
    "wmsUrl": "https://nfs.kystverket.no/arcgis/services/nfs/NFSSistOperativ/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "Kystverket administrerer et system av innretninger for navigasjonsveiledning i Norge. Dette systemet består av innretninger drevet av Kystverket, innretninger drevet av kommunale havner og private innretninger drevet av andre. Innretninger for navigasjonsveiledning gir visuelle og elektroniske signaler som er lagt til rette for å være til hjelp i navigasjonsprosessen for aktsomme sjøfarende. Det er imidlertid ikke hensikten å gjøre det mulig for sjøfarende å identifisere enhver båe eller grunne eller hindring for sjøtrafikken som finnes i norske farvann som ellers er farbare for skip. Derimot skal Kystverket sørge for en fornuftig merking av farvannet i den utstrekning som ressursene tillater.",
    "abstractEn": "The Norwegian Coastal Administration administers a system of facilities for navigation guidance in Norway. This system consists of facilities operated by the Norwegian Coastal Administration, facilities operated by municipal ports and private facilities operated by others. Navigation guidance devices provide visual and electronic signals that are designed to assist in the navigation process for careful seafarers. However, it is not the intention to make it possible for seafarers to identify any boat or shallow or obstacle to sea traffic that exists in Norwegian waters that are otherwise navigable by ships. On the other hand, the Norwegian Coastal Administration shall ensure reasonable marking of the waters to the extent that the resources allow."
  },
  {
    "no": "Nedbørfelt til hav",
    "en": "Catchment areas - sea  drainage  systemes",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/f637a925-28b5-457b-846c-f5000b3c2b00",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nve.geodataonline.no/arcgis/services/Nedborfelt1/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk",
      "environment"
    ],
    "abstractNo": "Datasett over hovednedbørfelt slik det er definert i REGINE. Et nedbørfelt er summen av vassdraget (selve vannstrengen) og avrenningsfeltet. Egenskapsdata er vassdragnr., nedbørfeltets navn, areal og middel årstilsig",
    "abstractEn": "Dataset of main catchment areas as defined in REGINE. A catchment area is the watercourse itself and the run-off area. Attribute data is made up of watercourse no., catchment area name, area and mean annual inflow"
  },
  {
    "no": "Nettanlegg utbygd",
    "en": "Hydroelectric power system - facilities and network",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/9f71a24b-9997-409f-8e42-ce6f0c62e073",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart.nve.no/enterprise/services/Nettanlegg4/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "Includes masts and poles, subsea cables, distribution networks, regional overhead lines, etc. Updated only when needed – may be incomplete",
    "tags": [
      "infrastructure"
    ],
    "abstractNo": "Viser beliggenhet av luftlinjer, sjøkabler, transformatorstasjoner og master i transmisjons-, regional- og høyspent distribusjonsnett. Lavspent distribusjonsnett er ikke en del av datasettet. Jordkabler er heller ikke inkludert. \n\nDatasettet oppdateres ikke fortløpende, kun ved behov. Det kan derfor være feil og mangler i datasettet som skyldes manglende oppdatering.",
    "abstractEn": "Shows the location of transformer stations, pylons in central and regional networks, central and regional networks with voltage levels and owners, subsea cables with voltage levels and owners.  At present, distribution network is not part of the dataset. Underground cables are not included."
  },
  {
    "no": "Nettkonsesjonsområder",
    "en": "Electricity network licencing areas",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/890fe9ea-5111-459b-aebd-450480c7713a",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nve.geodataonline.no/arcgis/services/Nettanlegg4/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "Supply areas for the country’s power utilities/grid companies",
    "tags": [
      "infrastructure"
    ],
    "abstractNo": "Nettkonsesjonsområder viser forsyningsområdene til landets everk/nettselskap. Everket har konsesjon til å bygge og drive distribusjonsnett i sitt everksområde, og har tilknytningsplikt i dette området.",
    "abstractEn": "Network licensing areas show the supply areas to the country's power stations/power utilities. The power station has a licence to build and operate a distribution network within its power station area, and it has an obligation to connect in this area."
  },
  {
    "no": "Norkyst - Gjennomsnittlig strømstyrke og retning",
    "en": "Norkyst - Average current speed and direction",
    "ownerNo": "Havforskningsinstituttet",
    "ownerEn": "Institute of Marine Research",
    "url": "https://kartkatalog.geonorge.no/metadata/bc3c3c2f-4de8-4d2d-9bed-a2052d998400",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart.hi.no/data/oseanografi/wms",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "Datasettet stammer fra 10 års midlede verdier (2013-2022) av  strømstyrke og retning i hhv overflaten, i vannmassene (intervaller for 5m, 15m, 30m, 50m, 100m, 150m, 200m og 250m), samt ved havbunnen. Avstanden fra havbunn går med gjeldende modelloppsett fra noen cm på grunt vann og opp til 1,5m når totaldybden er 100m eller mer.\n\nDatasettet er et punktdatasett tilgjengelig som WMS- og WFS-tjeneste, samt for nedlasting via Havforskningsinstituttet sin Geoserver https://kart.hi.no/data - velg Layer preview og søk etter datasettet for flere nedlastingsvalg, f.eks. csv eller shapefil. Datasettet er relativt stort (ca. 2,7 millioner punkt per havdyp). \n\nKystmodellen Norkyst (versjon 3) er en beregningsmodell som simulerer bl.a. strøm, saltholdighet og temperatur med 800 meters romlig oppløsning, i flere vertikale nivåer og med høy oppløsning i tid for hele norskekysten, basert på modellsystemet ROMS (Regional Ocean Modeling System, http://myroms.org). NorKyst-800 er utviklet av Havforskningsinstituttet i samarbeid med Meteorologisk institutt. https://imr.brage.unit.no/imr-xmlui/handle/11250/116053",
    "abstractEn": "The data set originates from 10 years' average values (2013-2022) of current direction and speed at the surface, respectively, in the water masses (intervals for 5m, 15m, 30m, 50m, 100m, 150m, 200m and 250m), as well as at the seabed. The distance from the seabed with the current model setup ranges from a few cm in shallow water and up to 1.5m when the total depth is 100m or more.\n\nThe dataset is available as WMS and WCS services, as well as for download via the Institute of Marine Research's Geoserver https://kart.hi.no/data - select Layer preview and search for the dataset for more download options.\n\nThe coastal model Norkyst (version 3) is a calculation model that simulates, among other things, current, salinity and temperature with 800 meter spatial resolution, in several vertical levels and with high resolution in time for the entire Norwegian coast, based on the model system ROMS (Regional Ocean Modeling System, http://myroms.org). NorKyst-800 has been developed by the Norwegian Institute of Marine Research in collaboration with the Meteorological Institute. https://brage.bibsys.no/xmlui/handle/11250/116053."
  },
  {
    "no": "Norske IBAer",
    "en": "Norwegian IBAs",
    "ownerNo": "Birdlife Norge",
    "ownerEn": "Birdlife Norge",
    "url": "https://kartkatalog.geonorge.no/metadata/2e21d615-4f33-4dc6-a8d6-7e724f2cf82f",
    "access": "open",
    "proto": "WWW:LINK-1.0-http--link",
    "wmsUrl": "",
    "notes": "Important bird areas",
    "tags": [
      "environment"
    ],
    "abstractNo": "På nåværende tidspunkt finnes 97 IBAer i Norge, hvorav 17 befinner seg på Svalbard og Jan Mayen. På BirdLifes sider kan du også klikke deg inn på hvert av områdene ved hjelp av kartet, og lese mer utfyllende informasjon om hvilke fugler som møter IBA-kriteriene i hvert enkelt IBA, om hvilke kriterier som er oppfylt og om aktuelle trusler. Kartet under viser den geografiske plasseringen for alle IBAer i Norge.",
    "abstractEn": "På nåværende tidspunkt finnes 97 IBAer i Norge, hvorav 17 befinner seg på Svalbard og Jan Mayen. På BirdLifes sider kan du også klikke deg inn på hvert av områdene ved hjelp av kartet, og lese mer utfyllende informasjon om hvilke fugler som møter IBA-kriteriene i hvert enkelt IBA, om hvilke kriterier som er oppfylt og om aktuelle trusler. Kartet under viser den geografiske plasseringen for alle IBAer i Norge."
  },
  {
    "no": "NVDB - Ledningsregister",
    "en": "NVDB Utility Register",
    "ownerNo": "Statens vegvesen",
    "ownerEn": "Norwegian Public Roads Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/42f91a2f-3484-4236-8a71-50f3018b768d",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "infrastructure"
    ],
    "abstractNo": "Ledningsdata fra Nasjonal vegdatabank (NVDB) eksporteres til GML-fil i henhold til standarden «Stedfesting av ledninger og andre anlegg i grunnen, sjø og vassdrag» utgitt av Statens kartverk 2019. Lednigsregistreringsforskriften stiller krav til ledningseiere om å kunne dokumentere sine ledningsanlegg i henhold til denne standarden. Eiere av riks- og fylkesveg, samt noen eiere av kommunale veger forvalter ledningsdata knyttet til egne veger i NVDB. Det kan lastes ned data innenfor et polygon på inntil 0,2 kvadratkilometer. Det hentes data fra følgende NVDB-vegobjekttyper: Kum, Rørledning, Trekkerør, Trekkekum, Kabel, Kabelgrøft. Fil distribueres via e-post.\n\nDenne eksportmuligheten ble lansert mars 2024. Det kan bli gjort tilpasninger både på datamodell i NVDB og konverteringsbeskrivelser i en første fase. Kvaliteten på grunnlagsdata i NVDB kan variere. Det anbefales å kontakte de aktuelle vegeiere om det ønskes mer informasjon om dataene. Data i NVDB er fritt tilgjengelig etter Norsk lisens for offentlige data.",
    "abstractEn": "Ledningsdata fra Nasjonal vegdatabank (NVDB) eksporteres til GML-fil i henhold til standarden «Stedfesting av ledninger og andre anlegg i grunnen, sjø og vassdrag» utgitt av Statens kartverk 2019. Lednigsregistreringsforskriften stiller krav til ledningseiere om å kunne dokumentere sine ledningsanlegg i henhold til denne standarden. Eiere av riks- og fylkesveg, samt noen eiere av kommunale veger forvalter ledningsdata knyttet til egne veger i NVDB. Det kan lastes ned data innenfor et polygon på inntil 0,2 kvadratkilometer. Det hentes data fra følgende NVDB-vegobjekttyper: Kum, Rørledning, Trekkerør, Trekkekum, Kabel, Kabelgrøft. Fil distribueres via e-post.\n\nDenne eksportmuligheten ble lansert mars 2024. Det kan bli gjort tilpasninger både på datamodell i NVDB og konverteringsbeskrivelser i en første fase. Kvaliteten på grunnlagsdata i NVDB kan variere. Det anbefales å kontakte de aktuelle vegeiere om det ønskes mer informasjon om dataene. Data i NVDB er fritt tilgjengelig etter Norsk lisens for offentlige data."
  },
  {
    "no": "Nødhavner",
    "en": "Emergency ports",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/7d76ca2a-31c7-482c-8557-e477c9ac12a2",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://services.kystverket.no/wms.ashx?service=WMS&request=GetCapabilities",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "Datasettet inneholder beskrivelse av Kystverkets forhåndsevaluerte nødhavnlokaliteter som inngår i Kystverkets beredskapsplanverk. Disse lokalitetene vurderes som de mest aktuelle stedene å anbringe fartøy i nød for å unngå eller begrense akutt forurensning. Dataene utgjør en del av Kystverkets beslutningsstøtteverktøy til bruk i situasjoner med fare for, eller inntrådt, akutt forurensning. I den enkelte situasjon er likevel ethvert sted en mulig nødhavn. \n\nNødhavnkategorier: Nødhavnlokalitetene er inndelt i tre kategorier.\n\nKategori 1: Nødhavner særlig egnet for de største fartøyene (tankfartøy og store bulkskip). Nødhavner i kategori 1 vil det i første rekke være behov for i tilknytning til ytre farled der tankskipene seiler, samt farleder inn til oljeterminaler og andre havner hvor det går tankskip og produkttankere. Kan også brukes av annen trafikk i området.\n\nDimensjonerende størrelser (meter); Lengde: 330, Bredde:60, Dypgående:18\n\nKategori 2: Nødhavner for den forventede trafikken i området. I første rekke fartøy over 5.000 BT.\n\nDimensjonerende størrelser (meter); Lengde: 200, Bredde:25, Dypgående:10,5\n\nKategori 3: I enkelte av Kystverkets regioner er det innført en tredje kategori med maks skipslengde på 120 m og maks bredde på 15 m. Maks seilingsdybde vurderes da i hvert enkelt tilfelle, avhengig av lokale forhold, for å kunne gjøre en sikker innseiling. \n\nDimensjonerende størrelser (meter); Lengde: 120, Bredde:15",
    "abstractEn": "The dataset includes a description of the Norwegian Coastal Administration's pre-evaluated emergency port locations included in the Norwegian Coastal Administration's emergency response plans. These locations are deemed to be the most relevant locations in which to place ships in distress in order to avoid or limit acute pollution. The data constitutes part of the Norwegian Coastal Administration's decision support tool for use in situations where there is a risk of acute pollution or such pollution has already occurred. In individual situations, any location is a possible emergency port. \n\nEmergency port categories: The emergency port locations are divided into three categories.\n\nCategory 1: Emergency ports that are particularly well-suited for the biggest ships (tankers and large bulk carriers). Category 1 emergency ports will primarily be needed in connection with outer fairways used by tankers, as well as fairways into oil terminals and other ports used by tankers and product tankers. Can also be used by other traffic in the area.\n\nDesign sizes (metres); Length: 330, Width: 60, Draught: 18\n\nCategory 2: Emergency ports for the anticipated traffic in the area. Primarily ships over 5000 BT.\n\nDesign sizes (metres); Length: 200, Width: 25, Draught: 10.5\n\nCategory 3: A third category has been introduced in some Norwegian Coastal Administration regions, with a maximum ship length of 120 metres and a maximum width of 15 metres. The maximum depth is then assessed in each individual case, depending on local conditions, to see whether the ship can approach safely. \n\nDesign sizes (metres); Length: 120, Width: 15"
  },
  {
    "no": "Nødnett-dekning for håndholdt radioterminal",
    "en": "Emergency Network Coverage for Handheld Terminals",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/f6ff0f09-b353-492d-a98f-1dfcc7902324",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "infrastructure",
      "risk"
    ],
    "abstractNo": "Karttjenesten viser teoretisk beregnet dekningsområde for nødnett ved bruk av håndholdt radioterminal",
    "abstractEn": "Karttjenesten viser teoretisk beregnet dekningsområde for nødnett ved bruk av håndholdt radioterminal"
  },
  {
    "no": "Nødnett-dekning for kjøretøymontert radioterminal",
    "en": "Emergency Network Coverage for Vehicle-Mounted Terminals",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/2721172e-2531-4b52-b6d9-64706121fbf6",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "Karttjenesten viser teoretisk beregnet dekningsområde for nødnett ved bruk av håndholdt radioterminal",
    "abstractEn": "Karttjenesten viser teoretisk beregnet dekningsområde for nødnett ved bruk av håndholdt radioterminal"
  },
  {
    "no": "Opplagsområder",
    "en": "Maritime transport - lay-up areas",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/14771301-a73b-4c95-8270-5822f9b1510c",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://services.kystverket.no/wms.ashx?service=WMS&request=GetCapabilities",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "Opplagsområder er representert som flater og angir områder egnet til lengre ankring/opplag av skip.",
    "abstractEn": "Lay-up areas are represented as flats and indicate areas appropriate for longer periods of anchoring/storage for offshore installations."
  },
  {
    "no": "Prioriteringskart - akutt forurensning",
    "en": "Priority Map for Acute Pollution",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/6aa73fa2-2752-4dfd-b3f0-19fe15928288",
    "access": "open",
    "proto": "OFFLINE/WFS/WMS",
    "wmsUrl": "https://kart.miljodirektoratet.no/geoserver/prioriteringskart_sjo/wms?service=wms&version=1.1.1&request=getcapabilities",
    "notes": "",
    "tags": [
      "environment"
    ],
    "abstractNo": "Prioriteringskart ved innsats mot akutt forurensning er et verktøy for å prioritere innsats ved tilfelle av akutt forurensning langs kysten. Kartlagene viser prioriterte miljøressurser, og dette gjør at innsatsen kan styres mot de høyest prioriterte arealene. \n\nBrukere er alle som leder eller styrer en innsats mot akutt forurensning – Kystverket for den nasjonale beredskapen, private virksomheter og interkommunale utvalg mot akutt forurensning (IUA) for mindre tilfelle av akutt forurensning.\n\nPrioriteringskartet følger i store trekk metodikken for MOB-Sjø. Data vises med månedlig oppløsning, og visningen er basert på rutenett. Fargen i den enkelte rute viser hvor høyt prioritert ruta er i tilfelle akutt forurensning.\n\nI modellen benyttes fire kriterier for å rangere miljøressurser; verneverdi, sårbarhet, naturlighet og erstattelighet (økonomisk). For hvert grunnlagsdatasett er det satt verdier for hvert kriterium, med månedlig oppløsning. Månedlig oppløsning er sentralt fordi mange biologiske ressurser har varierende sårbarhet gjennom året. Tjenesten oppdateres månedlig, med unntak av juli.",
    "abstractEn": "Prioriteringskart ved innsats mot akutt forurensning er et verktøy for å prioritere innsats ved tilfelle av akutt forurensning langs kysten. Kartlagene viser prioriterte miljøressurser, og dette gjør at innsatsen kan styres mot de høyest prioriterte arealene. \n\nBrukere er alle som leder eller styrer en innsats mot akutt forurensning – Kystverket for den nasjonale beredskapen, private virksomheter og interkommunale utvalg mot akutt forurensning (IUA) for mindre tilfelle av akutt forurensning.\n\nPrioriteringskartet følger i store trekk metodikken for MOB-Sjø. Data vises med månedlig oppløsning, og visningen er basert på rutenett. Fargen i den enkelte rute viser hvor høyt prioritert ruta er i tilfelle akutt forurensning.\n\nI modellen benyttes fire kriterier for å rangere miljøressurser; verneverdi, sårbarhet, naturlighet og erstattelighet (økonomisk). For hvert grunnlagsdatasett er det satt verdier for hvert kriterium, med månedlig oppløsning. Månedlig oppløsning er sentralt fordi mange biologiske ressurser har varierende sårbarhet gjennom året. Tjenesten oppdateres månedlig, med unntak av juli."
  },
  {
    "no": "Radioaktivitet i marint miljø",
    "en": "Radioactivity in the Marine Environment",
    "ownerNo": "Direktoratet for strålevern og atomsikkerhet",
    "ownerEn": "Norwegian Radiation and Nuclear Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/7704fe93-c609-4b3a-9d10-e5a7d08979a2",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.radioaktivitetmarintmiljo?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "environment"
    ],
    "abstractNo": "Datasettet inneholder resultater fra overvåkningen av radioaktivitet i sjøvann, sedimenter og biota i norske havområder og langs norskekysten.",
    "abstractEn": "The data set shows results from the monitoring of radioactivity in seawater, sediment and biota in Norwegian marine areas and along the Norwegian coast."
  },
  {
    "no": "Radnett - doseratemålestasjoner",
    "en": "RADNETT",
    "ownerNo": "Direktoratet for strålevern og atomsikkerhet",
    "ownerEn": "Norwegian Radiation and Nuclear Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/e379ef5e-8851-4305-b900-44a4587cf14c",
    "access": "open",
    "proto": "WWW:LINK-1.0-http--link",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "environment"
    ],
    "abstractNo": "Datasettet inneholder strålevernets radnettstasjoner - faste overvåkingsstasjoner for radioaktiv doserate i omgivelsene",
    "abstractEn": "Eng"
  },
  {
    "no": "Radon aktsomhet",
    "en": "Radon susceptibility",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/dc0605f3-2301-4abe-a91f-6da42464c281",
    "access": "open",
    "proto": "API-Features/WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://geo.ngu.no/mapserver/RadonWMS2?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Datasettet viser hvilke områder i Norge som trolig er mer radonutsatt enn andre. Datasettet er basert på geologi og inneluftsmålinger av radon. Inneluftsmålinger er fra NRPA sin nasjonale database, og geologi er fra NGU sine berggrunns- og løsmassedatabaser. Berggrunnsdata er av målestokk 1:250.000 og løsmassedata er av varierende målestokk, fra 1:50.000 til 1:1000.000. Inneluftsmålinger er brukt til å identifisere områder med forhøyd aktsomhet for radon, totalt 34563 geo-refererte målepunkt. De er også brukt til å kjennetegne geologi i forhold til aktsomhet for radon, og denne kunnskapen er overført til områder hvor det finnes ingen eller få inneluftsmålinger. Der hvor et område er klassifisert som «høy aktsomhet» er det beregnet at minst 20% av boligene har radonkonsentrasjoner over 200 Bq/m3, med 70% statistisk sikkerhet. Der hvor et område er klassifisert som «middels til lav aktsomhet» er det beregnet at opp til 20% av boligene har radonkonsentrasjoner over 200 Bq/m3, med 70% statistisk sikkerhet. Der hvor det ikke er nok data, eller hvor det ikke er nok statistisk sikkerhet for å beregne aktsomhet for radon, er områder klassifisert som «usikker aktsomhet». Alunskifer er tilknyttet forhøyde radonkonsentrasjoner. Områder hvor det finnes alunskifer er klassifisert som «særlig høy aktsomhet». Med å overføre kunnskap fra områder med inneluftsmålinger til områder uten inneluftsmålinger, er det antatt at radonegenskaper av en geologitype er det samme i hele landet. I praksis kan det forventes noe variasjon i radonegenskaper i polygoner av den samme geologitypen. I tillegg kan det forventes variasjon i radonegenskaper innenfor et polygon.",
    "abstractEn": "The national radon susceptibility data set shows areas in Norway that might be more prone to radon (or: have greater radon risk) than others. In areas marked with high susceptibility, it is estimated that at least 20 % of the homes (houses/residences) have radon concentrations above the upper recommended limit of 200 Bq/m3 at ground floor level. The data set is based on indoor measurements of radon (from NRPA database) and knowledge of geological conditions (databases of bedrock and superficial deposits at NGU). In some areas in Norway radon has been measured in many houses, whereas in other areas there are few available measurements. The data set was developed by statistically considering how the proportion of houses that exhibit high radon concentrations may relate to the local geology, and transferring this knowledge to other areas with similar geological conditions."
  },
  {
    "no": "Referanseruter for navigasjon",
    "en": "Reference routes for navigation",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/25b83fc1-f2bd-4052-bd2d-bd949ac0f402",
    "access": "open",
    "proto": "API-Features/WFS/WMS",
    "wmsUrl": "https://kystverket.avadaptive.no/api/mapserver/v1/wms/routeinfo-wms?service=WMS&version=1.3.0&request=GetCapabilities",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "Referanserutene for navigasjon er anbefalinger fra Kystverket for å støtte ruteplanlegging basert på vår beste praksis. Rutene er ikke bindende, og de skal ikke erstatte nødvendige navigasjonshjelpemidler eller navigasjonsoppgaver, inkludert sjøveisreglene (COLREG) og standarder for ruteplanlegging og vakthold. Rutene skal ikke medføre noen endring i ansvaret til kaptein eller ansvarlig offiser for sikker navigering og manøvrering av fartøyet. Hovedkategorien av referanseruter er utviklet for en maksimal skipsdimensjon på 150 m LOA og 9 m dypgang eller mindre. Noen ruter som er inkludert, er for skip med enda mindre maksimale dimensjoner på grunn av lokale begrensninger. Andre rutekategorier kan inkluderes. Når du bruker referanseruter for ruteplanlegging, vennligst se relevante forskrifter og navigasjonskart for faktiske maksimale fartøysdimensjoner for den spesifikke ruten. Kystverket vil holde rutene oppdatert regelmessig. Se mer om bruk av referanserutene for navigasjon i Kystverkets tjeneste «www.Routeinfo.no».",
    "abstractEn": "The reference routes for Navigation are recommendations from the Norwegian Coastal Administration (NCA) to support voyage planning based on our best practice. The routes are not binding and they shall not replace any required navigational aids or navigation duties, including the rules at sea (COLREG) and standards regarding voyage planning and watchkeeping. The routes shall not cause any change in responsibilities for the captain or officer in charge for safe navigation and maneuvrering of his vessel. The main category of reference routes are developed for a maximum ship dimension of 150m LOA and 9m draught or less. Some routes included are for ships of even smaller maximum dimensions due to local limitations. Other cateogries of routes can be included. When using reference routes for route planning please confer relevant regulations and navigational charts for actual maximum vessel dimensions of the specific route. The NCA will keep routes updated regularly. See more about use of the reference routes for navigation in NCA’s service ‘www.Routeinfo.no’."
  },
  {
    "no": "REGINE enhet",
    "en": "Catchment areas Regine Units",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/8721cdac-f959-4adc-9d54-d3b770e5fa1e",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nve.geodataonline.no/arcgis/services/Nedborfelt1/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk",
      "environment"
    ],
    "abstractNo": "Nedbørfeltdatabasen REGINE (REGIster over NEdbørfelt i Norge) definerer den hydrografiske inndelingen av Norge og dekker landsarealet og kystarealet så langt ut det finnes øyer. Egenskapsdata i REGINE er bl.a. vassdragsnr., navn, hierarki, årsavrenning, areal og årstilsig.",
    "abstractEn": "The catchment database REGINE (REGIster over NEdbørsfelt i Norge [Register of catchment areas in Norway]) defines the hydrographic division of Norway and covers the land area and the coastal area, including islands are . Attribute data in REGINE includes watercourse no., name, hierarchy and annual runoff, area and annual inflow."
  },
  {
    "no": "Riggområder",
    "en": "Maritime transport - rig anchoring areas",
    "ownerNo": "Kystverket",
    "ownerEn": "The Norwegian Coastal Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/91a9a937-3c03-44e2-9dd8-c347031e52a9",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://services.kystverket.no/wms.ashx?service=WMS&request=GetCapabilities",
    "notes": "",
    "tags": [
      "transport"
    ],
    "abstractNo": "Riggområder er representert som flater og angir områder egnet til lengre ankring/opplag av offshoreinstallasjoner.\n\nOmrådene er grunnlag for Kystverkets ivaretakelse av viktige riggområder, og vil blant annet knyttes opp til Kystverkets plan og forvaltningsarbeid etter plan- og bygningsloven.",
    "abstractEn": "Rig areas indicate areas appropriate for longer periods of anchoring for offshore installations.\n\nThese areas form a basis for the Norwegian Coastal Administration's safeguarding of important rig areas and will be linked to the Norwegian Coastal Administration's planning and administration work, among other things, pursuant to the Planning and Building Act."
  },
  {
    "no": "Rørledninger",
    "en": "Pipelines",
    "ownerNo": "Sokkeldirektoratet",
    "ownerEn": "Norwegian Offshore Directorate",
    "url": "https://kartkatalog.geonorge.no/metadata/3a31a1f1-f836-4565-937f-731286fb8baa",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://factmaps.sodir.no/api/services/Factmaps/FactMapsED50UTM32/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "Pipelines from Norway",
    "tags": [
      "infrastructure"
    ],
    "abstractNo": "Rørledningssystem med tilhørende installasjoner, utgjør transportsystemene for petroleum fra Norsk kontinentalsokkel",
    "abstractEn": "Pipelines which belong to Transportation systems for petroleum on the Norwegian sector."
  },
  {
    "no": "Sensitive artsdata WMS",
    "en": "Sensitive Species Data (WMS)",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/f871159f-a2b3-4dca-a5f6-e89770dd70c5",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "environment"
    ],
    "abstractNo": "Sensitive artsdata er samlebegrep for en database med utvalgte arter av fugler, pattedyr og lav hvor stedfestet informasjon om artenes hekkeområde, yngleområde eller voksested er skjermet for allment innsyn. Begrunnelsen for at stedfestet informasjon om disse artene bør skjermes, er at åpen tilgang kan føre til at arten eller stedet der den forekommer utsettes for uheldige negative påvirkninger. Det kan være eksempelvis forstyrrelse, etterstrebelse, eller ødeleggelse.\n\nInformasjon uten eksakt stedfesting er tilgjengelig for alle ved en innsynsløsning, der data er maskert. WMS-tjenesten som benyttes i denne løsningen er offentlig tilgjengelig. Maskestørrelsen varierer mellom ulike arter. Noen arter har såpass omfattende maskering at relativt store områder blir markert i kartet. Kunnskap om artens biologi vil forenkle vurderingen av behov for å se eksakt lokalisering i et konkret tilfelle.",
    "abstractEn": "Sensitive artsdata er samlebegrep for en database med utvalgte arter av fugler, pattedyr og lav hvor stedfestet informasjon om artenes hekkeområde, yngleområde eller voksested er skjermet for allment innsyn. Begrunnelsen for at stedfestet informasjon om disse artene bør skjermes, er at åpen tilgang kan føre til at arten eller stedet der den forekommer utsettes for uheldige negative påvirkninger. Det kan være eksempelvis forstyrrelse, etterstrebelse, eller ødeleggelse.\n\nInformasjon uten eksakt stedfesting er tilgjengelig for alle ved en innsynsløsning, der data er maskert. WMS-tjenesten som benyttes i denne løsningen er offentlig tilgjengelig. Maskestørrelsen varierer mellom ulike arter. Noen arter har såpass omfattende maskering at relativt store områder blir markert i kartet. Kunnskap om artens biologi vil forenkle vurderingen av behov for å se eksakt lokalisering i et konkret tilfelle."
  },
  {
    "no": "Servitutt",
    "en": "Property Easement",
    "ownerNo": "Kartverket",
    "ownerEn": "Geovekst",
    "url": "https://kartkatalog.geonorge.no/metadata/7e39afd2-5af6-435f-a859-5a86d136945b",
    "access": "restricted",
    "proto": "",
    "wmsUrl": "",
    "notes": "Property rights not registered in the cadastre",
    "tags": [
      "infrastructure"
    ],
    "abstractNo": "Servitutt inneholder rettigheter til eiendom som ikke skal registeres i Matrikkelen.  Servitutter er andre typer rettigheter til eiendom enn eiendomsrett og feste. Dette kan for eksempel være bruksrett til skog, veg eller beite. Representasjonspunktet blir kodet med gårds-/bruks-/festenummer til bruksretten hvis den har dette. I tillegg blir det kodet hva slags bruksrettighet eller råderettsinnskrenking som ligger til teigen.\n\nFor å få en komplett oversikt over servitutter for en eiendom må man gjøre oppslag i Grunnboka. Servitutt er ikke komplett og inneholder bare noen typer servitutter.\n\nDatasettet ble fram til FKB 5.0 regnet som en del av FKB. Datasettet forvaltes fremdeles som en del av NGIS/SFKB med mulighet for oppdatering fra de kommunene/etatene som ønsker dette.",
    "abstractEn": "Servitutt inneholder rettigheter til eiendom som ikke skal registeres i Matrikkelen.  Servitutter er andre typer rettigheter til eiendom enn eiendomsrett og feste. Dette kan for eksempel være bruksrett til skog, veg eller beite. Representasjonspunktet blir kodet med gårds-/bruks-/festenummer til bruksretten hvis den har dette. I tillegg blir det kodet hva slags bruksrettighet eller råderettsinnskrenking som ligger til teigen.\n\nFor å få en komplett oversikt over servitutter for en eiendom må man gjøre oppslag i Grunnboka. Servitutt er ikke komplett og inneholder bare noen typer servitutter.\n\nDatasettet ble fram til FKB 5.0 regnet som en del av FKB. Datasettet forvaltes fremdeles som en del av NGIS/SFKB med mulighet for oppdatering fra de kommunene/etatene som ønsker dette."
  },
  {
    "no": "Sidenedbørfelt",
    "en": "Subcatchment areas  - secondary catchment division",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/8a0545fe-025c-4afb-a3ab-5b8cb922ef03",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nve.geodataonline.no/arcgis/services/Nedborfelt1/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk",
      "environment"
    ],
    "abstractNo": "Datasett over sidenedbørfelt slik det er definert i REGINE. Sidenedbørfelt er nedbørfeltet til utløpspunktet av en sideelv i et vassdrag. Egenskapsdata er vassdragnr., nedbørfeltets navn, areal og middel årstilsig",
    "abstractEn": "Dataset of secondary catchment areas as defined in REGINE. A secondary catchment area is the catchment area for the confluence point of a secondary river in a main watercourse. Attribute data is  watercourse no., catchment  name, area and mean annual inflow"
  },
  {
    "no": "Sikringstiltak",
    "en": "Protective Measures",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/26e3a047-d2d3-4a6f-a24e-67c8e97e4c29",
    "access": "open",
    "proto": "WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Datasettet inneholder sikringstiltak (f.eks. flomsikring, erosjonssikring, skredsikring) utført i regi av NVE, og egenskaper knyttes til disse (f.eks. navn, nr, anleggstype, formål, status). Datasettet består av tre kartlag. Det ene kartlaget viser utstrekningen til sikringsanlegg i terrenget, det andre kartlaget viser midtpunkt til anleggene, og det tredje kartlaget viser hvor det er utført vedlikehold/gjort endringer på anleggene (f.eks. reparasjoner, forlenginger, o.l.). Begge kartlagene som viser utstrekning og midtpunkt til anleggene inneholder egenskaper tilknyttet anleggene. Kartlaget som viser vedlikehold/endring av anlegg (f.eks. reparasjoner, forlenginger) inneholder egenskaper knyttet til disse endringene. Datasettet inneholder både anlegg under bygging, og ferdigstilte anlegg.",
    "abstractEn": "Datasettet inneholder sikringstiltak (f.eks. flomsikring, erosjonssikring, skredsikring) utført i regi av NVE, og egenskaper knyttes til disse (f.eks. navn, nr, anleggstype, formål, status). Datasettet består av tre kartlag. Det ene kartlaget viser utstrekningen til sikringsanlegg i terrenget, det andre kartlaget viser midtpunkt til anleggene, og det tredje kartlaget viser hvor det er utført vedlikehold/gjort endringer på anleggene (f.eks. reparasjoner, forlenginger, o.l.). Begge kartlagene som viser utstrekning og midtpunkt til anleggene inneholder egenskaper tilknyttet anleggene. Kartlaget som viser vedlikehold/endring av anlegg (f.eks. reparasjoner, forlenginger) inneholder egenskaper knyttet til disse endringene. Datasettet inneholder både anlegg under bygging, og ferdigstilte anlegg."
  },
  {
    "no": "Sjøfugl - utbredelseskart for utvalgte arter i norske farvann",
    "en": "Sjøfugl - utbredelseskart for utvalgte arter i norske farvann",
    "ownerNo": "Norsk institutt for naturforskning",
    "ownerEn": "Norwegian Institute of Bioeconomy Research",
    "url": "https://kartkatalog.geonorge.no/metadata/7a7187fc-1253-44ef-b880-24aa7239ba45",
    "access": "open",
    "proto": "WWW:LINK-1.0-http--link",
    "wmsUrl": "",
    "notes": "Included in the dataset “Nettanlegg”",
    "tags": [
      "infrastructure"
    ],
    "abstractNo": "Dette er en gratis applikasjon som gir innsyn i SEAPOP-databasen med utbredelseskart for endel utvalgte arter sjøfugl i norske farvann fordelt på sesong og økologisk artsgruppe.",
    "abstractEn": "Dette er en gratis applikasjon som gir innsyn i SEAPOP-databasen med utbredelseskart for endel utvalgte arter sjøfugl i norske farvann fordelt på sesong og økologisk artsgruppe."
  },
  {
    "no": "Skogsmark - NiN",
    "en": "Forest Land – NiN",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/bc063468-9454-4ff6-b948-451b68eaade1",
    "access": "open",
    "proto": "REST/WMS",
    "wmsUrl": "https://kart2.miljodirektoratet.no/arcgis/services/nin_skogkartlegging/nin_skogkartlegging/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Datasettet viser naturområder i skogsmark, kartlagt etter en oppdragsspesifikk instruks fastsatt av Miljødirektoratet. Kartleggingen dekker all skogsmark innenfor en prosjektgrense, som også utgjør dekningsområdet for kartleggingen. Øvrig areal innenfor prosjektgrensen er ikke kartlagt. Type- og beskrivelsessystemet Natur i Norge (NiN) dokumenterer det faglige innholdet, sammen med oppdragsspesifikk instruks for kartleggingen. Avgrensingene er jevnt over presise, med god faglig presisjon.  \n\nHvert naturområde er avgrenset med utgangspunkt i en skogegenskap. Skogegenskapene er fastsatt med basis i NiN. Aktuelle skogegenskaper er hogstklasse 1 og 2, regnskog (tre typer), liggende død ved, store gamle trær, T38 Treplantasje, kalkrik mosaikk og kalkfattig mosaikk. \n\nFor hvert naturområde er det angitt én eller flere kartleggingsenheter i kartleggingsmålestokk 1:5000 i NiN. Andelen til hver kartleggingsenhet er oppgitt i 10-deler. \n\nEt utvalg beskrivelsesvariabler i NiN er kartlagt for hvert naturområde. Disse variablene er knyttet til død ved, store/gamle trær, trær med spesielt livsmedium (hengelavstre, hule lauvtre og trær med brannspor) og treslag (relativ del-artsgruppesammensetning). Samtlige beskrivelsesvariabler er registrert i alle naturområder, men med to unntak. I naturområder med skogegenskapen hogstklasse 1 og 2 registreres ikke død ved. I naturområder med treplantasje (T38) registreres kun kartleggingsenhet og treslag. \n\nPå bakgrunn av innsamlete data gjøres det en analyse hvor forekomst av truete og nær truete naturtyper på skogsmark kommer frem. Forekomster skal være omtalt i kommentarfelt for hvert naturområde.",
    "abstractEn": "Datasettet viser naturområder i skogsmark, kartlagt etter en oppdragsspesifikk instruks fastsatt av Miljødirektoratet. Kartleggingen dekker all skogsmark innenfor en prosjektgrense, som også utgjør dekningsområdet for kartleggingen. Øvrig areal innenfor prosjektgrensen er ikke kartlagt. Type- og beskrivelsessystemet Natur i Norge (NiN) dokumenterer det faglige innholdet, sammen med oppdragsspesifikk instruks for kartleggingen. Avgrensingene er jevnt over presise, med god faglig presisjon.  \n\nHvert naturområde er avgrenset med utgangspunkt i en skogegenskap. Skogegenskapene er fastsatt med basis i NiN. Aktuelle skogegenskaper er hogstklasse 1 og 2, regnskog (tre typer), liggende død ved, store gamle trær, T38 Treplantasje, kalkrik mosaikk og kalkfattig mosaikk. \n\nFor hvert naturområde er det angitt én eller flere kartleggingsenheter i kartleggingsmålestokk 1:5000 i NiN. Andelen til hver kartleggingsenhet er oppgitt i 10-deler. \n\nEt utvalg beskrivelsesvariabler i NiN er kartlagt for hvert naturområde. Disse variablene er knyttet til død ved, store/gamle trær, trær med spesielt livsmedium (hengelavstre, hule lauvtre og trær med brannspor) og treslag (relativ del-artsgruppesammensetning). Samtlige beskrivelsesvariabler er registrert i alle naturområder, men med to unntak. I naturområder med skogegenskapen hogstklasse 1 og 2 registreres ikke død ved. I naturområder med treplantasje (T38) registreres kun kartleggingsenhet og treslag. \n\nPå bakgrunn av innsamlete data gjøres det en analyse hvor forekomst av truete og nær truete naturtyper på skogsmark kommer frem. Forekomster skal være omtalt i kommentarfelt for hvert naturområde."
  },
  {
    "no": "Skredfaresoner",
    "en": "Land slide - susceptibility zones",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/b2d5aaf8-79ac-40f3-9cd6-fdc30bc42ea1",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://kart.nve.no/enterprise/services/Skredfaresoner1/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "Replaced by the hazard map for landslides in steep terrain",
    "tags": [
      "risk"
    ],
    "abstractNo": "NVE gjennomfører faresonekartlegging av skred i bratt terreng for utvalgte områder prioritert for kartlegging, jfr Plan for skredfarekartlegging (NVE rapport 14/2011).Kartleggingen dekker skredtypene snøskred, sørpeskred, steinsprang, jordskred og flomskred.",
    "abstractEn": "Hazard zone mapping of landslides in steep terrain is performed by the Norwegian Water Resources and Energy Directorate for selected areas prioritised for mapping; ref. Plan for skredfarekartlegging (Norwegian Water Resources and Energy Directorate report 14/2011). Mapping covers the following landslide types:  Snow avalanche, slush avalanche, rockfall, debris slide and debris flow."
  },
  {
    "no": "Skredhendelser",
    "en": "Avalanche incidents",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/de19fbbf-3734-47a0-89f5-6c5769071cdd",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://kart.nve.no/enterprise/services/Skredhendelser1/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Datasettet gir en oversikt over registrerte skredhendelser i Norge, og kalles også for den nasjonale skredhendelsesdatabasen (NSDB). NSDB driftes av NVE og inneholder over 100 000 registrerte skredhendelser. Målet for NSDB er å samle skredregistreringer fra forskjellige kilder i én nasjonal database. Statens vegvesen står for størstedelen av skredregistreringene i databasen, men det er også mange skred registrert av Bane NOR, NGI, NGU, NVE og andre personer. De siste årene har antall registreringer økt betraktelig, men databasen inneholder også mange større historiske skredhendelser, spesielt knyttet til dødsulykker. Alle skredhendelser registrert via Varsom Regobs eller Skredregistrering.no ender opp i NSDB.",
    "abstractEn": "The dataset provides an overview of recorded landslide events in Norway and is also known as the National Landslide Event Database (NSDB). The NSDB is managed by the Norwegian Water Resources and Energy Directorate (NVE) and contains over 100,000 recorded landslide events. The goal of the NSDB is to collect landslide records from various sources into a single national database. The Norwegian Public Roads Administration accounts for the majority of the landslide records in the database, but many landslides are also recorded by Bane NOR, NGI, NGU, NVE, and other individuals. In recent years, the number of records has increased significantly, but the database also includes many major historical landslide events, especially those related to fatal accidents. All landslide events registered via Varsom Regobs or Skredregistrering.no end up in the NSDB."
  },
  {
    "no": "Små vannverk",
    "en": "Small Waterworks",
    "ownerNo": "Mattilsynet",
    "ownerEn": "The Norwegian Food Safety Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/8adefb0a-d020-4adb-858f-a27d03dd4184",
    "access": "restricted",
    "proto": "",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "infrastructure"
    ],
    "abstractNo": "Private og små vannverk registrert hos Mattilsynet",
    "abstractEn": "Private og små vannverk registrert hos Mattilsynet"
  },
  {
    "no": "Snøscooterløyper",
    "en": "Snowmobile trails - regulated routes",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/07e6b8af-84a7-43cb-9d91-887885a7342f",
    "access": "open",
    "proto": "REST/WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart.miljodirektoratet.no/arcgis/services/snoscooterloyper/MapServer/WMSServer?service=wms&version=1.3.0&request=getCapabilities",
    "notes": "",
    "tags": [
      "transport",
      "risk"
    ],
    "abstractNo": "Datasettet viser snøscooterløyper som er fastsatt av kommunen etter § 4a i forskrift for bruk av motorkjøretøyer i utmark og på islagte vassdrag. Datasettet viser selve traseen og kan inneholde ytterligere  informasjon om rutenavn, hjemmel for godkjenning, rutenummer, hvordan løypen er merket, tidsperioder for lovlig kjøring, steder for lovlig rasting, fartsgrenser mv.",
    "abstractEn": "Datasettet viser snøscooterløyper som er fastsatt av kommunen etter § 4a i forskrift for bruk av motorkjøretøyer i utmark og på islagte vassdrag. Datasettet viser selve traseen og kan inneholde ytterligere  informasjon om rutenavn, hjemmel for godkjenning, rutenummer, hvordan løypen er merket, tidsperioder for lovlig kjøring, steder for lovlig rasting, fartsgrenser mv."
  },
  {
    "no": "Steinsprang - aktsomhetsområder",
    "en": "Rockfall - rough susceptibility zones",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/02c6d51c-4e8c-4948-a620-dc046c8cb747",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://kart.nve.no/enterprise/services/SkredSteinAktR/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "Automatically generated by data models – does not capture small slopes in urban areas or along roads",
    "tags": [
      "risk"
    ],
    "abstractNo": "Aktsomhetsområder for steinsprang er en nasjonal kartserie som viser potensielt steinsprangutsatte områder på oversiktsnivå. Kartene viser potensielle løsneområder og utløpsområder for steinsprang.\n\nDet gjøres oppmerksom på at arealene som dekkes av utløsningsområder  i praksis også er utløpsområder, ettersom skred som løsner helt øverst i et utløsningsområde beveger seg gjennom nedenforliggende utløsningsområder før det når utløpsområdene nedenfor. Ved bruk av datasettet til analyseformål bør derfor som en hovedregel både utløsningsområder og utløpsområder benyttes sammen.\n\nAktsomhetsområdene er identifisert ved bruk av en datamodell som gjenkjenner mulige løsneområder for steinsprang ut fra helning på terreng og geologisk informasjon. Fra hvert kildeområde er utløpsområdet for steinsprang beregnet automatisk. Det er ikke gjort feltarbeid ved identifisering eller avgrensning av områdene.",
    "abstractEn": "Susceptibility areas for rockfall is a national series of maps showing areas that are potentially vulnerable to rockfalls at a general level. The maps show potential source areas and run-out areas for rockfalls.\\\\nYour attention is drawn to the fact that the areas covered by source areas are in practice run-out areas as well, as avalanches that are triggered right at the top of the source area move through trigger areas below, before reaching the run-out areas at the bottom. Therefore, both source areas and run-out areas should generally be used together when using the dataset for analysis purposes. \\\\nThe susceptibility areas are identified by means of a data model which uses the slope of the terrain and geological information to recognise potential source areas for rockfalls.  The run-out area for rockfalls is calculated automatically from each source area. No fieldwork is done when identifying or defining the areas."
  },
  {
    "no": "Store fjellskred",
    "en": "Rock and mountain slides hazard zones",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/17149f79-1289-4e3c-b964-94113eeb14c8",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nve.geodataonline.no/arcgis/services/Fjellskred1/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Dette produktet er et resultat av at NVE overtok det statlige forvaltningsansvaret for skred i 2009.\nTjenesten er ment som et hjelpemiddel som gjør det enklere å skaffe oversikt over ustabile fjellparti og\ntilhørende konsekvenser.\nFare- og risikokartlegging gjennomføres av NGU på vegne av NVE. Hvordan oppfølgingen av de ustabile fjellpartiene og faresonene bør følges opp med overvåking og i arealplanlegging er beskrevet i NVE rapport 77/2016: Fare og risikoklassifisering av ustabile fjellparti.\n\nDet er etablert to databaser for formidling av kartleggingen og fareområdene. NVEs database formidler faresoner for utløpsområder og flodbølger, samt potensielle oppdemmingsområder og nedstrøms flom som følge av dambrudd der dette er aktuelt. NGUs database har fokus på de geologiske data, inkludert bevegelsesmålinger.\n\nNVEs kartlegging retter seg først og fremst mot eksisterende bebyggelse. Ved identifisering og prioritering av områder som har behov for kontinuerlig overvåking er det derfor lagt vekt på hvor det bor og oppholder seg mennesker innenfor potensielt skredfareutsatte områder og områder som blir berørt av flodbølger eller oppdemning/dambrudd som en direkte konsekvens av et fjellskred.\n\nDatabasen er et produkt av den kartleggingen og fare- og risikoklassifiseringen som er gjort. Sammen skal dette gi grunnlag for å vurdere tiltak i form av overvåking med sikte på å kunne varsle et kommende fjellskred og dermed unngå potensielt tap av menneskeliv. Kartleggingen gir viktig informasjon om faregraden som grunnlag for arealplanlegging.",
    "abstractEn": "This product is a result of the Norwegian Water Resources and Energy Directorate's takeover of governmental administration responsibility for landslides in 2009.\nThe service is intended as an instrument that will make it easier to gain an overview of unstable rock sections and associated consequences.\nHazard and risk mapping is carried out by the Geological Survey of Norway on behalf of the Norwegian Water Resources and Energy Directorate. How the follow-up of the unstable rock sections and hazard zones should be followed up with monitoring and in land use planning is described in Norwegian Water Resources and Energy Directorate report 77/2016: Fare og risikoklassifisering av ustabile fjellparti.\n\nTwo databases have been established for distributing the mapping and hazard areas. The Norwegian Water Resources and Energy Directorate's database\ndistributes hazard zones for run-out areas and tidal/tsunami waves, as well as potential  damming areas and downstream flooding as a result of dam break, where appropriate. The Geological Survey of Norway database focuses on the geological data, including displacement measurements.\n\nThe Norwegian Water Resources and Energy Directorate's mapping is aimed primarily at existing development. When identifying and \nprioritising areas in need of continuous monitoring, emphasis is therefore placed on \nwhere people live and spend time within areas that are potentially at risk of landslides and areas that will be affected by tidal waves/tsunamies or damming/dam break as a direct consequence of a rockslide.\n\nThe database is a product of the mapping and the hazard and risk classification that have taken place. Together, this should provide a basis for assessment of measures in the form of monitoring with the aim to provide notification of future rockslides, hence preventing the potential loss of human lives. Mapping provides important\ninformation on the degree of danger as a basis for spatial planning."
  },
  {
    "no": "Storulykkeanlegg",
    "en": "Enterprises with danger of major accidents",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/63190f80-8692-492a-8e7a-b2cb0a59d27a",
    "access": "contact",
    "proto": "OFFLINE",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Datasettet viser alle anlegg i Norge som faller inn under storulykkeforskriften (forskrift om tiltak for å forebygge og begrense skadevirkningene av storulykker i virksomheter der farlige kjemikalier forekommer).  Om lag 350 norske virksomheter er regulert av storulykkeforskriften. Dette er i stor grad prosessindustri, kjemisk industri, tankanlegg og eksplosivlagre. Storulykkeforskriften implementerer de kravene som stilles til virksomheter gjennom EU-direktivet Seveso III, og håndheves av følgende myndigheter: Miljødirektoratet, Direktoratet for Arbeidstilsynet, Direktoratet for samfunnssikkerhet og beredskap (DSB), Petroleumstilsynet og Næringslivets sikkerhetsorganisasjon. Datasettet gis bare ut til bruk i kommunal og regional beredskap, arealplanlegging og byggesaksbehandling og bare ved direkte henvendelse til DSB ved kart@dsb.no. På grunn av restriksjonene på dataene er de bare tilgjengelige for utvalgte brukere.  Dette vil være brukere innenfor arealplanlegging, byggesaksbehandling og samfunnssikkerhet/beredskap.",
    "abstractEn": "The dataset also shows all facilities in Norway that fall under Major Accidents Regulation (the Regulation on measures to prevent and limit the consequences of major accidents at enterprises using hazardous chemicals).  Around 300 Norwegian enterprises are regulated by the Major Accident Regulation. These largely involves the process industry, chemical industry, tank facilities and explosive storage facilities.  The Major Accidents Regulation implements the requirements that are defined for enterprises through the EU Directive Seveso III and enforced by the following authorities: Norwegian Climate and Pollution Agency, Labour Inspection Authority, Norwegian Directorate for Civil Protection (DSB), Petroleum Safety Authority Norway and Norwegian Industrial Safety Organisation.\nThe dataset is only issued for use for municipal and regional emergency response, spatial planning and building application processing, and only upon direct application to kart@dsb.no or karen.lie@dsb.no at the Norwegian Directorate for Civil Protection."
  },
  {
    "no": "Tilfluktsrom - Offentlige",
    "en": "Public Shelters",
    "ownerNo": "Direktoratet for samfunnssikkerhet og beredskap",
    "ownerEn": "Norwegian Directorate for Civil Protection",
    "url": "https://kartkatalog.geonorge.no/metadata/dbae9aae-10e7-4b75-8d67-7f0e8828f3d8",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://ogc.dsb.no/wms.ashx?SERVICE=WMS&REQUEST=GetCapabilities&version=1.3.0",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Offentlige tilfluktsrom i Norge. Tilfluktsrom er permanente beskyttelsesrom som skal verne befolkningen mot skader ved krigshandlinger. Offentlige tilfluktsrom er for befolkningen i et område og er bygget i byer og større tettsteder, samt i boligområder hvor dekningen av private tilfluktsrom ikke er tilfredsstillende.",
    "abstractEn": "Offentlige tilfluktsrom i Norge. Tilfluktsrom er permanente beskyttelsesrom som skal verne befolkningen mot skader ved krigshandlinger. Offentlige tilfluktsrom er for befolkningen i et område og er bygget i byer og større tettsteder, samt i boligområder hvor dekningen av private tilfluktsrom ikke er tilfredsstillende."
  },
  {
    "no": "Trafikkmengde",
    "en": "Roads - traffic volumes",
    "ownerNo": "Statens vegvesen",
    "ownerEn": "Norwegian Public Roads Administration",
    "url": "https://kartkatalog.geonorge.no/metadata/af2c4a0a-1978-4e62-b08d-ed1f36bd5023",
    "access": "open",
    "proto": "",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "risk"
    ],
    "abstractNo": "Datasettet gir informasjon om representativ trafikkmengde for en vegstrekning på europa-, riks- eller fylkesveger. Trafikkmengden er beregnet gjennom trafikkdatasystemet, men kan også unntaksvis være subjektivt anslått. Det utgis som et årsdatasett og er sentralt i forvaltning av vegene. Vegnett som har oppstått etter årets ÅDT-beregninger vil kunne mangle data frem til neste års ÅDT-beregning. Datagrunnlaget for ÅDT-beregninger er data fra individuelle målepunkt på vegnettet (trafikkregistreringsstasjoner), disse finnes på http://trafikkdata.no",
    "abstractEn": "Representative information about traffic flow on Norwegian major roads (Europa, riks- and fylkesveger). Yearly averaged data, With Annual Average Daily Traffic Count, AADT, and the ratio of large vehicles."
  },
  {
    "no": "Transformatorstasjoner",
    "en": "Tranformer stations - Hydroelectric power system",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/ae55f901-480d-4fdc-8f1e-58ef3004d169",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nve.geodataonline.no/arcgis/services/Nettanlegg4/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "Included in the dataset Nettanlegg WMS",
    "tags": [
      "infrastructure"
    ],
    "abstractNo": "Oversikt over transformatorstasjoner i Norge. Dette inkluderer større transformatorer i det høyspente kraftnettet.",
    "abstractEn": "Overview of transformer stations in Norway. This includes larger transformer stations in the high voltage power network."
  },
  {
    "no": "Turrutebasen",
    "en": "Hiking and outdoor recreation routes",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/d1422d17-6d95-4ef1-96ab-8af31744dd63",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.geonorge.no/skwms1/wms.friluftsruter2?request=GetCapabilities&service=WMS&version=1.3.0",
    "notes": "",
    "tags": [
      "society"
    ],
    "abstractNo": "Landsdekkende datasett som viser turruter. Datasettet inneholder fotruter, skiløyper, sykkelruter, andre turruter og tilretteleggingstiltak i friluftslivsområder. Dataene kan brukes i prosesser etter plan- og bygningsloven (kommuneplanlegging og saksbehandlingsom for eksempel byggesak) i kommunene, til analyser, rapportering, oppslag og visualisering av turruter til turplanlegging.",
    "abstractEn": "This dataset shows hiking and outdoor recreation routes in Norway. The dataset includes hiking routes, ski trails, bicycle routes, other hiking routes and adaptation measures in outdoor recreation areas. The data can be used in processes according to the Planning and Building Act (municipal planning and case management, e.g. building applications) in municipalities, for analyses, reporting, lookups and visualisation of hiking routes for the planning of hiking."
  },
  {
    "no": "Uran aktsomhet",
    "en": "Uranium Caution Areas",
    "ownerNo": "Norges geologiske undersøkelse",
    "ownerEn": "Geological Survey of Norway",
    "url": "https://kartkatalog.geonorge.no/metadata/66f7f33e-d5ba-4a22-83e6-cb5385ec284a",
    "access": "open",
    "proto": "WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "risk",
      "environment"
    ],
    "abstractNo": "Nasjonalt aktsomhetskart for uran viser områder i Norge som kjennetegnes av tilstedeværelsen av uranrike bergarter og/eller løsmasser. Kartet er basert på eksisterende geodatabaser, som inkluderer flybårne radiometriske målinger, geokjemi fra steinprøver og berggrunnsgeologi. Dette gir en omfattende oversikt over fordelingen av uran på nasjonal skala. \n\nKartet viser klassifisering basert på urannivå: \nMeget høyt urannivå - områder med observert meget høyt urannivå.\nMeget høyt urannivå, modellert - områder med modellert meget høyt urannivå.\nHøyt urannivå - områder med observert høyt gjennomsnittlig urannivå. \nHøyt urannivå, modellert - områder med modellert høyt gjennomsnittlig urannivå. \nMiddels urannivå - områder med observert middels gjennomsnittlig urannivå.\nMiddels urannivå, modellert - områder med modellert middels gjennomsnittlig urannivå.\nLavt urannivå - områder med observert lavt gjennomsnittlig urannivå. \nLavt urannivå, modellert - områder med modellert lavt gjennomsnittlig urannivå. \nUsikkert urannivå - områder hvor det ikke er nok data til å statistisk bestemme urannivået.\n\nKartet er hybrid og kombinerer de målte høyoppløselige (250 m) flybårne urandataene med et ekstrapolert lavoppløsningskart, som består av stykkevis homogene geologiske enheter. I områder som mangler høyoppløselige urandata estimeres gjennomsnittlig urankonsentrasjon per geologisk enhet ut fra både flybårne data og geokjemien i steinprøven.\n\nOmtrent 2,5% av landet er identifisert som områder med potensial for «høyt» og «meget høyt» uraninnhold grunnet geologiske forhold. 0,6% av landet er definert som «usikkert» når det gjelder urannivået, noe som skyldes utilstrekkelige data eller vannflater.",
    "abstractEn": "Nasjonalt aktsomhetskart for uran viser områder i Norge som kjennetegnes av tilstedeværelsen av uranrike bergarter og/eller løsmasser. Kartet er basert på eksisterende geodatabaser, som inkluderer flybårne radiometriske målinger, geokjemi fra steinprøver og berggrunnsgeologi. Dette gir en omfattende oversikt over fordelingen av uran på nasjonal skala. \n\nKartet viser klassifisering basert på urannivå: \nMeget høyt urannivå - områder med observert meget høyt urannivå.\nMeget høyt urannivå, modellert - områder med modellert meget høyt urannivå.\nHøyt urannivå - områder med observert høyt gjennomsnittlig urannivå. \nHøyt urannivå, modellert - områder med modellert høyt gjennomsnittlig urannivå. \nMiddels urannivå - områder med observert middels gjennomsnittlig urannivå.\nMiddels urannivå, modellert - områder med modellert middels gjennomsnittlig urannivå.\nLavt urannivå - områder med observert lavt gjennomsnittlig urannivå. \nLavt urannivå, modellert - områder med modellert lavt gjennomsnittlig urannivå. \nUsikkert urannivå - områder hvor det ikke er nok data til å statistisk bestemme urannivået.\n\nKartet er hybrid og kombinerer de målte høyoppløselige (250 m) flybårne urandataene med et ekstrapolert lavoppløsningskart, som består av stykkevis homogene geologiske enheter. I områder som mangler høyoppløselige urandata estimeres gjennomsnittlig urankonsentrasjon per geologisk enhet ut fra både flybårne data og geokjemien i steinprøven.\n\nOmtrent 2,5% av landet er identifisert som områder med potensial for «høyt» og «meget høyt» uraninnhold grunnet geologiske forhold. 0,6% av landet er definert som «usikkert» når det gjelder urannivået, noe som skyldes utilstrekkelige data eller vannflater."
  },
  {
    "no": "Utredninger av flomfare",
    "en": "Flood Hazard Assessments",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/3e19b6af-5079-4e05-8ccf-72f8a32bd315",
    "access": "open",
    "proto": "REST/WWW:LINK-1.0-http--link",
    "wmsUrl": "",
    "notes": "Report database only",
    "tags": [
      "risk"
    ],
    "abstractNo": "Datasettet er en rapportdatabase som viser hvor i Norge det er utført utredninger av flomfare inkl. utførte flomberegninger og vannlinjeberegninger, med litt informasjon om utredningene som er gjort. For en del av utredningene er det også mulig å få opp medfølgende PDF-rapport ved å trykke på lenke.\n\nRapportdatabasen er langt fra komplett – vi jobber kontinuerlig med å legge inn flere flomfareutredninger som vi får tilsendt fra konsulenter, kommuner og andre, slik at databasen på sikt vil bli mer dekkende. Datasettet skal inneholde alle utredninger innenfor flomfare som blir sendt til NVE i henhold til ny Forskrift om pliktig innmelding av grunnundersøkelser og naturfareutredninger.\n\nDu bruker informasjonen og rapportene på eget ansvar. NVE og bidragsytere fraskriver seg ansvar for feil og mangler i rapportene og for den enkeltes bruk av rapportene. NVE har ikke vurdert den flomfaglige kvaliteten på utredningene eller datagrunnlaget benyttet til utredningene. Det er brukeren av data som selv har ansvar for å verifisere nøyaktigheten og påliteligheten av dataene før de brukes til beslutningstaking eller andre formål.\n\nVed bruk av data fra rapportene skal det henvises til rapporten og hvem som har utarbeidet den. NVEs temadata distribueres i henhold til Norsk lisens for offentlige data (NLOD).",
    "abstractEn": "Datasettet er en rapportdatabase som viser hvor i Norge det er utført utredninger av flomfare inkl. utførte flomberegninger og vannlinjeberegninger, med litt informasjon om utredningene som er gjort. For en del av utredningene er det også mulig å få opp medfølgende PDF-rapport ved å trykke på lenke.\n\nRapportdatabasen er langt fra komplett – vi jobber kontinuerlig med å legge inn flere flomfareutredninger som vi får tilsendt fra konsulenter, kommuner og andre, slik at databasen på sikt vil bli mer dekkende. Datasettet skal inneholde alle utredninger innenfor flomfare som blir sendt til NVE i henhold til ny Forskrift om pliktig innmelding av grunnundersøkelser og naturfareutredninger.\n\nDu bruker informasjonen og rapportene på eget ansvar. NVE og bidragsytere fraskriver seg ansvar for feil og mangler i rapportene og for den enkeltes bruk av rapportene. NVE har ikke vurdert den flomfaglige kvaliteten på utredningene eller datagrunnlaget benyttet til utredningene. Det er brukeren av data som selv har ansvar for å verifisere nøyaktigheten og påliteligheten av dataene før de brukes til beslutningstaking eller andre formål.\n\nVed bruk av data fra rapportene skal det henvises til rapporten og hvem som har utarbeidet den. NVEs temadata distribueres i henhold til Norsk lisens for offentlige data (NLOD)."
  },
  {
    "no": "Utredninger av skredfare",
    "en": "Landslide Hazard Assessments",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/48d23852-bb09-4116-8e9a-e9eb35ddaeab",
    "access": "open",
    "proto": "REST/W3C:REST/WWW:LINK-1.0-http--link",
    "wmsUrl": "",
    "notes": "Report database only",
    "tags": [
      "risk"
    ],
    "abstractNo": "Datasettet er en rapportdatabase som viser hvor i Norge det er utført utredninger av skredfare, med litt informasjon om utredningene som er gjort. For en del av utredningene er det også mulig å få opp medfølgende PDF-rapport ved å trykke på lenke.\n\nRapportdatabasen er langt fra komplett – vi jobber kontinuerlig med å legge inn flere skredfareutredninger som vi får tilsendt fra konsulenter, kommuner og andre, slik at databasen på sikt vil bli mer dekkende. Datasettet skal inneholde alle utredninger innenfor skredfare som blir sendt til NVE i henhold til ny Forskrift om pliktig innmelding av grunnundersøkelser og naturfareutredninger.\n\nDu bruker informasjonen og rapportene på eget ansvar. NVE og bidragsytere fraskriver seg ansvar for feil og mangler i rapportene og for den enkeltes bruk av rapportene. NVE har ikke vurdert den skredfaglige kvaliteten på utredningene eller datagrunnlaget benyttet til utredningene. Det er brukeren av data som selv har ansvar for å verifisere nøyaktigheten og påliteligheten av dataene før de brukes til beslutningstaking eller andre formål.\n\nVed bruk av data fra rapportene skal det henvises til rapporten og hvem som har utarbeidet den. NVEs temadata distribueres i henhold til Norsk lisens for offentlige data (NLOD).",
    "abstractEn": "Datasettet er en rapportdatabase som viser hvor i Norge det er utført utredninger av skredfare, med litt informasjon om utredningene som er gjort. For en del av utredningene er det også mulig å få opp medfølgende PDF-rapport ved å trykke på lenke.\n\nRapportdatabasen er langt fra komplett – vi jobber kontinuerlig med å legge inn flere skredfareutredninger som vi får tilsendt fra konsulenter, kommuner og andre, slik at databasen på sikt vil bli mer dekkende. Datasettet skal inneholde alle utredninger innenfor skredfare som blir sendt til NVE i henhold til ny Forskrift om pliktig innmelding av grunnundersøkelser og naturfareutredninger.\n\nDu bruker informasjonen og rapportene på eget ansvar. NVE og bidragsytere fraskriver seg ansvar for feil og mangler i rapportene og for den enkeltes bruk av rapportene. NVE har ikke vurdert den skredfaglige kvaliteten på utredningene eller datagrunnlaget benyttet til utredningene. Det er brukeren av data som selv har ansvar for å verifisere nøyaktigheten og påliteligheten av dataene før de brukes til beslutningstaking eller andre formål.\n\nVed bruk av data fra rapportene skal det henvises til rapporten og hvem som har utarbeidet den. NVEs temadata distribueres i henhold til Norsk lisens for offentlige data (NLOD)."
  },
  {
    "no": "Vannforekomster",
    "en": "Water bodies - Water framework directive",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/b203e422-5270-4efc-93a5-2073725c43ef",
    "access": "open",
    "proto": "REST/WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart3.miljodirektoratet.no/arcgis/services/vannforekomster/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "environment"
    ],
    "abstractNo": "Datasettet viser vannforekomster for overflatevann og grunnvann.\n\nEn overflatevannforekomst er en betydelig mengde vann (tilsigsareal for elv og overflateareal for innsjø og kystvann). I tillegg til hydrografiske forhold defineres utstrekningen i henhold til kriterier for vanntype, påvirkninger, økologisk tilstand eller potensial (Sterkt modifiserte vannforekomster) og kjemisk tilstand. En grunnvannsforekomst defineres som en avgrenset forekomst som enten produserer 10m3 per døgn eller som kan forsyne 50 personer. Vannforekomstene utgjør forvaltningsenhetene som skal forvaltes i samsvar med bestemmelsene gitt i vannforskriften, der hovedhensikten er å sikre en helhetlig vannforvaltning fra fjell til fjord. Felles for elementene som inngår i vannforekomster, er at de er homogene med tanke på kjemiske, biologiske og fysiske egenskaper samt antropogene påvirkninger innenfor et nedbørfelt.",
    "abstractEn": "Dataset showing water quality in watercourses. The mapping is carried out on behalf of the regional water authority (the county governor). Administration in accordance with the Water Framework Directive. Information of relevance in connection with land use measures in order to improve or maintain good water quality."
  },
  {
    "no": "Vannkraft, Utbygd og ikke utbygd",
    "en": "Hydroelectric power system - utilised catchments",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/f587a15a-c72a-4b21-aae9-4132df1bdd27",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://kart.nve.no/enterprise/services/Vannkraft1/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "infrastructure"
    ],
    "abstractNo": "Dette datasettet inneholder vannkraft systemet slik det forvaltes av NVE. I NVEs forvaltningssystem behandles også dammer til andre formål enn vannkraftproduksjon. Regulerte innsjøer påvirker vassdragene uavhengig av formål, og de er derfor også med i våre forvaltningssystemer. Datasettet innbefatter alle dammer og regulerte innsjøer uavhengig av formål. Spesifikasjonen omfatter både anlegg i drift og ikke i drift. NVE behandler søknader om konsesjon etter energiloven og/eller vassdragslovgivningen til bygging av vannkraft og andre anlegg i vassdragene.  De ikke utbygde anlegg omfatter prosjekter behandlet i vassdragskonsesjonsprosessen og restpotensialet som ikke er konsesjonssøkt.",
    "abstractEn": "This dataset includes the hydroelectric power system as administered by the Norwegian Water Resources and Energy Directorate. The Norwegian Water Resources and Energy Directorate's administration system also deals with dams for purposes other than hydroelectric power production. Regulated lakes affect the watercourses irrespective of purpose, and hence they are also included in our administration systems. The dataset includes all dams and regulated lakes irrespective of purpose. The specification includes both operational and non-operational plants. The Norwegian Water Resources and Energy Directorate deals with applications for licences pursuant to the Energy Act and/or watercourses legislation for the construction of hydroelectric power stations and other plants along watercourses.  The undeveloped plants include projects dealt with in the watercourse licensing process and the residual potential where no licence has been applied for."
  },
  {
    "no": "Vannområder",
    "en": "River Basin District Sub-units",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/6705ade7-5785-4611-9110-17bcb21d2ff9",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart2.miljodirektoratet.no/arcgis/services/WMS/AdministrativeOmraaderOGC/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "Several water areas within one water region",
    "tags": [
      "environment"
    ],
    "abstractNo": "Et vannområde er administrativ inndeling for forvaltning av vann og vassdrag, inkludert grunnvannsforekomster og kystnære marine områder. Vannområde er en underinndeling under vannregion. Flere vannområder utgjør en vannregion.\n\nInndelingen bygger på inndelingskriteringer fra vannforskriften, som implementerer EUs vannrammedirektiv (Water Framework Directive). Norge er inndelt i totalt 105 vannområder. Vannområdegrensene følger ikke eksakt kommunegrenser og heller ikke de eksakte nedslagsfeltene.\n\nI de fleste vannområdene er det ansatt en vannområdekoordinator i et spleiselag mellom de involverte kommunene, fylkeskommunene og staten. Arbeidet i vannområdene skal sikre deltakelsen fra kommunene og lokal medvirkning, koordinere mellom kommunene og gjøre disse gode på vannforvaltning, og legge grunnlaget for det regionale arbeidet med vannforvaltningsplaner og tilhørende tiltaksprogrammer.\n\nMåledata om tilstand og utvikling innen vannregioner og vannområder sammenstilles for å se tilstand og utvikling over tid.",
    "abstractEn": "Et vannområde er administrativ inndeling for forvaltning av vann og vassdrag, inkludert grunnvannsforekomster og kystnære marine områder. Vannområde er en underinndeling under vannregion. Flere vannområder utgjør en vannregion.\n\nInndelingen bygger på inndelingskriteringer fra vannforskriften, som implementerer EUs vannrammedirektiv (Water Framework Directive). Norge er inndelt i totalt 105 vannområder. Vannområdegrensene følger ikke eksakt kommunegrenser og heller ikke de eksakte nedslagsfeltene.\n\nI de fleste vannområdene er det ansatt en vannområdekoordinator i et spleiselag mellom de involverte kommunene, fylkeskommunene og staten. Arbeidet i vannområdene skal sikre deltakelsen fra kommunene og lokal medvirkning, koordinere mellom kommunene og gjøre disse gode på vannforvaltning, og legge grunnlaget for det regionale arbeidet med vannforvaltningsplaner og tilhørende tiltaksprogrammer.\n\nMåledata om tilstand og utvikling innen vannregioner og vannområder sammenstilles for å se tilstand og utvikling over tid."
  },
  {
    "no": "Vannregioner",
    "en": "River Basin Districts",
    "ownerNo": "Miljødirektoratet",
    "ownerEn": "Norwegian Environment Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/6488264e-4ade-4430-bb27-96f0824e0eb8",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://kart2.miljodirektoratet.no/arcgis/services/WMS/AdministrativeOmraaderOGC/MapServer/WMSServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "environment"
    ],
    "abstractNo": "En vannregion er administrativ inndeling for forvaltning av vann og vassdrag, inkludert grunnvannsforekomster og kystnære marine områder. Inndelingen bygger på inndelingskriteringer fra vannforskriften, som implementerer EUs vanndirektiv (Water Framework Directive). Norge er delt inn i 18 vannregioner, hvorav sju er internasjonale vannregioner og deles med Sverige og Finland. Inndelingen er gitt i vannforskriftens vedlegg I. Vannregionene følger grenser for nedbørfelt, og avviker derfor fra fylkes- og landegrenser. En vannregionmyndighet (fylkeskommune) skal koordinere arbeidet med å gjennomføre oppgavene som følger av vannforskriften. Arbeidet skjer i nært samarbeid med vannregionutvalget. Måledata om tilstand og utvikling innen vannregioner og vannområder sammenstilles for å se tilstand og utvikling over tid.",
    "abstractEn": "En vannregion er administrativ inndeling for forvaltning av vann og vassdrag, inkludert grunnvannsforekomster og kystnære marine områder. Inndelingen bygger på inndelingskriteringer fra vannforskriften, som implementerer EUs vanndirektiv (Water Framework Directive). Norge er delt inn i 18 vannregioner, hvorav sju er internasjonale vannregioner og deles med Sverige og Finland. Inndelingen er gitt i vannforskriftens vedlegg I. Vannregionene følger grenser for nedbørfelt, og avviker derfor fra fylkes- og landegrenser. En vannregionmyndighet (fylkeskommune) skal koordinere arbeidet med å gjennomføre oppgavene som følger av vannforskriften. Arbeidet skjer i nært samarbeid med vannregionutvalget. Måledata om tilstand og utvikling innen vannregioner og vannområder sammenstilles for å se tilstand og utvikling over tid."
  },
  {
    "no": "Vannstandsdata og vannstandsinformasjon",
    "en": "Water level data and information",
    "ownerNo": "Kartverket",
    "ownerEn": "Norwegian Mapping Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/999386cb-926e-45b5-9a1b-f71022747486",
    "access": "open",
    "proto": "WWW:LINK-1.0-http--link",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "meteorology"
    ],
    "abstractNo": "Vannstandsdata består av måleserier og bearbeidede tidsserier, samt data og informasjon basert på analyser av disse. Datasettet inkluderer en modell som gir estimerte data tilpasset til nesten alle steder lang kysten. Modeller for landheving og fremskrivinger av havnivå inngår også i datasettet.\n\nTilgjengelige tidsserier for et sted er vannstand, vannstandsvarsel (i samarbeid med Meteorologisk institutt), tidevannsprediksjoner og -tabeller, måndlige og årlige minimum, maksimum og gjennomsnittsverdier, og ulike fremskrivinger av fremtidig havnivåendring basert på ulike utslippsscenarioer fra IPCC.\n\nDatasettet inneholder vertikale referansenivåer som middelvann, sjøkartnull og NN2000, ulike tidevannsnivåer, returnivåer for ekstrem vannstand (stormflo), og anbefalte nivåer for planlegging og bygging i kystsonen. Videre finnes også tall for landheving og harmoniske konstituenter for beregning av tidevann.\n\nVed posisjonssøk i API-et for vannstand får man modellerte data best tilpasset dette stedet, se opplag for Vannstand API for mer om dette. Bare ved søk på en stasjon (eller en posisjon med en permanent vannstandsmåler) får man data som er observert på dette stedet. API-et gir per nå bare bearbeidede tidsserier for de permanente vannstandsmålerne. Rådata og tidsserier fra de mange hundre andre målestedene kan fåes på forespørsel.",
    "abstractEn": "This data set includes measurements and derived time series, together with data and information based on analyses of these series. The data set includes a model which gives data best fitted to almost any location along the coast.\n\nTime series available for a location: Water level data, water level forecasts, predicted tidal data and high/low waters, monthly and yearly min/max and mean values. and projections of future sea level changes based on different emission scenarios from IPCC\n\nThe data set includes vertical reference levels such as mean sea level, Chart Datum and land levelling datum, tidal datums, return heights for extreme water levels (high/storm surges and low), and levels used for coastal planning, with adaptations for climate change.\nFurthermore, there are numbers for land uplift and harmonic constituents for predicting tides.\n\nRequesting data for a given location from the API for water level data, it will provide modelled data best fitted to this locations. Only requests for data from a station (or its position) will return data observed at this location. At the moment, only the derived times series for the permanent tide gauges are available from the API. Raw sensor data and time series from the many hundred other locations with measurements are available upon request."
  },
  {
    "no": "Vernskog",
    "en": "Protective forests",
    "ownerNo": "Landbruksdirektoratet",
    "ownerEn": "Norwegian Agriculture Agency",
    "url": "https://kartkatalog.geonorge.no/metadata/7f854c3d-4c65-4581-ab94-087a76564ee2",
    "access": "open",
    "proto": "WMS",
    "wmsUrl": "https://wms.nibio.no/cgi-bin/vernskog2?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
    "notes": "Vulnerable forest",
    "tags": [
      "environment",
      "risk"
    ],
    "abstractNo": "I henhold til Skogbruksloven § 12, anses skog som vernskog når den tjener til vern for annen skog eller gir vern mot naturskader. Det samme gjelder områder opp mot fjellet, mot nord eller ut mot havet der skogen er sårbar og kan bli ødelagt ved feil skogbehandling.\n\nDet er Statsforvalterens landbruksavdeling som har ansvar for forskrift og kartlegging av vernskoggrensene. Vernskog er samlet inn og er tilgjengelig for de områdene hvor data er sendt inn digitalt av Statsforvalterens landbruksavdelingen. Landbruksdirektoratet er nasjonal koordinator og fagmyndighet.",
    "abstractEn": "Forest which serves as protection for other forest or protects against nature damages. There are protective forests towards mountains or towards seas. Data is not  harmonized and data do not exist for all counties."
  },
  {
    "no": "Vindkraftverk",
    "en": "Wind power plants",
    "ownerNo": "Norges vassdrags- og energidirektorat",
    "ownerEn": "The Norwegian Energy Regulatory Authority",
    "url": "https://kartkatalog.geonorge.no/metadata/ac249604-cd82-490c-83cc-9cd24fe18088",
    "access": "open",
    "proto": "WMS/WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "https://nve.geodataonline.no/arcgis/services/Vindkraft2/MapServer/WmsServer?request=GetCapabilities&service=WMS",
    "notes": "",
    "tags": [
      "infrastructure"
    ],
    "abstractNo": "Datasettet gir en samlet  oversikt over konsesjonspliktige vindkraftverk som NVE har ferdigbehandlet eller som er under behandling. Dataene gir også en oversikt over konsesjonspliktige vindkraftverk som er helt eller delvis bygget og idriftsatt.",
    "abstractEn": "The dataset provides a collective overview of wind power plants requiring licences that the Norwegian Water Resources and Energy Directorate has finished processing or is still processing. The data also provides an overview of wind power plants requiring licences that are completed or partially constructed and commissioned."
  },
  {
    "no": "Værdata og havdata i GRIB-format",
    "en": "Normals (precipitation, temperature, wind and air pressure)",
    "ownerNo": "Meteorologisk institutt",
    "ownerEn": "Norwegian Meteorological Institute",
    "url": "https://kartkatalog.geonorge.no/metadata/6578c540-8a28-4ca9-921c-c5afbed79326",
    "access": "open",
    "proto": "WWW:DOWNLOAD-1.0-http--download",
    "wmsUrl": "",
    "notes": "",
    "tags": [
      "meteorology"
    ],
    "abstractNo": "Oppdaterte gribfiler for strøm, vind og bølger.",
    "abstractEn": "Oppdaterte gribfiler for strøm, vind og bølger."
  }
];
