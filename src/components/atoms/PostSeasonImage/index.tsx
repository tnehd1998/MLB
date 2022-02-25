import { Wrapper } from "./styles";

export interface IProps {
  imageUrl: string;
}

const EventImage = ({ imageUrl }: IProps) => {
  return <Wrapper src={imageUrl} />;
};

export default EventImage;
