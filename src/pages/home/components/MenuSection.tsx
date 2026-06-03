import { menuItems } from '@/mocks/diner';
import CheckeredBar from '@/components/base/CheckeredBar';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MenuSection() {
  const titleAnim = useScrollAnimation({ threshold: 0.2 });
  const cardsAnim = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="menu" className="relative w-full bg-background-50">
      <CheckeredBar rows={3} />

      <div className="w-full px-6 md:px-10 lg:px-16 py-16 md:py-24">
        {/* Section Title */}
        <div
          ref={titleAnim.ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${titleAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="font-heading text-3xl md:text-5xl text-foreground-950 tracking-wider">
            OUR SIGNATURE MENU
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground-600 tracking-wide">
            こだわりのクラシックメニューをご用意
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div ref={cardsAnim.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item, i) => (
            <div
              key={item.id}
              className={`relative h-full flex flex-col bg-background-50 rounded-2xl border-4  border-primary-400 overflow-hidden shadow-md hover:shadow-lg transition-all duration-700 ease-out ${cardsAnim.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Badge */}
              {item.badge && (
                <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-primary-500 text-background-50 text-xs font-bold rounded-full tracking-wider">
                  {item.badge}
                </div>
              )}

              {/* Image */}
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-4 md:p-5 text-center bg-background-100">
                <h3 className="font-heading text-lg md:text-base text-foreground-950 min-h-[3.5rem] flex items-center justify-center">
                  {item.name}
                </h3>
                <p className="text-xs text-foreground-500 mt-1 tracking-wide">
                  {item.nameEn}
                </p>
                <p className="text-sm text-foreground-700 mt-2 leading-relaxed flex-1">
                  {item.description}
                </p>
                <p className="mt-auto pt-3 text-xl font-bold text-primary-500">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CheckeredBar rows={3} />
    </section>
  );
}