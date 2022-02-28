import { Story } from "@storybook/react";
import { HashRouter } from "react-router-dom";
import Header, { IProps } from ".";

export default {
  title: "organisms/Header",
  component: Header,
};

const Template: Story<IProps> = (args) => (
  <HashRouter>
    <Header {...args} />;
  </HashRouter>
);

export const Light = Template.bind({});
Light.args = {
  isLightTheme: true,
  toggleTheme: () => false,
};

export const Dark = Template.bind({});
Dark.args = {
  isLightTheme: false,
  toggleTheme: () => true,
};
