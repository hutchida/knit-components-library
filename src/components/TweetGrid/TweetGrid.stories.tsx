import React from 'react';
import { TweetGrid } from './index'
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { tileData } from "./data"

export default {
  title: "Components/TweetGrid",
  component: TweetGrid,
} as Meta;


const Template: Story<any> = (args) => {

  return (
    <TweetGrid {...args} />
  )
};

export const Default = Template.bind({});
Default.args = {
  config: {
    size: 'sm',
    colorMap: {
      0: { 'heavy': 'red', 'light': 'pink' },
      1: { 'heavy': 'orange', 'light': 'peachpuff' },
      2: { 'heavy': 'palegreen', 'light': 'honeydew' },
    }
  }, data: tileData
};
