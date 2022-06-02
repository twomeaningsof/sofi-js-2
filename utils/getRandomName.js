import { pipe, always } from "ramda";
import { getRandomNumber } from "./getRandomNumber.js";

export const getRandomName = (namesArray) =>
  pipe(
    always(getRandomNumber(0, namesArray.length - 1)),
    (nameIndex) => namesArray[nameIndex]
  )(namesArray);
