import { Story } from "@storybook/react";
import CategoryButton, { IProps } from ".";

export default {
  title: "atoms/CategoryButton",
  component: CategoryButton,
};

const Template: Story<IProps> = (args) => (
  <CategoryButton {...args}></CategoryButton>
);

export const Default = Template.bind({});
Default.args = {
  title: "MLB TEAMS",
};
