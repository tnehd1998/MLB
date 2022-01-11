import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { currentX, currentY } from "../../atoms";

const ChosenPlayer = styled.div`
  width: 70vw;
  height: 70vh;
  top: ${(props) => props.top + "px"};
  left: ${(props) => props.left + "px"};
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  z-index: 20;
  border: 2px solid black;
`;

const CloseIcon = styled.p`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  border: 2px solid black;
  cursor: pointer;
  color: black;
  font-size: 30px;
  text-align: center;
  line-height: 40px;
  &:hover {
    transform: scale(1.1);
  }
`;

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80vw;
`;

const PlayerImage = styled.img`
  width: 160px;
  height: 180px;
  border-radius: 10%;
  border: 2px solid black;
`;

const PlayerInfoWrapper = styled.div``;

const PlayerInfo = styled.p`
  font-size: 36px;
`;

const PlayerProfileWrapper = styled.div`
  display: flex;
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

const PlayerCard = ({ showingPlayer, setSelectPlayer }) => {
  const scrollX = useRecoilValue(currentX);
  const scrollY = useRecoilValue(currentY);

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
    const teamInfo = getTeamInfo(showingPlayer.Team);
    setTeam(teamInfo);
  }, [showingPlayer.Team]);

  return (
    <ChosenPlayer top={scrollY} left={scrollX}>
      <CloseIcon
        onClick={() => setSelectPlayer((selectPlayer) => !selectPlayer)}
      >
        ✕
      </CloseIcon>
      <PlayerWrapper>
        <PlayerInfoWrapper>
          <PlayerProfileWrapper>
            <PlayerImage src={showingPlayer.PhotoUrl} />
            <PlayerInfoList>
              <PlayerInfo>이름 : {showingPlayer.DraftKingsName}</PlayerInfo>
              <PlayerInfo>
                출생년도 : {showingPlayer.BirthDate.slice(0, 10)}
              </PlayerInfo>
              <PlayerInfo>국적 : {showingPlayer.BirthCountry}</PlayerInfo>
              <PlayerInfo>
                데뷔일 : {showingPlayer.ProDebut.slice(0, 10)}
              </PlayerInfo>
              <PlayerInfo>포지션 : {showingPlayer.Position}</PlayerInfo>
            </PlayerInfoList>
          </PlayerProfileWrapper>
          <PlayerLinkWrapper>
            <PlayerTeamLink href={`/${showingPlayer.Team}`}>
              <PlayerTeamLogo src={team.WikipediaLogoUrl} alt="Team Logo" />
            </PlayerTeamLink>
            <PlayerPageLink
              href={`https://www.mlb.com/player/${convertNameForUrl(
                showingPlayer.FirstName.toLowerCase()
              )}-${convertNameForUrl(showingPlayer.LastName.toLowerCase())}-${
                showingPlayer.MLBAMID
              }`}
              rel="noreferrer"
              target="_blank"
            >
              🔎 선수 세부 기록
            </PlayerPageLink>
            <PlayerPageLink
              href={`https://www.youtube.com/results?search_query=${showingPlayer.FirstName.toLowerCase()}+${showingPlayer.LastName.toLowerCase()}+baseball`}
              rel="noreferrer"
              target="_blank"
              type="youtube"
            >
              ⚾️ 관련 동영상
            </PlayerPageLink>
            <PlayerPageLink
              href={`https://www.youtube.com/results?search_query=${showingPlayer.FirstName.toLowerCase()}+${showingPlayer.LastName.toLowerCase()}+baseball`}
              rel="noreferrer"
              target="_blank"
            >
              📌 좋아하는 선수 목록에 추가
            </PlayerPageLink>
          </PlayerLinkWrapper>
        </PlayerInfoWrapper>
      </PlayerWrapper>
    </ChosenPlayer>
  );
};

export default PlayerCard;
