import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { dreamTeamInfo } from "../../atoms";

const DreamTeamContainer = styled.div`
  padding-top: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlayerTitle = styled.p`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 0.5em;
`;

const PlayerList = styled.ul`
  display: flex;
  margin: 0.5em 0;
`;

const Player = styled.li`
  width: 13vw;
  height: 13vw;
  padding: 0.2em;
  margin: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid black;
  border-radius: 2em;
  background-color: white;
`;

const PlayerImage = styled.img`
  width: 8vw;
  height: 10vw;
`;

const PlayerInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 8px;
  margin-top: 1em;
`;

const PlayerPosition = styled.p`
  font-size: 12px;
  font-weight: 800;
`;

const PlayerName = styled.p`
  font-size: 10px;
  font-weight: 400;
`;

const DeleteAllButton = styled.button`
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid black;
  background-color: white;
  border-radius: 15px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: black;
    transition: all 0.3s linear;
    color: white;
  }
`;

const DreamTeam = () => {
  const [dreamTeamPlayers, setDreamTeamPlayers] = useRecoilState(dreamTeamInfo);

  const findCertainPositionBatter = (position) => {
    for (let dreamTeamPlayer in dreamTeamPlayers) {
      let currentPlayer = dreamTeamPlayers[dreamTeamPlayer];
      if (currentPlayer.Position === position) {
        return [currentPlayer];
      }
    }
    return [];
  };

  const filterPitcherByPosition = (position) => {
    let result = [];
    for (let dreamTeamPlayer in dreamTeamPlayers) {
      let currentPlayer = dreamTeamPlayers[dreamTeamPlayer];
      if (currentPlayer.Position === position) {
        result.push(currentPlayer);
      }
    }
    return result;
  };

  return (
    <DreamTeamContainer>
      <PlayerTitle>타자</PlayerTitle>
      <PlayerList>
        {findCertainPositionBatter("C").length ? (
          findCertainPositionBatter("C").map((player) => (
            <Player key={player.PlayerID}>
              <PlayerInfo>
                <PlayerPosition>{player.Position}</PlayerPosition>
                <PlayerName>
                  {player.FirstName} {player.LastName}
                </PlayerName>
              </PlayerInfo>
              <PlayerImage src={player.PhotoUrl} />
            </Player>
          ))
        ) : (
          <Player>
            <h1>선택한 선수 없음</h1>
          </Player>
        )}
        {findCertainPositionBatter("1B").length ? (
          findCertainPositionBatter("1B").map((player) => (
            <Player key={player.PlayerID}>
              <PlayerInfo>
                <PlayerPosition>{player.Position}</PlayerPosition>
                <PlayerName>
                  {player.FirstName} {player.LastName}
                </PlayerName>
              </PlayerInfo>
              <PlayerImage src={player.PhotoUrl} />
            </Player>
          ))
        ) : (
          <Player>
            <h1>선택한 선수 없음</h1>
          </Player>
        )}
        {findCertainPositionBatter("2B").length ? (
          findCertainPositionBatter("2B").map((player) => (
            <Player key={player.PlayerID}>
              <PlayerInfo>
                <PlayerPosition>{player.Position}</PlayerPosition>
                <PlayerName>
                  {player.FirstName} {player.LastName}
                </PlayerName>
              </PlayerInfo>
              <PlayerImage src={player.PhotoUrl} />
            </Player>
          ))
        ) : (
          <Player>
            <h1>선택한 선수 없음</h1>
          </Player>
        )}
        {findCertainPositionBatter("3B").length ? (
          findCertainPositionBatter("3B").map((player) => (
            <Player key={player.PlayerID}>
              <PlayerInfo>
                <PlayerPosition>{player.Position}</PlayerPosition>
                <PlayerName>
                  {player.FirstName} {player.LastName}
                </PlayerName>
              </PlayerInfo>
              <PlayerImage src={player.PhotoUrl} />
            </Player>
          ))
        ) : (
          <Player>
            <h1>선택한 선수 없음</h1>
          </Player>
        )}
        {findCertainPositionBatter("SS").length ? (
          findCertainPositionBatter("SS").map((player) => (
            <Player key={player.PlayerID}>
              <PlayerInfo>
                <PlayerPosition>{player.Position}</PlayerPosition>
                <PlayerName>
                  {player.FirstName} {player.LastName}
                </PlayerName>
              </PlayerInfo>
              <PlayerImage src={player.PhotoUrl} />
            </Player>
          ))
        ) : (
          <Player>
            <h1>선택한 선수 없음</h1>
          </Player>
        )}
      </PlayerList>
      <PlayerList>
        {findCertainPositionBatter("LF").length ? (
          findCertainPositionBatter("LF").map((player) => (
            <Player key={player.PlayerID}>
              <PlayerInfo>
                <PlayerPosition>{player.Position}</PlayerPosition>
                <PlayerName>
                  {player.FirstName} {player.LastName}
                </PlayerName>
              </PlayerInfo>
              <PlayerImage src={player.PhotoUrl} />
            </Player>
          ))
        ) : (
          <Player>
            <h1>선택한 선수 없음</h1>
          </Player>
        )}
        {findCertainPositionBatter("CF").length ? (
          findCertainPositionBatter("CF").map((player) => (
            <Player key={player.PlayerID}>
              <PlayerInfo>
                <PlayerPosition>{player.Position}</PlayerPosition>
                <PlayerName>
                  {player.FirstName} {player.LastName}
                </PlayerName>
              </PlayerInfo>
              <PlayerImage src={player.PhotoUrl} />
            </Player>
          ))
        ) : (
          <Player>
            <h1>선택한 선수 없음</h1>
          </Player>
        )}
        {findCertainPositionBatter("RF").length ? (
          findCertainPositionBatter("RF").map((player) => (
            <Player key={player.PlayerID}>
              <PlayerInfo>
                <PlayerPosition>{player.Position}</PlayerPosition>
                <PlayerName>
                  {player.FirstName} {player.LastName}
                </PlayerName>
              </PlayerInfo>
              <PlayerImage src={player.PhotoUrl} />
            </Player>
          ))
        ) : (
          <Player>
            <h1>선택한 선수 없음</h1>
          </Player>
        )}
        {findCertainPositionBatter("DH").length ? (
          findCertainPositionBatter("DH").map((player) => (
            <Player key={player.PlayerID}>
              <PlayerInfo>
                <PlayerPosition>{player.Position}</PlayerPosition>
                <PlayerName>
                  {player.FirstName} {player.LastName}
                </PlayerName>
              </PlayerInfo>
              <PlayerImage src={player.PhotoUrl} />
            </Player>
          ))
        ) : (
          <Player>
            <h1>선택한 선수 없음</h1>
          </Player>
        )}
      </PlayerList>
      <PlayerTitle>선발 투수</PlayerTitle>
      <PlayerList>
        {filterPitcherByPosition("SP").map((player) => (
          <Player key={player.PlayerID}>
            <PlayerInfo>
              <PlayerPosition>{player.Position}</PlayerPosition>
              <PlayerName>
                {player.FirstName} {player.LastName}
              </PlayerName>
            </PlayerInfo>
            <PlayerImage src={player.PhotoUrl} />
          </Player>
        ))}
        {filterPitcherByPosition("SP").length < 5
          ? [...Array(5 - filterPitcherByPosition("SP").length)].map(
              (_, index) => (
                <Player key={index}>
                  <h1>선택한 선수 없음</h1>
                </Player>
              )
            )
          : null}
      </PlayerList>
      <PlayerTitle>불펜 투수</PlayerTitle>
      <PlayerList>
        {filterPitcherByPosition("RP").map((player) => (
          <Player key={player.PlayerID}>
            <PlayerInfo>
              <PlayerPosition>{player.Position}</PlayerPosition>
              <PlayerName>
                {player.FirstName} {player.LastName}
              </PlayerName>
            </PlayerInfo>
            <PlayerImage src={player.PhotoUrl} />
          </Player>
        ))}
        {filterPitcherByPosition("RP").length < 6
          ? [...Array(6 - filterPitcherByPosition("RP").length)].map(
              (_, index) => (
                <Player key={index}>
                  <h1>선택한 선수 없음</h1>
                </Player>
              )
            )
          : null}
      </PlayerList>
      <DeleteAllButton onClick={() => setDreamTeamPlayers([])}>
        전체 삭제
      </DeleteAllButton>
    </DreamTeamContainer>
  );
};

export default DreamTeam;
