interface props {
    isOpen: boolean,
    onClose: () => void,
    btnRef: RefObject<HTMLButtonElement>
}

import Link from 'next/link'
import Img from "next/image"
import { RefObject } from 'react'
import CollectionAccordionItem from "./collection"
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Accordion, Text, Flex } from '@chakra-ui/react'

const Menu = ({ isOpen, onClose, btnRef }: props) => {
    return (
        <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef as any}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton marginRight={5} />
                <DrawerHeader my={3}></DrawerHeader>
                <DrawerBody>
                    <Accordion allowToggle>

                        <CollectionAccordionItem />

                        <Link href="/auth" passHref>
                            <Flex _hover={{ bg: 'blackAlpha.50' }} padding={'8px 16px'} fontWeight={500} flex='500' textAlign='left' alignItems={'center'}>
                                <Img loader={() => "/person.svg"} src="/person.svg" alt="none" width={'20px'} height="20px" />
                                <Text pl={5}>
                                    Account
                                </Text>
                            </Flex>
                        </Link>

                        <Link href="/cart" passHref>
                            <Flex _hover={{ bg: 'blackAlpha.50' }} cursor={'pointer'} padding={'8px 16px'} fontWeight={500} flex='500' textAlign='left' alignItems={'center'}>
                                <Img loader={() => "/cart.svg"} src="/cart.svg" alt="none" width={'20px'} height="20px" />
                                <Text pl={5}>
                                    Cart
                                </Text>
                            </Flex>
                        </Link>

                        <Link href="/" passHref>
                            <Flex _hover={{ bg: 'blackAlpha.50' }} cursor={'pointer'} padding={'8px 16px'} fontWeight={500} flex='500' textAlign='left' alignItems={'center'}>
                                <Img loader={() => "/home.svg"} src="/home.svg" alt="none" width={'20px'} height="20px" />
                                <Text pl={5}>
                                    Home
                                </Text>
                            </Flex>
                        </Link>

                        <Link href="/hey" passHref>
                            <Flex _hover={{ bg: 'blackAlpha.50' }} padding={'8px 16px'} fontWeight={500} flex='500' textAlign='left' alignItems={'center'}>
                                <Img loader={() => "/contact.svg"} src="/contact.svg" alt="none" width={'20px'} height="20px" />
                                <Text pl={5}>
                                    Contact
                                </Text>
                            </Flex>
                        </Link>

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