import { Story } from "@storybook/react";
import Logo, { IProps } from ".";

export default {
  title: "atoms/Logo",
  component: Logo,
};

const Template: Story<IProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl:
    "https://logosarchive.com/wp-content/uploads/2021/12/Los-Angeles-Dodgers-logo.svg",
};
