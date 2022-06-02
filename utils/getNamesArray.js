import { pipe, map, reduce, concat, props } from "ramda";

export const getNamesArray = (data) =>
  pipe(
    map((team) => map(props(["name"]), team)),
    reduce(
      (previousArray, currentArray) => concat(previousArray, currentArray),
      []
    )
  )(data);
