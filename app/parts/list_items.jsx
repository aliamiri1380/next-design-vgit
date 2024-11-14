"use client"

import { Listbox, ListboxItem } from "@nextui-org/react";
import Icon from "./icon";

export default ({items}) => {
	return (
		<Listbox itemClasses={{base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80"}}>
			{items.map(r => <ListboxItem  className="pt-2" key="issues" endContent={<Icon size="xs" className="pt-1">chevron-left</Icon>} startContent={<Icon  className="pt-[2px]" size="xs">{r.icon}</Icon>}>
				{r.title}
			</ListboxItem>)}
		</Listbox>
	);
}