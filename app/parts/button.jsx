import {Button} from "@nextui-org/button";

export default function App(props) {
  return <Button {...props} dir="ltr">{props.children}</Button>
}
