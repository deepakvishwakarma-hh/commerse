import {
    Flex,
    Button, Text, Center, Input, Heading
} from '@chakra-ui/react'

import Router from 'next/router'

const Header = ({ onOpen, btnRef }: any) => {

    const onCartClickHandler = () => Router.push('/cart')
    const onWhatClickHandler = () => { }
    const onLogoClickHandler = () => { Router.push('/') }

    return (
        <Flex pos={'fixed'} width="100%" top={0} left={0} bg='white'
            boxShadow={'sm'}
            height="70px" px={5} flexDir="column" justifyContent={'center'}>
            <Flex alignItems="center">
                <Flex flex={1}>
                    <Button ref={btnRef} onClick={onOpen} mx={1} variant={'unstyled'} display="flex" justifyContent={'center'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </Button>
                </Flex>
                <Center flex={2} >

                    <Heading onClick={onLogoClickHandler} fontSize={20}>MPCart</Heading>
                </Center>
                <Flex flex={1} justifyContent='end'>
                    <Button mx={2} variant={'unstyled'} onClick={onWhatClickHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                    </Button>

                    <Button mx={1} variant={'unstyled'} onClick={onCartClickHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                    </Button>
                </Flex>
            </Flex>

            <Flex alignItems="center" bg="rgba(128, 128, 128, 0.300);"  >
            </Flex>
        </Flex >
    )
}
export default Header

