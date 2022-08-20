import Catalog from "./catalog"
import * as Chakra from "@chakra-ui/react"
const Catalogs = ({ catalog }: any) => {
    return (
        <Chakra.Box px={[0, 10]} bg="whitesmoke" pb={10}>
            <Chakra.Heading as="h1" py={20} textAlign='center'>  Categories </Chakra.Heading>
            <Chakra.Flex flexWrap={'wrap'} justifyContent="center">
                {catalog.map((item: any, index: number) => (
                    <Catalog key={index} data={item} />
                ))}
            </Chakra.Flex>
        </Chakra.Box>
    )
}
export default Catalogs



