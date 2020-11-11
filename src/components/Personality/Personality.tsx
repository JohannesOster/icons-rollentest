import React, { FC } from "react";
import "./index.css";

export interface PersonalityProps {
  title: string;
  introduction: string;
  description: string;
  negativeAttributes: string[];
  positiveAttributes: string[];
}

export const Personality: FC<PersonalityProps> = ({
  title,
  introduction,
  description,
  negativeAttributes,
  positiveAttributes,
}) => {
  return (
    <div>
      <p>
        <strong>{title}</strong> {introduction}
      </p>
      <p>{description}</p>
      <ul className="negative">
        {negativeAttributes.map((attr, index) => (
          <li key={index}>{attr}</li>
        ))}
      </ul>
      <ul className="positive">
        {positiveAttributes.map((attr, index) => (
          <li key={index}>{attr}</li>
        ))}
      </ul>
    </div>
  );
};
