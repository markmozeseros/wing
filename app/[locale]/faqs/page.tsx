'use client'

import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import { useLanguage } from '@/util/LanguageContext'
import { useState } from 'react'

type Lang = 'hu' | 'en' | 'de'

type FAQItem = {
  id: string
  q: string
  a: string[]
}

type FAQCategory = {
  title: string
  items: FAQItem[]
}

type FAQCopy = {
  breadcrumbHome: string
  pageTitle: string
  pageSubtitle: string
  quickNavTitle: string
  quickNavItems: string[]
  categories: FAQCategory[]
}

const faqData: Record<Lang, FAQCopy> = {
  hu: {
    breadcrumbHome: 'Főoldal',
    pageTitle: 'GYIK - Autóbérlés Magyarországon',
    pageSubtitle: 'A legfontosabb bérlési kérdések és válaszok egy helyen.',
    quickNavTitle: 'Gyors navigáció',
    quickNavItems: [
      'Jogosultság és feltételek',
      'Foglalások és módosítások',
      'Fizetés és kaució',
      'Biztosítások és védelem',
      'Lemondások és visszatérítések',
      'Utazás és használati szabályok',
      'Extrák és kiegészítők',
      'Díjak és ügyféltámogatás',
    ],
    categories: [
      {
        title: 'Alapfeltételek és jogosultság',
        items: [
          { id: 'q1', q: '1. Milyen dokumentumok szükségesek autóbérléshez?', a: ['Érvényes jogosítvány (minimum 1 éve megszerzett).', 'Személyi igazolvány vagy útlevél.', 'A főbérlő nevére szóló érvényes hitelkártya.'] },
          { id: 'q2', q: '2. Elfogadják a külföldi jogosítványokat?', a: ['Igen.', 'EU-s jogosítványok elfogadottak.', 'Nem latin betűs jogosítványhoz nemzetközi jogosítvány vagy hiteles fordítás szükséges.'] },
          { id: 'q3', q: '3. Elfogadják a digitális jogosítványt vagy másolatot?', a: ['Nem. Csak eredeti fizikai jogosítvány fogadható el.'] },
          { id: 'q4', q: '4. Mi a minimum életkor bérléshez?', a: ['Általánosan 21 év (minimum 1 éves jogosítvánnyal).', 'Egyes kategóriáknál 25 vagy 30 év.', '25 év alatt fiatal vezetői felár lehet.'] },
          { id: 'q5', q: '5. Hozzáadható másodvezető?', a: ['Igen, felár ellenében.', 'A másodvezetőnek is meg kell felelnie a kor- és jogosítványfeltételeknek.'] },
          { id: 'q6', q: '6. Meddig tartják fenn a foglalást?', a: ['Általában 60 percig a tervezett átvétel után.'] },
          { id: 'q7', q: '7. Mi történik járatkésés esetén?', a: ['Repülőtéri átvételnél a foglalás a járatszám alapján kezelhető, nyitvatartási időn belül.'] },
          { id: 'q8', q: '8. Mi van, ha nincs elérhető a foglalt autókategória?', a: ['Díjmentesen magasabb kategóriájú autót biztosítanak.'] },
        ],
      },
      {
        title: 'Fizetés és kaució',
        items: [
          { id: 'q9', q: '9. Milyen fizetési módok elfogadottak?', a: ['Elfogadott: Visa, Mastercard, American Express.', 'Nem elfogadott: készpénz, Revolut/Wise, Apple Pay/Google Pay, előre fizetett kártyák.'] },
          { id: 'q10', q: '10. Elfogadnak debit kártyát?', a: ['Bizonyos kategóriákban igen.'] },
          { id: 'q11', q: '11. Mennyi a kaució?', a: ['Példák: M/E/C kategória: bérleti díj + 300 EUR.', 'I/S kategória: bérleti díj + 500 EUR.', 'F/P: +1200 EUR.', 'X/L: +1800 EUR.'] },
          { id: 'q12', q: '12. Kell két hitelkártya?', a: ['Igen, bizonyos prémium és luxus kategóriákhoz.'] },
        ],
      },
      {
        title: 'Előrefizetett foglalások',
        items: [
          { id: 'q13', q: '13. Módosítható előrefizetett foglalás?', a: ['Igen, legalább 48 órával indulás előtt.', 'Módosítási díj: 25,40 EUR.'] },
          { id: 'q14', q: '14. Törölhető az előrefizetett foglalás?', a: ['Igen.', 'Törlési díj: 3 napi bérleti díj.'] },
          { id: 'q15', q: '15. Mi történik no-show esetén?', a: ['Az előre befizetett összeg nem visszatéríthető.'] },
        ],
      },
      {
        title: 'Biztosítások és védelem',
        items: [
          { id: 'q16', q: '16. Van alapbiztosítás?', a: ['Igen, felelősségbiztosítás alapból tartalmazott.'] },
          { id: 'q17', q: '17. Mi az LDW?', a: ['A Collision Damage Waiver (LDW) csökkenti a káresemény esetén fizetendő önrészt.'] },
          { id: 'q18', q: '18. Lehet tovább csökkenteni az önrészt?', a: ['Igen: standard önrészcsökkentés, csökkentett önrész, 0 EUR önrész opció.'] },
          { id: 'q19', q: '19. Van gumi- és üvegvédelem?', a: ['Igen, opcionális extra.', 'Önrész akár 0 EUR.'] },
          { id: 'q20', q: '20. Van belsőtér-védelem?', a: ['Igen. Fedezhet szennyeződéseket, kiömlött folyadékokat, kisebb belső sérüléseket, túlzott tisztítási költségeket.', 'Nem fedezett például: dohányzás okozta károk, szándékos rongálás, nem megfelelő állatszállításból eredő károk.'] },
          { id: 'q21', q: '21. Van assistance?', a: ['Igen, 24/7 közúti segítségnyújtás elérhető.'] },
        ],
      },
      {
        title: 'Külföldi utazás és használat',
        items: [
          { id: 'q22', q: '22. Lehet külföldre menni az autóval?', a: ['Igen, előzetes engedéllyel sok európai országba.'] },
          { id: 'q23', q: '23. Van külföldhasználati díj?', a: ['Igen. Külföldhasználati díj alkalmazható.'] },
          { id: 'q24', q: '24. Mi történik engedély nélküli határátlépésnél?', a: ['150 EUR adminisztrációs díj plusz további díjak.'] },
        ],
      },
      {
        title: 'Tankolás és elektromos autók',
        items: [
          { id: 'q25', q: '25. Tele tankkal kell visszahozni az autót?', a: ['Igen, hacsak nem vásárolt tankolási opciót.'] },
          { id: 'q26', q: '26. Mi történik, ha nem tele tankkal adom vissza?', a: ['Üzemanyagköltség + szolgáltatási díj kerül felszámításra.'] },
          { id: 'q27', q: '27. Van előre megvásárolható üzemanyag opció?', a: ['Igen.'] },
          { id: 'q28', q: '28. Elektromos autót hogyan kell visszahozni?', a: ['Általában ugyanazzal a töltöttséggel vagy minimum 80%-on.'] },
        ],
      },
      {
        title: 'Extrák és kiegészítők',
        items: [
          { id: 'q29', q: '29. Milyen extrák elérhetők?', a: ['GPS, gyerekülés, ülésmagasító, téli felszerelés, tetőbox, síléctartó, másodvezető, kiszállítás/visszaszállítás.', 'Készlet függvényében.'] },
        ],
      },
      {
        title: 'Egyirányú bérlés',
        items: [
          { id: 'q30', q: '30. Másik helyen leadható az autó?', a: ['Igen, felár ellenében.'] },
          { id: 'q31', q: '31. Nemzetközi one-way lehetséges?', a: ['Előzetes egyeztetéssel igen.'] },
          { id: 'q32', q: '32. Mi történik jogosulatlan egyirányú leadásnál?', a: ['Pótdíj számolható fel.'] },
        ],
      },
      {
        title: 'Díjak és pótdíjak',
        items: [
          { id: 'q33', q: '33. Benne van a magyar autópályadíj?', a: ['Igen, a magyarországi autópályadíj benne van.', 'A külföldi útdíjak a bérlőt terhelik.'] },
          { id: 'q34', q: '34. Milyen plusz díjak lehetnek?', a: ['Lehetséges: reptéri illeték, premium lokációs felár, nyitvatartáson túli felvétel díja, adminisztrációs díjak, cégautóadó, regisztrációs díjak, immobilizációs díj.'] },
        ],
      },
      {
        title: 'Rugalmas autóleadási garancia',
        items: [
          { id: 'q35', q: '35. Korábban leadhatom az autót?', a: ['Igen. Fizetés később tarifán részleges kedvezmény lehetséges.'] },
          { id: 'q36', q: '36. Mi van, ha később adom le és nem szólok?', a: ['12,7 EUR / nap díj kerülhet felszámításra.'] },
          { id: 'q37', q: '37. Mi van, ha másik irodában adom le előzetes jelzés nélkül?', a: ['21,34 EUR szervizdíj + egyirányú leadási díj.'] },
        ],
      },
      {
        title: 'Téli gumik és kizárások',
        items: [
          { id: 'q38', q: '38. A téli gumi benne van?', a: ['Szezonban (okt.15 - márc.31) kötelező lehet és díjköteles.'] },
          { id: 'q39', q: '39. Mire nem terjednek ki a védelmi csomagok?', a: ['Nem fedezett például: dohányzás okozta károk, elveszett autótartozékok, szándékos károkozás, nem megfelelően szállított háziállat okozta károk.'] },
          { id: 'q40', q: '40. ÁFA benne van az árakban?', a: ['Igen, ahol alkalmazandó, minden díj ÁFÁ-val értendő.'] },
          { id: 'q41', q: '41. Céges ügyfelekre ugyanazok a szabályok vonatkoznak?', a: ['Nem feltétlenül. Egyedi vállalati szerződések eltérő feltételeket tartalmazhatnak.'] },
        ],
      },
    ],
  },
  en: {
    breadcrumbHome: 'Home',
    pageTitle: 'FAQ - Car Rental in Hungary',
    pageSubtitle: 'Key rental questions and answers in one place.',
    quickNavTitle: 'Quick Navigation',
    quickNavItems: [
      'Eligibility and requirements',
      'Bookings and modifications',
      'Payment and deposit',
      'Insurance and protection',
      'Cancellations and refunds',
      'Travel and usage rules',
      'Extras and add-ons',
      'Fees and customer support',
    ],
    categories: [
      {
        title: 'Eligibility and basic requirements',
        items: [
          { id: 'q1', q: '1. What documents are required to rent a car?', a: ['A valid driving license (held for at least 1 year).', 'ID card or passport.', 'A valid credit card in the main renter\'s name.'] },
          { id: 'q2', q: '2. Are foreign driving licenses accepted?', a: ['Yes.', 'EU licenses are accepted.', 'Non-Latin licenses require an international driving permit or certified translation.'] },
          { id: 'q3', q: '3. Do you accept digital licenses or copies?', a: ['No. Only original physical driving licenses are accepted.'] },
          { id: 'q4', q: '4. What is the minimum age for rental?', a: ['Generally 21 years (with at least 1 year valid license).', 'Some categories require 25 or 30 years.', 'Young driver surcharge may apply under 25.'] },
          { id: 'q5', q: '5. Can I add an additional driver?', a: ['Yes, with surcharge.', 'The additional driver must also meet age and license requirements.'] },
          { id: 'q6', q: '6. How long is my reservation held?', a: ['Usually for 60 minutes after scheduled pickup time.'] },
          { id: 'q7', q: '7. What happens in case of flight delay?', a: ['For airport pickup, reservation can be handled by flight number within opening hours.'] },
          { id: 'q8', q: '8. What if my booked vehicle category is unavailable?', a: ['A higher category vehicle is provided free of charge.'] },
        ],
      },
      {
        title: 'Payment and deposit',
        items: [
          { id: 'q9', q: '9. Which payment methods are accepted?', a: ['Accepted: Visa, Mastercard, American Express.', 'Not accepted: cash, Revolut/Wise, Apple Pay/Google Pay, prepaid cards.'] },
          { id: 'q10', q: '10. Are debit cards accepted?', a: ['Yes, for certain categories.'] },
          { id: 'q11', q: '11. How much is the deposit?', a: ['Examples: M/E/C category: rental fee + 300 EUR.', 'I/S category: rental fee + 500 EUR.', 'F/P: +1200 EUR.', 'X/L: +1800 EUR.'] },
          { id: 'q12', q: '12. Do I need two credit cards?', a: ['Yes, for certain premium and luxury categories.'] },
        ],
      },
      {
        title: 'Prepaid bookings',
        items: [
          { id: 'q13', q: '13. Can a prepaid booking be modified?', a: ['Yes, at least 48 hours before pickup.', 'Modification fee: 25.40 EUR.'] },
          { id: 'q14', q: '14. Can a prepaid booking be canceled?', a: ['Yes.', 'Cancellation fee: 3 rental days.'] },
          { id: 'q15', q: '15. What happens in case of no-show?', a: ['The prepaid amount is non-refundable.'] },
        ],
      },
      {
        title: 'Insurance and protection',
        items: [
          { id: 'q16', q: '16. Is basic insurance included?', a: ['Yes, liability insurance is included by default.'] },
          { id: 'q17', q: '17. What is LDW?', a: ['Collision Damage Waiver (LDW) reduces the excess payable in case of damage.'] },
          { id: 'q18', q: '18. Can excess be reduced further?', a: ['Yes: standard excess reduction, reduced excess, and 0 EUR excess option.'] },
          { id: 'q19', q: '19. Is there tire and glass protection?', a: ['Yes, as an optional extra.', 'Excess can be as low as 0 EUR.'] },
          { id: 'q20', q: '20. Is there interior protection?', a: ['Yes. It may cover dirt, spilled liquids, minor interior damage, and excessive cleaning costs.', 'Not covered for example: smoking damage, intentional damage, damage from improper pet transport.'] },
          { id: 'q21', q: '21. Is assistance available?', a: ['Yes, 24/7 roadside assistance is available.'] },
        ],
      },
      {
        title: 'International travel and usage',
        items: [
          { id: 'q22', q: '22. Can I travel abroad with the car?', a: ['Yes, with prior approval to many European countries.'] },
          { id: 'q23', q: '23. Is there a foreign usage fee?', a: ['Yes. A foreign usage fee may apply.'] },
          { id: 'q24', q: '24. What happens with unauthorized border crossing?', a: ['150 EUR administration fee plus additional charges.'] },
        ],
      },
      {
        title: 'Fuel and electric vehicles',
        items: [
          { id: 'q25', q: '25. Do I need to return the car with a full tank?', a: ['Yes, unless you purchased a fuel option.'] },
          { id: 'q26', q: '26. What if I return it without full tank?', a: ['Fuel cost + service fee will be charged.'] },
          { id: 'q27', q: '27. Is there a prepaid fuel option?', a: ['Yes.'] },
          { id: 'q28', q: '28. How should an electric vehicle be returned?', a: ['Usually with the same charge level or at least 80%.'] },
        ],
      },
      {
        title: 'Extras and add-ons',
        items: [
          { id: 'q29', q: '29. Which extras are available?', a: ['GPS, child seat, booster, winter equipment, roof box, ski rack, additional driver, delivery/collection.', 'Subject to availability.'] },
        ],
      },
      {
        title: 'One-way rental',
        items: [
          { id: 'q30', q: '30. Can I drop the car at another location?', a: ['Yes, for an extra fee.'] },
          { id: 'q31', q: '31. Is international one-way possible?', a: ['Yes, with prior arrangement.'] },
          { id: 'q32', q: '32. What happens in case of unauthorized one-way drop-off?', a: ['A surcharge may be charged.'] },
        ],
      },
      {
        title: 'Fees and surcharges',
        items: [
          { id: 'q33', q: '33. Is Hungarian motorway fee included?', a: ['Yes, Hungarian motorway fee is included.', 'Foreign tolls are charged to the renter.'] },
          { id: 'q34', q: '34. What additional fees may apply?', a: ['Possible: airport fee, premium location surcharge, out-of-hours pickup fee, administration fees, company car tax, registration fees, immobilization fee.'] },
        ],
      },
      {
        title: 'Flexible return guarantee',
        items: [
          { id: 'q35', q: '35. Can I return the car earlier?', a: ['Yes. On pay-later rates, partial discount may be possible.'] },
          { id: 'q36', q: '36. What if I return later without notice?', a: ['A fee of 12.7 EUR/day may be charged.'] },
          { id: 'q37', q: '37. What if I return at another office without prior notice?', a: ['21.34 EUR service fee + one-way drop-off fee.'] },
        ],
      },
      {
        title: 'Winter tires and exclusions',
        items: [
          { id: 'q38', q: '38. Are winter tires included?', a: ['In season (Oct 15 - Mar 31) they may be mandatory and chargeable.'] },
          { id: 'q39', q: '39. What is not covered by protection packages?', a: ['For example not covered: smoking damage, lost car accessories, intentional damage, damage caused by improperly transported pets.'] },
          { id: 'q40', q: '40. Is VAT included in prices?', a: ['Yes, where applicable all fees include VAT.'] },
          { id: 'q41', q: '41. Do corporate clients have the same rules?', a: ['Not necessarily. Individual corporate agreements may contain different conditions.'] },
        ],
      },
    ],
  },
  de: {
    breadcrumbHome: 'Startseite',
    pageTitle: 'FAQ - Autovermietung in Ungarn',
    pageSubtitle: 'Die wichtigsten Mietfragen und Antworten an einem Ort.',
    quickNavTitle: 'Schnellnavigation',
    quickNavItems: [
      'Berechtigung und Voraussetzungen',
      'Buchungen und Aenderungen',
      'Zahlung und Kaution',
      'Versicherung und Schutz',
      'Stornierungen und Erstattungen',
      'Reise- und Nutzungsregeln',
      'Extras und Zubehoer',
      'Gebuehren und Kundensupport',
    ],
    categories: [
      {
        title: 'Grundvoraussetzungen und Berechtigung',
        items: [
          { id: 'q1', q: '1. Welche Dokumente sind fuer die Anmietung erforderlich?', a: ['Gueltiger Fuehrerschein (mindestens seit 1 Jahr).', 'Personalausweis oder Reisepass.', 'Gueltige Kreditkarte auf den Hauptmieter.'] },
          { id: 'q2', q: '2. Werden auslaendische Fuehrerscheine akzeptiert?', a: ['Ja.', 'EU-Fuehrerscheine werden akzeptiert.', 'Nicht-lateinische Fuehrerscheine erfordern internationalen Fuehrerschein oder beglaubigte Uebersetzung.'] },
          { id: 'q3', q: '3. Werden digitale Fuehrerscheine oder Kopien akzeptiert?', a: ['Nein. Nur original physische Fuehrerscheine werden akzeptiert.'] },
          { id: 'q4', q: '4. Was ist das Mindestalter fuer die Miete?', a: ['Allgemein 21 Jahre (mit mindestens 1 Jahr Fuehrerschein).', 'Bei einigen Kategorien 25 oder 30 Jahre.', 'Unter 25 kann ein Jungfahrerzuschlag anfallen.'] },
          { id: 'q5', q: '5. Kann ein Zusatzfahrer hinzugefuegt werden?', a: ['Ja, gegen Aufpreis.', 'Der Zusatzfahrer muss die Alters- und Fuehrerscheinbedingungen ebenfalls erfuellen.'] },
          { id: 'q6', q: '6. Wie lange bleibt die Reservierung bestehen?', a: ['In der Regel 60 Minuten nach geplanter Abholzeit.'] },
          { id: 'q7', q: '7. Was passiert bei Flugverspaetung?', a: ['Bei Flughafenabholung kann die Reservierung anhand der Flugnummer waehrend der Oeffnungszeiten bearbeitet werden.'] },
          { id: 'q8', q: '8. Was passiert, wenn die gebuchte Fahrzeugkategorie nicht verfuegbar ist?', a: ['Kostenfrei wird ein Fahrzeug einer hoeheren Kategorie bereitgestellt.'] },
        ],
      },
      {
        title: 'Zahlung und Kaution',
        items: [
          { id: 'q9', q: '9. Welche Zahlungsarten werden akzeptiert?', a: ['Akzeptiert: Visa, Mastercard, American Express.', 'Nicht akzeptiert: Bargeld, Revolut/Wise, Apple Pay/Google Pay, Prepaid-Karten.'] },
          { id: 'q10', q: '10. Werden Debitkarten akzeptiert?', a: ['Ja, in bestimmten Kategorien.'] },
          { id: 'q11', q: '11. Wie hoch ist die Kaution?', a: ['Beispiele: Kategorie M/E/C: Mietpreis + 300 EUR.', 'Kategorie I/S: Mietpreis + 500 EUR.', 'F/P: +1200 EUR.', 'X/L: +1800 EUR.'] },
          { id: 'q12', q: '12. Sind zwei Kreditkarten erforderlich?', a: ['Ja, bei bestimmten Premium- und Luxus-Kategorien.'] },
        ],
      },
      {
        title: 'Vorausbezahlte Buchungen',
        items: [
          { id: 'q13', q: '13. Kann eine vorausbezahlte Buchung geaendert werden?', a: ['Ja, mindestens 48 Stunden vor Mietbeginn.', 'Aenderungsgebuehr: 25,40 EUR.'] },
          { id: 'q14', q: '14. Kann eine vorausbezahlte Buchung storniert werden?', a: ['Ja.', 'Stornogebuehr: 3 Tagesmieten.'] },
          { id: 'q15', q: '15. Was passiert bei No-Show?', a: ['Der vorausbezahlte Betrag ist nicht erstattungsfaehig.'] },
        ],
      },
      {
        title: 'Versicherung und Schutz',
        items: [
          { id: 'q16', q: '16. Gibt es eine Basisversicherung?', a: ['Ja, Haftpflichtversicherung ist standardmaessig enthalten.'] },
          { id: 'q17', q: '17. Was ist LDW?', a: ['Collision Damage Waiver (LDW) reduziert den Selbstbehalt bei Schadensfaellen.'] },
          { id: 'q18', q: '18. Kann der Selbstbehalt weiter reduziert werden?', a: ['Ja: Standard-Selbstbehaltsreduktion, reduzierter Selbstbehalt, 0-EUR-Selbstbehalt.'] },
          { id: 'q19', q: '19. Gibt es Reifen- und Glasschutz?', a: ['Ja, als optionale Zusatzleistung.', 'Selbstbehalt kann bis auf 0 EUR sinken.'] },
          { id: 'q20', q: '20. Gibt es Innenraumschutz?', a: ['Ja. Er kann Verschmutzungen, verschuettete Fluessigkeiten, kleinere Innenschaeden und aussergewoehnliche Reinigungskosten abdecken.', 'Nicht abgedeckt z.B.: Rauchschaeden, vorsaetzliche Beschaedigung, Schaeden durch unsachgemaessen Tiertransport.'] },
          { id: 'q21', q: '21. Gibt es Assistance?', a: ['Ja, 24/7 Pannenhilfe ist verfuegbar.'] },
        ],
      },
      {
        title: 'Auslandsfahrt und Nutzung',
        items: [
          { id: 'q22', q: '22. Darf ich mit dem Auto ins Ausland fahren?', a: ['Ja, mit vorheriger Genehmigung in viele europaeische Laender.'] },
          { id: 'q23', q: '23. Gibt es eine Auslandsnutzungsgebuehr?', a: ['Ja. Eine Auslandsnutzungsgebuehr kann anfallen.'] },
          { id: 'q24', q: '24. Was passiert bei unerlaubtem Grenzuebertritt?', a: ['150 EUR Verwaltungsgebuehr plus weitere Gebuehren.'] },
        ],
      },
      {
        title: 'Tanken und Elektrofahrzeuge',
        items: [
          { id: 'q25', q: '25. Muss das Auto vollgetankt zurueckgegeben werden?', a: ['Ja, sofern keine Tankoption gekauft wurde.'] },
          { id: 'q26', q: '26. Was passiert bei Rueckgabe ohne vollen Tank?', a: ['Kraftstoffkosten + Servicegebuehr werden berechnet.'] },
          { id: 'q27', q: '27. Gibt es eine vorauszahlbare Tankoption?', a: ['Ja.'] },
          { id: 'q28', q: '28. Wie muss ein Elektroauto zurueckgegeben werden?', a: ['In der Regel mit gleichem Ladezustand oder mindestens 80%.'] },
        ],
      },
      {
        title: 'Extras und Zubehoer',
        items: [
          { id: 'q29', q: '29. Welche Extras sind verfuegbar?', a: ['GPS, Kindersitz, Sitzerhoehung, Winterausruestung, Dachbox, Skihalter, Zusatzfahrer, Lieferung/Ruecktransport.', 'Je nach Verfuegbarkeit.'] },
        ],
      },
      {
        title: 'Einwegmiete',
        items: [
          { id: 'q30', q: '30. Kann ich das Auto an einem anderen Ort abgeben?', a: ['Ja, gegen Aufpreis.'] },
          { id: 'q31', q: '31. Ist internationale Einwegmiete moeglich?', a: ['Ja, nach vorheriger Abstimmung.'] },
          { id: 'q32', q: '32. Was passiert bei unberechtigter Einwegabgabe?', a: ['Ein Zuschlag kann berechnet werden.'] },
        ],
      },
      {
        title: 'Gebuehren und Zuschlaege',
        items: [
          { id: 'q33', q: '33. Ist die ungarische Autobahngebuehr enthalten?', a: ['Ja, die ungarische Autobahngebuehr ist enthalten.', 'Auslaendische Mautgebuehren traegt der Mieter.'] },
          { id: 'q34', q: '34. Welche Zusatzgebuehren koennen anfallen?', a: ['Moeglich: Flughafengebuehr, Premium-Standortzuschlag, Abholung ausserhalb Oeffnungszeiten, Verwaltungsgebuehren, Firmenwagensteuer, Registrierungsgebuehren, Immobilisierungsgebuehr.'] },
        ],
      },
      {
        title: 'Flexible Rueckgabegarantie',
        items: [
          { id: 'q35', q: '35. Kann ich das Auto frueher zurueckgeben?', a: ['Ja. Bei Pay-later Tarifen kann eine teilweise Ermaessigung moeglich sein.'] },
          { id: 'q36', q: '36. Was passiert bei spaeter Rueckgabe ohne Meldung?', a: ['Es kann eine Gebuehr von 12,7 EUR/Tag anfallen.'] },
          { id: 'q37', q: '37. Was passiert bei Rueckgabe in einer anderen Station ohne Vorankuendigung?', a: ['21,34 EUR Servicegebuehr + Einwegabgabegebuehr.'] },
        ],
      },
      {
        title: 'Winterreifen und Ausschluesse',
        items: [
          { id: 'q38', q: '38. Sind Winterreifen enthalten?', a: ['In der Saison (15. Okt. - 31. Maerz) koennen sie verpflichtend und kostenpflichtig sein.'] },
          { id: 'q39', q: '39. Was ist von Schutzpaketen nicht abgedeckt?', a: ['Nicht abgedeckt z.B.: Rauchschaeden, verlorenes Fahrzeugzubehoer, vorsaetzliche Beschaedigung, Schaeden durch unsachgemaessen Tiertransport.'] },
          { id: 'q40', q: '40. Ist die MwSt. in den Preisen enthalten?', a: ['Ja, wo anwendbar verstehen sich alle Gebuehren inkl. MwSt.'] },
          { id: 'q41', q: '41. Gelten fuer Firmenkunden dieselben Regeln?', a: ['Nicht unbedingt. Individuelle Firmenvertraege koennen abweichende Bedingungen enthalten.'] },
        ],
      },
    ],
  },
}

export default function Faqs() {
  const { lang } = useLanguage()
  const safeLang: Lang = lang === 'hu' || lang === 'en' || lang === 'de' ? lang : 'en'
  const content = faqData[safeLang]

  const [openId, setOpenId] = useState<string>('q1')

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id))
  }

  return (
    <Layout footerStyle={1}>
      <section className="box-section background-2 py-96">
        <div className="container">
          <div className="text-center mb-40">
            <div className="background-body px-3 py-2 rounded-12 border d-inline-flex gap-3">
              <Link href="/" className="neutral-700 text-md-medium">{content.breadcrumbHome}</Link>
              <span>
                <img src="/assets/imgs/template/icons/arrow-right.svg" alt="VING" />
              </span>
              <Link href="#" className="neutral-1000 text-md-bold">FAQ</Link>
            </div>
            <h3 className="my-3 neutral-1000">{content.pageTitle}</h3>
            <p className="text-xl-medium neutral-500">{content.pageSubtitle}</p>
          </div>

          <div className="row g-3 mt-20">
            <div className="col-12">
              <h5 className="neutral-1000 mb-3">{content.quickNavTitle}</h5>
            </div>
            {content.quickNavItems.map((item, i) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={`${item}-${i}`}>
                <div className="card-contact h-100">
                  <div className="card-info">
                    <p className="text-sm-medium neutral-500 mb-2">0{i + 1}</p>
                    <p className="text-md-bold neutral-1000 mb-0">{item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-faqs-2 pt-80 pb-80 border-bottom background-body">
        <div className="container">
          {content.categories.map((category) => (
            <div key={category.title} className="mb-50">
              <h4 className="neutral-1000 mb-20">{category.title}</h4>
              <div className="accordion">
                {category.items.map((item) => (
                  <div className="mb-2 card border" key={item.id}>
                    <div className="px-0 card-header border-0 bg-gradient-1 background-card">
                      <button
                        type="button"
                        className="collapsed px-3 py-2 text-900 fw-bold d-flex align-items-center w-100 border-0 bg-transparent text-start"
                        onClick={() => toggle(item.id)}
                      >
                        <p className="text-lg-bold neutral-1000 pe-4 mb-0">{item.q}</p>
                        <span className="ms-auto arrow me-2">
                          <svg className="invert" xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
                            <path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className={`collapse ${openId === item.id ? 'show' : ''}`}>
                      <div className="pt-0 pb-4 card-body background-body">
                        <ul className="mb-0 ps-3">
                          {item.a.map((line, idx) => (
                            <li className="text-md-medium neutral-500 mb-2" key={`${item.id}-a-${idx}`}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
