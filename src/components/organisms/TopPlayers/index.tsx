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
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {players?.map((player, index) => (
        <PlayerWrapper
          key={index + 1}
          onClick={() => onClickPlayer(player.team)}
        >
          <PlayerImage imageUrl={player.playerImg} imageType="main" />
          <TopPlayerInfo ranking={index + 1} player={player} />
        </PlayerWrapper>
      ))}
    </Wrapper>
  );
};

export default TopPlayers;
