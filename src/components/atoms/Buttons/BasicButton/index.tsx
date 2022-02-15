import React from "react";
import { Button } from "./styles";

export interface IProps {
  content: string;
  color?: string;
  onClick?: () => void;
}

const BasicButton = ({ content, color, onClick }: IProps) => {
  return (
    <Button color={color} onClick={onClick}>
      {content}
    </Button>
  );
};

export default BasicButton;
