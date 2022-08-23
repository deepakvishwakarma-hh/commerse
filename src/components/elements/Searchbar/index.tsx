import Result from "./Result"
import * as Chakra from "@chakra-ui/react"
import { client } from "../../../lib/client"
import { useState, useEffect, useMemo } from "react"



const Search = () => {

    const [products, setProducts] = useState<any[]>([])

    useEffect(() => {

        const _fetch = async () => {
            const catalog = await client.fetch(`* [_type == "catalog"]`);
            const product = await client.fetch(`*[_type == "product"]{ catalog->{name}, name, details, _type, slug, image}`);
            setProducts([...product, ...catalog])
        }

        _fetch()

    }, [])

    const [input, setInput] = useState<string>('')

    const inputChangeHandler = (event: any) => {
        setInput(event.target.value.toLowerCase())
    }

    const Results: any[] = useMemo(() => products.map((item: any, index: number) => {
        if (item?.name.toLowerCase().includes(input) && input !== '') {
            return <Result key={index} item={item} />
        } else { return undefined }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [input])


    return (
        <Chakra.Flex flexDir={'column'}>
            <Chakra.Input mb={5} borderRadius={5} size="sm" bg="whitesmoke" onChange={inputChangeHandler} type="text" tabIndex={1} placeholder="Search for products and  more" value={input} />

            {input !== '' && <Chakra.Flex border="whitesmoke solid 2px" borderTop={'none'} maxH="500px" overflowY={'auto'} borderRadius={5} p={2} flexDir={'column'} bg="white"  >
                {Results}
            </Chakra.Flex>}
        </Chakra.Flex >
    )
}

export default Search