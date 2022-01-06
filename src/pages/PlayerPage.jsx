import React from "react";
import { useParams } from "react-router";
import PlayerDetail from "../components/PlayerDetail/PlayerDetail";

const PlayerPage = () => {
  const { playerID } = useParams();

  return <PlayerDetail playerID={playerID} />;
};

export default PlayerPage;
