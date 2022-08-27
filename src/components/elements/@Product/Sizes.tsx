import * as Chakra from "@chakra-ui/react"

interface props {
    sizes: { name: string }[]
}

const Sizes = (props: props) => {
    return (
        <Chakra.Flex>
            {props.sizes.map((item => <Chakra.Text key={item.name} fontWeight={800} border="1px lightgray solid" p={2} mr={1}>{item.name}</Chakra.Text>))}
        </Chakra.Flex>
    )
}
export default Sizes