import React, { useState, useEffect } from "react";
import TeamPlayers from "../TeamPlayers/TeamPlayers";
import styled from "styled-components";
import TeamTitle from "../TeamTitle/TeamTitle";

const TeamInformationWrapper = styled.div`
  padding-top: 12vh;
`;

const TeamInformation = ({ teamName, getData }) => {
  const [team, setTeam] = useState({});

  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <TeamInformationWrapper>
      <TeamTitle team={team} />
      {isLoading ? <h1>Loading...</h1> : <TeamPlayers info={info} />}
    </TeamInformationWrapper>
  );
};

export default TeamInformation;
