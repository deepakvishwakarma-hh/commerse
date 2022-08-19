
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Accordion,
    Button, Box, Text, Flex, Image
} from '@chakra-ui/react'


import CollectionAccordionItem from "./collection"
import AccountAccordionItem from "./account"
import InfoAccordionItem from './info'
import Link from 'next/link'
// import Image from 'next/image'


const Menu = ({ isOpen, onClose, btnRef }: any) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef as any}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton marginRight={5} />
                <DrawerHeader my={3}></DrawerHeader>
                <DrawerBody>
                    <Accordion allowToggle>
                        <CollectionAccordionItem />
                        <AccountAccordionItem />
                        <InfoAccordionItem />

                        <Link href="/cart" passHref>
                            <Flex cursor={'pointer'} padding={'8px 16px'} fontWeight={500} flex='500' textAlign='left' alignItems={'center'}>
                                <Image src="/cart.svg" alt="none" width={'20px'} height="20px" />
                                <Text pl={5}>
                                    Cart
                                </Text>
                            </Flex>
                        </Link>


                        <Link href="/" passHref>
                            <Flex cursor={'pointer'} padding={'8px 16px'} fontWeight={500} flex='500' textAlign='left' alignItems={'center'}>
                                <Image src="/home.svg" alt="none" width={'20px'} height="20px" />

                                <Text pl={5}>
                                    Home
                                </Text>
                            </Flex>
                        </Link>

                        <Flex padding={'8px 16px'} fontWeight={500} flex='500' textAlign='left' alignItems={'center'}>

                            <Image src="/contact.svg" alt="none" width={'20px'} height="20px" />

                            <Text pl={5}>
                                Contact
                            </Text>
                        </Flex>

                        <Text mt={5} color={'gray.500'} fontSize={13} padding={'8px 16px'} >
                            RKC <br />
                            © All Right Reserved</Text>

                    </Accordion>

                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default Menu