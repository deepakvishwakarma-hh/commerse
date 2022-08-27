interface props {
    children: ReactComponentElement<any, any>,
}

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from "../elements"
import * as Chakra from "@chakra-ui/react";
import { ReactComponentElement, useRef } from "react";

const FooterDynamic = dynamic(() => import("../elements/Footer"), {
    suspense: true,
})
const MenuDynamic = dynamic(() => import("../elements/Menu"), {
    suspense: true,
})

const HomeLayout = ({ children }: props) => {

    const btnRef = useRef<HTMLButtonElement>(null)
    const { isOpen, onOpen, onClose } = Chakra.useDisclosure()

    return (
        <Chakra.Box pos="fixed" w="100%" h="100%" overflow={'auto'} >
            <Navigation {...{ onOpen, btnRef }} />

            <Suspense fallback={'loading...'}>
                <MenuDynamic {...{ isOpen, onClose, btnRef }} />
            </Suspense>

            <Chakra.Box mt={'70px'}>
                {children}
            </Chakra.Box>

            <Suspense fallback={'loading...'}>
                <FooterDynamic />
            </Suspense>
        </Chakra.Box >
    )
}
export default HomeLayout