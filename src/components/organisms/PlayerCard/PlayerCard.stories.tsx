import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";
import PlayerCard, { IProps } from ".";

export default {
  title: "organisms/PlayerCard",
  component: PlayerCard,
};

const Template: Story<IProps> = (args) => <PlayerCard {...args} />;

export const DreamTeamPlayer = Template.bind({});
DreamTeamPlayer.args = {
  showingPlayer: {
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
  onClickCloseButton: action("onClickCloseButton"),
  isDreamTeamPlayer: true,
  addPlayerToDreamTeam: action("addPlayerToDreamTeam"),
};

export const NotDreamTeamPlayer = Template.bind({});
NotDreamTeamPlayer.args = {
  showingPlayer: {
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
  onClickCloseButton: action("onClickCloseButton"),
  isDreamTeamPlayer: false,
  addPlayerToDreamTeam: action("addPlayerToDreamTeam"),
};
