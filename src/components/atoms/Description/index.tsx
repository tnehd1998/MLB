import React from "react";
import { Wrapper } from "./styles";

export interface IProps {
  text: string;
  textSize: number;
}

const Logo = ({ text, textSize }: IProps) => {
  return <Wrapper textSize={textSize}>{text}</Wrapper>;
};

export default Logo;
