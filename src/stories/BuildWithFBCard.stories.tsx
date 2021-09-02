import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Component from "../components/facebook/BuildWithFBCard";

export default {
  title: "components/facebook/BuildWithFBCard",
  component: Component,
  parameters: {
    backgrounds: {
      default: "grey",
      values: [{ name: "grey", value: "#eee" }],
    },
  },
} as ComponentMeta<typeof Component>;

const ComponentTemplate: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args} />
);

export const Default = ComponentTemplate.bind({});

Default.args = {
  title: "Messenger Platform",
  description:
    "Generate leads, drive sales, or provide customer service through a personal and convenient user experience.",
  CTAText: "Learn more",
};

Default.parameters = {
  layout: "centered",
};
