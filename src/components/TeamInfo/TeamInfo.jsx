import React, { useState, useEffect } from "react";
import TeamPlayers from "../TeamPlayers/TeamPlayers";
import styled from "styled-components";

const TeamInfoContainer = styled.div`
  padding-top: 12vh;
`;

const TeamInfo = ({ teamName, getData }) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

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
      {!loading ? <h1>Loading...</h1> : <TeamPlayers info={info} />}
    </TeamInfoContainer>
  );
};

export default TeamInfo;
