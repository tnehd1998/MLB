import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  currentPlayer,
  currentX,
  currentY,
  playerSelection,
} from "../../store/atoms";

const TeamPlayer = ({ playerInfo }) => {
  const setPlayerSelected = useSetRecoilState(playerSelection);
  const setCurrentPlayer = useSetRecoilState(currentPlayer);
  const setCurrentX = useSetRecoilState(currentX);
  const setCurrentY = useSetRecoilState(currentY);

  const showPlayerInfo = (playerInfo) => {
    setPlayerSelected((value) => !value);
    setCurrentPlayer(playerInfo);
    calculatePopUpWidth();
    calculatePopUpHeight();
  };

  const calculatePopUpWidth = () => {
    setCurrentX(window.scrollX + window.innerWidth * 0.15);
  };
  const calculatePopUpHeight = () => {
    setCurrentY(window.scrollY + window.innerHeight * 0.15);
  };

  return (
    <TeamPlayerWrapper>
      <PlayerImage
        src={playerInfo.PhotoUrl}
        alt={`${playerInfo.FirstName} ${playerInfo.LastName}`}
      />
      <PlayerProfile>
        <PlayerName>
          {playerInfo.FirstName} {playerInfo.LastName}
        </PlayerName>
        <PlayerDescription>포지션 : {playerInfo.Position}</PlayerDescription>
        <PlayerDescription>타격 위치 : {playerInfo.BatHand}</PlayerDescription>
        <PlayerDescription>
          투구 방향 : {playerInfo.ThrowHand}
        </PlayerDescription>
        <PlayerDescription>
          출생 : {String(playerInfo.BirthDate).substring(0, 10)}
        </PlayerDescription>
        <PlayerDescription>국적 : {playerInfo.BirthCountry}</PlayerDescription>
        <MoreInfo onClick={() => showPlayerInfo(playerInfo)}>
          🔎 선수 정보
        </MoreInfo>
      </PlayerProfile>
    </TeamPlayerWrapper>
  );
};

const TeamPlayerWrapper = styled.div`
  display: flex;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 10px;
  width: 28vw;
  height: 15vh;

  @media (max-width: 768px) {
    width: 40vw;
    height: 20vh;
  }

  @media (min-width: 1150px) {
    width: 20vw;
    height: 20vh;
  }
`;

const PlayerImage = styled.img`
  border-radius: 10px 0px 0px 10px;
  width: 10vw;
  height: 15vh;

  @media (max-width: 768px) {
    width: 18vw;
    height: 20vh;
  }

  @media (min-width: 1150px) {
    width: 8vw;
    height: 20vh;
  }
`;

const PlayerProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
`;

const PlayerName = styled.p`
  font-size: 13px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (min-width: 1150px) {
    font-size: 14px;
  }
`;

const PlayerDescription = styled.p`
  font-size: 11px;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (min-width: 1150px) {
    font-size: 10px;
  }
`;

const MoreInfo = styled.div`
  padding: 0.5em;
  margin-top: 0.2em;
  font-size: 1em;
  border: 2px solid ${(props) => "#" + props.color};
  border-radius: 15px;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.textColor};

  &:hover {
    background-color: ${({ theme }) => theme.textColor};
    transition: all 0.3s linear;
    color: ${({ theme }) => theme.bgColor};
  }

  @media (max-width: 768px) {
    margin-top: 1em;
    font-size: 0.8em;
  }

  @media (min-width: 1150px) {
    margin-top: 1em;
    font-size: 1.2em;
  }
`;

export default TeamPlayer;
