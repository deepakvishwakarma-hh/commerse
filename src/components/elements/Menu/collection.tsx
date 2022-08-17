import { Flex, Text, Box } from "@chakra-ui/react"
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

const FakeData = [{ name: 'shoes', image: "" }, { name: 'watch', image: "" }, { name: 'sharee', image: "" }, { name: 'shirt', image: "" }, { name: 'bags', image: "" }, { name: 'pants', image: "" }, { name: 'shoes', image: "" }, { name: 'shoes', image: "" },]

import Image from "next/image"


import Item from "./_item"


const CollectionAccordionItem = () => {




    return (
        <AccordionItem border="none">
            <h2>
                <AccordionButton>
                    {/* <Box fontWeight={500} flex='500' textAlign='left'>
                        Collection
                    </Box> */}


                    <Flex fontWeight={500} flex='500' textAlign='left' alignItems={'center'}>

                        {/* <Box bg="lightgray" w={'50px'} h={'50px'}>
                        </Box> */}

                        <Image src="/grid.svg" alt="none" width={'20px'} height="20px" />


                        <Text pl={5}>
                            Collection
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
        </AccordionItem>
    )
}

export default CollectionAccordionItem

