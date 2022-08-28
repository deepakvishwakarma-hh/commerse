import React from 'react'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import * as Chakra from "@chakra-ui/react"
import { _useContext } from '../../../context'
import { type product } from '../../../../pages/catalog/[catalogId]/[productId]'

interface props {
    product: product
}

const AddToCart: FunctionComponent<props> = ({ product }) => {

    const store = _useContext()
    const { quantity } = store.product
    const { briefDetail, price, name } = product

    const Router = useRouter()
    const toast = Chakra.useToast()
    const { catalogId, productId } = Router.query

    const alreadyProductInCartToast = () => toast({
        duration: 3000,
        isClosable: true,
        position: 'bottom-left',
        render: () => (<Chakra.Box bg="red.100" p={3} borderRadius={5} boxShadow={'md'} fontWeight={700}>👎 Product already in cart.</Chakra.Box>)
    })

    const productAddedToCart = () => toast({
        duration: 3000,
        isClosable: true,
        position: 'bottom-left',
        render: () => (<Chakra.Box bg="whatsapp.200" p={3} borderRadius={5} boxShadow={'md'} fontWeight={700}>👍 Product added to Cart</Chakra.Box>)
    })

    React.useEffect(() => {
        if (typeof window !== undefined) {
            // persist.effectStore()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const Cart = () => {
        const presentProductNames = store.cart.products.map((value: any) => value.name)

        if (presentProductNames.includes(product.name)) {
            alreadyProductInCartToast()

        } else {
            store.reducers?.cart.pushProduct({
                type: 'addProduct', payload: {
                    ...store.product,
                    url: `catalog/${catalogId}/${productId}`,
                    briefDetail,
                    price,
                    name
                }
            })
            productAddedToCart()
        }

    }
    return (
        <Chakra.Button isDisabled={isNaN(quantity)} _hover={{ opacity: .8 }} onClick={Cart} px={10} mx={2} bg="#0070f3" color="white">Add to cart</Chakra.Button>
    )
}

export default AddToCart