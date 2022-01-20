import React, { Suspense } from "react";
import styled from "styled-components";

import Loading from "../components/Loading/Loading";
import TeamSelection from "../components/TeamSelection/TeamSelection";

const MainPage = () => {
  return (
    <MainPageWrapper>
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
