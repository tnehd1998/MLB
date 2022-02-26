import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { dreamTeamInfoState } from "../../../store/dreamteam";
import { IDreamPlayerProps } from "../../../types/player.type";
import Description from "../../atoms/Description";
import PlayerImage from "../../atoms/PlayerImage";

const DreamBatter = ({ position }: IDreamPlayerProps) => {
  const dreamTeamPlayers = useRecoilValue(dreamTeamInfoState);

  const findCertainPositionBatter = (position: string) => {
    for (let dreamTeamPlayer in dreamTeamPlayers) {
      let currentPlayer = dreamTeamPlayers[dreamTeamPlayer];
      if (currentPlayer.Position === position) {
        return [currentPlayer];
      }
    }
    return [];
  };

  return (
    <Wrapper>
      {findCertainPositionBatter(position).length ? (
        findCertainPositionBatter(position).map((player) => (
          <PlayerWrapper key={player.PlayerID}>
            <InfoWrapper>
              <Description text={`${player.Position}`} />
              <Description text={`${player.FirstName} ${player.LastName}`} />
            </InfoWrapper>
            <PlayerImage imageUrl={player.PhotoUrl} imageType="card" />
          </PlayerWrapper>
        ))
      ) : (
        <PlayerWrapper>
          <Description text="✕" />
        </PlayerWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 10.5em;
  height: 16em;
  margin: 1em;
`;

const PlayerWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 20px;
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 8px;
  margin-top: 1em;
`;

export default DreamBatter;
