import { Suspense } from "react";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";

import TeamSelection from "../components/organisms/TeamSelection/TeamSelection";
import Loading from "../components/atoms/Loading";

const MainPage = () => {
  return (
    <Wrapper>
      <HelmetProvider>
        <Helmet>
          <title>MLB | TEAMS</title>
        </Helmet>
      </HelmetProvider>
      <Suspense fallback={<Loading />}>
        <TeamSelection />
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
`;

export default MainPage;
