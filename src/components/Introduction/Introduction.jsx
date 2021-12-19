import React, { useEffect, useState } from "react";
import { getTeamData } from "../../apis";

const Introduction = () => {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getTeamData();
      setInfo(data);
      setLoading((loading) => !loading);
    }
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={() => console.log(info)}>Check</button>
      {!loading ? <div>Loading</div> : <div>Data Loaded</div>}
    </div>
  );
};

export default Introduction;
