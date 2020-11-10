// evaluationM[0][0] = pers1  = means > question 0 answert 0 points to pers1
const evaluationMatrix = [
  ["B", "M", "S", "T", "U", "W/W", "K", "P", "N/E"],
  ["T", "U", "B", "M", "N/E", "P", "W/W", "S", "K"],
  ["K", "P", "U", "N/E", "T", "W/W", "S", "B", "M"],
  ["W/W", "S", "T", "N/E", "K", "P", "U", "M", "B"],
  ["M", "K", "W/W", "B", "U", "T", "N/E", "P", "S"],
  ["N/E", "T", "K", "P", "B", "M", "U", "W/W", "S"],
  ["U", "B", "P", "S", "W/W", "M", "N/E", "K", "T"],
];

export default evaluationMatrix;
