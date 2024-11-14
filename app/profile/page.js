"use client"

import { useState } from 'react';
import { Input } from "@nextui-org/input";
import { component_render } from "../../utils";
import BgTornado from "../parts/svg/bg-tornado";
import Circle from "../parts/circle";
import Button from "../parts/button";
import Modal from "../parts/modal";
import { Badge } from "@nextui-org/badge";
import GridStack from "../parts/grid_stack";


export default () => {
    const [isOpen, _setOpen] = useState(false);
    const setOpen = (x) => {
        setTimeout(() => window['sheetOpen'] = x, 1000)
        _setOpen(x)
    }
    return <>
        <Modal isOpen={isOpen} setOpen={setOpen} content={component_render([
            {'content': [<Input label="نام فروشگاه" startContent={<i className="bx bx-store"></i>} />]}
        ])} />
        <div className="relative flex items-end justify-around h-[220px]">
            <div className="absolute w-full profile-header-animation h-full bg-no-repeat bg-cover" style={{backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(BgTornado())}")`}}>
            </div>
            <div className="translate-y-[-1.5pc] scale-[1.75]">
                <Badge content="" size="sm" color="success" shape="circle" placement="bottom-right">
                    <Circle src="https://ups.nomreyar.com/uploads/users_content/bmw.jpeg" />
                </Badge>
            </div>
        </div>
        <p className="font-bold text-center text-lg relative">علی امیری <Button onClick={() => setOpen(true)} className="absolute right-5 " size="sm" variant="bordered" isIconOnly><i className='bx bx-xs bx-pencil'></i></Button></p>
        <p className="text-center text-slate-500 text-sm" dir="ltr">@aliamiri</p>
        <div className='w-full profile-fav-btns'>
            <div className='m-auto w-fit mt-4'>
                <Button className="inline mx-2" isIconOnly={true} size='lg' variant='flat'><i className='bx bx-heart pt-[5px] bx-sm'></i></Button>
                <Button className="inline mx-2" isIconOnly={true} size='lg' variant='flat'><i className='bx bx-book pt-[5px] bx-sm'></i></Button>
                <Button className="inline mx-2" isIconOnly={true} size='lg' variant='flat'><i className='bx bx-user-voice pt-[5px] bx-sm'></i></Button>
                <Button className="inline mx-2" isIconOnly={true} size='lg' variant='flat'><i className='bx bx-brain pt-[5px] bx-sm'></i></Button>
            </div>
        </div>
        <p className="text-center text-slate-900 px-8 py-5 text-sm leading-7 text-justify">این یک متن درباره من آزمایشی است و قرار است برای تست استفاده شود این یک متن درباره من آزمایشی است و قرار است برای تست استفاده شود این یک متن درباره من آزمایشی است و قرار است برای تست استفاده شود این یک متن درباره من آزمایشی است و قرار است برای تست استفاده شود</p>
        <GridStack component={<Button></Button>} fill width="50px" items={[,
        ]} />
    </>
    // return component_render([
    //     {"width":"50px","content": [<Input />,<Input />, <Input />, <Input />]},
    //     {"width":"100px","content": [<Input />,<Input />, <Input />]},
    //     {"width":"150px","content": [<Input />,<Input />]},
    //     {"width":"200px","content": [<Input />]},
    // ])
}