import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import InvisionLoginPage from "./InvisionLoginPage";
import PayPalLoginPage from "./PayPalLoginPage";
import SplitCardLoginPage from "./SplitCardLoginPage";

export default {
  title: "Pages/Login UI Pages",
  component: SplitCardLoginPage,
  subcomponents: { PayPalLoginPage },
} as ComponentMeta<typeof SplitCardLoginPage>;

const TemplateA: ComponentStory<typeof SplitCardLoginPage> = (args) => (
  <SplitCardLoginPage {...args} />
);

export const SplitStoryCard = TemplateA.bind({});
SplitStoryCard.parameters = {
  layout: 'centered',
};

const TemplatePayPal: ComponentStory<typeof PayPalLoginPage> = (args) => (
  <PayPalLoginPage {...args} />
);


export const Paypal = TemplatePayPal.bind({});
Paypal.parameters = {
  layout: 'centered',
};

const TempalteInvision: ComponentStory<typeof InvisionLoginPage> = (args) => (
  <InvisionLoginPage {...args} />
);

export const Invision = TempalteInvision.bind({});
Invision.parameters = {
  layout: 'fullscreen',
};

