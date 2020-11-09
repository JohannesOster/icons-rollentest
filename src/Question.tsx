import React, { FC } from "react";
import { RatingGroup } from "./RatingGroup";

interface Props {
  id: string;
  question: string;
  answers: string[];
}
export const Question: FC<Props> = ({ id, question, answers }) => {
  return (
    <div>
      {question}
      <ul>
        {answers.map((answer, idx) => (
          <li key={idx}>
            <div style={{ display: "grid", rowGap: "8px" }}>
              {answer}
              <RatingGroup name={id + idx} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
