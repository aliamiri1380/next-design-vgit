import { Tooltip } from "@nextui-org/tooltip"

export default (props) => {
    return (
        <div className={`${props.wrapperClassName} ${props.center ? 'h-full flex items-center' : 'inline'} relative ${props.text ? 'pb-4' : ''}`}>
            {props.hoverText ? <Tooltip {...props.toolTipProps} content={props.hoverText}>
                <i className={`${props.className} fa-${props.type ?? 'regular'} fa-${props.children} bx-${props.size ?? 'sm'}`}>{props.text ? <span className='pr-1 text-sm'>{props.text}</span>:''}</i>
            </Tooltip> : 
            <i className={`${props.className} fa-${props.type ?? 'regular'} fa-${props.children} bx-${props.size ?? 'sm'}`}>{props.text ? <span className='pr-1 text-sm'>{props.text}</span>:''}</i>}
            {props.text && props.textPlacement == "bottom" ? <span className='absolute bottom-[-5px] right-[50%] translate-x-[50%] text-sm'>{props.text}</span> : ''}
        </div>
    )
}