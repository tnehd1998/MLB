import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { dreamTeamInfoState } from "../../../store/dreamteam";
import { IDreamPlayerProps } from "../../../types/player.type";
import Description from "../../atoms/Description";
import PlayerImage from "../../atoms/PlayerImage";

const DreamPitcher = ({ position }: IDreamPlayerProps) => {
  const dreamTeamPlayers = useRecoilValue(dreamTeamInfoState);

  const filterPitcherByPosition = () => {
    let result = [];
    for (let dreamTeamPlayer in dreamTeamPlayers) {
      let currentPlayer = dreamTeamPlayers[dreamTeamPlayer];
      if (currentPlayer.Position === position) {
        result.push(currentPlayer);
      }
    }
    return result;
  };

  const filterPitcher = () => {
    return position === "SP" ? 5 : 6;
  };

  return (
    <Wrapper>
      {filterPitcherByPosition().map((player) => (
        <PlayerWrapper key={player.PlayerID}>
          <DescriptionWrapper>
            <Description text={`${player.Position}`} />
            <Description text={`${player.FirstName} ${player.LastName}`} />
          </DescriptionWrapper>
          <PlayerImage imageUrl={player.PhotoUrl} imageType="card" />
        </PlayerWrapper>
      ))}
      {filterPitcherByPosition().length < filterPitcher() &&
        [...Array(filterPitcher() - filterPitcherByPosition().length)].map(
          (_, index) => (
            <PlayerWrapper key={index}>
              <Description text={`${position} 선택하지 않음`} />
            </PlayerWrapper>
          )
        )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const PlayerWrapper = styled.li`
  display: flex;
  width: 10.5em;
  height: 16em;
  margin: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 20px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 8px;
  margin-top: 1em;
`;

export default DreamPitcher;
