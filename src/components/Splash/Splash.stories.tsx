import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Splash } from "./index";
export default {
    title: "Components/Splash",
    component: Splash,
} as Meta;

const data = {
    // profilePic: 'profilepic.jpeg',
    profilePic: './images/profilepic.jpeg',
    subtitle: 'Frontend Developer',
    title: 'Daniel Hutchings',
    oneliner: 'Frontend Developer, DIY Fundamentalist, dreams in JSON...',
    bgImage: 'https://picsum.photos/2000/2000.webp',
    bgColor: '#ffffff',
    onwardLink: {
        url: '#about',
        displayName: 'About Me',
        target: '_self',
    },
    socials: [
        {
            link: {
                url: 'https://www.linkedin.com/in/danielmhutchings/',
                target: '_blank',
            },
            name: 'LinkedIn',
            abbreviation: 'LI',
            icon: 'images/linkedin.svg',
        },
        {
            link: {
                url: 'https://www.github.com/hutchida',
                target: '_blank',
            },
            name: 'GitHub',
            abbreviation: 'GH',
            icon: 'images/github.svg',
        }
    ],
}
const Template: Story<any> = () => (
    <Splash {...data} />
);

export const Default = Template.bind({});
