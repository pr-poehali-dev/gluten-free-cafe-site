
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "Wheat",
    title: "100% Без глютена",
    description: "Вся наша кухня на 100% свободна от глютена, чтобы избежать перекрёстного загрязнения."
  },
  {
    icon: "Leaf",
    title: "Натуральные продукты",
    description: "Мы используем только натуральные ингредиенты и сезонные продукты от местных производителей."
  },
  {
    icon: "UtensilsCrossed",
    title: "Авторская кухня",
    description: "Наш шеф-повар создает уникальные рецепты, которые не уступают по вкусу обычным блюдам."
  }
];
