interface MarketCardProps {
  value: string;
  description: string;
  color: string;
}

function MarketCard({ value, description, color }: MarketCardProps) {
  return (
  <div className="market-card flex flex-col items-center justify-center gap-6 w-full max-w-xs sm:max-w-[320px] p-6 sm:p-8 rounded-lg border border-white/20 bg-[#0D0D0D]">
      {/* Icon Container */}
  <div className="flex items-center justify-center p-4 sm:p-5 rounded-md bg-white">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.7672 3.11412C17.7538 2.88477 17.6567 2.66832 17.4942 2.50586C17.3317 2.34341 17.1153 2.24627 16.8859 2.23287C13.7922 2.05084 11.0586 2.41568 8.76094 3.31647C6.56251 4.17818 4.86797 5.51412 3.8586 7.17975C2.48204 9.45397 2.47891 12.2149 3.82344 14.8508L2.46172 16.2126C2.37452 16.2998 2.30534 16.4033 2.25815 16.5172C2.21095 16.6312 2.18666 16.7533 2.18666 16.8766C2.18666 16.9999 2.21095 17.1221 2.25815 17.236C2.30534 17.3499 2.37452 17.4535 2.46172 17.5407C2.63784 17.7168 2.87672 17.8157 3.12579 17.8157C3.24911 17.8157 3.37124 17.7915 3.48518 17.7443C3.59912 17.6971 3.70264 17.6279 3.78985 17.5407L5.15157 16.179C6.45938 16.8462 7.79844 17.1829 9.09297 17.1829C10.4082 17.187 11.699 16.8274 12.8227 16.1438C14.4883 15.1344 15.8242 13.4391 16.6859 11.2415C17.5844 8.94225 17.9492 6.20787 17.7672 3.11412ZM11.8484 14.5376C10.2789 15.4883 8.43751 15.5602 6.55782 14.7657L13.1625 8.161C13.2497 8.07379 13.3189 7.97026 13.3661 7.85632C13.4133 7.74238 13.4376 7.62026 13.4376 7.49693C13.4376 7.37361 13.4133 7.25149 13.3661 7.13755C13.3189 7.02361 13.2497 6.92008 13.1625 6.83287C13.0753 6.74567 12.9718 6.67649 12.8578 6.62929C12.7439 6.5821 12.6218 6.55781 12.4984 6.55781C12.3751 6.55781 12.253 6.5821 12.1391 6.62929C12.0251 6.67649 11.9216 6.74567 11.8344 6.83287L5.23438 13.4422C4.44219 11.5672 4.51407 9.72115 5.46876 8.15162C7.10235 5.45396 10.9797 3.95475 15.9375 4.06959C16.0453 9.02584 14.5461 12.904 11.8484 14.5376Z" fill="black"/>
        </svg>
      </div>
      
      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-2">
  <div className={`font-roboto font-normal text-3xl sm:text-[45px] leading-[40px] sm:leading-[52px] text-center ${color}`}>
          {value}
        </div>
  <div className="font-inter font-bold text-sm sm:text-base leading-[1.25] tracking-[-0.16px] text-white text-center max-w-[22rem]">
          {description}
        </div>
      </div>
    </div>
  );
}

export default function ExploreSection() {
  const marketData = [
    {
      value: "500M +",
      description: "Internet users in Africa by 2025",
      color: "text-[#1546C1]"
    },
    {
      value: "400M +", 
      description: "Social media users by 2027",
      color: "text-[#124BC5]"
    },
    {
      value: "$700B+",
      description: "Annual mobile money transactions.",
      color: "text-[#134AC4]"
    }
  ];

  return (
  <section id="explore" className="relative w-full bg-black py-20 scroll-mt-[72px]">
      {/* Section Gradient Background */}
      <div className="absolute inset-0 bg-section-gradient" />
      
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col items-center gap-12">
          {/* Header */}
          <div className="flex flex-col items-center gap-5 text-center">
            <h2 className="font-dm-sans font-bold text-3xl sm:text-4xl md:text-[54px] leading-tight tracking-[-2px]">
              <span className="text-white">Explore </span>
              <span className="text-brand-purple">StroomUp</span>
            </h2>
            
            <div className="font-inter text-base sm:text-lg leading-[1.4] tracking-[-0.5px] text-white max-w-3xl">
              <span className="font-normal">The platform integrates a built-in digital coin, </span>
              <span className="font-bold">StroomCoin</span>
              <span className="font-normal">, designed to revolutionize content creation, monetization, and digital engagement across Africa. With </span>
              <span className="font-bold">StroomCoin</span>
              <span className="font-normal">, users can donate, gift, unlock premium streams, purchase verification badges, boost posts, and much more. Our mission is to empower African creators, elevate the value of digital content, and provide new channels for donations, advertising, and community engagement.</span>
              <br /><br />
              <span className="font-bold">StroomUp</span>
              <span className="font-normal"> is a tools for creators, but also impact for communities. </span>
              <span className="font-bold">StroomUp </span>
              <span className="font-normal">will support fundraising for education, health, and NGOs, sponsor local content competitions, and partner with NGOs for social campaigns.</span>
            </div>
          </div>
          
          {/* Market Analysis */}
          <div className="flex flex-col items-center gap-8 w-full">
            <h3 className="font-dm-sans font-bold text-2xl sm:text-3xl md:text-[54px] leading-tight text-center">
              <span className="text-white">Market </span>
              <span className="text-brand-purple">Analysis</span>
            </h3>
            
            {/* Market Cards */}
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-6xl">
              {marketData.map((item, index) => (
                <MarketCard
                  key={index}
                  value={item.value}
                  description={item.description}
                  color={item.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
