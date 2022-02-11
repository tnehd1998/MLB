import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";
import BasicButton, { Props } from ".";

export default {
  title: "atoms/BasicButton",
  component: BasicButton,
};

const Template: Story<Props> = (args) => <BasicButton {...args}></BasicButton>;

export const OfficialPage = Template.bind({});
OfficialPage.args = {
  content: "→ 공식 홈페이지",
  color: "005A9C",
  onClick: action("onClick"),
};

export const PlayerInfo = Template.bind({});
PlayerInfo.args = {
  content: "🔎 선수 정보",
  onClick: action("onClick"),
};

export const PlayerRecord = Template.bind({});
PlayerRecord.args = {
  content: "🔎 선수 세부 기록",
  onClick: action("onClick"),
};

export const PlayerVideo = Template.bind({});
PlayerVideo.args = {
  content: "⚾️ 관련 동영상",
  onClick: action("onClick"),
};

export const PlayerSelect = Template.bind({});
PlayerSelect.args = {
  content: "📌 드림팀 선수로 지정",
  onClick: action("onClick"),
};

export const RankingButton = Template.bind({});
RankingButton.args = {
  content: "가장 많은 돈을 받는 선수 Top50 확인하기",
  onClick: action("onClick"),
};

export const DeleteAllButton = Template.bind({});
DeleteAllButton.args = {
  content: "전체 삭제",
  onClick: action("onClick"),
};
