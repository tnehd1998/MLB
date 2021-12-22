import React, { useState, useEffect } from "react";
import TeamPlayers from "../TeamPlayers/TeamPlayers";

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
  }, []);
  return (
    <div>{!loading ? <h1>Loading...</h1> : <TeamPlayers info={info} />}</div>
  );
};

export default TeamInfo;
