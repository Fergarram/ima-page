export function cn(...inputs: ClassValue[]) {
  return inputs
    .flat()
    .filter((x) => {
      if (typeof x === "string") return x.trim().length > 0;
      if (typeof x === "number") return true;
      if (typeof x === "object" && x !== null) return true;
      return false;
    })
    .map((x) => {
      if (typeof x === "string") return x.trim();
      if (typeof x === "number") return String(x);
      if (typeof x === "object" && x !== null && !Array.isArray(x)) {
        return Object.entries(x)
          .filter(([_, value]) => Boolean(value))
          .map(([key, _]) => key)
          .join(" ");
      }
      return "";
    })
    .join(" ")
    .split(/\s+/)
    .filter((x) => x.length > 0)
    .join(" ");
}

type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | { [key: string]: any }
  | ClassValue[];
