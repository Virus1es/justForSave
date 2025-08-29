import {Card, CardContent} from "@/components/ui/card";
import {Brain, Shield, Zap} from "lucide-react";
import React from "react";

interface FeatCardProps {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    iconBgColor: string;
    iconColor: string;
}

function FeatCard({ title, description, icon: Icon, iconBgColor, iconColor }: FeatCardProps) {
    return(
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
                <div
                    className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8" style={{ color: iconColor }}/>
                </div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-muted-foreground text-pretty">
                    {description}
                </p>
            </CardContent>
        </Card>
    )
}

export default function Features(){
    const featuresData = [
        {
            title: "ИИ-подбор",
            description: "Наши нейросети анализируют тысячи параметров совместимости, чтобы найти идеального партнера именно для вас",
            icon: Brain,
            iconBgColor: "bg-primary/10",
            iconColor: "hsl(var(--primary))"
        },
        {
            title: "Психологический тест",
            description: "Научно обоснованное тестирование личности помогает понять ваши глубинные потребности и предпочтения",
            icon: Zap,
            iconBgColor: "bg-primary/10",
            iconColor: "hsl(var(--secondary))"
        },
        {
            title: "Безопасность",
            description: "Проверенные профили, защищенные данные и безопасная среда для знакомств без рисков",
            icon: Shield,
            iconBgColor: "bg-primary/10",
            iconColor: "hsl(var(--accent))"
        }
    ];


    return (
        <section id="features" className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                        Почему <span className="text-primary">Элизиум</span>?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Мы используем передовые технологии для создания глубоких и значимых связей
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {featuresData.map((feature, index) => (
                        <FeatCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            iconBgColor={feature.iconBgColor}
                            iconColor={feature.iconColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}


