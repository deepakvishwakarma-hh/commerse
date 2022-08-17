import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
    , Flex, Text, Box
} from '@chakra-ui/react'
import Image from 'next/image'


const FakeData = [{ name: "return & refund policy", image: '' }, { name: "privacy policy", image: '' }, { name: "payment policy", image: '' }, { name: "shipping policy", image: '' }, { name: "term  & condition", image: '' }]

import Item from './_item'
const InfoAccordionItem = () => {
    return (
        <AccordionItem border="none">
            <h2>
                <AccordionButton>
                    <Flex fontWeight={500} flex='500' textAlign='left' alignItems={'center'}>

                        {/* <Box bg="lightgray" w={'50px'} h={'50px'}></Box> */}
                        <Image src="/info.svg" alt="none" width={'20px'} height="20px" />


                        <Text pl={5}>
                            Info
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

export default InfoAccordionItem