declare global {
    interface Window {
        recaptchaVerifier: any,
        confirmationResult: any
    }
}

import jwt from "jsonwebtoken"
import { useState } from "react"
import * as Chakra from '@chakra-ui/react'
import { doc, setDoc } from "firebase/firestore";
import { RecaptchaVerifier } from "firebase/auth"
import { signInWithPhoneNumber } from "firebase/auth"
import { authentication, firestore } from "../../../../firebase"

const Form = () => {

    const initial = {
        isSendOTPTriggered: false,
        isVerifyOTPTriggered: false,
    }
    const [otp, setOtp] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [acessiblity, setAcessiblity] = useState(initial)
    const [isSendOtpBtnVisible, setSendOtpBtnVisiblity] = useState(true)

    const resetForm = () => {
        setSendOtpBtnVisiblity(true)
        setPhoneNumber('')
        setOtp('')
        setAcessiblity(initial)
    }

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recapcha-container', {
            'size': 'invisible',
            'callback': (response: any) => { }
        }, authentication);
    }

    const getOtp = (event: any) => {
        event.preventDefault()
        if (phoneNumber.length == 10) {
            setAcessiblity(prev => { return { ...prev, isSendOTPTriggered: true } })
            generateRecaptcha()
            let appVerifier = window.recaptchaVerifier
            signInWithPhoneNumber(authentication, `+91${phoneNumber}`, appVerifier)
                .then((result) => {
                    setSendOtpBtnVisiblity(false)
                    window.confirmationResult = result;
                })
                .catch((err) => {
                    alert(err);
                    resetForm()
                })
        } else {
            alert('Please put valid phone number!')
        }
    }

    const verifyOTP = () => {
        setAcessiblity(prev => { return { ...prev, isVerifyOTPTriggered: true } })
        let confirmationResult = window.confirmationResult;
        confirmationResult.confirm(otp)
            .then((result: any) => {
                const user = result.user;
                if (user) {
                    setDoc(doc(firestore, "cities", `${user.phoneNumber}`), {
                        uid: user.uid
                    }).then(() => { console.log('user saved successfully') }).catch((err) => alert(err))

                    const credentials = jwt.sign({ phoneNumber: user.phoneNumber, uid: user.uid }, 'loremipsumalehmad');
                    localStorage.setItem('token', credentials)

                    setAcessiblity(initial)
                    // Router.push('/admin')
                }
            }).catch((err: any) => {
                alert(err)
                resetForm()
            })
    }






    return (
        <Chakra.Box px={5} bg='whitesmoke' py={10}>
            <Chakra.Heading pb={5} textAlign={'center'}>Authenticate</Chakra.Heading>
            <Chakra.Center>
                <Chakra.FormControl maxW="300px ">
                    <Chakra.Input placeholder={"Mobile Number"} type="number" onChange={(event) => { setPhoneNumber(event.target.value.toString()) }} value={phoneNumber} />
                    <Chakra.FormHelperText mb={5}>Please don&apos;t include +91 (country code)</Chakra.FormHelperText>
                    {isSendOtpBtnVisible && <Chakra.Button variant={'unstyled'} onClick={getOtp} my={1} bg="#0070f3" color="white" w="100%"> {acessiblity.isSendOTPTriggered ? <Chakra.Spinner /> : 'Send OTP'} </Chakra.Button>}
                    {
                        !isSendOtpBtnVisible &&
                        <>
                            <Chakra.FormLabel mt={5}>Varify OTP</Chakra.FormLabel>
                            <Chakra.Input placeholder={"Enter your mobile number"} type="number" onChange={(event) => { setOtp(event.target.value.toString()) }} value={otp} />
                            <Chakra.Button variant={'unstyled'} onClick={verifyOTP} my={2} bg="#0070f3" color="white" w="100%">{acessiblity.isVerifyOTPTriggered ? <Chakra.Spinner /> : 'Verify'}  </Chakra.Button>
                        </>
                    }
                    <Chakra.Button onClick={resetForm} variant={'unstyled'} my={1} color="#0070f3" border=" 2px solid #0070f3" w="100%">Reset Form </Chakra.Button>
                </Chakra.FormControl>
            </Chakra.Center>
            <Chakra.Box id={"recapcha-container"}></Chakra.Box>
        </Chakra.Box>
    )
}

export default Form