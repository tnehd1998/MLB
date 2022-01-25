import React, { Suspense } from "react";
import styled from "styled-components";

import AllStarTable from "../components/AllStarTable/AllStarTable";
import Loading from "../components/Loading/Loading";

const AllStarPage = () => {
  return (
    <AllStarPageWrapper>
      <Title>😍 특정 선수를 선택하면 소속 팀 페이지로 이동합니다. 😍</Title>
      <Suspense fallback={<Loading />}>
        <AllStarTable />
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

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1150px) {
    font-size: 32px;
  }
`;

export default AllStarPage;
