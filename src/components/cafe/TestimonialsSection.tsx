
import Icon from "@/components/ui/icon";

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
  initials: string;
}

const Testimonial = ({ text, author, role, initials }: TestimonialProps) => (
  <div className="bg-amber-50 p-6 rounded-lg">
    <div className="flex items-center gap-2 mb-4 text-amber-500">
      {[...Array(5)].map((_, i) => (
        <Icon key={i} name="Star" className="h-5 w-5 fill-amber-500" />
      ))}
    </div>
    <p className="text-gray-700 italic mb-4">{text}</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center">
        <span className="font-medium text-amber-800">{initials}</span>
      </div>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "\"Первый раз попробовала безглютеновые десерты в этом кафе и была удивлена, насколько они вкусные! Теперь это моё любимое место.\"",
      author: "Мария К.",
      role: "Постоянный гость",
      initials: "МК"
    },
    {
      text: "\"У меня целиакия, и наконец-то я нашёл место, где могу безопасно питаться и наслаждаться разнообразным меню. Спасибо вам огромное!\"",
      author: "Алексей П.",
      role: "Постоянный гость",
      initials: "АП"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших гостей</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мнения наших посетителей — лучшее доказательство того, что безглютеновая еда может быть вкусной!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              text={testimonial.text}
              author={testimonial.author}
              role={testimonial.role}
              initials={testimonial.initials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
