import axios from "axios";
import { useQuery } from "react-query";

const baseURL = process.env.REACT_APP_BASE_URL;

const getStanding = async () => {
  const info = await axios
    .get(`${baseURL}/standing`)
    .then((response) => response.data);
  return info;
};

export const useGetStanding = () => {
  return useQuery("standing", getStanding, {
    suspense: true,
  });
};
