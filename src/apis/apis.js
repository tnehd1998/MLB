import axios from "axios";

const SPORT_DATA_API_KEY = "e6fb055109a84802b5915a6f344ea72e";

export const getTeamData = async () => {
  const info = await axios
    .get(
      `https://api.sportsdata.io/v3/mlb/scores/json/AllTeams?key=${SPORT_DATA_API_KEY}`
    )
    .then((response) => response.data);
  return info;
};

export const getCertainTeamData = async (teamName) => {
  const info = await axios
    .get(
      `https://api.sportsdata.io/v3/mlb/scores/json/Players/${teamName}?key=${SPORT_DATA_API_KEY}`
    )
    .then((response) => response.data);
  return info;
};

export const getAllStarPlayerData = async () => {
  const info = await axios
    .get(
      `https://api.sportsdata.io/v3/mlb/projections/json/PlayerSeasonProjectionStats/2021?key=${SPORT_DATA_API_KEY}`
    )
    .then((response) => response.data.slice(0, 200));
  return info;
};

export const getCertainPlayerData = async (playerID) => {
  const info = await axios
    .get(
      ` https://api.sportsdata.io/v3/mlb/scores/json/Player/${playerID}?key=${SPORT_DATA_API_KEY}`
    )
    .then((response) => response.data);
  return info;
};

export const getTeamStandingData = async () => {
  const info = await axios
    .get(
      `https://api.sportsdata.io/v3/mlb/scores/json/Standings/2021?key=${SPORT_DATA_API_KEY}`
    )
    .then((response) => response.data);
  return info;
};
