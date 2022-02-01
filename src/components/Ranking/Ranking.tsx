import React from "react";
import styled from "styled-components";
import { useRanking } from "../../api/ranking";

const RankingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const PlayerWrapper = styled.div`
  display: flex;
  border: 2px solid black;
  border-radius: 20px;
  margin: 1em;
`;

const PlayerImage = styled.img`
  border-radius: 20px 0 0 20px;
`;

const Ranking = () => {
  const { data: players } = useRanking();

  return (
    <RankingWrapper>
      {players?.map((player) => (
        <PlayerWrapper key={player.ranking}>
          <PlayerImage src={player.playerImg} alt="Player" />
          <div>
            <p>Ranking #{player.ranking}</p>
            <p>이름 : {player.name}</p>
            <p>포지션 : {player.position}</p>
            <p>소속팀 : {player.team}</p>
            <p>
              {player.totalValue} {player.years}년 계약
            </p>
            <p>계약 당시 나이 : {player.SignedAge}</p>
            <p>평균 연봉 : {player.averageValue}</p>
            <p>계약 기간 : {player.period}</p>
          </div>
        </PlayerWrapper>
      ))}
    </RankingWrapper>
  );
};

export default Ranking;
