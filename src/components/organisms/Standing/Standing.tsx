import { Link } from "react-router-dom";
import styled from "styled-components";
import { IStanding } from "../../../types/standing.type";
import Description from "../../atoms/Description";
import Loading from "../../atoms/Loading";

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
  return (
    <Wrapper>
      {isLoading && <Loading />}
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

const Wrapper = styled.div`
  width: 36em;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.textColor};
  margin-bottom: 10vh;

  @media (max-width: 768px) {
    width: 90vw;
  }

  @media (min-width: 1150px) {
    width: 50em;
  }
`;

const RegionsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.textColor};
`;

const RegionWrapper = styled.li`
  padding: 1em;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    transition: all 0.5s ease-in;
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
  }

  @media (max-width: 768px) {
    font-size: 8px;
  }

  @media (min-width: 1150px) {
    font-size: 22px;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-align: center;
  padding-top: 0.5em;
`;

const StandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1150px) {
    font-size: 19px;
  }
`;

const TeamWrapper = styled(Link)`
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  display: flex;
  padding: 1em 0;
  width: 100%;
  text-align: center;
  &:hover {
    transition: all 0.5s ease-in;
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
    border-radius: 18px;
  }
`;

const NameWrapper = styled.p`
  width: 40%;
`;

const RecordWrapper = styled.p`
  width: 20%;
`;

export default Standing;
