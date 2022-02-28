import { Story } from "@storybook/react";
import DreamPitcher, { IProps } from ".";

export default {
  title: "organisms/DreamPitcher",
  component: DreamPitcher,
};

const Template: Story<IProps> = (args) => <DreamPitcher {...args} />;

export const SelectedAllSP = Template.bind({});
SelectedAllSP.args = {
  position: "SP",
  filterPitcherByPosition: () => [
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
      BirthDate: "1996-11-18T00:00:00",
      FirstName: "Logan",
      LastName: "Webb",
      MLBAMID: 657277,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10006907.png",
      PlayerID: 10006907,
      Position: "SP",
      ProDebut: "2019-08-17T00:00:00",
      ThrowHand: "R",
    },
    {
      BatHand: "L",
      BirthCountry: "South Korea",
      BirthDate: "1987-03-25T00:00:00",
      FirstName: "Hyun Jin",
      LastName: "Ryu",
      MLBAMID: 547943,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000628.png",
      PlayerID: 10000628,
      Position: "SP",
      ProDebut: "2013-04-02T00:00:00",
      ThrowHand: "L",
    },
    {
      BatHand: "R",
      BirthCountry: "USA",
      BirthDate: "1990-09-08T00:00:00",
      FirstName: "Gerrit",
      LastName: "Cole",
      MLBAMID: 543037,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000970.png",
      PlayerID: 10000970,
      Position: "SP",
      ProDebut: "2013-06-11T00:00:00",
      ThrowHand: "R",
    },
    {
      BatHand: "L",
      BirthCountry: "USA",
      BirthDate: "1990-05-30T03:00:00",
      FirstName: "Zack",
      LastName: "Wheeler",
      MLBAMID: 554430,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000807.png",
      PlayerID: 10000807,
      Position: "SP",
      ProDebut: "2013-06-18T00:00:00",
      ThrowHand: "R",
    },
  ],
};

export const SelectedTwoSP = Template.bind({});
SelectedTwoSP.args = {
  position: "SP",
  filterPitcherByPosition: () => [
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
      BirthDate: "1996-11-18T00:00:00",
      FirstName: "Logan",
      LastName: "Webb",
      MLBAMID: 657277,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10006907.png",
      PlayerID: 10006907,
      Position: "SP",
      ProDebut: "2019-08-17T00:00:00",
      ThrowHand: "R",
    },
  ],
};

export const NotSelectedSP = Template.bind({});
NotSelectedSP.args = {
  position: "SP",
  filterPitcherByPosition: () => [],
};

export const SelectedAllRP = Template.bind({});
SelectedAllRP.args = {
  position: "RP",
  filterPitcherByPosition: () => [
    {
      BatHand: "R",
      BirthCountry: "Venezuela",
      BirthDate: "1998-08-26T00:00:00",
      FirstName: "Brusdar",
      LastName: "Graterol",
      MLBAMID: 660813,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10008622.png",
      PlayerID: 10008622,
      Position: "RP",
      ProDebut: "2019-09-01T00:00:00",
      ThrowHand: "R",
    },
    {
      BatHand: "R",
      BirthCountry: "Dominican Republic",
      BirthDate: "1997-07-04T00:00:00",
      FirstName: "Camilo",
      LastName: "Doval",
      MLBAMID: 666808,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10010033.png",
      PlayerID: 10010033,
      Position: "RP",
      ProDebut: "2021-04-18T00:00:00",
      ThrowHand: "R",
    },
    {
      BatHand: "R",
      BirthCountry: "USA",
      BirthDate: "1988-05-28T00:00:00",
      FirstName: "Craig",
      LastName: "Kimbrel",
      MLBAMID: 518886,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10000058.png",
      PlayerID: 10000058,
      Position: "RP",
      ProDebut: "2010-05-07T00:00:00",
      ThrowHand: "L",
    },
    {
      BatHand: "R",
      BirthCountry: "Australia",
      BirthDate: "1989-02-10T00:00:00",
      FirstName: "Liam",
      LastName: "Hendriks",
      MLBAMID: 521230,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10001292.png",
      PlayerID: 10001292,
      Position: "RP",
      ProDebut: "2011-09-06T00:00:00",
      ThrowHand: "R",
    },
    {
      BatHand: "L",
      BirthCountry: "USA",
      BirthDate: "1994-04-07T00:00:00",
      FirstName: "Josh",
      LastName: "Hader",
      MLBAMID: 623352,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10006039.png",
      PlayerID: 10006039,
      Position: "RP",
      ProDebut: "2017-06-10T00:00:00",
      ThrowHand: "L",
    },
    {
      BatHand: "R",
      BirthCountry: "USA",
      BirthDate: "1994-09-21T00:00:00",
      FirstName: "Devin",
      LastName: "Williams",
      MLBAMID: 642207,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10006929.png",
      PlayerID: 10006929,
      Position: "RP",
      ProDebut: "2019-08-07T00:00:00",
      ThrowHand: "R",
    },
  ],
};

export const SelectedTwoRP = Template.bind({});
SelectedTwoRP.args = {
  position: "RP",
  filterPitcherByPosition: () => [
    {
      BatHand: "R",
      BirthCountry: "Venezuela",
      BirthDate: "1998-08-26T00:00:00",
      FirstName: "Brusdar",
      LastName: "Graterol",
      MLBAMID: 660813,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10008622.png",
      PlayerID: 10008622,
      Position: "RP",
      ProDebut: "2019-09-01T00:00:00",
      ThrowHand: "R",
    },
    {
      BatHand: "R",
      BirthCountry: "Dominican Republic",
      BirthDate: "1997-07-04T00:00:00",
      FirstName: "Camilo",
      LastName: "Doval",
      MLBAMID: 666808,
      PhotoUrl:
        "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/10010033.png",
      PlayerID: 10010033,
      Position: "RP",
      ProDebut: "2021-04-18T00:00:00",
      ThrowHand: "R",
    },
  ],
};

export const NotSelectedRP = Template.bind({});
NotSelectedRP.args = {
  position: "RP",
  filterPitcherByPosition: () => [],
};
