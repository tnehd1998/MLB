import React from "react";
import { getAllStarPlayerData } from "../apis";
import AllStar from "../components/AllStar/AllStar";

const AllStarPage = () => {
  return <AllStar getData={getAllStarPlayerData} />;
};

export default AllStarPage;
