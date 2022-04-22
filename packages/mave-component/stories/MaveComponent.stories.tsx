import "@maveio/mave-component";

export default {
  title: "Component",
  component: "mave-component",
  argTypes: {
    embed: { control: "text" },
  },
};

interface Story<T> {
  (args: T): JSX.Element;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  embed: string;
  display_name: string;
  reference_id: string;
  muted: boolean;
  autoplay: boolean;
  loop: boolean;
  src: string;
  blurhash: string;
  aspectRatio: string;
  width: string;
  height: string;
}

const Template: Story<ArgTypes> = ({
  embed,
  display_name,
  reference_id,
  muted,
  autoplay,
  loop,
  src,
  blurhash,
  aspectRatio,
  height,
  width,
}: ArgTypes) => (
  // @ts-ignore
  <mave-component
    embed={embed}
    display_name={display_name}
    reference_id={reference_id}
    muted={muted}
    autoplay={autoplay}
    loop={loop}
    src={src}
    blurhash={blurhash}
    aspectRatio={aspectRatio}
    height={height}
    width={width}
    // @ts-ignore
  ></mave-component>
);

export const Example = Template.bind({});
Example.args = {
  embed: "WuS4Ifbt8d",
  display_name: "Mave",
  reference_id: "1234",
  muted: false,
  autoplay: false,
  loop: false,
  src: "",
  blurhash: "",
  aspectRatio: "",
  width: "0px",
  height: "0px",
};
