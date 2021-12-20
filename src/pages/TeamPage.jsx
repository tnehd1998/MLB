import React from "react";
import { useParams } from "react-router";
import TeamInfo from "../components/TeamInfo/TeamInfo";

const TeamPage = () => {
  const { teamName } = useParams();
  return <TeamInfo teamName={teamName} />;
};

export default TeamPage;
