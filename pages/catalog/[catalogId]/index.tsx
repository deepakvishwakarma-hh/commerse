interface props {
    products: any,
    catalog: any[]
}
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { client } from "../../../src/lib/client"
import { CatalogNotFound, Products } from "../../../src/components/elements"
import { HomeLayout as Layout } from "../../../src/components/layouts";


const Catalog = ({ products, catalog }: props) => {

    const router = useRouter()
    const catalogId = router.query.catalogId as string

    if (catalog.length == 0) {
        return (
            <Layout>
                <CatalogNotFound catalog={catalogId} />
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

    const { catalogId } = context.query

    const queryCatalog = `*[_type == "catalog" && name == "${catalogId}"]`;
    const catalog = await client.fetch(queryCatalog);

    const queryProducts = `*[_type == "product" && references("${catalog[0]?._id}")]`;
    const products = await client.fetch(queryProducts);

    return {
        props: { products, catalog }
    }
}