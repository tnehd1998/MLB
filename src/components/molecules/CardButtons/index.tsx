import styled from "styled-components";
import {
  alphabetAccents,
  IAlphabetAccents,
} from "../../../constants/alphabetAccents";
import { IPlayer } from "../../../types/player.type";
import BasicButton from "../../atoms/Buttons/BasicButton";

export interface IProps {
  showingPlayer: IPlayer;
  isDreamTeamPlayer: boolean;
  addPlayerToDreamTeam: () => void;
}

const CardButtons = ({
  showingPlayer,
  isDreamTeamPlayer,
  addPlayerToDreamTeam,
}: IProps) => {
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

  return (
    <Wrapper>
      <a
        href={`https://www.mlb.com/player/${convertNameForUrl(
          showingPlayer.FirstName.toLowerCase()
        )}-${convertNameForUrl(showingPlayer.LastName.toLowerCase())}-${
          showingPlayer.MLBAMID
        }`}
        rel="noreferrer"
        target="_blank"
      >
        <BasicButton content="π μ μ μΈλΆ κΈ°λ‘" />
      </a>
      <a
        href={`https://www.youtube.com/results?search_query=${showingPlayer.FirstName.toLowerCase()}+${showingPlayer.LastName.toLowerCase()}+baseball`}
        rel="noreferrer"
        target="_blank"
      >
        <BasicButton content="βΎοΈ κ΄λ ¨ λμμ" />
      </a>
      {!isDreamTeamPlayer && (
        <div onClick={addPlayerToDreamTeam}>
          <BasicButton content="π λλ¦Όν μ μλ‘ μ§μ " />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1em 0;
  gap: 10px;
`;

export default CardButtons;
