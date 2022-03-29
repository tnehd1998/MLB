import { Story } from "@storybook/react";
import TeamPlayerInfo, { IProps } from ".";

export default {
  title: "molecules/TeamPlayerInfo",
  component: TeamPlayerInfo,
};

const Template: Story<IProps> = (args) => <TeamPlayerInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  playerInfo: {
    BatHand: "R",
    BirthCountry: "USA",
    BirthDate: "1992-10-07T00:00:00",
    FirstName: "Mookie",
    LastName: "Betts",
    MLBAMID: 605141,
    PhotoUrl:
      "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000176.png",
    PlayerID: 10000176,
    Position: "RF",
    ProDebut: "2014-06-29T00:00:00",
    ThrowHand: "R",
    Status: "Active",
  },
};
