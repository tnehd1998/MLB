import { useState, useEffect, useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { dreamTeamInfoState } from "../../../store/dreamteam";
import {
  currentPlayerState,
  playerSelectionState,
} from "../../../store/player";
import BasicButton from "../../atoms/Buttons/BasicButton";
import PlayerImage from "../../atoms/PlayerImage";

const PlayerCard = () => {
  const showingPlayer = useRecoilValue(currentPlayerState);
  const setSelectPlayer = useSetRecoilState(playerSelectionState);
  const [dreamTeam, setDreamTeam] = useRecoilState(dreamTeamInfoState);
  const [isDreamTeamPlayer, setIsDreamTeamPlayer] = useState(false);

  const checkIsDreamTeamPlayer = useCallback(() => {
    const existingPlayer = dreamTeam.find(
      (player) => player.PlayerID === showingPlayer.PlayerID
    );
    if (existingPlayer) return true;
    return false;
  }, [showingPlayer.PlayerID, dreamTeam]);

  const convertNameForUrl = (inputName: string) => {
    let currentName = [...inputName];
    currentName.map((letter, index) => {
      for (let alphabetAccent in alphabetAccents) {
        if (letter === alphabetAccent) {
          return (currentName[index] =
            alphabetAccents[alphabetAccent as keyof IAlphabetAccents]);
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

  return (
    <PlayerCardWrapper>
      <CloseIcon
        onClick={() => setSelectPlayer((selectPlayer) => !selectPlayer)}
      >
        ✕
      </CloseIcon>
      <PlayerCardTitle>☆ 선수 정보 ☆</PlayerCardTitle>
      <PlayerInfoWrapper>
        <PlayerProfileWrapper>
          <PlayerImage imageUrl={showingPlayer.PhotoUrl} imageType="card" />
          <PlayerInfoList>
            <PlayerInfo>
              이름 : {showingPlayer.FirstName} {showingPlayer.LastName}
            </PlayerInfo>
            <PlayerInfo>국적 : {showingPlayer.BirthCountry}</PlayerInfo>
            <PlayerInfo>
              출생년도 : {showingPlayer.BirthDate.slice(0, 10)}
            </PlayerInfo>
            <PlayerInfo>포지션 : {showingPlayer.Position}</PlayerInfo>
            <PlayerInfo>타격 위치 : {showingPlayer.BatHand}</PlayerInfo>
            <PlayerInfo>투구 방향 : {showingPlayer.ThrowHand}</PlayerInfo>
            <PlayerInfo>
              데뷔일 :
              {showingPlayer.ProDebut
                ? " " + showingPlayer.ProDebut.slice(0, 10)
                : " 아직 데뷔 전"}
            </PlayerInfo>
          </PlayerInfoList>
        </PlayerProfileWrapper>
        <PlayerLinkWrapper>
          <PlayerPageLink
            href={`https://www.mlb.com/player/${convertNameForUrl(
              showingPlayer.FirstName.toLowerCase()
            )}-${convertNameForUrl(showingPlayer.LastName.toLowerCase())}-${
              showingPlayer.MLBAMID
            }`}
            rel="noreferrer"
            target="_blank"
          >
            <BasicButton content="🔎 선수 세부 기록" />
          </PlayerPageLink>
          <PlayerPageLink
            href={`https://www.youtube.com/results?search_query=${showingPlayer.FirstName.toLowerCase()}+${showingPlayer.LastName.toLowerCase()}+baseball`}
            rel="noreferrer"
            target="_blank"
          >
            <BasicButton content="⚾️ 관련 동영상" />
          </PlayerPageLink>
          {!isDreamTeamPlayer && (
            <AddToDreamTeamButton onClick={addPlayerToDreamTeam}>
              <BasicButton content="📌 드림팀 선수로 지정" />
            </AddToDreamTeamButton>
          )}
        </PlayerLinkWrapper>
      </PlayerInfoWrapper>
    </PlayerCardWrapper>
  );
};

const PlayerCardWrapper = styled.div`
  width: 70vw;
  height: 70vh;
  top: 15vh;
  left: 15vw;
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
    width: 90vw;
    left: 5vw;
  }

  @media (min-width: 1150px) {
    width: 60vw;
    left: 20vw;
  }
`;

const CloseIcon = styled.p`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.textColor};
  cursor: pointer;
  font-size: 30px;
  text-align: center;
  line-height: 40px;
  &:hover {
    transform: scale(1.1);
  }
`;

const PlayerCardTitle = styled.p`
  font-size: 2.5em;
  margin-bottom: 1em;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (min-width: 1150px) {
    font-size: 3em;
  }
`;

const PlayerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
`;

const PlayerInfo = styled.p`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1150px) {
    font-size: 28px;
  }
`;

const PlayerProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
`;

const PlayerInfoList = styled.ul`
  height: 100%;
  display: flex;
  margin-left: 5vw;
  flex-direction: column;
  justify-content: space-between;
`;

const PlayerLinkWrapper = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const PlayerPageLink = styled.a``;

const AddToDreamTeamButton = styled.div``;

interface IAlphabetAccents {
  à: string;
  è: string;
  ì: string;
  ò: string;
  ù: string;
  á: string;
  é: string;
  í: string;
  ó: string;
  ú: string;
  ý: string;
  â: string;
  ê: string;
  î: string;
  ô: string;
  û: string;
  ñ: string;
  õ: string;
  ã: string;
  ä: string;
  ë: string;
  ï: string;
  ö: string;
  ü: string;
  ÿ: string;
}

const alphabetAccents: IAlphabetAccents = {
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

export default PlayerCard;
