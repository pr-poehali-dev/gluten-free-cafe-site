
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
);

const MenuSection = () => {
  const menuItems: MenuItem[] = [
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

  return (
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
            <MenuCard key={index} item={item} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-amber-600 hover:bg-amber-700">
            Показать все меню
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
