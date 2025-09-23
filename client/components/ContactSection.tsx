import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative w-full bg-black py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center relative">
          {/* Section Title */}
          <h2 className="font-dm-sans font-bold text-4xl md:text-[54px] leading-tight text-white text-center mb-4">
            Contact us
          </h2>

          <p className="font-inter text-sm md:text-base text-[#BBB] text-center mb-10 max-w-xl">
            Empower African creators — tell us about your project, partnership or feedback and we'll get back within 48 hours.
          </p>

          {/* Form Container */}
          <div className="relative z-10 w-full flex justify-center">
            <form onSubmit={handleSubmit} className="w-full px-4 sm:px-0 max-w-3xl bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="How can we help? Tell us a bit about your idea or question."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition resize-none mt-1"
                />
              </div>

              <div className="flex items-center justify-between mt-6">
                <p className="text-xs text-[#AAA]">We respect your privacy. No spam.</p>

                <div>
                  <button
                    type="submit"
                    aria-label="Send message"
                    className="btn-animated inline-flex items-center justify-center px-5 py-3 min-w-[120px] rounded-lg bg-send-button-gradient shadow-[0_6px_30px_0_rgba(124,58,237,0.18)] font-roboto font-medium text-base md:text-lg text-white whitespace-nowrap"
                  >
                    <span className="leading-tight">Send message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Decorative Elements */}
          <div className="absolute left-6 top-[170px] hidden lg:block">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/028cdef09bdb772d9c208230b6156a9fbf2da14a?width=526"
              alt="decor"
              className="w-[200px] h-[200px] opacity-60"
            />
          </div>

          <div className="absolute right-8 top-[340px] hidden lg:block">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/02a09f6468ea56d96ae5e0c2522448de4c34bdbb?width=450"
              alt="decor"
              className="w-[180px] h-[180px] transform -rotate-12 opacity-60"
            />
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="absolute bottom-8 left-8">
        <p className="font-inter font-bold text-base leading-[23px] tracking-[-0.16px] text-[#BBB] text-center">
          copyright © 2025 StroomUp
        </p>
      </div>
    </section>
  );
}
