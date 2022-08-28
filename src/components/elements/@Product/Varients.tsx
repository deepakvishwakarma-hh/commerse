interface props {
    varients: varient[],
}
import * as Chakra from "@chakra-ui/react"
import { FunctionComponent } from "react"
import { urlFor } from "../../../lib/client"
import { _useContext } from "../../../context"
import { type varient } from "../../../../pages/catalog/[catalogId]/[productId]"

const Varients: FunctionComponent<props> = (props) => {
    const store = _useContext()
    return (
        <Chakra.Flex flexWrap="wrap">
            {props.varients?.map((item, index) => {

                const onClick = () => {
                    store.reducers?.product.reducer({ type: 'varientIndex', payload: index })
                    store.reducers?.product.reducer({ type: 'varient', payload: item })
                }
                return (
                    <Chakra.Flex outline={index == store.product.varientIndex ? '2px blue solid' : 'none'} onClick={onClick} key={index} cursor={'pointer'} mr={1} mb={1} flexDir={'column'} >
                        <Chakra.Image border="2px whitesmoke solid" objectFit={'contain'} w="100px" h="100px" maxW="100px" maxH="100px" src={urlFor(item.image[0]) as any}></Chakra.Image>
                    </Chakra.Flex>
                )
            })}
        </Chakra.Flex >
    )
}
export default Varients




