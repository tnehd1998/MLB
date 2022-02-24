import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { getRanking } from "../../../api/ranking";
import Description from "../../atoms/Description";

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
  width: 24em;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in;
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
  }
`;

const PlayerImage = styled.img`
  border-radius: 20px 0 0 20px;
`;

const PlayerDescriptions = styled.div`
  padding: 1em;
  font-size: 18px;
`;

const PlayerTitle = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 1em;
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
          <PlayerImage src={player.playerImg} alt="Player" />
          <PlayerDescriptions>
            <PlayerTitle>
              Ranking #{player.ranking} {player.name}
            </PlayerTitle>
            <Description text={`포지션 : ${player.position}`} textSize={14} />
            <Description text={`소속팀 : ${player.team}`} textSize={14} />
            <Description
              text={`${player.totalValue} ${player.years}년 계약`}
              textSize={14}
            />
            <Description
              text={`계약 당시 나이 : ${player.SignedAge}`}
              textSize={14}
            />
            <Description
              text={`평균 연봉 : ${player.averageValue}`}
              textSize={14}
            />
            <Description text={`계약 기간 : ${player.period}`} textSize={14} />
          </PlayerDescriptions>
        </PlayerWrapper>
      ))}
    </TopPlayersWrapper>
  );
};

export default TopPlayers;
