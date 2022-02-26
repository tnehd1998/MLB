import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getTeams } from "../../../api/teams";
import TeamButton from "../../atoms/Buttons/TeamButton";

const TeamSelection = () => {
  const { data: teams } = useQuery("teams", getTeams, {
    suspense: true,
  });
  const navigate = useNavigate();

  const onClickTeam = (team: string) => {
    navigate(`/${team}`);
  };

  return (
    <Wrapper>
      {teams?.map(
        (team) =>
          team.WikipediaLogoUrl && (
            <TeamButton
              key={team.Key}
              team={team}
              onClick={() => onClickTeam(team.Key)}
            />
          )
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1vw;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default TeamSelection;
