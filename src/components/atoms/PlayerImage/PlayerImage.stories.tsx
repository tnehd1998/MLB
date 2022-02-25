import { Story } from "@storybook/react";
import PlayerImage, { IProps } from ".";

export default {
  title: "atoms/PlayerImage",
  component: PlayerImage,
};

const Template: Story<IProps> = (args) => <PlayerImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "https://d1dglpr230r57l.cloudfront.net/headshots/mlb/15744.jpg",
};
