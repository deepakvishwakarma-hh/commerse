interface props {
    images: any
}

import Img from 'next/image';
import { useState } from "react"
import ImageChild from "./imageChild"
import * as Chakra from "@chakra-ui/react"
import { useNextSanityImage } from 'next-sanity-image'
import { urlFor, configuredSanityClient } from "../../../lib/client"


const Image = ({ images }: props) => {

    const [index, setIndex] = useState<number>(0)

    const imageProps: any = useNextSanityImage(
        configuredSanityClient,
        images.image[index]
    );

    return (
        <Chakra.Grid pos="sticky" top={'70px'} width={'100%'} gridTemplateRows="500px auto" px={[0, 10]}>

            <Chakra.Image w="100%" h="500px" objectFit={'contain'} src={urlFor(images.image[index]) as any}>
            </Chakra.Image>

            {images.image.length !== 1 && <Chakra.Flex overflowX={'auto'} p={2} bg="blackAlpha.100" alignItems={'center'} justifyContent="center">

                {images.image.map((imageData: any, i: number) => <ImageChild src={urlFor(imageData)} i={i} key={i} setIndex={setIndex} />)}

            </Chakra.Flex>}
        </Chakra.Grid >
    )
}


export default Image





