import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { BlogPost } from "./index";

export default {
  title: "Components/BlogPost",
  component: BlogPost,
} as Meta;

const data = {
  subject: 'Welcome to my blog',
  text: `<p>Lorem <strong>ipsum</strong> dolor sit <a href="https://www.bbc.com" target="_blank">amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem <strong>ipsum</strong> dolor sit <a href="https://www.bbc.com" target="_blank">amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
  date: '21st Feb 2021',
  info: "For the portfolio",
}
const Template: Story<any> = () => <BlogPost {...data} />;

export const Default = Template.bind({});
