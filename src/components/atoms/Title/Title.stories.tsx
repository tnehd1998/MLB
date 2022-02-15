import { Story } from "@storybook/react";
import Title, { IProps } from ".";

export default {
  title: "atoms/Title",
  component: Title,
};

const Template: Story<IProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "선발투수 (Starting Pitcher)",
};
