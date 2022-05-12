// @ts-ignore
import { Mave } from "../src/index";
import type { MaveProps } from "../../props/Mave";

export default {
  title: "mave/Mave",
  component: Mave,
};

// @ts-ignore
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Mave },
  setup() {
    return { args };
  },
  template: '<Mave v-bind="args" />',
});

export const Video = Template.bind({});
Video.args = {
  embed: "WuS4Ifbt8d",
};
