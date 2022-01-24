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
  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease-in;
  }
`;

const PlayerImage = styled.img`
  border-radius: 10px 0px 0px 10px;
`;

const PlayerProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
`;

const PlayerName = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const PlayerDescription = styled.p`
  font-size: 14px;
`;

const MoreInfo = styled.div`
  padding: 0.5em;
  margin-top: 0.2em;
  font-size: 1em;
  border: 2px solid ${(props) => "#" + props.color};
  border-radius: 15px;

  text-decoration: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "youtube" ? "tomato" : "skyblue"};
  &:hover {
    background-color: ${(props) => "#" + props.color};
    transition: all 0.3s linear;
    color: white;
  }
`;

export default TeamPlayer;