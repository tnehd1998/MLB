import React from "react";
import { Button } from "./styles";

export interface Props {
  content: string;
  color?: string;
  onClick?: () => void;
}

const BasicButton = ({ content, color, onClick }: Props) => {
  return (
    <Button color={color} onClick={onClick}>
      {content}
    </Button>
  );
};

export default BasicButton;
