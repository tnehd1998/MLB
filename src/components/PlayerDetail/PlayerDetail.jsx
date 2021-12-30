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
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  z-index: 20;
  border: 2px solid black;
`;

const PlayerDetail = ({ showingPlayer, setSelectPlayer }) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const scrollX = useRecoilValue(currentX);
  const scrollY = useRecoilValue(currentY);

  useEffect(() => {
    async function getVideos() {
      const data = await getPlayerVideo(
        `${showingPlayer.FirstName} ${showingPlayer.LastName}`,
        4
      );
      setVideos(data);
      setIsLoading((isLoading) => !isLoading);
    }
    getVideos();
  }, [showingPlayer.FirstName, showingPlayer.LastName]);

  return (
    <ChosenPlayer top={scrollY} left={scrollX}>
      <h1>
        {showingPlayer.FirstName} {showingPlayer.LastName}
      </h1>
      <img src={showingPlayer.PhotoUrl} alt="" />
      <h1>Position {showingPlayer.Position}</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        videos.items.map((video, index) => (
          <iframe
            key={index}
            type="text/html"
            title={"Video"}
            src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        ))
      )}
      <button onClick={() => setSelectPlayer((selectPlayer) => !selectPlayer)}>
        X
      </button>
    </ChosenPlayer>
  );
};

export default PlayerDetail;
