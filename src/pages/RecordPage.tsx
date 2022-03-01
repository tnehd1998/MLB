import { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";
import Loading from "../components/atoms/Loading";
import BasicTitle from "../components/atoms/Titles/BasicTitle";
import PostSeason from "../components/organisms/PostSeason";
import Standing from "../components/organisms/Standing/Standing";

const RecordPage = () => {
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
      <Suspense fallback={<Loading />}>
        <Standing />
      </Suspense>
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
