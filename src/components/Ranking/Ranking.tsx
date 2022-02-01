import React from "react";
import { useRanking } from "../../api/ranking";

const Ranking = () => {
  const { data: players } = useRanking();

  return (
    <div>
      {players?.map((player) => (
        <div key={player.ranking}>
          <p>Ranking #{player.ranking}</p>
          <p>이름 : {player.name}</p>
          <p>포지션 : {player.position}</p>
          <p>소속팀 : {player.team}</p>
          <p>계약 년수 : {player.years}</p>
          <p>계약 당시 나이 : {player.SignedAge}</p>
          <p>평균 연봉 : {player.averageValue}</p>
          <p>연봉 총액 : {player.totalValue}</p>
          <p>계약 기간 : {player.period}</p>
          <img src={player.playerImg} alt="Player" />
        </div>
      ))}
    </div>
  );
};

export default Ranking;
