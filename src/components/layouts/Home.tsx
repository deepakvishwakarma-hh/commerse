
import { ReactComponentElement, useRef } from "react";
import * as Chakra from "@chakra-ui/react";
import { Navigation, Footer, Menu } from "../elements"

interface props {
    children: ReactComponentElement<any, any>,
}

const HomeLayout = ({ children }: props) => {
    const btnRef = useRef()
    const { isOpen, onOpen, onClose } = Chakra.useDisclosure()
    return (
        <>
            <Navigation {...{ onOpen, btnRef }} />
            <Menu   {...{ isOpen, onClose, btnRef }} />
            <Chakra.Box mt={'70px'}>
                {children}
            </Chakra.Box>
            <Footer />
        </>
    )
}
export default HomeLayout