import React from 'react';
import ComboBox, {ComboBoxProps} from "../../components/ComboBox";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: "grommet/ComboBox",
    component: ComboBox
} as ComponentMeta<typeof ComboBox>;

const Template: ComponentStory<typeof ComboBox> = (props: ComboBoxProps) => <ComboBox {...props} />;

export const Default = Template.bind({})

Default.parameters = {
    layout: "centered"
}
