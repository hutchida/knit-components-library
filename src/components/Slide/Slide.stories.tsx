import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Slide } from "./index";
import { ISlide } from "./types";
export default {
    title: "Components/Slide",
    component: Slide,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISlide> = (args) => <Slide {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
    title: "Boom",
    description: "lorem ipsum thingum",
    descriptionSize: "lg",
    bgImage: "https://picsum.photos/1200/1200.webp",
    bgColor: "#f0f0f0",
    slideWidth: "lg",
    slideHeight: "lg"
};

export const NoImage = Template.bind({});
NoImage.args = {
    title: "Boom",
    description: "lorem ipsum thingum",
    descriptionSize: "lg",
    bgImage: "",
    bgColor: "#f0f0f0",
    slideWidth: "md",
    slideHeight: "md"
};

export const NoData = Template.bind({});
NoData.args = {
};
