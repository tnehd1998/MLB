import React, { Suspense } from "react";
import styled from "styled-components";

import AllStar from "../components/AllStar/AllStar";
import Loading from "../components/Loading/Loading";

const AllStarPage = () => {
  return (
    <AllStarPageWrapper>
      <Title>😍 특정 선수를 선택하면 소속 팀 페이지로 이동합니다. 😍</Title>
      <Suspense fallback={<Loading />}>
        <AllStar />
      </Suspense>
    </AllStarPageWrapper>
  );
};

const AllStarPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
`;

const Title = styled.p`
  font-size: 24px;
  margin-bottom: 2vh;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 20px;
  padding: 10px;
`;

export default AllStarPage;
