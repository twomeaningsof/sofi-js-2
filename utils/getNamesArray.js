export const getNamesArray = (data) =>
  data
    .map((team) => team.map(({ name }) => name))
    .reduce((previousArray, currentArray) =>
      previousArray.concat(currentArray)
    );
