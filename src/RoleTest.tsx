import React, { useState } from "react";
import { Question } from "./Question";
import * as questions from "./data.json";
import { useFieldArray, useForm } from "react-hook-form";
import evaluationMatrix from "./evalutationMatrix";

export const RoleTest = () => {
  const [result, setResult] = useState<string | null>(null);

  const onSubmit = (values: any) => {
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
    questions.questions.forEach((val, qIndex) => {
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

  const { register, handleSubmit, control, formState } = useForm<{
    questions: number[][];
  }>({
    mode: "onChange",
    defaultValues: {
      questions: questions.questions.map(() =>
        Array(9)
          .fill(0)
          .map(() => 0)
      ),
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "questions",
  });

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
      {!result && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <ul>
            {fields.map((item, index) => (
              <li key={item.id}>
                <Question
                  ref={register()}
                  id={`questions[${index}]`}
                  defaultValue={item as number[]}
                  question={questions.questions[index].description}
                  answers={questions.questions[index].answers}
                />
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              type="submit"
              style={{ cursor: "pointer" }}
              disabled={!(formState.isDirty && formState.isValid)}
            >
              Auswerten
            </button>
          </div>
        </form>
      )}
      {result && `Dein Ergebnis lautet ${result}`}
    </main>
  );
};
