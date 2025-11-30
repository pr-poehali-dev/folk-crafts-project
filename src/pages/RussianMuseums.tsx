import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const museums = [
  {
    title: 'Государственный Русский музей',
    description: 'Крупнейший музей русского искусства в мире. Коллекция включает произведения живописи, скульптуры, графики и декоративно-прикладного искусства',
    url: 'http://rusmuseum.ru',
    location: 'Санкт-Петербург',
    specialty: 'Русское искусство',
    color: 'from-blue-100 to-indigo-100',
    featured: true
  },
  {
    title: 'Государственная Третьяковская галерея',
    description: 'Главный музей национального искусства России. Основан купцом Павлом Третьяковым в 1856 году',
    url: 'https://www.tretyakovgallery.ru',
    location: 'Москва',
    specialty: 'Живопись',
    color: 'from-red-100 to-orange-100',
    featured: true
  },
  {
    title: 'Екатеринбургский музей изобразительных искусств',
    description: 'Один из крупнейших художественных музеев Урала. Богатая коллекция русского и западноевропейского искусства',
    url: 'https://www.emii.ru',
    location: 'Екатеринбург',
    specialty: 'Изобразительное искусство',
    color: 'from-green-100 to-emerald-100',
    featured: false
  },
  {
    title: 'Русский музей: Детская площадка',
    description: 'Интерактивные игры и пазлы по изобразительному искусству для детей. Познавательно и увлекательно!',
    url: 'http://rusmuseum.ru/children',
    location: 'Онлайн',
    specialty: 'Для детей',
    color: 'from-purple-100 to-pink-100',
    featured: true,
    isInteractive: true
  }
];

export default function RussianMuseums() {
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
            Музеи России
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Ведущие художественные музеи и галереи России
          </p>
        </div>
      </header>

      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {museums.map((museum, idx) => (
            <Card 
              key={idx}
              className={`hover-lift bg-gradient-to-br ${museum.color} border-2 border-transparent hover:border-primary transition-all animate-fade-in ${
                museum.featured ? 'lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-md">
                    <Icon 
                      name={museum.isInteractive ? 'Gamepad2' : 'Building2'} 
                      size={28} 
                      className="text-primary" 
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    {museum.featured && (
                      <Badge className="bg-primary text-white">
                        <Icon name="Star" size={14} className="mr-1" />
                        Рекомендуем
                      </Badge>
                    )}
                    {museum.isInteractive && (
                      <Badge className="bg-accent text-white">
                        <Icon name="Sparkles" size={14} className="mr-1" />
                        Интерактив
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {museum.title}
                </CardTitle>
                <div className="flex gap-3 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    {museum.location}
                  </div>
                  <div className="flex items-center">
                    <Icon name="Tag" size={16} className="mr-1" />
                    {museum.specialty}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {museum.description}
                </p>
                <Button 
                  className="w-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-md"
                  onClick={() => window.open(museum.url, '_blank')}
                >
                  {museum.isInteractive ? 'Играть' : 'Посетить сайт'}
                  <Icon name="ExternalLink" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl animate-fade-in border-2 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Icon name="Lightbulb" size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">Совет для педагогов</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Используйте виртуальные туры и интерактивные материалы музеев для проведения уроков. 
                Это позволяет ученикам познакомиться с шедеврами искусства без посещения музея.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Особенно рекомендуем <strong>Детскую площадку Русского музея</strong> для работы с младшими школьниками - 
                там собраны обучающие игры и пазлы по произведениям искусства.
              </p>
            </div>
          </div>
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
