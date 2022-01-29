import axios from "axios";
import { useQuery } from "react-query";

const baseURL = process.env.REACT_APP_BASE_URL;

const getTeams = async () => {
  const info = await axios.get(`${baseURL}`).then((response) => response.data);
  return info;
};

export const useGetTeams = () => {
  return useQuery("teams", getTeams, {
    suspense: true,
  });
};
