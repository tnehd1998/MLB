import React, { useEffect, useState } from "react";

const AllStarInfo = ({ getData }) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setInfo(data);
      setLoading((loading) => !loading);
    }
    fetchData();
  }, []);
  console.log(info);
  return (
    <div>
      {!loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Ranking / Player Name / Position / Team</h1>
          {info.map((player, index) => (
            <h1 key={player.StatID}>
              Rank {index + 1} : {player.Name} {player.Position} {player.Team}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllStarInfo;
