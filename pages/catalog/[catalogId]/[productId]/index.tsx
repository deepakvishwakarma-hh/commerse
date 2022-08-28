const frequentlyUsedStylings = {
    categories: {
        wrapper: { mb: 5 },
        title: {
            mb: 2,
            fontSize: 15,
            fontWeight: 600,
            color: "gray",
        },
    }
}

export interface varient {
    _key: string,
    _type: string,
    image: SanityImageObject[],
    name: string
}

export interface product {
    _id: string,
    name: string,
    price: number,
    varients: varient[],
    hugeDetails: any[]
    _updatedAt: string,
    briefDetail: string,
    sizes: { name: string }[]
    slug: { _type: 'slug', current: string },
}

interface props { product: product }

import Head from "next/head"
import { useEffect } from "react"
import * as Chakra from "@chakra-ui/react"
import { type GetServerSideProps } from 'next'
import { client } from "../../../../src/lib/client"
import { _useContext } from "../../../../src/context"
import { NotFound } from '../../../../src/components/elements'
import { SanityImageObject } from "@sanity/image-url/lib/types/types"
import { AddToCart } from "../../../../src/components/elements/@Cart"
import { HomeLayout as Layout } from '../../../../src/components/layouts'
import { Image as ImageComp, Block, QuantityMeasure, Sizes, Varients } from '../../../../src/components/elements/@Product'

const Page = (props: props) => {

    console.log(props.product)

    const store = _useContext();
    const { product } = props;
    const { quantity } = store.product;
    const title = `${product.name} | Red Kart`;
    const varientImages = product?.varients[store.product.varientIndex];

    const setQuantity: any = (payload: number) => {
        store.reducers?.product.reducer({ type: 'quantity', payload })
    }

    useEffect(() => {
        store.reducers?.product.reducer({ type: 'varient', payload: { ...product.varients[0] } })
        store.reducers?.product.reducer({ type: 'size', payload: product.sizes[0].name })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (props.product == null) {
        return (
            <Layout>
                <NotFound title='Product is Not Found' discription='invalid slug' />
            </Layout>
        )
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={product.briefDetail} />
            </Head>

            <Layout>
                <Chakra.Grid borderBottom={'2px whitesmoke solid'} mb={[20, 0]} w="100%" gridTemplateColumns={['100vw', '100vw', "100vw", "1fr 1fr", "1fr 2fr"]} >
                    <Chakra.Box>
                        <ImageComp varient={varientImages} />
                    </Chakra.Box>

                    <Chakra.Box px={[5, 10, 15, 15]} py={10} >

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Heading textTransform={'capitalize'} fontSize={30}>{product.name}</Chakra.Heading>
                        </Chakra.Box>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text {...frequentlyUsedStylings.categories.title as any}>Available Product Varients </Chakra.Text>
                            <Varients varients={product.varients} />
                        </Chakra.Box>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text color="gray" fontWeight={600}>{product.briefDetail} </Chakra.Text>
                        </Chakra.Box>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Block blocks={product.hugeDetails} />
                        </Chakra.Box>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text fontSize={23} fontWeight={800}  > ₹ {product.price}  </Chakra.Text>
                        </Chakra.Box>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text {...frequentlyUsedStylings.categories.title as any}>Available Sizes </Chakra.Text>
                            <Sizes sizes={product.sizes} />
                        </Chakra.Box>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text {...frequentlyUsedStylings.categories.title as any}>Quantity </Chakra.Text>
                            <QuantityMeasure {...{ quantity, setQuantity }} />
                        </Chakra.Box>

                        <Chakra.Flex flexWrap={'wrap'} >
                            <AddToCart product={product} />
                            <Chakra.Button m={2} px={10} border=" 2px solid #0070f3" color="#0070f3">Buy Now</Chakra.Button>
                        </Chakra.Flex>

                    </Chakra.Box>

                </Chakra.Grid>
            </Layout ></>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const { productId } = context.query;

    const response = await client.fetch(`*[_type == "product" && slug.current == "${productId}"]{
        briefDetail,hugeDetails,name,price,slug,_id,_updatedAt,sizes[]->{name},varients
    }`);

    const product = response[0] ?? null

    return {
        props: { product }
    }
}
export default Page
