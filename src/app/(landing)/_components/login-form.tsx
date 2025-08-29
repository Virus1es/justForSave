import React from "react";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import DialogOrDrawer from "@/components/dialog-or-drawer";

interface LoginDialogProps {
    isOpen: boolean;
    setOpen:  React.Dispatch<React.SetStateAction<boolean>>;
}


export function LoginDialogOrDrawer({ isOpen, setOpen }: LoginDialogProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // Здесь будет логика входа
        console.log("Login attempt:", { email, password })
    }

    return (
        <DialogOrDrawer label={"Войти в Элизиум"} isOpen={isOpen} setOpen={setOpen}>
            <form onSubmit={handleLogin} className="space-y-4 mt-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Электронная почта</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Пароль</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" className="w-full">
                    Войти
                </Button>
            </form>
            <div className="text-center mt-4 text-sm text-muted-foreground">
                Ещё нет аккаунта?{" "}
                <Link href="/register" className="text-primary hover:underline font-medium">
                    Создать
                </Link>
            </div>
        </DialogOrDrawer>
    )
}