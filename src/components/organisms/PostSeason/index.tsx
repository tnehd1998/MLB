import PostSeasonImage from "../../../images/postseason.jpeg";
import EventImage from "../../atoms/Images/EventImage";
import { Wrapper } from "./styles";

const PostSeason = () => {
  return (
    <Wrapper>
      <a href={`https://youtu.be/Q-vkUHF9RI0`} rel="noreferrer" target="_blank">
        <EventImage imageUrl={PostSeasonImage} />
      </a>
    </Wrapper>
  );
};

export default PostSeason;
