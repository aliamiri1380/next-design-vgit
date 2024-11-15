"use client"

import Button from './button'
import '@/src/icons/boxicons/css/boxicons.min.css'
import { Badge } from '@nextui-org/badge'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default (props) => {
	const [active, setActive] = useState(window.location.pathname)
	const navigate = useNavigate()
	
	return (
		<footer id='footer-actions' className="rounded-2xl bg-white dark:bg-black max-w-full bg-opacity-80 dark:bg-opacity-80 z-50 shadow-md shadow-slate-100 dark:shadow-slate-900 backdrop-blur-sm backdrop-saturate-50 h-12 fixed px-3 bottom-4 left-[50%] w-fit" style={{ 'transform': 'translateX(-50%)' }}>
			<div className="flex gap-6 flex-row justify-center h-full items-center m-auto">
				{props.items.map(r => 
				<Badge content={props.count} showOutline={Boolean(props.count)} color="primary">
					<Button onClick={(e) => {
						r.redirect ? window.location.href = r.url :  navigate(r.url)
						setActive(r.url)
					}} size={props.size ?? 'sm'} isIconOnly className={active == r.url ? 'bg-blue-500 text-white' : 'bg-transparent'} radius="full">
						<i className={`bx bx-${r.name} bx-${props.size ?? 'sm'}`}></i>
					</Button>
				</Badge>
				)}
			</div>
		</footer>
	);
}