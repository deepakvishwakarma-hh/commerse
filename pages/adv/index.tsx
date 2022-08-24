const Adv = () => {
    const resetLocalStorage = () => {
        if (typeof (Storage) !== "undefined") {
            // Code for localStorage
            localStorage.clear()
        } else {
            // No web storage Support.
            alert('localstorage not found in browser')
        }
    }

    return (

        <Chakra.Center h="100vh" flexDir={'column'} p={5}>

            <Chakra.Button onClick={resetLocalStorage} borderRadius={0} fontFamily="monospace">Reset LocalStorage</Chakra.Button>

            <Chakra.Text fontSize={12} p={5} fontWeight={500} bg="palegoldenrod" my={5}>
                This page for <i>Fix-Development-Error</i>. <br /> Some unconditional bugs can be shown.
            </Chakra.Text>

        </Chakra.Center>

    )
}
export default Adv

import * as Chakra from "@chakra-ui/react"