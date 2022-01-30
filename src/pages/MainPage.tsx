import React, { Suspense } from "react";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Loading from "../components/Loading/Loading";
import TeamSelection from "../components/TeamSelection/TeamSelection";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <HelmetProvider>
        <Helmet>
          <title>MLB | TEAMS</title>
        </Helmet>
      </HelmetProvider>
      <Suspense fallback={<Loading />}>
        <TeamSelection />
      </Suspense>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
`;

export default MainPage;
