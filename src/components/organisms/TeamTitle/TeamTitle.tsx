import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getTeams } from "../../../api/teams";
import { ITeamNameProps } from "../../../types/team.type";
import { ITeams } from "../../../types/teams.type";

const TeamTitle = ({ teamName }: ITeamNameProps) => {
  const { data: teams } = useQuery("teams", getTeams, {
    suspense: true,
  });
  const [currentTeam, setCurrentTeam] = useState<ITeams>({
    City: "",
    Key: "",
    PrimaryColor: "",
    TeamID: 0,
    WikipediaLogoUrl: "",
    Name: "",
  });

  const changeNameForUrl = (teamName: string) => {
    return teamName.toLowerCase().replace(/(\s*)/g, "");
  };

  useEffect(() => {
    function getCurrentTeam() {
      if (teams) {
        const team = teams.find((team) => team.Key === teamName);
        if (team) {
          setCurrentTeam(team);
        }
      }
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
    width: 18vw;
    height: 18vw;
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
    font-size: 1.4em;
  }

  @media (min-width: 1150px) {
    font-size: 4em;
  }
`;

const TeamNickname = styled.p`
  font-size: 4em;
  color: ${(props) => "#" + props.color};

  @media (max-width: 768px) {
    font-size: 2em;
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
    font-size: 0.8em;
  }

  @media (min-width: 1150px) {
    font-size: 1.5em;
  }
`;

export default TeamTitle;
