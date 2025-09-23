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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#101010] h-[72px] flex items-center justify-between px-12">
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/70db57652d0a2e1dafed9a2976e3e53f9e303acc?width=84" 
          alt="StroomUp Logo" 
          className="w-[42px] h-[41px]"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`font-roboto font-bold text-base leading-6 tracking-[0.15px] transition-colors hover:text-brand-blue ${
              activeSection === item.id 
                ? 'text-brand-blue' 
                : 'text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
