import React, { useState, useEffect } from "react";
import TeamPlayers from "../TeamPlayers/TeamPlayers";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentPlayer,
  currentX,
  currentY,
  playerSelection,
  teamLogo,
} from "../../atoms";
import TeamTitle from "../TeamTitle/TeamTitle";

const TeamInformationWrapper = styled.div``;

const TeamDescription = styled.div`
  padding-top: 12vh;
  filter: blur(${(props) => (props.selectPlayer ? "4px" : "0")});
`;

const ChosenPlayer = styled.div`
  width: 70vw;
  height: 70vh;
  top: ${(props) => props.top + "px"};
  left: ${(props) => props.left + "px"};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  z-index: 20;
  border: 2px solid black;
`;

const TeamInformation = ({ teamName, getData }) => {
  const [team, setTeam] = useState({});

  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const logo = useRecoilValue(teamLogo);
  const scrollX = useRecoilValue(currentX);
  const scrollY = useRecoilValue(currentY);
  const [selectPlayer, setSelectPlayer] = useRecoilState(playerSelection);
  const showingPlayer = useRecoilValue(currentPlayer);

  const getTeamInfo = (logo, teamName) => {
    return logo.find((value) => value.Key === teamName);
  };

  useEffect(() => {
    const teamInfo = getTeamInfo(logo, teamName);
    setTeam(teamInfo);
  }, [logo, teamName]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(teamName);
      setInfo(data);
      setIsLoading((isLoading) => !isLoading);
    }
    fetchData();
  }, [getData, teamName]);

  return (
    <TeamInformationWrapper>
      <TeamDescription selectPlayer={selectPlayer}>
        <TeamTitle team={team} />
        {isLoading ? <h1>Loading...</h1> : <TeamPlayers info={info} />}
      </TeamDescription>
      {selectPlayer ? (
        <ChosenPlayer top={scrollY} left={scrollX}>
          <h1>
            {showingPlayer.FirstName} {showingPlayer.LastName}
          </h1>
          <button
            onClick={() => setSelectPlayer((selectPlayer) => !selectPlayer)}
          >
            취소
          </button>
        </ChosenPlayer>
      ) : null}
    </TeamInformationWrapper>
  );
};

export default TeamInformation;
