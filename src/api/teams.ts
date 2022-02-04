import axios from "axios";
import { ITeams } from "../types/teams.type";

const baseURL = process.env.REACT_APP_BASE_URL;

export const getTeams = async (): Promise<ITeams[] | null> => {
  try {
    const info = await axios
      .get(`${baseURL}`)
      .then((response) => response.data);
    return info;
  } catch (e) {
    return null;
  }
};
