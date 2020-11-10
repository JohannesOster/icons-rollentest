import React, { FC, forwardRef } from "react";
import { RatingGroup } from "./RatingGroup";

interface Props {
  id: string;
  question: string;
  answers: string[];
  defaultValue?: string;
}
export const Question: FC<Props> = forwardRef(
  ({ id, question, answers, defaultValue }, ref) => {
    return (
      <div>
        {question}
        <ul>
          {answers.map((answer, idx) => (
            <li key={idx}>
              <div style={{ display: "grid", rowGap: "8px" }}>
                {answer}
                <RatingGroup
                  name={id + "." + idx}
                  defaultValue={(defaultValue || [])[idx] || 0}
                  ref={ref}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
