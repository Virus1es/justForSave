import {Heart} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Header() {
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
                <nav className="hidden md:flex items-center space-x-6">
                    <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                        Возможности
                    </a>
                    <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                        Как это работает
                    </a>
                    <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                        Отзывы
                    </a>
                    <Button variant="outline" size="sm">
                        Войти
                    </Button>
                </nav>
            </div>
        </header>
    )
}