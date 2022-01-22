import React from "react";
import styled from "styled-components";
import PostSeasonImage from "../../images/postseason.jpeg";

const PostSeason = () => {
  return (
    <PostSeasonWrapper>
      <PostSeasonLink
        href={`https://youtu.be/Q-vkUHF9RI0`}
        rel="noreferrer"
        target="_blank"
      >
        <ScheduleImage src={PostSeasonImage} />
      </PostSeasonLink>
    </PostSeasonWrapper>
  );
};

const PostSeasonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostSeasonLink = styled.a``;

const ScheduleImage = styled.img`
  width: 60vw;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.textColor};
  &:hover {
    border: 2px solid ${({ theme }) => theme.bgColor};
  }
`;

export default PostSeason;
