import axios from "axios";
import { ITeam } from "../types/team.type";

const baseURL = process.env.REACT_APP_BASE_URL;

export const getCertainTeam = async (
  teamName: string | undefined
): Promise<ITeam[] | null | undefined> => {
  try {
    const info = await axios
      .get(`${baseURL}/${teamName}`)
      .then((response) => response.data);
    return info;
  } catch (e) {
    return null;
  }
};
