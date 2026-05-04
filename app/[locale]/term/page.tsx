
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

type TermsPageContent = {
	title: string
	lastUpdate: string
	toc: string
	intro: string[]
	sections: Section[]
	declarationTitle: string
	declaration: string[]
}

const termsByLang: Record<Lang, TermsPageContent> = {
	hu: {
		title: "Általános Szerződési Feltételek (ÁSZF)",
		lastUpdate: "Utolsó frissítés: 2026. április 20.",
		toc: "Tartalomjegyzék",
		intro: [
			"Ezek az Általános Szerződési Feltételek a VING márkanevet használó alábbi társaságok által megkötendő szerződésekre alkalmazandók (a továbbiakban: Bérbeadó): Global Rent Hungary Kft. (cím), Global Rent Austria GmbH (cím).",
			"A Bérbeadó a Gépjármű Bérleti Szerződésben megnevezett Bérlő részére a szerződésben meghatározott gépjárművet (Bérautó) adja bérbe az alábbi feltételek szerint.",
		],
		sections: [
			{
				id: "I",
				title: "I. Általános Szerződési Feltételek",
				paragraphs: [
					"A Szerződő Felek a Bérleti Szerződés aláírásával kölcsönösen vállalják a Bérleti Szerződés és az ÁSZF rendelkezéseinek betartását. A Bérleti Szerződés az aláírással jön létre, és bármilyen módosítás kizárólag írásban érvényes.",
					"Valótlan adatközlés vagy szerződésszegés esetén a Bérbeadó jogosult a szerződést azonnali hatállyal felmondani. Nem természetes személy Bérlő esetén a szerződést csak cégjegyzésre jogosult személy írhatja alá.",
					"A Bérbeadó azonnali felmondásra jogosult különösen, ha a Bérlő fizetési kötelezettségének nem tesz eleget, a bankkártyán nincs fedezet, vagy a járművet a szerződés megszűnését követően 24 órán belül nem szolgáltatja vissza.",
					"A Bérlő tudomásul veszi, hogy 24 órát meghaladó indokolatlan vissza nem szolgáltatás esetén a Bérbeadó a járművet birtokba veheti, rendőrségi eljárást kezdeményezhet, és a Bérlő viseli az ezzel járó minden költséget.",
				],
			},
			{
				id: "II",
				title: "II. A Bérautó használata és a Bérlő felelőssége",
				paragraphs: [
					"A Bérautót a Bérlő vagy a szerződésben megjelölt, legalább 21 éves és legalább 1 éve érvényes jogosítvánnyal rendelkező személy vezetheti. Nem latin betűs jogosítvány csak nemzetközi vezetői engedéllyel érvényes.",
					"A Bérlő teljes és kizárólagos felelősséget vállal a jármű állapotáért a visszaszolgáltatáskor, akkor is, ha más, szerződésben megjelölt vezető használta a járművet.",
				],
				bullets: [
					"Tilos alkohol vagy kábítószer hatása alatt vezetni, illetve ilyen személynek a vezetést átengedni.",
					"Tilos bűncselekményhez, illegális áruszállításhoz vagy személyszállításhoz használni a Bérautót.",
					"A Bérautóban dohányzás tilos; megszegés esetén átalány kártérítés és teljes kártérítési kötelezettség terheli a Bérlőt.",
					"A Bérautó nem használható versenyzésre, vontatásra, üzletszerű személy- vagy áruszállításra, és harmadik fél részére nem adható bérbe.",
					"Határátlépés csak a Bérbeadó írásos engedélyével és külön díj mellett lehetséges; engedély nélküli átlépés esetén pótdíj fizetendő.",
				],
			},
			{
				id: "III",
				title: "III. Bérleti időtartam, átadás és visszaadás",
				paragraphs: [
					"A minimális bérleti idő 24 óra. 1 órát meghaladó késedelmes visszaadás esetén egy teljes további napi bérleti díj kerül felszámításra.",
					"A Bérlő köteles a járművet a megadott telephelyen, időpontban, tiszta és rendeltetésszerű állapotban, dokumentumaival és tartozékaival együtt visszaadni.",
					"A járművet az átadáskori üzemanyagszintnek megfelelően kell visszaszolgáltatni. Hiány esetén üzemanyagköltség és adminisztrációs díj fizetendő.",
					"A Bérbeadó a visszaadáskor, illetve indokolt esetben a visszaadást követő 24/72 órán belül jogosult állapotellenőrzést végezni, és az új sérülések, hiányok, rejtett károk költségeit érvényesíteni.",
					"A bérleti idő meghosszabbítása és extra szolgáltatás igénybevétele csak előzetes, írásos jóváhagyással lehetséges. Engedély nélküli késedelmes visszaadás esetén emelt használati díj fizetendő.",
				],
			},
			{
				id: "IV",
				title: "IV. Segélyszolgálat (Assistance)",
				paragraphs: [
					"A Bérbeadó a bérleti idő alatt Standard és Premium Assistance szolgáltatást nyújt a szerződésben meghatározott díjért.",
					"A szolgáltatás 0-24 elérhető segélyhívó számot és a szükséges intézkedések megszervezését tartalmazza. A szolgáltatás keretében rendelt tételek költségeit a Bérlő viseli a szerződésben rögzített feltételek szerint.",
				],
				bullets: [
					"Baleset, műszaki meghibásodás, üzemanyaghiány, kulcsprobléma és defekt esetén szervezési és helyszíni segítség biztosítható.",
					"Premium csomag esetén egyes költségek meghatározott összeghatárig tartalmazottak.",
					"Assistance csomag hiányában minden utólag megrendelt segítség szervezési díjköteles.",
				],
			},
			{
				id: "V",
				title: "V. Biztosítás",
				paragraphs: [
					"A bérleti díj tartalmazza a kötelező gépjármű-felelősségbiztosítást. Extra biztosítás (CDW, SCDW, TP) csak akkor érvényes, ha azt a Bérleti Szerződés kifejezetten tartalmazza.",
					"Szerződésszegés, valótlan adatközlés, vagy jogosulatlan vezető esetén az extra biztosítás érvényét veszti, és a Bérlő teljes kártérítési felelősséggel tartozik.",
					"Az extra biztosítás nem terjed ki többek között az üveg-, felni-, gumi-, utastéri, csomagtéri és alvázkárokra, valamint elveszett tartozékokra.",
					"Lopáskár, kulcselvesztés, helytelen üzemeltetés vagy Bérlőnek felróható káresemény esetén a Bérlő köteles a teljes igazolt kárt megtéríteni.",
				],
			},
			{
				id: "VI",
				title: "VI. Eljárás baleset vagy káresemény esetén",
				paragraphs: [
					"Káresemény esetén a Bérlő köteles haladéktalanul értesíteni a Bérbeadót, rendőri intézkedést kérni, jegyzőkönyvet felvetetni, valamint a jármű megőrzéséről gondoskodni.",
					"A Bérlő köteles a szükséges dokumentumokat és részletes baleseti jelentést legkésőbb 24 órán belül átadni, és együttműködni a kárrendezésben.",
					"E kötelezettségek megszegése esetén a Bérlő teljes anyagi felelősséggel tartozik, és a biztosítás érvényét veszti.",
				],
			},
			{
				id: "VII",
				title: "VII. Meghibásodás",
				paragraphs: [
					"Rendeltetésszerű használat mellett keletkezett hibák esetén a Bérbeadó megtéríti a bejelentett javítás indokolt költségeit a szerződéses feltételek szerint.",
					"A Bérlő köteles a műszaki hibákat haladéktalanul jelezni, valamint a hűtőfolyadék- és olajszintet rendszeresen ellenőrizni.",
					"A gyártói szervizintervallumok be nem tartásából eredő költségek és károk a Bérlőt terhelik.",
				],
			},
			{
				id: "VIII",
				title: "VIII. A Bérlő felelőssége",
				paragraphs: [
					"A Bérlő teljes felelősséggel tartozik minden olyan kárért, amely szerződésszegésből, nem rendeltetésszerű használatból vagy jogsértésből ered.",
				],
				bullets: [
					"Ittas vagy bódult állapotban történő vezetés.",
					"Szerződésben nem szereplő személy általi vezetés.",
					"Vontatás, versenyzés, terephasználat vagy egyéb rendeltetésellenes használat.",
					"Minden bírság, útdíj, parkolási díj, ügyintézési költség és egyéb járulékos teher viselése.",
				],
			},
			{
				id: "IX",
				title: "IX. Fizetési és pénzügyi feltételek",
				paragraphs: [
					"A Bérleti Szerződés rögzíti a bérleti díjat, a kaució összegét és a fizetési módokat. A kaució a lehetséges károk és tartozások fedezetére szolgál.",
					"Eltérő megállapodás hiányában a díjak és a kaució előre fizetendők. Az előre megfizetett díjak főszabály szerint nem visszatéríthetők.",
					"A Bérlő visszavonhatatlanul felhatalmazza a Bérbeadót, hogy szerződésszerű követeléseit a megadott fizetési eszközről érvényesítse.",
					"A Bérlőt terhelik különösen a bérleti díjak, jogi és behajtási költségek, szállítási díjak, túlfutási díjak, tisztítási díjak, önrész, adminisztrációs díjak és egyéb szerződésben meghatározott költségek.",
				],
			},
			{
				id: "X",
				title: "X. Adatkezelés",
				paragraphs: [
					"A Bérlő hozzájárul személyes adatainak jogszabályoknak megfelelő kezeléséhez és tárolásához.",
					"A Bérbeadó az adatokat elsődlegesen a szerződés teljesítéséhez használja, és csak szerződésben vagy jogszabályban meghatározott esetben adja át hatóságoknak vagy jogosult harmadik félnek.",
				],
			},
			{
				id: "XI",
				title: "XI. Egyéb rendelkezések",
				paragraphs: [
					"Késedelmes fizetés esetén késedelmi kamat és - amennyiben alkalmazandó - behajtási költségátalány fizetendő.",
					"A szerződésre a Bérbeadó székhelye szerinti jog és bírósági illetékesség irányadó, a vonatkozó kötelező jogszabályok figyelembevételével.",
					"Ha az ÁSZF bármely pontja érvénytelen, az a többi rendelkezés érvényességét nem érinti.",
				],
			},
		],
		declarationTitle: "Nyilatkozat",
		declaration: [
			"Alulírott (NÉV) kijelentem, hogy használatra átvettem a XYZ-123 rendszámú gépjárművet a (321ZYX) számú bérleti szerződés alapján.",
			"Tudomásul veszem, hogy a birtoklás során felmerülő minden további költségért (üzemanyag, bírságok, pótdíjak, járműkár, adminisztrációs díjak) teljes felelősséget vállalok.",
			"Hozzájárulok ahhoz, hogy a Global Rent Hungary Kft. ezeket a díjakat az Általános Bérleti Feltételek szerint a megadott bankkártyámra terhelje.",
		],
	},
	en: {
		title: "General Terms and Conditions (GTC)",
		lastUpdate: "Last update: 20 April 2026",
		toc: "Table of contents",
		intro: [
			"These General Terms and Conditions apply to agreements concluded by the following companies using the VING brand (hereinafter: Lessor): Global Rent Hungary Kft. (address), Global Rent Austria GmbH (address).",
			"The Lessor rents the vehicle specified in the Vehicle Rental Agreement to the renter (hereinafter: Renter) under the terms below.",
		],
		sections: [
			{ id: "I", title: "I. General Terms", paragraphs: ["By signing the Rental Agreement, both parties accept and must comply with the Rental Agreement and these GTC. Any amendment is valid only in written form.", "If false data is provided or contractual obligations are breached, the Lessor may terminate the agreement with immediate effect.", "If the vehicle is not returned within 24 hours after termination without justification, the Lessor may repossess the vehicle and initiate legal or police action."] },
			{ id: "II", title: "II. Vehicle Use and Renter Liability", paragraphs: ["Only the Renter or an authorized driver stated in the contract may drive the vehicle, meeting age and license conditions.", "The Renter remains fully liable for vehicle condition at return."], bullets: ["Driving under alcohol or drugs is strictly prohibited.", "Use of the vehicle for crimes, racing, towing, illegal transport, or sub-rental is prohibited.", "Cross-border use requires prior written approval and extra fee."] },
			{ id: "III", title: "III. Rental Period, Handover and Return", paragraphs: ["Minimum rental period is 24 hours. Delay over 1 hour may trigger an extra full daily rental fee.", "The vehicle must be returned in clean and proper condition with all documents and accessories.", "Fuel level must match pickup level; shortages are charged plus administration fee.", "The Lessor may perform post-return checks and charge for newly identified damage in line with contract terms."] },
			{ id: "IV", title: "IV. Assistance Services", paragraphs: ["Standard and Premium Assistance are available under contract pricing.", "The renter bears costs of requested services according to selected package and contract limits."], bullets: ["Available for accident, breakdown, fuel shortage, lost/locked key, and tire issues.", "Without an assistance package, each later request is subject to additional organization fee."] },
			{ id: "V", title: "V. Insurance", paragraphs: ["Mandatory liability insurance is included in rental pricing.", "Extra coverage (CDW/SCDW/TP) applies only if explicitly included in the Rental Agreement.", "Coverage may become invalid in case of breach, false data, unauthorized driver, or gross negligence.", "Excluded damages and all uncovered losses remain the renter's financial responsibility."] },
			{ id: "VI", title: "VI. Renter Conduct in Accident or Damage Event", paragraphs: ["In case of incident, the renter must immediately notify the Lessor, request police action, secure proper records, and protect the vehicle.", "Required claim documents must be submitted within 24 hours.", "Failure to comply may result in full liability and loss of insurance protection."] },
			{ id: "VII", title: "VII. Vehicle Breakdown", paragraphs: ["The Lessor may reimburse justified repair costs for reported failures under normal use.", "The renter must report faults immediately and monitor essential fluid levels.", "Costs arising from missed maintenance intervals are borne by the renter."] },
			{ id: "VIII", title: "VIII. Renter Liability", paragraphs: ["The renter is fully liable for losses caused by contract breach, unlawful use, or negligent operation."], bullets: ["Fines, tolls, parking charges and related admin costs.", "Damage from improper fuel use.", "All additional losses caused by misuse or non-compliance."] },
			{ id: "IX", title: "IX. Payment and Financial Conditions", paragraphs: ["Rental fees, deposit, and payment methods are defined in the Rental Agreement.", "Unless agreed otherwise, fees and deposit are payable in advance.", "Prepaid service fees are generally non-refundable.", "The renter authorizes direct charge collection for legitimate contractual claims."] },
			{ id: "X", title: "X. Data Processing", paragraphs: ["Personal data is processed in compliance with applicable law for contractual purposes.", "Data may be shared with authorities or contracted entities where legally required or contractually justified."] },
			{ id: "XI", title: "XI. Miscellaneous", paragraphs: ["Late payment interest applies under relevant civil law.", "Applicable law and jurisdiction follow the contracting Lessor entity, subject to mandatory provisions.", "Invalidity of one clause does not affect the validity of remaining clauses."] },
		],
		declarationTitle: "Declaration",
		declaration: [
			"I, the undersigned, acknowledge receipt of vehicle XYZ-123 under Rental Agreement no. (321ZYX).",
			"I accept full responsibility for additional costs incurred during possession, including fuel charges, fines, penalties, damage and administration costs.",
			"I authorize Global Rent Hungary Kft. to charge these amounts to my registered payment card under the rental terms.",
		],
	},
	de: {
		title: "Allgemeine Geschaeftsbedingungen (AGB)",
		lastUpdate: "Letzte Aktualisierung: 20. April 2026",
		toc: "Inhaltsverzeichnis",
		intro: [
			"Diese AGB gelten fuer Vertraege der folgenden Gesellschaften unter der Marke VING (im Folgenden: Vermieter): Global Rent Hungary Kft. (Adresse), Global Rent Austria GmbH (Adresse).",
			"Der Vermieter vermietet das im Mietvertrag bezeichnete Fahrzeug an den Mieter gemaess den nachstehenden Bedingungen.",
		],
		sections: [
			{ id: "I", title: "I. Allgemeine Bedingungen", paragraphs: ["Mit Unterzeichnung des Mietvertrags akzeptieren beide Parteien den Vertrag und diese AGB. Aenderungen sind nur schriftlich wirksam.", "Bei falschen Angaben oder Vertragsverstoessen kann der Vermieter den Vertrag mit sofortiger Wirkung kuendigen.", "Wird das Fahrzeug nach Vertragsende nicht innerhalb von 24 Stunden zurueckgegeben, darf der Vermieter sofortige Massnahmen einleiten."] },
			{ id: "II", title: "II. Nutzung des Fahrzeugs und Haftung", paragraphs: ["Das Fahrzeug darf nur vom Mieter oder einer vertraglich benannten berechtigten Person gefahren werden.", "Der Mieter haftet vollstaendig fuer den Zustand des Fahrzeugs bei Rueckgabe."], bullets: ["Fahren unter Alkohol- oder Drogeneinfluss ist verboten.", "Verboten sind u. a. strafbare Nutzung, Rennen, Abschleppen, gewerbliche Weitervermietung.", "Grenzuebertritte sind nur mit schriftlicher Genehmigung gegen Gebuehr erlaubt."] },
			{ id: "III", title: "III. Mietdauer, Uebergabe und Rueckgabe", paragraphs: ["Die Mindestmietdauer betraegt 24 Stunden; bei mehr als 1 Stunde Verspaetung kann ein weiterer Tagespreis berechnet werden.", "Das Fahrzeug ist sauber, mit Unterlagen und Zubehoer am vereinbarten Ort und Zeitpunkt zurueckzugeben.", "Fehlender Kraftstoff und neu festgestellte Schaeden werden gemaess Vertrag berechnet."] },
			{ id: "IV", title: "IV. Assistance-Leistungen", paragraphs: ["Standard- und Premium-Assistance sind gegen Gebuehr verfuegbar.", "Kosten fuer veranlasste Leistungen traegt der Mieter nach den Paketbedingungen."], bullets: ["Leistungen bei Unfall, Panne, Kraftstoffmangel, Schluesselproblemen und Reifenschaden.", "Ohne Assistance-Paket fallen zusaetzliche Organisationsgebuehren an."] },
			{ id: "V", title: "V. Versicherung", paragraphs: ["Die gesetzliche Haftpflichtversicherung ist im Mietpreis enthalten.", "Zusatzversicherungen gelten nur bei ausdruecklicher Vereinbarung im Mietvertrag.", "Bei Vertragsverstoss oder unberechtigtem Fahrer kann der Versicherungsschutz entfallen.", "Nicht gedeckte Schaeden sind vom Mieter zu ersetzen."] },
			{ id: "VI", title: "VI. Verhalten bei Unfall oder Schaden", paragraphs: ["Der Mieter muss den Vermieter unverzueglich informieren, die Polizei verstaendigen und alle Unterlagen sichern.", "Schadenunterlagen sind spaetestens innerhalb von 24 Stunden vorzulegen.", "Bei Pflichtverletzung haftet der Mieter vollumfaenglich."] },
			{ id: "VII", title: "VII. Fahrzeugdefekt", paragraphs: ["Notwendige Reparaturkosten bei ordnungsgemaesser Nutzung koennen nach Vertrag erstattet werden.", "Technische Probleme sind unverzueglich zu melden; Wartungspflichten sind einzuhalten.", "Folgeschaeden aus versaeumter Wartung traegt der Mieter."] },
			{ id: "VIII", title: "VIII. Haftung des Mieters", paragraphs: ["Der Mieter haftet fuer alle Schaeden aus vertragswidriger oder rechtswidriger Nutzung."], bullets: ["Bussen, Parkgebuehren, Maut und Verwaltungskosten.", "Schaeden durch falschen Kraftstoff.", "Weitere Folgekosten aus Pflichtverletzungen."] },
			{ id: "IX", title: "IX. Zahlungs- und Finanzbedingungen", paragraphs: ["Mietpreis, Kaution und Zahlungsarten ergeben sich aus dem Mietvertrag.", "Sofern nichts anderes vereinbart ist, sind Entgelte im Voraus zu zahlen.", "Vorauszahlungen sind grundsaetzlich nicht erstattungsfaehig.", "Der Mieter autorisiert die Belastung seines Zahlungsmittels fuer berechtigte Forderungen." ] },
			{ id: "X", title: "X. Datenverarbeitung", paragraphs: ["Personenbezogene Daten werden rechtskonform zur Vertragsabwicklung verarbeitet.", "Eine Weitergabe erfolgt nur in gesetzlich oder vertraglich vorgesehenen Faellen."] },
			{ id: "XI", title: "XI. Sonstige Bestimmungen", paragraphs: ["Bei Zahlungsverzug gelten Verzugszinsen nach anwendbarem Recht.", "Rechtswahl und Gerichtsstand richten sich nach der jeweiligen Vermietergesellschaft.", "Die Unwirksamkeit einzelner Klauseln beruehrt die Wirksamkeit der uebrigen Regelungen nicht."] },
		],
		declarationTitle: "Erklaerung",
		declaration: [
			"Ich bestaetige die Uebernahme des Fahrzeugs XYZ-123 auf Grundlage des Mietvertrags (321ZYX).",
			"Ich uebernehme die volle Verantwortung fuer alle waehrend der Nutzung entstehenden Zusatzkosten.",
			"Ich stimme zu, dass diese Betraege gemaess den Mietbedingungen belastet werden duerfen.",
		],
	},
}

export default function Term() {
	const { lang } = useLanguage()
	const content = termsByLang[(lang as Lang) || "en"] ?? termsByLang.en

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
							<span className="text-white text-xl-medium">{content.lastUpdate}</span>
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
											<li className="mb-2">
												<Link href="#declaration" className="text-md-medium neutral-500">
													{content.declarationTitle}
												</Link>
											</li>
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
											{section.bullets && (
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

									<div className="content rounded-3 border p-4" id="declaration">
										<h3 className="text-xl-bold mb-3 neutral-1000">{content.declarationTitle}</h3>
										{content.declaration.map((paragraph, index) => (
											<p className="text-md-medium neutral-500 mb-3" key={`decl-${index}`}>
												{paragraph}
											</p>
										))}
										<p className="text-xl-medium border-top pt-4 neutral-1000 mb-0">{content.lastUpdate}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}
