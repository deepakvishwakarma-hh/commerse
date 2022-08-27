interface props { blocks: any }

import BlockContent from "@sanity/block-content-to-react"
import classes from './Block.module.css'
import * as Chakra from "@chakra-ui/react"

const BlockComp = ({ blocks }: props) => {
    return (
        <Chakra.Box>
            <BlockContent className={classes.block} blocks={blocks} />
        </Chakra.Box>
    )
}
export default BlockComp