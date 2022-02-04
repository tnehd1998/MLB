import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { currentPlayer, playerSelection } from "../../store/player";
import { IPlayer } from "../../types/player.type";

const TeamPlayer = ({ playerInfo }: { playerInfo: IPlayer }) => {
  const setPlayerSelected = useSetRecoilState(playerSelection);
  const setCurrentPlayer = useSetRecoilState(currentPlayer);

  const showPlayerInfo = (playerInfo: IPlayer) => {
    setPlayerSelected((value) => !value);
    setCurrentPlayer(playerInfo);
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
  width: 22em;
  height: 15em;
  margin: 0.5em;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const PlayerImage = styled.img`
  border-radius: 10px 0px 0px 10px;
  width: 10em;
  height: 15em;
`;

const PlayerProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
`;

const PlayerName = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const PlayerDescription = styled.p`
  font-size: 18px;
`;

const MoreInfo = styled.div`
  padding: 0.5em;
  margin-top: 1em;
  font-size: 20px;
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
`;

export default TeamPlayer;
