import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetTeams } from "../../api/teams";

const TeamTitle = ({ teamName }) => {
  const { data: teams } = useGetTeams();
  const [currentTeam, setCurrentTeam] = useState([]);

  const changeNameForUrl = (teamName) => {
    return teamName.toLowerCase().replace(/(\s*)/g, "");
  };

  console.log(teams);

  useEffect(() => {
    function getCurrentTeam() {
      const team = teams.find((team) => team.Key === teamName);
      setCurrentTeam(team);
    }
    getCurrentTeam();
  }, [teamName, teams]);

  return (
    <TeamTitleWrapper>
      <TeamLogoImage src={`${currentTeam.WikipediaLogoUrl}`} />
      <TeamName>
        <TeamCity color={currentTeam.PrimaryColor}>{currentTeam.City}</TeamCity>
        <TeamNickname color={currentTeam.PrimaryColor}>
          {currentTeam.Name}
        </TeamNickname>
      </TeamName>
      <OfficialPageLink
        href={`https://www.mlb.com/${
          currentTeam.Name ? changeNameForUrl(currentTeam.Name) : ""
        }`}
        target="_blank"
        color={currentTeam.PrimaryColor}
      >
        &#8594; 공식 홈페이지
      </OfficialPageLink>
    </TeamTitleWrapper>
  );
};

const TeamTitleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2vh;
`;

const TeamLogoImage = styled.img`
  width: 15vw;
  height: 15vw;

  @media (max-width: 768px) {
    width: 25vw;
    height: 25vw;
  }

  @media (min-width: 1150px) {
    width: 12vw;
    height: 12vw;
  }
`;

const TeamName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TeamCity = styled.p`
  font-size: 3em;
  color: ${(props) => "#" + props.color};

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (min-width: 1150px) {
    font-size: 4em;
  }
`;

const TeamNickname = styled.p`
  font-size: 4em;
  color: ${(props) => "#" + props.color};

  @media (max-width: 768px) {
    font-size: 3em;
  }

  @media (min-width: 1150px) {
    font-size: 5em;
  }
`;

const OfficialPageLink = styled.a`
  padding: 0.5em;
  font-size: 1.2em;
  border: 2px solid ${(props) => "#" + props.color};
  border-radius: 20px;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  &:hover {
    background-color: ${(props) => "#" + props.color};
    transition: all 0.3s linear;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (min-width: 1150px) {
    font-size: 1.5em;
  }
`;

export default TeamTitle;
