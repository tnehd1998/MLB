import axios from "axios";
import { IPlayer } from "../types/player.type";

const baseURL = process.env.REACT_APP_BASE_URL;

export const getCertainTeam = async (
  teamName: string | undefined
): Promise<IPlayer[] | null | undefined> => {
  try {
    const info = await axios
      .get(`${baseURL}/${teamName}`)
      .then((response) => response.data);
    return info;
  } catch (e) {
    return null;
  }
};
