export interface catalog {
  slug: any,
  name: string,
  image: SanityImageObject
}

interface props {
  catalog: catalog[]
}


import Head from "next/head"
import { NextPage } from "next"
import { client } from "../src/lib/client"
import { Flex, Box, Heading } from "@chakra-ui/react"
import { HomeLayout as Body } from "../src/components/layouts"
import Catalog from "../src/components/elements/Catalogs/catalog"
import { type SanityImageObject } from "@sanity/image-url/lib/types/types"

const HomePage: NextPage<props> = ({ catalog }) => {
  return (
    <>
      <Head>
        <title>RedKart - e-commerse</title>
        <meta name="description" content="local e-commerse website, best offers great deals" />
      </Head>
      <Body>
        <Box px={[0, 10]} bg="whitesmoke" pb={10}>
          <Heading as="h1" py={20} textAlign='center'>  Categories </Heading>
          <Flex flexWrap={'wrap'} justifyContent="center">
            {catalog.map((item: any, index: number) => (
              <Catalog key={index} data={item} />
            ))}
          </Flex>
        </Box>
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

export default HomePage
