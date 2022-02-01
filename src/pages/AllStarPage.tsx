import React, { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import AllStarTable from "../components/AllStarTable/AllStarTable";

import Loading from "../components/Loading/Loading";
import Ranking from "../components/Ranking/Ranking";
import { showFARankingState } from "../store/atoms";

const AllStarPage = () => {
  const [showFARanking, setShowFARanking] = useRecoilState(showFARankingState);

  const onClickSwitchCategory = () => {
    setShowFARanking((showFARanking) => !showFARanking);
  };

  return (
    <AllStarPageWrapper>
      <HelmetProvider>
        <Helmet>
          <title>MLB | ALL STAR</title>
        </Helmet>
      </HelmetProvider>
      <Title onClick={onClickSwitchCategory}>
        {showFARanking
          ? "MLB 지정 Top 200 선수 명단 확인하기"
          : "가장 많은 돈을 받는 선수 Top50 확인하기"}
      </Title>
      {showFARanking ? (
        <Suspense fallback={<Loading />}>
          <Ranking />
        </Suspense>
      ) : (
        <Suspense fallback={<Loading />}>
          <AllStarTable />
        </Suspense>
      )}
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
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.bgColor};
    background-color: ${({ theme }) => theme.textColor};
    transition: all 0.3s linear;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1150px) {
    font-size: 32px;
  }
`;

export default AllStarPage;
