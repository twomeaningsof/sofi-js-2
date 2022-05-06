import { first } from "../data.js";
import { getTotalScore } from "../utils/getTotalScore.js";
import { getTeamName } from "../utils/getTeamName.js";

const solve = (...data) =>
  data.map((team) => ({
    totalScore: getTotalScore(team),
    name: getTeamName(team),
  }));

console.log(solve(...first));
