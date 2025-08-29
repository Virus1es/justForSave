import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Brain, Sparkles, Users, Shield, Zap, Star, ArrowRight, Download } from "lucide-react"

export default function ElysiumLanding() {
  return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
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

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
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
                <Download className="w-5 h-5 mr-2" />
                Скачать приложение
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Пройти тест
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
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
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">ИИ-подбор</h3>
                  <p className="text-muted-foreground text-pretty">
                    Наши нейросети анализируют тысячи параметров совместимости, чтобы найти идеального партнера именно для
                    вас
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Психологический тест</h3>
                  <p className="text-muted-foreground text-pretty">
                    Научно обоснованное тестирование личности помогает понять ваши глубинные потребности и предпочтения
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Безопасность</h3>
                  <p className="text-muted-foreground text-pretty">
                    Проверенные профили, защищенные данные и безопасная среда для знакомств без рисков
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Как это работает</h2>
              <p className="text-xl text-muted-foreground text-pretty">Три простых шага к идеальным отношениям</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4">Пройдите тест</h3>
                <p className="text-muted-foreground text-pretty">
                  Ответьте на вопросы о ваших ценностях, интересах и предпочтениях. Это займет всего 10 минут.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-secondary-foreground">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4">Получите матчи</h3>
                <p className="text-muted-foreground text-pretty">
                  Наш ИИ найдет людей с высокой совместимостью и представит их вам с объяснением причин подбора.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-accent-foreground">
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

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Истории успеха</h2>
              <p className="text-xl text-muted-foreground text-pretty">Тысячи пар уже нашли свою любовь в Элизиуме</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    "Элизиум действительно понял, кто мне подходит. Мы с Анной встречаемся уже полгода!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-primary" />
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
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    "Психологический тест оказался невероятно точным. Мы с Дмитрием идеально подходим друг другу!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                      <Heart className="w-5 h-5 text-secondary" />
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
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    "После множества неудачных знакомств, Элизиум помог найти настоящую любовь. Спасибо!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                      <Sparkles className="w-5 h-5 text-accent" />
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

        {/* CTA Section */}
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
                <Download className="w-5 h-5 mr-2" />
                Присоединяйтесь к Элизиум
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Узнать больше
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-12 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" />
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
      </div>
  )
}
