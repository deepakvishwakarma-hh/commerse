import * as  Chakra from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react"
interface props {
    setQuantity: Dispatch<SetStateAction<number>>, quantity: number, full?: boolean
}


const QuantityMeasure = ({ setQuantity, quantity, full }: props) => {

    const onChange = (event: any) => {
        if (parseInt(event.target.value) > 0) {
            setQuantity(parseInt(event.target.value))
        }
    }
    const QuantityUp = () => {
        setQuantity((prev) => prev + 1)
    }
    const QuantityDown = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1)
        }
    }

    return (
        <Chakra.Flex borderRadius={'0'} alignItems={'center'} maxW={full ? 'initial' : "300px"}>
            <Chakra.Button bg="whitesmoke" fontSize={20} borderRadius={'0'} onClick={QuantityDown}>-</Chakra.Button>
            <Chakra.Input border="whitesmoke 2px solid !important " borderRadius={'0'} onChange={onChange} value={quantity} type='number' />
            <Chakra.Button bg="whitesmoke" fontSize={20} borderRadius={'0'} onClick={QuantityUp}>+</Chakra.Button>
        </Chakra.Flex >
    )
}

export default QuantityMeasure