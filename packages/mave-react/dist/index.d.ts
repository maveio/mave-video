interface MaveProps {
    embed: string;
    reference_id?: string;
    display_name?: string;
    jwt?: string;
}
declare const Mave: (props: MaveProps) => JSX.Element;

export { Mave, MaveProps };
