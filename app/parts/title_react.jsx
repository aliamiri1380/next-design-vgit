import { useNavigate } from 'react-router-dom';
import Button from './button'

export default (props) => {
  const navigate = useNavigate()
  return (
    ! props.horizontal ? 
    <div className="flex justify-between px-4 items-center">
      <p className="text-xl py-3 relative font-bold">{props.children}</p>
      <Button onClick={() => navigate(props.url)} isIconOnly variant="bordered" size="sm"><i className="h-max bx-sm bx bx-dots-horizontal-rounded"></i></Button>
    </div> : <div className='w-full text-center horizontal-title-container my-8'><p className={`horizontal-title ` + props.className}>{props.children}</p></div>
  );
}