import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { teamInfo } from "../atoms";

import { getTeamData } from "../apis";

import Loading from "../components/Loading/Loading";

const MainPage = () => {
  const [teams, setTeams] = useRecoilState(teamInfo);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getTeamData();
      setTeams(data);
      setIsLoading((isLoading) => !isLoading);
    }
    fetchData();
  }, [setTeams]);

  return (
    <MainPageWrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <TeamWrapper>
          {teams.map((team) =>
            team.WikipediaLogoUrl ? (
              <TeamLink key={team.TeamID} to={team.Key}>
                <Team iconBgColor={`${team.PrimaryColor}`}>
                  <TeamLogo src={`${team.WikipediaLogoUrl}`} alt={team.City} />
                </Team>
              </TeamLink>
            ) : null
          )}
        </TeamWrapper>
      )}
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
`;

const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1vw;
`;

const TeamLink = styled(Link)``;

const Team = styled.div`
  width: 15vw;
  height: 15vw;
  border-radius: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => "#" + props.iconBgColor};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in;
    background-color: ${(props) => "#" + props.iconBgColor};
  }
`;

const TeamLogo = styled.img`
  width: 10vw;
  height: 10vw;
`;

export default MainPage;
