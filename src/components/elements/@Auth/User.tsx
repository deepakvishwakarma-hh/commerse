
import jwt from "jsonwebtoken"
import Router from "next/router"
import * as  Chakra from "@chakra-ui/react"
import { useState, useEffect } from "react"

const User = () => {

    const [userData, setUserData] = useState<any>(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        const decode = token ? jwt.decode(token.toString()) : false
        if (decode) { setUserData(decode) }
    }, [])

    const onLogOutHandler = () => {
        localStorage.removeItem('token')
        Router.reload()
    }

    return (
        <Chakra.Center pos="fixed" left={0} top={0} h="100%" w="100%" flexDir={'column'}>
            <Chakra.Heading textAlign={'center'} fontSize={30} fontWeight="bold">Logged in with → {userData?.phoneNumber}</Chakra.Heading>
            <Chakra.Button onClick={onLogOutHandler} mt={5} fontSize={14} variant={'unstyled'} bg="blackAlpha.800" px="5rem !important" color="white"> Logout </Chakra.Button>
        </Chakra.Center>
    )
}
export default User