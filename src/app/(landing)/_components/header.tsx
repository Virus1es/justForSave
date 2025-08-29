"use client";

import {Heart} from "lucide-react";
import {Button} from "@/components/ui/button";
import {LoginDialogOrDrawer} from "@/app/(landing)/_components/login-form";
import React, {useState} from "react";
import {ThemeToggle} from "@/components/theming/theme-toggle";

export default function Header() {
    const [open, setOpen] = useState(false);

    const linksData = [
        {
            title: "Возможности",
            link: "#features",
        },
        {
            title: "Как это работает",
            link: "#how-it-works",
        },
        {
            title: "Отзывы",
            link: "#testimonials",
        }
    ];

    return (
        <header
            className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-primary-foreground"/>
                    </div>
                    <span className="text-2xl font-bold text-foreground">Элизиум</span>
                </div>
                <nav className="flex items-center space-x-6">
                    {linksData.map((link, index) => (
                        <a key={index}
                           href={link.link}
                           className="hidden md:flex text-muted-foreground hover:text-foreground transition-colors">
                            {link.title}
                        </a>
                    ))}
                    <ThemeToggle />
                    <Button variant="outline" size="sm" onClick={() => { setOpen(true); }}>
                        Войти
                    </Button>
                </nav>
            </div>
            <LoginDialogOrDrawer isOpen={open} setOpen={setOpen}/>
        </header>
    )
}