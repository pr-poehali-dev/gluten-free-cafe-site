
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
