import React, { useState, useEffect, useCallback } from "react";
import { Personalities, Question } from "components";
import { set } from "utils";
import { questions, evaluationMatrix } from "data";

export const RoleTest = () => {
  const [result, setResult] = useState<string | null>(null);
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
    const max = Object.entries(result).reduce(
      (max, [key, value]) => {
        if (max.value < value) {
          max.key = key;
          max.value = value;
        }
        return max;
      },
      { key: "", value: 0 }
    );

    setResult(max.key);
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
    const currSum = values.questions[step].reduce((sum, curr) => {
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
      curr[step] = true;
      return [...curr];
    });
  };

  useEffect(() => {
    validate();
  }, [values, step, validate]);

  const Result = result ? Personalities[result] : () => <></>;

  return (
    <main>
      {step === 0 ? (
        <header>
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
            <br />
            Viel Spaß! Janosch &amp; Johannes
          </p>
        </header>
      ) : (
        <>
          Bitte verteile auf die folgenden Antwortealternativen exakt{" "}
          <strong>10 Punkte</strong>
          <hr />
        </>
      )}
      {!result && (
        <form onSubmit={onSubmit} style={{ display: "grid", rowGap: "12px" }}>
          {step > 0 && (
            <>
              <span style={{ color: "red" }}>{dirty[step] && error}</span>
              <Question
                id={`questions.${step}`}
                onChange={onChange}
                value={values.questions[step]}
                question={step.toString() + ". " + questions[step].description}
                answers={questions[step].answers}
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
            {step < questions.length - 1 ? (
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
      <Result />
    </main>
  );
};
