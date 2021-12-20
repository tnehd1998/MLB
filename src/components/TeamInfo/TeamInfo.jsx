import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getCertainTeamData } from "../../apis";

const TeamInfo = ({ teamName }) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getCertainTeamData(teamName);
      setInfo(data);
      setLoading((loading) => !loading);
    }
    fetchData();
  }, []);
  return (
    <div>
      {!loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {info.map((player) =>
            !player.PhotoUrl.includes("0.png") ? (
              <div>
                <img
                  src={player.PhotoUrl}
                  alt={`${player.FirstName} ${player.LastName}`}
                />
                <div>
                  <h3>{player.FirstName}</h3>
                  <h3>{player.LastName}</h3>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      )}
    </div>
  );
};

export default TeamInfo;
