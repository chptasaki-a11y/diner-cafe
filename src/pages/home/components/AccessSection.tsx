import { businessHours } from '@/mocks/diner';
import CheckeredBar from '@/components/base/CheckeredBar';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AccessSection() {
  const imageAnim = useScrollAnimation({ threshold: 0.2 });
  const infoAnim = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="access" className="relative w-full bg-background-50">
      <CheckeredBar rows={3} />

      <div className="w-full flex flex-col lg:flex-row">
        {/* Left - Image Area */}
        <div
          ref={imageAnim.ref}
          className={`lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] transition-all duration-1000 ease-out ${
            imageAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}
        >
          <img
            src="https://readdy.ai/api/search-image?query=Retro%20American%20diner%20exterior%20at%20night%20with%20neon%20signs%20glowing%20in%20red%20and%20white%20colors%2C%20classic%20chrome%20facade%2C%20checkered%20floor%20pattern%20visible%20through%20windows%2C%20warm%20inviting%20lighting%20spilling%20onto%20sidewalk%2C%20vintage%20atmosphere%2C%20street%20photography%20style%20with%20rich%20colors&width=800&height=600&seq=access-exterior-01&orientation=landscape"
            alt="ダイナーカフェ外観"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
            <span className="text-sm font-medium text-background-100/80 tracking-wider mb-2">
              FIND US HERE
            </span>
            <h2 className="font-heading text-4xl md:text-6xl text-background-50 leading-tight tracking-wider">
              COME
              <br />
              GRAB A
              <br />
              SEAT
            </h2>
          </div>
        </div>

        {/* Right - Info Area */}
        <div
          ref={infoAnim.ref}
          className={`lg:w-1/2 bg-background-50 px-6 md:px-10 lg:px-16 py-12 md:py-16 flex flex-col justify-center transition-all duration-1000 delay-200 ease-out ${
            infoAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground-950 tracking-wider text-center lg:text-left">
            VISIT THE DINER
          </h2>

          <div className="mt-8 space-y-4 text-center lg:text-left">
            <p className="text-sm md:text-base text-foreground-700 leading-relaxed">
              <strong className="text-foreground-900">住所:</strong>
              <br />
              東京都渋谷区神宮前1-2-3 ダイナービル1F
            </p>
            <p className="text-sm md:text-base text-foreground-700 leading-relaxed">
              <strong className="text-foreground-900">電話:</strong>
              <br />
              <a href="tel:03-1234-5678" className="hover:text-primary-500 transition-colors">
                03-1234-5678
              </a>
            </p>
            <p className="text-sm md:text-base text-foreground-700 leading-relaxed">
              <strong className="text-foreground-900">アクセス:</strong>
              <br />
              東京メトロ銀座線 外苑前駅 3番出口より徒歩5分
            </p>
          </div>

          {/* Business Hours Table */}
          <div className="mt-8">
            <h3 className="text-sm font-bold text-foreground-900 tracking-wider mb-3 text-center lg:text-left">
              営業時間
            </h3>
            <div className="border-2 border-primary-300 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {businessHours.map((row, i) => (
                    <tr
                      key={row.day}
                      className={`${
                        i % 2 === 0 ? 'bg-background-50' : 'bg-background-100'
                      } border-b border-primary-200 last:border-b-0`}
                    >
                      <td className="px-4 py-2.5 text-foreground-800 font-medium w-1/2">
                        {row.day}
                      </td>
                      <td className="px-4 py-2.5 text-foreground-700 text-right w-1/2">
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center lg:text-left">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-background-50 rounded-full font-medium text-sm hover:bg-primary-600 transition-colors whitespace-nowrap"
            >
              Googleマップで見る
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}