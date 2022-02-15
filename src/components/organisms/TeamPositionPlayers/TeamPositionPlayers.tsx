import React from "react";
import TeamPlayer from "../TeamPlayer/TeamPlayer";
import styled from "styled-components";
import { IPlayer } from "../../../types/player.type";
import { ITeam } from "../../../types/team.type";
import Title from "../../atoms/Title";

const PositionPlayer = ({
  info,
  positions,
  title,
}: {
  info: ITeam[];
  positions: string[];
  title: string;
}) => {
  const filterPosition = (playerInfo: IPlayer, positions: string[]) => {
    if (positions.includes(playerInfo.Position)) {
      return true;
    }
    return false;
  };

  return (
    <PositionPlayerWrapper>
      <Title content={title} />
      <PlayerList>
        {[...info].map((playerInfo) =>
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

const PlayerList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  margin: 5vh 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default PositionPlayer;
