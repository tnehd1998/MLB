import React from "react";
import Player from "../Player/Player";
import styled from "styled-components";

const PositionPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 24px;
`;

const PlayerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 5vh 0;
`;

const filterPosition = (playerInfo, positions) => {
  if (positions.includes(playerInfo.Position)) {
    return true;
  }
  return false;
};

const PositionPlayer = ({ info, positions, title }) => {
  return (
    <PositionPlayerContainer>
      <Title>{title}</Title>
      <PlayerList>
        {[...info].map((playerInfo) =>
          playerInfo.Status === "Active" &&
          filterPosition(playerInfo, positions) ? (
            <Player key={playerInfo.PlayerID} playerInfo={playerInfo} />
          ) : (
            ""
          )
        )}
      </PlayerList>
    </PositionPlayerContainer>
  );
};

export default PositionPlayer;
