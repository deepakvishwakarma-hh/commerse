type Cart = () => ReactElement
import Link from "next/link"
import { ReactElement } from "react"
import * as Chakra from "@chakra-ui/react"
import { useAppSelector } from "../../src/redux"
import type { productDetails } from "../../src/redux/cart"
import { Product } from "../../src/components/elements/@Cart"
import { HomeLayout as Layout } from "../../src/components/layouts"

const Cart: Cart = () => {

    const store = useAppSelector(store => store.cart)

    if (store.length == 0) {
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

                    {store.map((value: productDetails, index: number) => {
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