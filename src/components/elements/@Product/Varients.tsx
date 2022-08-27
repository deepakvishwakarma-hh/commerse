interface props {
    varients: varients[]
}
import Link from "next/link"
import * as Chakra from "@chakra-ui/react"
import { urlFor } from "../../../lib/client"
import { type varients } from "../../../../pages/catalog/[catalogId]/[productId]"

const Varients = (props: props) => {
    return (
        <Chakra.Flex>
            {props.varients.map((item, index) => {
                return (
                    <Link href={item.slug.current} passHref key={index}>
                        <Chakra.Flex cursor={'pointer'} border="1px whitesmoke solid" mr={1} flexDir={'column'} >
                            <Chakra.Image objectFit={'contain'} w="100px" h="100px" maxW="100px" maxH="100px" src={urlFor(item.image) as any}></Chakra.Image>
                            <Chakra.Text textTransform={'capitalize'} fontWeight={'bold'} textAlign={'center'}>{item.varient}</Chakra.Text>
                        </Chakra.Flex>
                    </Link>
                )
            })}
        </Chakra.Flex>
    )
}
export default Varients




