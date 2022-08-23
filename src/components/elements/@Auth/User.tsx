
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
        <Chakra.Center h="300px" bg="green.100" flexDir={'column'}>
            <Chakra.Text fontSize={20} fontWeight="bold">Logged in with : {userData?.phoneNumber}</Chakra.Text>
            <Chakra.Button onClick={onLogOutHandler} bg="red.100" mt={5} px={10}>Log Out</Chakra.Button>
        </Chakra.Center>
    )
}
export default User