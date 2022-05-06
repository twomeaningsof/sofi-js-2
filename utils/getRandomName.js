import { getRandomNumber } from "./getRandomNumber.js";

export const getRandomName = (namesArray) =>
  namesArray[getRandomNumber(0, namesArray.length - 1)];
