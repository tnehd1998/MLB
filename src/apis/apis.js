import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const getTeamData = async () => {
  const info = await axios.get(`${baseURL}`).then((response) => response.data);
  return info;
};

export const getCertainTeamData = async (teamName) => {
  const info = await axios
    .get(`${baseURL}/${teamName}`)
    .then((response) => response.data);
  return info;
};

export const getAllStarPlayerData = async () => {
  const info = await axios
    .get(`${baseURL}/allstar`)
    .then((response) => response.data.slice(0, 200));
  return info;
};

export const getTeamStandingData = async () => {
  const info = await axios
    .get(`${baseURL}/standing`)
    .then((response) => response.data);
  return info;
};
