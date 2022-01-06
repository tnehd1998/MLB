import React from "react";
import { useParams } from "react-router";

const PlayerPage = () => {
  const { playerID } = useParams();

  console.log(playerID);

  return <div>PlayerPage</div>;
};

export default PlayerPage;
