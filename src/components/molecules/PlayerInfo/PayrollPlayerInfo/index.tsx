import { IPayroll } from "../../../../types/payroll.type";
import Description from "../../../atoms/Description";
import PlayerImage from "../../../atoms/Images/PlayerImage";
import PlayerTitle from "../../../atoms/Titles/PlayerTitle";
import { Wrapper } from "./styles";

export interface IProps {
  team: IPayroll;
}

const PayrollPlayerInfo = ({ team }: IProps) => {
  return (
    <Wrapper>
      <PlayerTitle text={"대표 선수"} />
      <Description text={`${team.bestPlayer}`} />
      <Description text={`포지션 : ${team.position}`} />
      <PlayerImage imageUrl={team.playerImageUrl} imageType="card" />
    </Wrapper>
  );
};

export default PayrollPlayerInfo;
