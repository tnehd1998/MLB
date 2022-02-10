import axios from "axios";
import { IPayroll } from "../types/payroll.type";

const baseURL = process.env.REACT_APP_BASE_URL;

export const getPayroll = async (): Promise<IPayroll[] | null> => {
  try {
    const info = await axios
      .get(`${baseURL}/payroll`)
      .then((response) => response.data);
    return info;
  } catch (e) {
    return null;
  }
};
