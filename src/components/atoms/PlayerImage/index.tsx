import { Wrapper } from "./styles";

export interface IProps {
  imageUrl: string;
}

const PlayerImage = ({ imageUrl }: IProps) => {
  return <Wrapper src={imageUrl} />;
};

export default PlayerImage;
