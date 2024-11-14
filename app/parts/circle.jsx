import { Avatar } from "@nextui-org/avatar"
import { Image } from "@nextui-org/react"

export default (props) => {
    return <Avatar {...props} ImgComponent={Image} style={{'background': props.bg, 'color': props.color}} size={props.size  ?? "lg"} />
}