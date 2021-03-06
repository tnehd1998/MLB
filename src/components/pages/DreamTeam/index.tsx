import { Helmet, HelmetProvider } from "react-helmet-async";
import { useRecoilState } from "recoil";
import BasicButton from "../../atoms/Buttons/BasicButton";
import BasicTitle from "../../atoms/Titles/BasicTitle";
import DreamBatter from "../../organisms/DreamBatter";
import DreamPitcher from "../../organisms/DreamPitcher";
import { dreamTeamInfoState } from "../../../store/dreamteam";
import { Wrapper, PlayerWrapper } from "./styles";

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

  const filterPitcherByPosition = (position: string) => {
    let result = [];
    for (let dreamTeamPlayer in dreamTeamPlayers) {
      let currentPlayer = dreamTeamPlayers[dreamTeamPlayer];
      if (currentPlayer.Position === position) {
        result.push(currentPlayer);
      }
    }
    return result;
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
        <DreamPitcher
          position="SP"
          filterPitcherByPosition={filterPitcherByPosition}
        />
      </PlayerWrapper>
      <BasicTitle content="불펜 투수" />
      <PlayerWrapper>
        <DreamPitcher
          position="RP"
          filterPitcherByPosition={filterPitcherByPosition}
        />
      </PlayerWrapper>
      <BasicButton onClick={onClickDeleteAll} content="전체 삭제" />
    </Wrapper>
  );
};

export default DreamTeamPage;
