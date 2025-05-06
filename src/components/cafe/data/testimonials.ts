
export interface Testimonial {
  text: string;
  author: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
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
