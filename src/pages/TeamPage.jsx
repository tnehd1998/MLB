import React, { Suspense } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import Loading from "../components/Loading/Loading";
import { useRecoilValue } from "recoil";
import { playerSelection } from "../atoms";
import TeamTitle from "../components/TeamTitle/TeamTitle";
import TeamPlayers from "../components/TeamPlayers/TeamPlayers";
import PlayerCard from "../components/PlayerCard/PlayerCard";

const TeamPage = () => {
  const { teamName } = useParams();
  const selectPlayer = useRecoilValue(playerSelection);

  return (
    <TeamInformationWrapper>
      <TeamDescription selectPlayer={selectPlayer}>
        <Suspense fallback={<Loading />}>
          <TeamTitle teamName={teamName} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <TeamPlayers teamName={teamName} />
        </Suspense>
      </TeamDescription>
      {selectPlayer ? <PlayerCard /> : null}
    </TeamInformationWrapper>
  );
};

const TeamInformationWrapper = styled.div`
  padding-top: 12vh;
`;

const TeamDescription = styled.div`
  filter: blur(${(props) => (props.selectPlayer ? "4px" : "0")});
`;

export default TeamPage;
