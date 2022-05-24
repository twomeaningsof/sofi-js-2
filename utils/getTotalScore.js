import { pipe, map, reduce, add } from "ramda";

export const getTotalScore = (team) =>
  pipe(
    map(({ score }) => score),
    reduce(add, 0)
  )(team);
