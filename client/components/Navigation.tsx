interface NavigationProps {
  activeSection?: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'explore', label: 'Explore' },
    { id: 'stroomcoin', label: 'Stroomcoin' },
    { id: 'team', label: 'Our Team' },
    { id: 'contact', label: 'Contact us' },
  ];

  const centerItems = navItems.filter((n) => n.id !== 'contact');
  const contactItem = navItems.find((n) => n.id === 'contact');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#101010]/95 backdrop-blur supports-[backdrop-filter]:bg-[#101010]/80 h-[72px]">
      <div className="h-full mx-auto max-w-7xl px-6 grid grid-cols-3 items-center">
        {/* Left: Logo */}
        <button onClick={() => scrollToSection('home')} className="flex items-center justify-start">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/70db57652d0a2e1dafed9a2976e3e53f9e303acc?width=84"
            alt="StroomUp Logo"
            className="w-[42px] h-[41px]"
          />
        </button>

        {/* Center: links */}
        <div className="flex items-center justify-center gap-12">
          {centerItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative px-2 py-1 font-roboto font-bold text-base leading-6 tracking-[0.15px] transition-colors ${
                  isActive ? 'text-brand-blue' : 'text-white hover:text-brand-blue'
                }`}
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute -bottom-2 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2B57C4] via-[#5B6CFF] to-[#2B57C4] transition-all duration-300 ${
                    isActive ? 'w-8' : 'group-hover:w-8'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right: Contact us */}
        <div className="flex items-center justify-end">
          {contactItem ? (
            <button
              onClick={() => scrollToSection(contactItem.id)}
              className={`group relative font-roboto font-bold text-base leading-6 tracking-[0.15px] px-3 py-1 transition-colors ${
                activeSection === contactItem.id ? 'text-brand-blue' : 'text-white hover:text-brand-blue'
              }`}
            >
              {contactItem.label}
              <span className={`pointer-events-none absolute -bottom-2 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2B57C4] via-[#5B6CFF] to-[#2B57C4] transition-all duration-300 ${
                activeSection === contactItem.id ? 'w-8' : 'group-hover:w-8'
              }`} />
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
