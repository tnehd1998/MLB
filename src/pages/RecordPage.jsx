import React, { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";
import Loading from "../components/Loading/Loading";
import PostSeason from "../components/PostSeason/PostSeason";
import Standing from "../components/Standing/Standing";

const RecordPage = () => {
  return (
    <RecordPageWrapper>
      <HelmetProvider>
        <Helmet>
          <title>MLB | RECORD</title>
        </Helmet>
      </HelmetProvider>
      <Title>2021 MLB POSTSEASON</Title>
      <PostSeason />
      <Title>2021 TEAM STANDING</Title>
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

const Title = styled.p`
  font-size: 32px;
  margin: 20px 0px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1150px) {
    font-size: 40px;
  }
`;

export default RecordPage;
