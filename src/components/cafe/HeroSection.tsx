
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
