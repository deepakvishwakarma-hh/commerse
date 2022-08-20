import Router from "next/router"
import * as Chakra from "@chakra-ui/react"

const Result = ({ item }: any) => {
    const onClick = () => {
        if (item._type == 'product') {
            Router.push(`/catalog/${item.catalog.name}/${item.slug.current}`)
        } else { Router.push(`/catalog/${item.name}`) }
    }

    return (
        <Chakra.Flex flexDirection={'column'} onClick={onClick} my={1} p={5} border="1px solid whitesmoke">
            <Chakra.Text fontSize={12} fontWeight={500} color="whatsapp.500" textTransform={'capitalize'}>{item._type} → </Chakra.Text>
            <Chakra.Text fontWeight={700} textTransform={'capitalize'}>{item.name}</Chakra.Text>
            <Chakra.Text fontSize={12} fontWeight={500} color="gray.400">{item?.details}</Chakra.Text>
        </Chakra.Flex>
    )
}

export default Result