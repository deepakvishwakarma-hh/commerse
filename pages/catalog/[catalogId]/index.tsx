interface varients {
    _key: string,
    _type: string,
    image: SanityImageObject[], name: string
}

export interface product {
    name: string,
    price: number,
    varients: varients[],
    slug: { _type: string, current: string }
}

interface props {
    products: product[],
    readonly catalog: any[] // not to usefull
}

import { useRouter } from 'next/router'
import * as Chakra from "@chakra-ui/react"
import { client } from "../../../src/lib/client"
import { type GetServerSideProps, type NextPage } from 'next'
import { NotFound, Products } from "../../../src/components/elements"
import { HomeLayout as Layout } from "../../../src/components/layouts";
import { type SanityImageObject } from '@sanity/image-url/lib/types/types'

const CatalogPage: NextPage<props> = ({ products, catalog }) => {

    const router = useRouter();
    const catalogId = router.query.catalogId as string;

    if (catalog.length == 0) {
        return (
            <Layout>
                <NotFound title={'Catalog is Not Found'} discription={' invalid slug'} />
            </Layout>
        )
    }

    const productList = products.map((item: any, index: number) => (
        <Products key={index} data={item} />
    ))

    return (
        <Layout>
            <Chakra.Box pb={10} px={[0, 10]} bg="whitesmoke">
                <Chakra.Heading as="h1" py={20} textAlign='center' textTransform={'capitalize'}>{catalogId}</Chakra.Heading>
                <Chakra.Grid bg='whitesmoke' gap={'2px'} gridTemplateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)', 'repeat(6, 1fr)']} justifyContent="center">
                    {productList}
                </Chakra.Grid>
            </Chakra.Box >

        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    const { catalogId } = context.query
    const queryCatalog = `*[_type == "catalog" && slug.current == "${catalogId}"]`;
    const catalog = await client.fetch(queryCatalog);

    const queryProducts = `*[_type == "product" && references("${catalog[0]?._id}")]{
        name, varients, price , slug
    }`;
    const products = await client.fetch(queryProducts);

    return {
        props: { products, catalog }
    }
}

export default CatalogPage