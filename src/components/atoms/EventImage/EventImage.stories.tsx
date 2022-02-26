import { Story } from "@storybook/react";
import EventImage, { IProps } from ".";

export default {
  title: "atoms/EventImage",
  component: EventImage,
};

const Template: Story<IProps> = (args) => <EventImage {...args} />;

export const PostSeason = Template.bind({});
PostSeason.args = {
  imageUrl:
    "http://localhost:3000/MLB/static/media/postseason.6a885bd76959f24b5cfc.jpeg",
};
