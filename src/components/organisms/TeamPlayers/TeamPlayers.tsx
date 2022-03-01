import styled from "styled-components";
import TeamPositionPlayers from "../TeamPositionPlayers/TeamPositionPlayers";
import { ITeam } from "../../../types/team.type";
import Loading from "../../atoms/Loading";

export interface IProps {
  players: ITeam[] | null | undefined;
  isLoading: boolean;
}

const TeamPlayers = ({ players, isLoading }: IProps) => {
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default TeamPlayers;
