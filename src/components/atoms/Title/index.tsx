import React from "react";
import { Wrapper } from "./styles";

export interface IProps {
  content: string;
}

const Title = ({ content }: IProps) => {
  return <Wrapper>{content}</Wrapper>;
};

export default Title;
