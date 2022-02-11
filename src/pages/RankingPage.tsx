import React, { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import RankingButton from "../components/atoms/Buttons/RankingButton";

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
      {showFARanking ? (
        <RankingButton
          onClick={onClickSwitchCategory}
          content="MLB 구단 연봉총액 순위 확인하기"
        />
      ) : (
        <RankingButton
          onClick={onClickSwitchCategory}
          content="가장 많은 돈을 받는 선수 Top50 확인하기"
        />
      )}
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

export default AllStarPage;
