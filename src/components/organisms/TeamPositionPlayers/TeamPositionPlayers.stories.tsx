import { Story } from "@storybook/react";
import TeamPositionPlayers, { IProps } from ".";

export default {
  title: "organisms/TeamPositionPlayers",
  component: TeamPositionPlayers,
};

const Template: Story<IProps> = (args) => <TeamPositionPlayers {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: [
    {
      BatHand: "R",
      BirthCountry: "USA",
      BirthDate: "1994-07-28T00:00:00",
      FirstName: "Walker",
      LastName: "Buehler",
      MLBAMID: 621111,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10005607.png",
      PlayerID: 10005607,
      Position: "SP",
      ProDebut: "2017-09-07T00:00:00",
      ThrowHand: "R",
    },
  ],
  positions: ["SP"],
  title: "선발투수 (Starting Pitcher)",
};
