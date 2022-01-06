import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getPlayerVideo } from "../../apis";
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

const PlayerPageLinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2vh;
`;

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

const PlayerCard = ({ showingPlayer, setSelectPlayer }) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const scrollX = useRecoilValue(currentX);
  const scrollY = useRecoilValue(currentY);

  useEffect(() => {
    async function getVideos() {
      const data = await getPlayerVideo(
        `${showingPlayer.FirstName} ${showingPlayer.LastName} baseball`,
        4
      );
      setVideos(data);
      setIsLoading((isLoading) => !isLoading);
    }
    getVideos();
  }, [showingPlayer.FirstName, showingPlayer.LastName]);

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

  return (
    <ChosenPlayer top={scrollY} left={scrollX}>
      <CloseIcon
        onClick={() => setSelectPlayer((selectPlayer) => !selectPlayer)}
      >
        ✕
      </CloseIcon>
      <PlayerWrapper>
        <PlayerImage src={showingPlayer.PhotoUrl} alt="" />
        <PlayerInfoWrapper>
          <PlayerInfo>
            {showingPlayer.FirstName} {showingPlayer.LastName} (
            {showingPlayer.Position})
          </PlayerInfo>
          <PlayerPageLinkWrapper>
            <PlayerPageLink
              href={`https://www.mlb.com/player/${convertNameForUrl(
                showingPlayer.FirstName.toLowerCase()
              )}-${convertNameForUrl(showingPlayer.LastName.toLowerCase())}-${
                showingPlayer.MLBAMID
              }`}
              rel="noreferrer"
              target="_blank"
              type="record"
            >
              🔎 선수 기록
            </PlayerPageLink>
            <PlayerPageLink
              href={`https://www.youtube.com/results?search_query=${showingPlayer.FirstName.toLowerCase()}+${showingPlayer.LastName.toLowerCase()}+baseball`}
              rel="noreferrer"
              target="_blank"
              type="youtube"
            >
              🖥 더 많은 동영상
            </PlayerPageLink>
          </PlayerPageLinkWrapper>
        </PlayerInfoWrapper>
      </PlayerWrapper>
      <VideoTitle>선수 관련 영상</VideoTitle>
      {isLoading ? (
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
    </ChosenPlayer>
  );
};

export default PlayerCard;
