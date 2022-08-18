import * as Chakra from "@chakra-ui/react"

const Child = ({ i, src, setIndex }: any) => {

    const enter = () => setIndex(i)
    const leave = () => setIndex(i)

    return (
        <Chakra.Image onMouseEnter={enter} onMouseLeave={leave} m={1} maxH={'100px'} src={src}></Chakra.Image>

    )
}
export default Child