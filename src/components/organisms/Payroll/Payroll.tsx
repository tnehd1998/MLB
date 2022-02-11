import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import { getPayroll } from "../../../api/payroll";

const PayrollWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TeamWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 20px;
  margin: 1em;
  padding: 1.5em;
  width: 24em;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in;
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
  }
`;

const Team = styled.div`
  width: 60%;
  padding: 1em;
`;

const Player = styled.div`
  width: 40%;
  padding: 1em;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 1em;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 0.5em;
`;

const TeamLogo = styled.img`
  width: 13em;
  height: 13em;
  padding: 1em;
`;

const PlayerImage = styled.img`
  width: 9em;
  height: 14em;
  border-radius: 20px;
`;

const Payroll = () => {
  const { data: teams } = useQuery("payroll", getPayroll, {
    suspense: true,
  });
  const navigate = useNavigate();

  const onClickTeam = (team: string) => {
    navigate(`/${team}`);
  };

  return (
    <PayrollWrapper>
      {teams?.map((team) => (
        <TeamWrapper key={team.rank} onClick={() => onClickTeam(team.key)}>
          <Team>
            <Title>랭킹 {team.rank}위</Title>
            <Description>팀 이름 : {team.team}</Description>
            <Description>연봉 총액 : {team.payroll}</Description>
            <TeamLogo src={team.teamLogoUrl} alt="Team Logo" />
          </Team>
          <Player>
            <Title>대표 선수</Title>
            <Description>{team.bestPlayer}</Description>
            <Description>포지션 : {team.position}</Description>
            <PlayerImage src={team.playerImageUrl} alt="Player" />
          </Player>
        </TeamWrapper>
      ))}
    </PayrollWrapper>
  );
};

export default Payroll;
