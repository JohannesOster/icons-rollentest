import React, { FC, forwardRef } from "react";

interface Props {
  min?: number;
  max?: number;
  step?: number;
  name: string;
  defaultValue: string;
}
export const RatingGroup: FC<Props> = forwardRef(
  ({ min = 0, max = 10, step = 1, name, defaultValue }, ref) => {
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
                {...(index === 0 || defaultValue === index
                  ? { defaultChecked: true }
                  : {})}
                ref={ref}
              />
              <label htmlFor={name + index} style={{ marginLeft: "4px" }}>
                {index}
              </label>
            </span>
          ))}
      </div>
    );
  }
);
