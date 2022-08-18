import { Flex, Text, Box, Image } from "@chakra-ui/react"
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { useEffect, useState } from "react"


import { urlFor } from "../../../lib/client"

import { client } from "../../../lib/client"

const CollectionAccordionItem = () => {

    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        const fetchCatalogs = async () => {
            const queryCatalog = '*[_type == "catalog"]';
            const catalog = await client.fetch(queryCatalog);
            setCatalog(catalog)
        }

        fetchCatalogs()

    }, [])


    return (
        <AccordionItem border="none">
            <h2>
                <AccordionButton>

                    <Flex fontWeight={500} flex='500' textAlign='left' alignItems={'center'}>


                        <Image src="/grid.svg" alt="" width={'20px'} height="20px" />


                        <Text pl={5}>
                            Collection
                        </Text>
                    </Flex>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4} ml={4} borderLeft="2px lightgray solid">

                {catalog.map((data: any, index: number) => {
                    return <Flex alignItems={'center'} my={2} key={index}>
                        <Image w="50px" h="50px" src={urlFor(data.image) as any} alt="" />
                        <Text fontSize={13} fontWeight={500} color="gray" textTransform={'capitalize'} px={2}>{data.name}</Text>
                    </Flex>
                })}


            </AccordionPanel>
        </AccordionItem>
    )
}

export default CollectionAccordionItem

