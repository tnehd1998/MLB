import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getStanding } from "../api/standing";
import BasicTitle from "../components/atoms/Titles/BasicTitle";
import PostSeason from "../components/organisms/PostSeason";
import Standing from "../components/organisms/Standing";

const RecordPage = () => {
  const [currentRegion, setCurrentRegion] = useState("AL East");
  const { data, isLoading } = useQuery("standing", getStanding);

  return (
    <Wrapper>
      <HelmetProvider>
        <Helmet>
          <title>MLB | RECORD</title>
        </Helmet>
      </HelmetProvider>
      <BasicTitle content="2021 MLB POSTSEASON" />
      <PostSeason />
      <BasicTitle content="2021 TEAM STANDING" />
      <Standing
        standing={data}
        isLoading={isLoading}
        currentRegion={currentRegion}
        setCurrentRegion={setCurrentRegion}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
  text-align: center;
`;

export default RecordPage;
