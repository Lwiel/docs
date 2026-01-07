import CardWithImage, {
    CardWithImageProps,
} from "@site/src/components/Common/CardWithImage";

interface GuideItemProps extends CardWithImageProps {
    tags?: string[];
}

export default function GuideItem(props: GuideItemProps) {
    const { tags: _, ...cardWithImageProps } = props;
    return (
        <CardWithImage
            {...cardWithImageProps}
            buttonVariant="default"
        />
    );
}
