import React from "react";
import { useParams } from "react-router";
import { getCertainTeamData } from "../apis";
import TeamInformation from "../components/TeamInformation/TeamInformation";

const TeamPage = () => {
  const { teamName } = useParams();
  return <TeamInformation teamName={teamName} getData={getCertainTeamData} />;
};

export default TeamPage;
