import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import { getCertainPlayerData } from "../../apis";

const PlayerDetailWrapper = styled.div`
  padding-top: 20vh;
`;

const PlayerDetail = ({ playerID }) => {
  const [playerInfo, setPlayerInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCertainPlayerData(playerID);
      setPlayerInfo(data);
    }
    fetchData();
  }, [getCertainPlayerData]);

  console.log(playerInfo);

  return <PlayerDetailWrapper>PlayerDetail</PlayerDetailWrapper>;
};

export default PlayerDetail;
