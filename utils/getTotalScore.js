export const getTotalScore = (team) =>
  team
    .map(({ score }) => score)
    .reduce((previousScore, currentScore) => previousScore + currentScore);
