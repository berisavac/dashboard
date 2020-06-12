import { v4 as uuidv4 } from "uuid";

export const util = (currData) => {
  const array = [];
  for (const key in currData) {
    if (
      key === "USD" ||
      key === "RSD" ||
      key === "CAD" ||
      key === "GBP" ||
      key === "CHF"
    ) {
      array.push({ id: uuidv4(), currency: key, value: currData[key] });
    }
  }
  return array;
};
