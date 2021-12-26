import React from "react";

const TeamTitle = ({ team }) => {
  return (
    <div>
      <img src={`${team.WikipediaLogoUrl}`} />
      <div>
        <h1>{team.City}</h1>
        <h1>{team.Name}</h1>
      </div>
    </div>
  );
};

export default TeamTitle;
