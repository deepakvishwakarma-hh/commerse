import Product from "./Product"
import * as Chakra from "@chakra-ui/react"
const Products = ({ product, catalog }: any) => {
    return (
        <Chakra.Box pb={10} px={[0, 10]} bg="whitesmoke">
            <Chakra.Heading as="h1" py={20} textAlign='center' textTransform={'capitalize'}>  {catalog} </Chakra.Heading>
            <Chakra.Grid gridTemplateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)', 'repeat(6, 1fr)']} justifyContent="center">
                {product.map((item: any, index: number) => (
                    <Product key={index} data={item} />
                ))}

            </Chakra.Grid>
        </Chakra.Box >
    )
}
export default Products


