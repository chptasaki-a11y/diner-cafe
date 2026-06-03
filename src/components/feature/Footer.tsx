import CheckeredBar from '@/components/base/CheckeredBar';

export default function Footer() {
  const navColumns = [
    
   
    
   
  ];

  return (
    <footer className="relative w-full bg-background-100">
      <CheckeredBar rows={3} />
      <div className="w-full px-6 md:px-10 lg:px-16 py-12 md:py-16">
        {/* Top Nav Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-foreground-900 tracking-wider mb-3">
                {col.title}
              </h4>
              <div className="w-8 h-0.5 bg-primary-500 mb-4" />
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground-600 hover:text-primary-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Area */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-background-200 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Big Hours */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-4xl md:text-5xl text-foreground-950 tracking-wider">
                MON-SUN
              </span>
              <span className="font-heading text-2xl md:text-3xl text-primary-500 tracking-wider">
                7AM-10PM
              </span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-8 h-0.5 bg-primary-500" />
              <span className="text-xs text-foreground-600 tracking-wide">
                All holidays open
              </span>
            </div>
          </div>

          {/* Right - Copyright & SNS */}
          <div className="flex flex-col items-center md:items-end gap-4">
            
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-foreground-700 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-foreground-700 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <i className="ri-facebook-line text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-foreground-700 hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <i className="ri-twitter-x-line text-xl" />
              </a>
              
            </div>
            
          </div>
          
        </div>
        <p className="text-xs text-foreground-500 text-center">
              &copy; 2026 Diner Cafe. All rights reserved.
            </p>
      </div>
    </footer>
  );
}