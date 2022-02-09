import React from "react";
import DarkModeToggleButton, { IThemeButton } from ".";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";

export default {
  title: "Component/DarkModeToggleButton",
  component: DarkModeToggleButton,
};

const Template: Story<IThemeButton> = (args) => (
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
