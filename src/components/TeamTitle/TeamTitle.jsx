import React from "react";
import styled from "styled-components";

const TeamTitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2vh;
`;

const TeamLogoImage = styled.img`
  width: 15vw;
  height: 15vw;
`;

const TeamTitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TeamTitleCity = styled.p`
  font-size: 2em;
  color: ${(props) => "#" + props.color};
`;

const TeamTitleName = styled.p`
  font-size: 2.5em;
  color: ${(props) => "#" + props.color};
`;

const LinkToOfficialPage = styled.a`
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid ${(props) => "#" + props.color};
  border-radius: 20px;
  color: black;
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
  console.log(team);
  return (
    <TeamTitleContainer>
      <TeamLogoImage src={`${team.WikipediaLogoUrl}`} />
      <TeamTitleInfo>
        <TeamTitleCity color={team.PrimaryColor}>{team.City}</TeamTitleCity>
        <TeamTitleName color={team.PrimaryColor}>{team.Name}</TeamTitleName>
      </TeamTitleInfo>
      <LinkToOfficialPage
        href={`https://www.mlb.com/${
          team.Name ? changeNameForUrl(team.Name) : ""
        }`}
        target="_blank"
        color={team.PrimaryColor}
      >
        &#8594; 공식 홈페이지
      </LinkToOfficialPage>
    </TeamTitleContainer>
  );
};

export default TeamTitle;
