import { Story } from "@storybook/react";
import TopPlayerInfo, { IProps } from ".";

export default {
  title: "molecules/TopPlayerInfo",
  component: TopPlayerInfo,
};

const Template: Story<IProps> = (args) => <TopPlayerInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  ranking: 2,
  player: {
    SignedAge: 27,
    averageValue: "$30,416,667",
    name: "Mookie Betts",
    period: "2020-2032",
    playerImg: "https://d1dglpr230r57l.cloudfront.net/headshots/mlb/15744.jpg",
    position: "RF",
    team: "LAD",
    totalValue: "$365,000,000",
    years: 12,
  },
};
