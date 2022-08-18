interface props {
  products: any,
  catalog: any[]
}
import { client } from "../src/lib/client"
import { Catalogs } from "../src/components/elements"
import { HomeLayout } from "../src/components/layouts"

const Home = ({ catalog }: props) => {
  return (
    <HomeLayout >
      <Catalogs catalog={catalog} />
    </HomeLayout>
  )
}


export const getServerSideProps = async () => {
  const queryCatalog = '*[_type == "catalog"]';
  const catalog = await client.fetch(queryCatalog);
  return { props: { catalog } }
}
export default Home