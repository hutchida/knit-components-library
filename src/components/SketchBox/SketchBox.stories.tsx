import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { SketchBox } from "./index";

export default {
  title: "Components/SketchBox",
  component: SketchBox,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story = (args: any) => <SketchBox {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  description: 'Hiya, what we gonna do here then?'
};