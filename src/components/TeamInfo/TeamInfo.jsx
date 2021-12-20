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
        <button onClick={() => console.log(info)}>Data</button>
      )}
    </div>
  );
};

export default TeamInfo;
