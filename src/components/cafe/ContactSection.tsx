
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactInfo = () => (
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
);

const BookingForm = () => (
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
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Связаться с нами</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Забронируйте столик или задайте вопрос о наших безглютеновых блюдах.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <ContactInfo />
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
