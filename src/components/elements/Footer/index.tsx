
import Child from "./child"
import { Flex, Heading, Text, Box } from "@chakra-ui/react"


const Footer = () => {
    return (
        <Flex p={5} flexDir={['column', 'row', 'row', 'row']}>

            <Flex flex={1} flexDirection={'column'}>

                <Box my={2} pl={5}>
                    <Heading fontSize={17} py={2} as="h5" textTransform={'uppercase'}>Contact </Heading>
                    <Text fontWeight={500} textTransform="capitalize" color={'gray'} >4378538347534857</Text>
                </Box>
                <Child heading="information" links={['login', 'track order']} />

            </Flex>
            <Flex flex={1} flexDirection={'column'}>

                <Child heading="customer service" links={['contact us', 'return policy', 'privacy policy']} />
                <Child heading="payment methods" links={['cash on delivery']} />

            </Flex>

        </Flex>
    )
}

export default Footer

