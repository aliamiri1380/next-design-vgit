import { cloneElement } from "react";
import {Divider} from "@nextui-org/divider";
import { filter_keys } from "@/utils";

export default (props) => {
    return (
      <>
          {
            props.items.map((r,i) =>
              <>
                {cloneElement(props.component, filter_keys(r, ['children']), <>{props.component.props.children}{r.children}</>)}
                {
                  i+1 != props.items.length && props.divide ? <div className="p-5"><Divider /></div> : ''
                }
              </>
            )
          }
      </>
      );
  }  