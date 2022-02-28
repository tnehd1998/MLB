import { Story } from "@storybook/react";
import PayrollPlayerInfo, { IProps } from ".";

export default {
  title: "molecules/PayrollPlayerInfo",
  component: PayrollPlayerInfo,
};

const Template: Story<IProps> = (args) => <PayrollPlayerInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  team: {
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
};
