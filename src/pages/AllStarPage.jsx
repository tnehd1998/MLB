import React from "react";
import { getAllStarPlayerData } from "../apis";
import AllStarInfo from "../components/AllStarInfo/AllStarInfo";

const AllStarPage = () => {
  return <AllStarInfo getData={getAllStarPlayerData} />;
};

export default AllStarPage;
