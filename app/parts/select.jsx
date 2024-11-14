"use client"
import {Select, SelectItem} from "@nextui-org/select";

export default function App(props) {
    return (
        <Select fullWidth {...props} size="sm">
            {['خالی'].concat(props.items).map((r) => (
                <SelectItem key={r == "خالی" ? "" : r}>{r}</SelectItem>
            ))}
        </Select>
    );
}