"use client"

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Circle from "./circle";
import { filter_keys } from "@/utils";

export default function App(props) {
  const motion = {
    variants: {
      enter: {
        y: 0,
        opacity: 1,
        height: "auto",
        transition: {
          height: {
            type: "spring",
            stiffness: 500,
            damping: 30,
            duration: 1,
          },
          opacity: {
            easings: "ease",
            duration: 1,
          },
        },
      },
      exit: {
        y: -10,
        opacity: 0,
        height: 0,
        transition: {
          height: {
            easings: "ease",
            duration: 0.25,
          },
          opacity: {
            easings: "ease",
            duration: 0.3,
          },
        },
      },
    },
  }
  return (
    <div className="px-4 my-4 accordion">
      <Accordion motionProps={motion} variant="splitted" {...filter_keys(props, ['items'])} className="text-sm">
        {props.items.map(r => <AccordionItem className="shadow-none border-1" {...(filter_keys(r, ['content']))} startContent={r.circle ? <Circle {...r.circle} /> : ''} title={<label className="font-bold text-lg">{r.title}</label>}>{r.content}</AccordionItem>)}
      </Accordion>
    </div>
  );
}
