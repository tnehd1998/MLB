import styled from "styled-components";
import PostSeasonImage from "../../../images/postseason.jpeg";
import EventImage from "../../atoms/PostSeasonImage";

const PostSeason = () => {
  return (
    <PostSeasonWrapper>
      <PostSeasonLink
        href={`https://youtu.be/Q-vkUHF9RI0`}
        rel="noreferrer"
        target="_blank"
      >
        <EventImage imageUrl={PostSeasonImage} />
      </PostSeasonLink>
    </PostSeasonWrapper>
  );
};

const PostSeasonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
`;

const PostSeasonLink = styled.a``;

export default PostSeason;
