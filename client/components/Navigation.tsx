import React, { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection?: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [imgError, setImgError] = useState(false);
  const [activeId, setActiveId] = useState<string | undefined>(activeSection ?? 'home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll-spy: update activeId based on which section is nearest to the viewport center
  // Uses a requestAnimationFrame throttle for performance
  useEffect(() => {
    let ticking = false;

    const ids = ['home', 'explore', 'stroomcoin', 'team', 'contact'];

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight / 2;
        let closestId: string | undefined = undefined;
        let closestDist = Infinity;

        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top + rect.height / 2 - viewportCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closestId = id;
          }
        }

        if (closestId && closestId !== activeId) {
          setActiveId(closestId);
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // run once on mount
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [activeId]);

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
    <nav className="w-full bg-[#000000] fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl w-full py-[15px] px-[40px]">
        <div className="flex items-center justify-between w-full">
          {/* Logo - flush left */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={() => {
                setActiveId('home');
                scrollToSection('home');
              }}
              aria-label="Home"
              className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-white/5"
            >
              {/* Logo image (falls back to emoji if image missing) */}
              {imgError ? (
                <span className="text-white text-lg leading-none">🚀</span>
              ) : (
                <img
                  src="/blue.ico"
                  alt="Stroomup logo"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </button>
          </div>

          {/* Center links - evenly distributed across available space */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center justify-evenly w-full max-w-2xl whitespace-nowrap">
              {centerItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveId(item.id);
                    scrollToSection(item.id);
                  }}
                  className={`text-white font-bold text-sm px-3 py-[6px] leading-none transition-colors hover:text-[#0066ff] nav-link ${
                    activeId === item.id ? 'active' : ''
                  }`}
                  aria-label={item.label}
                >
                  <span className="nav-label inline-block">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact us - flush right */}
          <div className="flex items-center flex-shrink-0">
            {contactItem ? (
              <button
                onClick={() => {
                  setActiveId(contactItem.id);
                  scrollToSection(contactItem.id);
                }}
                className={`text-white font-bold text-sm px-3 py-[6px] leading-none transition-colors hover:text-[#0066ff] whitespace-nowrap nav-link ${
                  activeId === contactItem.id ? 'active' : ''
                }`}
              >
                {contactItem.label}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}
