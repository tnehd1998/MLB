import styled from "styled-components";
import { IPlayer } from "../../../types/player.type";
import PlayerImage from "../../atoms/Images/PlayerImage";
import TeamPlayerInfo from "../../molecules/PlayerInfo/TeamPlayerInfo";

const TeamPlayer = ({ playerInfo }: { playerInfo: IPlayer }) => {
  return (
    <Wrapper>
      <PlayerImage imageUrl={playerInfo.PhotoUrl} imageType="main" />
      <TeamPlayerInfo playerInfo={playerInfo} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 10px;
  width: 24em;
  margin: 1em;
`;

export default TeamPlayer;
