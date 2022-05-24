import { map } from "ramda";
import { first } from "../data.js";
import { getTotalScore } from "../utils/getTotalScore.js";
import { getTeamName } from "../utils/getTeamName.js";

const solve = (...data) =>
  map(
    (team) => ({ totalScore: getTotalScore(team), name: getTeamName(team) }),
    data
  );

console.log(solve(...first));
