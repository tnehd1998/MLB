import styled from "styled-components";

export const Button = styled.div<{ iconBgColor: string }>`
  width: 15vw;
  height: 15vw;
  border-radius: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.textColor};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in;
    background-color: ${(props) => "#" + props.iconBgColor};
  }

  @media (max-width: 768px) {
    width: 28vw;
    height: 28vw;
  }
`;

export const Logo = styled.img`
  width: 10vw;
  height: 10vw;

  @media (max-width: 768px) {
    width: 20vw;
    height: 20vw;
  }
`;
