import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { useRecoilState } from "recoil";
import TeamBanner from "../components/organisms/TeamBanner";
import TeamPlayers from "../components/organisms/TeamPlayers/TeamPlayers";
import PlayerCard from "../components/organisms/PlayerCard/PlayerCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { playerSelectionState } from "../store/player";
import { useQuery } from "react-query";
import { getTeams } from "../api/teams";
import { ITeams } from "../types/teams.type";
import { getCertainTeam } from "../api/team";

const TeamPage = () => {
  const { teamName } = useParams<{ teamName: string }>();
  const [selectPlayer, setSelectPlayer] = useRecoilState(playerSelectionState);
  const { data: teams, isLoading: isTeamLoading } = useQuery("teams", getTeams);
  const { data: players, isLoading: isPlayerLoading } = useQuery(
    `${teamName}`,
    () => getCertainTeam(teamName)
  );
  const [currentTeam, setCurrentTeam] = useState<ITeams>({
    City: "",
    Key: "",
    PrimaryColor: "",
    TeamID: 0,
    WikipediaLogoUrl: "",
    Name: "",
  });

  useEffect(() => {
    function getCurrentTeam() {
      if (teams) {
        const team = teams.find((team) => team.Key === teamName);
        if (team) {
          setCurrentTeam(team);
        }
      }
    }
    getCurrentTeam();
  }, [teamName, teams]);

  useEffect(() => {
    return () => {
      setSelectPlayer(false);
    };
  }, [setSelectPlayer]);

  return (
    <Wrapper>
      <HelmetProvider>
        <Helmet>
          <title>{`MLB | ${teamName}`}</title>
        </Helmet>
      </HelmetProvider>
      <TeamWrapper selectPlayer={selectPlayer}>
        <TeamBanner currentTeam={currentTeam} isLoading={isTeamLoading} />
        <TeamPlayers players={players} isLoading={isPlayerLoading} />
      </TeamWrapper>
      {selectPlayer && <PlayerCard />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TeamWrapper = styled.div<{ selectPlayer: boolean }>`
  filter: blur(${(props) => (props.selectPlayer ? "4px" : "0")});
`;

export default TeamPage;
