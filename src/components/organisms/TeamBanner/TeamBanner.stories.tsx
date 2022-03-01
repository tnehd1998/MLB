import { Story } from "@storybook/react";
import TeamBanner, { IProps } from ".";

export default {
  title: "organisms/TeamBanner",
  component: TeamBanner,
};

const Template: Story<IProps> = (args) => <TeamBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentTeam: {
    TeamID: 2,
    Key: "CIN",
    City: "Cincinnati",
    Name: "Reds",
    PrimaryColor: "C6011F",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Cincinnati_Reds_Logo.svg",
  },
  isLoading: false,
};
