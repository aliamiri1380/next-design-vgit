import { Tooltip } from '@nextui-org/tooltip'
import Button from './button'
import { Image } from '@nextui-org/image'
import Circle from './circle'

export default (props) => {
    return (
        <div className={`w-full max-w-[400px] min-h-[150px] rounded-lg ${props.className}`}>
            <div className='w-full h-full'>
                <Image src="https://i.ytimg.com/vi/k2DI6bnHRG8/hq720.jpg?sqp=-oaymwEpCNAFEJQDSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGhACGAYgATgBQAE=&rs=AOn4CLC-oJxMxr836Cp3TSnrjVoTYE6aNg" />
            </div>
            <div className='py-3 flex items-center'>
                <div>
                    <Circle size="md" src="https://yt3.ggpht.com/ytc/AIdro_k4yi2OLazTfxkxuvjM5-fCUhD5dFRiPUk4LI377Vjfow=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                <div className='pr-2 relative grow'>
                    <Button className="absolute left-0 " size="sm" variant="light" isIconOnly><i className='bx bx-sm bx-dots-horizontal-rounded'></i></Button>
                    <p>متن آزمایشی من رو ببینید ...</p>
                    <p className='text-slate-500 text-xs pt-1'>چنل علی امیری</p>
                    <p className='text-slate-500 text-xs video-card-details'>40M بازدید </p>
                    <p className='text-slate-500 text-xs video-card-details'>1 روز پیش</p>
                </div>
            </div>
        </div>
    )
}