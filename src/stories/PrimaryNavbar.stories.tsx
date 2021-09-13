import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import PrimaryNavbar from "../components/twilio/PrimaryNavbar";
import {Default as PrimaryMenu} from './PrimaryMenu.stories'

export default {
    title: "components/Twilio/PrimaryNavbar",
    component: PrimaryNavbar,
} as ComponentMeta<typeof PrimaryNavbar>;

const PrimaryNavbarTemplate: ComponentStory<typeof PrimaryNavbar> = (
    args
) => (
    <PrimaryNavbar {...args} />
);

export const Default = PrimaryNavbarTemplate.bind({});
Default.parameters = {
    layout: "fullscreen"
}
Default.args = {
    primaryMenu: {
        items: PrimaryMenu.args?.items || []
    }
};
