import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const [genre, setGenre] = useState('');
  const [mood, setMood] = useState('');
  const [duration, setDuration] = useState([30]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt || !genre || !mood) {
      toast.error('Пожалуйста, заполните все поля');
      return;
    }

    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      toast.success('Музыка успешно сгенерирована! 🎵');
    }, 3000);
  };

  const genres = [
    { value: 'electronic', label: 'Electronic', icon: 'Zap' },
    { value: 'ambient', label: 'Ambient', icon: 'Cloud' },
    { value: 'rock', label: 'Rock', icon: 'Guitar' },
    { value: 'jazz', label: 'Jazz', icon: 'Music' },
    { value: 'classical', label: 'Classical', icon: 'Piano' },
    { value: 'hiphop', label: 'Hip-Hop', icon: 'Disc3' },
  ];

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

  const examples = [
    {
      title: 'Cosmic Dreams',
      genre: 'Ambient Electronic',
      duration: '3:24',
      waveform: '▁▂▃▅▇▆▄▃▂▁▂▃▅▇',
    },
    {
      title: 'Night Drive',
      genre: 'Synthwave',
      duration: '2:48',
      waveform: '▃▅▇▆▄▂▁▂▄▆▇▅▃',
    },
    {
      title: 'Digital Rain',
      genre: 'Lo-fi Hip-Hop',
      duration: '4:12',
      waveform: '▂▃▄▅▆▇▆▅▄▃▂▁▂',
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

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Генератор музыки
            </h2>
            
            <Card className="p-8 bg-card border-primary/20 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="prompt" className="text-base mb-2 block">
                    Опишите желаемую музыку
                  </Label>
                  <Input
                    id="prompt"
                    placeholder="Например: энергичный электронный трек для тренировки"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="bg-background border-primary/30 focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="genre" className="text-base mb-2 block">
                      Жанр
                    </Label>
                    <Select value={genre} onValueChange={setGenre}>
                      <SelectTrigger id="genre" className="bg-background border-primary/30">
                        <SelectValue placeholder="Выберите жанр" />
                      </SelectTrigger>
                      <SelectContent>
                        {genres.map((g) => (
                          <SelectItem key={g.value} value={g.value}>
                            <div className="flex items-center gap-2">
                              <Icon name={g.icon} size={16} />
                              {g.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="mood" className="text-base mb-2 block">
                      Настроение
                    </Label>
                    <Select value={mood} onValueChange={setMood}>
                      <SelectTrigger id="mood" className="bg-background border-primary/30">
                        <SelectValue placeholder="Выберите настроение" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="energetic">⚡ Энергичное</SelectItem>
                        <SelectItem value="calm">🌙 Спокойное</SelectItem>
                        <SelectItem value="uplifting">✨ Вдохновляющее</SelectItem>
                        <SelectItem value="dark">🌑 Темное</SelectItem>
                        <SelectItem value="happy">😊 Радостное</SelectItem>
                        <SelectItem value="melancholic">💙 Меланхоличное</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="duration" className="text-base mb-2 block">
                    Длительность: {duration[0]} секунд
                  </Label>
                  <Slider
                    id="duration"
                    min={15}
                    max={180}
                    step={15}
                    value={duration}
                    onValueChange={setDuration}
                    className="py-4"
                  />
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-semibold text-lg py-6 glow-purple"
                >
                  {isGenerating ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Генерирую музыку...
                    </>
                  ) : (
                    <>
                      <Icon name="Sparkles" size={20} className="mr-2" />
                      Создать музыку
                    </>
                  )}
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-4">
              Примеры треков
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Послушайте, что создали другие пользователи
            </p>

            <div className="space-y-4">
              {examples.map((example, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-6">
                    <Button
                      size="icon"
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary hover:opacity-90 flex-shrink-0 glow-purple"
                    >
                      <Icon name="Play" size={24} className="text-white" />
                    </Button>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-lg mb-1">{example.title}</h3>
                      <p className="text-sm text-muted-foreground">{example.genre} • {example.duration}</p>
                    </div>

                    <div className="hidden md:flex items-center gap-2 text-primary font-mono text-2xl">
                      {example.waveform}
                    </div>

                    <div className="flex gap-2">
                      <Button size="icon" variant="outline" className="border-primary/30">
                        <Icon name="Heart" size={18} />
                      </Button>
                      <Button size="icon" variant="outline" className="border-primary/30">
                        <Icon name="Download" size={18} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
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
