import * as Chakra from "@chakra-ui/react"
import Product from "./Product"
const Products = ({ product, catalog }: any) => {
    return (
        <Chakra.Box px={10} bg="whitesmoke">
            <Chakra.Heading as="h1" py={20} textAlign='center' textTransform={'capitalize'}>  {catalog} </Chakra.Heading>
            <Chakra.Grid gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} flexWrap={'wrap'} justifyContent="center" >
                {product.map((item: any, index: number) => (
                    <Product key={index} data={item} />
                ))}

            </Chakra.Grid>
        </Chakra.Box >
    )
}
export default Products


