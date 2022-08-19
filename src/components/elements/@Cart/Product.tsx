import { useState } from 'react'
import { removeProduct, type productDetails } from '../../../redux/cart'
import * as Chakra from '@chakra-ui/react'
import sanityClient from '@sanity/client';
import { useNextSanityImage } from 'next-sanity-image';
import { urlFor, configuredSanityClient } from "../../../lib/client"
import Img from 'next/image'
import { useAppDispatch } from '../../../redux';
interface props {
    data: productDetails
}

const Product = ({ data }: props) => {


    const dispatch = useAppDispatch()

    const imageProps: any = useNextSanityImage(
        configuredSanityClient,
        data.image
    );


    const [quantity, setQuantity] = useState<number>(data.quantity)
    const onChange = (event: any) => {
        setQuantity(parseInt(event.target.value))
    }
    const QuantityUp = () => {
        setQuantity(prev => prev + 1)
    }
    const QuantityDown = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    const remove = () => {
        dispatch(
            removeProduct(data.name)
        )
    }


    return (
        <Chakra.Flex alignItems={'center'} bg="white" py={5} px={5} my={1}>
            <Chakra.Flex flex={2} >
                <Chakra.Box bg="black" w="100px">
                    <Img  {...imageProps} loader={imageProps.loader} layout="intrinsic" width="100px" height="100px" objectFit="contain" />
                </Chakra.Box>
                <Chakra.Flex flexDirection={'column'} px={5}>
                    <Chakra.Box flex={1}>
                        <Chakra.Text fontWeight={700} textTransform="capitalize" py={2} fontSize={20}>{data.name}</Chakra.Text>
                    </Chakra.Box>
                    <Chakra.Flex flex={1} >
                        <Chakra.Button onClick={remove} bg="blackAlpha.100" >Remove</Chakra.Button>
                    </Chakra.Flex>
                </Chakra.Flex>
            </Chakra.Flex>
            <Chakra.Flex flex={1}>
                <Chakra.Button bg="blackAlpha.300" borderRadius={'50%'} onClick={QuantityUp}>+</Chakra.Button>
                <Chakra.Input mx={2} onChange={onChange} value={quantity} type='number' />
                <Chakra.Button bg="blackAlpha.300" borderRadius={'50%'} onClick={QuantityDown}>-</Chakra.Button>
            </Chakra.Flex>
            <Chakra.Center flex={1} flexDir='column'>
                <Chakra.Text fontWeight={700} fontSize={20}>₹{quantity * data.price}</Chakra.Text>
                <Chakra.Text color="gray" fontWeight={700} fontSize={10}> {quantity} x {data.price} = {quantity * data.price}</Chakra.Text>
            </Chakra.Center>

        </Chakra.Flex >
    )
}

export default Product