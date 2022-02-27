import { Wrapper } from "./styles";

export interface IProps {
  imageUrl: string;
  imageType: string;
}

const PlayerImage = ({ imageUrl, imageType }: IProps) => {
  return <Wrapper src={imageUrl} imageType={imageType} />;
};

export default PlayerImage;
