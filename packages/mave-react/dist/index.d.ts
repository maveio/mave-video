interface MaveProps {
    embed: string;
    reference_id?: string;
    display_name?: string;
    jwt?: string;
    muted?: boolean;
    autoplay?: boolean;
    loop?: boolean;
    float?: string;
    src?: string;
    blurhash?: string;
    aspectRatio?: string;
    width?: string;
    height?: string;
    className?: string;
    style?: string;
    posterImage?: string;
    posterVideoSource?: string;
}

declare const Mave: (props: MaveProps) => JSX.Element;

export { Mave };
