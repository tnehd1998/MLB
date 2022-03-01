import { Helmet, HelmetProvider } from "react-helmet-async";
import TeamSelection from "../../organisms/TeamSelection";
import { useQuery } from "react-query";
import { getTeams } from "../../../api/teams";
import { useNavigate } from "react-router";
import { Wrapper } from "./styles";

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

export default MainPage;
