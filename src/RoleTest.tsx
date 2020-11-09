import React from "react";
import { Question } from "./Question";
import * as questions from "./data.json";

export const RoleTest = () => {
  return (
    <main>
      <header>
        <h2>Teamrollen-Selbsteinschätzung</h2>
        <p>
          Folgender Test, der auf Annahmen des Psychologen Meredith Belbin
          aufbaut, dient dazu, die optimale Rolle in einem Team für dich zu
          finden. Das Ergebnis darf dabei jedoch nicht als absolut aufgefasst
          werden, sondern soll die Aufmerksamkeit auf persönliches
          Entwicklungspotential lenken. Es ist wichtig zu wissen, dass es keine
          Wertigkeit zwischen den einzelnen Rollen gibt. Weder ist ein
          Beobachter besser als ein Umsetzer noch umgekehrt. Die Rollen zeigen
          stattdessen mögliche Stärken und Schwächen der eigenen Art, Dinge
          anzugehen, und eröffnen so Möglichkeiten, die eigenen Kompetenzen
          zielführend einzusetzen.
        </p>
        <p>
          dir einen oder mehrere Rollentypen zuzuordnen, verteile je Frage 1-7
          exakt zehn Punkte auf die Alternativen a bis i: Aussagen, denen du
          zustimmen kannst, verteilst du relativ zu den übrigen
          Antwortmöglichkeiten viele Punkte. Je stärker die Punkte aufgeteilt
          werden, desto unklarer fällt das Ergebnis aus. Mut zu klaren
          Entscheidungen ist also angemessen! Wenn du mit der Bearbeitung fertig
          bist, gib deinen Bogen Janosch oder Alex. Um Anonymität zu
          gewährleisten, versehe deinen Bogen bitte mit einem Pseudonym. Dein
          Ergebnis mit der Beschreibung deiner Teamrolle inklusive Stärken und
          Schwächen findest du im htmlForum des Kurses, sobald die Fragebögen
          ausgewertet sind.
          <br />
          Viel Spaß!
        </p>
      </header>
      <hr />
      <ul>
        {questions.questions.map((question, index) => (
          <li key={index}>
            <Question
              id={index.toString()}
              question={question.description}
              answers={question.answers}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};
