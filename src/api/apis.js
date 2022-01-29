import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const getTeamStandingData = async () => {
  const info = await axios
    .get(`${baseURL}/standing`)
    .then((response) => response.data);
  return info;
};
