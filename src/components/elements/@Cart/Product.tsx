
import Img from 'next/image'
import Link from 'next/link';
import { useState, useRef } from 'react'
import * as Chakra from '@chakra-ui/react'
import { QuantityMeasure } from '../@Product';
import { useNextSanityImage } from 'next-sanity-image';
import { configuredSanityClient } from "../../../lib/client"
import { _useContext } from '../../../context';

const Product = ({ data }: any) => {

    const store = _useContext()
    const elementRef = useRef<HTMLDivElement>(null)
    const dimensions = Chakra.useDimensions(elementRef)
    const [quantity, setQuantity] = useState<number>(data.quantity)

    const cropText = (str: string, length: number) => {
        return str.length > length ? str.slice(0, length) + '...' : str
    }

    const imageProps: any = useNextSanityImage(
        configuredSanityClient,
        data.varient.image[0]
    );

    const remove = () => {
        store.reducers?.cart.removeProduct({ type: 'remove', payload: data.name })
    }


    return (

        <Chakra.Grid p={[0, 5]} gridTemplateRows={['auto auto', 'auto']} gridTemplateColumns={[' 100px 1fr', ' 200px 1fr']} bg="white" mb={[10, 5]}>

            <Chakra.Center ref={elementRef} flexDirection="column">

                <Chakra.Box display={['none', 'block']}>
                    <Img  {...imageProps} loader={imageProps.loader} layout="intrinsic" width={dimensions?.contentBox.width ?? '200px'} height="200px" objectFit="fill" />
                </Chakra.Box>

                <Chakra.Box display={['block', 'none']}>
                    <Img  {...imageProps} loader={imageProps.loader} layout="intrinsic" width={dimensions?.contentBox.width ?? '100px'} height="200px" objectFit="fill" />
                </Chakra.Box>

            </Chakra.Center>

            <Chakra.Grid py={2} gridTemplateRows={['1fr 30px 30px', '1.5fr .5fr .5fr .5fr']} px={[5, 5]}>

                <Link href={data.url} passHref>
                    <Chakra.Center justifyContent={'start'}>
                        <Chakra.Heading _hover={{ textDecoration: 'underline' }} fontWeight={700} textTransform="capitalize" fontSize={[18, 25]}>{cropText(data.name, 30)}</Chakra.Heading>
                    </Chakra.Center></Link>

                <Chakra.Center justifyContent={'start'} display={['none', 'none', 'flex']}>
                    <Chakra.Text fontWeight={500} color="gray" textTransform="capitalize" fontSize={15}>{cropText(data.briefDetail, 100)} </Chakra.Text>
                </Chakra.Center>

                <Chakra.Center justifyContent={'start'}>
                    <Chakra.Text fontWeight={700} textTransform="capitalize" fontSize={[13, 20]}>₹{data.price * quantity}</Chakra.Text>
                </Chakra.Center>

                <Chakra.Center justifyContent={'start'} >
                    <Chakra.Text fontWeight={700} textTransform="capitalize" color="gray" fontSize={12}>Qty : {quantity}</Chakra.Text>
                </Chakra.Center>

            </Chakra.Grid>

            <Chakra.GridItem colSpan={4}>

                <Chakra.Flex flexDir={['column', 'row']}>
                    <QuantityMeasure {...{ quantity, setQuantity }} full />
                    <Chakra.Button border={"lightgray 2px solid !important"} borderTop={["none !important", 'lightgray 2px solid !important']} bg="transparent" color={'black'} borderRadius={0} w="100%" ml={[0, 5]} onClick={remove} >Remove</Chakra.Button>

                </Chakra.Flex>

            </Chakra.GridItem>

        </Chakra.Grid >
    )
}

export default Product