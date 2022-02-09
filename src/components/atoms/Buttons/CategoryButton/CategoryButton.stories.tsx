import { Story } from "@storybook/react";
import CategoryButton, { Props } from ".";

export default {
  title: "atoms/CategoryButton",
  component: CategoryButton,
};

const Template: Story<Props> = (args) => (
  <CategoryButton {...args}></CategoryButton>
);

export const Default = Template.bind({});
Default.args = {
  title: "MLB TEAMS",
};
