"use client"

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/util/LanguageContext"
import type { ReactNode } from "react"

type Lang = "hu" | "en" | "de"

type OperationStep = {
  title: string
  desc: string
}

type TocItem = {
  href: string
  label: string
  highlight?: boolean
}

type Copy = {
  bannerLabel: string
  pageTitle: string
  breadcrumbHome: string
  breadcrumbCurrent: string
  tocTitle: string
  applyMailTitle: string
  applyMailText: string
  applyMailCta: string
  sectionTitles: {
    s1: string
    s2: string
    s3: string
    s4: string
    s5: string
    s6: string
    s7: string 
    s8: string
    sfleet: string
    s9: string
  }
  s1Intro: string
  s1Cards: Array<{ icon: string; title: string; desc: string }>
  s2Intro: string
  s2ListTitle: string
  s2List: string[]
  s2Note: string
  s3Intro: string
  s3Cards: Array<{ icon: string; title: string; desc: string }>
  s3HighlightTitle: string
  s3HighlightText: string
  s4_1: string
  s4_2: string
  s4_3: string
  s4_4: string
  s4Cars: Array<{ icon: string; title: string; desc: string }>
  s4Drives: string[]
  s4VanDrives: string[]
  s4AvailList: string[]
  s5Intro: string
  s5Cards: Array<{ icon: string; title: string; desc: string }>
  s6Steps: OperationStep[]
  s7Intro: string
  s7List: string[]
  s7Outro: string
  s8Text: string
  fleetHeroBig: string
  fleetHeroSub: string
  fleetHeroText: string
  fleetBenefits: Array<{ icon: string; title: string; desc: string }>
  fleetNote: string
  s9Intro: string
  s9List: string[]
  s9Outro: string
  s9HighlightTitle: string
  s9HighlightText: string
  toc: TocItem[]
}

const baseToc: Array<{ href: string; highlight?: boolean }> = [
  { href: "s1" },
  { href: "s2" },
  { href: "s3" },
  { href: "s4" },
  { href: "s5" },
  { href: "s6" },
  { href: "s7" },
  { href: "s8" },
  { href: "sfleet", highlight: true },
  { href: "s9" },
]

const operationHu: OperationStep[] = [
  { title: "Jelentkezés", desc: "A partner e-mailben elküldi a jármű adatait az operation@hydrahorizon.com címre." },
  { title: "Előszűrés", desc: "A VING megvizsgálja a jármű megfelelőségét és piaci illeszkedését." },
  { title: "Személyes egyeztetés", desc: "Jármű bemutatása egy kijelölt átvételi ponton, állapotfelmérés és feltételek ismertetése." },
  { title: "Szerződéskötés", desc: "A felek megállapodnak az együttműködés részleteiben." },
  { title: "Jármű átadása", desc: "A partner átadja a járművet, amelyet a VING előkészít a bérbeadásra és szükség esetén biztosítást köt." },
  { title: "Üzemeltetés", desc: "A VING folyamatosan kezeli és bérbe adja a járművet - a partner csak a bevételt élvezi." },
]

const copyByLang: Record<Lang, Copy> = {
  hu: {
    bannerLabel: "Partnereknek",
    pageTitle: "Bérbeadási Feltételek",
    breadcrumbHome: "Főoldal",
    breadcrumbCurrent: "Bérbeadási Feltételek",
    tocTitle: "Tartalomjegyzék",
    applyMailTitle: "Jelentkezési e-mail",
    applyMailText: "Küldje el jármű adatait az alábbi e-mail címre:",
    applyMailCta: "operation@hydrahorizon.com",
    sectionTitles: {
      s1: "Általános rendelkezések",
      s2: "Jelentkezés és partneri csatlakozás",
      s3: "Partneri korlátozás",
      s4: "Járművekkel szembeni követelmények",
      s5: "Működési modell",
      s6: "Folyamat",
      s7: "Díjazás és elszámolás",
      s8: "Felelősség",
      sfleet: "Flották előnyben",
      s9: "Záró rendelkezések",
    },
    s1Intro: "A VING egy kontrollált, prémium autóbérlési rendszer, amely kizárólag gondosan kiválasztott járművekkel és partnerekkel működik. A jelen dokumentum meghatározza a járművek bérbeadásának feltételeit, a partneri csatlakozás módját és az együttműködés kereteit.",
    s1Cards: [
      { icon: "🛡", title: "Kontrollált rendszer", desc: "Kizárólag ellenőrzött partnerekkel és járművekkel dolgozunk" },
      { icon: "⭐", title: "Prémium minőség", desc: "Minden járműre szigorú minőségi követelmények vonatkoznak" },
      { icon: "🤝", title: "Egyedi elbírálás", desc: "A VING fenntartja a jogot az egyedi döntéshozatalra" },
    ],
    s2Intro: "A VING rendszeréhez történő csatlakozás kizárólag előzetes egyeztetés alapján lehetséges.",
    s2ListTitle: "A jelentkezésnek tartalmaznia kell:",
    s2List: ["Jármű típusa", "Gyártási éve", "Futásteljesítménye", "Meghajtás típusa", "Rendelkezésre állási időszak"],
    s2Note: "A VING nem biztosít automatikus feltöltési vagy listázási lehetőséget.",
    s3Intro: "A VING korlátozott számú járművet fogad be rendszerébe. Az elbírálás során az alábbi szempontokat vesszük figyelembe:",
    s3Cards: [
      { icon: "📈", title: "Piaci kereslet", desc: "Aktuális bérlési igények és tendenciák alapján" },
      { icon: "🚗", title: "Meglévő flotta", desc: "A jelenlegi járműállomány összetétele és teltségi szintje" },
      { icon: "%", title: "Kihasználtság", desc: "Várható bérlési frekvencia és jövedelmezőség" },
    ],
    s3HighlightTitle: "Mit garantálunk a partnereknek?",
    s3HighlightText: "Kizárólag akkor fogadunk be új járművet, ha annak folyamatos bérbeadása üzletileg biztosítható - ezzel garantáljuk a stabil bevételt, a magas kihasználtságot és a rendszer minőségét.",
    s4_1: "A jármű kizárólag kifogástalan, makulátlan állapotban fogadható be. Esztétikai vagy műszaki hiányosság esetén a VING jogosult visszautasítani a járművet.",
    s4_2: "Személygépkocsik esetén: legfeljebb 5 éves és maximum 100 000 km futásteljesítményű jármű fogadható be.",
    s4_3: "A VING előnyben részesíti a kistehergépjárműveket. Feltételek megegyeznek a személygépkocsikéval (max. 5 év, max. 100 000 km), azonban konvencionális meghajtás is elfogadott.",
    s4_4: "A következő 6 hónapon belül legalább 3 hónapnyi összesített rendelkezésre állási idő szükséges.",
    s4Cars: [
      { icon: "📅", title: "Életkor", desc: "Legfeljebb 5 éves jármű" },
      { icon: "🏎", title: "Futásteljesítmény", desc: "Maximum 100 000 km" },
    ],
    s4Drives: ["Elektromos", "Hidrogén", "Hibrid"],
    s4VanDrives: ["Elektromos", "Hibrid", "Konvencionális"],
    s4AvailList: [
      "A következő 6 hónapon belül legalább 3 hónapnyi időtartamban elérhetőnek kell lennie",
      "Nem szükséges folyamatos rendelkezésre állás",
      "Az összesített időszaknak azonban el kell érnie a minimumot",
    ],
    s5Intro: "A VING teljes körű üzemeltetési szolgáltatást biztosít. A partnernek nincs napi operatív feladata - mindent mi intézünk.",
    s5Cards: [
      { icon: "🅿️", title: "Parkolás", desc: "Biztonságos tárolás biztosítva" },
      { icon: "✨", title: "Tisztítás", desc: "Rendszeres karbantartás és mosás" },
      { icon: "⚡", title: "Tankolás / Töltés", desc: "Üzemanyag-kezelés teljes körűen" },
      { icon: "🛡", title: "Biztosítás", desc: "Teljes körű biztosítási fedezet" },
      { icon: "🎧", title: "Ügyfélkezelés", desc: "Bérlői kommunikáció és support" },
      { icon: "📋", title: "Bérbeadás", desc: "A teljes folyamat lebonyolítása" },
    ],
    s6Steps: operationHu,
    s7Intro: "A díjazás egyedi megállapodás alapján kerül meghatározásra, az alábbi tényezők figyelembevételével:",
    s7List: ["Jármű típusa és értékkategóriája", "Rendelkezésre állás időtartama", "Aktuális piaci kereslet", "Várható kihasználtság"],
    s7Outro: "A VING jutalékot számít fel, amelynek mértéke minden esetben előzetesen egyeztetésre kerül a partnerrel.",
    s8Text: "A jármű a bérbeadási időszak alatt a VING kezelésében van. A VING teljes felelősséget vállal az üzemeltetésért, az ügyfélkezelésért és a bérbeadás lebonyolításáért. A részletes felelősségi és biztosítási feltételek a szerződés részét képezik.",
    fleetHeroBig: "10+",
    fleetHeroSub: "járműves flották kiemelten előnyben részesülnek",
    fleetHeroText: "Ha 10 vagy több járműből álló flottával rendelkezik, a VING kiemelt figyelmet és egyedi partneri feltételeket biztosít Önnek.",
    fleetBenefits: [
      { icon: "⚡", title: "Gyorsított elbírálás", desc: "Flottajelentkezések soron kívüli feldolgozása, rövidebb átfutási idő" },
      { icon: "%", title: "Kedvezőbb jutalékfeltételek", desc: "A flotta méretétől függően kedvezőbb bevételmegosztási arányok" },
      { icon: "👔", title: "Dedikált kapcsolattartó", desc: "Kijelölt account manager, aki végig kíséri az együttműködést" },
      { icon: "📊", title: "Részletes riporting", desc: "Rendszeres kihasználtsági és bevételi jelentések a teljes flottáról" },
    ],
    fleetNote: "Flottaajánlathoz vegye fel velünk a kapcsolatot közvetlenül:",
    s9Intro: "A VING célja egy magas minőségű, stabil és jól működő bérlési rendszer kialakítása.",
    s9List: ["Biztosítja a járművek kihasználtságát", "Védi a partnerek érdekeit", "Prémium szolgáltatást nyújt az ügyfelek számára"],
    s9Outro: "A VING fenntartja a jogot a jelentkezések elutasítására, a feltételek módosítására és a partneri kör korlátozására.",
    s9HighlightTitle: "Szeretne partner lenni?",
    s9HighlightText: "Küldje el jármű adatait az operation@hydrahorizon.com e-mail címre, és kollégánk hamarosan felveszi Önnel a kapcsolatot.",
    toc: baseToc.map((x, i) => ({ href: x.href, highlight: x.highlight, label: [
      "1. Általános rendelkezések",
      "2. Jelentkezés és csatlakozás",
      "3. Partneri korlátozás",
      "4. Járművekkel szembeni követelmények",
      "5. Működési modell",
      "6. Folyamat",
      "7. Díjazás és elszámolás",
      "8. Felelősség",
      "★ Flották előnyben",
      "9. Záró rendelkezések",
    ][i] })),
  },
  en: {
    bannerLabel: "For Partners",
    pageTitle: "Partner Rental Terms",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Partner Rental Terms",
    tocTitle: "Table of contents",
    applyMailTitle: "Application e-mail",
    applyMailText: "Send your vehicle details to:",
    applyMailCta: "operation@hydrahorizon.com",
    sectionTitles: {
      s1: "General provisions",
      s2: "Application and onboarding",
      s3: "Partner limitation",
      s4: "Vehicle requirements",
      s5: "Operating model",
      s6: "Process",
      s7: "Compensation and settlement",
      s8: "Liability",
      sfleet: "Fleet priority",
      s9: "Final provisions",
    },
    s1Intro: "VING is a controlled premium car rental system operating only with carefully selected vehicles and partners. This document defines rental terms for partners and cooperation framework.",
    s1Cards: [
      { icon: "🛡", title: "Controlled system", desc: "Only verified partners and vehicles are accepted" },
      { icon: "⭐", title: "Premium quality", desc: "Strict quality standards for every vehicle" },
      { icon: "🤝", title: "Case-by-case review", desc: "VING reserves the right to individual decisions" },
    ],
    s2Intro: "Joining VING is possible only after prior consultation.",
    s2ListTitle: "Application must include:",
    s2List: ["Vehicle type", "Year of manufacture", "Mileage", "Powertrain type", "Availability period"],
    s2Note: "VING does not provide automatic upload/listing options.",
    s3Intro: "VING accepts a limited number of vehicles. Evaluation is based on:",
    s3Cards: [
      { icon: "📈", title: "Market demand", desc: "Current rental demand and trends" },
      { icon: "🚗", title: "Existing fleet", desc: "Current fleet composition and load level" },
      { icon: "%", title: "Utilization", desc: "Expected rental frequency and profitability" },
    ],
    s3HighlightTitle: "What we guarantee to partners",
    s3HighlightText: "New vehicles are accepted only when consistent utilization is business-feasible. This protects stable income, high occupancy and service quality.",
    s4_1: "Vehicle can be accepted only in impeccable technical and cosmetic condition.",
    s4_2: "Passenger cars: max 5 years old and max 100,000 km.",
    s4_3: "Light commercial vehicles are preferred. Same age/mileage limits apply; conventional powertrain is also accepted.",
    s4_4: "Within the next 6 months, at least 3 months total availability is required.",
    s4Cars: [
      { icon: "📅", title: "Age", desc: "Up to 5 years" },
      { icon: "🏎", title: "Mileage", desc: "Up to 100,000 km" },
    ],
    s4Drives: ["Electric", "Hydrogen", "Hybrid"],
    s4VanDrives: ["Electric", "Hybrid", "Conventional"],
    s4AvailList: ["At least 3 months total availability in next 6 months", "Continuous availability is not required", "Total period must reach minimum threshold"],
    s5Intro: "VING provides full-service operations. Partner has no daily operational task.",
    s5Cards: [
      { icon: "🅿️", title: "Parking", desc: "Secure storage provided" },
      { icon: "✨", title: "Cleaning", desc: "Regular cleaning and maintenance" },
      { icon: "⚡", title: "Fuel / Charging", desc: "Handled end-to-end" },
      { icon: "🛡", title: "Insurance", desc: "Comprehensive insurance coverage" },
      { icon: "🎧", title: "Customer handling", desc: "Renter communication and support" },
      { icon: "📋", title: "Rental operations", desc: "Complete process execution" },
    ],
    s6Steps: [
      { title: "Application", desc: "Partner sends vehicle details to operation@hydrahorizon.com." },
      { title: "Pre-screening", desc: "VING checks fit and market potential." },
      { title: "Personal meeting", desc: "Vehicle inspection at designated handover point." },
      { title: "Contracting", desc: "Terms of cooperation are agreed." },
      { title: "Vehicle handover", desc: "Vehicle is prepared for rental; insurance arranged if required." },
      { title: "Operations", desc: "VING manages ongoing rental; partner receives revenue." },
    ],
    s7Intro: "Compensation is defined individually, based on:",
    s7List: ["Vehicle type and value class", "Availability period", "Current market demand", "Expected utilization"],
    s7Outro: "VING charges commission; exact rate is agreed in advance with the partner.",
    s8Text: "During rental period, the vehicle is under VING operation. VING assumes operational and customer-handling responsibility according to contract.",
    fleetHeroBig: "10+",
    fleetHeroSub: "vehicle fleets are strongly preferred",
    fleetHeroText: "If you operate a fleet of 10 or more vehicles, VING offers priority handling and tailored partner terms.",
    fleetBenefits: [
      { icon: "⚡", title: "Fast-track review", desc: "Priority processing with shorter lead time" },
      { icon: "%", title: "Better commission model", desc: "Improved revenue split based on fleet size" },
      { icon: "👔", title: "Dedicated account manager", desc: "Single contact point for the whole cooperation" },
      { icon: "📊", title: "Detailed reporting", desc: "Utilization and revenue reports for full fleet" },
    ],
    fleetNote: "For fleet offers, contact us directly:",
    s9Intro: "VING aims to operate a high-quality, stable and efficient rental ecosystem.",
    s9List: ["Ensures vehicle utilization", "Protects partner interests", "Delivers premium renter experience"],
    s9Outro: "VING reserves the right to reject applications, modify terms and limit partner intake.",
    s9HighlightTitle: "Interested in becoming a partner?",
    s9HighlightText: "Send your vehicle details to operation@hydrahorizon.com and our team will contact you shortly.",
    toc: baseToc.map((x, i) => ({ href: x.href, highlight: x.highlight, label: [
      "1. General provisions",
      "2. Application and onboarding",
      "3. Partner limitation",
      "4. Vehicle requirements",
      "5. Operating model",
      "6. Process",
      "7. Compensation and settlement",
      "8. Liability",
      "★ Fleet priority",
      "9. Final provisions",
    ][i] })),
  },
  de: {
    bannerLabel: "Fuer Partner",
    pageTitle: "Vermietungsbedingungen fuer Partner",
    breadcrumbHome: "Startseite",
    breadcrumbCurrent: "Vermietungsbedingungen",
    tocTitle: "Inhaltsverzeichnis",
    applyMailTitle: "Bewerbungs-E-Mail",
    applyMailText: "Senden Sie die Fahrzeugdaten an:",
    applyMailCta: "operation@hydrahorizon.com",
    sectionTitles: {
      s1: "Allgemeine Bestimmungen",
      s2: "Bewerbung und Aufnahme",
      s3: "Partnerbegrenzung",
      s4: "Fahrzeuganforderungen",
      s5: "Betriebsmodell",
      s6: "Ablauf",
      s7: "Verguetung und Abrechnung",
      s8: "Haftung",
      sfleet: "Flotten werden bevorzugt",
      s9: "Schlussbestimmungen",
    },
    s1Intro: "VING ist ein kontrolliertes Premium-Mietsystem mit sorgfaeltig ausgewaehlten Fahrzeugen und Partnern. Dieses Dokument regelt die Bedingungen der Partnerzusammenarbeit.",
    s1Cards: [
      { icon: "🛡", title: "Kontrolliertes System", desc: "Nur gepruefte Partner und Fahrzeuge" },
      { icon: "⭐", title: "Premium-Qualitaet", desc: "Strenge Qualitaetsanforderungen fuer jedes Fahrzeug" },
      { icon: "🤝", title: "Einzelfallentscheidung", desc: "VING behaelt sich individuelle Entscheidungen vor" },
    ],
    s2Intro: "Die Aufnahme in das VING-System ist nur nach vorheriger Abstimmung moeglich.",
    s2ListTitle: "Die Bewerbung muss enthalten:",
    s2List: ["Fahrzeugtyp", "Baujahr", "Kilometerstand", "Antriebsart", "Verfuegbarkeitszeitraum"],
    s2Note: "VING bietet keine automatische Upload- oder Listungsfunktion.",
    s3Intro: "VING nimmt nur eine begrenzte Anzahl von Fahrzeugen auf. Bewertet wird nach:",
    s3Cards: [
      { icon: "📈", title: "Marktnachfrage", desc: "Aktuelle Nachfrage und Trends" },
      { icon: "🚗", title: "Bestehende Flotte", desc: "Flottenzusammensetzung und Auslastung" },
      { icon: "%", title: "Auslastung", desc: "Erwartete Vermietungsfrequenz und Profitabilitaet" },
    ],
    s3HighlightTitle: "Was wir Partnern garantieren",
    s3HighlightText: "Neue Fahrzeuge werden nur aufgenommen, wenn eine stabile Vermietung wirtschaftlich gesichert ist - fuer verlaessliche Erloese und hohe Auslastung.",
    s4_1: "Fahrzeuge werden nur in einwandfreiem technischen und optischen Zustand akzeptiert.",
    s4_2: "PKW: maximal 5 Jahre und maximal 100.000 km.",
    s4_3: "Transporter werden bevorzugt. Gleiche Alters-/Kilometergrenzen; konventioneller Antrieb ist zulaessig.",
    s4_4: "In den naechsten 6 Monaten muss eine kumulierte Verfuegbarkeit von mindestens 3 Monaten vorliegen.",
    s4Cars: [
      { icon: "📅", title: "Alter", desc: "Bis zu 5 Jahre" },
      { icon: "🏎", title: "Laufleistung", desc: "Bis zu 100.000 km" },
    ],
    s4Drives: ["Elektro", "Wasserstoff", "Hybrid"],
    s4VanDrives: ["Elektro", "Hybrid", "Konventionell"],
    s4AvailList: ["Mindestens 3 Monate Verfuegbarkeit in 6 Monaten", "Keine durchgehende Verfuegbarkeit erforderlich", "Kumulierte Mindestzeit muss erreicht werden"],
    s5Intro: "VING uebernimmt den gesamten operativen Betrieb. Partner haben keinen taeglichen Betriebsaufwand.",
    s5Cards: [
      { icon: "🅿️", title: "Parken", desc: "Sichere Unterbringung" },
      { icon: "✨", title: "Reinigung", desc: "Regelmaessige Pflege" },
      { icon: "⚡", title: "Tanken / Laden", desc: "Vollstaendig abgewickelt" },
      { icon: "🛡", title: "Versicherung", desc: "Umfassender Versicherungsschutz" },
      { icon: "🎧", title: "Kundenservice", desc: "Mieterkommunikation und Support" },
      { icon: "📋", title: "Vermietung", desc: "Komplette Prozessabwicklung" },
    ],
    s6Steps: [
      { title: "Bewerbung", desc: "Fahrzeugdaten per E-Mail an operation@hydrahorizon.com senden." },
      { title: "Vorselektion", desc: "VING prueft Eignung und Marktfahigkeit." },
      { title: "Persoenliche Abstimmung", desc: "Fahrzeugvorstellung und Zustandspruefung am Uebergabepunkt." },
      { title: "Vertrag", desc: "Einzelheiten der Zusammenarbeit werden festgelegt." },
      { title: "Fahrzeuguebergabe", desc: "Fahrzeug wird fuer Vermietung vorbereitet, ggf. versichert." },
      { title: "Betrieb", desc: "VING betreibt und vermietet fortlaufend; Partner erhalten Ertrag." },
    ],
    s7Intro: "Die Verguetung wird individuell anhand folgender Faktoren festgelegt:",
    s7List: ["Fahrzeugtyp und Wertklasse", "Verfuegbarkeitsdauer", "Aktuelle Marktnachfrage", "Erwartete Auslastung"],
    s7Outro: "VING erhebt eine Provision; die Hoehe wird vorab mit dem Partner abgestimmt.",
    s8Text: "Waehrend der Vermietung befindet sich das Fahrzeug im operativen Verantwortungsbereich von VING gemaess Vertrag.",
    fleetHeroBig: "10+",
    fleetHeroSub: "Fahrzeugflotten werden klar bevorzugt",
    fleetHeroText: "Bei Flotten mit 10 oder mehr Fahrzeugen bietet VING priorisierte Bearbeitung und individuelle Partnerkonditionen.",
    fleetBenefits: [
      { icon: "⚡", title: "Schnellere Pruefung", desc: "Priorisierte Bearbeitung mit kuerzerer Durchlaufzeit" },
      { icon: "%", title: "Bessere Provisionsstruktur", desc: "Verbesserte Aufteilung je nach Flottengroesse" },
      { icon: "👔", title: "Dedizierter Ansprechpartner", desc: "Persoenlicher Account Manager" },
      { icon: "📊", title: "Detailliertes Reporting", desc: "Regelmaessige Auslastungs- und Umsatzberichte" },
    ],
    fleetNote: "Fuer Flottenangebote kontaktieren Sie uns direkt:",
    s9Intro: "VING verfolgt den Aufbau eines hochwertigen, stabilen und effizienten Mietsystems.",
    s9List: ["Sichert hohe Auslastung", "Schuetzt Partnerinteressen", "Bietet Premium-Service fuer Kunden"],
    s9Outro: "VING behaelt sich vor, Bewerbungen abzulehnen, Bedingungen anzupassen und Partnerkontingente zu steuern.",
    s9HighlightTitle: "Partner werden?",
    s9HighlightText: "Senden Sie die Fahrzeugdaten an operation@hydrahorizon.com - wir melden uns zeitnah.",
    toc: baseToc.map((x, i) => ({ href: x.href, highlight: x.highlight, label: [
      "1. Allgemeine Bestimmungen",
      "2. Bewerbung und Aufnahme",
      "3. Partnerbegrenzung",
      "4. Fahrzeuganforderungen",
      "5. Betriebsmodell",
      "6. Ablauf",
      "7. Verguetung und Abrechnung",
      "8. Haftung",
      "★ Flotten werden bevorzugt",
      "9. Schlussbestimmungen",
    ][i] })),
  },
}

function SectionTitle({ num, children, starIcon }: { num: string; children: ReactNode; starIcon?: boolean }) {
  return (
    <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--brand-dark)", paddingBottom: 12, borderBottom: "2px solid var(--brand-gray)", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ background: "var(--brand-orange)", color: "#fff", fontSize: ".78rem", fontWeight: 800, width: 28, height: 28, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {starIcon ? "★" : num}
      </span>
      {children}
    </h2>
  )
}

function SubTitle({ children }: { children: ReactNode }) {
  return <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--brand-dark)", margin: "20px 0 10px" }}>{children}</h3>
}

function Para({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return <p style={{ color: "#444", lineHeight: 1.75, fontSize: ".93rem", ...style }}>{children}</p>
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item) => (
        <li key={item} style={{ padding: "6px 0 6px 28px", position: "relative", color: "#444", fontSize: ".9rem", lineHeight: 1.5 }}>
          <span style={{ position: "absolute", left: 0, top: 7, color: "var(--brand-orange)", fontSize: ".75rem", fontWeight: 900 }}>✓</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function InfoCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div style={{ background: "var(--brand-gray)", borderRadius: 10, padding: "18px 16px", borderTop: "3px solid var(--brand-orange)" }}>
      <div style={{ fontSize: "1.4rem", color: "var(--brand-orange)", marginBottom: 8 }}>{icon}</div>
      <strong style={{ display: "block", fontSize: ".88rem", color: "var(--brand-dark)", fontWeight: 700, marginBottom: 4 }}>{title}</strong>
      <span style={{ fontSize: ".83rem", color: "#666", lineHeight: 1.45 }}>{desc}</span>
    </div>
  )
}

function InfoGrid({ cols = 3, children }: { cols?: 2 | 3; children: ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: cols === 2 ? "repeat(auto-fit, minmax(220px, 1fr))" : "repeat(auto-fit, minmax(170px, 1fr))", gap: 14, marginTop: 16 }}>
      {children}
    </div>
  )
}

function BadgePt({ icon, label }: { icon: string; label: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--brand-dark)", color: "#fff", borderRadius: 20, padding: "5px 13px", fontSize: ".78rem", fontWeight: 600, margin: 3 }}>
      <span style={{ color: "var(--brand-orange)" }}>{icon}</span> {label}
    </span>
  )
}

function HighlightBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ background: "linear-gradient(135deg, var(--brand-dark), var(--brand-navy))", color: "#fff", borderRadius: 12, padding: "28px 30px", marginTop: 20 }}>
      <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-orange)", marginBottom: 10 }}>{title}</h4>
      <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,.85)", margin: 0 }}>{children}</p>
    </div>
  )
}

function TocSidebar({ active, toc, c }: { active: string; toc: TocItem[]; c: Copy }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div>
      <div style={{ background: "var(--brand-gray)", borderRadius: 12, padding: "28px 24px", position: "sticky", top: 85, borderLeft: "4px solid var(--brand-orange)" }}>
        <h6 style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--brand-orange)", marginBottom: 16 }}>{c.tocTitle}</h6>
        {toc.map((item) => {
          const isActive = active === item.href
          return (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: item.highlight ? "var(--brand-orange)" : isActive ? "var(--brand-orange)" : "var(--brand-dark)",
                fontWeight: item.highlight || isActive ? 700 : 400,
                fontSize: ".87rem",
                padding: isActive ? "7px 0 7px 14px" : "7px 0 7px 10px",
                borderLeft: isActive ? "2px solid var(--brand-orange)" : "2px solid transparent",
                transition: "all .2s",
                lineHeight: 1.3,
              }}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <div style={{ background: "var(--brand-dark)", borderRadius: 12, padding: "28px 24px", color: "#fff", marginTop: 24 }}>
        <h6 style={{ color: "var(--brand-orange)", fontSize: ".75rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>{c.applyMailTitle}</h6>
        <p style={{ fontSize: ".84rem", color: "rgba(255,255,255,.7)", marginBottom: 12 }}>{c.applyMailText}</p>
        <a href="mailto:operation@hydrahorizon.com" style={{ color: "var(--brand-orange)", fontWeight: 700, wordBreak: "break-all", fontSize: ".9rem", textDecoration: "none" }}>
          ✉ {c.applyMailCta}
        </a>
      </div>
    </div>
  )
}

export default function PartnerTermsPage() {
  const { lang } = useLanguage()
  const safeLang: Lang = lang === "hu" || lang === "en" || lang === "de" ? lang : "en"
  const c = copyByLang[safeLang]

  const [activeSection, setActiveSection] = useState("s1")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-30% 0px -60% 0px" }
    )

    c.toc.forEach(({ href }) => {
      const el = document.getElementById(href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [c.toc])

  const sectionProps = (id: string) => ({ id, style: { marginBottom: 52, scrollMarginTop: 90 } })

  return (
    <Layout footerStyle={1}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --brand-orange: #e8a427;
          --brand-dark: #0d0d2b;
          --brand-navy: #1a1a3e;
          --brand-gray: #f5f5f8;
        }

        .pt-root { font-family: 'DM Sans', 'Segoe UI', system-ui, sans-serif; color: #222; background: #fff; }
        .pt-banner { background: linear-gradient(120deg, var(--brand-dark) 60%, var(--brand-navy) 100%); color: #fff; padding: 72px 24px 60px; position: relative; overflow: hidden; }
        .pt-banner::before { content: ''; position: absolute; inset: 0; background: url('/assets/imgs/page-header/banner5.png') center/cover no-repeat; opacity: .14; pointer-events: none; }
        .pt-banner-inner { max-width: 960px; margin: 0 auto; position: relative; }
        .pt-banner-label { color: var(--brand-orange); font-weight: 700; font-size: .8rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; }
        .pt-banner h1 { font-family: 'Syne', sans-serif; font-size: clamp(1.7rem, 4vw, 2.4rem); font-weight: 800; margin-bottom: 12px; }
        .pt-breadcrumb { display: flex; gap: 8px; align-items: center; font-size: .87rem; }
        .pt-breadcrumb a { color: rgba(255,255,255,.65); text-decoration: none; }
        .pt-breadcrumb a:hover { color: var(--brand-orange); }
        .pt-breadcrumb span { color: rgba(255,255,255,.4); }
        .pt-breadcrumb .active { color: var(--brand-orange); }

        .pt-content { padding: 60px 24px 80px; }
        .pt-inner { max-width: 960px; margin: 0 auto; }
        .pt-row { display: grid; grid-template-columns: 260px 1fr; gap: 48px; align-items: start; }

        .pt-steps { display: flex; flex-direction: column; gap: 0; margin-top: 12px; }
        .pt-step { display: flex; gap: 20px; padding-bottom: 28px; position: relative; }
        .pt-step:not(:last-child)::after { content: ''; position: absolute; left: 18px; top: 40px; bottom: 0; width: 2px; background: var(--brand-gray); }
        .pt-step-num { width: 38px; height: 38px; flex-shrink: 0; background: var(--brand-dark); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-weight: 800; font-size: .85rem; z-index: 1; }
        .pt-step-body strong { display: block; font-size: .95rem; font-weight: 700; color: var(--brand-dark); margin-bottom: 4px; }
        .pt-step-body span { font-size: .87rem; color: #555; line-height: 1.55; }

        .fleet-hero { background: linear-gradient(135deg, #e8a427 0%, #c98c1a 100%); border-radius: 14px; padding: 30px 32px; color: #fff; margin-bottom: 24px; }
        .fleet-hero .big-num { font-family: 'Syne', sans-serif; font-size: 2.8rem; font-weight: 900; line-height: 1; margin-bottom: 4px; }
        .fleet-hero .sub { font-size: 1.05rem; font-weight: 700; margin-bottom: 10px; }
        .fleet-hero p { font-size: .9rem; color: rgba(255,255,255,.88); margin: 0; }

        @media (max-width: 768px) {
          .pt-row { grid-template-columns: 1fr; }
          .pt-banner { padding: 48px 20px 40px; }
        }
      `}</style>

      <div className="pt-root">
        <section className="pt-banner">
          <div className="pt-banner-inner">
            <p className="pt-banner-label">{c.bannerLabel}</p>
            <h1>{c.pageTitle}</h1>
            <nav className="pt-breadcrumb">
              <Link href="/">{c.breadcrumbHome}</Link>
              <span>/</span>
              <span className="active">{c.breadcrumbCurrent}</span>
            </nav>
          </div>
        </section>

        <section className="pt-content">
          <div className="pt-inner">
            <div className="pt-row">
              <div>
                <TocSidebar active={activeSection} toc={c.toc} c={c} />
              </div>

              <div>
                <div {...sectionProps("s1")}> 
                  <SectionTitle num="1">{c.sectionTitles.s1}</SectionTitle>
                  <Para>{c.s1Intro}</Para>
                  <InfoGrid cols={3}>
                    {c.s1Cards.map((card) => <InfoCard key={card.title} icon={card.icon} title={card.title} desc={card.desc} />)}
                  </InfoGrid>
                </div>

                <div {...sectionProps("s2")}>
                  <SectionTitle num="2">{c.sectionTitles.s2}</SectionTitle>
                  <Para>{c.s2Intro} <a href="mailto:operation@hydrahorizon.com" style={{ color: "var(--brand-orange)", fontWeight: 600 }}>operation@hydrahorizon.com</a></Para>
                  <SubTitle>{c.s2ListTitle}</SubTitle>
                  <CheckList items={c.s2List} />
                  <Para style={{ marginTop: 12 }}><span style={{ color: "var(--brand-orange)" }}>ℹ</span> {c.s2Note}</Para>
                </div>

                <div {...sectionProps("s3")}>
                  <SectionTitle num="3">{c.sectionTitles.s3}</SectionTitle>
                  <Para>{c.s3Intro}</Para>
                  <InfoGrid cols={3}>
                    {c.s3Cards.map((card) => <InfoCard key={card.title} icon={card.icon} title={card.title} desc={card.desc} />)}
                  </InfoGrid>
                  <HighlightBox title={c.s3HighlightTitle}>{c.s3HighlightText}</HighlightBox>
                </div>

                <div {...sectionProps("s4")}>
                  <SectionTitle num="4">{c.sectionTitles.s4}</SectionTitle>
                  <SubTitle>4.1</SubTitle>
                  <Para>{c.s4_1}</Para>
                  <SubTitle>4.2</SubTitle>
                  <Para>{c.s4_2}</Para>
                  <InfoGrid cols={2}>
                    {c.s4Cars.map((card) => <InfoCard key={card.title} icon={card.icon} title={card.title} desc={card.desc} />)}
                  </InfoGrid>
                  <Para style={{ marginTop: 16, marginBottom: 8 }}><strong>{safeLang === "hu" ? "Elfogadott meghajtástípusok:" : safeLang === "en" ? "Accepted powertrains:" : "Zugelassene Antriebsarten:"}</strong></Para>
                  <div>{c.s4Drives.map((d) => <BadgePt key={d} icon="⚙" label={d} />)}</div>
                  <SubTitle>4.3</SubTitle>
                  <Para>{c.s4_3}</Para>
                  <div>{c.s4VanDrives.map((d) => <BadgePt key={d} icon="⚙" label={d} />)}</div>
                  <SubTitle>4.4</SubTitle>
                  <Para>{c.s4_4}</Para>
                  <CheckList items={c.s4AvailList} />
                </div>

                <div {...sectionProps("s5")}>
                  <SectionTitle num="5">{c.sectionTitles.s5}</SectionTitle>
                  <Para>{c.s5Intro}</Para>
                  <InfoGrid cols={3}>
                    {c.s5Cards.map((card) => <InfoCard key={card.title} icon={card.icon} title={card.title} desc={card.desc} />)}
                  </InfoGrid>
                </div>

                <div {...sectionProps("s6")}>
                  <SectionTitle num="6">{c.sectionTitles.s6}</SectionTitle>
                  <div className="pt-steps">
                    {c.s6Steps.map((s, i) => (
                      <div key={`${s.title}-${i}`} className="pt-step">
                        <div className="pt-step-num">{i + 1}</div>
                        <div className="pt-step-body">
                          <strong>{s.title}</strong>
                          <span>{s.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div {...sectionProps("s7")}>
                  <SectionTitle num="7">{c.sectionTitles.s7}</SectionTitle>
                  <Para>{c.s7Intro}</Para>
                  <CheckList items={c.s7List} />
                  <Para style={{ marginTop: 12 }}>{c.s7Outro}</Para>
                </div>

                <div {...sectionProps("s8")}>
                  <SectionTitle num="8">{c.sectionTitles.s8}</SectionTitle>
                  <Para>{c.s8Text}</Para>
                </div>

                <div {...sectionProps("sfleet")}>
                  <SectionTitle num="★" starIcon>{c.sectionTitles.sfleet}</SectionTitle>
                  <div className="fleet-hero">
                    <div className="big-num">{c.fleetHeroBig}</div>
                    <div className="sub">{c.fleetHeroSub}</div>
                    <p>{c.fleetHeroText}</p>
                  </div>
                  <InfoGrid cols={2}>
                    {c.fleetBenefits.map((card) => <InfoCard key={card.title} icon={card.icon} title={card.title} desc={card.desc} />)}
                  </InfoGrid>
                  <Para style={{ marginTop: 16, fontSize: ".9rem", color: "#555" }}>
                    <span style={{ color: "var(--brand-orange)" }}>ℹ</span> {c.fleetNote} <a href="mailto:operation@hydrahorizon.com" style={{ color: "var(--brand-orange)", fontWeight: 600 }}>operation@hydrahorizon.com</a>
                  </Para>
                </div>

                <div {...sectionProps("s9")}>
                  <SectionTitle num="9">{c.sectionTitles.s9}</SectionTitle>
                  <Para>{c.s9Intro}</Para>
                  <CheckList items={c.s9List} />
                  <Para style={{ marginTop: 12 }}>{c.s9Outro}</Para>
                  <HighlightBox title={c.s9HighlightTitle}>{c.s9HighlightText}</HighlightBox>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
