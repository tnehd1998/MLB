import { IPlayer } from "../../../types/player.type";
import Description from "../../atoms/Description";
import PlayerImage from "../../atoms/Images/PlayerImage";
import { DescriptionWrapper, PlayerWrapper, Wrapper } from "./styles";

export interface IProps {
  position: string;
  filterPitcherByPosition: (position: string) => IPlayer[];
}

const DreamPitcher = ({ position, filterPitcherByPosition }: IProps) => {
  const filterPitcher = () => {
    return position === "SP" ? 5 : 6;
  };

  return (
    <Wrapper>
      {filterPitcherByPosition(position).map((player) => (
        <PlayerWrapper key={player.PlayerID}>
          <DescriptionWrapper>
            <Description text={`${player.Position}`} />
            <Description text={`${player.FirstName} ${player.LastName}`} />
          </DescriptionWrapper>
          <PlayerImage imageUrl={player.PhotoUrl} imageType="card" />
        </PlayerWrapper>
      ))}
      {filterPitcherByPosition(position).length < filterPitcher() &&
        [
          ...Array(filterPitcher() - filterPitcherByPosition(position).length),
        ].map((_, index) => (
          <PlayerWrapper key={index}>
            <Description text={`${position} 선택하지 않음`} />
          </PlayerWrapper>
        ))}
    </Wrapper>
  );
};

export default DreamPitcher;
