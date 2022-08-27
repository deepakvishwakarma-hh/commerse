const frequentlyUsedStylings = {
    categories: {
        wrapper: { mb: 5 },
        title: {
            mb: 3,
            fontSize: 15,
            fontWeight: 600,
            color: "gray",
            fontFamily: 'monospace',
        },
    }
}


interface product {
    _id: string,
    image: any[],
    name: string,
    price: number,
    varient: string,
    hugeDetails: any[], // block type of Sanity
    _updatedAt: string,
    briefDetail: string,
    sizes: { name: string }[]
    slug: { _type: 'slug', current: string },
}

export interface varients {
    varient: string,
    slug: product['slug'],
    image: any
}

interface props { product: product, varients: varients[] }

import { useState } from "react"
import * as Chakra from "@chakra-ui/react"
import { type GetServerSideProps } from 'next'
import { client } from "../../../../src/lib/client"
import { NotFound } from '../../../../src/components/elements'
import { AddToCart, Product } from "../../../../src/components/elements/@Cart"
import { HomeLayout as Layout } from '../../../../src/components/layouts'
import { Image as ImageComp, Block, QuantityMeasure, Sizes, Varients } from '../../../../src/components/elements/@Product'
import Head from "next/head"

const Page = (props: props) => {

    const { product, varients } = props
    const [quantity, setQuantity] = useState<number>(1)

    if (props.product == null) {
        return (
            <Layout>
                <NotFound title='Product is Not Found' discription='invalid slug' />
            </Layout>
        )
    }

    const title = `${product.name} | Red Kart `

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={product.briefDetail} />
            </Head>

            <Layout>
                <Chakra.Grid borderBottom={'2px whitesmoke solid'} mb={[20, 0]} w="100%" gridTemplateColumns={['100vw', '100vw', "100vw", "1fr 1fr", "1fr 2fr"]} >

                    <Chakra.Box>
                        <ImageComp Product={product} />
                    </Chakra.Box>

                    <Chakra.Box px={[5, 10, 15, 15]} py={10} >

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text {...frequentlyUsedStylings.categories.title as any}>Name </Chakra.Text>
                            <Chakra.Heading fontSize={30}>{product.name}</Chakra.Heading>
                        </Chakra.Box>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text {...frequentlyUsedStylings.categories.title as any}>Brief Details </Chakra.Text>
                            <Chakra.Text>{product.briefDetail} </Chakra.Text>
                        </Chakra.Box>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text {...frequentlyUsedStylings.categories.title as any}>Huge Details </Chakra.Text>
                            <Block blocks={product.hugeDetails} />
                        </Chakra.Box>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text {...frequentlyUsedStylings.categories.title as any}>Pricing </Chakra.Text>
                            <Chakra.Text fontSize={20} fontWeight={800}  > ₹ {product.price} </Chakra.Text>
                        </Chakra.Box>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text {...frequentlyUsedStylings.categories.title as any}>Sizes </Chakra.Text>
                            <Sizes sizes={product.sizes} />
                        </Chakra.Box>
                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text {...frequentlyUsedStylings.categories.title as any}>Varients </Chakra.Text>
                            <Varients varients={varients} />
                        </Chakra.Box>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text {...frequentlyUsedStylings.categories.title as any}>Quantity </Chakra.Text>
                            <QuantityMeasure {...{ quantity, setQuantity }} />
                        </Chakra.Box>

                        <Chakra.Flex flexDir={['column', 'row']}>
                            <AddToCart product={product} quantity={quantity} />
                            <Chakra.Button my={[2, 0]} px={10} mx={2} border=" 2px solid #0070f3" color="#0070f3"  >Buy Now</Chakra.Button>
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
        briefDetail,hugeDetails,image,name,price,slug,varient,_id,_updatedAt,sizes[]->{name}
    }`);

    const product = response[0] ?? null

    const varients = response[0]
        ? await client.fetch(`*[_type == "product" && name == "${product?.name}"]{
            varient,slug,image[0]}`)
        : null

    return {
        props: { product, varients }
    }
}
export default Page
