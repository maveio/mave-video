import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Mave } from "../src/Mave";
import { MaveProps } from "../../props/Mave";

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
