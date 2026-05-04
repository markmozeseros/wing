"use client"

import Layout from "@/components/layout/Layout"
import { useLanguage } from "@/util/LanguageContext"
import type { ReactNode } from "react"

type Lang = "hu" | "en" | "de"

type Step = { num: string; title: string; desc: string }
type Copy = {
  heroEyebrow: string
  heroTitle: string
  heroLead: string
  stepsHint: string
  sideTitles: {
    usage: string
    insurance: string
    accident: string
    return: string
    assistance: string
    fees: string
    deposit: string
    data: string
    legal: string
  }
  labels: {
    process: string
    processTitle: string
    whoCanDrive: string
    prohibitedUse: string
    borderCross: string
    fuel: string
    includedInPrice: string
    extraInsurance: string
    insuranceVoid: string
    insuranceNotCover: string
    accidentSteps: string
    theftCase: string
    properReturn: string
    delayedReturn: string
    returnCheck: string
    standardAssistance: string
    premiumAssistance: string
    noAssist: string
    callOnly: string
    commonFees: string
    feeItem: string
    feeAmount: string
    depositTitle: string
    prepaidNoRefund: string
    dataTitle: string
    huLawTitle: string
    atLawTitle: string
    disclaimer: string
    alwaysBinding: string
  }
  bullets: {
    whoCanDrive: string[]
    prohibitedUse: string[]
    insuranceVoid: string[]
    insuranceNotCover: string[]
    accidentSteps: string[]
    properReturn: string[]
    delayedReturn: string[]
  }
  paragraphs: {
    borderCross: string
    fuel: string
    includedInPrice: string
    extraInsurance: string
    noAssist: string
    callOnly: string
    deposit: string
    prepaidNoRefund: string
    data: string
    huLaw: string
    atLaw: string
    theftCase: string
    returnCheck: string
    disclaimer: string
  }
  badges: {
    warning: string
    ok: string
  }
  tableFees: Array<[string, string]>
  steps: Step[]
}

const huSteps: Step[] = [
  { num: "01", title: "Szerződés aláírása", desc: "A bérleti jogviszony a Bérleti Szerződés mindkét fél által történő aláírásával jön létre." },
  { num: "02", title: "Jármű átvétele", desc: "Közösen rögzítjük a jármű állapotát a Gépjármű Állapotlapon. Mindkét fél aláírja." },
  { num: "03", title: "Bérlési időszak", desc: "A jármű kizárólag a szerződésben meghatározott célra és területen használható." },
  { num: "04", title: "Hosszabbítás", desc: "Írásban, legkésőbb a lejárat előtt 24 órával. Jóváhagyás nélkül visszaadás kötelező." },
  { num: "05", title: "Visszaadás", desc: "Tisztán, az átadáskori üzemanyagszinttel, a megadott helyen és időpontban." },
  { num: "06", title: "Elszámolás", desc: "A kaució visszatérítése a visszaadás és az esetleges sérülésvizsgálat után történik." },
]

const huFees: Array<[string, string]> = [
  ["1 órán túli késedelmes visszaadás", "+ 1 teljes napi bérleti díj"],
  ["Jóváhagyás nélküli meghosszabbítás", "Napi díj × 2"],
  ["Engedély nélküli határátlépés", "Pótdíj (szerződés szerint)"],
  ["Dohányzás a járműben", "Átalánykártérítés + tisztítás"],
  ["Szennyezett visszaadás", "150 EUR"],
  ["Kárpit / ülés sérülés", "350 EUR átalány"],
  ["Nem megfelelő üzemanyag", "100 EUR + javítási ktg."],
  ["Túlfutás (korlátozott bérlés)", "0,23 EUR nettó/km"],
  ["Munkaidőn kívüli átadás/visszaadás (HU)", "Külön díj/alkalom"],
  ["Immobilizáció - kiesési díj (HU)", "15 EUR/nap"],
  ["Immobilizáció - kiesési díj (AT)", "20 EUR/nap"],
  ["Bírság ügyintézési díja", "40 EUR/alkalom"],
  ["Szállítás Budapest területén", "5 000 HUF + ÁFA"],
  ["Szállítás Bécs területén", "25 EUR + ÁFA"],
]

const enFees: Array<[string, string]> = [
  ["Late return over 1 hour", "+ 1 full daily rental fee"],
  ["Extension without approval", "Daily fee × 2"],
  ["Unauthorized border crossing", "Surcharge (as per contract)"],
  ["Smoking in the vehicle", "Flat compensation + cleaning"],
  ["Dirty vehicle return", "150 EUR"],
  ["Upholstery / seat damage", "350 EUR flat fee"],
  ["Incorrect fuel", "100 EUR + repair cost"],
  ["Mileage overrun (limited rental)", "0.23 EUR net/km"],
  ["Out-of-hours handover/return (HU)", "Extra fee per occasion"],
  ["Immobilization downtime fee (HU)", "15 EUR/day"],
  ["Immobilization downtime fee (AT)", "20 EUR/day"],
  ["Fine administration fee", "40 EUR/occasion"],
  ["Transport within Budapest", "5,000 HUF + VAT"],
  ["Transport within Vienna", "25 EUR + VAT"],
]

const deFees: Array<[string, string]> = [
  ["Verspaetete Rueckgabe ueber 1 Stunde", "+ 1 voller Tagesmietpreis"],
  ["Verlaengerung ohne Genehmigung", "Tagespreis × 2"],
  ["Unerlaubter Grenzuebertritt", "Zuschlag (laut Vertrag)"],
  ["Rauchen im Fahrzeug", "Pauschalersatz + Reinigung"],
  ["Verschmutzte Rueckgabe", "150 EUR"],
  ["Schaeden an Polster/Sitz", "350 EUR Pauschale"],
  ["Falscher Kraftstoff", "100 EUR + Reparaturkosten"],
  ["Mehrkilometer (begrenzte Miete)", "0,23 EUR netto/km"],
  ["Uebergabe/Rueckgabe ausserhalb der Oeffnungszeiten (HU)", "Zusatzgebuehr pro Anlass"],
  ["Immobilisierungsausfallgebuehr (HU)", "15 EUR/Tag"],
  ["Immobilisierungsausfallgebuehr (AT)", "20 EUR/Tag"],
  ["Bearbeitungsgebuehr fuer Bussgelder", "40 EUR/Anlass"],
  ["Transport innerhalb Budapest", "5.000 HUF + MwSt."],
  ["Transport innerhalb Wien", "25 EUR + MwSt."],
]

const copyByLang: Record<Lang, Copy> = {
  hu: {
    heroEyebrow: "Általános Szerződési Feltételek - Összefoglaló",
    heroTitle: "Amit a bérlés előtt érdemes tudnia",
    heroLead: "Az alábbi összefoglaló a VING ÁSZF legfontosabb rendelkezéseit mutatja be átlátható formában. A teljes ÁSZF minden esetben irányadó.",
    stepsHint: "Húzza jobbra a lépések megtekintéséhez",
    sideTitles: {
      usage: "A jármű használata & a vezető",
      insurance: "Biztosítás & kárfelelősség",
      accident: "Baleset vagy káresemény esetén",
      return: "Visszaadás & késedelem",
      assistance: "Assistance - Segélyszolgálat",
      fees: "Leggyakoribb pótdíjak & költségek",
      deposit: "Kaució & fizetési feltételek",
      data: "Adatkezelés",
      legal: "Jogviták & irányadó jog",
    },
    labels: {
      process: "Hogyan működik?",
      processTitle: "A bérlés folyamata lépésről lépésre",
      whoCanDrive: "Ki vezethet?",
      prohibitedUse: "Tilos a járművet használni",
      borderCross: "Határátlépés",
      fuel: "Üzemanyag",
      includedInPrice: "Mindig benne van a bérleti díjban",
      extraInsurance: "Extra biztosítás (CDW / SCDW / TP)",
      insuranceVoid: "A biztosítás érvényét veszti, ha...",
      insuranceNotCover: "Az extra biztosítás NEM fedezi",
      accidentSteps: "Teendők sorrendben",
      theftCase: "Lopás esetén",
      properReturn: "Szabályos visszaadás",
      delayedReturn: "Késedelmes vagy jogosulatlan visszaadás",
      returnCheck: "Állapotellenőrzés visszaadáskor",
      standardAssistance: "Standard Assistance",
      premiumAssistance: "Premium Assistance",
      noAssist: "Assistance nélkül",
      callOnly: "Bejelentés kizárólag ezen a számon",
      commonFees: "Tétel",
      feeItem: "Tétel",
      feeAmount: "Díj",
      depositTitle: "Hogyan működik a kaució?",
      prepaidNoRefund: "Előre fizetett díjak nem téríthetők vissza",
      dataTitle: "Adatkezelés",
      huLawTitle: "Global Rent Hungary Kft.",
      atLawTitle: "Global Rent Austria GmbH",
      disclaimer: "Ez az összefoglaló tájékoztató jellegű.",
      alwaysBinding: "Minden esetben a teljes ÁSZF szövege az irányadó.",
    },
    bullets: {
      whoCanDrive: [
        "Minimum 21 éves, legalább 1 éve érvényes jogosítvánnyal",
        "Latin betűs jogosítvány, vagy nem latin betűs + érvényes nemzetközi engedély",
        "Csak a Bérleti Szerződésben megnevezett személyek",
      ],
      prohibitedUse: [
        "Alkohol vagy kábítószer hatása alatt",
        "Bűncselekmény elkövetésére (csempészet, illegális fuvarozás)",
        "Versenyzésre, tesztelésre, más jármű vontatására",
        "Üzletszerű személy- vagy árufuvarozásra",
        "Albérletbe adni harmadik félnek",
        "Dohányzás a járműben",
      ],
      insuranceVoid: [
        "A vezető alkohol vagy drog hatása alatt volt",
        "A járművet nem a szerződésben megnevezett személy vezette",
        "Valótlan adatot adott meg a szerződésben",
        "Balesetnél nem tett rendőrségi bejelentést",
        "A dokumentumokat nem adta be 24 órán belül",
      ],
      insuranceNotCover: [
        "Üvegkárok (kőfelverődés, repedés, törés)",
        "Felni és gumiabroncs sérülések",
        "Belső tér és csomagtér kárai",
        "Alvázkárok, amelyek nem balesetből erednek",
        "Elveszett, elhagyott tartozékok",
      ],
      accidentSteps: [
        "1. Azonnal értesítse a VING-et",
        "2. Hívjon rendőrséget, kérjen helyszíni jegyzőkönyvet",
        "3. Töltse ki az Európai Baleseti Bejelentőt",
        "4. Ne tegyen felelősségelismerő nyilatkozatot harmadik félnek",
        "5. Küldje be a dokumentumokat a VING-nek 24 órán belül",
      ],
      properReturn: [
        "A megadott helyen és időpontban",
        "Tisztán, az átvételkori üzemanyagszinttel",
        "Minden dokumentummal és tartozékkal együtt",
        "Az 1 órás türelmi időn belül",
      ],
      delayedReturn: [
        "1 órán túli késedelem: +1 teljes napi bérleti díj",
        "Jóváhagyás nélküli meghosszabbítás: napi díj × 2",
        "Biztosítás megszűnik a szerződés lejártával",
        "24 óra után a VING rendőrségi feljelentést tehet és körözést kezdeményezhet",
      ],
    },
    paragraphs: {
      borderCross: "Kizárólag előzetes írásos engedéllyel és külön díj megfizetésével lehetséges, függetlenül attól, melyik országban vette át a járművet.",
      fuel: "Kizárólag a gyártó által előírt üzemanyag: dízel vagy min. 95-ös benzin. Tiszta bioetanol vagy biodízel tilos. Visszaadáskor az átvételkori szint szükséges.",
      includedInPrice: "A kötelező gépjármű-felelősségbiztosítás (KGFB) minden bérlés részét képezi.",
      extraInsurance: "Ha a Bérleti Szerződés extra biztosítást tartalmaz, kár esetén a Bérlő felelőssége a szerződésben meghatározott önrészre korlátozódik.",
      noAssist: "Minden egyes segítségszervezési alkalom: 100 EUR + az összes felmerülő költség (szállítás, javítás, alkatrészek).",
      callOnly: "+36 30 123456789",
      deposit: "Bankkártyán zárolásra kerül a bérlés idejére. A visszaadás és az esetleges sérülésvizsgálat lezárása után a VING feloldja a zárolást. A tényleges megjelenés a Bérlő bankjától függő idő kérdése.",
      prepaidNoRefund: "Az előre megfizetett bérleti díjak, szolgáltatási díjak és egyéb költségek nem visszatéríthetők, még korai visszaadás esetén sem.",
      data: "A VING a személyes adatokat a jogviszony megszűnésétől számított 6 hónapig tárolja, kizárólag a szerződéses együttműködés és jogos érdekei céljából. Adatát harmadik félnek csak szabálysértés, bírságbehajtás, biztosítási eljárás vagy hatósági megkeresés esetén adjuk át.",
      huLaw: "Magyar jog irányadó. Vitás esetekben a Bérbeadó székhelye szerinti bíróság illetékes. Késedelmi kamat és 40 EUR behajtási átalány illeti meg a Bérbeadót gazdálkodó szervezet Bérlő esetén.",
      atLaw: "Osztrák jog irányadó (kollíziós szabályok kivételével). Vitás esetekben a Bérbeadó székhelye szerinti bíróság illetékes.",
      theftCase: "Teljes felelősség terheli, ha a forgalmi engedélyt vagy az eredeti kulcsokat nem adta vissza, illetve ha kulcsmásolat készült. Kulcselvesztés esetén azonnal értesítse a VING-et.",
      returnCheck: "Ha szennyezett vagy éjszakai/garázsban történő visszaadás miatt nem lehetséges az azonnali vizsgálat, a VING 24 órán belül elvégzi. Rejtett hibák (futómű, motor) esetén 72 óra.",
      disclaimer: "© 2026 VING - Global Rent Hungary Kft. & Global Rent Austria GmbH",
    },
    badges: {
      warning: "Napi díj: meghatározott",
      ok: "Napi díj: meghatározott",
    },
    tableFees: huFees,
    steps: huSteps,
  },
  en: {
    heroEyebrow: "General Terms and Conditions - Summary",
    heroTitle: "What to know before renting",
    heroLead: "This summary highlights the most important provisions of VING GTC in a transparent way. The full GTC always prevails.",
    stepsHint: "Drag right to view all steps",
    sideTitles: {
      usage: "Vehicle use and driver",
      insurance: "Insurance and liability",
      accident: "In case of accident or damage",
      return: "Return and delays",
      assistance: "Assistance service",
      fees: "Most common surcharges and fees",
      deposit: "Deposit and payment terms",
      data: "Data processing",
      legal: "Disputes and governing law",
    },
    labels: {
      process: "How does it work?",
      processTitle: "Rental process step by step",
      whoCanDrive: "Who can drive?",
      prohibitedUse: "Vehicle use is prohibited for",
      borderCross: "Border crossing",
      fuel: "Fuel",
      includedInPrice: "Always included in rental price",
      extraInsurance: "Extra insurance (CDW / SCDW / TP)",
      insuranceVoid: "Insurance becomes invalid if...",
      insuranceNotCover: "Extra insurance does NOT cover",
      accidentSteps: "Action steps",
      theftCase: "In case of theft",
      properReturn: "Proper return",
      delayedReturn: "Late or unauthorized return",
      returnCheck: "Condition inspection at return",
      standardAssistance: "Standard Assistance",
      premiumAssistance: "Premium Assistance",
      noAssist: "Without Assistance",
      callOnly: "Report only via this number",
      commonFees: "Most common fees",
      feeItem: "Item",
      feeAmount: "Fee",
      depositTitle: "How deposit works",
      prepaidNoRefund: "Prepaid amounts are non-refundable",
      dataTitle: "Data processing",
      huLawTitle: "Global Rent Hungary Kft.",
      atLawTitle: "Global Rent Austria GmbH",
      disclaimer: "This summary is for information only.",
      alwaysBinding: "The full GTC text is always binding.",
    },
    bullets: {
      whoCanDrive: [
        "Minimum age 21 with at least 1 year valid driving license",
        "Latin-script license, or non-Latin with valid international permit",
        "Only persons listed in the Rental Agreement",
      ],
      prohibitedUse: [
        "Driving under alcohol or drugs",
        "Criminal activity (smuggling, illegal transport)",
        "Racing, testing, towing another vehicle",
        "Commercial passenger or cargo transport",
        "Sub-renting to third parties",
        "Smoking in the vehicle",
      ],
      insuranceVoid: [
        "Driver was under alcohol or drug influence",
        "Vehicle was driven by unauthorized person",
        "False data was provided in contract",
        "No police report was filed for accident",
        "Required documents not submitted within 24 hours",
      ],
      insuranceNotCover: [
        "Glass damage (chips, cracks, breakage)",
        "Wheel rim and tire damage",
        "Interior and trunk damages",
        "Undercarriage damage not caused by accident",
        "Lost accessories and equipment",
      ],
      accidentSteps: [
        "1. Notify VING immediately",
        "2. Call police and request on-site report",
        "3. Complete the European Accident Statement",
        "4. Do not admit liability to third parties",
        "5. Send documents to VING within 24 hours",
      ],
      properReturn: [
        "At specified location and time",
        "Clean, with same fuel level as pickup",
        "With all documents and accessories",
        "Within 1-hour grace period",
      ],
      delayedReturn: [
        "Delay over 1 hour: +1 full rental day",
        "Unauthorized extension: daily fee × 2",
        "Insurance expires after contract end",
        "After 24 hours VING may file police report and request vehicle notice",
      ],
    },
    paragraphs: {
      borderCross: "Allowed only with prior written approval and additional fee, regardless of pickup country.",
      fuel: "Only manufacturer-specified fuel: diesel or minimum 95 octane petrol. Pure bioethanol or biodiesel is prohibited. Return with pickup fuel level.",
      includedInPrice: "Mandatory motor third-party liability insurance is included in every rental.",
      extraInsurance: "If extra insurance is included in the Rental Agreement, renter liability is limited to the contractual excess amount.",
      noAssist: "Each assistance organization request: 100 EUR + all incurred costs (transport, repair, parts).",
      callOnly: "+36 30 123456789",
      deposit: "Deposit is pre-authorized on bank card during rental. After return and possible damage inspection, VING releases it. Final availability depends on your bank.",
      prepaidNoRefund: "Prepaid rental fees, service charges and other costs are non-refundable, even with early return.",
      data: "VING stores personal data for 6 months after contract end for contractual cooperation and legitimate interests. Data is shared only in cases required by law or authority requests.",
      huLaw: "Hungarian law applies. Disputes are under the court competent at lessor's seat. Late-payment interest and 40 EUR collection flat fee may apply for corporate renters.",
      atLaw: "Austrian law applies (excluding conflict rules). Disputes are under the court competent at lessor's seat.",
      theftCase: "You bear full liability if registration document or original keys are not returned, or if a key copy was made. Report key loss to VING immediately.",
      returnCheck: "If immediate check is impossible due to contamination or night/garage return, VING performs inspection within 24 hours. Hidden defects may be assessed within 72 hours.",
      disclaimer: "© 2026 VING - Global Rent Hungary Kft. & Global Rent Austria GmbH",
    },
    badges: {
      warning: "Daily fee: as defined",
      ok: "Daily fee: as defined",
    },
    tableFees: enFees,
    steps: [
      { num: "01", title: "Contract signature", desc: "Rental relationship starts when both parties sign the Rental Agreement." },
      { num: "02", title: "Vehicle handover", desc: "Vehicle condition is jointly recorded on the Vehicle Condition Sheet and signed." },
      { num: "03", title: "Rental period", desc: "Vehicle may only be used for contractual purpose and territory." },
      { num: "04", title: "Extension", desc: "In writing, at least 24 hours before expiry. Return is mandatory without approval." },
      { num: "05", title: "Return", desc: "Clean vehicle, same fuel level, at agreed place and time." },
      { num: "06", title: "Settlement", desc: "Deposit release follows return and any necessary damage inspection." },
    ],
  },
  de: {
    heroEyebrow: "Allgemeine Geschaeftsbedingungen - Zusammenfassung",
    heroTitle: "Was Sie vor der Miete wissen sollten",
    heroLead: "Diese Zusammenfassung zeigt die wichtigsten Punkte der VING-AGB in uebersichtlicher Form. Massgeblich bleibt stets der volle AGB-Text.",
    stepsHint: "Nach rechts ziehen, um alle Schritte zu sehen",
    sideTitles: {
      usage: "Fahrzeugnutzung und Fahrer",
      insurance: "Versicherung und Haftung",
      accident: "Bei Unfall oder Schaden",
      return: "Rueckgabe und Verspaetung",
      assistance: "Assistance-Service",
      fees: "Hauefige Zuschlaege und Gebuehren",
      deposit: "Kaution und Zahlungsbedingungen",
      data: "Datenverarbeitung",
      legal: "Streitigkeiten und anwendbares Recht",
    },
    labels: {
      process: "Wie funktioniert es?",
      processTitle: "Ablauf der Miete Schritt fuer Schritt",
      whoCanDrive: "Wer darf fahren?",
      prohibitedUse: "Unzulaessige Fahrzeugnutzung",
      borderCross: "Grenzuebertritt",
      fuel: "Kraftstoff",
      includedInPrice: "Immer im Mietpreis enthalten",
      extraInsurance: "Zusatzversicherung (CDW / SCDW / TP)",
      insuranceVoid: "Versicherung ist ungueltig, wenn...",
      insuranceNotCover: "Die Zusatzversicherung deckt NICHT",
      accidentSteps: "Vorgehen in Reihenfolge",
      theftCase: "Bei Diebstahl",
      properReturn: "Ordnungsgemaesse Rueckgabe",
      delayedReturn: "Verspaetete oder unzulaessige Rueckgabe",
      returnCheck: "Zustandspruefung bei Rueckgabe",
      standardAssistance: "Standard Assistance",
      premiumAssistance: "Premium Assistance",
      noAssist: "Ohne Assistance",
      callOnly: "Meldung ausschliesslich unter",
      commonFees: "Hauefige Gebuehren",
      feeItem: "Position",
      feeAmount: "Gebuehr",
      depositTitle: "So funktioniert die Kaution",
      prepaidNoRefund: "Vorauszahlungen sind nicht erstattbar",
      dataTitle: "Datenverarbeitung",
      huLawTitle: "Global Rent Hungary Kft.",
      atLawTitle: "Global Rent Austria GmbH",
      disclaimer: "Diese Zusammenfassung dient nur zur Information.",
      alwaysBinding: "Massgeblich ist in jedem Fall der volle AGB-Text.",
    },
    bullets: {
      whoCanDrive: [
        "Mindestalter 21 Jahre, Fuehrerschein seit mindestens 1 Jahr",
        "Fuehrerschein in lateinischer Schrift oder internationaler Fuehrerschein",
        "Nur im Mietvertrag eingetragene Personen",
      ],
      prohibitedUse: [
        "Fahren unter Alkohol- oder Drogeneinfluss",
        "Straftaten (Schmuggel, illegaler Transport)",
        "Rennen, Tests, Abschleppen anderer Fahrzeuge",
        "Gewerbliche Personen- oder Gueterbefoerderung",
        "Untervermietung an Dritte",
        "Rauchen im Fahrzeug",
      ],
      insuranceVoid: [
        "Fahrer stand unter Alkohol- oder Drogeneinfluss",
        "Fahrzeug wurde von unbefugter Person gefahren",
        "Falsche Angaben im Vertrag",
        "Kein Polizeibericht nach Unfall",
        "Dokumente nicht innerhalb von 24 Stunden eingereicht",
      ],
      insuranceNotCover: [
        "Glasschaeden (Steinschlag, Risse, Bruch)",
        "Felgen- und Reifenschaeden",
        "Schaeden im Innen- und Kofferraum",
        "Unterbodenschaeden ohne Unfallursache",
        "Verlorenes Zubehoer",
      ],
      accidentSteps: [
        "1. VING sofort informieren",
        "2. Polizei rufen und Protokoll verlangen",
        "3. Europaeischen Unfallbericht ausfuellen",
        "4. Kein Schuldeingestaendnis gegenueber Dritten",
        "5. Unterlagen innerhalb von 24 Stunden an VING senden",
      ],
      properReturn: [
        "Am vereinbarten Ort und Zeitpunkt",
        "Sauber, mit Kraftstoffstand wie bei Uebergabe",
        "Mit allen Dokumenten und Zubehoerteilen",
        "Innerhalb der 1-Stunden-Toleranz",
      ],
      delayedReturn: [
        "Mehr als 1 Stunde Verspaetung: +1 voller Miettag",
        "Unbestaetigte Verlaengerung: Tagespreis × 2",
        "Versicherung endet mit Vertragsablauf",
        "Nach 24 Stunden kann VING Anzeige erstatten und Fahndung veranlassen",
      ],
    },
    paragraphs: {
      borderCross: "Nur mit vorheriger schriftlicher Genehmigung und gegen Zusatzgebuehr, unabhaengig vom Uebernahmeland.",
      fuel: "Nur vom Hersteller vorgeschriebener Kraftstoff: Diesel oder mind. 95 Oktan. Reiner Bioethanol/Biodiesel ist verboten. Rueckgabe mit Uebernahmestand.",
      includedInPrice: "Die gesetzliche Kfz-Haftpflichtversicherung ist in jeder Miete enthalten.",
      extraInsurance: "Wenn Zusatzversicherung im Mietvertrag enthalten ist, ist die Haftung des Mieters auf den vertraglichen Selbstbehalt begrenzt.",
      noAssist: "Je Assistance-Organisation: 100 EUR + alle entstehenden Kosten (Transport, Reparatur, Teile).",
      callOnly: "+36 30 123456789",
      deposit: "Die Kaution wird waehrend der Miete auf der Karte vorautorisiert. Nach Rueckgabe und ggf. Schadenspruefung gibt VING die Reservierung frei.",
      prepaidNoRefund: "Vorausbezahlte Miet-, Service- und sonstige Kosten sind auch bei frueher Rueckgabe nicht erstattbar.",
      data: "VING speichert personenbezogene Daten 6 Monate nach Vertragsende zu vertraglichen Zwecken und berechtigten Interessen. Weitergabe nur bei gesetzlicher Pflicht oder behoerdlicher Anfrage.",
      huLaw: "Es gilt ungarisches Recht. Zustaendig ist das Gericht am Sitz des Vermieters. Bei Firmenkunden koennen Verzugszinsen und 40 EUR Inkassopauschale anfallen.",
      atLaw: "Es gilt oesterreichisches Recht (ohne Kollisionsnormen). Zustaendig ist das Gericht am Sitz des Vermieters.",
      theftCase: "Volle Haftung besteht, wenn Zulassungspapiere oder Originalschluessel nicht zurueckgegeben wurden oder ein Schluessel dupliziert wurde. Schluesselverlust sofort melden.",
      returnCheck: "Ist eine sofortige Pruefung wegen Verschmutzung oder Nacht-/Garagenrueckgabe nicht moeglich, erfolgt die Pruefung innerhalb von 24 Stunden; verdeckte Schaeden bis 72 Stunden.",
      disclaimer: "© 2026 VING - Global Rent Hungary Kft. & Global Rent Austria GmbH",
    },
    badges: {
      warning: "Tagesgebuehr: definiert",
      ok: "Tagesgebuehr: definiert",
    },
    tableFees: deFees,
    steps: [
      { num: "01", title: "Vertragsunterzeichnung", desc: "Das Mietverhaeltnis entsteht mit Unterzeichnung durch beide Parteien." },
      { num: "02", title: "Fahrzeuguebergabe", desc: "Der Zustand wird gemeinsam im Fahrzeugprotokoll festgehalten und unterschrieben." },
      { num: "03", title: "Mietzeit", desc: "Das Fahrzeug darf nur fuer vertraglich bestimmte Zwecke und Gebiete genutzt werden." },
      { num: "04", title: "Verlaengerung", desc: "Schriftlich spaetestens 24 Stunden vor Ablauf; ohne Bestaetigung ist Rueckgabe verpflichtend." },
      { num: "05", title: "Rueckgabe", desc: "Sauber, mit gleichem Kraftstoffstand, am vereinbarten Ort und Zeitpunkt." },
      { num: "06", title: "Abrechnung", desc: "Kautionsfreigabe erfolgt nach Rueckgabe und ggf. Schadenspruefung." },
    ],
  },
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 10 }}>
      {children}
    </p>
  )
}

function SecTitle({ children }: { children: ReactNode }) {
  return (
    <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, marginBottom: 28 }}>
      {children}
    </h2>
  )
}

function Icon({ children, variant }: { children: ReactNode; variant?: "red" | "grn" }) {
  const bg = variant === "red" ? "var(--accent)" : variant === "grn" ? "var(--grn-ico)" : "var(--black)"
  return (
    <div style={{ width: 32, height: 32, borderRadius: 8, background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0, color: "#fff" }}>
      {children}
    </div>
  )
}

function Badge({ children, variant = "warn" }: { children: ReactNode; variant?: "warn" | "ok" }) {
  const styles = variant === "ok" ? { background: "#e8f5e9", color: "#2e7d32" } : { background: "#fff3cd", color: "#7a5800" }
  return (
    <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 4, marginBottom: 10, ...styles }}>
      {children}
    </span>
  )
}

function Card({ variant, icon, title, children, style }: { variant?: "red" | "grn"; icon?: ReactNode; title?: string; children: ReactNode; style?: React.CSSProperties }) {
  const bg = variant === "red" ? "var(--red-bg)" : variant === "grn" ? "var(--grn-bg)" : "var(--card-bg)"
  const border = variant === "red" ? "1.5px solid var(--red-bdr)" : variant === "grn" ? "1.5px solid var(--grn-bdr)" : "1.5px solid var(--border)"
  const textColor = variant === "red" ? "var(--red-txt)" : "var(--muted)"
  return (
    <div style={{ background: bg, border, borderRadius: 10, padding: 20, ...style }}>
      {(icon || title) && (
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          {icon && <Icon variant={variant}>{icon}</Icon>}
          {title && <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700 }}>{title}</h4>}
        </div>
      )}
      <div style={{ fontSize: 14, color: textColor, lineHeight: 1.65 }}>{children}</div>
    </div>
  )
}

function InfoSection({ id, num, sidebarTitle, children }: { id?: string; num: string; sidebarTitle: string; children: ReactNode }) {
  return (
    <section id={id} style={{ padding: "56px 0", borderTop: "1.5px solid var(--border)" }}>
      <div className="ving-wrap">
        <div className="ving-info-grid">
          <div className="ving-sidebar">
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 8 }}>{num}</p>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, lineHeight: 1.3 }}>{sidebarTitle}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>{children}</div>
        </div>
      </div>
    </section>
  )
}

export default function AszfOsszefoglaloPage() {
  const { lang } = useLanguage()
  const safeLang: Lang = lang === "hu" || lang === "en" || lang === "de" ? lang : "en"
  const c = copyByLang[safeLang]

  return (
    <Layout footerStyle={1}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --black: #0d0d0d;
          --white: #f5f4f0;
          --accent: #e8401c;
          --red-bg: #fdf0ec;
          --red-bdr: #f0b8aa;
          --red-txt: #7a2a1a;
          --grn-bg: #f0f7f0;
          --grn-bdr: #b8dab8;
          --grn-ico: #2a7a2a;
          --muted: #6b6b6b;
          --border: #e0ddd8;
          --card-bg: #f9f8f5;
        }

        .ving-root { font-family: 'DM Sans', sans-serif; background: var(--white); color: var(--black); line-height: 1.65; font-size: 16px; }
        .ving-wrap { max-width: 960px; margin: 0 auto; padding: 0 24px; }
        .ving-info-grid { display: grid; grid-template-columns: 220px 1fr; gap: 48px; align-items: start; }
        .ving-sidebar { position: sticky; top: 80px; }
        .ving-steps-outer { overflow-x: auto; margin: 0 -24px; padding: 0 24px 12px; scrollbar-width: none; }
        .ving-steps-outer::-webkit-scrollbar { display: none; }
        .ving-steps { display: grid; grid-template-columns: repeat(6, 1fr); border: 1.5px solid var(--border); border-radius: 12px; overflow: hidden; min-width: 680px; }
        .ving-fee-table { width: 100%; border-collapse: collapse; }
        .ving-fee-table th { text-align: left; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--muted); padding: 9px 14px; background: var(--border); }
        .ving-fee-table td { padding: 11px 14px; border-bottom: 1px solid var(--border); font-size: 14px; color: var(--muted); }
        .ving-fee-table tr:last-child td { border-bottom: none; }
        .ving-fee-table td:first-child { font-weight: 600; color: var(--black); }
        .ving-cards-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        @media (max-width: 640px) {
          .ving-info-grid { display: block; }
          .ving-sidebar { position: static; margin-bottom: 20px; }
          .ving-sidebar div { font-size: 22px !important; }
          .ving-cards-2 { grid-template-columns: 1fr; }
          .ving-fee-table thead { display: none; }
          .ving-fee-table tbody tr { display: flex; flex-direction: column; padding: 12px 0; border-bottom: 1px solid var(--border); }
          .ving-fee-table tbody tr:last-child { border-bottom: none; }
          .ving-fee-table td { display: block; border: none; padding: 0; font-size: 15px; }
          .ving-fee-table td:first-child { font-weight: 600; color: var(--black); margin-bottom: 3px; }
          .ving-fee-table td:last-child { color: var(--accent); font-weight: 600; font-size: 14px; }
        }
      `}</style>

      <div className="ving-root">
        <section style={{ background: "var(--black)", color: "var(--white)", padding: "52px 24px 60px" }}>
          <div className="ving-wrap">
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 14 }}>{c.heroEyebrow}</p>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 6vw, 52px)", lineHeight: 1.1, maxWidth: 620, marginBottom: 16 }}>{c.heroTitle}</h1>
            <p style={{ color: "rgba(245,244,240,.6)", fontSize: 15, maxWidth: 520, lineHeight: 1.7 }}>{c.heroLead}</p>
          </div>
        </section>

        <section style={{ padding: "56px 0 48px" }}>
          <div className="ving-wrap">
            <Eyebrow>{c.labels.process}</Eyebrow>
            <SecTitle>{c.labels.processTitle}</SecTitle>
            <div className="ving-steps-outer">
              <div className="ving-steps">
                {c.steps.map((s) => (
                  <div key={s.num} style={{ padding: "24px 20px", borderRight: "1.5px solid var(--border)" }}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 32, color: "var(--border)", lineHeight: 1, marginBottom: 10 }}>{s.num}</div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.55 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--muted)", marginTop: 10 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#6b6b6b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {c.stepsHint}
            </div>
          </div>
        </section>

        <InfoSection num="02" sidebarTitle={c.sideTitles.usage}>
          <Card variant="grn" icon="✓" title={c.labels.whoCanDrive}>
            <ul style={{ paddingLeft: 18 }}>{c.bullets.whoCanDrive.map((t) => <li key={t} style={{ marginBottom: 5 }}>{t}</li>)}</ul>
          </Card>
          <Card variant="red" icon="✕" title={c.labels.prohibitedUse}>
            <ul style={{ paddingLeft: 18 }}>{c.bullets.prohibitedUse.map((t) => <li key={t} style={{ marginBottom: 5 }}>{t}</li>)}</ul>
          </Card>
          <Card icon="🌍" title={c.labels.borderCross}>{c.paragraphs.borderCross}</Card>
          <Card icon="⛽" title={c.labels.fuel}>{c.paragraphs.fuel}</Card>
        </InfoSection>

        <InfoSection num="03" sidebarTitle={c.sideTitles.insurance}>
          <Card variant="grn" icon="✓" title={c.labels.includedInPrice}>{c.paragraphs.includedInPrice}</Card>
          <Card icon="🛡" title={c.labels.extraInsurance}>{c.paragraphs.extraInsurance}<br /><br /><Badge>{c.badges.warning}</Badge></Card>
          <Card variant="red" icon="!" title={c.labels.insuranceVoid}>
            <ul style={{ paddingLeft: 18 }}>{c.bullets.insuranceVoid.map((t) => <li key={t} style={{ marginBottom: 5 }}>{t}</li>)}</ul>
          </Card>
          <Card icon="⚠️" title={c.labels.insuranceNotCover}>
            <ul style={{ paddingLeft: 18 }}>{c.bullets.insuranceNotCover.map((t) => <li key={t} style={{ marginBottom: 5 }}>{t}</li>)}</ul>
          </Card>
        </InfoSection>

        <InfoSection num="04" sidebarTitle={c.sideTitles.accident}>
          <Card icon="📋" title={c.labels.accidentSteps}>
            <ul style={{ paddingLeft: 18 }}>{c.bullets.accidentSteps.map((t) => <li key={t} style={{ marginBottom: 5 }}>{t}</li>)}</ul>
          </Card>
          <Card variant="red" icon="!" title={c.labels.theftCase}>{c.paragraphs.theftCase}</Card>
        </InfoSection>

        <InfoSection num="05" sidebarTitle={c.sideTitles.return}>
          <Card variant="grn" icon="✓" title={c.labels.properReturn}>
            <ul style={{ paddingLeft: 18 }}>{c.bullets.properReturn.map((t) => <li key={t} style={{ marginBottom: 5 }}>{t}</li>)}</ul>
          </Card>
          <Card variant="red" icon="!" title={c.labels.delayedReturn}>
            <ul style={{ paddingLeft: 18 }}>{c.bullets.delayedReturn.map((t) => <li key={t} style={{ marginBottom: 5 }}>{t}</li>)}</ul>
          </Card>
          <Card icon="🔍" title={c.labels.returnCheck}>{c.paragraphs.returnCheck}</Card>
        </InfoSection>

        <InfoSection num="06" sidebarTitle={c.sideTitles.assistance}>
          <div className="ving-cards-2">
            <Card title={c.labels.standardAssistance}><Badge>{c.badges.warning}</Badge></Card>
            <Card variant="grn" title={c.labels.premiumAssistance}><Badge variant="ok">{c.badges.ok}</Badge></Card>
          </div>
          <Card variant="red" icon="!" title={c.labels.noAssist}>{c.paragraphs.noAssist}</Card>
          <Card icon="📞" title={c.labels.callOnly}><p style={{ fontSize: 20, fontWeight: 600, color: "var(--black)", marginTop: 6, letterSpacing: ".02em" }}>{c.paragraphs.callOnly}</p></Card>
        </InfoSection>

        <InfoSection num="07" sidebarTitle={c.sideTitles.fees}>
          <Card>
            <table className="ving-fee-table">
              <thead>
                <tr><th>{c.labels.feeItem}</th><th>{c.labels.feeAmount}</th></tr>
              </thead>
              <tbody>
                {c.tableFees.map(([label, price]) => (
                  <tr key={label}><td>{label}</td><td>{price}</td></tr>
                ))}
              </tbody>
            </table>
          </Card>
        </InfoSection>

        <InfoSection num="08" sidebarTitle={c.sideTitles.deposit}>
          <Card icon="💳" title={c.labels.depositTitle}>{c.paragraphs.deposit}</Card>
          <Card variant="red" icon="!" title={c.labels.prepaidNoRefund}>{c.paragraphs.prepaidNoRefund}</Card>
        </InfoSection>

        <InfoSection num="09" sidebarTitle={c.sideTitles.data}>
          <Card>{c.paragraphs.data}</Card>
        </InfoSection>

        <InfoSection num="10" sidebarTitle={c.sideTitles.legal}>
          <div className="ving-cards-2">
            <Card><h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 10 }}>HU - {c.labels.huLawTitle}</h4><p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>{c.paragraphs.huLaw}</p></Card>
            <Card><h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 10 }}>AT - {c.labels.atLawTitle}</h4><p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>{c.paragraphs.atLaw}</p></Card>
          </div>
        </InfoSection>

        <div style={{ background: "var(--black)", color: "rgba(245,244,240,.5)", textAlign: "center", padding: "28px 24px", fontSize: 13, marginTop: 72, borderTop: "3px solid var(--accent)" }}>
          <p>{c.labels.disclaimer} <strong style={{ color: "var(--white)" }}>{c.labels.alwaysBinding}</strong><br />{c.paragraphs.disclaimer}</p>
        </div>
      </div>
    </Layout>
  )
}
