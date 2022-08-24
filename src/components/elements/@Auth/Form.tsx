// Better Understanding of [Firebase Err , type , query]


declare global {
    interface Window {
        recaptchaVerifier: any, // custom 
        confirmationResult: any // custom 
    }
}

import jwt from "jsonwebtoken"
import { useState } from "react"
import Router from "next/router";
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

    const onResetForm = () => {
        Router.reload()
    }

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recapcha-container', {
            'size': 'invisible',
            'callback': () => { }
        }, authentication);
    }

    const getOtp = (event: any) => {
        event.preventDefault()
        if (phoneNumber.length == 10) {
            setAcessiblity(prev => { return { ...prev, isSendOTPTriggered: true } })
            generateRecaptcha() // recaptcha generated ;
            let appVerifier = window.recaptchaVerifier
            // sending OTP
            signInWithPhoneNumber(authentication, `+91${phoneNumber}`, appVerifier)
                .then((result) => {
                    setSendOtpBtnVisiblity(false)
                    window.confirmationResult = result;
                })
                .catch((err) => {
                    alert(err);
                    onResetForm()
                })
        } else {
            alert('Please put valid phone number!')
        }
    }

    const verifyOTP = () => {
        if (otp.length == 6) {
            setAcessiblity(prev => { return { ...prev, isVerifyOTPTriggered: true } })
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp)
                .then((result: any) => {
                    const user = result.user;
                    if (user) {
                        setDoc(doc(firestore, "users", `${user.phoneNumber}`), {
                            uid: user.uid
                        })
                            .then(() => {
                                onResetForm()
                            })
                            .catch((err) => alert(err))

                        const credentials = jwt.sign({ phoneNumber: user.phoneNumber, uid: user.uid }, 'loremipsumalehmad');
                        localStorage.setItem('token', credentials)

                        console.log(user)
                        setAcessiblity(initial)
                    }
                }).catch((err: any) => {
                    alert(err)
                    onResetForm()
                })
        } else {
            alert('OTP must be 6 number long!')
        }
    }


    return (
        <Chakra.Center pos="fixed" left={0} top={0} h="100%" w="100%"  >
            <Chakra.Box p={'5rem'} bg="gray.50" >
                <Chakra.Text as="h1" pb={5} textAlign={'center'} fontWeight={500}>Redkart</Chakra.Text>
                <Chakra.Heading as="h1" pb={5} textAlign={'center'}>Authentication</Chakra.Heading>
                <Chakra.Center>
                    <Chakra.FormControl maxW="300px ">
                        <Chakra.Input name="phone-number" placeholder={"Mobile Number"} type="number" onChange={(event) => { setPhoneNumber(event.target.value.toString()) }} value={phoneNumber} />
                        <Chakra.FormHelperText color="gray" mb={5}>Please don&apos;t include +91 (country code)</Chakra.FormHelperText>
                        {isSendOtpBtnVisible && <Chakra.Button fontSize={14} variant={'unstyled'} onClick={getOtp} my={1} bg="blackAlpha.800" color="white" w="100%"> {acessiblity.isSendOTPTriggered ? <Chakra.Spinner size="xs" /> : 'Send OTP'} </Chakra.Button>}
                        {
                            !isSendOtpBtnVisible &&
                            <>
                                <Chakra.FormLabel mt={5}>Varify OTP</Chakra.FormLabel>
                                <Chakra.Input name="otp" placeholder={"Otp"} type="number" onChange={(event) => { setOtp(event.target.value.toString()) }} value={otp} />
                                <Chakra.Button mb={5} fontSize={14} variant={'unstyled'} onClick={verifyOTP} my={2} bg="blackAlpha.800" color="white" w="100%">{acessiblity.isVerifyOTPTriggered ? <Chakra.Spinner size={'xs'} /> : 'Verify'}  </Chakra.Button>
                            </>
                        }
                        <Chakra.Button fontSize={14} onClick={onResetForm} variant={'unstyled'} my={1} color="blackAlpha.800" w="100%">Reset Form </Chakra.Button>
                    </Chakra.FormControl>
                </Chakra.Center>
                <Chakra.Box id={"recapcha-container"}></Chakra.Box>
            </Chakra.Box>
        </Chakra.Center>

    )
}

export default Form