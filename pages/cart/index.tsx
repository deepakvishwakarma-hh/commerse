type Cart = () => ReactElement
import { ReactElement } from "react"
import * as Chakra from "@chakra-ui/react"
import store, { useAppSelector } from "../../src/redux"
import { HomeLayout as Layout } from "../../src/components/layouts"

import type { productDetails } from "../../src/redux/cart"

import { useAppDispatch } from "../../src/redux"
import { addProduct } from "../../src/redux/cart"


import { Product } from "../../src/components/elements/@Cart"

const Cart: Cart = () => {



    const store = useAppSelector(store => store.cart)
    console.log(store)




    return (
        <Layout>
            <Chakra.Flex bg="whitesmoke" p={10}>
                <Chakra.Flex flex={2} flexDir={'column'}>

                    {store.map((item: productDetails, index: number) => {
                        return (
                            <Product data={item} key={item.name} />
                        )
                    })}


                </Chakra.Flex>
                <Chakra.Flex flex={1}>
                    {/* hey */}
                </Chakra.Flex>
            </Chakra.Flex>
        </Layout>
    )
}
export default Cart