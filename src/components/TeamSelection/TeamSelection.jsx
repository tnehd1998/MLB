import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { teamLogo } from "../../atoms";

import { getTeamData } from "../../apis";

const TeamSelectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
`;

const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1vw;
`;

const TeamLink = styled(Link)``;

const Team = styled.div`
  width: 15vw;
  height: 15vw;
  border-radius: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => "#" + props.iconBgColor};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in;
    background-color: ${(props) => "#" + props.iconBgColor};
  }
`;

const TeamImage = styled.img`
  width: 10vw;
  height: 10vw;
`;

const TeamSelection = () => {
  const [logos, setLogos] = useRecoilState(teamLogo);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getTeamData();
      setLogos(data);
      setLoading((loading) => !loading);
    }
    fetchData();
  }, [setLogos]);

  return (
    <TeamSelectionWrapper>
      {!loading ? (
        <div>Loading</div>
      ) : (
        <TeamWrapper>
          {logos.map((item) =>
            item.WikipediaLogoUrl ? (
              <TeamLink key={item.TeamID} to={item.Key}>
                <Team iconBgColor={`${item.PrimaryColor}`}>
                  <TeamImage src={`${item.WikipediaLogoUrl}`} alt={item.City} />
                </Team>
              </TeamLink>
            ) : null
          )}
        </TeamWrapper>
      )}
    </TeamSelectionWrapper>
  );
};

export default TeamSelection;
