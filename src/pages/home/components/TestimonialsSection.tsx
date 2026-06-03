import { testimonials } from '@/mocks/diner';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function TestimonialsSection() {
  const titleAnim = useScrollAnimation({ threshold: 0.2 });
  const cardsAnim = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="testimonials" className="relative w-full bg-background-50">
      <div className="w-full px-6 md:px-10 lg:px-16 py-16 md:py-24">
        {/* Section Header */}
        <div
          ref={titleAnim.ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
            titleAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-primary-500" />
            <span className="text-sm font-medium text-primary-700 tracking-wider">
              CUSTOMER LOVE
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground-950 tracking-wider">
            HAPPY CUSTOMERS
            <br />
            HAPPY DINER
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground-600 tracking-wide">
            お客様の声をご紹介
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div ref={cardsAnim.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review, i) => (
            <div
              key={review.id}
              className={`bg-background-50 rounded-2xl border-2 border-primary-300 p-5 md:p-6 hover:border-primary-400 transition-all duration-700 ease-out ${
                cardsAnim.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <i
                    key={j}
                    className={`ri-star-fill text-sm ${
                      j < review.rating ? 'text-primary-500' : 'text-background-300'
                    }`}
                  />
                ))}
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg text-foreground-950 mb-2">
                {review.title}
              </h3>

              {/* Body */}
              <p className="text-sm text-foreground-700 leading-relaxed mb-4">
                {review.body}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-background-200">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-300">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover grayscale-[30%] sepia-[20%]"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground-900">{review.name}</p>
                  <p className="text-xs text-foreground-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}