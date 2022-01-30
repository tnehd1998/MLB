import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import Loading from "../components/Loading/Loading";
import { useRecoilState } from "recoil";
import { playerSelection } from "../store/atoms";
import TeamTitle from "../components/TeamTitle/TeamTitle";
import TeamPlayers from "../components/TeamPlayers/TeamPlayers";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ITeamNameProps } from "../types/team.type";

const TeamPage = () => {
  const { teamName } = useParams<ITeamNameProps>();
  const [selectPlayer, setSelectPlayer] = useRecoilState(playerSelection);

  useEffect(() => {
    return () => {
      setSelectPlayer(false);
    };
  }, [setSelectPlayer]);

  return (
    <TeamInformationWrapper>
      <HelmetProvider>
        <Helmet>
          <title>{`MLB | ${teamName}`}</title>
        </Helmet>
      </HelmetProvider>
      <TeamDescription selectPlayer={selectPlayer}>
        <Suspense fallback={<Loading />}>
          <TeamTitle teamName={teamName!} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <TeamPlayers teamName={teamName!} />
        </Suspense>
      </TeamDescription>
      {selectPlayer ? <PlayerCard /> : null}
    </TeamInformationWrapper>
  );
};

const TeamInformationWrapper = styled.div`
  padding-top: 12vh;
`;

const TeamDescription = styled.div<{ selectPlayer: boolean }>`
  filter: blur(${(props) => (props.selectPlayer ? "4px" : "0")});
`;

export default TeamPage;
