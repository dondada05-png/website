import { useEffect } from 'react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Randomize start phase of each glowing orb so animations are less repetitive
    for (let i = 1; i <= 7; i++) {
      const el = document.querySelector(`.glow-${i}`) as HTMLElement | null;
      if (el) {
        // random negative delay between -0s and -12s
        const delay = -(Math.random() * 12).toFixed(2) + 's';
        el.style.setProperty('--orb-delay', delay);
        // apply it to both animation-delay and -webkit-animation-delay (fallback)
        el.style.animationDelay = delay;
        (el.style as any)['-webkit-animation-delay'] = delay;
      }
    }
  }, []);

  return (
  <section id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Background Gradient (covers full section) */}
      <div className="absolute inset-0 bg-hero-gradient" />

          {/* Large Background Circle implemented via bg-radial-circle class */}
      <div className="bg-radial-circle" />
      {/* Orbs are wrapped so we can mask them when they pass behind the radial curve */}
      <div className="glow-wrap absolute inset-0 pointer-events-none">
        <div className="glowing-ball glow-1" />
        <div className="glowing-ball glow-2" />
        <div className="glowing-ball glow-3" />
        <div className="glowing-ball glow-4" />
        <div className="glowing-ball glow-5" />
        <div className="glowing-ball glow-6" />
        <div className="glowing-ball glow-7" />
      </div>

      {/* Hero Content */}
      <div className="hero-content relative z-30 flex flex-col items-center justify-center min-h-[80vh] px-4 pt-24">
  <div className="text-center mx-auto w-full px-4 md:px-0 max-w-[1100px]">
      <h1 className="font-dm-sans font-bold text-white mb-8 tracking-[-3.6px] leading-[0.9] text-5xl md:text-6xl lg:text-[72px] xl:text-[88px]">
            <span className="block">Africa’s First Streaming</span>
            <span className="block">and Social Platform,</span>
            <span className="block">Powered by</span>
            <span className="block">StroomCoin</span>
          </h1>

            <p className="font-inter font-normal text-white/95 mb-12 mx-auto max-w-2xl text-xl sm:text-lg md:text-[20px] leading-[1.45] tracking-[-0.3px]">
            Empowering African creators with monetization, exposure, and community impact.
          </p>

          <div className="group relative inline-flex justify-center">
            {/* background pill: fixed large size on md+ to match original design, responsive on small screens */}
            <div className="md:w-[420px] md:h-[96px] w-full max-w-xs sm:max-w-md px-6 py-3 rounded-[62px] bg-button-gradient shadow-[0_4px_40px_rgba(43,87,196,0.2)] transform transition-transform duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_8px_48px_rgba(43,87,196,0.35)]" />
            <button
              onClick={scrollToContact}
              className="btn-animated absolute inset-0 flex items-center justify-center px-6 py-3 md:px-0 md:py-0 font-roboto font-bold text-white text-lg md:text-[36px] leading-[1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[#2B57C4] z-40"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Floating Cursor Icon */}
        <div className="group absolute left-[8%] bottom-[22%] z-10 hidden md:block">
          <img
            src="/cursor%202.png"
            alt="Cursor icon"
            className="w-36 h-36 md:w-[180px] md:h-[180px] object-contain drop-shadow-[0_10px_28px_rgba(16,124,255,0.45)] transform transition-transform duration-300 ease-out will-change-transform group-hover:scale-105"
          />
        </div>
      </div>

      {/* Floating Message Icon */}
  <div className="group absolute right-[6%] bottom-[12%] z-10 pointer-events-auto hidden md:block">
        <img
          src="/message%201.png"
          alt="Message icon"
          className="w-44 h-44 md:w-[200px] md:h-[200px] object-contain filter drop-shadow-[0_16px_40px_rgba(106,100,255,0.6)] transform transition-transform duration-300 ease-out will-change-transform group-hover:scale-110 hover:scale-110"
        />
      </div>
    </section>
  );
}
