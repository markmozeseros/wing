type Step = {
  number: string
  title: string
  text: string
}

type FeeItem = {
  item: string
  fee: string
}

const processSteps: Step[] = [
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
]

const feeItems: FeeItem[] = [
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
]

export default function RentalTermsHungaryPage() {
  return (
    <main className="rental-summary-page">
      <section className="rental-summary-hero">
        <div className="rental-summary-wrap">
          <p className="rental-summary-hero-label">Általános Szerződési Feltételek – Összefoglaló</p>
          <h1>Amit a bérlés előtt érdemes tudnia</h1>
          <p className="rental-summary-hero-text">
            Az alábbi összefoglaló a VING ÁSZF legfontosabb rendelkezéseit mutatja be átlátható formában.
            A teljes ÁSZF minden esetben irányadó.
          </p>
        </div>
      </section>

      <section className="rental-summary-process" id="folyamat">
        <div className="rental-summary-wrap">
          <p className="rental-summary-eyebrow">Hogyan működik?</p>
          <h2 className="rental-summary-section-title">A bérlés folyamata lépésről lépésre</h2>
          <div className="rental-summary-steps-outer">
            <div className="rental-summary-steps">
              {processSteps.map((step) => (
                <article className="rental-summary-step" key={step.number}>
                  <div className="rental-summary-step-num">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="rental-summary-swipe-hint">Húzza jobbra a lépések megtekintéséhez</p>
        </div>
      </section>

      <section className="rental-summary-info" id="hasznalat">
        <div className="rental-summary-wrap rental-summary-grid">
          <aside className="rental-summary-sidebar">
            <p className="rental-summary-sidebar-label">02</p>
            <h2 className="rental-summary-sidebar-title">A jármű használata & a vezető</h2>
          </aside>
          <div className="rental-summary-cards">
            <article className="rental-summary-card rental-summary-card-grn">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">✓</span>
                <h4>Ki vezethet?</h4>
              </div>
              <ul>
                <li>Minimum <strong>21 éves</strong>, legalább <strong>1 éve érvényes jogosítvánnyal</strong></li>
                <li>Latin betűs jogosítvány, vagy nem latin betűs + érvényes nemzetközi engedély</li>
                <li>Csak a Bérleti Szerződésben megnevezett személyek</li>
              </ul>
            </article>
            <article className="rental-summary-card rental-summary-card-red">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">✕</span>
                <h4>Tilos a járművet használni</h4>
              </div>
              <ul>
                <li>Alkohol vagy kábítószer hatása alatt</li>
                <li>Bűncselekmény elkövetésére (csempészet, illegális fuvarozás)</li>
                <li>Versenyzésre, tesztelésre, más jármű vontatására</li>
                <li>Üzletszerű személy- vagy árufuvarozásra</li>
                <li>Albérletbe adni harmadik félnek</li>
                <li>Dohányzás a járműben</li>
              </ul>
            </article>
            <article className="rental-summary-card">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">🌍</span>
                <h4>Határátlépés</h4>
              </div>
              <p>Kizárólag előzetes <strong>írásos engedéllyel</strong> és külön díj megfizetésével lehetséges, függetlenül attól, melyik országban vette át a járművet.</p>
            </article>
            <article className="rental-summary-card">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">⛽</span>
                <h4>Üzemanyag</h4>
              </div>
              <p>Kizárólag a gyártó által előírt üzemanyag: dízel vagy min. 95-ös benzin. Tiszta bioetanol vagy biodízel <strong>tilos</strong>. Visszaadáskor az átvételkori szint szükséges.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="rental-summary-info" id="biztositas">
        <div className="rental-summary-wrap rental-summary-grid">
          <aside className="rental-summary-sidebar">
            <p className="rental-summary-sidebar-label">03</p>
            <h2 className="rental-summary-sidebar-title">Biztosítás & kárfelelősség</h2>
          </aside>
          <div className="rental-summary-cards">
            <article className="rental-summary-card rental-summary-card-grn">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">✓</span>
                <h4>Mindig benne van a bérleti díjban</h4>
              </div>
              <p>A kötelező gépjármű-felelősségbiztosítás (KGFB) minden bérlés részét képezi.</p>
            </article>
            <article className="rental-summary-card">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">🛡</span>
                <h4>Extra biztosítás (CDW / SCDW / TP)</h4>
              </div>
              <p>Ha a Bérleti Szerződés extra biztosítást tartalmaz, kár esetén a Bérlő felelőssége a szerződésben meghatározott <strong>önrészre korlátozódik</strong>.</p>
              <span className="rental-summary-badge rental-summary-badge-warn">Az önrész minden egyes különálló kárigénynél külön fizetendő</span>
            </article>
            <article className="rental-summary-card rental-summary-card-red">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">!</span>
                <h4>A biztosítás érvényét veszti, ha…</h4>
              </div>
              <ul>
                <li>A vezető alkohol vagy drog hatása alatt volt</li>
                <li>A járművet nem a szerződésben megnevezett személy vezette</li>
                <li>Valótlan adatot adott meg a szerződésben</li>
                <li>Balesetnél nem tett rendőrségi bejelentést</li>
                <li>A dokumentumokat nem adta be 24 órán belül</li>
              </ul>
            </article>
            <article className="rental-summary-card">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">⚠️</span>
                <h4>Az extra biztosítás NEM fedezi</h4>
              </div>
              <ul>
                <li>Üvegkárok (kőfelverődés, repedés, törés)</li>
                <li>Felni és gumiabroncs sérülések</li>
                <li>Belső tér és csomagtér kárai</li>
                <li>Alvázkárok, amelyek nem balesetből erednek</li>
                <li>Elveszett, elhagyott tartozékok</li>
              </ul>
              <p>Ezekre speciális kiegészítő biztosítás köthető a bérlés kezdetén.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="rental-summary-info">
        <div className="rental-summary-wrap rental-summary-grid">
          <aside className="rental-summary-sidebar">
            <p className="rental-summary-sidebar-label">04</p>
            <h2 className="rental-summary-sidebar-title">Baleset vagy káresemény esetén</h2>
          </aside>
          <div className="rental-summary-cards">
            <article className="rental-summary-card">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">📋</span>
                <h4>Teendők sorrendben</h4>
              </div>
              <ul>
                <li><strong>1.</strong> Azonnal értesítse a VING-et</li>
                <li><strong>2.</strong> Hívjon rendőrséget, kérjen helyszíni jegyzőkönyvet</li>
                <li><strong>3.</strong> Töltse ki az Európai Baleseti Bejelentőt (kék-sárga nyomtatvány)</li>
                <li><strong>4.</strong> Ne tegyen felelősségelismerő nyilatkozatot harmadik félnek</li>
                <li><strong>5.</strong> Küldje be a dokumentumokat a VING-nek <strong>24 órán belül</strong></li>
              </ul>
            </article>
            <article className="rental-summary-card rental-summary-card-red">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">!</span>
                <h4>Lopás esetén</h4>
              </div>
              <p>Teljes felelősség terheli, ha a forgalmi engedélyt vagy az eredeti kulcsokat nem adta vissza, illetve ha kulcsmásolat készült. Kulcselvesztés esetén <strong>azonnal</strong> értesítse a VING-et.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="rental-summary-info">
        <div className="rental-summary-wrap rental-summary-grid">
          <aside className="rental-summary-sidebar">
            <p className="rental-summary-sidebar-label">05</p>
            <h2 className="rental-summary-sidebar-title">Visszaadás & késedelem</h2>
          </aside>
          <div className="rental-summary-cards">
            <article className="rental-summary-card rental-summary-card-grn">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">✓</span>
                <h4>Szabályos visszaadás</h4>
              </div>
              <ul>
                <li>A megadott helyen és időpontban</li>
                <li>Tisztán, az átvételkori üzemanyagszinttel</li>
                <li>Minden dokumentummal és tartozékkal együtt</li>
                <li>Az 1 órás türelmi időn belül</li>
              </ul>
            </article>
            <article className="rental-summary-card rental-summary-card-red">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">!</span>
                <h4>Késedelmes vagy jogosulatlan visszaadás</h4>
              </div>
              <ul>
                <li>1 órán túli késedelem: <strong>+1 teljes napi bérleti díj</strong></li>
                <li>Jóváhagyás nélküli meghosszabbítás: napi díj <strong>× 2</strong></li>
                <li>Biztosítás megszűnik a szerződés lejártával</li>
                <li>24 óra után a VING rendőrségi feljelentést tehet és körözést kezdeményezhet</li>
              </ul>
            </article>
            <article className="rental-summary-card">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">🔍</span>
                <h4>Állapotellenőrzés visszaadáskor</h4>
              </div>
              <p>Ha szennyezett vagy éjszakai/garázsban történő visszaadás miatt nem lehetséges az azonnali vizsgálat, a VING <strong>24 órán belül</strong> elvégzi. Rejtett hibák (futómű, motor) esetén <strong>72 óra</strong>.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="rental-summary-info">
        <div className="rental-summary-wrap rental-summary-grid">
          <aside className="rental-summary-sidebar">
            <p className="rental-summary-sidebar-label">06</p>
            <h2 className="rental-summary-sidebar-title">Assistance – Segélyszolgálat</h2>
          </aside>
          <div className="rental-summary-cards">
            <div className="rental-summary-cards-2">
              <article className="rental-summary-card">
                <h4 className="rental-summary-mini-title">Standard Assistance</h4>
                <span className="rental-summary-badge rental-summary-badge-warn">Napi díj: meghatározott</span>
                <ul>
                  <li>0–24 órás segélyhívó elérhetőség</li>
                  <li>Szerviz és szállítás megszervezése</li>
                  <li>Felmerülő költségek a Bérlőt terhelik</li>
                </ul>
              </article>
              <article className="rental-summary-card rental-summary-card-grn">
                <h4 className="rental-summary-mini-title">Premium Assistance</h4>
                <span className="rental-summary-badge rental-summary-badge-ok">Napi díj: meghatározott</span>
                <ul>
                  <li>0–24 órás segélyhívó elérhetőség</li>
                  <li>Szállítási és javítási költségek fedezete korlátokig</li>
                  <li>5 liter üzemanyag biztosítása</li>
                </ul>
              </article>
            </div>
            <article className="rental-summary-card rental-summary-card-red">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">!</span>
                <h4>Assistance nélkül</h4>
              </div>
              <p>Minden egyes segítségszervezési alkalom: <strong>100 EUR</strong> + az összes felmerülő költség (szállítás, javítás, alkatrészek).</p>
            </article>
            <article className="rental-summary-card">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">📞</span>
                <h4>Bejelentés kizárólag ezen a számon</h4>
              </div>
              <p className="rental-summary-phone">+36 30 123456789</p>
            </article>
          </div>
        </div>
      </section>

      <section className="rental-summary-info" id="dijak">
        <div className="rental-summary-wrap rental-summary-grid">
          <aside className="rental-summary-sidebar">
            <p className="rental-summary-sidebar-label">07</p>
            <h2 className="rental-summary-sidebar-title">Leggyakoribb pótdíjak & költségek</h2>
          </aside>
          <div className="rental-summary-cards">
            <article className="rental-summary-card">
              <table className="rental-summary-fee-table">
                <thead>
                  <tr>
                    <th>Tétel</th>
                    <th>Díj</th>
                  </tr>
                </thead>
                <tbody>
                  {feeItems.map((fee) => (
                    <tr key={fee.item}>
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
            <p className="rental-summary-sidebar-label">08</p>
            <h2 className="rental-summary-sidebar-title">Kaució & fizetési feltételek</h2>
          </aside>
          <div className="rental-summary-cards">
            <article className="rental-summary-card">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">💳</span>
                <h4>Hogyan működik a kaució?</h4>
              </div>
              <p>Bankkártyán zárolásra kerül a bérlés idejére. A visszaadás és az esetleges sérülésvizsgálat lezárása után a VING feloldja a zárolást. A tényleges megjelenés a Bérlő bankjától függő idő kérdése.</p>
            </article>
            <article className="rental-summary-card rental-summary-card-red">
              <div className="rental-summary-card-top">
                <span className="rental-summary-icon">!</span>
                <h4>Előre fizetett díjak nem téríthetők vissza</h4>
              </div>
              <p>Az előre megfizetett bérleti díjak, szolgáltatási díjak és egyéb költségek <strong>nem visszatéríthetők</strong>, még korai visszaadás esetén sem.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="rental-summary-info">
        <div className="rental-summary-wrap rental-summary-grid">
          <aside className="rental-summary-sidebar">
            <p className="rental-summary-sidebar-label">09</p>
            <h2 className="rental-summary-sidebar-title">Adatkezelés</h2>
          </aside>
          <div className="rental-summary-cards">
            <article className="rental-summary-card">
              <p>A VING a személyes adatokat a jogviszony megszűnésétől számított <strong>6 hónapig</strong> tárolja, kizárólag a szerződéses együttműködés és jogos érdekei céljából. Adatát harmadik félnek csak szabálysértés, bírságbehajtás, biztosítási eljárás vagy hatósági megkeresés esetén adjuk át.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="rental-summary-info" id="kapcsolat">
        <div className="rental-summary-wrap rental-summary-grid">
          <aside className="rental-summary-sidebar">
            <p className="rental-summary-sidebar-label">10</p>
            <h2 className="rental-summary-sidebar-title">Jogviták & irányadó jog</h2>
          </aside>
          <div className="rental-summary-cards">
            <div className="rental-summary-cards-2">
              <article className="rental-summary-card">
                <h4 className="rental-summary-mini-title">Global Rent Hungary Kft.</h4>
                <p>Magyar jog irányadó. Vitás esetekben a Bérbeadó székhelye szerinti bíróság illetékes. Késedelmi kamat és 40 EUR behajtási átalány illeti meg a Bérbeadót gazdálkodó szervezet Bérlő esetén.</p>
              </article>
              <article className="rental-summary-card">
                <h4 className="rental-summary-mini-title">Global Rent Austria GmbH</h4>
                <p>Osztrák jog irányadó (kollíziós szabályok kivételével). Vitás esetekben a Bérbeadó székhelye szerinti bíróság illetékes.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
