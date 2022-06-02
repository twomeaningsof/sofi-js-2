import { pipe, always } from "ramda";

export const getRandomNumber = (min, max) =>
  pipe(always(Math.random() * (max - min + 1) + min), Math.floor)(min, max);
