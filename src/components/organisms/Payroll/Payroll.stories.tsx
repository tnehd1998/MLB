import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";
import Payroll, { IProps } from ".";

export default {
  title: "organisms/Payroll",
  component: Payroll,
};

const Template: Story<IProps> = (args) => <Payroll {...args} />;

export const LoadedData = Template.bind({});
LoadedData.args = {
  teams: [
    {
      bestPlayer: "Jacob deGrom",
      key: "NYM",
      payroll: "$235,599,999",
      playerImageUrl:
        "https://d1dglpr230r57l.cloudfront.net/headshots/mlb/15662.jpg",
      position: "SP",
      rank: 1,
      team: "New York Mets",
      teamLogoUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/7b/New_York_Mets.svg",
    },
    {
      bestPlayer: "Mookie Betts",
      key: "LAD",
      payroll: "$214,458,333",
      playerImageUrl:
        "https://d1dglpr230r57l.cloudfront.net/headshots/mlb/15744.jpg",
      position: "RF",
      rank: 2,
      team: "Los Angeles Dodgers",
      teamLogoUrl:
        "https://logosarchive.com/wp-content/uploads/2021/12/Los-Angeles-Dodgers-logo.svg",
    },
    {
      bestPlayer: "Aaron Judge",
      key: "NYY",
      payroll: "$211,240,714",
      playerImageUrl:
        "https://d1dglpr230r57l.cloudfront.net/headshots/mlb/18499.jpg",
      position: "RF",
      rank: 3,
      team: "New York Yankees",
      teamLogoUrl:
        "https://upload.wikimedia.org/wikipedia/en/2/25/NewYorkYankees_PrimaryLogo.svg",
    },
    {
      bestPlayer: "Fernando Tatis Jr.",
      key: "SD",
      payroll: "$184,497,618",
      playerImageUrl:
        "https://d1dglpr230r57l.cloudfront.net/headshots/mlb/28791.jpg",
      position: "SS",
      rank: 4,
      team: "San Diego Padres",
      teamLogoUrl:
        "https://logodownload.org/wp-content/uploads/2020/10/san-diego-padres-logo-0.png",
    },
  ],
  isLoading: false,
  onClickTeam: action("onClickTeam"),
};

export const LoadingData = Template.bind({});
LoadingData.args = {
  teams: [],
  isLoading: true,
  onClickTeam: action("onClickTeam"),
};
