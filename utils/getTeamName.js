export const getTeamName = (team) =>
  team
    .map(({ name }) => name)
    .reduce((previousName, currentName, currentIndex) => {
      const isLast = currentIndex === team.length - 1;
      return `${previousName} ${currentName}${!isLast ? "," : ""}`;
    }, "Team");
