import {Card, CardContent} from "@/components/ui/card";
import {Heart, Sparkles, Star, Users} from "lucide-react";
import React from "react";

interface FeedbackProps {
    name: string;
    age: number;
    city: string;
    text: string;
}

function Feedback({ name, age, city, text}: FeedbackProps) {
    return(
        <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
                <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-orange-300 text-orange-300"/>
                    ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                    "{text}"
                </p>
                <div className="flex items-center">
                    <div
                        className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <Users className="w-5 h-5 text-primary"/>
                    </div>
                    <div>
                        <p className="font-semibold">{name}, {age}</p>
                        <p className="text-sm text-muted-foreground">{city}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default function Testimonials(){

    const feedbacksData = [
        {
            name: "Михаил",
            age: 28,
            city: "Москва",
            text: "Элизиум действительно понял, кто мне подходит. Мы с Анной встречаемся уже полгода!",
        },
        {
            name: "Елена",
            age: 25,
            city: "Санкт-Петербург",
            text: "Психологический тест оказался невероятно точным. Мы с Дмитрием идеально подходим друг другу!",
        },
        {
            name: "Александр",
            age: 32,
            city: "Екатеринбург",
            text: "После множества неудачных знакомств, Элизиум помог найти настоящую любовь. Спасибо!",
        },
    ];

    return (
        <section id="testimonials" className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Истории успеха</h2>
                    <p className="text-xl text-muted-foreground text-pretty">Тысячи пар уже нашли свою любовь в
                        Элизиуме</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {feedbacksData.map((feedback, index) => (
                        <Feedback
                            key={index}
                            name={feedback.name}
                            age={feedback.age}
                            city={feedback.city}
                            text={feedback.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}