import { useState } from 'react';
import { Button } from '@/components/ui/button';
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

        <section className="container mx-auto px-4 py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-heading font-bold leading-tight">
              Создавайте музыку{' '}
              <span className="text-gradient">силой AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Нейросеть генерирует уникальные треки, биты и мелодии за секунды. AI композитор для музыкантов, продюсеров и создателей контента
            </p>
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