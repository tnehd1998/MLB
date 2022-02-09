import React from "react";
import { Button } from "./styles";

export interface Props {
  title: string;
}

const CategoryButton = ({ title }: Props) => {
  return <Button>{title}</Button>;
};

export default CategoryButton;
