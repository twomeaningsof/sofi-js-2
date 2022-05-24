import { pipe, map, reduce } from "ramda";

export const getNamesArray = (data) =>
  pipe(
    map((team) => map(({ name }) => name, team)),
    reduce(
      (previousArray, currentArray) => previousArray.concat(currentArray),
      []
    )
  )(data);
