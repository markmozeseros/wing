"use client"

import Layout from "@/components/layout/Layout"
import { useLanguage } from "@/util/LanguageContext"

type Lang = "hu" | "en" | "de"

type CardTone = "default" | "red" | "green"
type BadgeTone = "warn" | "ok"

type CardData = {
  tone?: CardTone
  icon?: string
  title: string
  text?: string
  bullets?: string[]
  badge?: {
    tone: BadgeTone
    text: string
  }
  phone?: string
}

type SectionData = {
  label: string
  title: string
  cards?: CardData[]
  dualCards?: CardData[]
}

type PageContent = {
  heroLabel: string
  heroTitle: string
  heroText: string
  processEyebrow: string
  processTitle: string
  swipeHint: string
  processSteps: { number: string; title: string; text: string }[]
  sections: {
    usage: SectionData
    insurance: SectionData
    accident: SectionData
    return: SectionData
    assistance: SectionData
    fees: {
      label: string
      title: string
      headers: [string, string]
      items: { item: string; fee: string }[]
    }
    deposit: SectionData
    privacy: SectionData
    disputes: SectionData
  }
}

const contentByLang: Record<Lang, PageContent> = {
  hu: {
    heroLabel: "Általános Szerződési Feltételek – Összefoglaló",
    heroTitle: "Amit a bérlés előtt érdemes tudnia",
    heroText:
      "Az alábbi összefoglaló a VING ÁSZF legfontosabb rendelkezéseit mutatja be átlátható formában. A teljes ÁSZF minden esetben irányadó.",
    processEyebrow: "Hogyan működik?",
    processTitle: "A bérlés folyamata lépésről lépésre",
    swipeHint: "Húzza jobbra a lépések megtekintéséhez",
    processSteps: [
      {
        number: "01",
        title: "Szerződés aláírása",
        text: "A bérleti jogviszony a Bérleti Szerződés mindkét fél által történő aláírásával jön létre.",
      },
      {
        number: "02",
        title: "Jármű átvétele",
        text: "Közösen rögzítjük a jármű állapotát a Gépjármű Állapotlapon. Mindkét fél aláírja.",
      },
      {
        number: "03",
        title: "Bérlési időszak",
        text: "A jármű kizárólag a szerződésben meghatározott célra és területen használható.",
      },
      {
        number: "04",
        title: "Hosszabbítás",
        text: "Írásban, legkésőbb a lejárat előtt 24 órával. Jóváhagyás nélkül visszaadás kötelező.",
      },
      {
        number: "05",
        title: "Visszaadás",
        text: "Tisztán, az átadáskori üzemanyagszinttel, a megadott helyen és időpontban.",
      },
      {
        number: "06",
        title: "Elszámolás",
        text: "A kaució visszatérítése a visszaadás és az esetleges sérülésvizsgálat után történik.",
      },
    ],
    sections: {
      usage: {
        label: "02",
        title: "A jármű használata & a vezető",
        cards: [
          {
            tone: "green",
            icon: "✓",
            title: "Ki vezethet?",
            bullets: [
              "Minimum 21 éves, legalább 1 éve érvényes jogosítvánnyal",
              "Latin betűs jogosítvány, vagy nem latin betűs + érvényes nemzetközi engedély",
              "Csak a Bérleti Szerződésben megnevezett személyek",
            ],
          },
          {
            tone: "red",
            icon: "✕",
            title: "Tilos a járművet használni",
            bullets: [
              "Alkohol vagy kábítószer hatása alatt",
              "Bűncselekmény elkövetésére (csempészet, illegális fuvarozás)",
              "Versenyzésre, tesztelésre, más jármű vontatására",
              "Üzletszerű személy- vagy árufuvarozásra",
              "Albérletbe adni harmadik félnek",
              "Dohányzás a járműben",
            ],
          },
          {
            icon: "🌍",
            title: "Határátlépés",
            text: "Kizárólag előzetes írásos engedéllyel és külön díj megfizetésével lehetséges, függetlenül attól, melyik országban vette át a járművet.",
          },
          {
            icon: "⛽",
            title: "Üzemanyag",
            text: "Kizárólag a gyártó által előírt üzemanyag: dízel vagy min. 95-ös benzin. Tiszta bioetanol vagy biodízel tilos. Visszaadáskor az átvételkori szint szükséges.",
          },
        ],
      },
      insurance: {
        label: "03",
        title: "Biztosítás & kárfelelősség",
        cards: [
          {
            tone: "green",
            icon: "✓",
            title: "Mindig benne van a bérleti díjban",
            text: "A kötelező gépjármű-felelősségbiztosítás (KGFB) minden bérlés részét képezi.",
          },
          {
            icon: "🛡",
            title: "Extra biztosítás (CDW / SCDW / TP)",
            text: "Ha a Bérleti Szerződés extra biztosítást tartalmaz, kár esetén a Bérlő felelőssége a szerződésben meghatározott önrészre korlátozódik.",
            badge: {
              tone: "warn",
              text: "Az önrész minden egyes különálló kárigénynél külön fizetendő",
            },
          },
          {
            tone: "red",
            icon: "!",
            title: "A biztosítás érvényét veszti, ha…",
            bullets: [
              "A vezető alkohol vagy drog hatása alatt volt",
              "A járművet nem a szerződésben megnevezett személy vezette",
              "Valótlan adatot adott meg a szerződésben",
              "Balesetnél nem tett rendőrségi bejelentést",
              "A dokumentumokat nem adta be 24 órán belül",
            ],
          },
          {
            icon: "⚠️",
            title: "Az extra biztosítás NEM fedezi",
            bullets: [
              "Üvegkárok (kőfelverődés, repedés, törés)",
              "Felni és gumiabroncs sérülések",
              "Belső tér és csomagtér kárai",
              "Alvázkárok, amelyek nem balesetből erednek",
              "Elveszett, elhagyott tartozékok",
            ],
            text: "Ezekre speciális kiegészítő biztosítás köthető a bérlés kezdetén.",
          },
        ],
      },
      accident: {
        label: "04",
        title: "Baleset vagy káresemény esetén",
        cards: [
          {
            icon: "📋",
            title: "Teendők sorrendben",
            bullets: [
              "1. Azonnal értesítse a VING-et",
              "2. Hívjon rendőrséget, kérjen helyszíni jegyzőkönyvet",
              "3. Töltse ki az Európai Baleseti Bejelentőt (kék-sárga nyomtatvány)",
              "4. Ne tegyen felelősségelismerő nyilatkozatot harmadik félnek",
              "5. Küldje be a dokumentumokat a VING-nek 24 órán belül",
            ],
          },
          {
            tone: "red",
            icon: "!",
            title: "Lopás esetén",
            text: "Teljes felelősség terheli, ha a forgalmi engedélyt vagy az eredeti kulcsokat nem adta vissza, illetve ha kulcsmásolat készült. Kulcselvesztés esetén azonnal értesítse a VING-et.",
          },
        ],
      },
      return: {
        label: "05",
        title: "Visszaadás & késedelem",
        cards: [
          {
            tone: "green",
            icon: "✓",
            title: "Szabályos visszaadás",
            bullets: [
              "A megadott helyen és időpontban",
              "Tisztán, az átvételkori üzemanyagszinttel",
              "Minden dokumentummal és tartozékkal együtt",
              "Az 1 órás türelmi időn belül",
            ],
          },
          {
            tone: "red",
            icon: "!",
            title: "Késedelmes vagy jogosulatlan visszaadás",
            bullets: [
              "1 órán túli késedelem: +1 teljes napi bérleti díj",
              "Jóváhagyás nélküli meghosszabbítás: napi díj × 2",
              "Biztosítás megszűnik a szerződés lejártával",
              "24 óra után a VING rendőrségi feljelentést tehet és körözést kezdeményezhet",
            ],
          },
          {
            icon: "🔍",
            title: "Állapotellenőrzés visszaadáskor",
            text: "Ha szennyezett vagy éjszakai/garázsban történő visszaadás miatt nem lehetséges az azonnali vizsgálat, a VING 24 órán belül elvégzi. Rejtett hibák (futómű, motor) esetén 72 óra.",
          },
        ],
      },
      assistance: {
        label: "06",
        title: "Assistance – Segélyszolgálat",
        dualCards: [
          {
            title: "Standard Assistance",
            badge: { tone: "warn", text: "Napi díj: meghatározott" },
            bullets: [
              "0–24 órás segélyhívó elérhetőség",
              "Szerviz és szállítás megszervezése",
              "Felmerülő költségek a Bérlőt terhelik",
            ],
          },
          {
            tone: "green",
            title: "Premium Assistance",
            badge: { tone: "ok", text: "Napi díj: meghatározott" },
            bullets: [
              "0–24 órás segélyhívó elérhetőség",
              "Szállítási és javítási költségek fedezete korlátokig",
              "5 liter üzemanyag biztosítása",
            ],
          },
        ],
        cards: [
          {
            tone: "red",
            icon: "!",
            title: "Assistance nélkül",
            text: "Minden egyes segítségszervezési alkalom: 100 EUR + az összes felmerülő költség (szállítás, javítás, alkatrészek).",
          },
          {
            icon: "📞",
            title: "Bejelentés kizárólag ezen a számon",
            phone: "+36 30 123456789",
          },
        ],
      },
      fees: {
        label: "07",
        title: "Leggyakoribb pótdíjak & költségek",
        headers: ["Tétel", "Díj"],
        items: [
          { item: "1 órán túli késedelmes visszaadás", fee: "+ 1 teljes napi bérleti díj" },
          { item: "Jóváhagyás nélküli meghosszabbítás", fee: "Napi díj × 2" },
          { item: "Engedély nélküli határátlépés", fee: "Pótdíj (szerződés szerint)" },
          { item: "Dohányzás a járműben", fee: "Átalánykártérítés + tisztítás" },
          { item: "Szennyezett visszaadás", fee: "150 EUR" },
          { item: "Kárpit / ülés sérülés", fee: "350 EUR átalány" },
          { item: "Nem megfelelő üzemanyag", fee: "100 EUR + javítási ktg." },
          { item: "Túlfutás (korlátozott bérlés)", fee: "0,23 EUR nettó/km" },
          { item: "Munkaidőn kívüli átadás/visszaadás (HU)", fee: "Külön díj/alkalom" },
          { item: "Immobilizáció – kiesési díj (HU)", fee: "15 EUR/nap" },
          { item: "Immobilizáció – kiesési díj (AT)", fee: "20 EUR/nap" },
          { item: "Bírság ügyintézési díja", fee: "40 EUR/alkalom" },
          { item: "Szállítás Budapest területén", fee: "5 000 HUF + ÁFA" },
          { item: "Szállítás Bécs területén", fee: "25 EUR + ÁFA" },
        ],
      },
      deposit: {
        label: "08",
        title: "Kaució & fizetési feltételek",
        cards: [
          {
            icon: "💳",
            title: "Hogyan működik a kaució?",
            text: "Bankkártyán zárolásra kerül a bérlés idejére. A visszaadás és az esetleges sérülésvizsgálat lezárása után a VING feloldja a zárolást. A tényleges megjelenés a Bérlő bankjától függő idő kérdése.",
          },
          {
            tone: "red",
            icon: "!",
            title: "Előre fizetett díjak nem téríthetők vissza",
            text: "Az előre megfizetett bérleti díjak, szolgáltatási díjak és egyéb költségek nem visszatéríthetők, még korai visszaadás esetén sem.",
          },
        ],
      },
      privacy: {
        label: "09",
        title: "Adatkezelés",
        cards: [
          {
            title: "",
            text: "A VING a személyes adatokat a jogviszony megszűnésétől számított 6 hónapig tárolja, kizárólag a szerződéses együttműködés és jogos érdekei céljából. Adatát harmadik félnek csak szabálysértés, bírságbehajtás, biztosítási eljárás vagy hatósági megkeresés esetén adjuk át.",
          },
        ],
      },
      disputes: {
        label: "10",
        title: "Jogviták & irányadó jog",
        dualCards: [
          {
            title: "Global Rent Hungary Kft.",
            text: "Magyar jog irányadó. Vitás esetekben a Bérbeadó székhelye szerinti bíróság illetékes. Késedelmi kamat és 40 EUR behajtási átalány illeti meg a Bérbeadót gazdálkodó szervezet Bérlő esetén.",
          },
          {
            title: "Global Rent Austria GmbH",
            text: "Osztrák jog irányadó (kollíziós szabályok kivételével). Vitás esetekben a Bérbeadó székhelye szerinti bíróság illetékes.",
          },
        ],
      },
    },
  },
  en: {
    heroLabel: "General Terms and Conditions – Summary",
    heroTitle: "What you should know before renting",
    heroText:
      "The summary below presents the most important provisions of VING's general terms in a clear format. The full terms always prevail.",
    processEyebrow: "How does it work?",
    processTitle: "Rental process step by step",
    swipeHint: "Swipe right to view all steps",
    processSteps: [
      {
        number: "01",
        title: "Contract signing",
        text: "The rental relationship is created when both parties sign the rental contract.",
      },
      {
        number: "02",
        title: "Vehicle pickup",
        text: "Vehicle condition is jointly recorded on the condition sheet and signed by both parties.",
      },
      {
        number: "03",
        title: "Rental period",
        text: "The vehicle may only be used for the purpose and territory defined in the contract.",
      },
      {
        number: "04",
        title: "Extension",
        text: "In writing, no later than 24 hours before expiry. Return is mandatory without approval.",
      },
      {
        number: "05",
        title: "Return",
        text: "Return clean, with the same fuel level as at pickup, at the agreed place and time.",
      },
      {
        number: "06",
        title: "Settlement",
        text: "Deposit release happens after return and possible damage inspection.",
      },
    ],
    sections: {
      usage: {
        label: "02",
        title: "Vehicle use & driver requirements",
        cards: [
          {
            tone: "green",
            icon: "✓",
            title: "Who may drive?",
            bullets: [
              "Minimum age 21 with at least 1 year valid driving license",
              "Latin script driving license, or non-Latin license with valid international permit",
              "Only persons named in the rental contract",
            ],
          },
          {
            tone: "red",
            icon: "✕",
            title: "Vehicle use is prohibited",
            bullets: [
              "Under the influence of alcohol or drugs",
              "For criminal acts (smuggling, illegal transport)",
              "For racing, testing, or towing other vehicles",
              "For commercial passenger or freight transport",
              "Sub-renting to third parties",
              "Smoking in the vehicle",
            ],
          },
          {
            icon: "🌍",
            title: "Cross-border travel",
            text: "Only possible with prior written approval and payment of extra fee, regardless of where the vehicle was picked up.",
          },
          {
            icon: "⛽",
            title: "Fuel",
            text: "Only fuel type specified by the manufacturer: diesel or min. 95 petrol. Pure bioethanol or biodiesel is prohibited. Return with pickup fuel level.",
          },
        ],
      },
      insurance: {
        label: "03",
        title: "Insurance & liability",
        cards: [
          {
            tone: "green",
            icon: "✓",
            title: "Always included in rental fee",
            text: "Mandatory liability insurance is part of every rental.",
          },
          {
            icon: "🛡",
            title: "Extra insurance (CDW / SCDW / TP)",
            text: "If extra insurance is included in the rental contract, renter liability is limited to the contractual excess amount.",
            badge: {
              tone: "warn",
              text: "The excess is payable separately for each individual damage claim",
            },
          },
          {
            tone: "red",
            icon: "!",
            title: "Insurance becomes invalid if…",
            bullets: [
              "Driver was under alcohol or drugs",
              "Vehicle was driven by an unauthorized person",
              "False information was provided in the contract",
              "No police report was made in case of accident",
              "Documents were not submitted within 24 hours",
            ],
          },
          {
            icon: "⚠️",
            title: "Extra insurance does NOT cover",
            bullets: [
              "Glass damage (stone chip, crack, breakage)",
              "Wheel rim and tire damages",
              "Interior and trunk damages",
              "Undercarriage damages not caused by collision",
              "Lost or missing accessories",
            ],
            text: "Special supplementary protection can be added at rental start.",
          },
        ],
      },
      accident: {
        label: "04",
        title: "In case of accident or damage",
        cards: [
          {
            icon: "📋",
            title: "Required actions",
            bullets: [
              "1. Inform VING immediately",
              "2. Call police and request on-site report",
              "3. Fill in the European Accident Statement",
              "4. Do not sign liability statement to third party",
              "5. Submit documents to VING within 24 hours",
            ],
          },
          {
            tone: "red",
            icon: "!",
            title: "In case of theft",
            text: "You bear full responsibility if registration papers or original keys are not returned, or if key copies were made. In case of key loss, notify VING immediately.",
          },
        ],
      },
      return: {
        label: "05",
        title: "Return & delay",
        cards: [
          {
            tone: "green",
            icon: "✓",
            title: "Proper return",
            bullets: [
              "At agreed place and time",
              "Clean, with pickup fuel level",
              "With all documents and accessories",
              "Within 1-hour grace period",
            ],
          },
          {
            tone: "red",
            icon: "!",
            title: "Late or unauthorized return",
            bullets: [
              "Delay over 1 hour: +1 full rental day",
              "Extension without approval: daily rate × 2",
              "Insurance ends at contract expiry",
              "After 24 hours VING may file police report",
            ],
          },
          {
            icon: "🔍",
            title: "Condition inspection at return",
            text: "If immediate inspection is not possible due to contamination or night/garage return, VING performs it within 24 hours. Hidden defects may take up to 72 hours.",
          },
        ],
      },
      assistance: {
        label: "06",
        title: "Assistance service",
        dualCards: [
          {
            title: "Standard Assistance",
            badge: { tone: "warn", text: "Daily fee: specified" },
            bullets: [
              "24/7 hotline availability",
              "Service and transport organization",
              "All costs are borne by the renter",
            ],
          },
          {
            tone: "green",
            title: "Premium Assistance",
            badge: { tone: "ok", text: "Daily fee: specified" },
            bullets: [
              "24/7 hotline availability",
              "Coverage of transport and repair costs up to limits",
              "5 liters of fuel provided",
            ],
          },
        ],
        cards: [
          {
            tone: "red",
            icon: "!",
            title: "Without assistance",
            text: "Each assistance organization event: 100 EUR + all incurred costs (transport, repair, parts).",
          },
          {
            icon: "📞",
            title: "Report exclusively on this number",
            phone: "+36 30 123456789",
          },
        ],
      },
      fees: {
        label: "07",
        title: "Most common extra fees & costs",
        headers: ["Item", "Fee"],
        items: [
          { item: "Return delay over 1 hour", fee: "+ 1 full rental day" },
          { item: "Extension without approval", fee: "Daily rate × 2" },
          { item: "Unauthorized border crossing", fee: "Surcharge (per contract)" },
          { item: "Smoking in vehicle", fee: "Flat compensation + cleaning" },
          { item: "Dirty return", fee: "150 EUR" },
          { item: "Upholstery / seat damage", fee: "350 EUR flat" },
          { item: "Wrong fuel", fee: "100 EUR + repair costs" },
          { item: "Mileage overrun (limited rental)", fee: "0.23 EUR net/km" },
          { item: "Out-of-hours handover/return (HU)", fee: "Extra fee/event" },
          { item: "Immobilization downtime fee (HU)", fee: "15 EUR/day" },
          { item: "Immobilization downtime fee (AT)", fee: "20 EUR/day" },
          { item: "Fine administration fee", fee: "40 EUR/event" },
          { item: "Delivery in Budapest", fee: "5 000 HUF + VAT" },
          { item: "Delivery in Vienna", fee: "25 EUR + VAT" },
        ],
      },
      deposit: {
        label: "08",
        title: "Deposit & payment terms",
        cards: [
          {
            icon: "💳",
            title: "How does the deposit work?",
            text: "The deposit is blocked on the bank card during rental. After return and completion of any damage inspection, VING releases the hold. Actual availability depends on the renter's bank.",
          },
          {
            tone: "red",
            icon: "!",
            title: "Prepaid fees are non-refundable",
            text: "Prepaid rental fees, service charges and other costs are non-refundable, even in case of early return.",
          },
        ],
      },
      privacy: {
        label: "09",
        title: "Data handling",
        cards: [
          {
            title: "",
            text: "VING stores personal data for 6 months from the end of the legal relationship only for contractual cooperation and legitimate interests. Data is shared with third parties only in case of offense handling, fine collection, insurance process, or official authority request.",
          },
        ],
      },
      disputes: {
        label: "10",
        title: "Disputes & governing law",
        dualCards: [
          {
            title: "Global Rent Hungary Kft.",
            text: "Hungarian law applies. In disputes, the competent court is the one at the lessor's registered office. Late-payment interest and 40 EUR collection flat fee apply for business renters.",
          },
          {
            title: "Global Rent Austria GmbH",
            text: "Austrian law applies (excluding conflict-of-law rules). In disputes, the competent court is the one at the lessor's registered office.",
          },
        ],
      },
    },
  },
  de: {
    heroLabel: "Allgemeine Vertragsbedingungen – Zusammenfassung",
    heroTitle: "Was Sie vor der Anmietung wissen sollten",
    heroText:
      "Die folgende Zusammenfassung zeigt die wichtigsten Bestimmungen der VING-AGB in uebersichtlicher Form. Massgeblich bleibt stets die vollstaendige AGB.",
    processEyebrow: "Wie funktioniert es?",
    processTitle: "Ablauf der Anmietung Schritt fuer Schritt",
    swipeHint: "Wischen Sie nach rechts, um alle Schritte zu sehen",
    processSteps: [
      {
        number: "01",
        title: "Vertragsunterzeichnung",
        text: "Das Mietverhaeltnis entsteht mit der Unterzeichnung des Mietvertrags durch beide Parteien.",
      },
      {
        number: "02",
        title: "Fahrzeuguebernahme",
        text: "Der Fahrzeugzustand wird gemeinsam im Zustandsprotokoll dokumentiert und von beiden Parteien unterschrieben.",
      },
      {
        number: "03",
        title: "Mietzeitraum",
        text: "Das Fahrzeug darf nur fuer den im Vertrag festgelegten Zweck und Bereich genutzt werden.",
      },
      {
        number: "04",
        title: "Verlaengerung",
        text: "Schriftlich spaetestens 24 Stunden vor Ablauf. Ohne Genehmigung ist die Rueckgabe verpflichtend.",
      },
      {
        number: "05",
        title: "Rueckgabe",
        text: "Sauber, mit dem bei Uebernahme vorhandenen Kraftstoffstand, am vereinbarten Ort und Zeitpunkt.",
      },
      {
        number: "06",
        title: "Abrechnung",
        text: "Die Kautionsfreigabe erfolgt nach Rueckgabe und ggf. Schadenspruefung.",
      },
    ],
    sections: {
      usage: {
        label: "02",
        title: "Nutzung des Fahrzeugs & Fahrer",
        cards: [
          {
            tone: "green",
            icon: "✓",
            title: "Wer darf fahren?",
            bullets: [
              "Mindestens 21 Jahre alt und seit mindestens 1 Jahr gueltiger Fuehrerschein",
              "Fuehrerschein in lateinischer Schrift oder nicht-lateinisch + gueltiger internationaler Fuehrerschein",
              "Nur im Mietvertrag benannte Personen",
            ],
          },
          {
            tone: "red",
            icon: "✕",
            title: "Unzulaessige Nutzung",
            bullets: [
              "Unter Alkohol- oder Drogeneinfluss",
              "Fuer Straftaten (Schmuggel, illegale Transporte)",
              "Fuer Rennen, Tests oder Abschleppen anderer Fahrzeuge",
              "Fuer gewerblichen Personen- oder Guetertransport",
              "Untervermietung an Dritte",
              "Rauchen im Fahrzeug",
            ],
          },
          {
            icon: "🌍",
            title: "Grenzuebertritt",
            text: "Nur mit vorheriger schriftlicher Genehmigung und gegen zusaetzliche Gebuehr moeglich, unabhaengig vom Uebergabeort.",
          },
          {
            icon: "⛽",
            title: "Kraftstoff",
            text: "Nur vom Hersteller vorgeschriebener Kraftstoff: Diesel oder mind. 95 Oktan Benzin. Reiner Bioethanol oder Biodiesel ist verboten. Rueckgabe mit Uebernahmestand.",
          },
        ],
      },
      insurance: {
        label: "03",
        title: "Versicherung & Haftung",
        cards: [
          {
            tone: "green",
            icon: "✓",
            title: "Immer im Mietpreis enthalten",
            text: "Die gesetzliche Haftpflichtversicherung ist Bestandteil jeder Miete.",
          },
          {
            icon: "🛡",
            title: "Zusaetzliche Versicherung (CDW / SCDW / TP)",
            text: "Wenn zusaetzliche Versicherung im Mietvertrag enthalten ist, ist die Haftung des Mieters auf den vertraglichen Selbstbehalt begrenzt.",
            badge: {
              tone: "warn",
              text: "Der Selbstbehalt ist bei jedem einzelnen Schadenfall separat zu zahlen",
            },
          },
          {
            tone: "red",
            icon: "!",
            title: "Versicherung verliert Gueltigkeit, wenn…",
            bullets: [
              "Der Fahrer unter Alkohol- oder Drogeneinfluss stand",
              "Das Fahrzeug von einer nicht benannten Person gefahren wurde",
              "Im Vertrag falsche Angaben gemacht wurden",
              "Bei Unfall keine polizeiliche Meldung erfolgte",
              "Dokumente nicht innerhalb von 24 Stunden eingereicht wurden",
            ],
          },
          {
            icon: "⚠️",
            title: "Zusaetzliche Versicherung deckt NICHT",
            bullets: [
              "Glasschaeden (Steinschlag, Riss, Bruch)",
              "Felgen- und Reifenschaeden",
              "Schaeden im Innen- und Kofferraum",
              "Unterbodenschaeden ohne Unfallursache",
              "Verlorene oder fehlende Zubehoerteile",
            ],
            text: "Hierfuer kann zu Mietbeginn eine zusaetzliche Spezialversicherung abgeschlossen werden.",
          },
        ],
      },
      accident: {
        label: "04",
        title: "Bei Unfall oder Schadenereignis",
        cards: [
          {
            icon: "📋",
            title: "Vorgehensweise",
            bullets: [
              "1. VING sofort informieren",
              "2. Polizei rufen und Protokoll aufnehmen lassen",
              "3. Europaeischen Unfallbericht ausfuellen",
              "4. Keine Schuldanerkennung gegenueber Dritten abgeben",
              "5. Unterlagen innerhalb von 24 Stunden an VING senden",
            ],
          },
          {
            tone: "red",
            icon: "!",
            title: "Bei Diebstahl",
            text: "Volle Haftung, wenn Zulassungspapiere oder Originalschluessel nicht zurueckgegeben werden oder Schluesselkopien erstellt wurden. Bei Schluesselverlust VING sofort benachrichtigen.",
          },
        ],
      },
      return: {
        label: "05",
        title: "Rueckgabe & Verspaetung",
        cards: [
          {
            tone: "green",
            icon: "✓",
            title: "Ordnungsgemaesse Rueckgabe",
            bullets: [
              "Am vereinbarten Ort und Zeitpunkt",
              "Sauber, mit Uebernahme-Kraftstoffstand",
              "Mit allen Dokumenten und Zubehoer",
              "Innerhalb der 1-Stunden-Toleranz",
            ],
          },
          {
            tone: "red",
            icon: "!",
            title: "Verspaetete oder unzulaessige Rueckgabe",
            bullets: [
              "Mehr als 1 Stunde verspaetet: +1 voller Miettag",
              "Verlaengerung ohne Genehmigung: Tagespreis × 2",
              "Versicherung endet mit Vertragsablauf",
              "Nach 24 Stunden kann VING Polizeianzeige erstatten",
            ],
          },
          {
            icon: "🔍",
            title: "Zustandspruefung bei Rueckgabe",
            text: "Wenn eine sofortige Pruefung wegen Verschmutzung oder Nacht-/Garagenrueckgabe nicht moeglich ist, erfolgt diese innerhalb von 24 Stunden. Verdeckte Maengel ggf. innerhalb von 72 Stunden.",
          },
        ],
      },
      assistance: {
        label: "06",
        title: "Assistance – Pannenhilfe",
        dualCards: [
          {
            title: "Standard Assistance",
            badge: { tone: "warn", text: "Tagesgebuehr: festgelegt" },
            bullets: [
              "24/7 Notruf-Erreichbarkeit",
              "Organisation von Service und Transport",
              "Entstehende Kosten traegt der Mieter",
            ],
          },
          {
            tone: "green",
            title: "Premium Assistance",
            badge: { tone: "ok", text: "Tagesgebuehr: festgelegt" },
            bullets: [
              "24/7 Notruf-Erreichbarkeit",
              "Deckung von Transport- und Reparaturkosten bis zur Grenze",
              "Bereitstellung von 5 Litern Kraftstoff",
            ],
          },
        ],
        cards: [
          {
            tone: "red",
            icon: "!",
            title: "Ohne Assistance",
            text: "Jeder Assistance-Organisationsfall: 100 EUR + alle anfallenden Kosten (Transport, Reparatur, Teile).",
          },
          {
            icon: "📞",
            title: "Meldung ausschliesslich unter dieser Nummer",
            phone: "+36 30 123456789",
          },
        ],
      },
      fees: {
        label: "07",
        title: "Hauefigste Zusatzgebuehren & Kosten",
        headers: ["Position", "Gebuehr"],
        items: [
          { item: "Rueckgabeverspaetung ueber 1 Stunde", fee: "+ 1 voller Miettag" },
          { item: "Verlaengerung ohne Genehmigung", fee: "Tagespreis × 2" },
          { item: "Grenzuebertritt ohne Genehmigung", fee: "Zuschlag (laut Vertrag)" },
          { item: "Rauchen im Fahrzeug", fee: "Pauschale + Reinigung" },
          { item: "Verschmutzte Rueckgabe", fee: "150 EUR" },
          { item: "Polster-/Sitzschaeden", fee: "350 EUR pauschal" },
          { item: "Falscher Kraftstoff", fee: "100 EUR + Reparaturkosten" },
          { item: "Kilometer-Ueberschreitung", fee: "0,23 EUR netto/km" },
          { item: "Uebergabe/Rueckgabe ausserhalb Oeffnungszeiten (HU)", fee: "Zusatzgebuehr/Fall" },
          { item: "Immobilisations-Ausfallgebuehr (HU)", fee: "15 EUR/Tag" },
          { item: "Immobilisations-Ausfallgebuehr (AT)", fee: "20 EUR/Tag" },
          { item: "Bussgeld-Bearbeitungsgebuehr", fee: "40 EUR/Fall" },
          { item: "Lieferung im Raum Budapest", fee: "5 000 HUF + MwSt." },
          { item: "Lieferung im Raum Wien", fee: "25 EUR + MwSt." },
        ],
      },
      deposit: {
        label: "08",
        title: "Kaution & Zahlungsbedingungen",
        cards: [
          {
            icon: "💳",
            title: "Wie funktioniert die Kaution?",
            text: "Die Kaution wird waehrend der Miete auf der Bankkarte blockiert. Nach Rueckgabe und Abschluss einer moeglichen Schadenspruefung gibt VING die Blockierung frei. Die tatsaechliche Verfuegbarkeit haengt von der Bank ab.",
          },
          {
            tone: "red",
            icon: "!",
            title: "Vorausbezahlte Gebuehren sind nicht erstattbar",
            text: "Vorausbezahlte Mietgebuehren, Serviceentgelte und sonstige Kosten sind auch bei frueher Rueckgabe nicht erstattbar.",
          },
        ],
      },
      privacy: {
        label: "09",
        title: "Datenschutz",
        cards: [
          {
            title: "",
            text: "VING speichert personenbezogene Daten fuer 6 Monate nach Ende des Rechtsverhaeltnisses ausschliesslich fuer vertragliche Zusammenarbeit und berechtigte Interessen. Eine Weitergabe an Dritte erfolgt nur bei Verstossbearbeitung, Bussgeldeinzug, Versicherungsverfahren oder behoerdlicher Anfrage.",
          },
        ],
      },
      disputes: {
        label: "10",
        title: "Rechtsstreitigkeiten & anwendbares Recht",
        dualCards: [
          {
            title: "Global Rent Hungary Kft.",
            text: "Es gilt ungarisches Recht. Bei Streitigkeiten ist das Gericht am Sitz des Vermieters zustaendig. Bei gewerblichen Mietern gelten Verzugszinsen und eine 40-EUR-Einzugspauschale.",
          },
          {
            title: "Global Rent Austria GmbH",
            text: "Es gilt oesterreichisches Recht (ohne Kollisionsnormen). Bei Streitigkeiten ist das Gericht am Sitz des Vermieters zustaendig.",
          },
        ],
      },
    },
  },
}

function ToneClass(tone?: CardTone): string {
  if (tone === "red") return "rental-summary-card rental-summary-card-red"
  if (tone === "green") return "rental-summary-card rental-summary-card-grn"
  return "rental-summary-card"
}

function SectionCards({ cards }: { cards?: CardData[] }) {
  if (!cards?.length) return null

  return (
    <div className="rental-summary-cards">
      {cards.map((card, index) => (
        <article className={ToneClass(card.tone)} key={`${card.title}-${index}`}>
          {(card.icon || card.title) && (
            <div className="rental-summary-card-top">
              {card.icon && <span className="rental-summary-icon">{card.icon}</span>}
              {card.title && <h4>{card.title}</h4>}
            </div>
          )}
          {card.badge && (
            <span className={`rental-summary-badge ${card.badge.tone === "warn" ? "rental-summary-badge-warn" : "rental-summary-badge-ok"}`}>
              {card.badge.text}
            </span>
          )}
          {!!card.bullets?.length && (
            <ul>
              {card.bullets.map((bullet, bulletIndex) => (
                <li key={`${bullet}-${bulletIndex}`}>{bullet}</li>
              ))}
            </ul>
          )}
          {card.text && <p>{card.text}</p>}
          {card.phone && <p className="rental-summary-phone">{card.phone}</p>}
        </article>
      ))}
    </div>
  )
}

export default function RentalTermsHungaryPage() {
  const { lang } = useLanguage()
  const safeLang: Lang = lang === "hu" || lang === "de" || lang === "en" ? lang : "en"
  const content = contentByLang[safeLang]

  return (
    <Layout footerStyle={1}>
      <main className="rental-summary-page">
        <section className="rental-summary-hero">
          <div className="rental-summary-wrap">
            <p className="rental-summary-hero-label">{content.heroLabel}</p>
            <h1>{content.heroTitle}</h1>
            <p className="rental-summary-hero-text">{content.heroText}</p>
          </div>
        </section>

        <section className="rental-summary-process" id="folyamat">
          <div className="rental-summary-wrap">
            <p className="rental-summary-eyebrow">{content.processEyebrow}</p>
            <h2 className="rental-summary-section-title">{content.processTitle}</h2>
            <div className="rental-summary-steps-outer">
              <div className="rental-summary-steps">
                {content.processSteps.map((step) => (
                  <article className="rental-summary-step" key={step.number}>
                    <div className="rental-summary-step-num">{step.number}</div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <p className="rental-summary-swipe-hint">{content.swipeHint}</p>
          </div>
        </section>

        <section className="rental-summary-info" id="hasznalat">
          <div className="rental-summary-wrap rental-summary-grid">
            <aside className="rental-summary-sidebar">
              <p className="rental-summary-sidebar-label">{content.sections.usage.label}</p>
              <h2 className="rental-summary-sidebar-title">{content.sections.usage.title}</h2>
            </aside>
            <SectionCards cards={content.sections.usage.cards} />
          </div>
        </section>

        <section className="rental-summary-info" id="biztositas">
          <div className="rental-summary-wrap rental-summary-grid">
            <aside className="rental-summary-sidebar">
              <p className="rental-summary-sidebar-label">{content.sections.insurance.label}</p>
              <h2 className="rental-summary-sidebar-title">{content.sections.insurance.title}</h2>
            </aside>
            <SectionCards cards={content.sections.insurance.cards} />
          </div>
        </section>

        <section className="rental-summary-info">
          <div className="rental-summary-wrap rental-summary-grid">
            <aside className="rental-summary-sidebar">
              <p className="rental-summary-sidebar-label">{content.sections.accident.label}</p>
              <h2 className="rental-summary-sidebar-title">{content.sections.accident.title}</h2>
            </aside>
            <SectionCards cards={content.sections.accident.cards} />
          </div>
        </section>

        <section className="rental-summary-info">
          <div className="rental-summary-wrap rental-summary-grid">
            <aside className="rental-summary-sidebar">
              <p className="rental-summary-sidebar-label">{content.sections.return.label}</p>
              <h2 className="rental-summary-sidebar-title">{content.sections.return.title}</h2>
            </aside>
            <SectionCards cards={content.sections.return.cards} />
          </div>
        </section>

        <section className="rental-summary-info">
          <div className="rental-summary-wrap rental-summary-grid">
            <aside className="rental-summary-sidebar">
              <p className="rental-summary-sidebar-label">{content.sections.assistance.label}</p>
              <h2 className="rental-summary-sidebar-title">{content.sections.assistance.title}</h2>
            </aside>
            <div className="rental-summary-cards">
              {!!content.sections.assistance.dualCards?.length && (
                <div className="rental-summary-cards-2">
                  {content.sections.assistance.dualCards.map((card, index) => (
                    <article className={ToneClass(card.tone)} key={`${card.title}-${index}`}>
                      <h4 className="rental-summary-mini-title">{card.title}</h4>
                      {card.badge && (
                        <span className={`rental-summary-badge ${card.badge.tone === "warn" ? "rental-summary-badge-warn" : "rental-summary-badge-ok"}`}>
                          {card.badge.text}
                        </span>
                      )}
                      {!!card.bullets?.length && (
                        <ul>
                          {card.bullets.map((bullet, bulletIndex) => (
                            <li key={`${bullet}-${bulletIndex}`}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </article>
                  ))}
                </div>
              )}
              <SectionCards cards={content.sections.assistance.cards} />
            </div>
          </div>
        </section>

        <section className="rental-summary-info" id="dijak">
          <div className="rental-summary-wrap rental-summary-grid">
            <aside className="rental-summary-sidebar">
              <p className="rental-summary-sidebar-label">{content.sections.fees.label}</p>
              <h2 className="rental-summary-sidebar-title">{content.sections.fees.title}</h2>
            </aside>
            <div className="rental-summary-cards">
              <article className="rental-summary-card">
                <table className="rental-summary-fee-table">
                  <thead>
                    <tr>
                      <th>{content.sections.fees.headers[0]}</th>
                      <th>{content.sections.fees.headers[1]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.sections.fees.items.map((fee) => (
                      <tr key={`${fee.item}-${fee.fee}`}>
                        <td>{fee.item}</td>
                        <td>{fee.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </article>
            </div>
          </div>
        </section>

        <section className="rental-summary-info">
          <div className="rental-summary-wrap rental-summary-grid">
            <aside className="rental-summary-sidebar">
              <p className="rental-summary-sidebar-label">{content.sections.deposit.label}</p>
              <h2 className="rental-summary-sidebar-title">{content.sections.deposit.title}</h2>
            </aside>
            <SectionCards cards={content.sections.deposit.cards} />
          </div>
        </section>

        <section className="rental-summary-info">
          <div className="rental-summary-wrap rental-summary-grid">
            <aside className="rental-summary-sidebar">
              <p className="rental-summary-sidebar-label">{content.sections.privacy.label}</p>
              <h2 className="rental-summary-sidebar-title">{content.sections.privacy.title}</h2>
            </aside>
            <SectionCards cards={content.sections.privacy.cards} />
          </div>
        </section>

        <section className="rental-summary-info" id="kapcsolat">
          <div className="rental-summary-wrap rental-summary-grid">
            <aside className="rental-summary-sidebar">
              <p className="rental-summary-sidebar-label">{content.sections.disputes.label}</p>
              <h2 className="rental-summary-sidebar-title">{content.sections.disputes.title}</h2>
            </aside>
            <div className="rental-summary-cards">
              <div className="rental-summary-cards-2">
                {content.sections.disputes.dualCards?.map((card, index) => (
                  <article className="rental-summary-card" key={`${card.title}-${index}`}>
                    <h4 className="rental-summary-mini-title">{card.title}</h4>
                    {card.text && <p>{card.text}</p>}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
