import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import { getTeamStandingData } from "../../apis";
import Loading from "../Loading/Loading";

const PostSeasonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
`;

const Title = styled.p`
  font-size: 32px;
  margin: 20px 0px;
`;

const ScheduleImage = styled.img`
  width: 60vw;
  border-radius: 20px;
  border: 2px solid black;
`;

const StandingWrapper = styled.div`
  width: 60vw;
  border-radius: 20px;
  height: 20em;
  border: 2px solid black;
`;

const RegionCategories = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
`;

const RegionCategory = styled.li`
  padding: 1em;
  cursor: pointer;
  &:hover {
    transition: all 0.5s ease-in;
    background-color: black;
    color: white;
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
  color: black;
  text-decoration: none;
  display: flex;
  padding: 1em 0;
  width: 100%;
  text-align: center;
  &:hover {
    font-size: 18px;
    transition: all 0.5s ease-in;
    background-color: black;
    color: white;
    border-radius: 20px;
  }
`;

const StandingTeamName = styled.p`
  width: 40%;
`;

const StandingTeamRecord = styled.p`
  width: 20%;
`;

const PostSeason = () => {
  const [standing, setStanding] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentRegion, setCurrentRegion] = useState("AL East");

  useEffect(() => {
    async function fetchData() {
      const data = await getTeamStandingData();
      setStanding(data);
      setIsLoading((loading) => !loading);
    }
    fetchData();
  }, []);

  return (
    <PostSeasonWrapper>
      <Title>2021 MLB POSTSEASON</Title>
      <ScheduleImage src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1024/mlb/vz66hur9vu9qn3h9dddt.jpg" />
      <Title>2021 TEAM STANDING</Title>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </PostSeasonWrapper>
  );
};

export default PostSeason;
