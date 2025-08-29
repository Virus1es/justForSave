import {Heart} from "lucide-react";

export default function Footer(){
    return (
        <footer className="border-t border-border py-12 px-4 bg-muted/30">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <Heart className="w-5 h-5 text-primary-foreground"/>
                        </div>
                        <span className="text-2xl font-bold text-foreground">Элизиум</span>
                    </div>
                    <div className="flex space-x-6 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-foreground transition-colors">
                            Политика конфиденциальности
                        </a>
                        <a href="#" className="hover:text-foreground transition-colors">
                            Условия использования
                        </a>
                        <a href="#" className="hover:text-foreground transition-colors">
                            Поддержка
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    <p>© 2024 Элизиум. Все права защищены. Создано с ❤️ для поиска настоящей любви.</p>
                </div>
            </div>
        </footer>
    )
}