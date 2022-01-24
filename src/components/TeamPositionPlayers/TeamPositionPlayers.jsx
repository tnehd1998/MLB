import React from "react";
import TeamPlayer from "../TeamPlayer/TeamPlayer";
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
            <TeamPlayer key={playerInfo.PlayerID} playerInfo={playerInfo} />
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
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1150px) {
    font-size: 36px;
  }
`;

const PlayerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 5vh 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1150px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default PositionPlayer;
