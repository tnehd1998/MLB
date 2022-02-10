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
  align-items: center;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 20px;
  margin: 1em;
  padding: 1em;
  width: 24em;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in;
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
  }
  @media (max-width: 768px) {
    width: 90vw;
  }
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
  width: 15em;
  height: 12em;
`;

const PlayerImage = styled.img`
  width: 8em;
  height: 12em;
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
        <TeamWrapper key={team.rank} onClick={() => onClickTeam(team.team)}>
          <div>
            <Title>팀 정보</Title>
            <Description>팀 이름 : {team.team}</Description>
            <Description>연봉 총액 : {team.payroll}</Description>
            <TeamLogo src={team.teamLogoUrl} alt="Team Logo" />
          </div>
          <div>
            <Title>대표 선수</Title>
            <Description>이름 : {team.bestPlayer}</Description>
            <Description>포지션: {team.position}</Description>
            <PlayerImage src={team.playerImageUrl} alt="Player" />
          </div>
        </TeamWrapper>
      ))}
    </PayrollWrapper>
  );
};

export default Payroll;
