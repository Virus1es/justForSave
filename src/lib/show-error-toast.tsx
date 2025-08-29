import {toast} from "sonner";
import {AlertCircle} from "lucide-react";
import React from "react";

export const showErrorToast = (message: string) => {
    toast(message, {
        icon: <AlertCircle className="h-5 w-5 text-destructive" />,
        classNames: {
            toast: "group toast group-[.toaster]:bg-destructive group-[.toaster]:text-destructive-foreground group-[.toaster]:border-destructive group-[.toaster]:shadow-lg",
            title: "text-destructive-foreground font-semibold text-lg",
            description: "text-destructive-foreground/80 text-base",
            actionButton: "bg-destructive-foreground text-destructive",
            cancelButton: "bg-muted text-muted-foreground",
        },
        duration: 4000,
    });
};