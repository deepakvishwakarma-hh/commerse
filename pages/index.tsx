interface props {
  products: any,
  catalog: any
}


import { client } from "../src/lib/client"
import { HomeLayout } from "../src/components/layouts"

const Home = ({ products, catalog }: props) => {

  console.log(catalog)

  return (
    <HomeLayout catalog={catalog}>
      <div>




      </div>
    </HomeLayout>
  )
}

export default Home

export const getServerSideProps = async () => {
  const queryProducts = '*[_type == "product"]';
  const products = await client.fetch(queryProducts);

  const queryCatalog = '*[_type == "catalog"]';
  const catalog = await client.fetch(queryCatalog);

  return {
    props: { products, catalog }
  }

}