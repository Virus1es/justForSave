import React from "react";

interface StepProps {
    index: number;
    title: string;
    description: string;
    bgColor: string;
    fgColor: string;
}

function Step({ index, title, description, bgColor, fgColor}: StepProps) {
    return(
        <div className="text-center">
            <div
                className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold ${fgColor}`}>
                {index+1}
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-muted-foreground text-pretty">
                {description}
            </p>
        </div>
    )
}


export default function Work() {
    const stepsData = [
        {
            title: "Зарегистрируйте аккаунт",
            description: "Заполните основную информацию о себе, а также придумайте себе логин, чтобы не потерять ваши чаты.",
            bgColor: "bg-secondary",
            fgColor: "text-secondary-foreground",
        },
        {
            title: "Пройдите тест",
            description: "Ответьте на вопросы о ваших ценностях, интересах и предпочтениях. Это займет всего 10 минут. Это не обязательно однако повысит шанс встретить человека вашей мечты.",
            bgColor: "bg-primary",
            fgColor: "text-primary-foreground",
        },
        {
            title: "Получите матчи и начните общение",
            description: "Наш ИИ найдет людей с высокой совместимостью и представит их вам. Далее знакомьтесь с рекомендованными людьми в безопасной среде и стройте значимые отношения.",
            bgColor: "bg-secondary",
            fgColor: "text-secondary-foreground",
        }
    ];


    return (
        <section id="how-it-works" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Как это работает</h2>
                    <p className="text-xl text-muted-foreground text-pretty">Три простых шага к идеальным отношениям</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {stepsData.map((step, index) => (
                        <Step
                            key={index}
                            index={index}
                            title={step.title}
                            description={step.description}
                            bgColor={step.bgColor}
                            fgColor={step.fgColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}