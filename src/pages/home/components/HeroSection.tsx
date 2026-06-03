import CheckeredBar from '@/components/base/CheckeredBar';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HeroSection() {
  const titleAnim = useScrollAnimation({ threshold: 0.1 });
  const imagesAnim = useScrollAnimation({ threshold: 0.1 });
  const ctaAnim = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="hero" className="relative w-full bg-background-50">
      {/* Top checkered bar */}
      <CheckeredBar rows={3} />

      <div className="relative w-full min-h-[600px] md:min-h-[720px] flex flex-col items-center justify-center px-6 py-20 md:py-28">
        {/* Decorative stars */}
        <div className="absolute top-20 left-[15%] text-primary-500 text-2xl animate-pulse">
          <i className="ri-star-fill" />
        </div>
        <div className="absolute top-28 right-[20%] text-accent-500 text-xl animate-pulse">
          <i className="ri-star-fill" />
        </div>
        <div className="absolute bottom-32 left-[25%] text-secondary-500 text-lg animate-pulse">
          <i className="ri-star-fill" />
        </div>
        <div className="absolute top-40 right-[15%] text-primary-400 text-sm animate-pulse">
          <i className="ri-music-2-fill" />
        </div>

        {/* Main Title */}
        <div
          ref={titleAnim.ref}
          className={`text-center z-10 transition-all duration-1000 ease-out ${
            titleAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-500 leading-tight tracking-wider">
            DINER CAFE
          </h1>
          <p className="font-heading text-2xl md:text-4xl text-foreground-900 mt-2 tracking-widest">
            Classic American Taste
          </p>
        </div>

        {/* Image Cards Fan */}
        <div
          ref={imagesAnim.ref}
          className="relative mt-10 md:mt-14 flex items-center justify-center gap-2 md:gap-4"
        >
          {/* Left card */}
          <div
            className={`w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-primary-500 overflow-hidden shadow-lg transform -rotate-12 translate-y-4 opacity-90 transition-all duration-1000 delay-200 ease-out ${
              imagesAnim.isVisible ? 'opacity-90 translate-y-4 scale-100' : 'opacity-0 translate-y-12 scale-90'
            }`}
          >
            <img
              src="https://readdy.ai/api/search-image?query=Classic%20American%20diner%20burger%20with%20juicy%20beef%20patty%2C%20fresh%20lettuce%2C%20tomato%2C%20and%20special%20sauce%20on%20a%20toasted%20bun%2C%20served%20on%20a%20checkered%20red%20and%20white%20tablecloth%20background%2C%20warm%20vintage%20lighting%2C%20retro%20diner%20style%20food%20photography&width=400&height=400&seq=hero-burger-01&orientation=squarish"
              alt="クラシックバーガー"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Center card */}
          <div
            className={`w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-primary-500 overflow-hidden shadow-xl z-10 transition-all duration-1000 delay-0 ease-out ${
              imagesAnim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <img
              src="https://readdy.ai/api/search-image?query=Thick%20strawberry%20milkshake%20in%20tall%20retro%20diner%20glass%20with%20whipped%20cream%20and%20fresh%20strawberry%20on%20top%2C%20red%20and%20white%20striped%20straw%2C%20served%20on%20checkered%20tablecloth%20background%2C%20warm%20vintage%20diner%20lighting%2C%20nostalgic%20food%20photography&width=400&height=400&seq=hero-shake-02&orientation=squarish"
              alt="ストロベリーシェイク"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right card */}
          <div
            className={`w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-primary-500 overflow-hidden shadow-lg transform rotate-12 translate-y-4 opacity-90 transition-all duration-1000 delay-400 ease-out ${
              imagesAnim.isVisible ? 'opacity-90 translate-y-4 scale-100' : 'opacity-0 translate-y-12 scale-90'
            }`}
          >
            <img
              src="https://readdy.ai/api/search-image?query=Fluffy%20American%20pancakes%20stacked%20high%20with%20fresh%20strawberries%2C%20blueberries%2C%20banana%20slices%2C%20and%20drizzled%20maple%20syrup%2C%20served%20on%20a%20white%20plate%20with%20red%20and%20white%20checkered%20napkin%20background%2C%20warm%20retro%20diner%20lighting%2C%20food%20photography&width=400&height=400&seq=hero-pancake-03&orientation=squarish"
              alt="フルーツパンケーキ"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Open Hours */}
        <p className="mt-8 md:mt-10 font-heading text-xl md:text-2xl text-primary-600 tracking-widest">
          OPEN 7:00 - 22:00
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaAnim.ref}
          className={`mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ease-out ${
            ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="tel:03-1234-5678"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-background-50 rounded-full font-medium text-sm hover:bg-primary-600 transition-colors whitespace-nowrap"
          >
            <i className="ri-phone-line" />
            お電話で予約
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-foreground-900 text-primary-500 rounded-full font-medium text-sm hover:bg-foreground-900 hover:text-background-50 transition-colors whitespace-nowrap"
          >
            <i className="ri-restaurant-line" />
            メニューを見る
          </a>
        </div>
      </div>
    </section>
  );
}