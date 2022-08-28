import * as Chakra from "@chakra-ui/react"

interface props {
    sizes: { name: string }[]
}

const Sizes = (props: props) => {
    return (
        <Chakra.Select maxW="300px" defaultValue={props.sizes[0].name} >
            {props.sizes.map((item => <option value={item.name} key={item.name}>{item.name}</option>))}
        </Chakra.Select>
    )
}
export default Sizes
