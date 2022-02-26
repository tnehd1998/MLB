import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import Loading from "../components/organisms/Loading/Loading";
import { useRecoilState } from "recoil";
import TeamBanner from "../components/organisms/TeamBanner/TeamBanner";
import TeamPlayers from "../components/organisms/TeamPlayers/TeamPlayers";
import PlayerCard from "../components/organisms/PlayerCard/PlayerCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ITeamNameProps } from "../types/team.type";
import { playerSelectionState } from "../store/player";

const TeamPage = () => {
  const { teamName } = useParams<ITeamNameProps>();
  const [selectPlayer, setSelectPlayer] = useRecoilState(playerSelectionState);

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
      <TeamDescription selectPlayer={selectPlayer}>
        <Suspense fallback={<Loading />}>
          <TeamBanner teamName={teamName!} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <TeamPlayers teamName={teamName!} />
        </Suspense>
      </TeamDescription>
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

const TeamDescription = styled.div<{ selectPlayer: boolean }>`
  filter: blur(${(props) => (props.selectPlayer ? "4px" : "0")});
`;

export default TeamPage;
