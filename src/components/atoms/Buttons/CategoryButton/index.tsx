import React from "react";
import { Button } from "./styles";

export interface IProps {
  title: string;
}

const CategoryButton = ({ title }: IProps) => {
  return <Button>{title}</Button>;
};

export default CategoryButton;
