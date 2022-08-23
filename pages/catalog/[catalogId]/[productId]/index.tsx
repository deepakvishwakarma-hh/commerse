const frequentlyUsedStylings = {
    categories: {
        wrapper: { mb: 5 },
        title: {
            mb: 3,
            fontSize: 15,
            fontWeight: 600,
            color: "purple.500",
            fontFamily: 'monospace',
        },
    }
}

interface product {
    _id: string,
    image: any[],
    name: string,
    price: number,
    details: string,
    _updatedAt: string,
    slug: { _type: 'slug', current: string },
}

interface props { product: product[] }

import { useState } from "react"
import * as Chakra from "@chakra-ui/react"
import { type GetServerSideProps } from 'next'
import { client } from "../../../../src/lib/client"
import { NotFound } from '../../../../src/components/elements'
import { AddToCart } from "../../../../src/components/elements/@Cart"
import { HomeLayout as Layout } from '../../../../src/components/layouts'
import { Image as ImageComp, QuantityMeasure } from '../../../../src/components/elements/@Product'
import Head from "next/head"

const Page = (props: props) => {

    const Product = props.product[0]
    const [quantity, setQuantity] = useState<number>(1)

    if (props.product.length == 0) {
        return (
            <Layout>
                <NotFound title='Product is Not Found' discription='invalid slug' />
            </Layout>
        )
    }

    return (
        <>
            <Head>
                <title>{Product.name} | Red Kart</title>
                <meta title="description" content={Product.details} />
            </Head>
            <Layout>
                <Chakra.Grid mb={[20, 0]} bg="whitesmoke" w="100vw" gridTemplateColumns={['100vw', '100vw', "100vw", "1fr 1fr", "1fr 1fr"]} >
                    <ImageComp Product={Product} />

                    <Chakra.Box px={[5, 10, 15, 20]} py={10}>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text {...frequentlyUsedStylings.categories.title as any}>Name </Chakra.Text>
                            <Chakra.Heading fontSize={30}> {Product.name}</Chakra.Heading>
                        </Chakra.Box>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text {...frequentlyUsedStylings.categories.title as any}>Details </Chakra.Text>
                            <Chakra.Text>{Product.details} </Chakra.Text>
                        </Chakra.Box>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text {...frequentlyUsedStylings.categories.title as any}>Pricing </Chakra.Text>
                            <Chakra.Text fontSize={20} fontWeight={800}  > ₹ {Product.price} </Chakra.Text>
                        </Chakra.Box>

                        <Chakra.Box mb={5} {...frequentlyUsedStylings.categories.wrapper as any}>
                            <Chakra.Text {...frequentlyUsedStylings.categories.title as any}>Quantity </Chakra.Text>
                            <QuantityMeasure {...{ quantity, setQuantity }} />
                        </Chakra.Box>


                        <Chakra.Flex flexDir={['column', 'row']}>
                            <AddToCart product={Product} quantity={quantity} />
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
    const { productId } = context.query
    const queryProducts = `*[_type == "product" && slug.current == "${productId}"]{
        details,image,name,price,slug,_id,_updatedAt
    }`;
    const product = await client.fetch(queryProducts);
    return {
        props: { product }
    }
}
export default Page
