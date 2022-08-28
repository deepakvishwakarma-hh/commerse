type Cart = () => ReactElement
import Link from "next/link"
import * as Chakra from "@chakra-ui/react"
import { _useContext } from "../../src/context"
import { ReactElement, useEffect } from "react"
import { Product } from "../../src/components/elements/@Cart"
import { HomeLayout as Layout } from "../../src/components/layouts"

const Cart: Cart = () => {

    const store = _useContext()

    if (store.cart.products.length == 0) {
        return (
            <Layout>
                <Chakra.Center flexDirection={'column'} h="300px" bg="purple.100">
                    <Chakra.Heading> Cart is Empty! </Chakra.Heading>
                    <Link href={'/'} passHref >
                        <Chakra.Button my={5} px={5}>
                            + Add Product
                        </Chakra.Button>
                    </Link>
                </Chakra.Center>
            </Layout>
        )
    }

    return (
        <Layout>
            <Chakra.Flex bg="whitesmoke" py={[5]} px={[3, 10]}>
                <Chakra.Flex flex={2} flexDir={'column'}>

                    {store.cart.products?.map((value: any, index: number) => {
                        return (
                            <Product key={index} data={value} />
                        )
                    })}

                    <Chakra.Box>
                        <Chakra.Button colorScheme={'orange'}>Place Order</Chakra.Button>
                    </Chakra.Box>

                </Chakra.Flex>
                <Chakra.Flex display={['none', 'none', "flex"]} flex={1} h="200px" bg="cyan.100" flexDir={'column'}>
                    result goes here....
                </Chakra.Flex>

            </Chakra.Flex>
        </Layout>
    )
}
export default Cart