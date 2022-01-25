import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import DreamBatter from "../components/DreamBatter/DreamBatter";
import DreamPitcher from "../components/DreamPitcher/DreamPitcher";
import { dreamTeamInfo } from "../store/atoms";

const DreamTeamPage = () => {
  const setDreamTeamPlayers = useSetRecoilState(dreamTeamInfo);

  const onClickDeleteAll = () => {
    setDreamTeamPlayers([]);
  };

  return (
    <DreamTeamPageWrapper>
      <PlayerTitle>내야수</PlayerTitle>
      <PlayerList>
        <DreamBatter position="C" />
        <DreamBatter position="1B" />
        <DreamBatter position="2B" />
        <DreamBatter position="3B" />
        <DreamBatter position="SS" />
      </PlayerList>
      <PlayerTitle>외야수 / 지명타자</PlayerTitle>
      <PlayerList>
        <DreamBatter position="LF" />
        <DreamBatter position="CF" />
        <DreamBatter position="RF" />
        <DreamBatter position="DH" />
      </PlayerList>
      <PlayerTitle>선발 투수</PlayerTitle>
      <PlayerList>
        <DreamPitcher position="SP" />
      </PlayerList>
      <PlayerTitle>불펜 투수</PlayerTitle>
      <PlayerList>
        <DreamPitcher position="RP" />
      </PlayerList>
      <DeleteAllButton onClick={onClickDeleteAll}>전체 삭제</DeleteAllButton>
    </DreamTeamPageWrapper>
  );
};

const DreamTeamPageWrapper = styled.div`
  padding-top: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlayerTitle = styled.p`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 0.5em;
`;

const PlayerList = styled.ul`
  display: flex;
  margin: 1em 0;
`;

const DeleteAllButton = styled.button`
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 15px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  transition: all 0.3s linear;
  margin-bottom: 5vh;
  &:hover {
    background-color: ${({ theme }) => theme.textColor};
    transition: all 0.3s linear;
    color: ${({ theme }) => theme.bgColor};
  }
`;

export default DreamTeamPage;
