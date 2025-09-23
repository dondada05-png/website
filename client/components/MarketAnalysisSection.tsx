import React from "react";

const stats = [
  {
    value: "500M+",
    label: "Internet users in Africa by 2025",
  },
  {
    value: "400M+",
    label: "Social media users by 2027",
  },
  {
    value: "$700B+",
    label: "Annual mobile money transactions",
  },
];

export default function MarketAnalysisSection() {
  return (
    <section className="w-full bg-black py-10 sm:py-20 px-2 sm:px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-center font-bold text-2xl sm:text-4xl md:text-5xl mb-8 sm:mb-14">
          <span className="text-white">Market </span>
          <span style={{ color: '#8000ff' }}>Analysis</span>
        </h2>
        {/* Statistic Boxes */}
  <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[30px] w-full">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-full lg:max-w-[320px] bg-[#181818] border border-[#333] rounded-[12px] px-0 sm:px-5 py-5 sm:py-7 min-w-0 mx-auto"
              style={{ background: '#181818' }}
            >
              {/* Icon placeholder */}
              <div className="mb-4 sm:mb-6 flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-white">
                <span className="text-gray-400 text-xl sm:text-2xl">★</span>
              </div>
              {/* Value */}
              <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{stat.value}</div>
              {/* Label */}
              <div className="text-gray-300 text-center text-sm sm:text-base font-medium leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
