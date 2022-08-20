import Product from "./Product"
import * as Chakra from "@chakra-ui/react"
const Products = ({ product, catalog }: any) => {
    return (
        <Chakra.Box pb={10} px={10} bg="whitesmoke">
            <Chakra.Heading as="h1" py={20} textAlign='center' textTransform={'capitalize'}>  {catalog} </Chakra.Heading>
            <Chakra.Flex flexWrap={'wrap'} justifyContent="center">
                {product.map((item: any, index: number) => (
                    <Product key={index} data={item} />
                ))}

            </Chakra.Flex>
        </Chakra.Box >
    )
}
export default Products


