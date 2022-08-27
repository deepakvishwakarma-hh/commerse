interface catalog {
  name: string,

}

interface props {
  catalog: any[]
}
import Head from "next/head"
import * as Chakra from '@chakra-ui/react'
import { client } from "../src/lib/client"
import { HomeLayout as Body } from "../src/components/layouts"
import Catalog from "../src/components/elements/Catalogs/catalog"

const Home = ({ catalog }: props) => {


  console.log(catalog)

  return (
    <>
      <Head>
        <title>RedKart - e-commerse</title>
        <meta name="description" content="local e-commerse website, best offers great deals" />
      </Head>
      <Body>
        <Chakra.Box px={[0, 10]} bg="whitesmoke" pb={10}>
          <Chakra.Heading as="h1" py={20} textAlign='center'>  Categories </Chakra.Heading>
          <Chakra.Flex flexWrap={'wrap'} justifyContent="center">
            {catalog.map((item: any, index: number) => (
              <Catalog key={index} data={item} />
            ))}
          </Chakra.Flex>
        </Chakra.Box>
      </Body>

    </>
  )
}

export const getStaticProps = async () => {

  // const query = '*[_type == "catalog"]{name,slug,"imageUrl": image.asset->url }'; 


  const query = '*[_type == "catalog"]{name,slug,image}';
  const catalog = await client.fetch(query);
  return {
    props: { catalog }
  };
};

export default Home
