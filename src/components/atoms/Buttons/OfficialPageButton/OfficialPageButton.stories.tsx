import { Story } from "@storybook/react";
import OfficialPageButton, { Props } from ".";

export default {
  title: "atoms/OfficialPageButton",
  component: OfficialPageButton,
};

const Template: Story<Props> = (args) => (
  <OfficialPageButton {...args}></OfficialPageButton>
);

export const Default = Template.bind({});
Default.args = {
  content: "공식 홈페이지로 이동",
};
