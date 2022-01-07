import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import { getCertainPlayerData, getPlayerVideo } from "../../apis";

const PlayerDetailWrapper = styled.div`
  padding-top: 20vh;
`;

const PlayerDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerProfileWrapper = styled.div`
  display: flex;
`;

const PlayerImage = styled.img`
  width: 16em;
  height: 20em;
  border-radius: 10px;
  border: 2px solid black;
`;

const PlayerInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 12em;
  padding: 1em 0;
  margin-left: 1em;
  font-size: 24px;
`;

const PlayerInfo = styled.li``;

const PlayerPageLink = styled.a`
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid ${(props) => "#" + props.color};
  border-radius: 15px;
  color: black;
  text-decoration: none;
  background-color: ${(props) =>
    props.type === "youtube" ? "tomato" : "skyblue"};
  &:hover {
    background-color: ${(props) => "#" + props.color};
    transition: all 0.3s linear;
    color: white;
  }
`;

const VideoDefault = styled.div`
  width: 280px;
  height: 160px;
  border-radius: 20px;
  border: 2px solid black;
  transition: all 0.5s ease-in;
  text-align: center;
  line-height: 160px;
`;

const VideosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
`;

const VideoTitle = styled.p`
  font-size: 24px;
  margin: 1em 0;
`;

const Video = styled.iframe`
  width: 280px;
  height: 160px;
  border-radius: 20px;
  border: 2px solid black;
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

  const [videos, setVideos] = useState([]);
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);

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

  useEffect(() => {
    async function fetchData() {
      const data = await getCertainPlayerData(playerID);
      setPlayerInfo(data);
      setIsLoading((loading) => !loading);
    }
    fetchData();
  }, [playerID]);

  useEffect(() => {
    async function getVideos() {
      const data = await getPlayerVideo(
        `${playerInfo.FirstName} ${playerInfo.LastName} baseball`,
        4
      );
      setVideos(data);
      setIsLoadingVideos(false);
    }
    getVideos();
  }, [playerInfo.FirstName, playerInfo.LastName]);

  return (
    <PlayerDetailWrapper>
      {isLoading ? (
        "Loading..."
      ) : (
        <PlayerDescriptionWrapper>
          <PlayerProfileWrapper>
            <PlayerImage src={playerInfo.PhotoUrl} />
            <PlayerInfoList>
              <PlayerInfo>이름 : {playerInfo.DraftKingsName}</PlayerInfo>
              <PlayerInfo>
                출생년도 : {playerInfo.BirthDate.slice(0, 10)}
              </PlayerInfo>
              <PlayerInfo>국적 : {playerInfo.BirthCountry}</PlayerInfo>
              <PlayerInfo>
                소속팀 : {playerInfo.Team}
                <PlayerPageLink href={`/${playerInfo.Team}`}>
                  {playerInfo.Team}
                </PlayerPageLink>
              </PlayerInfo>
              <PlayerInfo>
                데뷔일 : {playerInfo.ProDebut.slice(0, 10)}
              </PlayerInfo>
              <PlayerInfo>포지션 : {playerInfo.Position}</PlayerInfo>
            </PlayerInfoList>
          </PlayerProfileWrapper>
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
            🖥 더 많은 동영상
          </PlayerPageLink>
          <VideoTitle>선수 관련 영상</VideoTitle>
          {isLoadingVideos ? (
            <VideosWrapper>
              <VideoDefault>Loading...</VideoDefault>
              <VideoDefault>Loading...</VideoDefault>
              <VideoDefault>Loading...</VideoDefault>
              <VideoDefault>Loading...</VideoDefault>
            </VideosWrapper>
          ) : (
            <VideosWrapper>
              {videos.items.map((video, index) => (
                <Video
                  key={index}
                  type="text/html"
                  title={"Video"}
                  src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
                  frameBorder="0"
                  allowFullScreen
                ></Video>
              ))}
            </VideosWrapper>
          )}
        </PlayerDescriptionWrapper>
      )}
    </PlayerDetailWrapper>
  );
};

export default PlayerDetail;
