import {User, Link} from "@nextui-org/react";
import Rating from "./rating";

export default ({name=null, pic=null, username=null, rate=null, className='', date=null, children}) => {
    
    return (
    <div className={`w-full px-3 ${className}`}>
        <div className="h-full h-12 flex justify-between items-center">
            <User name={name} description={username ? (<span dir="ltr" href={process.env.USER_URL_PATH.replace("USERNAME", username)} size="sm" isExternal>@{username}</span>) : ''} avatarProps={{src: pic}} />
            <div className="text-left">
                {rate ? <Rating filled={rate} readOnly size="1pc" /> : ''}
                {date ? <span className="text-xs block pt-2 text-slate-500">{date}</span> : ''}
            </div>
        </div>
        <p className="w-full leading-7 text-base pt-1">
            {children}
        </p>
    </div>
    )
}