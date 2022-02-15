import React, { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";
import Title from "../components/atoms/Title";
import Loading from "../components/organisms/Loading/Loading";
import PostSeason from "../components/organisms/PostSeason/PostSeason";
import Standing from "../components/organisms/Standing/Standing";

const RecordPage = () => {
  return (
    <RecordPageWrapper>
      <HelmetProvider>
        <Helmet>
          <title>MLB | RECORD</title>
        </Helmet>
      </HelmetProvider>
      <Title content="2021 MLB POSTSEASON" />
      <PostSeason />
      <Title content="2021 TEAM STANDING" />
      <Suspense fallback={<Loading />}>
        <Standing />
      </Suspense>
    </RecordPageWrapper>
  );
};

const RecordPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
  text-align: center;
`;

export default RecordPage;
