import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      toast.success('Музыка успешно сгенерирована! 🎵');
    }, 3000);
  };

  const features = [
    {
      icon: 'Sparkles',
      title: 'AI-генерация',
      description: 'Нейросеть создает уникальную музыку на основе ваших параметров',
    },
    {
      icon: 'Wand2',
      title: 'Любой стиль',
      description: 'От электроники до классики — выбирайте из десятков жанров',
    },
    {
      icon: 'Download',
      title: 'Скачивание',
      description: 'Получите треки в высоком качестве WAV и MP3',
    },
    {
      icon: 'Repeat',
      title: 'Без лимитов',
      description: 'Генерируйте столько музыки, сколько нужно',
    },
  ];



  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      
      <div className="relative z-10">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-purple">
              <Icon name="Music" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-heading font-bold text-gradient">SonicAI</span>
          </div>
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
            <Icon name="User" size={18} className="mr-2" />
            Войти
          </Button>
        </nav>

        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-heading font-bold leading-tight">
              Создавайте музыку{' '}
              <span className="text-gradient">силой AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Опишите настроение, выберите стиль — и нейросеть сгенерирует уникальный трек за секунды
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-purple text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Начать создавать
              </Button>
              <Button size="lg" variant="outline" className="border-secondary/50 hover:bg-secondary/10 text-lg px-8">
                <Icon name="Headphones" size={20} className="mr-2" />
                Послушать примеры
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:glow-purple transition-all">
                  <Icon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-32">
          <div className="flex justify-center">
            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-bold text-2xl py-12 px-16 glow-purple rounded-2xl transition-all hover:scale-105"
            >
              {isGenerating ? (
                <>
                  <Icon name="Loader2" size={32} className="mr-3 animate-spin" />
                  Генерирую...
                </>
              ) : (
                <>
                  <Icon name="Sparkles" size={32} className="mr-3" />
                  Генерация треков
                </>
              )}
            </Button>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-12 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Music" size={18} className="text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-gradient">SonicAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 SonicAI. Создано с помощью искусственного интеллекта
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;