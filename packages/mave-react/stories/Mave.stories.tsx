import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Mave, MaveProps } from "../src/Mave";

export default {
  title: "mave/Mave",
  component: Mave,
} as ComponentMeta<typeof Mave>;

// @ts-ignore
const Template: ComponentStory<typeof Mave> = (args: MaveProps) => (
  <Mave {...args} />
);

export const Video = Template.bind({});
Video.args = {
  embed: "WuS4Ifbt8d",
};
