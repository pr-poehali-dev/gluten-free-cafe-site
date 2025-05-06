
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
