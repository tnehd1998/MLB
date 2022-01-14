import React, { useState, useEffect } from "react";
import TeamPlayers from "../TeamPlayers/TeamPlayers";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { playerSelection } from "../../atoms";
import TeamTitle from "../TeamTitle/TeamTitle";
import PlayerCard from "../PlayerCard/PlayerCard";
import Loading from "../Loading/Loading";

const TeamInformationWrapper = styled.div`
  padding-top: 12vh;
`;

const TeamDescription = styled.div`
  filter: blur(${(props) => (props.selectPlayer ? "4px" : "0")});
`;

const TeamInformation = ({ teamName, getData }) => {
  const [team, setTeam] = useState({});

  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectPlayer, setSelectPlayer] = useRecoilState(playerSelection);

  const getTeamInfo = (teamName) => {
    const logos = JSON.parse(window.localStorage.getItem("logos"));
    return logos.find((logo) => logo.Key === teamName);
  };

  useEffect(() => {
    const teamInfo = getTeamInfo(teamName);
    setTeam(teamInfo);
  }, [teamName]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(teamName);
      setInfo(data);
      setIsLoading((isLoading) => !isLoading);
    }
    fetchData();
  }, [getData, teamName]);

  useEffect(() => {
    return () => {
      setSelectPlayer(false);
    };
  }, [setSelectPlayer]);

  return (
    <TeamInformationWrapper>
      <TeamDescription selectPlayer={selectPlayer}>
        <TeamTitle team={team} />
        {isLoading ? <Loading /> : <TeamPlayers info={info} />}
      </TeamDescription>
      {selectPlayer ? <PlayerCard /> : null}
    </TeamInformationWrapper>
  );
};

export default TeamInformation;
