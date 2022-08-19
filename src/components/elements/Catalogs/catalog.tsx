import Router from "next/router"
import * as Chakra from "@chakra-ui/react"
import { client, urlFor, configuredSanityClient } from "../../../lib/client"

import { useNextSanityImage } from 'next-sanity-image';
import Image from "next/image";

const Catalog = ({ data }: any) => {

    const imageProps: any = useNextSanityImage(
        configuredSanityClient,
        data.image
    );

    const onClickHandler = () => {
        Router.push(`/catalog/${data.slug.current}`)
    }
    return (
        <Chakra.Grid _hover={{ outline: '2px solid gray' }} cursor="pointer" bg="white" onClick={onClickHandler} boxShadow={'sm'} gridTemplateRows={'300px 80px'} gridTemplateColumns={'auto'} mx={5} mb={10} overflow="hidden">
            <Image  {...imageProps} loader={imageProps.loader} layout="intrinsic" width="500px" height="500px" objectFit="scale-down" alt="none" />

            <Chakra.Text textAlign={'center'} lineHeight="80px" bg='white' fontSize={20} fontWeight={700} textTransform={'capitalize'}>{data.name}
            </Chakra.Text>
        </Chakra.Grid>
    )
}
export default Catalog 