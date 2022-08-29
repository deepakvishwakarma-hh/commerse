interface props {
    data: product
}

import Image from "next/image";
import Router from "next/router"
import * as Chakra from "@chakra-ui/react"
import { useNextSanityImage } from 'next-sanity-image';
import { useRef, type FunctionComponent } from "react";
import { configuredSanityClient } from "../../../lib/client"
import { type product } from "../../../../pages/catalog/[catalogId]"

const Product: FunctionComponent<props> = ({ data }) => {

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
        <Chakra.Box bg="white" cursor="pointer" onClick={onClickHandler} ref={elementRef} p={[2, 2]} >
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

