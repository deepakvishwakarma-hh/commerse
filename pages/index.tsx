interface props {
  products: any,
  catalog: any[]
}
import { client } from "../src/lib/client"
import { Catalogs } from "../src/components/elements"
import { HomeLayout } from "../src/components/layouts"
import { GetServerSideProps } from "next"

const Home = ({ catalog }: props) => {
  return (
    <HomeLayout >
      <Catalogs catalog={catalog} />
    </HomeLayout>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const queryCatalog = '*[_type == "catalog"]';
  const catalog = await client.fetch(queryCatalog);
  return { props: { catalog } }
}
export default Home