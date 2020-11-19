import React, { ChangeEvent, forwardRef } from "react";

interface Props {
  id: string;
  question: string;
  answers: string[];
  value?: string[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const Question = forwardRef<HTMLInputElement, Props>(
  ({ id, question, answers, value = [], onChange }, ref) => {
    return (
      <div>
        {question}
        <ul>
          {answers.map((answer, idx) => (
            <li key={idx}>
              <div style={{ display: "grid", rowGap: "8px" }}>
                {answer}
                <input
                  onChange={onChange}
                  type="number"
                  name={`${id}.${idx}`}
                  value={value[idx]}
                  style={{ maxWidth: "100px" }}
                  onWheel={(event) => {
                    (event.target as any).blur();
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
