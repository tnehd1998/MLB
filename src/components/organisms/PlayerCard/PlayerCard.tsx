import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  currentPlayerState,
  playerSelectionState,
} from "../../../store/player";
import CloseButton from "../../atoms/Buttons/CloseButton";
import PlayerImage from "../../atoms/Images/PlayerImage";
import BasicTitle from "../../atoms/Titles/BasicTitle";
import CardPlayerInfo from "../../molecules/PlayerInfo/CardPlayerInfo";
import CardButtons from "../CardButtons";

const PlayerCard = () => {
  const showingPlayer = useRecoilValue(currentPlayerState);
  const setSelectPlayer = useSetRecoilState(playerSelectionState);

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
        <CardButtons />
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
