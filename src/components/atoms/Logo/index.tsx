import { Wrapper } from "./styles";

export interface IProps {
  imageUrl: string;
}

const Logo = ({ imageUrl }: IProps) => {
  return <Wrapper src={imageUrl} />;
};

export default Logo;
