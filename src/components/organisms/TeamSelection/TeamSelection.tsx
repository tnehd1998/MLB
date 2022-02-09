import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getTeams } from "../../../api/teams";

const TeamSelection = () => {
  const { data: teams } = useQuery("teams", getTeams, {
    suspense: true,
  });

  return (
    <TeamSelectionWrapper>
      {teams?.map(
        (team) =>
          team.WikipediaLogoUrl && (
            <TeamLink key={team.TeamID} to={team.Key}>
              <Team iconBgColor={`${team.PrimaryColor}`}>
                <TeamLogo src={`${team.WikipediaLogoUrl}`} alt={team.City} />
              </Team>
            </TeamLink>
          )
      )}
    </TeamSelectionWrapper>
  );
};

const TeamSelectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1vw;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamLink = styled(Link)``;

const Team = styled.div<{ iconBgColor: string }>`
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

  @media (max-width: 768px) {
    width: 28vw;
    height: 28vw;
  }
`;

const TeamLogo = styled.img`
  width: 10vw;
  height: 10vw;

  @media (max-width: 768px) {
    width: 20vw;
    height: 20vw;
  }
`;

export default TeamSelection;
