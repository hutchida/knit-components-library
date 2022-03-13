import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ItemGrid } from "./index";
import { IItemGridProps } from "./types";

export default {
    title: "Components/ItemGrid",
    component: ItemGrid,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IItemGridProps> = (args) => <ItemGrid {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { props: "Primary 😃" };

// export const Secondary = Template.bind({});
// Secondary.args = { ...Primary.args, primary: false, label: "Secondary 😇" };