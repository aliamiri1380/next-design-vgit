import { Input } from "@nextui-org/input"
import Button from "./button"
import Icon from "./icon"

export default ({icon, onClick=()=>"", buttonProps={}, ...props}) => {
    return <div className="w-full">
        <Input {...props} endContent={<div className="h-full relative"><Button onClick={onClick} className="absolute left-[-5px] top-[3px]" isIconOnly {...buttonProps}><Icon>{icon}</Icon></Button></div>}  />
    </div>
}