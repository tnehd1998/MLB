import CloseButton from "../../atoms/Buttons/CloseButton";
import PlayerImage from "../../atoms/Images/PlayerImage";
import BasicTitle from "../../atoms/Titles/BasicTitle";
import CardPlayerInfo from "../../molecules/PlayerInfo/CardPlayerInfo";
import CardButtons from "../../molecules/CardButtons";
import { IPlayer } from "../../../types/player.type";
import { InfoWrapper, PlayerWrapper, Wrapper } from "./styles";

export interface IProps {
  showingPlayer: IPlayer;
  onClickCloseButton: () => void;
  isDreamTeamPlayer: boolean;
  addPlayerToDreamTeam: () => void;
}

const PlayerCard = ({
  showingPlayer,
  onClickCloseButton,
  isDreamTeamPlayer,
  addPlayerToDreamTeam,
}: IProps) => {
  return (
    <Wrapper>
      <CloseButton onClick={() => onClickCloseButton()} />
      <BasicTitle content="☆ 선수 정보 ☆" />
      <InfoWrapper>
        <PlayerWrapper>
          <PlayerImage imageUrl={showingPlayer.PhotoUrl} imageType="card" />
          <CardPlayerInfo showingPlayer={showingPlayer} />
        </PlayerWrapper>
        <CardButtons
          showingPlayer={showingPlayer}
          isDreamTeamPlayer={isDreamTeamPlayer}
          addPlayerToDreamTeam={addPlayerToDreamTeam}
        />
      </InfoWrapper>
    </Wrapper>
  );
};

export default PlayerCard;
