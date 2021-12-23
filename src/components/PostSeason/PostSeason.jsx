import React from "react";
import styled from "styled-components";

const PostSeasonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 40px;
  margin: 20px 0px;
`;

const ResultImage = styled.img`
  width: 70vw;
  border-radius: 20px;
`;

const PostSeason = () => {
  return (
    <PostSeasonContainer>
      <Title>2021 MLB POSTSEASON</Title>
      <ResultImage src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1024/mlb/vz66hur9vu9qn3h9dddt.jpg" />
    </PostSeasonContainer>
  );
};

export default PostSeason;
