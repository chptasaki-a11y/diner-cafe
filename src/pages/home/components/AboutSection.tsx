import CheckeredBar from '@/components/base/CheckeredBar';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const textAnim = useScrollAnimation({ threshold: 0.2 });
  const staffAnim = useScrollAnimation({ threshold: 0.2 });

  const staffImages = [
    'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20friendly%20smiling%20chef%20in%20white%20uniform%20and%20hat%20in%20a%20retro%20American%20diner%20kitchen%2C%20warm%20vintage%20lighting%2C%20sepia%20toned%20photography%20style%2C%20professional%20friendly%20expression%2C%20soft%20background%20blur&width=200&height=200&seq=staff-01&orientation=squarish',
    'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20friendly%20young%20waitress%20in%20retro%20diner%20uniform%20with%20apron%20and%20warm%20smile%2C%20vintage%20American%20style%20diner%20background%2C%20warm%20sepia%20toned%20lighting%2C%20nostalgic%20photography%20style&width=200&height=200&seq=staff-02&orientation=squarish',
    'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20friendly%20middle%20aged%20barista%20behind%20a%20retro%20coffee%20counter%20with%20warm%20smile%2C%20vintage%20diner%20atmosphere%2C%20warm%20sepia%20toned%20lighting%2C%20nostalgic%20photography%20style%2C%20soft%20background&width=200&height=200&seq=staff-03&orientation=squarish',
    'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20friendly%20young%20cook%20in%20diner%20kitchen%20with%20retro%20style%20uniform%20and%20warm%20genuine%20smile%2C%20vintage%20American%20diner%20background%2C%20warm%20sepia%20toned%20lighting%2C%20nostalgic%20photography%20style&width=200&height=200&seq=staff-04&orientation=squarish',
  ];

  return (
    <section id="about" className="relative w-full bg-background-50 tex">
      <CheckeredBar rows={3} />

      <div className="w-full px-6 md:px-10 lg:px-16 py-16 md:py-24 ">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8 text-center justify-center">
          <div className="w-3 h-3 rounded-full bg-primary-500" />
          <span className="text-sm font-medium text-primary-700 tracking-wider text-center">
            / SINCE 1955
          </span>
        </div>

        <div className="flex flex-col flex-col gap-12 lg:gap-20 ">
          {/* Left - Text */}
          <div
            ref={textAnim.ref}
            className={`max-w-3xl w-full mx-auto  ${
              textAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12' 
            }`}
          >
            <p className="text-lg md:text-xl text-foreground-800 leading-relaxed font-body  ">
              赤白の市松柄の床とネオンサインが輝く、まるで1950年代のアメリカのロードサイドダイナーにタイムスリップしたような空間。
              ジュークボックスから流れるクラシックな音楽に包まれながら、カウンター席でハンバーガーをかじる。
              そんな誰もが夢見たアメリカの日常を、ここ日本で本物の味とともに再現しました。
            </p>
            <p className="mt-6 text-lg md:text-xl text-foreground-800 leading-relaxed font-body">
              家族で、友人と、一人でも。誰もが気軽に立ち寄れる、あなたの街のクラシックダイナーです。
            </p>
          </div>

          {/* Right - Empty for visual balance */}
        </div>

        {/* Staff section */}
        <div className="mt-16 md:mt-20">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="w-3 h-3 rounded-full bg-primary-500" />
            <span className="text-sm font-medium text-primary-700 tracking-wider text-center ">
              MEET OUR STAFF
            </span>
          </div>

          <div
            ref={staffAnim.ref}
            className={`flex flex-col md:flex-row justify-center items-center gap-8 transition-all duration-1000 ease-out ${
              staffAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Staff photos */}
            <div className="flex items-center gap-3 md:gap-4">
              {staffImages.map((src, i) => (
                <div
                  key={i}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-3 border-primary-300 overflow-hidden transition-all duration-700 delay-${i * 100} ${
                    staffAnim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <img
                    src={src}
                    alt={`スタッフ ${i + 1}`}
                    className="w-full h-full object-cover grayscale-[30%] sepia-[20%]"
                  />
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-foreground-700 font-medium tracking-wide　">
              Family Owned & Operated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}