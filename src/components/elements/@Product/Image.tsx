interface props {
    varient: {
        image: SanityImageObject[]
    }
}

import { useState } from "react"
import * as Chakra from "@chakra-ui/react"
import { urlFor } from "../../../lib/client"
import { type FunctionComponent } from "react"
import { type SanityImageObject } from "@sanity/image-url/lib/types/types"

const ImageComp: FunctionComponent<props> = (props) => {

    const [index, setIndex] = useState(0)

    const isEmptyOptions = props.varient.image.length !== 0

    const list = props.varient.image.map((item, i) => (
        <Chakra.Image onMouseEnter={() => { setIndex(i) }} maxH={'100px'} src={urlFor(item) as any} key={i}></Chakra.Image>
    ))

    return (
        <Chakra.Grid pos="sticky" top={'70px'} width={'100%'} gridTemplateRows="500px auto" px={[0, 10]}>

            <Chakra.Image w="100%" h="500px" objectFit={'contain'} src={urlFor(props.varient.image[index]) as any} />

            {isEmptyOptions && <Chakra.Flex overflowX={'auto'} p={2} bg="blackAlpha.100" alignItems={'center'} justifyContent="center">{list}</Chakra.Flex>}

        </Chakra.Grid >
    )
}

export default ImageComp





