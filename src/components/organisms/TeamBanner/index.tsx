import { ITeams } from "../../../types/teams.type";
import BasicButton from "../../atoms/Buttons/BasicButton";
import Loading from "../../atoms/Loading";
import Logo from "../../atoms/Logo";
import TeamTitle from "../../atoms/Titles/TeamTitle";
import { LinkWrapper, NameWrapper, Wrapper } from "./styles";

export interface IProps {
  currentTeam: ITeams;
  isLoading: boolean;
}

const TeamBanner = ({ currentTeam, isLoading }: IProps) => {
  const changeNameForUrl = (teamName: string) => {
    return teamName.toLowerCase().replace(/(\s*)/g, "");
  };

  return (
    <Wrapper>
      {isLoading && <Loading />}
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

export default TeamBanner;
