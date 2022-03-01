import { Story } from "@storybook/react";
import PostSeason from ".";

export default {
  title: "organisms/PostSeason",
  component: PostSeason,
};

const Template: Story = (args) => <PostSeason {...args} />;

export const Default = Template.bind({});
