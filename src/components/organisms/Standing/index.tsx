import { IStanding } from "../../../types/standing.type";
import Description from "../../atoms/Description";
import Loading from "../../atoms/Loading";
import {
  CategoryWrapper,
  NameWrapper,
  RecordWrapper,
  RegionsWrapper,
  RegionWrapper,
  StandingWrapper,
  TeamWrapper,
  Wrapper,
} from "./styles";

export interface IProps {
  standing: IStanding[] | null | undefined;
  isLoading: boolean;
  currentRegion: string;
  setCurrentRegion: (region: string) => void;
}

const Standing = ({
  standing,
  isLoading,
  currentRegion,
  setCurrentRegion,
}: IProps) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <RegionsWrapper>
        <RegionWrapper onClick={() => setCurrentRegion("AL East")}>
          <Description text="AL East" />
        </RegionWrapper>
        <RegionWrapper onClick={() => setCurrentRegion("AL Central")}>
          <Description text="AL Central" />
        </RegionWrapper>
        <RegionWrapper onClick={() => setCurrentRegion("AL West")}>
          <Description text="AL West" />
        </RegionWrapper>
        <RegionWrapper onClick={() => setCurrentRegion("NL East")}>
          <Description text="NL East" />
        </RegionWrapper>
        <RegionWrapper onClick={() => setCurrentRegion("NL Central")}>
          <Description text="NL Central" />
        </RegionWrapper>
        <RegionWrapper onClick={() => setCurrentRegion("NL West")}>
          <Description text="NL West" />
        </RegionWrapper>
      </RegionsWrapper>
      <CategoryWrapper>
        <NameWrapper>
          <Description text="Team" />
        </NameWrapper>
        <RecordWrapper>
          <Description text="Total" />
        </RecordWrapper>
        <RecordWrapper>
          <Description text="Wins" />
        </RecordWrapper>
        <RecordWrapper>
          <Description text="Losses" />
        </RecordWrapper>
      </CategoryWrapper>
      <StandingWrapper>
        {standing?.map(
          (team) =>
            team.League === currentRegion.split(" ")[0] &&
            team.Division === currentRegion.split(" ")[1] && (
              <TeamWrapper key={team.TeamID} to={`/${team.Key}`}>
                <NameWrapper>
                  <Description text={`${team.City} ${team.Name}`} />
                </NameWrapper>
                <RecordWrapper>
                  <Description text="162" />
                </RecordWrapper>
                <RecordWrapper>
                  <Description text={`${team.Wins}`} />
                </RecordWrapper>
                <RecordWrapper>
                  <Description text={`${team.Losses}`} />
                </RecordWrapper>
              </TeamWrapper>
            )
        )}
      </StandingWrapper>
    </Wrapper>
  );
};

export default Standing;
