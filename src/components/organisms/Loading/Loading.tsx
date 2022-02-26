import styled from "styled-components";

const Loading = () => {
  return <LoadingWrapper>Loading...</LoadingWrapper>;
};

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  animation: blinking 1s ease-in-out infinite;

  @keyframes blinking {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Loading;
