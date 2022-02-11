import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";
import BasicButton, { Props } from ".";

export default {
  title: "atoms/BasicButton",
  component: BasicButton,
};

const Template: Story<Props> = (args) => <BasicButton {...args}></BasicButton>;

export const Default = Template.bind({});
Default.args = {
  content: "→ 공식 홈페이지",
  color: "005A9C",
  onClick: action("onClick"),
};
