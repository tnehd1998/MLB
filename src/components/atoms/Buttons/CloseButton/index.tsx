import { Wrapper } from "./styles";

export interface IProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: IProps) => {
  return <Wrapper onClick={onClick}>✕</Wrapper>;
};

export default CloseButton;
