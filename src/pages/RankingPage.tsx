import { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { getPayroll } from "../api/payroll";
import BasicButton from "../components/atoms/Buttons/BasicButton";
import Loading from "../components/atoms/Loading";

import Payroll from "../components/organisms/Payroll/Payroll";
import TopPlayers from "../components/organisms/TopPlayers/TopPlayers";
import { showFARankingState } from "../store/ranking";

const AllStarPage = () => {
  const [showFARanking, setShowFARanking] = useRecoilState(showFARankingState);
  const { data: payrollTeams, isLoading } = useQuery("payroll", getPayroll);
  const navigate = useNavigate();

  const onClickTeam = (team: string) => {
    navigate(`/${team}`);
  };
  const changeToFARanking = (type: boolean) => {
    setShowFARanking(type);
  };

  return (
    <Wrapper>
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
        <Payroll
          teams={payrollTeams}
          isLoading={isLoading}
          onClickTeam={onClickTeam}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
