import React, { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import Loading from "../components/organisms/Loading/Loading";
import Payroll from "../components/organisms/Payroll/Payroll";
import TopPlayers from "../components/organisms/TopPlayers/TopPlayers";
import { showFARankingState } from "../store/ranking";

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
          ? "MLB 구단 연봉총액 순위 확인하기"
          : "가장 많은 돈을 받는 선수 Top50 확인하기"}
      </Title>
      {showFARanking ? (
        <Suspense fallback={<Loading />}>
          <TopPlayers />
        </Suspense>
      ) : (
        <Suspense fallback={<Loading />}>
          <Payroll />
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
