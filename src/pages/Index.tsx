
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Навигация */}
      <header className="border-b sticky top-0 z-10 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Wheat" className="text-amber-600 h-6 w-6" />
            <span className="font-bold text-xl">ГлютенФри</span>
          </div>
          
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-amber-600 transition-colors">Главная</a>
            <a href="#menu" className="hover:text-amber-600 transition-colors">Меню</a>
            <a href="#about" className="hover:text-amber-600 transition-colors">О нас</a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">Контакты</a>
          </nav>
          
          <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
            Забронировать
          </Button>
        </div>
      </header>

      {/* Главный блок */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Вкусно и полезно <span className="text-amber-600">без глютена</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Наше кафе специализируется на вкусных и полезных блюдах без глютена для всех, 
              кто следит за своим здоровьем или имеет непереносимость глютена.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Посмотреть меню
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                О нашем кафе
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5" 
              alt="Здоровая еда без глютена" 
              className="rounded-xl shadow-lg w-full h-auto object-cover max-h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">О нашем кафе</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы открыли наше кафе с миссией предоставить вкусные безглютеновые блюда для всех.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Icon name="Wheat" className="text-amber-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Без глютена</h3>
              <p className="text-gray-600">Вся наша кухня на 100% свободна от глютена, чтобы избежать перекрёстного загрязнения.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Icon name="Leaf" className="text-amber-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Натуральные продукты</h3>
              <p className="text-gray-600">Мы используем только натуральные ингредиенты и сезонные продукты от местных производителей.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Icon name="UtensilsCrossed" className="text-amber-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Авторская кухня</h3>
              <p className="text-gray-600">Наш шеф-повар создает уникальные рецепты, которые не уступают по вкусу обычным блюдам.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Меню */}
      <section id="menu" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наше меню</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Попробуйте наши лучшие безглютеновые блюда, приготовленные с любовью и заботой о вашем здоровье.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <span className="font-medium text-amber-600">{item.price} ₽</span>
                  <Button variant="outline" size="sm" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Показать все меню
            </Button>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Отзывы наших гостей</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мнения наших посетителей — лучшее доказательство того, что безглютеновая еда может быть вкусной!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4 text-amber-500">
                <Icon name="Star" className="h-5 w-5 fill-amber-500" />
                <Icon name="Star" className="h-5 w-5 fill-amber-500" />
                <Icon name="Star" className="h-5 w-5 fill-amber-500" />
                <Icon name="Star" className="h-5 w-5 fill-amber-500" />
                <Icon name="Star" className="h-5 w-5 fill-amber-500" />
              </div>
              <p className="text-gray-700 italic mb-4">
                "Первый раз попробовала безглютеновые десерты в этом кафе и была удивлена, насколько они вкусные! Теперь это моё любимое место."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center">
                  <span className="font-medium text-amber-800">МК</span>
                </div>
                <div>
                  <p className="font-medium">Мария К.</p>
                  <p className="text-sm text-gray-600">Постоянный гость</p>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4 text-amber-500">
                <Icon name="Star" className="h-5 w-5 fill-amber-500" />
                <Icon name="Star" className="h-5 w-5 fill-amber-500" />
                <Icon name="Star" className="h-5 w-5 fill-amber-500" />
                <Icon name="Star" className="h-5 w-5 fill-amber-500" />
                <Icon name="Star" className="h-5 w-5 fill-amber-500" />
              </div>
              <p className="text-gray-700 italic mb-4">
                "У меня целиакия, и наконец-то я нашёл место, где могу безопасно питаться и наслаждаться разнообразным меню. Спасибо вам огромное!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center">
                  <span className="font-medium text-amber-800">АП</span>
                </div>
                <div>
                  <p className="font-medium">Алексей П.</p>
                  <p className="text-sm text-gray-600">Постоянный гость</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Забронируйте столик или задайте вопрос о наших безглютеновых блюдах.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-amber-600 h-5 w-5" />
                  <span>ул. Безглютеновая, д. 42, Москва</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-amber-600 h-5 w-5" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-amber-600 h-5 w-5" />
                  <span>info@glutenfree-cafe.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-amber-600 h-5 w-5" />
                  <span>Ежедневно: 9:00 - 22:00</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Мы в соцсетях</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-amber-100 p-2 rounded-full hover:bg-amber-200 transition-colors">
                    <Icon name="Instagram" className="text-amber-600 h-5 w-5" />
                  </a>
                  <a href="#" className="bg-amber-100 p-2 rounded-full hover:bg-amber-200 transition-colors">
                    <Icon name="Facebook" className="text-amber-600 h-5 w-5" />
                  </a>
                  <a href="#" className="bg-amber-100 p-2 rounded-full hover:bg-amber-200 transition-colors">
                    <Icon name="Twitter" className="text-amber-600 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Забронировать столик</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Имя</label>
                      <input type="text" className="w-full border rounded-md p-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Телефон</label>
                      <input type="tel" className="w-full border rounded-md p-2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Дата и время</label>
                    <input type="datetime-local" className="w-full border rounded-md p-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Количество гостей</label>
                    <select className="w-full border rounded-md p-2">
                      <option>1 гость</option>
                      <option>2 гостя</option>
                      <option>3 гостя</option>
                      <option>4 гостя</option>
                      <option>5+ гостей</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Комментарий</label>
                    <textarea className="w-full border rounded-md p-2 h-24"></textarea>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Забронировать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Wheat" className="text-amber-400 h-6 w-6" />
              <span className="font-bold text-xl">ГлютенФри</span>
            </div>
            
            <div className="mb-4 md:mb-0">
              <nav className="flex gap-6 text-sm">
                <a href="#" className="hover:text-amber-400 transition-colors">Главная</a>
                <a href="#menu" className="hover:text-amber-400 transition-colors">Меню</a>
                <a href="#about" className="hover:text-amber-400 transition-colors">О нас</a>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Контакты</a>
              </nav>
            </div>
            
            <div className="text-sm text-gray-400">
              © 2025 ГлютенФри. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Данные для меню
const menuItems = [
  {
    name: "Безглютеновая пицца",
    description: "С томатами, моцареллой и базиликом на безглютеновом тесте",
    price: 590,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
  },
  {
    name: "Киноа боул",
    description: "Питательный боул с киноа, овощами и авокадо",
    price: 450,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
  },
  {
    name: "Банановый хлеб",
    description: "Сладкий безглютеновый хлеб с бананами и орехами",
    price: 320,
    image: "https://images.unsplash.com/photo-1553535214-850dde7a626a"
  },
  {
    name: "Гречневые блины",
    description: "Нежные блины из гречневой муки с различными начинками",
    price: 390,
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548"
  },
  {
    name: "Веганский боул",
    description: "Ароматный боул с нутом, рисом и овощами",
    price: 420,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  },
  {
    name: "Миндальное печенье",
    description: "Хрустящее печенье из миндальной муки с шоколадом",
    price: 350,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e"
  }
];

export default Index;
