interface props {
    data: catalog
}
import Link from "next/link";
import Image from "next/image";
import { FunctionComponent, useRef } from "react";
import { useNextSanityImage } from 'next-sanity-image';
import { type catalog } from "../../../../pages/index"
import { configuredSanityClient } from "../../../lib/client"
import { Box, Text, useDimensions } from "@chakra-ui/react"

const Catalog: FunctionComponent<props> = ({ data }) => {
    const elementRef = useRef(null)
    const dimensions = useDimensions(elementRef)

    const imageProps: any = useNextSanityImage(
        configuredSanityClient,
        data.image
    );

    return (
        <>
            <Link passHref href={`/catalog/${data.slug.current}`}>
                <Box maxW="250px" cursor="pointer" width={['150px', 'initial']} ref={elementRef} overflow={'hidden'} p={2} bg='white' m={1}>
                    <Image  {...imageProps} loader={imageProps.loader} layout="intrinsic"
                        alt="none"
                        height={dimensions?.contentBox?.width ?? '200px'}
                        width={dimensions?.contentBox?.width ?? '200px'}
                        objectPosition="center"
                    />
                    <Text fontWeight={500} textTransform={'capitalize'}>{data.name}</Text>
                </Box>
            </Link>
        </>
    )
}
export default Catalog 