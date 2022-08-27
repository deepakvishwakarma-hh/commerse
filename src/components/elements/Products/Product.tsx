import Image from "next/image";
import { useRef } from "react";
import Router from "next/router"
import * as Chakra from "@chakra-ui/react"
import { useNextSanityImage } from 'next-sanity-image';
import { configuredSanityClient } from "../../../lib/client"

const Product = ({ data }: any) => {

    const elementRef = useRef(null)
    const dimensions = Chakra.useDimensions(elementRef)

    const imageProps: any = useNextSanityImage(
        configuredSanityClient,
        data.varients[0].image[0]
    );

    const cropText = (str: string, length: number) => {
        return str.length > length ? str.slice(0, length) + '...' : str
    }

    const onClickHandler = () => {
        Router.push(`${Router.asPath}/${data.slug.current}`)
    }

    return (
        <Chakra.Box bg="white" _focus={{ opacity: .8 }} _hover={{ bg: 'black', color: 'white' }} cursor="pointer" onClick={onClickHandler} ref={elementRef} p={[2, 2]} >
            <Image  {...imageProps} loader={imageProps.loader} layout="intrinsic"
                alt="none"
                height={dimensions?.contentBox?.width ?? '200px'}
                width={dimensions?.contentBox?.width ?? '200px'} />
            <Chakra.Text p={1} fontWeight={800} textTransform={'capitalize'}>{cropText(data.name, 20)}</Chakra.Text>
            <Chakra.Text p={1} fontWeight={500} textTransform={'capitalize'}>₹{data.price}</Chakra.Text>
        </Chakra.Box>

    )
}
export default Product

// border="1px lightgray solid"