interface props { blocks: any } // type of block is'nt find in sanity
import classes from './Block.module.css'
import { FunctionComponent } from "react"
import BlockContent from "@sanity/block-content-to-react"
const BlockComp: FunctionComponent<props> = ({ blocks }) => <BlockContent className={classes.block} blocks={blocks} />
export default BlockComp