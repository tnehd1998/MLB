import axios from "axios";
import { IStanding } from "../types/standing.type";

const baseURL = process.env.REACT_APP_BASE_URL;

export const getStanding = async (): Promise<IStanding[] | null> => {
  try {
    const info = await axios
      .get(`${baseURL}/standing`)
      .then((response) => response.data);
    return info;
  } catch (e) {
    return null;
  }
};
