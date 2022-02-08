import React from "react";
import ThemeButton, { IThemeButton } from "./ThemeButton";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";

export default {
  title: "Component/ThemeButton",
  component: ThemeButton,
};

const Template: Story<IThemeButton> = (args) => (
  <ThemeButton {...args}></ThemeButton>
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
