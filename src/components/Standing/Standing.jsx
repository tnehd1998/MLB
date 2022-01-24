import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { teamStandingInfo } from "../../store/atoms";

const Standing = () => {
  const [currentRegion, setCurrentRegion] = useState("AL East");
  const standing = useRecoilValue(teamStandingInfo);

  return (
    <StandingWrapper>
      <RegionCategories>
        <RegionCategory onClick={() => setCurrentRegion("AL East")}>
          AL East
        </RegionCategory>
        <RegionCategory onClick={() => setCurrentRegion("AL Central")}>
          AL Central
        </RegionCategory>
        <RegionCategory onClick={() => setCurrentRegion("AL West")}>
          AL West
        </RegionCategory>
        <RegionCategory onClick={() => setCurrentRegion("NL East")}>
          NL East
        </RegionCategory>
        <RegionCategory onClick={() => setCurrentRegion("NL Central")}>
          NL Central
        </RegionCategory>
        <RegionCategory onClick={() => setCurrentRegion("NL West")}>
          NL West
        </RegionCategory>
      </RegionCategories>
      <StandingTeamInfo>
        <StandingTeamName>Team</StandingTeamName>
        <StandingTeamRecord>Total</StandingTeamRecord>
        <StandingTeamRecord>Wins</StandingTeamRecord>
        <StandingTeamRecord>Losses</StandingTeamRecord>
      </StandingTeamInfo>
      <StandingTeams>
        {standing.map((team) =>
          team.League === currentRegion.split(" ")[0] &&
          team.Division === currentRegion.split(" ")[1] ? (
            <StandingTeam key={team.TeamID} to={`/${team.Key}`}>
              <StandingTeamName>
                {team.City} {team.Name}
              </StandingTeamName>
              <StandingTeamRecord>162</StandingTeamRecord>
              <StandingTeamRecord>{team.Wins}</StandingTeamRecord>
              <StandingTeamRecord>{team.Losses}</StandingTeamRecord>
            </StandingTeam>
          ) : null
        )}
      </StandingTeams>
    </StandingWrapper>
  );
};

const StandingWrapper = styled.div`
  width: 60vw;
  border-radius: 20px;
  height: 20em;
  border: 2px solid ${({ theme }) => theme.textColor};
`;

const RegionCategories = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.textColor};
`;

const RegionCategory = styled.li`
  padding: 1em;
  cursor: pointer;
  border-radius: 16px;
  &:hover {
    transition: all 0.5s ease-in;
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
  }
`;

const StandingTeamInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-align: center;
  padding-top: 0.5em;
`;

const StandingTeams = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StandingTeam = styled(Link)`
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  display: flex;
  padding: 1em 0;
  width: 100%;
  text-align: center;
  &:hover {
    font-size: 18px;
    transition: all 0.5s ease-in;
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
    border-radius: 20px;
  }
`;

const StandingTeamName = styled.p`
  width: 40%;
`;

const StandingTeamRecord = styled.p`
  width: 20%;
`;

export default Standing;