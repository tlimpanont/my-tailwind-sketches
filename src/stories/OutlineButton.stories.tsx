import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import OutlineButton from "../components/OutlineButton";

export default {
  title: "Components/OutlineButton",
  component: OutlineButton,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof OutlineButton>;

const Template: ComponentStory<typeof OutlineButton> = (args) => (
  <OutlineButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: "google",
  btnText: "Google"
};
// Default.parameters = {
//   layout: 'centered',
// };
