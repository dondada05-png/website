export default function AppSection() {
  return (
    <section id="app" className="relative w-full bg-black py-20">
      <div className="container mx-auto px-12 max-w-7xl">
        <div className="flex flex-col items-center">
          <h2 className="font-dm-sans font-bold text-3xl sm:text-4xl md:text-[54px] leading-tight text-white text-center mb-8">
            Our App
          </h2>

          <p className="text-center text-white/80 max-w-2xl mb-10">
            Preview of our app interface. Hover the images to see a subtle animation.
          </p>

          <div className="w-full max-w-4xl relative">
            {/* Top image - stacked */}
            <div className="group relative w-full h-[420px] sm:h-[520px] rounded-2xl overflow-hidden bg-gray-900">
              <img
                src="/front.png"
                alt="App front"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-400 ease-out group-hover:scale-105 group-hover:translate-y-[-6px]"
              />
            </div>

            {/* Bottom image aligned to bottom of the section */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-3/4 sm:w-2/3 md:w-1/2 bottom-0 translate-y-1/2">
              <div className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-shadow duration-300 h-48 sm:h-60 md:h-72 bg-gray-900">
                <img
                  src="/side.png"
                  alt="App side preview"
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-400 ease-out group-hover:scale-105 group-hover:translate-y-[-6px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
