import React from 'react';
import Navigation from './index'
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { INavigation } from './types';

export default {
  title: "Components/Navigation",
  component: Navigation,
} as Meta;


const Template: Story<INavigation> = (args) => <Navigation {...args} />;

export const Solo = Template.bind({});
Solo.args = {
  title: 'HUTCHIDA', links:
    [
      { url: 'https://www.bbc.com', displayName: 'BBC' },
      { url: 'https://www.abc.com', displayName: 'ABC' }
    ]
};
