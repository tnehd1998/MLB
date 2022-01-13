import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import { getTeamStandingData } from "../../apis";

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
  width: 70vw;
  border-radius: 20px;
  border: 2px solid black;
`;

const StandingWrapper = styled.div``;

const RegionCategories = styled.ul``;

const PostSeason = () => {
  const [standing, setStanding] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentRegion, setCurrentRegion] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await getTeamStandingData();
      setStanding(data);
      setIsLoading((loading) => !loading);
    }
    fetchData();
  }, []);

  console.log(standing);

  return (
    <PostSeasonWrapper>
      <Title>2021 MLB POSTSEASON</Title>
      <ScheduleImage src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1024/mlb/vz66hur9vu9qn3h9dddt.jpg" />
      <Title>2021 TEAM STANDING</Title>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <StandingWrapper>
          <RegionCategories>
            <li onClick={() => setCurrentRegion("AL East")}>AL East</li>
            <li onClick={() => setCurrentRegion("AL Central")}>AL Central</li>
            <li onClick={() => setCurrentRegion("AL West")}>AL West</li>
            <li onClick={() => setCurrentRegion("NL East")}>NL East</li>
            <li onClick={() => setCurrentRegion("NL Central")}>NL Central</li>
            <li onClick={() => setCurrentRegion("NL West")}>NL West</li>
          </RegionCategories>
          <p>Team | Wins | Losses</p>
          <div>
            {standing.map((team) => {
              if (
                team.League === currentRegion.split(" ")[0] &&
                team.Division === currentRegion.split(" ")[1]
              ) {
                return (
                  <Link key={team.TeamID} to={`/${team.Key}`}>
                    {team.City} {team.Name} {team.Wins} {team.Losses}
                  </Link>
                );
              }
            })}
          </div>
        </StandingWrapper>
      )}
    </PostSeasonWrapper>
  );
};

export default PostSeason;
