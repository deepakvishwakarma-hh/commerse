interface props {
    setQuantity: Dispatch<SetStateAction<number>>,
    quantity: number,
    full?: boolean
}
import * as  Chakra from "@chakra-ui/react"
import { ChangeEvent, Dispatch, FunctionComponent, SetStateAction } from "react"

const QuantityMeasure: FunctionComponent<props> = ({ setQuantity, quantity, full }) => {

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (parseInt(event.target.value) > 0) {
            setQuantity(parseInt(event.target.value))
        }
    }

    const QuantityUp = () => {
        setQuantity(quantity + 1)
    }

    const QuantityDown = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
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