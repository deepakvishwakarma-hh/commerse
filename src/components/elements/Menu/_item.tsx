
import { urlFor } from "../../../lib/client"
import { Flex, Box, Text, Image } from "@chakra-ui/react"


const Item = (data: any) => {
    return (
        <Flex alignItems={'center'} my={2}>
            {/* <Image alt="lightgray" src={urlFor(image) as any} w={'50px'} h={'50px'} /> */}
            <Text fontSize={13} fontWeight={500} color="gray" textTransform={'capitalize'} px={2}>{data.name}</Text>
        </Flex>
    )
}
export default Item