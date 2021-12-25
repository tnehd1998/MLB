import React from "react";
import Player from "../Player/Player";
import styled from "styled-components";

const PositionPlayerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

const filterPostion = (playerInfo, positions) => {
  if (positions.includes(playerInfo.Position)) {
    return true;
  }
  return false;
};

const PositionPlayer = ({ info, positions }) => {
  return (
    <PositionPlayerContainer>
      {[...info].map((playerInfo) =>
        playerInfo.Status === "Active" &&
        filterPostion(playerInfo, positions) ? (
          <div>
            <Player key={playerInfo.PlayerID} playerInfo={playerInfo} />
          </div>
        ) : (
          ""
        )
      )}
    </PositionPlayerContainer>
  );
};

export default PositionPlayer;
