import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
    , Flex, Text, Box
} from '@chakra-ui/react'
import Image from 'next/image'

//BUG
import Item from './_item';

const FakeData = [{ name: "login", image: '' }, { name: "my orders", image: '' }, { name: "reorder", image: '' }]

const AccountAccordionItem = () => {
    return (
        <AccordionItem border="none">
            <h2>
                <AccordionButton>
                    <Flex fontWeight={500} flex='500' textAlign='left' alignItems={'center'}>
                        {/* <Box bg="lightgray" w={'50px'} h={'50px'}></Box>
                         */}

                        <Image src="/person.svg" alt="none" width={'20px'} height="20px" />


                        <Text pl={5}>
                            Account
                        </Text>
                    </Flex>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4} ml={4} borderLeft="2px lightgray solid">

                {FakeData.map((value: any, index: number) => {
                    return <Item key={index} {...value} />
                })}

            </AccordionPanel>
        </AccordionItem >
    )
}

export default AccountAccordionItem