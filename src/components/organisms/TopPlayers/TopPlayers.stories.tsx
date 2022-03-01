import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";
import TopPlayers, { IProps } from ".";

export default {
  title: "organisms/TopPlayers",
  component: TopPlayers,
};

const Template: Story<IProps> = (args) => <TopPlayers {...args} />;

export const LoadedData = Template.bind({});
LoadedData.args = {
  players: [
    {
      SignedAge: 27,
      averageValue: "$35,541,667",
      name: "Mike Trout",
      period: "2019-2030",
      playerImg: "https://d1dglpr230r57l.cloudfront.net/headshots/mlb/8553.jpg",
      position: "CF",
      ranking: 1,
      team: "LAA",
      totalValue: "$426,500,000",
      years: 12,
    },
    {
      SignedAge: 27,
      averageValue: "$30,416,667",
      name: "Mookie Betts",
      period: "2020-2032",
      playerImg:
        "https://d1dglpr230r57l.cloudfront.net/headshots/mlb/15744.jpg",
      position: "RF",
      ranking: 2,
      team: "LAD",
      totalValue: "$365,000,000",
      years: 12,
    },
  ],
  isLoading: false,
  onClickPlayer: action("onClickPlayer"),
};

export const LoadingData = Template.bind({});
LoadingData.args = {
  players: [],
  isLoading: true,
  onClickPlayer: action("onClickPlayer"),
};
