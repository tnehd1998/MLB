import { Story } from "@storybook/react";
import Loading from ".";

export default {
  title: "atoms/Loading",
  component: Loading,
};

const Template: Story = (args) => <Loading {...args} />;

export const Default = Template.bind({});
