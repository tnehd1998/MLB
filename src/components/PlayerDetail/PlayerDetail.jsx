import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import { getCertainPlayerData } from "../../apis";

const PlayerDetailWrapper = styled.div`
  padding-top: 20vh;
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
  }, [getCertainPlayerData, playerID]);

  console.log(playerInfo);

  return (
    <PlayerDetailWrapper>
      {isLoading ? (
        "Loading..."
      ) : (
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
      )}
    </PlayerDetailWrapper>
  );
};

export default PlayerDetail;
