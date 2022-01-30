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
  margin-bottom: 5vh;
`;

const PostSeasonLink = styled.a``;

const ScheduleImage = styled.img`
  width: 36em;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.textColor};
  &:hover {
    border: 3px solid ${({ theme }) => theme.textColor};
    transform: scale(1.1);
    transition: all 0.3s ease-in;
  }

  @media (max-width: 768px) {
    width: 28em;
    margin-bottom: 2em;
  }

  @media (min-width: 1150px) {
    width: 50em;
  }
`;

export default PostSeason;
