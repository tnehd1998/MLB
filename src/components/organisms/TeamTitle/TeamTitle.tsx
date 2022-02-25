import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getTeams } from "../../../api/teams";
import { ITeamNameProps } from "../../../types/team.type";
import { ITeams } from "../../../types/teams.type";
import BasicButton from "../../atoms/Buttons/BasicButton";
import Logo from "../../atoms/Logo";

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
      <Logo imageUrl={`${currentTeam.WikipediaLogoUrl}`} />
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
      >
        <BasicButton
          color={currentTeam.PrimaryColor}
          content="→ 공식 홈페이지"
        />
      </OfficialPageLink>
    </TeamTitleWrapper>
  );
};

const TeamTitleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2vh;

  @media (max-width: 768px) {
    flex-direction: column;
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
  margin-top: 1em;
`;

export default TeamTitle;
