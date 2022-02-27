import { Story } from "@storybook/react";
import PlayerImage, { IProps } from ".";

export default {
  title: "atoms/PlayerImage",
  component: PlayerImage,
};

const Template: Story<IProps> = (args) => <PlayerImage {...args} />;

export const Main = Template.bind({});
Main.args = {
  imageUrl: "https://d1dglpr230r57l.cloudfront.net/headshots/mlb/15744.jpg",
  imageType: "main",
};

export const Card = Template.bind({});
Card.args = {
  imageUrl: "https://d1dglpr230r57l.cloudfront.net/headshots/mlb/15744.jpg",
  imageType: "card",
};
