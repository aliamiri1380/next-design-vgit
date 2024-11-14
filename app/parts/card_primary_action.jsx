import { filter_keys } from "@/utils";
import {Card, CardFooter, CardBody} from "@nextui-org/card";
import { Image } from "@nextui-org/react";
import BgDoodle from "./svg/bg-doodle";

export default (props) => {
  // console.log(encodeURIComponent(BgDoodle().props.children[0]));
  
  return (
    <Card shadow="sm" className={`w-[150px] ${props.className}`} isPressable dir="ltr" onPress={props.onClick}>
        <CardBody className="overflow-visible w-[150px] p-3 perspective-container">
        <div className="absolute w-full h-full top-0 left-0"><div className="bg-fixed w-full h-full" style={{backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(BgDoodle())}")`,}}></div></div>
        <div className="w-[120px] m-auto perspective">
          <Image
              shadow="sm"
              radius="lg"
              alt={props.title}
              className="w-full object-cover w-fit min-h-[120px] max-h-[140px]"
              src={props.src}
          />
        </div>
        </CardBody>
        <CardFooter className="text-small justify-between">
        <b>{props.title}</b>
        <p className="text-default-500">{props.price}</p>
        </CardFooter>
    </Card>
  );
}