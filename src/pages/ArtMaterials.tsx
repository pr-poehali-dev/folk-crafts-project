import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const historyMaterials = [
  {
    title: 'Коллекция икон',
    description: 'Русская средневековая иконопись',
    url: 'http://www.bibliotekar.ru/rusIcon/index.htm',
    icon: 'Cross'
  },
  {
    title: 'Народные промыслы',
    description: 'Материалы по традиционным ремёслам России',
    url: 'http://www.metodkabinet.eu/TemKollekzii/NarodnyePromysly.html',
    icon: 'Sparkles'
  },
  {
    title: 'Коллекция ссылок для учителя ИЗО',
    description: 'Ресурсы по изучению истории искусств',
    url: 'http://www.openclass.ru/node/148163',
    icon: 'BookOpen'
  },
  {
    title: 'История искусств разных эпох',
    description: 'От античности до современности',
    url: 'http://www.arthistory.ru/',
    icon: 'Clock'
  },
  {
    title: 'История искусств',
    description: 'Начиная с первобытного человека',
    url: 'http://art-history.ru/',
    icon: 'Landmark'
  }
];

const teacherMaterials = [
  {
    title: 'Страничка учителя изобразительного искусства',
    description: 'Методические материалы и планы уроков',
    url: 'http://www.openclass.ru/wiki-pages/50648',
    icon: 'GraduationCap'
  },
  {
    title: 'Уроки живописи акварелью',
    description: 'Техники и приёмы акварельной живописи',
    url: 'http://www.izorisunok.ru/',
    icon: 'Brush'
  },
  {
    title: 'Женские портреты великих мастеров',
    description: 'Галерея классических портретов',
    url: 'http://www.artap.ru/galery.htm',
    icon: 'Users'
  },
  {
    title: 'Арт-пейзаж',
    description: 'Коллекция пейзажной живописи',
    url: 'http://www.art-paysage.ru/',
    icon: 'TreePine'
  },
  {
    title: 'Поэтапное рисование для детей',
    description: 'Пошаговые инструкции для юных художников',
    url: 'http://luntiki.ru/blog/risunok/745.html',
    icon: 'Pencil'
  },
  {
    title: 'Учимся рисовать',
    description: 'Сложные рисунки - просто!',
    url: 'http://www.kalyamalya.ru/modules/myarticles/topics.php?op=listarticles&topic_id=4&ob=6&sn=20&st=40',
    icon: 'PenTool'
  }
];

export default function ArtMaterials() {
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
            Материалы по искусству
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Образовательные ресурсы для изучения и преподавания искусства
          </p>
        </div>
      </header>

      <section className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="history" className="text-lg">
              <Icon name="Palette" size={20} className="mr-2" />
              История искусств
            </TabsTrigger>
            <TabsTrigger value="teacher" className="text-lg">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Для учителей
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {historyMaterials.map((material, idx) => (
                <Card 
                  key={idx}
                  className="hover-lift bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-transparent hover:border-primary transition-all animate-scale-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 shadow-md">
                      <Icon name={material.icon as any} size={28} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {material.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {material.description}
                    </p>
                    <Button 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                      onClick={() => window.open(material.url, '_blank')}
                    >
                      Открыть
                      <Icon name="ExternalLink" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="teacher" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teacherMaterials.map((material, idx) => (
                <Card 
                  key={idx}
                  className="hover-lift bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-transparent hover:border-primary transition-all animate-scale-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 shadow-md">
                      <Icon name={material.icon as any} size={28} className="text-accent" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {material.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {material.description}
                    </p>
                    <Button 
                      variant="outline"
                      className="w-full border-accent text-accent hover:bg-accent hover:text-white transition-colors"
                      onClick={() => window.open(material.url, '_blank')}
                    >
                      Открыть
                      <Icon name="ExternalLink" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
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
