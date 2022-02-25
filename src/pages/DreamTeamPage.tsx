import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import BasicButton from "../components/atoms/Buttons/BasicButton";
import BasicTitle from "../components/atoms/Titles/BasicTitle";
import DreamBatter from "../components/organisms/DreamBatter/DreamBatter";
import DreamPitcher from "../components/organisms/DreamPitcher/DreamPitcher";
import { dreamTeamInfoState } from "../store/dreamteam";

const DreamTeamPage = () => {
  const setDreamTeamPlayers = useSetRecoilState(dreamTeamInfoState);

  const onClickDeleteAll = () => {
    setDreamTeamPlayers([]);
  };

  return (
    <DreamTeamPageWrapper>
      <HelmetProvider>
        <Helmet>
          <title>MLB | DREAM TEAM</title>
        </Helmet>
      </HelmetProvider>
      <BasicTitle content="내야수" />
      <PlayerList>
        <DreamBatter position="C" />
        <DreamBatter position="1B" />
        <DreamBatter position="2B" />
        <DreamBatter position="3B" />
        <DreamBatter position="SS" />
      </PlayerList>
      <BasicTitle content="외야수 / 지명타자" />
      <PlayerList>
        <DreamBatter position="LF" />
        <DreamBatter position="CF" />
        <DreamBatter position="RF" />
        <DreamBatter position="DH" />
      </PlayerList>
      <BasicTitle content="선발 투수" />
      <PlayerList>
        <DreamPitcher position="SP" />
      </PlayerList>
      <BasicTitle content="불펜 투수" />
      <PlayerList>
        <DreamPitcher position="RP" />
      </PlayerList>
      <BasicButton onClick={onClickDeleteAll} content="전체 삭제" />
    </DreamTeamPageWrapper>
  );
};

const DreamTeamPageWrapper = styled.div`
  padding-top: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5vh;
`;

const PlayerList = styled.ul`
  display: flex;
  margin: 1em 0;
`;

export default DreamTeamPage;
