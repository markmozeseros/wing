"use client"

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useLanguage } from "@/util/LanguageContext"

type Lang = "hu" | "en" | "de"

type Section = {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
}

type PrivacyContent = {
  title: string
  updated: string
  toc: string
  intro: string[]
  sections: Section[]
}

const privacyByLang: Record<Lang, PrivacyContent> = {
  hu: {
    title: "Adatvédelmi tájékoztató",
    updated: "Utolsó frissítés: 2026. április 30.",
    toc: "Tartalomjegyzék",
    intro: [
      "Az alábbiakban tájékoztatjuk Önt a VING által feldolgozott adatok típusairól, az adatkezelés céljairól, jogalapjairól, valamint az Önt megillető jogokról.",
      "A tájékoztató a VING szolgáltatásainak igénybevételéhez kapcsolódó adatkezelési folyamatokra vonatkozik.",
    ],
    sections: [
      {
        id: "A",
        title: "A. Az adatkezelő",
        paragraphs: [
          "Az Ön adatainak kezeléséért felelős fél (adatkezelő): Cím (a továbbiakban: VING).",
          "Adatvédelemmel kapcsolatos kérdés esetén kérjük, írjon: adatvedelem@ving.hu",
        ],
      },
      {
        id: "B",
        title: "B. A személyes adatok kategóriái",
        paragraphs: [
          "Szolgáltatásainkkal összefüggésben az alábbi személyesadat-kategóriákat kezelhetjük.",
        ],
        bullets: [
          "Törzsadatok: pl. név, lakcím, születési dátum.",
          "Kommunikációs adatok: pl. telefonszám, e-mail-cím, levelezés tartalma.",
          "Szerződéses adatok: pl. bérlési adatok, szerződés- és foglalási szám, jogosítvány adatai, rendszám.",
          "Pénzügyi adatok: pl. hitelkártyaadatok.",
          "Önkéntes adatok: pl. járműpreferenciák.",
          "Különleges adatkategóriák: balesetekhez, sérülésekhez kapcsolódó egészségügyi adatok.",
          "Harmadik féltől származó adatok: pl. másodvezetők, utasok adatai.",
          "Helyadatok: telematikai rendszerrel felszerelt járművek esetén.",
        ],
      },
      {
        id: "C",
        title: "C. Az adatkezelés jogalapja a VING-nél",
        paragraphs: [
          "A személyes adatok kezelése különösen az alábbi GDPR jogalapokon történik.",
        ],
        bullets: [
          "GDPR 6. cikk (1) a): hozzájárulás.",
          "GDPR 6. cikk (1) b): szerződés teljesítése és szerződéskötést megelőző lépések.",
          "GDPR 6. cikk (1) c): jogi kötelezettség teljesítése.",
          "GDPR 6. cikk (1) f): jogos érdek érvényesítése.",
          "GDPR 9. cikk (2) f): különleges adatok kezelése jogi igényekhez.",
        ],
      },
      {
        id: "D1",
        title: "D/1. Járművek foglalása és bérlése",
        paragraphs: [
          "Törzsadatait, kommunikációs adatait, szerződéses adatait, pénzügyi adatait és önkéntesen megadott adatait foglalások teljesítése, valamint a bérleti szerződés megkötése és végrehajtása céljából kezeljük.",
          "Az adatkezelés célja az ügyfélkapcsolatok kezelése is, ideértve a panaszkezelést és foglalásmódosításokat.",
          "Partneren keresztül történő foglalás esetén partnereink adatokat továbbíthatnak részünkre.",
          "Elszámolási és jutalékkezelési célból adatokat kezelünk utazási irodákkal, ügynökségekkel, franchise- és együttműködési partnerekkel kapcsolatban.",
          "Bűncselekmények megelőzése és felderítése céljából törzs- és kommunikációs adatait hivatalos listákkal vethetjük össze.",
          "Bizonyos telephelyeken technológiai ellenőrzést alkalmazunk a jogosítvány hitelességének vizsgálatára és adatrögzítésre.",
          "Számlás fizetés esetén hitelképességi értékelés történhet pénzügyi adatok és hitelintézeti információk alapján.",
          "A szerződéses kötelezettségek teljesítése után az adatokat jogszabályi megőrzési idő végéig tároljuk.",
          "Jogalap: GDPR 6. cikk (1) b), c), f) pont. Jogos érdek: szolgáltatásminőség, ügyfélelégedettség, kockázatcsökkentés, csalásmegelőzés.",
          "Címzettek: IT-szolgáltatók, call centerek, behajtási társaságok, pénzügyi szolgáltatók, hitelintézetek, VING-csoport cégei, ügynökségi és franchise partnerek.",
        ],
      },
      {
        id: "D2",
        title: "D/2. Marketing és közvetlen reklámozás",
        paragraphs: [
          "Törzsadatait, kommunikációs és szerződéses adatait ügyfélhűség, bónuszprogramok, ajánlatoptimalizálás, piackutatás és ügyfélrendezvények céljából kezeljük.",
          "A közvetlen marketing célú adatkezelés ellen bármikor tiltakozhat: adatvedelem@ving.hu",
          "Jogalap: GDPR 6. cikk (1) a) és f) pont.",
          "Jogos érdek: szolgáltatásaink bemutatása és tartós ügyfélkapcsolat kialakítása.",
          "Címzettek: IT-szolgáltatók, call centerek, reklámpartnerek, hűségprogram-szolgáltatók.",
        ],
      },
      {
        id: "D3",
        title: "D/3. Üzleti ügyfelek / harmadik fél általi fizetés",
        paragraphs: [
          "Amennyiben járművét munkáltatóján keresztül bérli vagy a számlát harmadik fél fizeti, adatkezelésünk az itt leírt célokkal azonos módon történik.",
          "A bérlés során gyűjtött adatokat (pl. számla, bérleti szerződés, bírság, baleseti jegyzőkönyv) továbbíthatjuk a munkáltató vagy fizető fél részére.",
          "Jogalap: GDPR 6. cikk (1) b), illetve f) pont.",
          "Jogos érdek: elszámolás, követeléskezelés, felelősségi viszonyok tisztázása.",
        ],
      },
      {
        id: "D4",
        title: "D/4. Káresemények, balesetek, közigazgatási vétségek",
        paragraphs: [
          "Káresemény, baleset vagy közigazgatási vétség esetén törzs-, kommunikációs, szerződéses, pénzügyi és szükség esetén egészségügyi adatokat kezelünk panaszkezelés, kárrendezés, követeléskezelés és hatósági együttműködés céljából.",
          "A kezelés kiterjedhet harmadik felek (pl. rendőrség, tanúk, biztosítók) által megadott információkra is.",
          "Jogalap: GDPR 6. cikk (1) b), c), f) pont; egészségügyi adatoknál GDPR 9. cikk (2) f) pont.",
          "Címzettek: hatóságok, behajtási társaságok, szakértők, segélyszolgáltatók, ügyvédek, biztosítók.",
        ],
      },
      {
        id: "D5",
        title: "D/5. Összekötött járművek",
        paragraphs: [
          "A VING járművek rendelkezhetnek összekötött funkciókkal (telematika), amelyek helyadatok és járműállapot-információk kezelését teszik lehetővé.",
          "Cél: vagyon elleni bűncselekmények megelőzése, vissza nem adott járművek kezelése, területi korlátozások ellenőrzése, járműkárok és balesetek kivizsgálása.",
          "Jogalap: GDPR 6. cikk (1) f) pont.",
          "Címzettek: geolokalizációs szolgáltatók partnerei (ország- és járműkategória-függően).",
        ],
      },
      {
        id: "D6",
        title: "D/6. Jogszabályi rendelkezéseken alapuló adatkezelés",
        paragraphs: [
          "Törzs-, kommunikációs, szerződéses és pénzügyi adatokat jogi kötelezettségek teljesítése érdekében kezelünk (hatósági adatszolgáltatás, kereskedelmi/adójogi kötelezettségek).",
          "Jogalap: GDPR 6. cikk (1) c) pont.",
          "Címzettek: hatóságok jogszabályi kötelezés esetén.",
        ],
      },
      {
        id: "D7",
        title: "D/7. Folyamataink és ajánlataink fejlesztése",
        paragraphs: [
          "Kommunikációs, szerződéses és önkéntes adatokat folyamatoptimalizálás céljából kezelünk (riportok, kapacitástervezés, adattárház, hibaforrás-elemzés, elégedettségmérés).",
          "Algoritmus alapú feldolgozás is történhet profilok és valószínűségi értékek képzéséhez jövőbeli bérlések és ajánlati mintázatok tekintetében.",
          "Külső címadat-szolgáltatók adatait felhasználhatjuk törzsadataink pontosságának növelésére.",
          "Jogalap: GDPR 6. cikk (1) a) és f) pont.",
          "Címzettek: IT-szolgáltatók, call centerek, együttműködési, ügynökségi és franchise partnerek.",
        ],
      },
      {
        id: "D8",
        title: "D/8. Rendezvények és adományok",
        paragraphs: [
          "Törzs- és kommunikációs adatait ügyfélrendezvényekre történő meghívás, ügyfélhűség ápolás és jótékonysági kezdeményezések céljából kezelhetjük.",
          "Jogalap: GDPR 6. cikk (1) f) pont.",
          "Címzettek: IT-szolgáltatók, call centerek, rendezvényszervezők.",
        ],
      },
      {
        id: "D9",
        title: "D/9. Sütik (Cookie-k)",
        paragraphs: [
          "Weboldalainkon sütiket használunk. A sütik kis szövegfájlok, amelyek segítik a weboldal működését és fejlesztését.",
          "A sütik önmagukban nem futtatnak programokat és nem fertőznek vírussal.",
          "Részletes információ és kikapcsolási lehetőségek a vonatkozó sütiszabályzatban találhatók.",
          "Jogalap: GDPR 6. cikk (1) a), b), f) pont (süti típusától függően).",
        ],
      },
      {
        id: "E",
        title: "E. Harmadik országokba történő adattovábbítás",
        paragraphs: [
          "Harmadik országban történő bérlés, partnerprogram vagy káresemény esetén személyes adatok továbbítása történhet helyi partnerek, hatóságok és biztosítók részére.",
          "Adattovábbítás megfelelőségi határozat vagy GDPR 46. cikk (2) szerinti megfelelő garanciák alapján történik.",
          "A garanciák másolata a VING-től igényelhető a fenti elérhetőségen.",
        ],
      },
      {
        id: "F",
        title: "F. Adattárolás időtartama",
        paragraphs: [
          "A VING a személyes adatokat addig tárolja, ameddig azok az adatkezelés céljához szükségesek.",
          "Amennyiben hat éven át nem bérelt a VING-től, ügyfélfiókja inaktivitás miatt törlésre kerül (éves törlési folyamat).",
          "Jogszabályi kötelezettség esetén adatait a megőrzési idő végéig tároljuk; egyes kereskedelmi és számviteli dokumentumok esetén ez legfeljebb 10 év lehet.",
        ],
      },
      {
        id: "G",
        title: "G. Az Ön jogai",
        paragraphs: [
          "Ön jogosult tájékoztatást kérni a kezelt adatairól (GDPR 15. cikk), kérheti azok helyesbítését (16. cikk), törlését (17. cikk), kezelésének korlátozását (18. cikk), valamint élhet adathordozhatósági jogával (20. cikk).",
          "Ön bármikor tiltakozhat a jogos érdek jogalapú adatkezelés ellen (GDPR 21. cikk), és külön korlátozás nélkül tiltakozhat közvetlen marketing célú adatkezelés ellen.",
          "Hozzájáruláson alapuló adatkezelés esetén hozzájárulását bármikor visszavonhatja.",
          "Panaszt nyújthat be a felügyeleti hatósághoz: Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH), H-1125 Budapest, Szilágyi Erzsébet fasor 22/c., Tel.: +36-1/391-1400, E-mail: ugyfelszolgalat@naih.hu, Web: http://naih.hu/index.html",
          "Ha nem adja meg a szerződéshez szükséges adatokat, járműbérleti szerződés nem köthető, és egyes szolgáltatásaink nem vehetők igénybe.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Notice",
    updated: "Last update: 30 April 2026",
    toc: "Table of contents",
    intro: [
      "Below we inform you about data types processed by VING, processing purposes, legal bases, recipients, storage periods, and your rights.",
      "This notice applies to data processing connected to VING rental services.",
    ],
    sections: [
      { id: "A", title: "A. Controller", paragraphs: ["Data controller: VING (address).", "Privacy contact: adatvedelem@ving.hu"] },
      { id: "B", title: "B. Categories of personal data", paragraphs: ["VING may process master data, communication data, contract data, financial data, voluntary data, special categories in claims/accidents, third-party data, and telematics location data."] },
      { id: "C", title: "C. Legal bases", paragraphs: ["GDPR Art. 6(1)(a) consent, 6(1)(b) contract, 6(1)(c) legal obligation, 6(1)(f) legitimate interests, and Art. 9(2)(f) for legal claims regarding special data."] },
      { id: "D1", title: "D/1. Booking and rental", paragraphs: ["Data is processed to perform bookings/contracts, customer service, partner settlements, fraud prevention, document checks, credit assessments (where applicable), and legally required retention.", "Recipients may include IT providers, call centers, financial providers, credit institutions, group entities, agencies, and franchise partners."] },
      { id: "D2", title: "D/2. Marketing", paragraphs: ["Data may be used for loyalty, bonus programs, research, and direct marketing where permitted.", "You can object at any time to direct marketing: adatvedelem@ving.hu"] },
      { id: "D3", title: "D/3. Corporate rentals / third-party payment", paragraphs: ["If your employer or a third party pays for rental, relevant rental and billing records may be shared with that payer for settlement and accountability purposes."] },
      { id: "D4", title: "D/4. Claims, accidents, violations", paragraphs: ["Data is processed for claim handling, incident support, legal compliance, and claim enforcement. This can include health data where strictly necessary for legal claims."] },
      { id: "D5", title: "D/5. Connected vehicles", paragraphs: ["Telematics/location data may be processed to prevent property crime, handle overdue returns, investigate territorial breaches, and assess damages/accidents."] },
      { id: "D6", title: "D/6. Statutory processing", paragraphs: ["Data processing may be required by law for authority requests, accounting and tax obligations."] },
      { id: "D7", title: "D/7. Process and offer improvement", paragraphs: ["Data may be used for analytics, quality improvement, planning, service optimization, and address quality checks, including algorithmic profiling where lawful."] },
      { id: "D8", title: "D/8. Events and donations", paragraphs: ["Data may be used for invitations, customer care activities, and charitable initiatives."] },
      { id: "D9", title: "D/9. Cookies", paragraphs: ["Cookies are used on our sites for functionality and optimization. Cookie details and opt-out options are available in the cookie policy."] },
      { id: "E", title: "E. Transfers to third countries", paragraphs: ["Transfers may occur for international rentals, partner programs, or incidents, based on adequacy decisions or GDPR Art. 46 safeguards."] },
      { id: "F", title: "F. Retention", paragraphs: ["Data is stored as long as needed for purpose and legal obligations. Inactive customer accounts may be deleted after extended inactivity. Some accounting records can be retained up to 10 years."] },
      { id: "G", title: "G. Your rights", paragraphs: ["You have rights of access, rectification, erasure, restriction, portability, objection, withdrawal of consent, and complaint to supervisory authority.", "Hungarian SA: NAIH, H-1125 Budapest, Szilágyi Erzsébet fasor 22/c., ugyfelszolgalat@naih.hu"] },
    ],
  },
  de: {
    title: "Datenschutzhinweis",
    updated: "Letzte Aktualisierung: 30. April 2026",
    toc: "Inhaltsverzeichnis",
    intro: [
      "Nachfolgend informieren wir Sie ueber Datenarten, Verarbeitungszwecke, Rechtsgrundlagen und Ihre Rechte bei VING.",
      "Dieser Hinweis gilt fuer Datenverarbeitungen im Zusammenhang mit VING-Mietservices.",
    ],
    sections: [
      { id: "A", title: "A. Verantwortlicher", paragraphs: ["Verantwortlicher: VING (Adresse).", "Kontakt Datenschutz: adatvedelem@ving.hu"] },
      { id: "B", title: "B. Kategorien personenbezogener Daten", paragraphs: ["VING kann Stammdaten, Kommunikationsdaten, Vertragsdaten, Finanzdaten, freiwillige Angaben, besondere Datenkategorien bei Schadenfaellen, Drittdaten und Telematik-Standortdaten verarbeiten."] },
      { id: "C", title: "C. Rechtsgrundlagen", paragraphs: ["GDPR/DSGVO Art. 6 Abs. 1 lit. a, b, c, f sowie Art. 9 Abs. 2 lit. f bei besonderen Daten im Rahmen von Rechtsanspruechen."] },
      { id: "D1", title: "D/1. Buchung und Miete", paragraphs: ["Verarbeitung zur Vertragsdurchfuehrung, Kundenbetreuung, Partnerabrechnung, Betrugsvermeidung, Dokumentenpruefung, Bonitaetspruefung (soweit erforderlich) und gesetzlichen Aufbewahrung."] },
      { id: "D2", title: "D/2. Marketing", paragraphs: ["Verarbeitung fuer Kundenbindung, Bonusprogramme, Marktforschung und Direktmarketing im rechtlich zulaessigen Rahmen.", "Widerspruch gegen Direktmarketing jederzeit moeglich: adatvedelem@ving.hu"] },
      { id: "D3", title: "D/3. Geschaeftskunden / Drittzahler", paragraphs: ["Bei Arbeitgeber- oder Drittzahlerabrechnung koennen relevante Miet- und Rechnungsdaten an diese Stellen uebermittelt werden."] },
      { id: "D4", title: "D/4. Schadenfaelle, Unfaelle, Verwaltungsverstoesse", paragraphs: ["Verarbeitung zur Schadenbearbeitung, Rechtsdurchsetzung, Behoerdenkommunikation und Anspruchsverwaltung; bei Bedarf auch Gesundheitsdaten im gesetzlich erlaubten Umfang."] },
      { id: "D5", title: "D/5. Vernetzte Fahrzeuge", paragraphs: ["Telematik/Standortdaten koennen zur Praevention von Vermoegensdelikten, zur Aufklaerung von Ueberschreitungen und zur Schadenaufklaerung genutzt werden."] },
      { id: "D6", title: "D/6. Gesetzliche Pflichten", paragraphs: ["Verarbeitung zur Erfuellung gesetzlicher Melde-, Buchfuehrungs- und steuerrechtlicher Pflichten."] },
      { id: "D7", title: "D/7. Prozess- und Angebotsoptimierung", paragraphs: ["Verarbeitung fuer Analysen, Qualitaetssteigerung, Planung, Serviceoptimierung und Datenqualitaet, ggf. inklusive rechtmaessiger Profilbildung."] },
      { id: "D8", title: "D/8. Veranstaltungen und Spenden", paragraphs: ["Verarbeitung fuer Einladungen, Kundenpflege und gemeinnuetzige Aktionen."] },
      { id: "D9", title: "D/9. Cookies", paragraphs: ["Cookies werden fuer Funktionalitaet und Optimierung genutzt. Details und Einstellungen finden Sie in der Cookie-Richtlinie."] },
      { id: "E", title: "E. Drittlanduebermittlungen", paragraphs: ["Uebermittlungen in Drittlaender koennen bei Auslandsmieten, Partnerprogrammen oder Schadenfaellen erfolgen, auf Basis Angemessenheitsbeschluss oder geeigneter Garantien nach Art. 46 DSGVO."] },
      { id: "F", title: "F. Speicherdauer", paragraphs: ["Daten werden nur so lange gespeichert, wie es fuer Zwecke und gesetzliche Pflichten erforderlich ist. Bestimmte Unterlagen koennen bis zu 10 Jahre aufbewahrt werden."] },
      { id: "G", title: "G. Ihre Rechte", paragraphs: ["Sie haben Rechte auf Auskunft, Berichtigung, Loeschung, Einschraenkung, Datenuebertragbarkeit, Widerspruch, Widerruf und Beschwerde bei der Aufsichtsbehoerde.", "Ungarische Aufsichtsbehoerde: NAIH, H-1125 Budapest, Szilágyi Erzsébet fasor 22/c., ugyfelszolgalat@naih.hu"] },
    ],
  },
}

export default function PrivacyNoticePage() {
  const { lang } = useLanguage()
  const safeLang: Lang = lang === "hu" || lang === "en" || lang === "de" ? lang : "en"
  const content = privacyByLang[safeLang]

  return (
    <Layout footerStyle={1}>
      <div>
        <div className="page-header pt-30 background-body">
          <div className="custom-container position-relative mx-auto">
            <div className="bg-overlay rounded-12 overflow-hidden">
              <img className="w-100 h-100 rounded-12 img-banner" src="/assets/imgs/page-header/banner5.png" alt="VING" />
            </div>
            <div className="container position-absolute z-1 top-50 start-50 translate-middle">
              <h2 className="text-white">{content.title}</h2>
              <span className="text-white text-xl-medium">{content.updated}</span>
            </div>
          </div>
        </div>

        <section className="box-section-term background-body pt-85 pb-85">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
                <div className="sidebar rounded-3 border py-5 px-4">
                  <div className="sidebar-menu">
                    <h6 className="neutral-1000 mb-3">{content.toc}</h6>
                    <ul>
                      {content.sections.map((section) => (
                        <li className="mb-2" key={section.id}>
                          <Link href={`#section-${section.id}`} className="text-md-medium neutral-500">
                            {section.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-9 px-lg-5">
                <div className="d-flex flex-column gap-4">
                  <div className="content rounded-3 border p-4">
                    {content.intro.map((paragraph, index) => (
                      <p className="text-md-medium neutral-500 mb-3" key={`intro-${index}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {content.sections.map((section) => (
                    <div className="content rounded-3 border p-4" key={section.id} id={`section-${section.id}`}>
                      <h3 className="text-xl-bold mb-3 neutral-1000">{section.title}</h3>
                      {section.paragraphs.map((paragraph, index) => (
                        <p className="text-md-medium neutral-500 mb-3" key={`${section.id}-p-${index}`}>
                          {paragraph}
                        </p>
                      ))}
                      {!!section.bullets?.length && (
                        <ul className="ps-3 mb-0">
                          {section.bullets.map((item, index) => (
                            <li className="mb-2 text-md-medium neutral-500" key={`${section.id}-b-${index}`}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
