import { Wrapper } from "./styles";

export interface IProps {
  content: string;
}

const BasicTitle = ({ content }: IProps) => {
  return <Wrapper>{content}</Wrapper>;
};

export default BasicTitle;
