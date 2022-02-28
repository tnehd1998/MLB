import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { getRanking } from "../../../api/ranking";
import PlayerImage from "../../atoms/Images/PlayerImage";
import TopPlayerInfo from "../../molecules/PlayerInfo/TopPlayerInfo";

const TopPlayers = () => {
  const { data: players } = useQuery("topplayers", getRanking, {
    suspense: true,
  });
  const navigate = useNavigate();

  const onClickPlayer = (team: string) => {
    navigate(`/${team}`);
  };

  return (
    <Wrapper>
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
