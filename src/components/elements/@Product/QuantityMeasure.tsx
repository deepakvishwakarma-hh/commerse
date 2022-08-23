import * as  Chakra from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react"
interface props {
    setQuantity: Dispatch<SetStateAction<number>>, quantity: number
}


const QuantityMeasure = ({ setQuantity, quantity }: props) => {

    const onChange = (event: any) => {
        setQuantity(parseInt(event.target.value))
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
        <Chakra.Flex borderRadius={'0'} mb={5} alignItems={'center'} borderLeft="5px whitesmoke solid" maxW="300px">
            <Chakra.Button fontSize={20} bg="none" borderY={"lightgray 2px solid !important"} borderLeft="lightgray 2px solid !important" borderRadius={'0'} onClick={QuantityUp}>+</Chakra.Button>
            <Chakra.Input border="lightgray 2px solid !important " borderRadius={'0'} onChange={onChange} value={quantity} type='number' />
            <Chakra.Button fontSize={20} bg="none" borderY={"lightgray 2px solid !important"} borderRight="lightgray 2px solid !important" borderRadius={'0'} onClick={QuantityDown}>-</Chakra.Button>
        </Chakra.Flex >
    )
}

export default QuantityMeasure