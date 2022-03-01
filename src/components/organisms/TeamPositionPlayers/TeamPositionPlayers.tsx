import TeamPlayer from "../TeamPlayer";
import styled from "styled-components";
import { IPlayer } from "../../../types/player.type";
import BasicTitle from "../../atoms/Titles/BasicTitle";

export interface IProps {
  info: IPlayer[] | null | undefined;
  positions: string[];
  title: string;
}

const PositionPlayer = ({ info, positions, title }: IProps) => {
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
        {info &&
          [...info].map((playerInfo) =>
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
