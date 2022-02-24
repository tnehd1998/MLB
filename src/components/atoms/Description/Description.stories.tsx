import { Story } from "@storybook/react";
import Description, { IProps } from ".";

export default {
  title: "atoms/Description",
  component: Description,
};

const Template: Story<IProps> = (args) => <Description {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "포지션 : SP",
  textSize: 18,
};
