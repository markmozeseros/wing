"use client"

import Layout from "@/components/layout/Layout"
import { useLanguage } from "@/util/LanguageContext"

type Lang = "hu" | "en" | "de"

type Section = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

type PageContent = {
  title: string
  subtitle: string
  sections: Section[]
  ageTableHeaders: string[]
  depositTableHeaders: string[]
  deductibleTableHeaders: string[]
  reducedDeductibleTableHeaders: string[]
  ageIntro: string
  depositIntro: string
  deductibleIntro: string
  reducedDeductibleIntro: string
  closing: string
}

const ageRules = [
  ["21", "Legalább 1 év", "XYZ"],
  ["25", "Legalább 1 év", "XYZ"],
  ["25", "Legalább 2 év", "XYZ"],
  ["30", "Legalább 2 év", "XYZ"],
]

const depositRules = [
  ["XYZ", "Bérleti díj + 300,00 EUR"],
  ["XYZ", "Bérleti díj + 500,00 EUR"],
  ["XYZ", "Bérleti díj + 1200,00 EUR"],
  ["XYZ", "Bérleti díj + 1800,00 EUR"],
]

const deductibleRules = [
  ["XYZ", "1.000,00 EUR"],
  ["XYZ", "1.100,00 EUR"],
  ["XYZ", "1.500,00 EUR"],
  ["XYZ", "1.700,00 EUR"],
  ["XYZ", "2.000,00 EUR"],
  ["XYZ", "2.500,00 EUR"],
  ["XYZ", "3.000,00 EUR"],
  ["XYZ", "3.900,00 EUR"],
]

const reducedDeductibleRules = [
  ["XYZ", "500,00 EUR"],
  ["XYZ", "550,00 EUR"],
  ["XYZ", "750,00 EUR"],
  ["XYZ", "850,00 EUR"],
  ["XYZ", "1.000,00 EUR"],
  ["XYZ", "1.250,00 EUR"],
  ["XYZ", "1.500,00 EUR"],
  ["XYZ", "1.950,00 EUR"],
]

const contentByLang: Record<Lang, PageContent> = {
  hu: {
    title: "VING autóbérlési feltételek - Magyarország",
    subtitle: "Személyautó - Általános bérlési feltételek",
    sections: [
      {
        title: "Általános Bérlési Információk",
        paragraphs: [
          "A bérlő és valamennyi jóváhagyott vezető köteles érvényes, teljes jogú vezetői engedéllyel rendelkezni, amelyet legalább 1 éve állítottak ki. Az engedélyt a jármű átvételekor személyazonossági igazolvánnyal vagy útlevéllel együtt kell bemutatni.",
          "Valamennyi EU-tagállam érvényes vezetői engedélyét elfogadjuk. A nem latin betűkkel nyomtatott vezetői engedélyeket érvényes Nemzetközi Gépjárművezetői Engedéllyel kell kísérni.",
          "Fénymásolatok, digitális engedélyek, tanulói engedélyek és vezetési korlátozással rendelkező jogosítványok nem fogadhatók el.",
          "A bérelt autót legfeljebb 60 percig tartjuk fenn. Indokolt esetekben fenntartjuk a jogot az autókategória megváltoztatására, és elérhetetlenség esetén magasabb kategóriájú járművet biztosítunk.",
        ],
        bullets: [
          "Minimum életkor: általánosan 21 év (legalább 1 éve megszerzett jogosítvánnyal).",
          "25 év alatti fiatal vezetők esetén pótdíj kerül felszámításra.",
        ],
      },
      {
        title: "Díjszabási Információk",
        paragraphs: [
          "A szerződés aláírásával elfogadja, hogy a fizetés után kizárólag elektronikus számlát kap.",
          "Elfogadott kártyák: Eurocard/Mastercard, AmericanExpress, VISA. Előre fizetett kártyák, Revolut/Wise, Google Pay/Apple Pay és készpénzes fizetés nem elfogadott.",
          "A fizetési eszköznek a vezető nevére kell szólnia, érvényesnek kell lennie, és a bérleti díjat, kiegészítőket és járulékos díjakat is terhelhetik rá.",
          "Előre fizetett díjszabásnál a teljes díj előre fizetendő; visszatérítés nem jár vissza nem vett jármű, késő átvétel vagy korai visszahozatal esetén.",
        ],
        bullets: [
          "Előre fizetett foglalás módosítása legkésőbb 48 órával indulás előtt, 25,40 EUR díj ellenében.",
          "Lemondás esetén visszatérítésből legfeljebb 3 bérlési nap díja levonható.",
          "Meg nem jelenés esetén a teljes előre fizetett bérleti díj visszatartásra kerül.",
        ],
      },
      {
        title: "Védelmi Feltételek",
        paragraphs: [
          "A kötelező felelősségbiztosítás (TI) korlátlan fedezetet nyújt személyi sérülésekre és anyagi károkra, kivéve a szerződésben rögzített kizárásokat.",
          "Az LDW elfogadása esetén a bérlő önrészig felel. LDW nélkül a jármű teljes értékéért felel.",
          "LDW csökkentett önrésszel (BE) és minimális önrésszel (BF) opciók elérhetők a díjszabás szerint.",
          "PAP és SPAP balesetvédelmi opciók, TG gumi- és szélvédő biztosítás, BC útszéli segítségnyújtás és opcionális belső védelem érhető el.",
        ],
      },
      {
        title: "Határon Átnyúló Bérlések és Területi Korlátozások",
        paragraphs: [
          "Határon átnyúló bérlés több európai országban engedélyezett. Egyes országokba csak meghatározott autókategóriákkal lehet utazni.",
          "Minden külföldi utat a VING állomáson be kell jelenteni.",
        ],
        bullets: [
          "Bejelentés nélküli határátlépés esetén 150,00 EUR adminisztrációs díj kerül felszámításra a napi díjon felül.",
        ],
      },
      {
        title: "Kiegészítők és Extras",
        paragraphs: [
          "Elérhető opciók: téli felszerelés, egyirányú bérlés, navigáció, pótvezető, baba- és gyerekülés, kiszállítás és visszavétel.",
          "Tankolás: az autó teli tankkal kerül átadásra és teli tankkal kell visszahozni; eltérés esetén üzemanyag- és szolgáltatási díj kerül felszámításra.",
          "Elektromos járműveknél a töltöttségi szintet átvételkor és visszahozatalkor rögzítik; hiányos töltés esetén kWh díj fizetendő.",
        ],
      },
      {
        title: "Egyéb Díjak és Adók",
        paragraphs: [
          "Prémium helyszíni díj, nyitvatartási időn kívüli díj, bírság adminisztrációs díja, járműengedélydíj/regisztrációs díj, szerződési díj és állásidő díj alkalmazható.",
          "Elektromos vagy plug-in hibrid jármű töltőkábelének elvesztése/megrongálódása esetén csereköltség terheli a bérlőt.",
        ],
      },
      {
        title: "Flexi Visszahozatali Garancia",
        paragraphs: [
          "A VING Flexi Visszahozatali Garanciával a jármű bármikor visszahozható bármelyik engedélyezett VING állomásra.",
          "Korai visszahozatalnál a díjszabás típusa szerint részleges kedvezmény vagy nem visszatéríthető díj alkalmazható.",
          "Késő visszahozatalnál extra napok és Flexi díj számítható fel, ha nincs előzetes értesítés.",
          "Eltérő állomásra visszahozatal előzetes értesítés nélkül külön díjköteles.",
        ],
      },
    ],
    ageTableHeaders: ["Minimum életkor", "Jogosítvány feltétele", "Autókategória"],
    depositTableHeaders: ["Autókategória", "Óvadék összege (EUR)"],
    deductibleTableHeaders: ["Autókategória", "Önrész"],
    reducedDeductibleTableHeaders: ["Autókategória", "Önrész"],
    ageIntro: "Magyarországon a minimális életkorra és a jogosítvány meglétére az alábbi szabályok vonatkoznak:",
    depositIntro: "Az óvadék összege az autókategóriától függően:",
    deductibleIntro: "LDW elfogadása esetén az ügyfél az alábbi összegekig felelős:",
    reducedDeductibleIntro: "Csökkentett önrésszel rendelkező LDW esetén az ügyfél az alábbi összegekig felelős:",
    closing: "Minden díj tartalmazza az ÁFÁ-t (ahol alkalmazandó). Egyéni megállapodással rendelkező vállalati ügyfelek esetén eltérő árak és feltételek alkalmazhatók.",
  },
  en: {
    title: "VING Car Rental Terms - Hungary",
    subtitle: "Passenger Cars - General Rental Conditions",
    sections: [
      {
        title: "General Rental Information",
        paragraphs: [
          "The renter and all approved drivers must hold a valid full driving license issued at least 1 year ago, and present it together with an ID card or passport at pick-up.",
          "All valid EU licenses are accepted. Licenses printed in non-Latin script must be accompanied by a valid International Driving Permit.",
          "Photocopies, digital licenses, learner permits and restricted licenses are not accepted.",
          "Vehicles are held for up to 60 minutes. In justified cases, VING may change the booked category and provide a higher category vehicle if needed.",
        ],
        bullets: [
          "General minimum age in Hungary is 21 years with at least 1 year of license history.",
          "Young driver surcharge applies under 25 years.",
        ],
      },
      {
        title: "Pricing Information",
        paragraphs: [
          "By signing the contract, you accept receiving electronic invoices only.",
          "Accepted cards: Eurocard/Mastercard, AmericanExpress and VISA. Prepaid cards, Revolut/Wise, Google Pay/Apple Pay and cash are not accepted.",
          "The payment card must be in the main driver's name and valid at pick-up.",
          "For prepaid rates, full rental charges are collected before pick-up.",
        ],
        bullets: [
          "Prepaid booking changes are allowed up to 48 hours before rental start for a 25.40 EUR change fee.",
          "Cancellation may be subject to a fee up to 3 rental days.",
          "No-show cases retain the prepaid amount.",
        ],
      },
      {
        title: "Protection Conditions",
        paragraphs: [
          "Mandatory liability insurance (TI) is included, subject to contractual exclusions.",
          "With LDW accepted, liability is limited to excess amounts. Without LDW, liability may extend to full vehicle value.",
          "Reduced/minimum excess options may be available depending on rate plan.",
          "Optional products include PAP/SPAP, tire and windshield cover (TG), roadside assistance (BC), and interior protection.",
        ],
      },
      {
        title: "Cross-Border Rentals and Territorial Restrictions",
        paragraphs: [
          "Cross-border use is allowed in selected countries. Some destinations are restricted to specific vehicle categories.",
          "All foreign travel must be declared at the VING station in advance.",
        ],
        bullets: [
          "Undeclared border crossing is charged with an additional 150.00 EUR administration fee plus daily charge.",
        ],
      },
      {
        title: "Add-ons and Extras",
        paragraphs: [
          "Available options include winter equipment, one-way rental, navigation, additional driver, child seats, and delivery/collection.",
          "Fuel policy: full-to-full. If returned with less fuel, refueling and service fees apply.",
          "For EVs, charge level is recorded at pick-up and return; missing charge is billed per kWh.",
        ],
      },
      {
        title: "Other Fees and Taxes",
        paragraphs: [
          "Additional charges may include premium location fee, out-of-hours service fee, fine administration fee, registration/permit fees, contract fee and downtime fee.",
          "Lost or damaged charging cable for EV/PHEV vehicles is charged to the renter.",
        ],
      },
      {
        title: "Flexi Return Guarantee",
        paragraphs: [
          "With Flexi Return Guarantee, you may return the vehicle to any authorized VING station.",
          "Early return treatment depends on rate type.",
          "Late return may result in additional day charges and Flexi return fees if extension is not reported.",
          "Returning to a different station without prior notice may incur an extra fee.",
        ],
      },
    ],
    ageTableHeaders: ["Minimum Age", "License Condition", "Vehicle Category"],
    depositTableHeaders: ["Vehicle Category", "Deposit Amount (EUR)"],
    deductibleTableHeaders: ["Vehicle Category", "Excess"],
    reducedDeductibleTableHeaders: ["Vehicle Category", "Excess"],
    ageIntro: "The following minimum age and driving license rules apply in Hungary:",
    depositIntro: "Deposit amounts by vehicle category:",
    deductibleIntro: "If LDW is accepted, customer liability is limited to the following amounts:",
    reducedDeductibleIntro: "If reduced-excess LDW is accepted, customer liability is limited to the following amounts:",
    closing: "All fees include VAT where applicable. Different prices and conditions may apply for corporate clients with individual agreements.",
  },
  de: {
    title: "VING Mietbedingungen - Ungarn",
    subtitle: "PKW - Allgemeine Mietbedingungen",
    sections: [
      {
        title: "Allgemeine Mietinformationen",
        paragraphs: [
          "Der Mieter und alle zusaetzlichen Fahrer muessen einen gueltigen Fuehrerschein besitzen, der seit mindestens 1 Jahr ausgestellt ist, und diesen bei Abholung mit Ausweis oder Reisepass vorlegen.",
          "Alle gueltigen EU-Fuehrerscheine werden akzeptiert. Nicht-lateinische Fuehrerscheine muessen mit einem Internationalen Fuehrerschein vorgelegt werden.",
          "Kopien, digitale Fuehrerscheine, Lernfuehrerscheine und eingeschraenkte Fuehrerscheine werden nicht akzeptiert.",
          "Das Fahrzeug wird bis zu 60 Minuten bereitgehalten. Bei Bedarf kann VING die Fahrzeugkategorie aendern und ggf. ein hoeheres Segment bereitstellen.",
        ],
        bullets: [
          "Allgemeines Mindestalter in Ungarn: 21 Jahre und mindestens 1 Jahr Fuehrerscheinbesitz.",
          "Fuer Fahrer unter 25 Jahren wird ein Zuschlag berechnet.",
        ],
      },
      {
        title: "Preis- und Zahlungsinformationen",
        paragraphs: [
          "Mit Unterzeichnung akzeptieren Sie den Erhalt elektronischer Rechnungen.",
          "Akzeptierte Karten: Eurocard/Mastercard, AmericanExpress und VISA. Prepaid-Karten, Revolut/Wise, Google Pay/Apple Pay und Bargeld werden nicht akzeptiert.",
          "Das Zahlungsmittel muss auf den Hauptfahrer ausgestellt und bei Abholung gueltig sein.",
          "Bei Prepaid-Tarifen wird der Gesamtbetrag vor Mietbeginn belastet.",
        ],
        bullets: [
          "Aenderung von Prepaid-Buchungen bis 48 Stunden vor Mietbeginn gegen 25,40 EUR moeglich.",
          "Bei Stornierung kann eine Gebuehr bis zu 3 Miettagen einbehalten werden.",
          "Bei No-Show wird der bezahlte Betrag einbehalten.",
        ],
      },
      {
        title: "Schutzbedingungen",
        paragraphs: [
          "Die gesetzliche Haftpflichtversicherung (TI) ist enthalten, vorbehaltlich vertraglicher Ausschluesse.",
          "Mit LDW ist die Haftung auf den Selbstbehalt begrenzt; ohne LDW kann Haftung bis zum vollen Fahrzeugwert bestehen.",
          "Reduzierter oder minimaler Selbstbehalt kann je nach Tarif verfuegbar sein.",
          "Optionale Produkte: PAP/SPAP, Reifen- und Glas-Schutz (TG), Pannenhilfe (BC), Innenraumschutz.",
        ],
      },
      {
        title: "Grenzueberschreitende Mieten und Gebietsbeschraenkungen",
        paragraphs: [
          "Grenzfahrten sind in ausgewaehlten Laendern erlaubt. Fuer manche Ziele gelten Fahrzeugkategorie-Beschraenkungen.",
          "Auslandsfahrten muessen vorab an der VING-Station gemeldet werden.",
        ],
        bullets: [
          "Nicht gemeldete Grenzuebertritte werden mit 150,00 EUR Verwaltungsgebuehr zzgl. Tagesgebuehr belastet.",
        ],
      },
      {
        title: "Zusaetzliche Leistungen",
        paragraphs: [
          "Verfuegbare Extras: Winterausruestung, Einwegmiete, Navigation, Zusatzfahrer, Kindersitze sowie Zustellung/Ruecknahme.",
          "Tankregelung: voll/voll. Bei geringerer Rueckgabe werden Kraftstoff- und Servicekosten berechnet.",
          "Bei Elektrofahrzeugen wird der Ladezustand dokumentiert; fehlende Ladung wird pro kWh berechnet.",
        ],
      },
      {
        title: "Weitere Gebuehren und Steuern",
        paragraphs: [
          "Zusaetzliche Entgelte koennen Premium-Standortgebuehr, Gebuehr ausserhalb der Oeffnungszeiten, Bussgeld-Bearbeitung, Zulassungsgebuehren, Vertragsgebuehr und Ausfallzeit umfassen.",
          "Verlust oder Beschaedigung von EV/PHEV-Ladekabeln wird dem Mieter berechnet.",
        ],
      },
      {
        title: "Flexi Rueckgabegarantie",
        paragraphs: [
          "Mit Flexi Rueckgabe kann das Fahrzeug an jeder autorisierten VING-Station abgegeben werden.",
          "Bei frueher Rueckgabe gelten tarifabhaengige Regeln.",
          "Bei spaeter Rueckgabe koennen Zusatzkosten und Flexi-Gebuehren anfallen, wenn keine Verlaengerung gemeldet wurde.",
          "Rueckgabe an einer anderen Station ohne Vorankuendigung kann zusaetzlich berechnet werden.",
        ],
      },
    ],
    ageTableHeaders: ["Mindestalter", "Fuehrerschein-Bedingung", "Fahrzeugkategorie"],
    depositTableHeaders: ["Fahrzeugkategorie", "Kautionsbetrag (EUR)"],
    deductibleTableHeaders: ["Fahrzeugkategorie", "Selbstbehalt"],
    reducedDeductibleTableHeaders: ["Fahrzeugkategorie", "Selbstbehalt"],
    ageIntro: "In Ungarn gelten folgende Regeln fuer Mindestalter und Fuehrerscheinbesitz:",
    depositIntro: "Kautionsbetraege nach Fahrzeugkategorie:",
    deductibleIntro: "Bei akzeptiertem LDW ist die Haftung auf folgende Betraege begrenzt:",
    reducedDeductibleIntro: "Bei LDW mit reduziertem Selbstbehalt ist die Haftung auf folgende Betraege begrenzt:",
    closing: "Alle Gebuehren verstehen sich inkl. MwSt., sofern anwendbar. Fuer Firmenkunden mit Einzelvereinbarung koennen abweichende Konditionen gelten.",
  },
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="table-responsive border rounded-3 mt-3 mb-4">
      <table className="table mb-0">
        <thead>
          <tr>
            {headers.map((header) => (
              <th className="text-md-bold neutral-1000" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.join("-")}-${index}`}>
              {row.map((cell, cellIndex) => (
                <td className="text-md-medium neutral-500" key={`${cell}-${cellIndex}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function RentalTermsHungaryPage() {
  const { lang } = useLanguage()
  const safeLang: Lang = (lang === "hu" || lang === "en" || lang === "de") ? lang : "en"
  const content = contentByLang[safeLang]

  return (
    <Layout footerStyle={1}>
      <div className="page-header pt-30 background-body">
        <div className="custom-container position-relative mx-auto">
          <div className="bg-overlay rounded-12 overflow-hidden">
            <img className="w-100 h-100 rounded-12 img-banner" src="/assets/imgs/page-header/banner5.png" alt="VING" />
          </div>
          <div className="container position-absolute z-1 top-50 start-50 translate-middle">
            <h2 className="text-white">{content.title}</h2>
            <span className="text-white text-xl-medium">{content.subtitle}</span>
          </div>
        </div>
      </div>

      <section className="box-section-term background-body pt-85 pb-85">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex flex-column gap-4">
                {content.sections.map((section) => (
                  <div className="content rounded-3 border p-4" key={section.title}>
                    <h3 className="text-xl-bold mb-3 neutral-1000">{section.title}</h3>
                    {section.paragraphs.map((paragraph, index) => (
                      <p className="text-md-medium neutral-500 mb-3" key={`${section.title}-${index}`}>
                        {paragraph}
                      </p>
                    ))}
                    {!!section.bullets?.length && (
                      <ul className="ps-3 mb-0">
                        {section.bullets.map((bullet, index) => (
                          <li className="text-md-medium neutral-500 mb-2" key={`${section.title}-bullet-${index}`}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <div className="content rounded-3 border p-4">
                  <p className="text-md-medium neutral-500 mb-2">{content.ageIntro}</p>
                  <DataTable headers={content.ageTableHeaders} rows={ageRules} />

                  <p className="text-md-medium neutral-500 mb-2">{content.depositIntro}</p>
                  <DataTable headers={content.depositTableHeaders} rows={depositRules} />

                  <p className="text-md-medium neutral-500 mb-2">{content.deductibleIntro}</p>
                  <DataTable headers={content.deductibleTableHeaders} rows={deductibleRules} />

                  <p className="text-md-medium neutral-500 mb-2">{content.reducedDeductibleIntro}</p>
                  <DataTable headers={content.reducedDeductibleTableHeaders} rows={reducedDeductibleRules} />

                  <p className="text-md-medium neutral-500 mb-0">{content.closing}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
