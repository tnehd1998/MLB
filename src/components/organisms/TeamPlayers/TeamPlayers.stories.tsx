import { Story } from "@storybook/react";
import TeamPlayers, { IProps } from ".";

export default {
  title: "organisms/TeamPlayers",
  component: TeamPlayers,
};

const Template: Story<IProps> = (args) => <TeamPlayers {...args} />;

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
    {
      BatHand: "R",
      BirthCountry: "USA",
      BirthDate: "1987-03-09T00:00:00",
      FirstName: "Daniel",
      LastName: "Hudson",
      MLBAMID: 543339,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000014.png",
      PlayerID: 10000014,
      Position: "RP",
      ProDebut: "2009-09-04T00:00:00",
      ThrowHand: "R",
    },
    {
      BatHand: "L",
      BirthCountry: "USA",
      BirthDate: "1990-08-25T00:00:00",
      FirstName: "Max",
      LastName: "Muncy",
      MLBAMID: 571970,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10001955.png",
      PlayerID: 10001955,
      Position: "1B",
      ProDebut: "2015-04-25T00:00:00",
      ThrowHand: "R",
    },
    {
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
    },
  ],
  isLoading: false,
};
