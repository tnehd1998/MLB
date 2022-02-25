import { Wrapper } from "./styles";

export interface IProps {
  text: string;
}

const PlayerTitle = ({ text }: IProps) => {
  return <Wrapper>{text}</Wrapper>;
};

export default PlayerTitle;
