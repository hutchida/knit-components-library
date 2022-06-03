import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Animate } from "./index";
import { Slide } from "../Slide";
import { IAnimate } from "./types";
// eslint-disable

export default {
    title: "Components/Animate",
    component: Animate,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IAnimate> = (args) => {
    return (
        <>
            <Animate slideUp>
                <Slide {...slideArgs} />
            </Animate>
            <Animate slideUp>
                <Slide {...slideArgs} />
            </Animate>
            <Animate slideUp>
                <Slide {...slideArgs} />
            </Animate>
            <Animate slideUp>
                <Slide {...slideArgs} />
            </Animate>
        </>
    )
};

export const PageOfSlides = Template.bind({});
const slideArgs = {
    title: "Boom",
    description: "lorem ipsum thingum",
    bgImage: "https://picsum.photos/1200/1200.webp",
    bgColor: "#f0f0f0",
    // descriptionSize: "lg",
    // slideWidth: "lg",
    // slideHeight: "lg"
};
