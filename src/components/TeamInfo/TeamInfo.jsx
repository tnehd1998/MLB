import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Player from "../Player/Player";
import styled from "styled-components";
import Players from "../Players/Players";

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
  return <div>{!loading ? <h1>Loading...</h1> : <Players info={info} />}</div>;
};

export default TeamInfo;
