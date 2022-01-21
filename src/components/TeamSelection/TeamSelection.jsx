import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { teamInfo } from "../../atoms";

const TeamSelection = () => {
  const teams = useRecoilValue(teamInfo);

  return (
    <TeamSelectionWrapper>
      {teams.map((team) =>
        team.WikipediaLogoUrl ? (
          <TeamLink key={team.TeamID} to={team.Key}>
            <Team iconBgColor={`${team.PrimaryColor}`}>
              <TeamLogo src={`${team.WikipediaLogoUrl}`} alt={team.City} />
            </Team>
          </TeamLink>
        ) : null
      )}
    </TeamSelectionWrapper>
  );
};

const TeamSelectionWrapper = styled.div`
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
  border: 3px solid ${({ theme }) => theme.textColor};
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

export default TeamSelection;
