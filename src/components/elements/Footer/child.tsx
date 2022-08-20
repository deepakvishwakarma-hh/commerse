import * as Chakra from "@chakra-ui/react"

const Child = ({ heading, links }: { heading: string; links: string[] }) => {
    return (
        <Chakra.Box my={2} pl={5}>
            <Chakra.Heading fontSize={17} py={2} as="h5" textTransform={'uppercase'}>{heading}</Chakra.Heading>
            {links.map((value: string, index: number) => <Chakra.Text fontWeight={500} textTransform="capitalize" color={'gray'} my={1} key={index}> {value}</Chakra.Text>)}
        </Chakra.Box>
    )
}



export default Child
