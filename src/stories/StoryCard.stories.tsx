import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StoryCard from "../components/StoryCard";

export default {
  title: "Components/StoryCard",
  component: StoryCard,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof StoryCard>;

const Template: ComponentStory<typeof StoryCard> = (args) => (
  <StoryCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Change the title",
  description: "Change the description via add on bottom of the screen",
};
Default.parameters = {
  layout: 'centered',
};