import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import FacebookDevelopersPage from "../components/pages/FacebookDevelopersPage";
import MixAndBgBlendPage from "../components/pages/MixAndBgBlendPage";

export default {
    title: "Pages/Commercial Info Pages",
    component: FacebookDevelopersPage,
} as ComponentMeta<typeof FacebookDevelopersPage>;

const TemplateFBDevelopers: ComponentStory<typeof FacebookDevelopersPage> = (
    args
) => <FacebookDevelopersPage {...args} />;

export const FacebookDevelopers = TemplateFBDevelopers.bind({});
FacebookDevelopers.parameters = {
    layout: "fullscreen",
};

const TemplateSelectText: ComponentStory<typeof FacebookDevelopersPage> = (
    args
) => <MixAndBgBlendPage {...args} />;

export const BlendModes = TemplateSelectText.bind({});
BlendModes.parameters = {
    layout: "fullscreen",
};
