"use client"

import type React from "react"


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import Header from "@/app/register/_components/header";
import LoginLink from "@/app/register/_components/login-link";
import RegisterForm from "@/app/register/_components/register-form";

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <Header/>

                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Создать аккаунт</CardTitle>
                        <CardDescription>Заполните информацию о себе для создания профиля</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RegisterForm/>

                        <LoginLink/>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
