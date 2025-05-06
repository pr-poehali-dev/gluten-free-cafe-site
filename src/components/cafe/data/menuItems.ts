
export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const menuItems: MenuItem[] = [
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
