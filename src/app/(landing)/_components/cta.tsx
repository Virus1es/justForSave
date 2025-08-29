import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";

export default function CTA(){
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto text-center max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                    Готовы найти свою <span className="text-primary">вторую половинку</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                    Присоединяйтесь к тысячам счастливых пар, которые нашли любовь в Элизиуме
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="text-lg px-8 py-6">
                        <Download className="w-5 h-5 mr-2"/>
                        Присоединяйтесь к Элизиум
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                        Узнать больше
                    </Button>
                </div>
            </div>
        </section>
    )
}