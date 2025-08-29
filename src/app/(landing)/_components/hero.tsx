import {Badge} from "@/components/ui/badge";
import {ArrowRight, Download, Sparkles} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Hero(){
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto text-center max-w-4xl">
                <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                    <Sparkles className="w-4 h-4 mr-2"/>
                    Революция в мире знакомств
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                    Добро пожаловать в <span className="text-primary">Элизиум</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
                    Идеальный матч через науку и технологии. Наши нейросети и психологические тесты находят вашу вторую
                    половинку с невероятной точностью.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="text-lg px-8 py-6">
                        <Download className="w-5 h-5 mr-2"/>
                        Скачать приложение
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                        Начать знакомиться
                        <ArrowRight className="w-5 h-5 ml-2"/>
                    </Button>
                </div>
            </div>
        </section>
    )
}