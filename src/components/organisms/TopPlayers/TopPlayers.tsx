import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { getRanking } from "../../../api/ranking";
import Description from "../../atoms/Description";
import PlayerTitle from "../../atoms/PlayerTitle";
import PlayerImage from "../../atoms/PlayerImage";

const TopPlayersWrapper = styled.div`
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

const PlayerDescriptions = styled.div`
  padding: 1em;
  font-size: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopPlayers = () => {
  const { data: players } = useQuery("topplayers", getRanking, {
    suspense: true,
  });
  const navigate = useNavigate();

  const onClickPlayer = (team: string) => {
    navigate(`/${team}`);
  };

  return (
    <TopPlayersWrapper>
      {players?.map((player) => (
        <PlayerWrapper
          key={player.ranking}
          onClick={() => onClickPlayer(player.team)}
        >
          <PlayerImage imageUrl={player.playerImg} imageType="main" />
          <PlayerDescriptions>
            <PlayerTitle text={`Rank #${player.ranking} ${player.name}`} />
            <Description text={`포지션 : ${player.position}`} />
            <Description text={`소속팀 : ${player.team}`} />
            <Description text={`${player.totalValue} ${player.years}년 계약`} />
            <Description text={`계약 당시 나이 : ${player.SignedAge}`} />
            <Description text={`평균 연봉 : ${player.averageValue}`} />
            <Description text={`계약 기간 : ${player.period}`} />
          </PlayerDescriptions>
        </PlayerWrapper>
      ))}
    </TopPlayersWrapper>
  );
};

export default TopPlayers;
