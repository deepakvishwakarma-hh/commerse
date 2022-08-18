import { HomeLayout as Layout } from '../../../../src/components/layouts'
import { type GetServerSideProps } from 'next'
import { client } from "../../../../src/lib/client"
const Page = ({ product }: any) => {



    console.log(product)

    return (
        <Layout>
            <div>hey</div>
        </Layout>
    )
}
export default Page


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { productId } = context.query
    const queryProducts = `*[_type == "product" && slug.current == "${productId}"]`;
    const product = await client.fetch(queryProducts);

    return {
        props: { product }
    }
}