import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PostsRoll } from "./index";

export default {
  title: "Components/PostsRoll",
  component: PostsRoll,
} as Meta;

const posts = {
  posts:
    [{
      id: "12618252",
      title: `Here's another`,
      summary: "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: '8 March 2022',
      slug: "my-second-blog",
    },
    {
      id: "12618252",
      title: 'Welcome to my blog',
      summary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: '21st Feb 2021',
      slug: "my-first-blog",
    }]
}
const Template: Story<any> = () => <PostsRoll {...posts} />;

export const Default = Template.bind({});
