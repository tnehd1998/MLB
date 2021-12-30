import axios from "axios";

const SPORT_DATA_API_KEY = process.env.REACT_APP_SPORT_DATA_API_KEY;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

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

export const getPlayerVideo = async (playerName, videoCount) => {
  const info = await axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${videoCount}&q=${playerName}&type=video&key=${YOUTUBE_API_KEY}`
    )
    .then((response) => response.data);
  return info;
};
