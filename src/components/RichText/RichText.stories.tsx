import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { RichText } from "./index";

export default {
  title: "Components/RichText",
  component: RichText,
} as Meta;

const data = {
  text: `<p>Lorem <strong>ipsum</strong> dolor sit <a href="https://www.bbc.com" target="_blank">amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem <strong>ipsum</strong> dolor sit <a href="https://www.bbc.com" target="_blank">amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  <img src="images/twitter-profile-pic.jpeg" alt="profile pic" /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
}
const Template: Story<any> = () => <RichText {...data} />;

export const Default = Template.bind({});
