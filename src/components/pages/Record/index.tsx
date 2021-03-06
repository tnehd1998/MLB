import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useQuery } from "react-query";
import { getStanding } from "../../../api/standing";
import BasicTitle from "../../atoms/Titles/BasicTitle";
import PostSeason from "../../organisms/PostSeason";
import Standing from "../../organisms/Standing";
import { Wrapper } from "./styles";

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

export default RecordPage;
