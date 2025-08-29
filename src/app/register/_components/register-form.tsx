import React, {useState} from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {PasswordInput} from "@/components/ui/password-input";
import {showErrorToast} from "@/lib/show-error-toast";
import {Upload, X} from "lucide-react";



export default function RegisterForm(){
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        birthDate: "",
        gender: "",
        password: "",
        confirmPassword: "",
        region: "",
        city: "",
    })

    const [photos, setPhotos] = useState<File[]>([])
    const [photoPreviews, setPhotoPreviews] = useState<string[]>([])
    const [isDragOver, setIsDragOver] = useState(false)

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const processFiles = (files: File[]) => {
        if (photos.length + files.length > 6) {
            alert("Максимум 6 фотографий")
            return
        }

        const newPhotos = [...photos, ...files]
        setPhotos(newPhotos)

        files.forEach((file) => {
            const reader = new FileReader()
            reader.onload = (e) => {
                setPhotoPreviews((prev) => [...prev, e.target?.result as string])
            }
            reader.readAsDataURL(file)
        })
    }

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || [])
        processFiles(files)
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(false)

        const files = Array.from(e.dataTransfer.files).filter((file) => file.type.startsWith("image/"))

        if (files.length > 0) {
            processFiles(files)
        }
    }

    const removePhoto = (index: number) => {
        const newPhotos = photos.filter((_, i) => i !== index)
        const newPreviews = photoPreviews.filter((_, i) => i !== index)
        setPhotos(newPhotos)
        setPhotoPreviews(newPreviews)
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
                    <Label htmlFor="birthDate">Дата рождения</Label>
                    <Input
                        id="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange("birthDate", e.target.value)}
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
                <Label>Фотографии (до 6 штук)</Label>
                <div
                    className={`border-2 border-dashed rounded-lg p-4 transition-colors ${
                        isDragOver ? "border-primary bg-primary/5" : "border-muted-foreground/25"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handlePhotoUpload}
                        className="hidden"
                        id="photo-upload"
                    />
                    <label
                        htmlFor="photo-upload"
                        className="flex flex-col items-center justify-center cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Upload className="w-8 h-8 mb-2"/>
                        <span className="text-sm text-center">
                      {isDragOver ? "Отпустите файлы здесь" : "Перетащите фото сюда или нажмите для загрузки"}
                    </span>
                    </label>
                </div>

                {/* Превью загруженных фото */}
                {photoPreviews.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mt-4">
                        {photoPreviews.map((preview, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={preview || "/placeholder.svg"}
                                    alt={`Preview ${index + 1}`}
                                    className="w-full h-20 object-cover rounded-lg"
                                />
                                <button
                                    type="button"
                                    onClick={() => removePhoto(index)}
                                    className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-destructive/80"
                                >
                                    <X className="w-3 h-3"/>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
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