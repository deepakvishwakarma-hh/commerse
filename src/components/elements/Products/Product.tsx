import Image from "next/image";
import { useRef } from "react";
import Router from "next/router"
import * as Chakra from "@chakra-ui/react"
import { useNextSanityImage } from 'next-sanity-image';
import { configuredSanityClient } from "../../../lib/client"

const Product = ({ data }: any) => {
    console.log(data)

    const elementRef = useRef(null)
    const dimensions = Chakra.useDimensions(elementRef)

    const imageProps: any = useNextSanityImage(
        configuredSanityClient,
        data.image[0]
    );

    const onClickHandler = () => {
        Router.push(`${Router.asPath}/${data.slug.current}`)
    }

    return (
        <Chakra.Box maxW="230px" _hover={{ bg: 'black', color: 'white' }} cursor="pointer" width={['150px', 'initial']} onClick={onClickHandler} ref={elementRef} overflow={'hidden'} p={2} bg='white' m={1}>
            <Image  {...imageProps} loader={imageProps.loader} layout="intrinsic"
                alt="none"
                height={dimensions?.contentBox?.width ?? '200px'}
                width={dimensions?.contentBox?.width ?? '200px'} />
            <Chakra.Text fontWeight={500} textTransform={'capitalize'}>{data.name}</Chakra.Text>
        </Chakra.Box>
    )
}
export default Product