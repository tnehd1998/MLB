import axios from "axios";
import { useQuery } from "react-query";

const baseURL = process.env.REACT_APP_BASE_URL;

const getCertainTeam = async (teamName) => {
  const info = await axios
    .get(`${baseURL}/${teamName}`)
    .then((response) => response.data);
  return info;
};

export const useGetCertainTeam = (teamName) => {
  return useQuery(`${teamName}`, () => getCertainTeam(teamName), {
    suspense: true,
  });
};
