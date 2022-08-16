import React from 'react';
import Navigation from './index'
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { INavigation } from './types';

export default {
  title: "Components/Navigation",
  component: Navigation,
} as Meta;


const Template: Story<INavigation> = (args) => {

  return (
    <div style={{
      background: `url(https://picsum.photos/2500/2500.webp)`,
      height: '200vh',
    }}>
      <Navigation {...args} />
    </div>

  )
};

export const Default = Template.bind({});
Default.args = {
  title: 'HUTCHIDA', links:
    [
      { url: 'https://www.bbc.com', displayName: 'About Me' },
      { url: 'https://www.abc.com', displayName: 'Bio' },
      { url: 'https://www.bbc.com', displayName: 'Skills' },
      { url: 'https://www.abc.com', displayName: 'Portfolio' }
    ]
};
