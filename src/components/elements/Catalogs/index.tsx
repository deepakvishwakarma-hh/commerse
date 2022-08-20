import Catalog from "./catalog"
import * as Chakra from "@chakra-ui/react"
const Catalogs = ({ catalog }: any) => {
    return (
        <Chakra.Box px={[0, 10]} bg="whitesmoke">
            <Chakra.Heading as="h1" py={20} textAlign='center'>  Categories </Chakra.Heading>
            <Chakra.Grid gridTemplateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)',]} flexWrap={'wrap'} justifyContent="center">
                {catalog.map((item: any, index: number) => (
                    <Catalog key={index} data={item} />
                ))}
            </Chakra.Grid>
        </Chakra.Box>
    )
}
export default Catalogs



