import { features } from '@/mocks/diner';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FeaturesSection() {
  const titleAnim = useScrollAnimation({ threshold: 0.2 });
  const cardsAnim = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="features" className="relative w-full bg-background-50">
      <div className="w-full px-6 md:px-10 lg:px-16 py-16 md:py-24">
        {/* Top Label */}
        <div className="mb-4 text-center">
          <span className="text-sm font-medium text-primary-700  tracking-wider">
            WHY WE'RE SPECIAL
          </span>
        </div>

        {/* Main Title */}
        <h2
          ref={titleAnim.ref}
          className={`font-heading text-3xl md:text-5xl text-foreground-950 leading-tight tracking-wider transition-all duration-1000 ease-out text-center ${
            titleAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          ALL DAY BREAKFAST
          <br />
          & CLASSIC DINER
        </h2>

        {/* Feature Cards */}
        <div ref={cardsAnim.ref} className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className={`bg-background-100 rounded-2xl border-2 border-primary-300 p-6 md:p-8 hover:border-primary-400 transition-all duration-700 ease-out ${
                cardsAnim.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center text-primary-500 mb-5">
                <i className={`${feature.icon} text-3xl`} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl md:text-2xl text-foreground-950 tracking-wide">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm md:text-base text-foreground-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}