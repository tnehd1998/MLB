import React from "react";
import { Link } from "react-router-dom";
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

const PlayerPageLinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2vh;
`;

const PlayerPageLink = styled(Link)`
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

const VideoPageLink = styled.a`
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

const PlayerCard = ({ showingPlayer, setSelectPlayer }) => {
  const scrollX = useRecoilValue(currentX);
  const scrollY = useRecoilValue(currentY);

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
            <PlayerPageLink to={`/player/${showingPlayer.PlayerID}`}>
              🔎 자세한 선수 정보
            </PlayerPageLink>
            <VideoPageLink
              href={`https://www.youtube.com/results?search_query=${showingPlayer.FirstName.toLowerCase()}+${showingPlayer.LastName.toLowerCase()}+baseball`}
              rel="noreferrer"
              target="_blank"
              type="youtube"
            >
              🖥 더 많은 동영상
            </VideoPageLink>
          </PlayerPageLinkWrapper>
        </PlayerInfoWrapper>
      </PlayerWrapper>
    </ChosenPlayer>
  );
};

export default PlayerCard;
