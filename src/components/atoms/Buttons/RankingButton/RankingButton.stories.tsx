import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";
import RankingButton, { Props } from ".";

export default {
  title: "atoms/RankingButton",
  component: RankingButton,
};

const Template: Story<Props> = (args) => (
  <RankingButton {...args}></RankingButton>
);

export const Default = Template.bind({});
Default.args = {
  onClick: action("onClick"),
  content: "MLB 구단 연봉총액 순위 확인하기",
};
