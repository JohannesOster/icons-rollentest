import React from "react";
import styles from "./Personalities.module.css";

export const Personalities = {
  M: () => (
    <>
      <p>
        <strong>Macher</strong> gehören zu den handlungsorientierten Teamrollen.
        Sie sind diejenigen, die sicherstellen, dass sich das Team bewegt und
        nicht das gewünschte Ergebnis aus den Augen verliert. Als fordernde
        Person lieferst du dazu den Antrieb.
      </p>
      <p>
        Du bist dynamisch und voller Energie. Du arbeitest konzentriert und
        Druck macht dir nichts aus. Du übernimmst schnell Verantwortung und
        sogst für rasche Entscheidungen. Allerdings neigst du aber auch zu
        Provokationen und einer gewissen Arroganz.
      </p>
      <p>
        <h4>Häufige Stärken &amp; Schwächen</h4>
        <ul className={styles.negative}>
          <li>neigen zu Provokationen</li>
          <li>geraten leicht in Streit (ohne nachtragend zu sein)</li>
          <li>werden (v.a. von Teamexternen) als arrogant empfunden</li>
          <li>verursachen durch hektisches Auftreten Unruhe im Team</li>
          <li>ungeduldig</li>
          <li>
            können nur schwer mit unklaren oder ungenauen Angaben arbeiten
          </li>
        </ul>
        <ul className={styles.positive}>
          <li>fordern Kollegen heraus</li>
          <li>übernehmen schnell Verantwortung</li>
          <li>formulieren Teilziele</li>
          <li>sorgen für rasche Entscheidungsfindung</li>
          <li>veranlassen, dass Aufgaben sofort erledigt werden</li>
          <li>dynamisch</li>
          <li>arbeiten gut unter Druck</li>
          <li>haben Mut, Hindernisse zu überwinden</li>
          <li>behalten die wesentlichen Kernprobleme im Auge</li>
        </ul>
      </p>
      <p>
        <h4>Einsatzbereich</h4>
        Macher fühlen sich in einem Team von Gleichgestellten am wohlsten.
        Sobald sie eine Führungsposition übernehmen müssen, sind verstärkte
        Kontrolle und Koordination notwendig, welche gerade diesem Rollentyp ein
        hohes Maß an Selbstdisziplin abverlangen. Die Konzentration und das
        Nutzen der Stärken erweist sich als sinnvoll.
      </p>
    </>
  ),

  U: () => (
    <>
      <p>
        <strong>Umsetzer</strong> gehören zu den handlungsorientierten
        Teamrollen. Sie setzen an, wenn praktische Schritte geplant und so
        wirksam wie nur möglich durchgeführt werden müssen.
      </p>
      <p>
        Du bist zuverlässig, effizient und diszipliniert. Du brauchst stabile
        Strukturen – gibt es diese noch nicht, hilfst du, sie aufzubauen.
        Allerdings stehst du Veränderungen eher kritisch gegenüber und kannst
        leicht als unflexibel gelten.
      </p>
      <p>
        <h4>Häufige Stärken &amp; Schwächen</h4>
        <ul className={styles.negative}>
          <li>stehen Umweltveränderungen kritisch gegenüber</li>
          <li>reagieren auf neue Lösungsvorschläge unflexibel</li>
          <li>stabile Strukturen sind Voraussetzung für ihr Arbeiten</li>
        </ul>
        <ul className={styles.positive}>
          <li>setzen Konzepte in durchführbare Arbeitspläne um</li>
          <li>diszipliniert, verlässlich, effektiv</li>
          <li>arbeiten am Aufbau stabiler Strukturen</li>
          <li>methodische Arbeitsweise</li>
        </ul>
      </p>
      <p>
        <h4>Einsatzbereich</h4>
        Umsetzer sollten für die Definition einer klaren Zielsetzung,
        praktischer Ansätze und das Strukturieren der Vorgehensweise
        verantwortlich sein.
      </p>
    </>
  ),
  P: () => (
    <>
      <p>
        Der <strong>Perfektionist</strong> gehört zu den handlungsorientierten
        Teamrollen. Er hat seinen eindrucksvollen Glanzmoment am Ende einer
        Aufgabenstellung, wenn er das Ergebnis noch einmal aufpoliert und die
        Arbeit auf mögliche Fehler untersucht. Du setzt stets einen sehr hohen
        Qualitätsanspruch!
      </p>
      <p>
        Du bist genau, pünktlich, zuverlässig, gewissenhaft, aber kannst auch
        ängstlich sein. Du vermeidest Fehler und sorgst für genaue Einhaltung
        aller Details. Allerdings fällt es dir schwer zu delegieren, da du
        lieber alles noch einmal persönlich überprüfst und kontrollierst –
        dadurch kannst du schon mal den Überblick verlieren.
      </p>
      <p>
        <h4>Häufige Stärken &amp; Schwächen</h4>
        <ul className={styles.negative}>
          <li>kontrollieren lieber selbst als zu delegieren</li>
          <li>oft überängstlich und zu genau</li>
          <li>verlieren manchmal den Überblick</li>
        </ul>
        <ul className={styles.positive}>
          <li>vermeiden Fehler</li>
          <li>stellen optimale Ergebnisse sicher</li>
          <li>gewissenhaft, pünktlich</li>
        </ul>
      </p>
      <p>
        <h4>Einsatzbereich</h4>
        Perfektionisten leisten v. a. dann einen wichtigen Beitrag, wenn das
        Team Gefahr läuft, zu oberflächlich zu arbeiten oder Zeitvorgaben nicht
        einzuhalten.
      </p>
    </>
  ),

  K: () => (
    <>
      <p>
        <strong>Koordinatoren</strong> gehören zu den kommunikationsorientierten
        Teamrollen. Sie treten in Erscheinung, wenn sich das Team auf die Ziele
        konzentrieren muss und wenn es darum geht, Teammitgliedern Aufgaben
        entsprechend ihren Neigungen zu übergeben, um einen Beitrag zum
        Teamerfolg leisten zu können.
      </p>
      <p>
        Du bist selbstsicher, entschlusskräftig, kommunikativ und kannst gut
        zuhören. Du koordinierst, setzt Ziele und Prioritäten und delegierst
        Aufgaben an jene, die dafür am besten geeignet sind. Allerdings kannst
        du manipulierend wirken – vor allem dann, wenn du auch anfängst,
        persönliche Aufgaben zu delegieren.
      </p>
      <p>
        <h4>Häufige Stärken &amp; Schwächen</h4>
        <ul className={styles.negative}>
          <li>werden oft als manipulierend empfunden</li>
          <li>neigen dazu, persönliche Aufgaben zu delegieren</li>
        </ul>
        <ul className={styles.positive}>
          <li>wichtig für die Moderation eines Gruppenprozesses</li>
          <li>fördern Entscheidungsprozesse</li>
          <li>selbstsicher, vertrauensvoll in eigene Fähigkeiten</li>
        </ul>
      </p>
      <p>
        <h4>Einsatzbereich</h4>
        Menschen mit den Eigenschaften eines Koordinators sind als Teamleiter
        geeignet, deren Aufgaben in der Koordination und Zuweisung der
        Sachbereiche liegen sollten.
      </p>
    </>
  ),
  B: () => (
    <>
      <p>
        Der <strong>Beobachter</strong> gehört zu den wissensorientierten
        Teamrollen. Er besticht durch sein Auge der Logik, mit dem er die
        Optionen des Teams objektiv abzuwägen weiß. Du bist in der Lage ein
        unparteiisches Urteil zu geben!
      </p>
      <p>
        Du bist nüchtern und strategisch, verschaffst dir einen Überblick und
        bist eher introvertiert. Du berücksichtigst mit deinem kritischen Auge
        alle relevanten Möglichkeiten und hast ein gutes Urteilsvermögen.
        Allerdings ergreifst du eher selten ohne Aufforderung das Wort und tust
        dir schwer damit, andere zu motivieren. Du kannst als herablassend
        empfunden werden.
      </p>
      <p>
        <h4>Häufige Stärken &amp; Schwächen</h4>
        <ul className={styles.negative}>
          <li>können andere kaum inspirieren</li>
          <li>neigen dazu, nach Kritik das Interesse gänzlich zu verlieren</li>
          <li>können als taktlos und herablassend empfunden werden</li>
        </ul>
        <ul className={styles.positive}>
          <li>berücksichtigen alle relevanten Möglichkeiten</li>
          <li>verfügen über gutes Urteilsvermögen</li>
          <li>untersuchen Vorschläge auf Machbarkeit</li>
          <li>strategisch und kritisch</li>
        </ul>
      </p>
      <p>
        <h4>Einsatzbereich</h4>
        Der Beobachter sollte darauf achten, dass seine Meinung gehört wird.
        Dies gelingt, indem er versucht, weniger zynisch und skeptisch zu sein.
      </p>
    </>
  ),
  T: () => (
    <>
      <p>
        <strong>Teamarbeiter</strong> gehören zu den kommunikationsorientierten
        Teamrollen. Sie sorgen für die nötige Harmonie im Team. Du erledigst
        Aufgaben stets zum Vorteil des gesamten Teams und bist hilfsbereit.
      </p>
      <p>
        Du bist beliebt, kommunikativ und diplomatisch. Du sorgst für ein
        angenehmes Arbeitsklima, vermeidest Rivalität und sorgst dafür, dass
        auch introvertierte Teammitglieder eingebunden werden. Allerdings bist
        du in kritischen Situationen schnell überfordert und überlässt dann
        gerne anderen die Entscheidungen.
      </p>
      <p>
        <h4>Häufige Stärken &amp; Schwächen</h4>
        <ul className={styles.negative}>
          <li>sind in kritischen Situationen unentschlossen</li>
          <li>tendieren dazu, Entscheidungen anderen zu überlassen</li>
        </ul>
        <ul className={styles.positive}>
          <li>sorgen für angenehmes Arbeitsklima</li>
          <li>verbessern die Kommunikation</li>
          <li>vermeiden Rivalität</li>
          <li>können auch introvertierte Mitglieder motivieren</li>
          <li>sind sensibel für die privaten Hintergründe ihrer Kollegen</li>
        </ul>
      </p>
      <p>
        <h4>Einsatzbereich</h4>
        Die Anwesenheit von Teamarbeitern ist besonders in Konfliktsituationen
        bedeutend, da sie hier ihre diplomatischen Fähigkeiten zur Bereinigung
        von Meinungsverschiedenheiten einsetzen können. Sie agieren oft helfend
        aus dem Hintergrund und sind für den Beitrag sozialer Leistungen
        verantwortlich.
      </p>
    </>
  ),
  "W/W": () => (
    <>
      <p>
        <strong>Wegbereiter</strong> gehören zu den kommunikationsorientierten
        Teamrollen. Sie sind das Sprachorgan eines jeden Teams. Du trägst Ideen
        nach außen und knüpfst wertvolle Kontakte. Wenn das Team Gefahr läuft,
        in die Isolation zu geraten, wirst du aktiv.
      </p>
      <p>
        Du bist extravertiert, enthusiastisch und gesellig. Du schließt schnell
        Freundschaften und findest neue Lösungsmöglichkeiten. Allerdings lässt
        du dich auch relativ leicht ablenken und kannst nach anfänglichem
        Enthusiasmus schnell das Interesse verlieren.
      </p>
      <p>
        <h4>Häufige Stärken &amp; Schwächen</h4>{" "}
        <ul className={styles.negative}>
          <li>oft zu optimistisch</li>
          <li>verlieren nach anfänglichem Enthusiasmus leicht das Interesse</li>
          <li>neigen zur Beschäftigung mit Irrelevantem</li>
        </ul>
        <ul className={styles.positive}>
          <li>knüpfen leicht Kontakte außerhalb des Teams</li>
          <li>finden neue Möglichkeiten und Lösungsalternativen</li>
          <li>enthusiastisch bei der Gruppenaufgabe</li>
          <li>sorgen dafür, dass das Team gehört wird</li>
        </ul>
      </p>
      <p>
        <h4>Einsatzbereich</h4>
        Wegbereiter sollten die Kontakte zur Welt außerhalb des Teams intensiv
        pflegen und die so gefundenen Quellen intensiv für ihre Ideenfindung
        nutzen.
      </p>
    </>
  ),
  "N/E": () => (
    <>
      <p>
        <strong>Neuerer</strong> gehören zu den wissensorientierten Teamrollen.
        Sie zeichnen sich durch ihre außerordentliche Kreativität und Phantasie
        aus. Du löst Probleme auf einem unkonventionellen Weg.
      </p>
      <p>
        Du bist introvertiert, kreativ und denkst unorthodox. Du bringst neue
        Ideen ein, suchst nach alternativen Lösungen und findest sie – auch für
        schwierige Probleme. Allerdings bist du fehleranfällig, weil du dazu
        neigst, Details und „Nebensächlichkeiten“ auszublenden. Außerdem bist du
        nur schwer kritikfähig.
      </p>
      <p>
        <h4>Häufige Stärken &amp; Schwächen</h4>{" "}
        <ul className={styles.negative}>
          <li>unterlaufen oft Flüchtigkeitsfehler</li>
          <li>schwer kritikfähig</li>
          <li>oft gedankenverloren</li>
        </ul>
        <ul className={styles.positive}>
          <li>schaffen Alternativen für bestehende Prozesse</li>
          <li>finden Lösungen für schwierige Problemstellungen</li>
          <li>bringen kreative neue Ideen und Strategien ein</li>
          <li>
            schaffen wahres Innovationspotential durch unorthodoxes Denken
          </li>
        </ul>
      </p>
      <p>
        <h4>Einsatzbereich</h4>
        Neuerer sollten sich auf ihr hohes Problemlösungspotential und die
        Fähigkeit, neue Strategien zu entwickeln, konzentrieren und dabei die
        Ideen der übrigen Teammitglieder berücksichtigen.
      </p>
    </>
  ),
  S: () => (
    <>
      <p>
        Der <strong>Spezialist</strong> gehört zu den wissensorientierten
        Teamrollen. Tiefes Fachwissen ist für einen Teamerfolg unerlässlich –
        und damit kann der Spezialist stets dienen! Du bist ein wandelndes
        Fachbuch.
      </p>
      <p>
        Du bist in deinem Fachgebiet belesen, engagiert und richtest dein
        Interesse vorwiegend auf den fachlichen Teil der Arbeit. Du hast
        Expertenwissen und Hintergrundinformationen, die den anderen fehlen.
        Allerdings neigst du dazu, dich in technischen Einzelheiten zu verlieren
        und trittst in der Rolle einer Informationsquelle auf.
      </p>
      <ul className={styles.negative}>
        <li>verlieren sich in technischen Einzelheiten</li>
        <li>leisten nur informative Beiträge</li>
      </ul>
      <ul className={styles.positive}>
        <li>
          formulieren generelle Aussagen in die technisch konkreten
          Bezeichnungen um
        </li>
        <li>leisten professionellen Beitrag zum jeweiligen Thema</li>
        <li>brennen für ihr Fachgebiet</li>
      </ul>
      <p>
        <h4>Einsatzgebiet</h4>
        Die Funktion der Spezialisten besteht darin, Informationsdefizite des
        Teams auszugleichen und das notwendige Fachwissen beizusteuern.
      </p>
    </>
  ),
};
