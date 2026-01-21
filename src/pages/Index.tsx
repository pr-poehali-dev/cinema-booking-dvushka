import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Hall {
  id: number;
  name: string;
  description: string;
  image: string;
  capacity: string;
  features: string[];
}

interface Tariff {
  id: number;
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

const Index = () => {
  const [selectedHall, setSelectedHall] = useState<number | null>(null);
  const [selectedTariff, setSelectedTariff] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHallImage, setCurrentHallImage] = useState('');
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [cardNumber] = useState('2200 7007 1234 5678');

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const halls: Hall[] = [
    {
      id: 1,
      name: 'Royal Suite',
      description: 'Роскошный зал с бархатными креслами и атмосферным освещением',
      image: 'https://cdn.poehali.dev/projects/af38615c-e70a-4631-893f-e88943b7b081/files/9c29c8eb-dd17-4ebf-8a99-4b0d3b8c2afe.jpg',
      capacity: '2 персоны',
      features: ['Премиум кресла', 'Ambient освещение', 'Dolby Atmos']
    },
    {
      id: 2,
      name: 'VIP Lounge',
      description: 'Современный зал с кожаными реклайнерами и эксклюзивным сервисом',
      image: 'https://cdn.poehali.dev/projects/af38615c-e70a-4631-893f-e88943b7b081/files/05932a72-6d26-43e2-a40d-ba6880fa3a75.jpg',
      capacity: '2 персоны',
      features: ['Кожаные реклайнеры', 'Приватность', '4K проектор']
    },
    {
      id: 3,
      name: 'Intimate Cinema',
      description: 'Уютный зал для романтического вечера с изысканным интерьером',
      image: 'https://cdn.poehali.dev/projects/af38615c-e70a-4631-893f-e88943b7b081/files/111687f1-3469-4cee-9605-05354ed9d8b1.jpg',
      capacity: '2 персоны',
      features: ['Романтическая атмосфера', 'Золотые акценты', 'Премиум звук']
    }
  ];

  const tariffs: Tariff[] = [
    {
      id: 1,
      name: 'Standart',
      price: '5 000 ₽',
      duration: '2 часа',
      features: ['Выбор зала', 'Попкорн и напитки', 'Базовое обслуживание']
    },
    {
      id: 2,
      name: 'Premium',
      price: '12 000 ₽',
      duration: '3 часа',
      features: ['Любой зал', 'Шампанское и закуски', 'Персональный консьерж', 'Декор по желанию'],
      popular: true
    },
    {
      id: 3,
      name: 'Romantic Night',
      price: '18 000 ₽',
      duration: '4 часа',
      features: ['Эксклюзивный доступ', 'Ужин от шеф-повара', 'Букет цветов', 'Фотосессия в подарок', 'Трансфер']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${halls[0].image})` }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <Badge className="mb-6 text-lg px-6 py-2 bg-primary/90 hover:bg-primary">
            <Icon name="Sparkles" className="mr-2" size={20} />
            Премиум кинозалы
          </Badge>
          <h1 className="text-7xl md:text-8xl font-cormorant font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            CineDuo
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Приватные кинозалы для двоих
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Создайте незабываемый вечер в атмосфере роскоши и уединения. 
            Эксклюзивные залы, премиум сервис, романтическая обстановка.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Calendar" className="mr-2" size={24} />
              Забронировать
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
              <Icon name="Film" className="mr-2" size={24} />
              Наши залы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-cormorant font-bold mb-6">Наши залы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый зал создан для создания идеальной атмосферы вашего вечера
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {halls.map((hall, index) => (
              <Card 
                key={hall.id}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 overflow-hidden animate-scale-in ${
                  selectedHall === hall.id ? 'border-primary shadow-2xl shadow-primary/20' : 'border-border'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  setSelectedHall(hall.id);
                  setCurrentHallImage(hall.image);
                  setIsModalOpen(true);
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={hall.image} 
                    alt={hall.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    <Icon name="Star" className="mr-1" size={14} />
                    Premium
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-3xl font-cormorant">{hall.name}</CardTitle>
                  <CardDescription className="text-base">{hall.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <Icon name="Users" size={18} />
                    <span>{hall.capacity}</span>
                  </div>
                  <Separator className="mb-4" />
                  <div className="space-y-2">
                    {hall.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-cormorant font-bold mb-6">Тарифы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите пакет, который создаст идеальный вечер для вас двоих
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((tariff, index) => (
              <Card 
                key={tariff.id}
                className={`relative cursor-pointer transition-all duration-300 hover:scale-105 border-2 animate-scale-in ${
                  selectedTariff === tariff.id ? 'border-primary shadow-2xl shadow-primary/20' : 'border-border'
                } ${tariff.popular ? 'md:scale-110 border-accent shadow-xl' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedTariff(tariff.id)}
              >
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="text-sm px-6 py-2 bg-accent text-accent-foreground shadow-lg">
                      <Icon name="Crown" className="mr-1" size={16} />
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-4xl font-cormorant mb-2">{tariff.name}</CardTitle>
                  <div className="text-5xl font-bold text-primary my-4">{tariff.price}</div>
                  <CardDescription className="text-lg">
                    <Icon name="Clock" className="inline mr-2" size={18} />
                    {tariff.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-6" />
                  <div className="space-y-4 mb-8">
                    {tariff.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full text-lg py-6" 
                    variant={tariff.popular ? "default" : "outline"}
                    onClick={() => {
                      setSelectedTariff(tariff.id);
                      scrollToBooking();
                    }}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking-section" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/50 shadow-2xl animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl md:text-5xl font-cormorant mb-4">
                Забронировать сеанс
              </CardTitle>
              <CardDescription className="text-lg">
                Заполните форму, и мы свяжемся с вами для подтверждения
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <input 
                    type="text" 
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Дата</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Время</label>
                  <input 
                    type="time" 
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Комментарий</label>
                <textarea 
                  placeholder="Особые пожелания к бронированию"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>

              <Separator />

              <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <Icon name="Info" className="text-primary mt-1 flex-shrink-0" size={20} />
                <p className="text-sm text-muted-foreground">
                  Бронирование подтверждается в течение 2 часов. Полная оплата по цене выбранного тарифа.
                </p>
              </div>

              {!showPaymentDetails ? (
                <Button 
                  size="lg" 
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
                  onClick={() => setShowPaymentDetails(true)}
                >
                  <Icon name="CreditCard" className="mr-2" size={20} />
                  Перейти к оплате
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl border-2 border-primary/30">
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-2">
                        <Icon name="CreditCard" className="text-primary" size={32} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Переведите {tariffs.find(t => t.id === selectedTariff)?.price || 'сумму'} на карту:</p>
                        <div className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg border border-border">
                          <p className="text-3xl font-bold font-mono tracking-wider">{cardNumber}</p>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              navigator.clipboard.writeText(cardNumber.replace(/\s/g, ''));
                            }}
                          >
                            <Icon name="Copy" size={18} />
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">Получатель: Иван Иванов</p>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="Info" size={16} className="mt-0.5 flex-shrink-0" />
                        <p>После оплаты мы свяжемся с вами в течение 2 часов для подтверждения бронирования</p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full text-lg py-6"
                    onClick={() => setShowPaymentDetails(false)}
                  >
                    <Icon name="ArrowLeft" className="mr-2" size={20} />
                    Назад
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-3xl font-cormorant font-bold mb-4 text-primary">CineDuo</h3>
              <p className="text-muted-foreground">
                Премиум кинозалы для незабываемых вечеров вдвоём
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@cineduo.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, ул. Примерная, 1</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Режим работы</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Ежедневно: 12:00 - 02:00</p>
                <p className="text-sm">Бронирование за 24 часа</p>
              </div>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="text-center text-muted-foreground text-sm">
            <p>© 2024 CineDuo. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
            <DialogTitle className="text-2xl font-cormorant text-white">
              {halls.find(h => h.id === selectedHall)?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="relative w-full h-full">
            <img 
              src={currentHallImage} 
              alt="Cinema Hall"
              className="w-full h-full object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setIsModalOpen(false)}
            >
              <Icon name="X" size={24} />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;