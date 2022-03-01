import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";
import TeamSelection, { IProps } from ".";

export default {
  title: "organisms/TeamSelection",
  component: TeamSelection,
};

const Template: Story<IProps> = (args) => <TeamSelection {...args} />;

export const LoadedTeams = Template.bind({});
LoadedTeams.args = {
  teams: [
    {
      City: "Los Angeles",
      Key: "LAD",
      Name: "Dodgers",
      PrimaryColor: "005A9C",
      TeamID: 1,
      WikipediaLogoUrl:
        "https://logosarchive.com/wp-content/uploads/2021/12/Los-Angeles-Dodgers-logo.svg",
    },
    {
      City: "Cincinnati",
      Key: "CIN",
      Name: "Reds",
      PrimaryColor: "C6011F",
      TeamID: 2,
      WikipediaLogoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Cincinnati_Reds_Logo.svg",
    },
    {
      City: "Toronto",
      Key: "TOR",
      Name: "Blue Jays",
      PrimaryColor: "134A8E",
      TeamID: 3,
      WikipediaLogoUrl:
        "https://logosarchive.com/wp-content/uploads/2021/12/Toronto-Blue-Jays-logo.svg",
    },
    {
      City: "Pittsburgh",
      Key: "PIT",
      Name: "Pirates",
      PrimaryColor: "000000",
      TeamID: 4,
      WikipediaLogoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/81/Pittsburgh_Pirates_logo_2014.svg",
    },
  ],
  isLoading: false,
  onClickTeam: action("onClickTeam"),
};

export const LoadingTeams = Template.bind({});
LoadingTeams.args = {
  teams: [],
  isLoading: true,
  onClickTeam: action("onClickTeam"),
};
