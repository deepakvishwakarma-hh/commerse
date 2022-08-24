import Head from "next/head"
import { useState } from "react"
import { Form, User, AuthBoundry } from "../../src/components/elements/@Auth"

const Login = () => {
    const [isValidUser, setValidUser] = useState<'validating' | boolean>('validating')
    return (
        <>
            <Head>
                <title>Redkart Authentication</title>
                <meta name="description" content="redkart authentication, phone number authentication" />
            </Head>
            <AuthBoundry set={setValidUser}>
                {isValidUser ? <User /> : <Form />}
            </AuthBoundry>
        </>
    )
}

export default Login