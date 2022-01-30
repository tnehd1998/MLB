import axios from "axios";
import { useQuery } from "react-query";
import { ITeam } from "../types/team.type";

const baseURL = process.env.REACT_APP_BASE_URL;

const getCertainTeam = async (teamName: string): Promise<ITeam | null> => {
  try {
    const info = await axios
      .get(`${baseURL}/${teamName}`)
      .then((response) => response.data);
    return info;
  } catch (e) {
    return null;
  }
};

export const useGetCertainTeam = (teamName: string) => {
  return useQuery(`${teamName}`, () => getCertainTeam(teamName), {
    suspense: true,
  });
};
