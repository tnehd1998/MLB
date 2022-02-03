import axios from "axios";
import { IRankingPlayerProps } from "../types/player.type";

const baseURL = process.env.REACT_APP_BASE_URL;

export const getRanking = async (): Promise<IRankingPlayerProps[] | null> => {
  try {
    const info = await axios
      .get(`${baseURL}/ranking`)
      .then((response) => response.data);
    return info;
  } catch (e) {
    return null;
  }
};
