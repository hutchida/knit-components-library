import React from 'react';
import { ByJavascript } from './ConditionalRender'
import { ByCSS } from './ConditionalRender'
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

export default {
  title: "Components/Display",
  component: ByJavascript,
} as Meta;


const JSTemplate: Story = (args) => <ByJavascript isMobile={args.isMobile} />;

export const DisplayByJavascript = JSTemplate.bind({});
DisplayByJavascript.args = {
  isMobile: true
};

const CSSTemplate: Story = () => <ByCSS />;

export const DisplayByCSS = CSSTemplate.bind({});
DisplayByCSS.args = {
};
