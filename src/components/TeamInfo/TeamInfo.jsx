import React, { useState, useEffect } from "react";
import TeamPlayers from "../TeamPlayers/TeamPlayers";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { teamLogo } from "../../atoms";
import TeamTitle from "../TeamTitle/TeamTitle";

const TeamInfoContainer = styled.div`
  padding-top: 12vh;
`;

const TeamInfo = ({ teamName, getData }) => {
  const [team, setTeam] = useState({});

  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const logo = useRecoilValue(teamLogo);

  const getTeamInfo = (logo, teamName) => {
    return logo.find((value) => value.Key === teamName);
  };

  useEffect(() => {
    const teamInfo = getTeamInfo(logo, teamName);
    setTeam(teamInfo);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(teamName);
      setInfo(data);
      setLoading((loading) => !loading);
    }
    fetchData();
  }, [getData, teamName]);

  return (
    <TeamInfoContainer>
      <TeamTitle team={team} />
      {!loading ? <h1>Loading...</h1> : <TeamPlayers info={info} />}
    </TeamInfoContainer>
  );
};

export default TeamInfo;
