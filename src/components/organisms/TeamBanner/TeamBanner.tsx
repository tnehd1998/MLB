import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getTeams } from "../../../api/teams";
import { ITeamNameProps } from "../../../types/team.type";
import { ITeams } from "../../../types/teams.type";
import BasicButton from "../../atoms/Buttons/BasicButton";
import Logo from "../../atoms/Logo";
import TeamTitle from "../../atoms/Titles/TeamTitle";

const TeamBanner = ({ teamName }: ITeamNameProps) => {
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
    <Wrapper>
      <Logo imageUrl={`${currentTeam.WikipediaLogoUrl}`} />
      <NameWrapper>
        <TeamTitle
          content={currentTeam.City}
          color={currentTeam.PrimaryColor}
          size={48}
        />
        <TeamTitle
          content={currentTeam.Name}
          color={currentTeam.PrimaryColor}
          size={56}
        />
      </NameWrapper>
      <LinkWrapper
        href={`https://www.mlb.com/${
          currentTeam.Name ? changeNameForUrl(currentTeam.Name) : ""
        }`}
        target="_blank"
      >
        <BasicButton
          color={currentTeam.PrimaryColor}
          content="→ 공식 홈페이지"
        />
      </LinkWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinkWrapper = styled.a`
  margin-top: 1em;
`;

export default TeamBanner;
