import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Accordion } from "./index";
import { IAccordionItem } from "./types";
import { data } from "./data"
export default {
    title: "Components/Accordion",
    component: Accordion,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IAccordionItem> = (args) => <Accordion {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = { props: {}, data: data, };
