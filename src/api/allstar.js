import axios from "axios";
import { useQuery } from "react-query";

const baseURL = process.env.REACT_APP_BASE_URL;

const getAllStar = async () => {
  const info = await axios
    .get(`${baseURL}/allstar`)
    .then((response) => response.data.slice(0, 200));
  return info;
};

export const useAllStar = () => {
  return useQuery("allStar", getAllStar, {
    suspense: true,
  });
};