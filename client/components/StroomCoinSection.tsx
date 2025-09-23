export default function StroomCoinSection() {
  return (
    <section id="stroomcoin" className="relative w-full bg-black py-20">
      <div className="container mx-auto px-12 max-w-7xl">
        <div className="flex flex-col items-center">
          {/* StroomCoin Logo */}
          <div className="mb-8">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/99577c2ade4666dfcf8b10201e2f27d8c87e0dfe?width=336" 
              alt="StroomCoin Logo" 
              className="w-[168px] h-[168px] aspect-square"
            />
          </div>
          
          {/* Content */}
          <div className="flex flex-col items-center gap-5 max-w-[1059px]">
            <h2 className="font-dm-sans font-bold text-[54px] leading-[60px] tracking-[-3.24px] text-center">
              <span className="text-white">Stroom</span>
              <span className="text-brand-gold">Coin</span>
            </h2>
            
            <div className="font-inter text-[22px] leading-[31px] tracking-[-0.792px] text-white text-center max-w-[885px]">
              <span className="font-bold">StroomCoin</span>
              <span className="font-normal"> is a proprietary, non-cryptocurrency in-app coin developed exclusively for </span>
              <span className="font-bold">StroomUp</span>
              <span className="font-normal">, a social media and live streaming platform. Unlike cryptocurrency or CBDCs (Central Bank Digital Currencies), </span>
              <span className="font-bold">StroomCoin</span>
              <span className="font-normal"> is not tradable, not transferable between users, and does not exist outside the</span>
              <span className="font-bold"> StroomUp</span>
              <span className="font-normal"> ecosystem.</span>
              <br /><br />
              <span className="font-normal">Its primary purpose is to enable transactions, rewards, and monetization within the </span>
              <span className="font-bold">StroomUp </span>
              <span className="font-normal">platform, providing creators, viewers, and sponsors with a seamless way to exchange value without leaving the app.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
