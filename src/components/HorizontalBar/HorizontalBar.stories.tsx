import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { HorizontalBar } from "./index";

export default {
  title: "Components/HorizontalBar",
  component: HorizontalBar,
} as Meta;

const data = {
  name: 'Tailwind',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  percentage: 38,
  size: "sm",
  color: 'pink',
}
const Template: Story<any> = () => (
  <HorizontalBar {...data} />
);

export const Default = Template.bind({});
