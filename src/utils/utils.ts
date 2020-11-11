/** Normalize path to only use dot notation
 * (change path[1].path to path.1.path) */
const normalizePath = (path: string) => {
  if (!path) return "";
  /* If the first path element is [] indexed
   * it cannot be replaced by . but must be removed */
  if (path[0] === "[") path = path.substr(1);
  return path.replace("[", ".").replace("]", "");
};

export const set = (obj: any, path: string, value: string): any => {
  const stack = normalizePath(path)
    .split(".")
    .filter((val) => val !== "");
  while (stack.length > 1) {
    obj = obj[stack.shift()!];
  }
  const help = stack.shift()!;
  obj[help] = value;
};
