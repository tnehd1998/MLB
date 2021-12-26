import React from "react";
import styled from "styled-components";

const TeamTitleContainer = styled.div`
  display: flex;
  justify-content: center;
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

const TeamTitle = ({ team }) => {
  return (
    <TeamTitleContainer>
      <TeamLogoImage src={`${team.WikipediaLogoUrl}`} />
      <TeamTitleInfo>
        <TeamTitleCity>{team.City}</TeamTitleCity>
        <TeamTitleName>{team.Name}</TeamTitleName>
      </TeamTitleInfo>
    </TeamTitleContainer>
  );
};

export default TeamTitle;
