interface props {
    data: catalog
}
import Link from "next/link";
import Image from "next/image";
import * as Chakra from "@chakra-ui/react"
import { FunctionComponent, useRef } from "react";
import { useNextSanityImage } from 'next-sanity-image';
import { type catalog } from "../../../../pages/index"
import { configuredSanityClient } from "../../../lib/client"

const Catalog: FunctionComponent<props> = ({ data }) => {
    const elementRef = useRef(null)
    const dimensions = Chakra.useDimensions(elementRef)

    const imageProps: any = useNextSanityImage(
        configuredSanityClient,
        data.image
    );

    return (
        <>
            <Link passHref href={`/catalog/${data.slug.current}`}>
                <Chakra.Box maxW="250px" cursor="pointer" width={['150px', 'initial']} ref={elementRef} overflow={'hidden'} p={2} bg='white' m={1}>
                    <Image  {...imageProps} loader={imageProps.loader} layout="intrinsic"
                        alt="none"
                        height={dimensions?.contentBox?.width ?? '200px'}
                        width={dimensions?.contentBox?.width ?? '200px'}
                        objectPosition="center"
                    />
                    <Chakra.Text fontWeight={500} textTransform={'capitalize'}>{data.name}</Chakra.Text>
                </Chakra.Box>
            </Link>
        </>
    )
}
export default Catalog 