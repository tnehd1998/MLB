import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 20px;
  width: 24em;
  margin: 1em;
`;
