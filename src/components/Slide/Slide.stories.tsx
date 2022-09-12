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
WithImage.parameters = { controls: { exclude: ['_uid', 'component'] } };
WithImage.args = {
    title: "Boom boom boom boom boom boom",
    bgImage: {
        fieldtype: 'image',
        id: '12345',
        filename: "https://picsum.photos/900/900.webp"
    },
    bgColor: "#f0f0f0",
    size: "lg",
    html: `<p>Lorem <strong>ipsum</strong> dolor sit <a href="https://www.bbc.com" target="_blank">amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem <strong>ipsum</strong> dolor sit <a href="https://www.bbc.com" target="_blank">amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    <img src="images/twitter-profile-pic.jpeg" alt="profile pic" /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`
};

export const NoImage = Template.bind({});
NoImage.parameters = { controls: { exclude: ['_uid', 'component'] } };
NoImage.args = {
    title: "Boom",
    bgColor: "#f0f0f0",
    size: "md",
    html: `<p>Lorem <strong>ipsum</strong> dolor sit <a href="https://www.bbc.com" target="_blank">amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem <strong>ipsum</strong> dolor sit <a href="https://www.bbc.com" target="_blank">amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    <img src="images/twitter-profile-pic.jpeg" alt="profile pic" /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`

};

export const NoData = Template.bind({});
NoData.args = {
};
