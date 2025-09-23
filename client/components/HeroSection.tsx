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
    <section id="home" className="relative w-full h-screen overflow-hidden">
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
      <div className="hero-content relative z-30 flex flex-col items-center justify-center h-full px-4 pt-24">
        <div className="text-center mx-auto max-w-[1100px]">
          <h1 className="font-dm-sans font-bold text-white mb-8 tracking-[-3.6px] leading-[0.9] text-[88px] xl:text-[88px] lg:text-[72px] md:text-[56px] sm:text-[42px] xs:text-[34px]">
            <span className="block">Africa’s First Streaming</span>
            <span className="block">and Social Platform,</span>
            <span className="block">Powered by</span>
            <span className="block">StroomCoin</span>
          </h1>

          <p className="font-inter font-normal text-white/95 mb-12 mx-auto max-w-[560px] text-[22px] md:text-[20px] sm:text-[18px] leading-[1.45] tracking-[-0.3px]">
            Empowering African creators with monetization, exposure, and community impact.
          </p>

          <div className="group relative inline-block">
            <div className="w-[420px] h-[96px] rounded-[62px] bg-button-gradient shadow-[0_2px_39.1px_0_rgba(43,87,196,0.52)] max-w-full transform transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:shadow-[0_8px_48px_rgba(43,87,196,0.55)]" />
            <button
              onClick={scrollToContact}
              className="btn-animated absolute inset-0 flex items-center justify-center w-full h-full font-roboto font-bold text-white text-[36px] md:text-[30px] sm:text-[24px] leading-[1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[#2B57C4]"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Floating Cursor Icon */}
        <div className="group absolute left-[8%] bottom-[22%] z-10">
          <img
            src="/cursor%202.png"
            alt="Cursor icon"
            className="w-[180px] h-[180px] object-contain drop-shadow-[0_10px_28px_rgba(16,124,255,0.45)] transform transition-transform duration-300 ease-out will-change-transform group-hover:scale-105"
          />
        </div>
      </div>

      {/* Floating Message Icon */}
      <div className="group absolute right-[6%] bottom-[12%] z-10 pointer-events-auto">
        <img
          src="/message%201.png"
          alt="Message icon"
          className="w-[200px] h-[200px] object-contain filter drop-shadow-[0_16px_40px_rgba(106,100,255,0.6)] transform transition-transform duration-300 ease-out will-change-transform group-hover:scale-110 hover:scale-110"
        />
      </div>
    </section>
  );
}
