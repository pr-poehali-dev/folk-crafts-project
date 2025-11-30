import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const sections = [
  {
    id: 'gallery',
    title: 'Галерея',
    icon: 'Image',
    description: 'Яркие моменты проведения художественно-развивающих программ, процесс работы и законченные предметы народных ремесел учеников',
    color: 'from-orange-100 to-amber-100',
    path: null
  },
  {
    id: 'history',
    title: 'История',
    icon: 'BookOpen',
    description: 'Исторические и фольклорные рассказы на темы мастер-классов',
    color: 'from-blue-100 to-indigo-100',
    path: null
  },
  {
    id: 'music',
    title: 'Музыка',
    icon: 'Music',
    description: 'Народные и авторские музыкальные произведения по темам программ',
    color: 'from-purple-100 to-pink-100',
    path: null
  },
  {
    id: 'literature',
    title: 'Учебно-методическая литература',
    icon: 'Library',
    description: 'Методические материалы и пособия для педагогов',
    color: 'from-green-100 to-emerald-100',
    path: null
  },
  {
    id: 'materials',
    title: 'Материалы по истории искусств',
    icon: 'Palette',
    description: 'Образовательные материалы по декоративно-прикладному искусству',
    color: 'from-red-100 to-orange-100',
    path: '/art-materials'
  },
  {
    id: 'museums',
    title: 'Музеи России',
    icon: 'Building2',
    description: 'Ссылки и информация о музеях народного искусства',
    color: 'from-cyan-100 to-blue-100',
    path: '/russian-museums'
  },
  {
    id: 'virtual',
    title: 'Виртуальные музеи',
    icon: 'MonitorPlay',
    description: 'Онлайн-экспозиции и виртуальные туры',
    color: 'from-violet-100 to-purple-100',
    path: '/virtual-museums'
  },
  {
    id: 'tests',
    title: 'Проверка знаний и умений',
    icon: 'GraduationCap',
    description: 'Тесты 3 уровней для определения степени усвоения материалов медиатеки',
    color: 'from-amber-100 to-yellow-100',
    path: null
  }
];

const galleryImages = [
  {
    url: 'https://cdn.poehali.dev/projects/5f33bbb3-5cda-449b-b779-710daab820a8/files/e2feb53e-310d-4075-8189-7eedd49f5fbf.jpg',
    title: 'Традиционная роспись',
    description: 'Хохломская роспись на деревянной посуде'
  },
  {
    url: 'https://cdn.poehali.dev/projects/5f33bbb3-5cda-449b-b779-710daab820a8/files/d60ca895-4043-41bd-bb52-5e1db621e36b.jpg',
    title: 'Гжельская керамика',
    description: 'Традиционные бело-синие узоры'
  },
  {
    url: 'https://cdn.poehali.dev/projects/5f33bbb3-5cda-449b-b779-710daab820a8/files/2e906f97-499b-4cfa-8ef4-9396a71a9225.jpg',
    title: 'Творческий процесс',
    description: 'Ученики за работой на мастер-классе'
  }
];

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const navigate = useNavigate();

  const handleSectionClick = (path: string | null) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-blue-50">
      <header className="ornament-border bg-white shadow-md py-8 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 animate-fade-in">
            Народные промыслы
          </h1>
          <p className="text-xl md:text-2xl text-accent font-semibold mb-2">
            Медиатека по изобразительному искусству
          </p>
          <p className="text-lg text-muted-foreground">
            Для 3-5 классов • Модуль «Декоративно-прикладное и народное искусство»
          </p>
        </div>
      </header>

      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <Card 
              key={idx}
              className="hover-lift cursor-pointer overflow-hidden animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Разделы медиатеки
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, idx) => (
            <Card 
              key={section.id}
              className={`hover-lift cursor-pointer bg-gradient-to-br ${section.color} border-2 border-transparent hover:border-primary transition-all animate-fade-in`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-lg">
                    <Icon name={section.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                    onClick={() => handleSectionClick(section.path)}
                    disabled={!section.path}
                  >
                    {section.path ? 'Перейти' : 'Скоро'}
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="ornament-border bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-primary mb-2">Лекции</h3>
              <p className="text-muted-foreground">Увлекательные рассказы об истории народных промыслов</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-primary mb-2">Игры</h3>
              <p className="text-muted-foreground">Интерактивные задания для закрепления знаний</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-primary mb-2">Мастер-классы</h3>
              <p className="text-muted-foreground">Практические занятия по народным ремёслам</p>
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

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              {selectedImage?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <img 
              src={selectedImage?.url} 
              alt={selectedImage?.title}
              className="w-full rounded-lg"
            />
            <p className="text-lg text-muted-foreground">
              {selectedImage?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}