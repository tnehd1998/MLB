import { IRankingPlayerProps } from "../../../types/player.type";
import PlayerImage from "../../atoms/Images/PlayerImage";
import Loading from "../../atoms/Loading";
import TopPlayerInfo from "../../molecules/PlayerInfo/TopPlayerInfo";
import { PlayerWrapper, Wrapper } from "./styles";

export interface IProps {
  players: IRankingPlayerProps[] | null | undefined;
  isLoading: boolean;
  onClickPlayer: (team: string) => void;
}

const TopPlayers = ({ players, isLoading, onClickPlayer }: IProps) => {
  return (
    <Wrapper>
      {isLoading && <Loading />}
      {players?.map((player) => (
        <PlayerWrapper
          key={player.ranking}
          onClick={() => onClickPlayer(player.team)}
        >
          <PlayerImage imageUrl={player.playerImg} imageType="main" />
          <TopPlayerInfo player={player} />
        </PlayerWrapper>
      ))}
    </Wrapper>
  );
};

export default TopPlayers;
