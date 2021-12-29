import React from "react";
import styled from "styled-components";

const PostSeasonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
`;

const Title = styled.p`
  font-size: 40px;
  margin: 20px 0px;
`;

const ScheduleImage = styled.img`
  width: 70vw;
  border-radius: 20px;
`;

const PostSeason = () => {
  return (
    <PostSeasonWrapper>
      <Title>2021 MLB POSTSEASON</Title>
      <ScheduleImage src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1024/mlb/vz66hur9vu9qn3h9dddt.jpg" />
    </PostSeasonWrapper>
  );
};

export default PostSeason;
