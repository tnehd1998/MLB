import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";
import { HashRouter } from "react-router-dom";
import Standing, { IProps } from ".";

export default {
  title: "organisms/Standing",
  component: Standing,
};

const Template: Story<IProps> = (args) => (
  <HashRouter>
    <Standing {...args} />
  </HashRouter>
);

export const Default = Template.bind({});
Default.args = {
  standing: [
    {
      City: "Chicago",
      Division: "Central",
      Key: "CHW",
      League: "AL",
      Losses: 69,
      Name: "White Sox",
      TeamID: 16,
      Wins: 93,
    },
    {
      City: "Cleveland",
      Division: "Central",
      Key: "CLE",
      League: "AL",
      Losses: 82,
      Name: "Guardians",
      TeamID: 10,
      Wins: 80,
    },
    {
      City: "Detroit",
      Division: "Central",
      Key: "DET",
      League: "AL",
      Losses: 85,
      Name: "Tigers",
      TeamID: 17,
      Wins: 77,
    },
    {
      City: "Kansas City",
      Division: "Central",
      Key: "KC",
      League: "AL",
      Losses: 88,
      Name: "Royals",
      TeamID: 5,
      Wins: 74,
    },
    {
      City: "Minnesota",
      Division: "Central",
      Key: "MIN",
      League: "AL",
      Losses: 89,
      Name: "Twins",
      TeamID: 20,
      Wins: 73,
    },
  ],
  isLoading: false,
  currentRegion: "AL Central",
  setCurrentRegion: action("setCurrentRegion"),
};
