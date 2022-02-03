import axios from "axios";
import { IAllStarPlayer } from "../types/player.type";

const baseURL = process.env.REACT_APP_BASE_URL;

export const getAllStar = async (): Promise<IAllStarPlayer[] | null> => {
  try {
    const info = await axios
      .get(`${baseURL}/allstar`)
      .then((response) => response.data);
    return info;
  } catch (e) {
    return null;
  }
};
