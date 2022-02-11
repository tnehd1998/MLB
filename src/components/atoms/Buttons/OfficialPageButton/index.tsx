import React from "react";
import { Button } from "./styles";

export interface Props {
  content: string;
}

const OfficialPageButton = ({ content }: Props) => {
  return <Button>{content}</Button>;
};

export default OfficialPageButton;
