import TeamPositionPlayers from "../TeamPositionPlayers/TeamPositionPlayers";
import Loading from "../../atoms/Loading";
import { Wrapper } from "./styles";
import { IPlayer } from "../../../types/player.type";

export interface IProps {
  players: IPlayer[] | null | undefined;
  isLoading: boolean;
}

const TeamPlayers = ({ players, isLoading }: IProps) => {
  console.log(players);

  return (
    <Wrapper>
      {isLoading && <Loading />}
      <TeamPositionPlayers
        info={players}
        positions={["SP"]}
        title="선발투수 (Starting Pitcher)"
      />
      <TeamPositionPlayers
        info={players}
        positions={["RP"]}
        title="불펜투수 (Relief Pitcher)"
      />
      <TeamPositionPlayers
        info={players}
        positions={["1B", "2B", "3B", "SS", "DH", "C"]}
        title="내야수 (Infielder)"
      />
      <TeamPositionPlayers
        info={players}
        positions={["LF", "CF", "RF"]}
        title="외야수 (Outfielder)"
      />
    </Wrapper>
  );
};

export default TeamPlayers;
