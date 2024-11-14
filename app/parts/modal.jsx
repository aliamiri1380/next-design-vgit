"use client"

import { ScrollShadow, Spacer } from '@nextui-org/react';
import Button from './button'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { useEffect, useState, cloneElement, memo } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

function App({ title, content, footer, closer, onAction, actionText = "انجام", children }) {
    if (typeof window == "undefined") {
        return ''
    }
    const width = window.innerWidth
    const [isOpen, setOpen] = useState(false);

    function changeHashWithoutScroll(hash) {
        scrollX = window.scrollX;
        scrollY = window.scrollY;
        window.location.hash = hash;
        window.scrollTo(scrollX, scrollY);
    }


    const onOpen = () => {
        setOpen(true)
        setTimeout(() => window['modalIsOpen'] = true, 500)
        changeHashWithoutScroll('#modal')
    }
    const onClose = () => {
        setOpen(false)
        setTimeout(() => window['modalIsOpen'] = false, 500)
        changeHashWithoutScroll('')
    }

    useEffect(() => {
        window.addEventListener("hashchange", function (e) {
            if (window['modalIsOpen'] == true && window.location.hash == "") {
                setOpen(false)
            }

            return e.preventDefault();
        }, false);
    }, []);


    return <>
        {cloneElement(children, { onClick: onOpen })}
        {width < 600 ?
            <BottomSheet open={isOpen} transitionDuration={200} snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight * 0.5, maxHeight - 50]} onDismiss={onClose}>
                <div className="text-center font-bold text-lg px-3">{title}</div>
                <div className='p-3'>{content}</div>
                <div className='px-3 h-[50px] fixed bottom-2 w-full left-0 '>
                    {closer ? cloneElement(closer, {onPress: onClose}) : ''}
                    {footer ? footer : ''}
                </div>
                <Spacer y={20} />
            </BottomSheet> :
            <Modal isOpen={isOpen} scrollBehavior='inside' onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <ScrollShadow><ModalBody>{content}</ModalBody></ScrollShadow>
                            <ModalFooter dir='rtl'>
                                {closer ? cloneElement(closer, {onPress: onClose}) : ''}
                                {footer ? footer : ''}
                                {
                                    onAction ? 
                                    <>
                                        <Button color="danger" variant="light" onPress={onClose}>بستن</Button>
                                        <Button color="primary" onPress={onAction ?? onClose}>{actionText}</Button>
                                    </>
                                    : ''
                                }
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>}
    </>

}

export default memo(App)
