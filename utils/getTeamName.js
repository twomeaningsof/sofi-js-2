import { pipe, map, reduce, slice } from "ramda";

const addTeamMate = (previousName, currentName) => {
  return `${previousName} ${currentName}`;
};

export const getTeamName = (team) =>
  pipe(
    map(({ name }) => name),
    reduce(addTeamMate, "Team"),
    slice(0, -1)
  )(team);
