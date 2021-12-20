import React, { useEffect, useState } from "react";
import { getTeamData } from "../../apis";
import styled from "styled-components";

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const TeamMenu = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => "#" + props.iconBgColor};
  &:hover {
    transition: background-color 0.5s ease-in;
    background-color: ${(props) => "#" + props.iconBgColor};
  }
`;

const TeamImage = styled.img`
  width: 100px;
  height: 100px;

  &:hover {
    transition: transform 0.5s ease-in;
    transform: scale(1.2);
  }
`;

const Introduction = () => {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getTeamData();
      setInfo(data);
      setLoading((loading) => !loading);
    }
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={() => console.log(info)}>Check</button>
      {!loading ? (
        <div>Loading</div>
      ) : (
        <TeamContainer>
          {info.map((item) =>
            item.WikipediaLogoUrl ? (
              <TeamMenu key={item.Key} iconBgColor={`${item.PrimaryColor}`}>
                <TeamImage
                  key={item.TeamID}
                  src={`${item.WikipediaLogoUrl}`}
                  alt={item.City}
                />
              </TeamMenu>
            ) : (
              ""
            )
          )}
        </TeamContainer>
      )}
    </div>
  );
};

export default Introduction;
