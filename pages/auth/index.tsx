import { Form, User, AuthBoundry } from "../../src/components/elements/@Auth"
import { HomeLayout as Layout } from "../../src/components/layouts"
import { useState } from "react"


const Login = () => {

    const [isValidUser, setValidUser] = useState<'validating' | boolean>('validating')

    return (
        <Layout>
            <AuthBoundry set={setValidUser}>
                {isValidUser ? <User /> : <Form />}
            </AuthBoundry>
        </Layout >
    )
}

export default Login