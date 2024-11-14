import { cloneElement } from "react";
import { filter_keys, render_children } from "@/utils";
export default (props) => {
  const fit_fill = props.fit ? 'fit' : props.fill ? 'fill' : 'fit'
  return (
    <div className={`grid gap-3 ${fit_fill == 'fill' ? 'm-auto' : ''} ${props.className}`} style={{'gridTemplateColumns': `repeat(auto-${fit_fill}, minmax(${props.width}, 1fr))`}}>
        {/* {render_children(props.children).map(r => <div className="flex flex-wrap justify-center max-w-max">{r}</div>)} */}
        
        {props.items.map(r => cloneElement(props.component, filter_keys(r, ['children']), r.children))}
    </div>
  );
}
