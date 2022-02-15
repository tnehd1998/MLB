import React from "react";
import DarkModeToggleButton, { IProps } from ".";
import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";

export default {
  title: "molecules/DarkModeToggleButton",
  component: DarkModeToggleButton,
};

const Template: Story<IProps> = (args) => (
  <DarkModeToggleButton {...args}></DarkModeToggleButton>
);

export const LightTheme = Template.bind({});
LightTheme.args = {
  isLightTheme: true,
  toggleTheme: action("toggleTheme"),
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  isLightTheme: false,
  toggleTheme: action("toggleTheme"),
};
