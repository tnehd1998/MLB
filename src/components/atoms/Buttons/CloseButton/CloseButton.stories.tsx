import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";
import CloseButton, { IProps } from ".";

export default {
  title: "atoms/CloseButton",
  component: CloseButton,
};

const Template: Story<IProps> = (args) => <CloseButton {...args}></CloseButton>;

export const Default = Template.bind({});
Default.args = {
  onClick: action("onClick"),
};
