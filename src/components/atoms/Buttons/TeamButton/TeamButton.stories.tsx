import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";
import TeamButton, { IProps } from ".";

export default {
  title: "atoms/TeamButton",
  component: TeamButton,
};

const Template: Story<IProps> = (args) => <TeamButton {...args}></TeamButton>;

export const Default = Template.bind({});
Default.args = {
  team: {
    TeamID: 2,
    Key: "CIN",
    City: "Cincinnati",
    Name: "Reds",
    PrimaryColor: "C6011F",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Cincinnati_Reds_Logo.svg",
  },
  onClick: action("onClick"),
};
