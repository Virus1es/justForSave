"use client";

import React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";

interface Props {
    label: string;
    isOpen: boolean;
    setOpen:  React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    contentClassName?: string;
}

export default function DialogOrDrawer({ label, isOpen, setOpen, children, contentClassName }: Props) {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return isDesktop
        ? ShowDialog({ label, isOpen, setOpen, children, contentClassName })
        : ShowDrawer({ label, isOpen, setOpen, children, contentClassName });
}

function ShowDialog({ label, isOpen, setOpen, children, contentClassName }: Props) {
    return (
        <Dialog
            backdrop="blur"
            scrollBehavior="outside"
            open={isOpen}
            onOpenChange={setOpen}
            className={contentClassName}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl">{label}</DialogTitle>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}

function ShowDrawer({ label, isOpen, setOpen, children, contentClassName }: Props) {
    return (
        <Drawer
            placement="bottom"
            open={isOpen}
            onOpenChange={setOpen}
            className={contentClassName}
        >
            <DrawerContent className="p-4">
                <DrawerHeader>
                    <DrawerTitle className="text-center text-2xl">
                        {label}
                    </DrawerTitle>
                </DrawerHeader>
                {children}
            </DrawerContent>
        </Drawer>
    );
}