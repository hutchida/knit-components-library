import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { EventsAccordion } from "./index";
import { IEventsAccordionItem } from "./types";
import data from "./data.json";

export default {
    title: "Components/EventsAccordion",
    component: EventsAccordion,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IEventsAccordionItem> = (args) => (
    <div style={{ justifyContent: "" }}><EventsAccordion {...args} /></div>
);

export const DefaultState = Template.bind({});
DefaultState.args = { props: {}, data: data.experience, };
