"use client"

import {forwardRef} from "react";
import {useButton, Spinner} from "@nextui-org/react";
import { Ripple } from "@nextui-org/react";


const MyButton = forwardRef((props, ref) => {
  const {
    domRef,
    children,
    spinnerSize,
    spinner = <Spinner color="current" size={spinnerSize} />,
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
    getRippleProps,
  } = useButton({
    ref,
    ...props,
  });

  const {ripples, onClear} = getRippleProps();

console.log(ripples);


  return (
    <button ref={domRef} {...getButtonProps()}>
      {startContent}
      {isLoading && spinnerPlacement === "start" && spinner}
      {children}
      {isLoading && spinnerPlacement === "end" && spinner}
      {endContent}
      {!disableRipple && <Ripple ripples={ripples} onClear={onClear} />}
    </button>
  );
});

MyButton.displayName = "MyButton";

export default MyButton;