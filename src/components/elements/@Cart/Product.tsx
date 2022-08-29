// polishing

interface props {
    data: product
}

const frequentlyUsedStylings = {
    wrapper: {
        justifyContent: 'start'
    }, title: {
        fontWeight: 500,
        color: 'gray',
        textTransform: 'capitalize',
        fontSize: 15
    }
}

import Link from 'next/link';
import * as Chakra from '@chakra-ui/react'
import { QuantityMeasure } from '../@Product';
import { _useContext } from '../../../context';
import { urlFor } from '../../../lib/client';
import { type product } from '../../../context';
import { type FunctionComponent } from 'react'

const Product: FunctionComponent<props> = (props) => {

    const { name, briefDetail, price, quantity, varient, url, size } = props.data

    const { reducers } = _useContext()

    const cropText = (str: string, length: number) => {
        return str.length > length ? str.slice(0, length) + '...' : str
    }

    const remove = () => {
        reducers?.cart.removeProduct({ type: 'remove', payload: name })
    }

    const setQuantity = (value: number) => {
        reducers?.cart.updateProduct({ type: "update", payload: { name, value } })
    }

    return (

        <Chakra.Grid p={[0, 5]} gridTemplateRows={['auto auto', 'auto']} gridTemplateColumns={[' 100px 1fr', ' 200px 1fr']} bg="white" mb={[10, 5]}>

            <Chakra.Center flexDirection="column">

                <Chakra.Box>
                    <Chakra.Image src={urlFor(varient.image[0]).height(200).width(200).url() as any} />

                </Chakra.Box>

            </Chakra.Center>

            <Chakra.Flex flexDirection="column" py={2} px={[5, 5]}>

                <Link href={url} passHref>
                    <Chakra.Center justifyContent={'start'}>
                        <Chakra.Heading _hover={{ textDecoration: 'underline' }} fontWeight={700} textTransform="capitalize" fontSize={[18, 25]}>{cropText(name, 30)}</Chakra.Heading>
                    </Chakra.Center>
                </Link>

                <Chakra.Center {...frequentlyUsedStylings.wrapper} display={['none', 'none', 'flex']}>
                    <Chakra.Text {...frequentlyUsedStylings.title as any}>{cropText(briefDetail, 100)} </Chakra.Text>
                </Chakra.Center>

                {size &&
                    <Chakra.Center {...frequentlyUsedStylings.wrapper}>
                        <Chakra.Text {...frequentlyUsedStylings.title as any}> <b style={{ color: "black" }}>size</b> : {size} </Chakra.Text>
                    </Chakra.Center>
                }

                <Chakra.Center {...frequentlyUsedStylings.wrapper}>
                    <Chakra.Text {...frequentlyUsedStylings.title as any}> <b style={{ color: "black" }}>quantity</b> : {quantity} </Chakra.Text>
                </Chakra.Center>

                <Chakra.Center {...frequentlyUsedStylings.wrapper}>
                    <Chakra.Text {...frequentlyUsedStylings.title as any}> <b style={{ color: "black" }}>varient name</b> : {varient.name} </Chakra.Text>
                </Chakra.Center>

                <Chakra.Center {...frequentlyUsedStylings.wrapper}>
                    <Chakra.Text fontWeight={700} textTransform="capitalize" fontSize={[13, 20]}>₹{price * quantity}</Chakra.Text>
                </Chakra.Center>

            </Chakra.Flex >

            <Chakra.GridItem colSpan={4} mt={2}>

                <Chakra.Flex flexDir={['column', 'row']}>
                    <QuantityMeasure {...{ quantity, setQuantity }} full />
                    <Chakra.Button border={"whitesmoke 2px solid !important"} borderTop={["none !important", 'whitesmoke 2px solid !important']} bg="transparent" color={'black'} borderRadius={0} w="100%" ml={[0, 5]} onClick={remove} >Remove</Chakra.Button>

                </Chakra.Flex>

            </Chakra.GridItem>

        </Chakra.Grid >
    )
}

export default Product