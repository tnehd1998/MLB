import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { dreamTeamInfoState } from "../../../store/dreamteam";
import {
  currentPlayerState,
  playerSelectionState,
} from "../../../store/player";
import CloseButton from "../../atoms/Buttons/CloseButton";
import PlayerImage from "../../atoms/Images/PlayerImage";
import BasicTitle from "../../atoms/Titles/BasicTitle";
import CardPlayerInfo from "../../molecules/PlayerInfo/CardPlayerInfo";
import CardButtons from "../../molecules/CardButtons";

const PlayerCard = () => {
  const showingPlayer = useRecoilValue(currentPlayerState);
  const setSelectPlayer = useSetRecoilState(playerSelectionState);
  const [dreamTeam, setDreamTeam] = useRecoilState(dreamTeamInfoState);
  const [isDreamTeamPlayer, setIsDreamTeamPlayer] = useState(false);

  console.log(showingPlayer);

  const checkIsDreamTeamPlayer = useCallback(() => {
    const existingPlayer = dreamTeam.find(
      (player) => player.PlayerID === showingPlayer.PlayerID
    );
    if (existingPlayer) return true;
    return false;
  }, [showingPlayer.PlayerID, dreamTeam]);

  const addPitcherToDreamTeam = () => {
    let samePositionPlayers = dreamTeam.filter(
      (player) => player.Position === showingPlayer.Position
    );
    const existingPlayers = dreamTeam.filter(
      (player) => player.Position !== showingPlayer.Position
    );
    switch (showingPlayer.Position) {
      case "SP":
        if (samePositionPlayers.length === 5) {
          let deletedPlayer = samePositionPlayers.shift();
          deletedPlayer &&
            alert(
              `${showingPlayer.Position}포지션 선수 ${deletedPlayer.FirstName} ${deletedPlayer.LastName}가 제거되고 ${showingPlayer.FirstName} ${showingPlayer.LastName}가 추가되었습니다.`
            );
        } else {
          alert(
            `${showingPlayer.FirstName} ${showingPlayer.LastName}가 ${showingPlayer.Position}에 추가되었습니다.`
          );
        }
        samePositionPlayers.push(showingPlayer);
        break;
      case "RP":
        if (samePositionPlayers.length === 6) {
          let deletedPlayer = samePositionPlayers.shift();
          deletedPlayer &&
            alert(
              `${showingPlayer.Position}포지션 선수 ${deletedPlayer.FirstName} ${deletedPlayer.LastName}가 제거되고 ${showingPlayer.FirstName} ${showingPlayer.LastName}가 추가되었습니다.`
            );
        } else {
          alert(
            `${showingPlayer.FirstName} ${showingPlayer.LastName}가 ${showingPlayer.Position}에 추가되었습니다.`
          );
        }
        samePositionPlayers.push(showingPlayer);
        break;
      default:
        break;
    }

    setDreamTeam([...existingPlayers, ...samePositionPlayers]);
  };

  const addBatterToDreamTeam = () => {
    const samePositionPlayer = dreamTeam.find(
      (player) => player.Position === showingPlayer.Position
    );
    const existingPlayers = dreamTeam.filter(
      (player) => player.Position !== showingPlayer.Position
    );
    if (samePositionPlayer) {
      alert(
        `${showingPlayer.Position}포지션 선수가 ${samePositionPlayer.FirstName} ${samePositionPlayer.LastName}에서 ${showingPlayer.FirstName} ${showingPlayer.LastName}로 변경되었습니다.`
      );
    } else {
      alert(
        `${showingPlayer.FirstName} ${showingPlayer.LastName}가 ${showingPlayer.Position}에 추가되었습니다.`
      );
    }

    setDreamTeam([...existingPlayers, showingPlayer]);
  };

  const addPlayerToDreamTeam = () => {
    return showingPlayer.Position === "SP" || showingPlayer.Position === "RP"
      ? addPitcherToDreamTeam()
      : addBatterToDreamTeam();
  };

  useEffect(() => {
    const checkPlayer = checkIsDreamTeamPlayer();
    setIsDreamTeamPlayer(checkPlayer);
  }, [checkIsDreamTeamPlayer]);

  const onClickCloseButton = () => {
    setSelectPlayer((selectPlayer) => !selectPlayer);
  };

  return (
    <Wrapper>
      <CloseButton onClick={() => onClickCloseButton()} />
      <BasicTitle content="☆ 선수 정보 ☆" />
      <InfoWrapper>
        <PlayerWrapper>
          <PlayerImage imageUrl={showingPlayer.PhotoUrl} imageType="card" />
          <CardPlayerInfo showingPlayer={showingPlayer} />
        </PlayerWrapper>
        <CardButtons
          showingPlayer={showingPlayer}
          isDreamTeamPlayer={isDreamTeamPlayer}
          addPlayerToDreamTeam={addPlayerToDreamTeam}
        />
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 22em;
  height: 30em;
  left: 30vw;
  top: 20vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 30px;
  z-index: 20;
  border: 2px solid ${({ theme }) => theme.textColor};

  @media (max-width: 768px) {
    left: 2vw;
  }

  @media (min-width: 1186px) {
    left: 40vw;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
`;

export default PlayerCard;
