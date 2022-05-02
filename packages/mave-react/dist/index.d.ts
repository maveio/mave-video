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
}
declare const Mave: (props: MaveProps) => JSX.Element;

export { Mave, MaveProps };
