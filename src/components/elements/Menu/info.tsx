import Item from './_item'
import * as Chakra from '@chakra-ui/react'

const FakeData = [
    { name: "privacy policy", image: '' },
    { name: "payment policy", image: '' },
    { name: "shipping policy", image: '' },
    { name: "term  & condition", image: '' },
    { name: "return & refund policy", image: '' },
]

const InfoAccordionItem = () => {
    return (
        <Chakra.AccordionItem border="none">
            <Chakra.AccordionButton>
                <Chakra.Flex fontWeight={500} flex='500' textAlign='left' alignItems={'center'}>
                    <Chakra.Image src="/info.svg" alt="none" width={'20px'} height="20px" />
                    <Chakra.Text pl={5}>
                        Info
                    </Chakra.Text>
                </Chakra.Flex>
                <Chakra.AccordionIcon />
            </Chakra.AccordionButton>
            <Chakra.AccordionPanel pb={4} ml={4} borderLeft="2px lightgray solid">

                {FakeData.map((value: any, index: number) => {
                    return <Item key={index} {...value} />
                })}

            </Chakra.AccordionPanel>
        </Chakra.AccordionItem >
    )
}

export default InfoAccordionItem