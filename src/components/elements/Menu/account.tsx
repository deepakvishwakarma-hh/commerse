import Item from './_item';
import * as Chakra from '@chakra-ui/react'
const FakeData = [{ name: "login", image: '' }, { name: "my orders", image: '' }, { name: "reorder", image: '' }]



const AccountAccordionItem = () => {
    return (
        <Chakra.AccordionItem border="none">
            <Chakra.AccordionButton>
                <Chakra.Flex fontWeight={500} flex='500' textAlign='left' alignItems={'center'}>
                    <Chakra.Image src="/person.svg" alt="none" width={'20px'} height="20px" />
                    <Chakra.Text pl={5}>
                        Account
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

export default AccountAccordionItem