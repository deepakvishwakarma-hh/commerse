interface props {
    sizes: { name: string }[]
}

import { _useContext } from "../../../context";
import * as Chakra from "@chakra-ui/react";
import { ChangeEvent, FunctionComponent } from "react";

const Sizes: FunctionComponent<props> = (props) => {

    const store = _useContext()

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        store.reducers?.product.reducer({ type: 'size', payload: event.target.value })
    }

    return (
        <Chakra.Select onChange={onChange} maxW="300px" defaultValue={props.sizes[0].name} >
            {props.sizes.map((item => <option value={item.name} key={item.name}>{item.name}</option>))}
        </Chakra.Select>
    )
}
export default Sizes
