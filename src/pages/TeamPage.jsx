import React from "react";
import { useParams } from "react-router";
import { getCertainTeamData } from "../apis";
import TeamInfo from "../components/TeamInfo/TeamInfo";

const TeamPage = () => {
  const { teamName } = useParams();
  return <TeamInfo teamName={teamName} getData={getCertainTeamData} />;
};

export default TeamPage;
