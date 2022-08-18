import Router from "next/router"
import * as Chakra from "@chakra-ui/react"
import { urlFor } from "../../../lib/client"
const Catalogs = ({ catalog }: any) => {
    return (
        <Chakra.Box px={10} bg="whitesmoke">
            <Chakra.Heading as="h1" py={20} textAlign='center'>  Categories </Chakra.Heading>
            <Chakra.Grid gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} flexWrap={'wrap'} justifyContent="center">
                {[...catalog, ...catalog, ...catalog, ...catalog].map((item: any, index: number) => (
                    <Chakra.Grid onClick={() => { Router.push(`/catalog/${item.slug.current}`) }} boxShadow={'sm'} gridTemplateRows={'300px 80px'} gridTemplateColumns={'auto'} key={index} mx={5} mb={10} overflow="hidden"  >
                        <Chakra.Image objectFit={'cover'} src={urlFor(item.image) as any} />
                        <Chakra.Text textAlign={'center'} lineHeight="80px" bg='white' fontSize={20} fontWeight={700} textTransform={'capitalize'}>{item.name}</Chakra.Text>
                    </Chakra.Grid>
                ))}

            </Chakra.Grid>
        </Chakra.Box>
    )
}
export default Catalogs



