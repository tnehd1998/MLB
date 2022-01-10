import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import { getCertainPlayerData } from "../../apis";

const PlayerDetailWrapper = styled.div`
  padding-top: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayerInformation = styled.div`
  width: 70vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid black;
  border-radius: 1em;
  margin: auto;
  text-align: center;
`;

const PlayerDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerProfileWrapper = styled.div`
  display: flex;
`;

const PlayerTitle = styled.p`
  font-size: 28px;
  margin: 0.5em 0;
`;

const PlayerImage = styled.img`
  width: 12em;
  height: 14em;
  border-radius: 10px;
  border: 2px solid black;
`;

const PlayerInfoList = styled.ul`
  display: flex;
  height: 7em;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1em 0;
  margin: auto;
  font-size: 24px;
`;

const PlayerInfo = styled.li``;

const PlayerLinkWrapper = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayerPageLink = styled.a`
  padding: 1em 0.5em;
  margin-left: 1em;
  font-size: 1em;
  border: 2px solid ${(props) => "#" + props.color};
  border-radius: 15px;
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.type === "youtube" ? "tomato" : "skyblue"};
  &:hover {
    background-color: ${(props) => "#" + props.color};
    transition: all 0.3s linear;
    color: white;
  }
`;

const PlayerTeamLink = styled.a`
  width: 2em;
  height: 2em;
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid black;
  border-radius: 15px;
  color: black;
  text-decoration: none;
`;

const PlayerTeamLogo = styled.img`
  width: 2em;
  height: 2em;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s linear;
  }
`;

const alphabetAccents = {
  à: "a",
  è: "e",
  ì: "i",
  ò: "o",
  ù: "u",
  á: "a",
  é: "e",
  í: "i",
  ó: "o",
  ú: "u",
  ý: "y",
  â: "a",
  ê: "e",
  î: "i",
  ô: "o",
  û: "u",
  ñ: "n",
  õ: "o",
  ã: "a",
  ä: "a",
  ë: "e",
  ï: "i",
  ö: "o",
  ü: "u",
  ÿ: "y",
};

const PlayerDetail = ({ playerID }) => {
  const [playerInfo, setPlayerInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [team, setTeam] = useState({});

  const convertNameForUrl = (inputName) => {
    let currentName = [...inputName];
    currentName.map((letter, index) => {
      for (let alphabetAccent in alphabetAccents) {
        if (letter === alphabetAccent) {
          return (currentName[index] = alphabetAccents[alphabetAccent]);
        }
        if (letter === " ") {
          return (currentName[index] = "-");
        }
        if (letter === ".") {
          if (index === currentName.length - 1) {
            return (currentName[index] = "");
          }
          return (currentName[index] = "-");
        }
      }
      return letter;
    });
    return currentName.join("");
  };

  const getTeamInfo = (teamName) => {
    const logos = JSON.parse(window.localStorage.getItem("logos"));
    return logos.find((logo) => logo.Key === teamName);
  };

  useEffect(() => {
    const teamInfo = getTeamInfo(playerInfo.Team);
    setTeam(teamInfo);
  }, [playerInfo.Team]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCertainPlayerData(playerID);
      setPlayerInfo(data);
      setIsLoading((loading) => !loading);
    }
    fetchData();
  }, [playerID]);

  console.log(playerInfo);

  return (
    <PlayerDetailWrapper>
      <PlayerInformation>
        {isLoading ? (
          "Loading..."
        ) : (
          <PlayerDescriptionWrapper>
            <PlayerTitle>선수 정보</PlayerTitle>
            <PlayerProfileWrapper>
              <PlayerImage src={playerInfo.PhotoUrl} />
              <PlayerInfoList>
                <PlayerInfo>이름 : {playerInfo.DraftKingsName}</PlayerInfo>
                <PlayerInfo>
                  출생년도 : {playerInfo.BirthDate.slice(0, 10)}
                </PlayerInfo>
                <PlayerInfo>국적 : {playerInfo.BirthCountry}</PlayerInfo>
                <PlayerInfo>
                  데뷔일 : {playerInfo.ProDebut.slice(0, 10)}
                </PlayerInfo>
                <PlayerInfo>포지션 : {playerInfo.Position}</PlayerInfo>
              </PlayerInfoList>
            </PlayerProfileWrapper>
            <PlayerLinkWrapper>
              <PlayerTeamLink href={`/${playerInfo.Team}`}>
                <PlayerTeamLogo src={team.WikipediaLogoUrl} alt="Team Logo" />
              </PlayerTeamLink>
              <PlayerPageLink
                href={`https://www.mlb.com/player/${convertNameForUrl(
                  playerInfo.FirstName.toLowerCase()
                )}-${convertNameForUrl(playerInfo.LastName.toLowerCase())}-${
                  playerInfo.MLBAMID
                }`}
                rel="noreferrer"
                target="_blank"
              >
                🔎 선수 세부 기록
              </PlayerPageLink>
              <PlayerPageLink
                href={`https://www.youtube.com/results?search_query=${playerInfo.FirstName.toLowerCase()}+${playerInfo.LastName.toLowerCase()}+baseball`}
                rel="noreferrer"
                target="_blank"
                type="youtube"
              >
                ⚾️ 관련 동영상
              </PlayerPageLink>
              <PlayerPageLink
                href={`https://www.youtube.com/results?search_query=${playerInfo.FirstName.toLowerCase()}+${playerInfo.LastName.toLowerCase()}+baseball`}
                rel="noreferrer"
                target="_blank"
              >
                📌 좋아하는 선수 목록에 추가
              </PlayerPageLink>
            </PlayerLinkWrapper>
          </PlayerDescriptionWrapper>
        )}
      </PlayerInformation>
    </PlayerDetailWrapper>
  );
};

export default PlayerDetail;
