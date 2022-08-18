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
const currentDate = new Date()
export const Default = Template.bind({});
Default.args = {
  config: { size: 'md' },
  user: {
    handle: 'hutchida',
    bio: 'Front end dev in Berlin...dreams in JSON now',
    profilePic: 'https://pbs.twimg.com/profile_images/1405814141315584002/MIdRJFHL_400x400.jpg',
    numOfFollowers: 150000,
  },
  tweet: {
    tweet: "Couple of speakers trying convince us how easy it is deploy shit to Azure, and let's face it already...it's not, and it looks like it never will be.",
    numOfRetweets: 50000,
    published: 'Thu Aug 18 2022 11:19:02' || currentDate.toString(),
    sentiment: 2,
    url: 'https://twitter.com/hutchida/status/1532068422993215489?s=20&t=gtZDFlYJM6nYBCx8sC-XFw'
  }
};
