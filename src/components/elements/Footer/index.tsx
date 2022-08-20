
import Child from "./child"
import * as Chakra from "@chakra-ui/react"

const Footer = () => {
    return (
        <Chakra.Flex p={5} flexDir={['column', 'row', 'row', 'row']}>
            <Chakra.Flex flex={1} flexDirection={'column'}>
                <Chakra.Box my={2} pl={5}>
                    <Chakra.Heading fontSize={17} py={2} as="h5" textTransform={'uppercase'}>Contact </Chakra.Heading>
                    <Chakra.Link color="gray" href="tel:8461833731">
                        +918461833731
                    </Chakra.Link> <br />
                    <Chakra.Link color="gray" href="mailto:gmtrkc@gmail.com">
                        gmtrkc@gmail.com
                    </Chakra.Link>
                </Chakra.Box>
                <Child heading="information" links={['login', 'register']} />
            </Chakra.Flex>
            <Chakra.Flex flex={1} flexDirection={'column'}>
                <Child heading="customer service" links={['return policy', 'privacy policy']} />
                <Child heading="payment methods" links={['cash on delivery']} />
            </Chakra.Flex>
        </Chakra.Flex>
    )
}

export default Footer

