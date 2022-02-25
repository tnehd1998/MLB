import { Story } from "@storybook/react";
import TeamTitle, { IProps } from ".";

export default {
  title: "atoms/TeamTitle",
  component: TeamTitle,
};

const Template: Story<IProps> = (args) => <TeamTitle {...args} />;

export const City = Template.bind({});
City.args = {
  content: "Los Angeles",
  size: 48,
  color: "005A9C",
};

export const Name = Template.bind({});
Name.args = {
  content: "Dodgers",
  size: 56,
  color: "005A9C",
};
