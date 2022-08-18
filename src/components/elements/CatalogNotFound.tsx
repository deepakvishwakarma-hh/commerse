interface props {
    catalog: string
}
import Link from "next/link"
import * as Chakra from "@chakra-ui/react"

const CatalogNotFound = ({ catalog }: props) => {
    return (
        <Chakra.Center flexDirection={'column'} bg="red.100" h="300px">

            <Chakra.Heading color="red.700">Catalog is Not Found</Chakra.Heading>

            <Chakra.Text py={1} color="red.700"> &apos;{catalog}&apos; is&apos;nt valid catlog </Chakra.Text>

            <Link href={'/'} passHref >
                <Chakra.Button my={5} px={5}>
                    ← Visit home
                </Chakra.Button>
            </Link>
        </Chakra.Center>

    )
}

export default CatalogNotFound
