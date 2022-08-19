import React from 'react'
import * as Chakra from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from '../../../redux'
import { addProduct, type productDetails } from '../../../redux/cart'

const AddToCart = ({ product }: any) => {

    const store = useAppSelector(store => store.cart)
    const dispatch = useAppDispatch()

    const toast = Chakra.useToast()

    const Cart = () => {
        const presentProductNames = store.map((value: productDetails) => value.name)
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
                quantity: 1,
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
        <Chakra.Button onClick={Cart} px={10} mx={2} bg="#0070f3" color="white" >Add to cart</Chakra.Button>
    )
}

export default AddToCart