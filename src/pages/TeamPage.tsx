import { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { useRecoilState } from "recoil";
import TeamBanner from "../components/organisms/TeamBanner/TeamBanner";
import TeamPlayers from "../components/organisms/TeamPlayers/TeamPlayers";
import PlayerCard from "../components/organisms/PlayerCard/PlayerCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { playerSelectionState } from "../store/player";
import Loading from "../components/atoms/Loading";
import { useQuery } from "react-query";
import { getTeams } from "../api/teams";
import { ITeams } from "../types/teams.type";

const TeamPage = () => {
  const { teamName } = useParams<{ teamName: string }>();
  const [selectPlayer, setSelectPlayer] = useRecoilState(playerSelectionState);
  const { data: teams, isLoading: isTeamLoading } = useQuery("teams", getTeams);
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
        <TeamBanner currentTeam={currentTeam} isTeamLoading={isTeamLoading} />
        <Suspense fallback={<Loading />}>
          <TeamPlayers teamName={teamName!} />
        </Suspense>
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
