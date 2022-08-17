import { Flex, Heading, Text, Box } from "@chakra-ui/react"


const Footer = () => {
    return (
        <Flex p={5}>

            <Flex flex={1} flexDirection={'column'}>

                <Box my={2} pl={5}>
                    <Heading fontSize={15} py={2} as="h5" textTransform={'uppercase'}>information</Heading>
                    <Text fontWeight={500} textTransform="capitalize" color={'gray'} >4378538347534857</Text>
                </Box>
                <Boxes heading="information" links={['login', 'track order']} />

            </Flex>
            <Flex flex={1} flexDirection={'column'}>

                <Boxes heading="customer service" links={['contact us', 'return policy', 'privacy policy']} />
                <Boxes heading="payment methods" links={['cash on delivery']} />

            </Flex>

        </Flex>
    )
}

export default Footer



// TRASNFER
const Boxes = ({ heading, links }: { heading: string; links: string[] }) => {
    return (
        <Box my={2} pl={5}>
            <Heading fontSize={15} py={2} as="h5" textTransform={'uppercase'}>{heading}</Heading>
            {links.map((value: string, index: number) => <Text fontWeight={500} textTransform="capitalize" color={'gray'} my={1} key={index}>• {value}</Text>)}
        </Box>
    )
}