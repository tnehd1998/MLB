import { Wrapper } from "./styles";

export interface IProps {
  content: string;
  size: number;
  color: string;
}

const TeamTitle = ({ content, size, color }: IProps) => {
  return (
    <Wrapper size={size} color={color}>
      {content}
    </Wrapper>
  );
};

export default TeamTitle;
