import React, {useState} from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {PasswordInput} from "@/components/ui/password-input";
import { toast } from "sonner"
import {AlertCircle} from "lucide-react";

const showErrorToast = (message: string) => {
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

export default function RegisterForm(){
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        age: "",
        gender: "",
        password: "",
        confirmPassword: "",
        region: "",
        city: "",
    })

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            showErrorToast("Пароли не совпадают!");
            return
        }
        // Здесь будет логика регистрации
        console.log("Registration data:", formData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Электронная почта</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                    id="name"
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="age">Возраст</Label>
                    <Input
                        id="age"
                        type="number"
                        placeholder="25"
                        min="18"
                        max="100"
                        value={formData.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="gender">Пол</Label>
                    <Select value={formData.gender}
                            onValueChange={(value) => handleInputChange("gender", value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Выберите пол"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="male">Мужской</SelectItem>
                            <SelectItem value="female">Женский</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <PasswordInput
                    id="password"
                    placeholder="Создайте пароль"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="confirmPassword">Повторить пароль</Label>
                <PasswordInput
                    id="confirmPassword"
                    placeholder="Повторите пароль"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    required
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="region">Регион</Label>
                    <Select value={formData.region} onValueChange={(value) => handleInputChange("region", value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Выберите регион"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="moscow">Москва</SelectItem>
                            <SelectItem value="spb">Санкт-Петербург</SelectItem>
                            <SelectItem value="ekaterinburg">Екатеринбург</SelectItem>
                            <SelectItem value="novosibirsk">Новосибирск</SelectItem>
                            <SelectItem value="kazan">Казань</SelectItem>
                            <SelectItem value="other">Другой</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="city">Город</Label>
                    <Input
                        id="city"
                        type="text"
                        placeholder="Ваш город"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        required
                    />
                </div>
            </div>

            <Button type="submit" className="w-full">
                Создать аккаунт
            </Button>
        </form>
    )
}