import Router from "next/router"
import Image from "next/image";
import * as Chakra from "@chakra-ui/react"
import { useNextSanityImage } from 'next-sanity-image';
import { configuredSanityClient } from "../../../lib/client"

const Product = ({ data }: any) => {

    const imageProps: any = useNextSanityImage(
        configuredSanityClient,
        data.image[0]
    );

    const onClickHandler = () => {
        Router.push(`${Router.asPath}/${data.slug.current}`)
    }

    return (
        <Chakra.Grid _hover={{ outline: '2px solid gray' }} cursor="pointer" onClick={onClickHandler}
            boxShadow={'sm'} gridTemplateRows={'300px 80px'} gridTemplateColumns={'auto'} mx={5} mb={10} overflow="hidden" >

            <Image  {...imageProps} loader={imageProps.loader} layout="intrinsic" width="500px" height="500px" objectFit="scale-down" alt="none" />

            <Chakra.Text textAlign={'center'} lineHeight="80px" bg='white' fontSize={20} fontWeight={700} textTransform={'capitalize'}>{data.name}</Chakra.Text>
        </Chakra.Grid>
    )
}
export default Product