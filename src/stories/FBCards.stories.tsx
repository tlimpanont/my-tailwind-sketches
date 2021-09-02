import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import BuildWithFBCardComp from "../components/facebook/BuildWithFBCard";
import DevelopersToolsCardComp from "../components/facebook/DeveloperToolsCard";

export default {
  title: "components/Facebook/Cards",
  component: BuildWithFBCardComp,
  parameters: {
    backgrounds: {
      default: "grey",
      values: [{ name: "grey", value: "#eee" }],
    },
  },
} as ComponentMeta<typeof BuildWithFBCardComp>;

const BuildWithFBCardTemplate: ComponentStory<typeof BuildWithFBCardComp> = (
  args: any
) => <BuildWithFBCardComp {...args} />;

export const BuildWithFBCard = BuildWithFBCardTemplate.bind({});

BuildWithFBCard.args = {
  title: "Messenger Platform",
  description:
    "Generate leads, drive sales, or provide customer service through a personal and convenient user experience.",
  CTAText: "Learn more",
};

BuildWithFBCard.parameters = {
  layout: "centered",
};

const DevelopersToolsCardTemplate: ComponentStory<
  typeof DevelopersToolsCardComp
> = (args: any) => <DevelopersToolsCardComp {...args} />;

export const DevelopersToolsCard = DevelopersToolsCardTemplate.bind({});

DevelopersToolsCard.args = {
  title: "Messenger Platform",
  className: "text-red-900 border-red-900",
  description:
    "Generate leads, drive sales, or provide customer service through a personal and convenient user experience.",
  CTAText: "Learn more",
};

DevelopersToolsCard.parameters = {
  layout: "centered",
};
