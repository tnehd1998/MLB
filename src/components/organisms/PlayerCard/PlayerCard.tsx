import { useState, useEffect, useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { dreamTeamInfoState } from "../../../store/dreamteam";
import {
  currentPlayerState,
  playerSelectionState,
} from "../../../store/player";
import BasicButton from "../../atoms/Buttons/BasicButton";
import CloseButton from "../../atoms/Buttons/CloseButton";
import Description from "../../atoms/Description";
import PlayerImage from "../../atoms/Images/PlayerImage";
import BasicTitle from "../../atoms/Titles/BasicTitle";

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

  const onClickCloseButton = () => {
    setSelectPlayer((selectPlayer) => !selectPlayer);
  };

  const getBirthDate = (birthDate: string) => {
    return birthDate.slice(0, 10);
  };

  const getDebutDate = (debutDate: string) => {
    return debutDate ? " " + debutDate.slice(0, 10) : " 아직 데뷔 전";
  };

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
    <Wrapper>
      <CloseButton onClick={() => onClickCloseButton()} />
      <BasicTitle content="☆ 선수 정보 ☆" />
      <InfoWrapper>
        <PlayerWrapper>
          <PlayerImage imageUrl={showingPlayer.PhotoUrl} imageType="card" />
          <DescriptionWrapper>
            <Description
              text={`이름 : ${showingPlayer.FirstName} ${showingPlayer.LastName}`}
            />
            <Description text={`국적 : ${showingPlayer.BirthCountry}`} />
            <Description
              text={`출생년도 : ${getBirthDate(showingPlayer.BirthDate)}`}
            />
            <Description text={`포지션 : ${showingPlayer.Position}`} />
            <Description text={`타격 위치 : ${showingPlayer.BatHand}`} />
            <Description text={`투구 방향 : ${showingPlayer.ThrowHand}`} />
            <Description
              text={` 데뷔일 : ${getDebutDate(showingPlayer.ProDebut)}`}
            />
          </DescriptionWrapper>
        </PlayerWrapper>
        <LinkWrapper>
          <PageLinkWrapper
            href={`https://www.mlb.com/player/${convertNameForUrl(
              showingPlayer.FirstName.toLowerCase()
            )}-${convertNameForUrl(showingPlayer.LastName.toLowerCase())}-${
              showingPlayer.MLBAMID
            }`}
            rel="noreferrer"
            target="_blank"
          >
            <BasicButton content="🔎 선수 세부 기록" />
          </PageLinkWrapper>
          <PageLinkWrapper
            href={`https://www.youtube.com/results?search_query=${showingPlayer.FirstName.toLowerCase()}+${showingPlayer.LastName.toLowerCase()}+baseball`}
            rel="noreferrer"
            target="_blank"
          >
            <BasicButton content="⚾️ 관련 동영상" />
          </PageLinkWrapper>
          {!isDreamTeamPlayer && (
            <AddButtonWrapper onClick={addPlayerToDreamTeam}>
              <BasicButton content="📌 드림팀 선수로 지정" />
            </AddButtonWrapper>
          )}
        </LinkWrapper>
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

const DescriptionWrapper = styled.ul`
  height: 100%;
  display: flex;
  margin-left: 1em;
  flex-direction: column;
  justify-content: space-between;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1em 0;
  gap: 10px;
`;

const PageLinkWrapper = styled.a``;

const AddButtonWrapper = styled.div``;

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
