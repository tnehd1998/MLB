import React, { useEffect, useState } from "react";
import { getTeamData } from "../../apis";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { teamLogo } from "../../atoms";

const IntroductionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
`;

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1vw;
`;

const TeamMenu = styled.div`
  width: 15vw;
  height: 15vw;
  border-radius: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => "#" + props.iconBgColor};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in;
    background-color: ${(props) => "#" + props.iconBgColor};
  }
`;

const TeamImage = styled.img`
  width: 10vw;
  height: 10vw;
`;

const Introduction = () => {
  const [info, setInfo] = useRecoilState(teamLogo);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getTeamData();
      setInfo(data);
      setLoading((loading) => !loading);
    }
    fetchData();
  }, []);

  console.log(info);

  return (
    <IntroductionContainer>
      {!loading ? (
        <div>Loading</div>
      ) : (
        <TeamContainer>
          {info.map((item) =>
            item.WikipediaLogoUrl ? (
              <Link key={item.TeamID} to={item.Key}>
                <TeamMenu iconBgColor={`${item.PrimaryColor}`}>
                  <TeamImage src={`${item.WikipediaLogoUrl}`} alt={item.City} />
                </TeamMenu>
              </Link>
            ) : (
              ""
            )
          )}
        </TeamContainer>
      )}
    </IntroductionContainer>
  );
};

export default Introduction;
