import {Card, CardContent} from "@/components/ui/card";
import {Heart, Sparkles, Star, Users} from "lucide-react";

export default function Testimonials(){
    return (
        <section id="testimonials" className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Истории успеха</h2>
                    <p className="text-xl text-muted-foreground text-pretty">Тысячи пар уже нашли свою любовь в
                        Элизиуме</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent"/>
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-4 text-pretty">
                                "Элизиум действительно понял, кто мне подходит. Мы с Анной встречаемся уже полгода!"
                            </p>
                            <div className="flex items-center">
                                <div
                                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                                    <Users className="w-5 h-5 text-primary"/>
                                </div>
                                <div>
                                    <p className="font-semibold">Михаил, 28</p>
                                    <p className="text-sm text-muted-foreground">Москва</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent"/>
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-4 text-pretty">
                                "Психологический тест оказался невероятно точным. Мы с Дмитрием идеально подходим друг
                                другу!"
                            </p>
                            <div className="flex items-center">
                                <div
                                    className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                                    <Heart className="w-5 h-5 text-secondary"/>
                                </div>
                                <div>
                                    <p className="font-semibold">Елена, 25</p>
                                    <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg md:col-span-2 lg:col-span-1">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent"/>
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-4 text-pretty">
                                "После множества неудачных знакомств, Элизиум помог найти настоящую любовь. Спасибо!"
                            </p>
                            <div className="flex items-center">
                                <div
                                    className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                                    <Sparkles className="w-5 h-5 text-accent"/>
                                </div>
                                <div>
                                    <p className="font-semibold">Александр, 32</p>
                                    <p className="text-sm text-muted-foreground">Екатеринбург</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}