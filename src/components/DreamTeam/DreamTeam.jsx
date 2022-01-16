import React from "react";
import styled from "styled-components";

const DreamTeamContainer = styled.div`
  padding-top: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlayerTitle = styled.p`
  font-size: 16px;
  font-weight: 900;
`;

const PlayerList = styled.ul`
  display: flex;
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

const DreamTeam = () => {
  return (
    <DreamTeamContainer>
      <PlayerTitle>타자</PlayerTitle>
      <PlayerList>
        <Player>
          <PlayerInfo>
            <PlayerPosition>C</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>1B</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>2B</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>3B</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>SS</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
      </PlayerList>
      <PlayerList>
        <Player>
          <PlayerInfo>
            <PlayerPosition>LF</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>CF</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>RF</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>DH</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
      </PlayerList>
      <PlayerTitle>후보</PlayerTitle>
      <PlayerList>
        <Player>
          <PlayerInfo>
            <PlayerPosition>SUB</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>SUB</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>SUB</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>SUB</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>SUB</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>SUB</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
      </PlayerList>
      <PlayerTitle>선발 투수</PlayerTitle>
      <PlayerList>
        <Player>
          <PlayerInfo>
            <PlayerPosition>SP</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>SP</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>SP</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>SP</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>SP</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
      </PlayerList>
      <PlayerTitle>불펜 투수</PlayerTitle>
      <PlayerList>
        <Player>
          <PlayerInfo>
            <PlayerPosition>RP</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>RP</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>RP</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>RP</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>RP</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
        <Player>
          <PlayerInfo>
            <PlayerPosition>RP</PlayerPosition>
            <PlayerName>Fernando Tatis Jr.</PlayerName>
          </PlayerInfo>
          <PlayerImage
            src="https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10007217.png"
            alt=""
          />
        </Player>
      </PlayerList>
    </DreamTeamContainer>
  );
};

export default DreamTeam;
