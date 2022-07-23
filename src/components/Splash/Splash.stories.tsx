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
    profilePic: 'https://picsum.photos/400/400.webp',
    subtitle: 'Frontend Developer',
    title: 'Daniel Hutchings',
    oneliner: 'Frontend Developer, DIY Fundamentalist, dreams in JSON...',
    bgImage: 'https://picsum.photos/2000/2000.webp',
    bgColor: '#ffffff',
    onwardLink: {
        url: '#about',
        displayName: 'About',
        target: '_self',
    },
    socials: [
        {
            link: {
                url: 'https://www.linkedin.com',
                target: '_blank',
            },
            name: 'LinkedIn',
            abbreviation: 'LI',
            icon: 'https://picsum.photos/16/16.webp',
        },
        {
            link: {
                url: 'https://www.github.com/hutchida',
                target: '_blank',
            },
            name: 'GitHub',
            abbreviation: 'GH',
            icon: 'https://picsum.photos/16/16.webp',
        }
    ],
}
const Template: Story<any> = () => (
    <Splash {...data} />
);

export const Default = Template.bind({});
