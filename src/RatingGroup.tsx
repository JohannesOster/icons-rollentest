import React, { FC } from "react";

interface Props {
  min?: number;
  max?: number;
  step?: number;
  name: string;
}
export const RatingGroup: FC<Props> = ({
  min = 0,
  max = 10,
  step = 1,
  name,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridAutoFlow: "column",
        columnGap: "8px",
      }}
    >
      {Array((max - min) / step + 1)
        .fill(0)
        .map((_val, index) => (
          <span key={index}>
            <input
              type="radio"
              value={index}
              name={name}
              id={name + index}
              {...(index === 0 ? { defaultChecked: true } : {})}
            />
            <label htmlFor={name + index} style={{ marginLeft: "4px" }}>
              {index}
            </label>
          </span>
        ))}
    </div>
  );
};
