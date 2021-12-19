import axios from "axios";

const API_KEY = "e6fb055109a84802b5915a6f344ea72e";

export const getTeamData = async () => {
  const info = await axios
    .get(`https://api.sportsdata.io/v3/mlb/scores/json/AllTeams?key=${API_KEY}`)
    .then((response) => response.data);
  return info;
};
