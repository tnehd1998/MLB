import { Story } from "@storybook/react";
import BasicTitle, { IProps } from ".";

export default {
  title: "atoms/BasicTitle",
  component: BasicTitle,
};

const Template: Story<IProps> = (args) => <BasicTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "선발투수 (Starting Pitcher)",
};
