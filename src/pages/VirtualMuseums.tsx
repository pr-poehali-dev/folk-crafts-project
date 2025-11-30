import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const museums = [
  {
    title: 'Google Art Project',
    description: 'Виртуальные туры по музеям мира',
    url: 'http://www.googleartproject.com',
    color: 'from-blue-100 to-cyan-100'
  },
  {
    title: 'Виртуальный музей живописи',
    description: 'Обширная коллекция произведений искусства',
    url: 'http://smallbay.ru/',
    color: 'from-purple-100 to-pink-100'
  },
  {
    title: 'Русский музей: виртуальный филиал',
    description: 'Онлайн-экспозиции Государственного Русского музея',
    url: 'https://rusmuseumvrm.ru/?lang=ru',
    color: 'from-indigo-100 to-blue-100'
  },
  {
    title: 'Лувр',
    description: 'Виртуальные экскурсии по знаменитому парижскому музею',
    url: 'http://louvre.historic.ru',
    color: 'from-amber-100 to-orange-100'
  },
  {
    title: 'ART&Photo',
    description: 'Галереи живописи и фото российских и зарубежных художников',
    url: 'http://www.artandphoto.ru/',
    color: 'from-green-100 to-emerald-100'
  },
  {
    title: 'Музей Рериха в Нью-Йорке',
    description: 'Коллекция произведений Николая Рериха',
    url: 'http://www.roerich.org/',
    color: 'from-violet-100 to-purple-100'
  },
  {
    title: 'Виртуальное открытие Кремля',
    description: 'Интерактивные туры по Московскому Кремлю',
    url: 'http://tours.kremlin.ru/#/ru&1_5',
    color: 'from-red-100 to-rose-100'
  },
  {
    title: 'Российский этнографический музей',
    description: 'Образы России. Коллекция народного искусства',
    url: 'http://culture.ru/atlas/object/526',
    color: 'from-teal-100 to-cyan-100'
  }
];

export default function VirtualMuseums() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-blue-50">
      <header className="ornament-border bg-white shadow-md py-8 mb-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mb-4 hover:bg-primary/10"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>
          <h1 className="text-5xl font-bold text-primary mb-4 text-center">
            Виртуальные музеи
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Путешествуйте по лучшим музеям мира не выходя из дома
          </p>
        </div>
      </header>

      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {museums.map((museum, idx) => (
            <Card 
              key={idx}
              className={`hover-lift bg-gradient-to-br ${museum.color} border-2 border-transparent hover:border-primary transition-all animate-fade-in overflow-hidden`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-md mb-3">
                    <Icon name="Globe" size={24} className="text-primary" />
                  </div>
                  <Icon name="ExternalLink" size={20} className="text-primary/60" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {museum.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {museum.description}
                </p>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  onClick={() => window.open(museum.url, '_blank')}
                >
                  Посетить
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="ornament-border bg-white py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-lg">
            © 2024 Народные промыслы • Образовательная медиатека
          </p>
        </div>
      </footer>
    </div>
  );
}
