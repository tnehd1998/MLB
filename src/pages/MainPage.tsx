import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TeamSelection from "../components/organisms/TeamSelection";
import { useQuery } from "react-query";
import { getTeams } from "../api/teams";
import { useNavigate } from "react-router";

const MainPage = () => {
  const { data: teams, isLoading } = useQuery("teams", getTeams);
  const navigate = useNavigate();

  const onClickTeam = (team: string) => {
    navigate(`/${team}`);
  };

  return (
    <Wrapper>
      <HelmetProvider>
        <Helmet>
          <title>MLB | TEAMS</title>
        </Helmet>
      </HelmetProvider>
      <TeamSelection
        teams={teams}
        isLoading={isLoading}
        onClickTeam={onClickTeam}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
`;

export default MainPage;
