import styled from "styled-components";
import { IRankingPlayerProps } from "../../../types/player.type";
import PlayerImage from "../../atoms/Images/PlayerImage";
import Loading from "../../atoms/Loading";
import TopPlayerInfo from "../../molecules/PlayerInfo/TopPlayerInfo";

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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const PlayerWrapper = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 20px;
  margin: 1em;
  width: 23em;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in;
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
  }
`;

export default TopPlayers;
