import React from 'react';
import { TweetTile } from './index'
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ITweetTile } from './types';

export default {
  title: "Components/TweetTile",
  component: TweetTile,
} as Meta;


const Template: Story<ITweetTile> = (args) => {

  return (
    <TweetTile {...args} />
  )
};

export const Default = Template.bind({});
Default.args = {
  config: { size: 'lg' },
  user: {
    handle: 'hutchida',
    profilePic: 'https://pbs.twimg.com/profile_images/1405814141315584002/MIdRJFHL_400x400.jpg'
  },
  tweet: {
    tweet: "Couple of speakers trying convince us how easy it is deploy shit to Azure, and let's face it already...it's not, and it looks like it never will be."
  }
};
