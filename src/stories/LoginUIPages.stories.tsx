import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import AirbnbLoginPage from "./AirbnbLoginPage";
import DropboxLoginPage from "./DropboxLoginPage";
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
  layout: "centered",
};

const TemplatePayPal: ComponentStory<typeof PayPalLoginPage> = (args) => (
  <PayPalLoginPage {...args} />
);

export const Paypal = TemplatePayPal.bind({});
Paypal.parameters = {
  layout: "centered",
};

const TemplateInvision: ComponentStory<typeof InvisionLoginPage> = (args) => (
  <InvisionLoginPage {...args} />
);

export const Invision = TemplateInvision.bind({});
Invision.parameters = {
  layout: "fullscreen",
};

const TemplateDropbox: ComponentStory<typeof DropboxLoginPage> = (args) => (
  <DropboxLoginPage {...args} />
);

export const Dropbox = TemplateDropbox.bind({});
Dropbox.parameters = {
  layout: "fullscreen",
};

const TemplateAirbnb: ComponentStory<typeof AirbnbLoginPage> = (args) => (
  <AirbnbLoginPage {...args} />
);

export const Airbnb = TemplateAirbnb.bind({});
Airbnb.parameters = {
  layout: "fullscreen",
};

const TemplateFigma: ComponentStory<typeof FigmaLoginPage> = (args) => (
  <FigmaLoginPage {...args} />
);

export const Figma = TemplateFigma.bind({});
Figma.parameters = {
  layout: "fullscreen",
};
