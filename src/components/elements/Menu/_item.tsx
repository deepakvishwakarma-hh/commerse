
import * as Chakra from "@chakra-ui/react"

const Item = (data: any) => {
    return (
        <Chakra.Flex alignItems={'center'} my={2}>
            <Chakra.Text fontSize={13} fontWeight={500} color="gray" textTransform={'capitalize'} px={2}>{data.name}</Chakra.Text>
        </Chakra.Flex>
    )
}

export default Item