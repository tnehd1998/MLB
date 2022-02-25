import React, { Suspense, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import BasicButton from "../components/atoms/Buttons/BasicButton";

import Loading from "../components/organisms/Loading/Loading";
import Payroll from "../components/organisms/Payroll/Payroll";
import TopPlayers from "../components/organisms/TopPlayers/TopPlayers";
import { showFARankingState } from "../store/ranking";

const AllStarPage = () => {
  const [showFARanking, setShowFARanking] = useRecoilState(showFARankingState);

  const changeToFARanking = (type: boolean) => {
    setShowFARanking(type);
  };

  return (
    <AllStarPageWrapper>
      <HelmetProvider>
        <Helmet>
          <title>MLB | ALL STAR</title>
        </Helmet>
      </HelmetProvider>
      <ButtonWrapper>
        <BasicButton
          onClick={() => changeToFARanking(true)}
          content="FA 랭킹 Top50 확인하기"
        />
        <BasicButton
          onClick={() => changeToFARanking(false)}
          content="구단 연봉총액 순위 확인하기"
        />
      </ButtonWrapper>
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 8em;
`;

export default AllStarPage;
