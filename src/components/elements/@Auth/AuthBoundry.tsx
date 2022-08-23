/* eslint-disable react-hooks/exhaustive-deps */

// Future Prevent Certain Routes

import jwt from 'jsonwebtoken'
import { useEffect, useState } from "react"
import { getDoc, doc } from "firebase/firestore"
import { firestore } from "../../../../firebase"

interface props {
    children: React.ReactElement<any, any>,
    set?: any
}

const AuthBoundry = ({ children, set }: props) => {

    const [isValidUser, setValidUser] = useState<'validating' | boolean>('validating')

    const setResponse = (param: boolean) => {
        setValidUser(param)
        set(param)
    }

    useEffect(() => {

        const token = localStorage.getItem('token')
        const decode: any = token ? jwt.decode(token.toString()) : false
        if (decode) {
            console.log(decode)
            getDoc(doc(firestore, "users", decode?.phoneNumber)).then(() => {
                setResponse(true)

            }).catch(() => {
                setResponse(false)
            })
        } else {
            setResponse(false)
        }

    }, [])


    return (
        <>
            {children}
        </>
    )
}
export default AuthBoundry