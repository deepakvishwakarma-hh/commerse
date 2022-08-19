type Cart = () => ReactElement
import Link from "next/link"
import { ReactElement } from "react"
import * as Chakra from "@chakra-ui/react"
import { useAppDispatch } from "../../src/redux"
import { addProduct } from "../../src/redux/cart"
import store, { useAppSelector } from "../../src/redux"
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
            <Chakra.Flex flexDir={'column'} bg="whitesmoke" p={10}>

                <Chakra.Grid gridTemplateColumns={'2fr 1fr 1fr'} bg="white" my={1} h="50px">

                    <Chakra.Text fontWeight={700} fontSize={18} textTransform="capitalize" h="100%" lineHeight={'50px'} pl={5}>Product & details</Chakra.Text>
                    <Chakra.Text fontWeight={700} fontSize={18} textTransform="capitalize" borderLeft="5px whitesmoke solid" h="100%" lineHeight={'50px'} pl={5}>quantity</Chakra.Text>
                    <Chakra.Text fontWeight={700} fontSize={18} textTransform="capitalize" borderLeft="5px whitesmoke solid" h="100%" lineHeight={'50px'} pl={5}>Total</Chakra.Text>

                </Chakra.Grid>

                <Chakra.Flex flex={2} flexDir={'column'}>

                    {store.map((item: productDetails, index: number) => {
                        return (
                            <Product data={item} key={item.name} />
                        )
                    })}

                </Chakra.Flex>

            </Chakra.Flex>
        </Layout>
    )
}
export default Cart