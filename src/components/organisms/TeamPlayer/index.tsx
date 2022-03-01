import { IPlayer } from "../../../types/player.type";
import PlayerImage from "../../atoms/Images/PlayerImage";
import TeamPlayerInfo from "../../molecules/PlayerInfo/TeamPlayerInfo";
import { Wrapper } from "./styles";

export interface IProps {
  playerInfo: IPlayer;
}

const TeamPlayer = ({ playerInfo }: IProps) => {
  return (
    <Wrapper>
      <PlayerImage imageUrl={playerInfo.PhotoUrl} imageType="main" />
      <TeamPlayerInfo playerInfo={playerInfo} />
    </Wrapper>
  );
};

export default TeamPlayer;
