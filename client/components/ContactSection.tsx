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
      <div className="container mx-auto px-12 max-w-7xl">
        <div className="flex flex-col items-center relative">
          {/* Section Title */}
          <h2 className="font-dm-sans font-bold text-[54px] leading-[60px] tracking-[-3.24px] text-white text-center mb-8">
            Contact us
          </h2>
          
          <p className="font-inter font-bold text-base leading-[23px] tracking-[-0.16px] text-[#BBB] text-center mb-16 max-w-[498px]">
            Empower African creators, elevate the value of digital content.
          </p>
          
          {/* Form Container */}
          <div className="relative z-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-[503px]">
              {/* Name Input */}
              <div className="contact-input flex items-center gap-2 w-[479px] h-[42px] px-3 py-2 rounded-[10px] bg-white/20">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="flex-1 bg-transparent text-white placeholder-white/50 font-inter text-base font-medium tracking-[-0.32px] outline-none"
                />
              </div>
              
              {/* Email Input */}
              <div className="contact-input flex items-center gap-2 w-[479px] h-[42px] px-3 py-2 rounded-[10px] bg-white/20">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="flex-1 bg-transparent text-white placeholder-white/50 font-inter text-base font-medium tracking-[-0.32px] outline-none"
                />
              </div>
              
              {/* Message Textarea */}
              <div className="contact-textarea flex items-start gap-2 w-[487px] h-[178px] px-3 py-2 rounded-[15px] bg-white/20">
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="flex-1 h-full bg-transparent text-white placeholder-white/50 font-inter text-base font-medium tracking-[-0.32px] outline-none resize-none"
                />
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-center mt-8">
                <div className="relative">
                  <div className="w-[145px] h-[47px] rounded-[19px] bg-send-button-gradient shadow-[0_3px_26px_0_rgba(255,255,255,0.25)]" />
                  <button 
                    type="submit"
                    className="btn-animated absolute inset-0 flex items-center justify-center w-[145px] h-[47px] font-roboto font-normal text-[24px] leading-[32px] text-white"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute left-[46px] top-[195px] hidden lg:block">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/028cdef09bdb772d9c208230b6156a9fbf2da14a?width=526" 
              alt="" 
              className="w-[263px] h-[263px]"
            />
          </div>
          
          <div className="absolute right-[93px] top-[345px] hidden lg:block">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/02a09f6468ea56d96ae5e0c2522448de4c34bdbb?width=450" 
              alt="" 
              className="w-[225px] h-[225px] transform rotate-[-12.554deg]"
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
