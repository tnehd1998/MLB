import axios from "axios";

export const getTeamData = async () => {
  const info = await axios
    .get("http://localhost:8080/")
    .then((response) => response.data);
  return info;
};

export const getCertainTeamData = async (teamName) => {
  const info = await axios
    .get(`http://localhost:8080/${teamName}`)
    .then((response) => response.data);
  return info;
};

export const getAllStarPlayerData = async () => {
  const info = await axios
    .get("http://localhost:8080/allstar")
    .then((response) => response.data.slice(0, 200));
  return info;
};

export const getTeamStandingData = async () => {
  const info = await axios
    .get("http://localhost:8080/standing")
    .then((response) => response.data);
  return info;
};
