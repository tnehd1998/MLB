import React from "react";
import TeamPlayer from "../TeamPlayer/TeamPlayer";
import styled from "styled-components";
import { IPlayer } from "../../../types/player.type";
import { ITeam } from "../../../types/team.type";
import BasicTitle from "../../atoms/Titles/BasicTitle";

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
    <Wrapper>
      <BasicTitle content={title} />
      <PlayerWrapper>
        {[...info].map((playerInfo) =>
          filterPosition(playerInfo, positions) ? (
            <TeamPlayer key={playerInfo.PlayerID} playerInfo={playerInfo} />
          ) : (
            ""
          )
        )}
      </PlayerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlayerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default PositionPlayer;
