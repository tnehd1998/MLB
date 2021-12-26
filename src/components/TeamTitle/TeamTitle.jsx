import React from "react";
import styled from "styled-components";

const TeamTitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90vw;
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
  margin-left: 10vw;
`;

const TeamTitleCity = styled.p`
  font-size: 2em;
`;

const TeamTitleName = styled.p`
  font-size: 2.5em;
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

const TeamTitle = ({ team }) => {
  return (
    <TeamTitleContainer>
      <TeamLogoImage src={`${team.WikipediaLogoUrl}`} />
      <TeamTitleInfo>
        <TeamTitleCity>{team.City}</TeamTitleCity>
        <TeamTitleName>{team.Name}</TeamTitleName>
      </TeamTitleInfo>
      <LinkToOfficialPage
        href={`https://www.mlb.com/${team.Name ? team.Name.toLowerCase() : ""}`}
        target="_blank"
        color={team.PrimaryColor}
      >
        &#8594; 공식 홈페이지
      </LinkToOfficialPage>
    </TeamTitleContainer>
  );
};

export default TeamTitle;
