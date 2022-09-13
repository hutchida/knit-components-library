import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Spacer } from "./index";

export default {
  title: "Components/Spacer",
  component: Spacer,
} as Meta;

const data = {
  size: 50,
}
const Template: Story<any> = () => <Spacer {...data} />;

export const Default = Template.bind({});
