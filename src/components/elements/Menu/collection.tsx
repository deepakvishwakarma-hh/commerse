import Router from 'next/router'
import * as Chakra from '@chakra-ui/react'
import { urlFor } from "../../../lib/client"
import { client } from "../../../lib/client"
import { useEffect, useState } from "react"


const CollectionAccordionItem = () => {

    const [catalogs, setCatalogs] = useState([])

    useEffect(() => {

        const fetchCatalogs = async () => {
            const queryCatalog = '*[_type == "catalog"]';
            const catalog = await client.fetch(queryCatalog);
            setCatalogs(catalog)
        }

        fetchCatalogs()

    }, [])

    return (
        <Chakra.AccordionItem border="none">
            <Chakra.AccordionButton>
                <Chakra.Flex fontWeight={500} flex='500' textAlign='left' alignItems={'center'}>
                    <Chakra.Image src="/grid.svg" alt="" width={'20px'} height="20px" />
                    <Chakra.Text pl={5}>
                        Collection
                    </Chakra.Text>
                </Chakra.Flex>
                <Chakra.AccordionIcon />
            </Chakra.AccordionButton>
            <Chakra.AccordionPanel pb={4} ml={4} borderLeft="2px lightgray solid">

                {catalogs.length == 0 &&
                    <Chakra.Center h="100px">
                        <Chakra.Spinner />
                    </Chakra.Center>
                }

                {catalogs.map((data: any, index: number) => {
                    return <Chakra.Flex cursor={'pointer'} alignItems={'center'} my={2} key={index} onClick={() => { Router.push(`/catalog/${data.slug.current}`) }}>
                        <Chakra.Image w="50px" h="50px" src={urlFor(data.image) as any} alt="" />
                        <Chakra.Text fontSize={13} fontWeight={500} color="gray" textTransform={'capitalize'} px={2}>{data.name}</Chakra.Text>
                    </Chakra.Flex>
                })}
            </Chakra.AccordionPanel>
        </Chakra.AccordionItem>
    )
}

export default CollectionAccordionItem

