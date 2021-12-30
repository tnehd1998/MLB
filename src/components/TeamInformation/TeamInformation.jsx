import React, { useState, useEffect } from "react";
import TeamPlayers from "../TeamPlayers/TeamPlayers";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentPlayer, playerSelection, teamLogo } from "../../atoms";
import TeamTitle from "../TeamTitle/TeamTitle";
import PlayerDetail from "../PlayerDetail/PlayerDetail";

const TeamInformationWrapper = styled.div``;

const TeamDescription = styled.div`
  padding-top: 12vh;
  filter: blur(${(props) => (props.selectPlayer ? "4px" : "0")});
`;

const TeamInformation = ({ teamName, getData }) => {
  const [team, setTeam] = useState({});

  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const logo = useRecoilValue(teamLogo);
  const [selectPlayer, setSelectPlayer] = useRecoilState(playerSelection);
  const showingPlayer = useRecoilValue(currentPlayer);

  const getTeamInfo = (logo, teamName) => {
    return logo.find((value) => value.Key === teamName);
  };

  useEffect(() => {
    const teamInfo = getTeamInfo(logo, teamName);
    setTeam(teamInfo);
  }, [logo, teamName]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(teamName);
      setInfo(data);
      setIsLoading((isLoading) => !isLoading);
    }
    fetchData();
  }, [getData, teamName]);

  console.log(showingPlayer);

  return (
    <TeamInformationWrapper>
      <TeamDescription selectPlayer={selectPlayer}>
        <TeamTitle team={team} />
        {isLoading ? <h1>Loading...</h1> : <TeamPlayers info={info} />}
      </TeamDescription>
      {selectPlayer ? (
        <PlayerDetail
          showingPlayer={showingPlayer}
          setSelectPlayer={setSelectPlayer}
        />
      ) : null}
    </TeamInformationWrapper>
  );
};

export default TeamInformation;
