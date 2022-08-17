
import { Flex, Box, Text } from "@chakra-ui/react"

const Item = ({ name, image }: any) => {
    return (
        <Flex alignItems={'center'} my={2}>
            <Box bg="lightgray" w={'50px'} h={'50px'}></Box>
            <Text fontSize={13} fontWeight={500} color="gray" textTransform={'capitalize'} px={2}>{name}</Text>
        </Flex>
    )
}
export default Item