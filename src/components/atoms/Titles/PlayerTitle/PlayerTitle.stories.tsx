import { Story } from "@storybook/react";
import PlayerTitle, { IProps } from ".";

export default {
  title: "atoms/PlayerTitle",
  component: PlayerTitle,
};

const Template: Story<IProps> = (args) => <PlayerTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Trevor Bauer",
};
