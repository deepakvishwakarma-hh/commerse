interface props {
    data: catalog
}
import Link from "next/link";
import Image from "next/image";
import { useNextSanityImage } from 'next-sanity-image';
import { type catalog } from "../../../../pages/index"
import { FunctionComponent, useRef, useState } from "react";
import { configuredSanityClient } from "../../../lib/client"
import { Box, Text, useDimensions, Center, Spinner } from "@chakra-ui/react"


const Catalog: FunctionComponent<props> = ({ data }) => {

    const [Routing, setRouting] = useState(false)
    const startRouting = () => {
        setRouting(true)
    }

    const elementRef = useRef(null)
    const dimensions = useDimensions(elementRef)

    const imageProps: any = useNextSanityImage(
        configuredSanityClient,
        data.image
    );

    return (
        <>
            {Routing &&
                <Center pos="fixed" w="100%" h="100%" top={0} left={0} zIndex={99999999} bg="blackAlpha.400">
                    <Spinner color="white" />
                </Center>
            }
            <Link passHref href={`/catalog/${data.slug.current}`}>
                <Box onClick={startRouting} maxW="250px" cursor="pointer" width={['150px', 'initial']} ref={elementRef} overflow={'hidden'} p={2} bg='white' m={1}>
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