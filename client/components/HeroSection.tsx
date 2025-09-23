export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Large Background Circle - positioned to be visible behind content */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4 w-[1200px] h-[600px] rounded-full border border-[#017DFF] bg-radial-circle opacity-80 z-0" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 pt-24">
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

          <div className="relative inline-block">
            <div className="w-[420px] h-[96px] rounded-[62px] bg-button-gradient shadow-[0_2px_39.1px_0_rgba(43,87,196,0.52)] max-w-full" />
            <button
              onClick={scrollToContact}
              className="absolute inset-0 flex items-center justify-center w-full h-full font-roboto font-bold text-white text-[36px] md:text-[30px] sm:text-[24px] leading-[1] hover:scale-[1.04] transition-transform"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Floating Cursor Elements - positioned relative to center */}
        <div className="absolute left-[calc(50%-100px)] top-[calc(50%+50px)] hidden xl:block z-10">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e90181f06c149bb876c8c7f576dc06f84c5e4b15?width=400"
            alt=""
            className="w-[150px] h-[150px] filter blur-[7px] absolute"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/aee360d17c40c8d39012c6ce364f73448152d83c?width=400"
            alt=""
            className="w-[150px] h-[150px] absolute top-[-7px]"
          />
        </div>
      </div>

      {/* Floating Message Elements - positioned relative to right side */}
      <div className="absolute right-[5%] bottom-[15%] hidden xl:block z-10">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/f99de0771edd80840cd7d0461ac9e8cd82395232?width=400"
          alt=""
          className="w-[150px] h-[150px] filter blur-[7px] absolute"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/acf940d8936d50f1b23c6fe74171c60b3b3d2dcb?width=400"
          alt=""
          className="w-[150px] h-[150px] absolute"
        />
      </div>
    </section>
  );
}
