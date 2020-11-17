import React, { useState, useEffect, useCallback } from "react";
import { Personalities, Question } from "components";
import { set } from "utils";
import { questions, evaluationMatrix, personalityNames } from "data";

export const RoleTest = () => {
  const [result, setResult] = useState<string[] | null>(null);
  const [step, setStep] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();

    const result = {
      K: 0,
      U: 0,
      "N/E": 0,
      B: 0,
      M: 0,
      "W/W": 0,
      T: 0,
      S: 0,
      P: 0,
    };
    questions.forEach((val, qIndex) => {
      val.answers.forEach((ans, aIndex) => {
        result[evaluationMatrix[qIndex][aIndex]] += +values.questions[qIndex][
          aIndex
        ];
      });
    });

    const max = Object.entries(result)
      .sort(([, valueA], [, valueB]) => valueA - valueB)
      .reverse();

    setResult(max);
  };

  const [dirty, setDirty] = useState(questions.map(() => false));
  const [error, setError] = useState<string | undefined>();
  const [values, setValues] = useState({
    questions: questions.map(() =>
      Array(9)
        .fill(0)
        .map(() => "")
    ),
  });

  const validate = useCallback(() => {
    if (step === 0) return;
    const currSum = values.questions[step - 1].reduce((sum, curr) => {
      return sum + +curr;
    }, 0);

    if (currSum < 10) setError("Zu wenig! Bitte vergib genau 10 Punkte.");
    else if (currSum > 10) setError("Zu viel! Bitte vergib genau 10 Punkte.");
    else setError(undefined);
  }, [values, setError, step]);

  const onChange = (event) => {
    const { name, value } = event.target;
    if (value > 10) return;
    const vals = values;
    set(vals, name, value);
    setValues({ ...vals });
    setDirty((curr) => {
      curr[step - 1] = true;
      return [...curr];
    });
  };

  useEffect(() => {
    validate();
  }, [values, step, validate]);

  const Result = () => {
    if (!result) return <></>;
    const First = Personalities[result[0][0]];
    const Second = Personalities[result[1][0]];
    return (
      <div style={{ display: "grid", rowGap: "14px" }}>
        <First />
        <div
          style={{
            fontSize: "80%",
            display: "grid",
            rowGap: "14px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <p>
            Deine sekundäre (also weniger stark ausgeprägte) Teamrolle ist{" "}
            <strong>{personalityNames[result[0][0]]}</strong>.
          </p>
          <Second />
        </div>
      </div>
    );
  };

  return (
    <main>
      {step === 0 ? (
        <header style={{ display: "grid", rowGap: "8px" }}>
          <h2>Teamrollen-Selbsteinschätzung</h2>
          <p>
            Folgender Test, der auf Annahmen des Psychologen Meredith Belbin
            aufbaut, dient dazu, die optimale Rolle in einem Team für dich zu
            finden. Das Ergebnis darf dabei jedoch nicht als absolut aufgefasst
            werden, sondern soll die Aufmerksamkeit auf persönliches
            Entwicklungspotential lenken. Es ist wichtig zu wissen, dass es
            keine Wertigkeit zwischen den einzelnen Rollen gibt. Weder ist ein
            Beobachter besser als ein Umsetzer noch umgekehrt. Die Rollen zeigen
            stattdessen mögliche Stärken und Schwächen der eigenen Art, Dinge
            anzugehen, und eröffnen so Möglichkeiten, die eigenen Kompetenzen
            zielführend einzusetzen.
          </p>
          <p>
            Um dir einen oder mehrere Rollentypen zuzuordnen, verteile je Frage
            1-7 exakt zehn Punkte auf die Alternativen a bis i: Aussagen, denen
            du zustimmen kannst, verteilst du relativ zu den übrigen
            Antwortmöglichkeiten viele Punkte. Je stärker die Punkte aufgeteilt
            werden, desto unklarer fällt das Ergebnis aus. Mut zu klaren
            Entscheidungen ist also angemessen!
          </p>
          <p>
            <br />
            Viel Spaß! <br />
            Janosch &amp; Johannes
          </p>
        </header>
      ) : (
        <>
          {!result && (
            <>
              Bitte verteile auf die folgenden Antwortealternativen exakt{" "}
              <strong>10 Punkte</strong>
              <hr />
            </>
          )}
        </>
      )}
      {!result && (
        <form onSubmit={onSubmit} style={{ display: "grid", rowGap: "12px" }}>
          {step > 0 && (
            <>
              <span style={{ color: "red" }}>{dirty[step - 1] && error}</span>
              <Question
                id={`questions.${step - 1}`}
                onChange={onChange}
                value={values.questions[step - 1]}
                question={
                  step.toString() + ". " + questions[step - 1].description
                }
                answers={questions[step - 1].answers}
              />
            </>
          )}
          <div>
            <hr />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                setStep((curr) => curr - 1);
              }}
              disabled={step === 0}
            >
              Zurück
            </button>
            {step - 1 < questions.length - 1 ? (
              <button
                type="submit"
                onClick={(event) => {
                  event.preventDefault();
                  setStep((curr) => curr + 1);
                }}
                disabled={!!error && step !== 0}
              >
                Weiter
              </button>
            ) : (
              <button type="submit" style={{ cursor: "pointer" }}>
                Auswerten
              </button>
            )}
          </div>
        </form>
      )}
      {result && (
        <div style={{ marginBottom: "20px" }}>
          <h2>Ergebnis</h2>
          Herzlichen Glückwunsch, du bist ein{" "}
          <strong>{personalityNames[result[0][0]]}</strong>. Im Folgenden
          findest du deine Rolle sowie die damit einhergehenden Stärken und
          Risiken beschrieben.
        </div>
      )}
      <Result />
      {result && (
        <>
          <h3 style={{ marginTop: "20px" }}>
            Was nützt mir die Kenntnis meiner Teamrolle?
          </h3>
          <p>
            Psychologische Tests haben häufig den faden Beigeschmack, das
            Offensichtliche zurückzuspiegeln. Jedoch liegt in genau diesem
            Konkretisieren der bedeutende Nutzen. Erst wenn formuliert und
            ausgesprochen ist, was ich vorbewusst ohnehin schon weiß, kann ich
            damit arbeiten, darüber reflektieren und mein Handeln entsprechend
            anpassen.
            <br />
            Gesprächspsychotherapie wirkt kaum anders: Indem ich gemeinsam mit
            dem Therapeuten meine Probleme verbalisiere, eröffne ich mir die
            Möglichkeit, sie im nächsten Schritt gezielt anzugehen. Auch im
            Falle deiner Teamrolle reicht es nicht, nur diesen vorliegenden Text
            durchzulesen. Sinnvolle nächste Schritte können sein, darüber zu
            reflektieren, inwiefern du dich mit deinem Ergebnis identifizieren
            kannst. Fallen dir Situationen ein, die im Einklang stehen mit den
            zugewiesenen Stärken und Schwächen? Hast du ein anders Bild von dir?
            Welchen Herausforderungen bist du in Gruppenprozessen bislang
            begegnet und wodurch könnten sie bedingt sein?
            <br />
            Wenn du dich selbst besser kennenlernst, kannst du gezielt deine
            Talente in Gruppenaufgaben einsetzen und Anstrengungen vermeiden,
            einem Ideal zu genügen, das möglicherweise gar nicht zu dir passt.
            Wenn du ein Auge für Teamrollen entwickelt hast, kannst du
            Teammitglieder suchen, die dich in deinen Schwächen ergänzen und sie
            ihrerseits in ihren Schwächen ergänzen. Oder frei nach Sun Tzu:
            <q
              style={{ display: "block", margin: "10px", fontStyle: "italic" }}
            >
              Wenn du dich selbst kennst und deine Mitmenschen kennst, brauchst
              du das Ergebnis von 100 Schlachten nicht zu fürchten.
            </q>
            Unabhängig von deinem Ergebnis ist jedoch das Wichtigste,
            anzuerkennen, dass es verschiedene Rollen in einer Gruppenarbeit
            gibt und dass jede davon essentiell ist und ihren wertvollen Beitrag
            liefert. Leicht entsteht in der Praxis der Eindruck, dass der
            „Anführer“ (entspricht am ehesten dem Koordinator) eine gesonderte
            Autorität zu genießen hat; Befehlsgewalt wird mit Hierarchie
            gleichgesetzt. Dieses hierarchische Gefälle wird vielerorts in der
            Wirtschaftswelt auch weiterhin gepflegt, perpetuiert und mit
            sozialem Prestige sowie finanzieller Entlohnung quittiert. Dabei
            wird verkannt, dass eine Rollenverteilung gemäß den Erfordernissen
            der Situation einerseits und individuellen Stärken andererseits die
            Voraussetzung für das Gelingen jeglichen sozialen Prozesses ist.
            Keine Gruppenaufgabe kann funktionieren, wenn das Team nur aus
            Bestimmern besteht. Für ein Theaterstück sind Bühnenbildner, Maske,
            Nebenfiguren, Regie und Antagonist ebenso essentiell wie der Held.
          </p>
        </>
      )}
    </main>
  );
};
