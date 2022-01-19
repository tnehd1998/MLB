import React from "react";
import styled from "styled-components";

const TeamTitleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2vh;
`;

const TeamLogoImage = styled.img`
  width: 15vw;
  height: 15vw;
`;

const TeamName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TeamCity = styled.p`
  font-size: 2em;
  color: ${(props) => "#" + props.color};
`;

const TeamNickname = styled.p`
  font-size: 2.5em;
  color: ${(props) => "#" + props.color};
`;

const OfficialPageLink = styled.a`
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid ${(props) => "#" + props.color};
  border-radius: 20px;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  &:hover {
    background-color: ${(props) => "#" + props.color};
    transition: all 0.3s linear;
    color: white;
  }
`;

const changeNameForUrl = (teamName) => {
  return teamName.toLowerCase().replace(/(\s*)/g, "");
};

const TeamTitle = ({ team }) => {
  return (
    <TeamTitleWrapper>
      <TeamLogoImage src={`${team.WikipediaLogoUrl}`} />
      <TeamName>
        <TeamCity color={team.PrimaryColor}>{team.City}</TeamCity>
        <TeamNickname color={team.PrimaryColor}>{team.Name}</TeamNickname>
      </TeamName>
      <OfficialPageLink
        href={`https://www.mlb.com/${
          team.Name ? changeNameForUrl(team.Name) : ""
        }`}
        target="_blank"
        color={team.PrimaryColor}
      >
        &#8594; 공식 홈페이지
      </OfficialPageLink>
    </TeamTitleWrapper>
  );
};

export default TeamTitle;
