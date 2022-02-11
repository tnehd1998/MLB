import React from "react";
import { Button } from "./styles";

export interface Props {
  onClick: () => void;
  content: string;
}

const RankingButton = ({ onClick, content }: Props) => {
  return <Button onClick={onClick}>{content}</Button>;
};

export default RankingButton;
