import React from "react";
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
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  z-index: 20;
  border: 2px solid black;
`;

const PlayerDetail = ({ showingPlayer, setSelectPlayer }) => {
  const scrollX = useRecoilValue(currentX);
  const scrollY = useRecoilValue(currentY);

  return (
    <ChosenPlayer top={scrollY} left={scrollX}>
      <h1>
        {showingPlayer.FirstName} {showingPlayer.LastName}
      </h1>
      <img src={showingPlayer.PhotoUrl} alt="" />
      <h1>Position {showingPlayer.Position}</h1>
      <button onClick={() => setSelectPlayer((selectPlayer) => !selectPlayer)}>
        X
      </button>
    </ChosenPlayer>
  );
};

export default PlayerDetail;
