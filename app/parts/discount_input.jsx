import { Input } from "@nextui-org/input"
import InputWithButton from "./input_with_button"

export default (props) => {
    return <div className="w-full">
        <InputWithButton size="sm" label="کد تخفیف داری؟" buttonProps={{'color': 'primary', 'size': 'sm'}} icon={'badge-percent'} {...props} />
    </div>
}