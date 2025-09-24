import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { src: "/front.png", alt: "App front" },
  { src: "/side.png", alt: "App side preview" },
];

export default function AppSection() {
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef<number | null>(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    // autoplay every 4s
    function play() {
      if (hoverRef.current) return;
      setIndex((i) => (i + 1) % SLIDES.length);
    }

    autoplayRef.current = window.setInterval(play, 4000);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, []);

  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIndex((i) => (i + 1) % SLIDES.length);

  return (
    <section id="app" className="relative w-full bg-black py-20">
      <div className="container mx-auto px-12 max-w-7xl">
        <div className="flex flex-col items-center">
          <h2 className="font-dm-sans font-bold text-3xl sm:text-4xl md:text-[54px] leading-tight text-white text-center mb-8">
            Our App
          </h2>

          <p className="text-center text-white/80 max-w-2xl mb-10">
            Preview of our app interface. Hover the images to pause the carousel.
          </p>

          <div
            className="w-full max-w-4xl relative"
            onMouseEnter={() => (hoverRef.current = true)}
            onMouseLeave={() => (hoverRef.current = false)}
          >
            {/* Large slide area */}
            <div className="relative w-full h-[420px] sm:h-[520px] rounded-2xl overflow-hidden bg-gray-900">
              {SLIDES.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out transform ${
                    i === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  }`}
                />
              ))}

              {/* Prev/Next controls */}
              <button
                aria-label="Previous"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
              >
                ‹
              </button>
              <button
                aria-label="Next"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
              >
                ›
              </button>
            </div>

            {/* Indicators below the main slide */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
