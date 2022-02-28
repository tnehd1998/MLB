import { IPlayer } from "../../../types/player.type";
import Description from "../../atoms/Description";
import PlayerImage from "../../atoms/Images/PlayerImage";
import { DescriptionWrapper, PlayerWrapper, Wrapper } from "./styles";

export interface IProps {
  position: string;
  findCertainPositionBatter: (position: string) => IPlayer[];
}

const DreamBatter = ({ position, findCertainPositionBatter }: IProps) => {
  return (
    <Wrapper>
      {findCertainPositionBatter(position).length ? (
        findCertainPositionBatter(position).map((player) => (
          <PlayerWrapper key={player.PlayerID}>
            <DescriptionWrapper>
              <Description text={`${player.Position}`} />
              <Description text={`${player.FirstName} ${player.LastName}`} />
            </DescriptionWrapper>
            <PlayerImage imageUrl={player.PhotoUrl} imageType="card" />
          </PlayerWrapper>
        ))
      ) : (
        <PlayerWrapper>
          <Description text={`${position} 선택하지 않음`} />
        </PlayerWrapper>
      )}
    </Wrapper>
  );
};

export default DreamBatter;
