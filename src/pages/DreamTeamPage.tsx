import { Helmet, HelmetProvider } from "react-helmet-async";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import BasicButton from "../components/atoms/Buttons/BasicButton";
import BasicTitle from "../components/atoms/Titles/BasicTitle";
import DreamBatter from "../components/organisms/DreamBatter";
import DreamPitcher from "../components/organisms/DreamPitcher/DreamPitcher";
import { dreamTeamInfoState } from "../store/dreamteam";

const DreamTeamPage = () => {
  const [dreamTeamPlayers, setDreamTeamPlayers] =
    useRecoilState(dreamTeamInfoState);

  const findCertainPositionBatter = (position: string) => {
    for (let dreamTeamPlayer in dreamTeamPlayers) {
      let currentPlayer = dreamTeamPlayers[dreamTeamPlayer];
      if (currentPlayer.Position === position) {
        return [currentPlayer];
      }
    }
    return [];
  };
  const onClickDeleteAll = () => {
    if (window.confirm("선택한 선수를 전부 삭제하시겠습니까?")) {
      setDreamTeamPlayers([]);
      alert("삭제되었습니다");
    }
  };

  return (
    <Wrapper>
      <HelmetProvider>
        <Helmet>
          <title>MLB | DREAM TEAM</title>
        </Helmet>
      </HelmetProvider>
      <BasicTitle content="내야수" />
      <PlayerWrapper>
        <DreamBatter
          position="C"
          findCertainPositionBatter={findCertainPositionBatter}
        />
        <DreamBatter
          position="1B"
          findCertainPositionBatter={findCertainPositionBatter}
        />
        <DreamBatter
          position="2B"
          findCertainPositionBatter={findCertainPositionBatter}
        />
        <DreamBatter
          position="3B"
          findCertainPositionBatter={findCertainPositionBatter}
        />
        <DreamBatter
          position="SS"
          findCertainPositionBatter={findCertainPositionBatter}
        />
      </PlayerWrapper>
      <BasicTitle content="외야수 / 지명타자" />
      <PlayerWrapper>
        <DreamBatter
          position="LF"
          findCertainPositionBatter={findCertainPositionBatter}
        />
        <DreamBatter
          position="CF"
          findCertainPositionBatter={findCertainPositionBatter}
        />
        <DreamBatter
          position="RF"
          findCertainPositionBatter={findCertainPositionBatter}
        />
        <DreamBatter
          position="DH"
          findCertainPositionBatter={findCertainPositionBatter}
        />
      </PlayerWrapper>
      <BasicTitle content="선발 투수" />
      <PlayerWrapper>
        <DreamPitcher position="SP" />
      </PlayerWrapper>
      <BasicTitle content="불펜 투수" />
      <PlayerWrapper>
        <DreamPitcher position="RP" />
      </PlayerWrapper>
      <BasicButton onClick={onClickDeleteAll} content="전체 삭제" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5vh;
`;

const PlayerWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1em 0;
`;

export default DreamTeamPage;
