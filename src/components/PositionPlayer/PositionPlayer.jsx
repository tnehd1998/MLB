import React from "react";
import Player from "../Player/Player";
import styled from "styled-components";

const PositionPlayer = ({ info, positions, title }) => {
  const filterPosition = (playerInfo, positions) => {
    if (positions.includes(playerInfo.Position)) {
      return true;
    }
    return false;
  };

  return (
    <PositionPlayerWrapper>
      <PositionName>{title}</PositionName>
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
    </PositionPlayerWrapper>
  );
};

const PositionPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PositionName = styled.p`
  font-size: 24px;
`;

const PlayerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 5vh 0;
`;

export default PositionPlayer;
