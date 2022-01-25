import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { dreamTeamInfo } from "../../store/atoms";

const DreamPitcher = ({ position }) => {
  const dreamTeamPlayers = useRecoilValue(dreamTeamInfo);

  const filterPitcherByPosition = () => {
    let result = [];
    for (let dreamTeamPlayer in dreamTeamPlayers) {
      let currentPlayer = dreamTeamPlayers[dreamTeamPlayer];
      if (currentPlayer.Position === position) {
        result.push(currentPlayer);
      }
    }
    return result;
  };

  const filterPitcher = () => {
    return position === "SP" ? 5 : 6;
  };

  return (
    <DreamPitcherWrapper>
      {filterPitcherByPosition().map((player) => (
        <Player key={player.PlayerID}>
          <PlayerInfo>
            <PlayerPosition>{player.Position}</PlayerPosition>
            <PlayerName>
              {player.FirstName} {player.LastName}
            </PlayerName>
          </PlayerInfo>
          <PlayerImage src={player.PhotoUrl} />
        </Player>
      ))}
      {filterPitcherByPosition().length < filterPitcher()
        ? [...Array(filterPitcher() - filterPitcherByPosition().length)].map(
            (_, index) => (
              <Player key={index}>
                <h1>X</h1>
              </Player>
            )
          )
        : null}
    </DreamPitcherWrapper>
  );
};

const DreamPitcherWrapper = styled.div`
  display: flex;
`;

const Player = styled.li`
  width: 13vw;
  height: 13vw;
  padding: 0.2em;
  margin: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 12vw;
    height: 12vw;
  }

  @media (min-width: 1150px) {
    width: 14vw;
    height: 14vw;
  }
`;

const PlayerImage = styled.img`
  width: 8vw;
  height: 10vw;

  @media (max-width: 768px) {
    width: 5vw;
    height: 8vw;
  }

  @media (min-width: 1150px) {
    width: 10vw;
    height: 12vw;
  }
`;

const PlayerInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 8px;
  margin-top: 1em;
`;

const PlayerPosition = styled.p`
  font-size: 12px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 8px;
  }

  @media (min-width: 1150px) {
    font-size: 16px;
  }
`;

const PlayerName = styled.p`
  font-size: 10px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 8px;
  }

  @media (min-width: 1150px) {
    font-size: 12px;
  }
`;

export default DreamPitcher;
