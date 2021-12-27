import React, { useState, useEffect } from "react";
import TeamPlayers from "../TeamPlayers/TeamPlayers";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentPlayer,
  currentX,
  currentY,
  selectPlayer,
  teamLogo,
} from "../../atoms";
import TeamTitle from "../TeamTitle/TeamTitle";

const TeamInfoContainer = styled.div`
  padding-top: 12vh;
  filter: blur(${(props) => (props.playerSelected ? "4px" : "0")});
`;

const PopUpInfo = styled.div`
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

const TeamInfo = ({ teamName, getData }) => {
  const [team, setTeam] = useState({});

  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const logo = useRecoilValue(teamLogo);
  const scrollX = useRecoilValue(currentX);
  const scrollY = useRecoilValue(currentY);
  const [playerSelected, setPlayerSelected] = useRecoilState(selectPlayer);
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
      setLoading((loading) => !loading);
    }
    fetchData();
  }, [getData, teamName]);

  return (
    <div>
      <TeamInfoContainer playerSelected={playerSelected}>
        <TeamTitle team={team} />
        {!loading ? <h1>Loading...</h1> : <TeamPlayers info={info} />}
      </TeamInfoContainer>
      {playerSelected ? (
        <PopUpInfo top={scrollY} left={scrollX}>
          <h1>
            {showingPlayer.FirstName} {showingPlayer.LastName}
          </h1>
          <button onClick={() => setPlayerSelected((value) => !value)}>
            취소
          </button>
        </PopUpInfo>
      ) : (
        ""
      )}
    </div>
  );
};

export default TeamInfo;
