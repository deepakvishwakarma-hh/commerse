interface props {
    products: any,
    catalog: any[]
}
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { client } from "../../../src/lib/client"
import { NotFound, Products } from "../../../src/components/elements"
import { HomeLayout as Layout } from "../../../src/components/layouts";


const Catalog = ({ products, catalog }: props) => {

    const router = useRouter()
    const catalogId = router.query.catalogId as string

    if (catalog.length == 0) {
        return (
            <Layout>
                <NotFound title={'Catalog is Not Found'} discription={' invalid slug'} />
            </Layout>
        )
    }

    return (
        <Layout>
            <Products catalog={catalogId} product={products} />
        </Layout>
    )
}

export default Catalog

export const getServerSideProps: GetServerSideProps = async (context) => {

    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    const { catalogId } = context.query

    const queryCatalog = `*[_type == "catalog" && slug.current == "${catalogId}"]`;
    const catalog = await client.fetch(queryCatalog);

    const queryProducts = `*[_type == "product" && references("${catalog[0]?._id}")]`;
    const products = await client.fetch(queryProducts);

    return {
        props: { products, catalog }
    }
}