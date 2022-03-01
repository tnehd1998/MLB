import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useRecoilState, useRecoilValue } from "recoil";
import TeamBanner from "../../organisms/TeamBanner";
import TeamPlayers from "../../organisms/TeamPlayers";
import PlayerCard from "../../organisms/PlayerCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  currentPlayerState,
  playerSelectionState,
} from "../../../store/player";
import { useQuery } from "react-query";
import { getTeams } from "../../../api/teams";
import { ITeams } from "../../../types/teams.type";
import { getCertainTeam } from "../../../api/team";
import { dreamTeamInfoState } from "../../../store/dreamteam";
import { TeamWrapper, Wrapper } from "./styles";

const TeamPage = () => {
  const { teamName } = useParams<{ teamName: string }>();
  const [selectPlayer, setSelectPlayer] = useRecoilState(playerSelectionState);
  const { data: teams, isLoading: isTeamLoading } = useQuery("teams", getTeams);
  const { data: players, isLoading: isPlayerLoading } = useQuery(
    `${teamName}`,
    () => getCertainTeam(teamName)
  );
  const [currentTeam, setCurrentTeam] = useState<ITeams>({
    City: "",
    Key: "",
    PrimaryColor: "",
    TeamID: 0,
    WikipediaLogoUrl: "",
    Name: "",
  });
  const showingPlayer = useRecoilValue(currentPlayerState);
  const [dreamTeam, setDreamTeam] = useRecoilState(dreamTeamInfoState);
  const [isDreamTeamPlayer, setIsDreamTeamPlayer] = useState(false);

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

  useEffect(() => {
    function getCurrentTeam() {
      if (teams) {
        const team = teams.find((team) => team.Key === teamName);
        if (team) {
          setCurrentTeam(team);
        }
      }
    }
    getCurrentTeam();
  }, [teamName, teams]);

  useEffect(() => {
    return () => {
      setSelectPlayer(false);
    };
  }, [setSelectPlayer]);

  return (
    <Wrapper>
      <HelmetProvider>
        <Helmet>
          <title>{`MLB | ${teamName}`}</title>
        </Helmet>
      </HelmetProvider>
      <TeamWrapper selectPlayer={selectPlayer}>
        <TeamBanner currentTeam={currentTeam} isLoading={isTeamLoading} />
        <TeamPlayers players={players} isLoading={isPlayerLoading} />
      </TeamWrapper>
      {selectPlayer && (
        <PlayerCard
          showingPlayer={showingPlayer}
          onClickCloseButton={onClickCloseButton}
          isDreamTeamPlayer={isDreamTeamPlayer}
          addPlayerToDreamTeam={addPlayerToDreamTeam}
        />
      )}
    </Wrapper>
  );
};

export default TeamPage;
