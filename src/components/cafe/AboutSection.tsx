
import Icon from "@/components/ui/icon";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="text-center p-6">
    <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
      <Icon name={icon} className="text-amber-600 h-6 w-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutSection = () => {
  const features = [
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

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">О нашем кафе</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы открыли наше кафе с миссией предоставить вкусные безглютеновые блюда для всех.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
