import Catalog from "./catalog"
import { Flex, Box, Heading } from "@chakra-ui/react"

const Catalogs = ({ catalog }: any) => {
    return (
        <Box px={[0, 10]} bg="whitesmoke" pb={10}>
            <Heading as="h1" py={20} textAlign='center'>  Categories </Heading>
            <Flex flexWrap={'wrap'} justifyContent="center">
                {catalog.map((item: any, index: number) => (
                    <Catalog key={index} data={item} />
                ))}
            </Flex>
        </Box>
    )
}
export default Catalogs



