import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { teamLogo } from "../atoms";

import { getTeamData } from "../apis";

import Loading from "../components/Loading/Loading";

const MainPage = () => {
  const [logos, setLogos] = useRecoilState(teamLogo);
  const [isLoading, setIsLoading] = useState(true);

  const loadLogo = () => {
    if (window.localStorage.getItem("logos").length) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getTeamData();
      setLogos(data);
      setIsLoading((isLoading) => !isLoading);
      window.localStorage.setItem("logos", JSON.stringify(data));
    }
    if (loadLogo) {
      fetchData();
    }
  }, [setLogos]);

  return (
    <MainPageWrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <TeamWrapper>
          {logos.map((item) =>
            item.WikipediaLogoUrl ? (
              <TeamLink key={item.TeamID} to={item.Key}>
                <Team iconBgColor={`${item.PrimaryColor}`}>
                  <TeamLogo src={`${item.WikipediaLogoUrl}`} alt={item.City} />
                </Team>
              </TeamLink>
            ) : null
          )}
        </TeamWrapper>
      )}
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
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

const TeamLogo = styled.img`
  width: 10vw;
  height: 10vw;
`;

export default MainPage;
