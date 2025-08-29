export default function Work(){
    return (
        <section id="how-it-works" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Как это работает</h2>
                    <p className="text-xl text-muted-foreground text-pretty">Три простых шага к идеальным отношениям</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center">
                        <div
                            className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary-foreground">
                            1
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Пройдите тест</h3>
                        <p className="text-muted-foreground text-pretty">
                            Ответьте на вопросы о ваших ценностях, интересах и предпочтениях. Это займет всего 10 минут.
                        </p>
                    </div>

                    <div className="text-center">
                        <div
                            className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-secondary-foreground">
                            2
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Получите матчи</h3>
                        <p className="text-muted-foreground text-pretty">
                            Наш ИИ найдет людей с высокой совместимостью и представит их вам с объяснением причин
                            подбора.
                        </p>
                    </div>

                    <div className="text-center">
                        <div
                            className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-accent-foreground">
                            3
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Начните общение</h3>
                        <p className="text-muted-foreground text-pretty">
                            Знакомьтесь с рекомендованными людьми в безопасной среде и стройте значимые отношения.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}