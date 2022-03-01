import TeamPlayer from "../TeamPlayer";
import styled from "styled-components";
import { IPlayer } from "../../../types/player.type";
import BasicTitle from "../../atoms/Titles/BasicTitle";
import { PlayerWrapper, Wrapper } from "./styles";

export interface IProps {
  players: IPlayer[] | null | undefined;
  positions: string[];
  title: string;
}

const PositionPlayer = ({ players, positions, title }: IProps) => {
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
        {players &&
          [...players].map((playerInfo) =>
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

export default PositionPlayer;
