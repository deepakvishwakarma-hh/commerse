interface props {
    varients: any[],
    varientIndex: number,
    setVarientIndex: Dispatch<SetStateAction<number>>
}

import * as Chakra from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react"
import { urlFor } from "../../../lib/client"
const Varients = (props: props) => {

    return (
        <Chakra.Flex>
            {props.varients.map((item, index) => {

                const onClick = () => {
                    props.setVarientIndex(index)
                }

                return (
                    <Chakra.Flex outline={index == props.varientIndex ? '2px blue solid' : 'none'} onClick={onClick} key={index} cursor={'pointer'} mr={1} flexDir={'column'} >
                        <Chakra.Image border="2px whitesmoke solid" objectFit={'contain'} w="100px" h="100px" maxW="100px" maxH="100px" src={urlFor(item.image[0]) as any}></Chakra.Image>
                    </Chakra.Flex>
                )
            })}
        </Chakra.Flex >
    )
}
export default Varients




