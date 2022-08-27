import React from 'react'
import { useRouter } from 'next/router'
import * as Chakra from "@chakra-ui/react"
import usePersist from '../../../redux/persist'
import { useAppDispatch, useAppSelector } from '../../../redux'
import { addProduct, type productDetails } from '../../../redux/cart'

const AddToCart = ({ product, quantity }: any) => {

    const Router = useRouter()
    const persist = usePersist()
    const toast = Chakra.useToast()
    const dispatch = useAppDispatch()
    const { catalogId, productId } = Router.query
    const store = useAppSelector(store => store.cart)

    React.useEffect(() => {
        if (typeof window !== undefined) {
            persist.effectStore()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const Cart = () => {
        const presentProductNames = store.cart.map((value: productDetails) => value.name)
        if (presentProductNames.includes(product.name)) {
            toast({
                duration: 3000,
                isClosable: true,
                position: 'bottom-left',
                render: () => (<Chakra.Box bg="red.100" p={3} borderRadius={5} boxShadow={'md'} fontWeight={700}>👎 Product already in cart.</Chakra.Box>)
            })
        } else {
            dispatch(addProduct({
                name: product.name,
                price: product.price,
                image: product.image[0],
                details: product.details,
                url: `catalog/${catalogId}/${productId}`,
                quantity
            }))
            toast({
                duration: 3000,
                isClosable: true,
                position: 'bottom-left',
                render: () => (<Chakra.Box bg="whatsapp.200" p={3} borderRadius={5} boxShadow={'md'} fontWeight={700}>👍 Product added to Cart</Chakra.Box>)
            })
        }

    }
    return (
        <Chakra.Button isDisabled={isNaN(quantity)} _hover={{ opacity: .8 }} onClick={Cart} px={10} mx={2} bg="#0070f3" color="white">Add to cart</Chakra.Button>
    )
}

export default AddToCart