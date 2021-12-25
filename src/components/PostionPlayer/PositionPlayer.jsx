import React from "react";
import Player from "../Player/Player";

const PositionPlayer = ({ info, position }) => {
  console.log(info);
  return (
    <div>
      {[...info].map((playerInfo) =>
        playerInfo.Status === "Active" && playerInfo.Position === position ? (
          <div>
            <Player key={playerInfo.PlayerID} playerInfo={playerInfo} />
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default PositionPlayer;
