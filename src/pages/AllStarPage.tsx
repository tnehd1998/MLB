import React, { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";

import Loading from "../components/Loading/Loading";

const AllStarPage = () => {
  const AllStarTable = React.lazy(
    () => import("../components/AllStarTable/AllStarTable")
  );
  const Ranking = React.lazy(() => import("../components/Ranking/Ranking"));

  return (
    <AllStarPageWrapper>
      <HelmetProvider>
        <Helmet>
          <title>MLB | ALL STAR</title>
        </Helmet>
      </HelmetProvider>
      <Title>😍 특정 선수를 선택하면 소속 팀 페이지로 이동합니다. 😍</Title>
      <Suspense fallback={<Loading />}>
        <Ranking />
      </Suspense>
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
