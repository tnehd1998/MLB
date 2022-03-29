import { Wrapper } from "./styles";
import LoadingSpinner from "../../../assets/images/LoadingSpinner.svg";

const Loading = () => {
  return (
    <Wrapper>
      <img src={LoadingSpinner} alt="Loading Spinner" />
    </Wrapper>
  );
};

export default Loading;
