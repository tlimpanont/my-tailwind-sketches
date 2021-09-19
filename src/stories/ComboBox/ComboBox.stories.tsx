import React from 'react';
import ComboBox, {ComboBoxProps} from "../../components/ComboBox";
import {ComponentStory} from "@storybook/react";

export default {
    title: "grommet/ComboBox",
    component: ComboBox
}

export const Default: ComponentStory<typeof ComboBox> = (props: ComboBoxProps) => <ComboBox {...props} />;
Default.parameters = {
    layout: "centered"
}
