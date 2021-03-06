import { Wrapper } from "./styles";

export interface IProps {
  text: string;
}

const Description = ({ text }: IProps) => {
  return <Wrapper>{text}</Wrapper>;
};

export default Description;
