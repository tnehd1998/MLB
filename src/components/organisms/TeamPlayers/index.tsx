import TeamPositionPlayers from "../TeamPositionPlayers";
import Loading from "../../atoms/Loading";
import { Wrapper } from "./styles";
import { IPlayer } from "../../../types/player.type";

export interface IProps {
  players: IPlayer[] | null | undefined;
  isLoading: boolean;
}

const TeamPlayers = ({ players, isLoading }: IProps) => {
  return (
    <Wrapper>
      {isLoading && <Loading />}
      <TeamPositionPlayers
        players={players}
        positions={["SP"]}
        title="선발투수 (Starting Pitcher)"
      />
      <TeamPositionPlayers
        players={players}
        positions={["RP"]}
        title="불펜투수 (Relief Pitcher)"
      />
      <TeamPositionPlayers
        players={players}
        positions={["1B", "2B", "3B", "SS", "DH", "C"]}
        title="내야수 (Infielder)"
      />
      <TeamPositionPlayers
        players={players}
        positions={["LF", "CF", "RF"]}
        title="외야수 (Outfielder)"
      />
    </Wrapper>
  );
};

export default TeamPlayers;
