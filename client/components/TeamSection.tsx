interface TeamMemberProps {
  name: string;
  title: string;
  image?: string;
  isPlaceholder?: boolean;
}

function TeamMember({ name, title, image, isPlaceholder = false }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center group">
      {/* Image Container */}
      <div className="w-[235px] h-[331px] rounded-[27px] bg-black mb-6 overflow-hidden relative cursor-pointer">
        {image && !isPlaceholder ? (
          <img 
            src={image} 
            alt={name}
            className="absolute inset-0 w-full h-full object-cover block transform transition-transform duration-300 ease-out group-hover:scale-105"
          />
        ) : null}
      </div>
      
      {/* Team Member Info */}
      <div className="text-center">
        <div className="font-roboto font-bold text-[22px] leading-[28px] text-white mb-2">
          {title}
        </div>
        <div className="font-roboto font-bold text-[22px] leading-[28px] text-white">
          {name}
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Rusango André Salvator",
      title: "Chief Executive Officer (CEO)",
      image: "/rusango.jpg?v=1",
      isPlaceholder: false
    },
    {
      name: "Uteramahoro Avellin Bonaparte",
      title: "Chief Operational Officer (COO)",
      isPlaceholder: true
    },
    {
      name: "Tuyishime Ricardo",
      title: "Corporate Development Director",
      isPlaceholder: true
    },
    {
      name: "Mucyo Kevin",
      title: "Chief Technology Officer (CTO)",
      isPlaceholder: true
    }
  ];

  return (
    <section id="team" className="relative w-full bg-black py-20">
      <div className="container mx-auto px-12 max-w-7xl">
        <div className="flex flex-col items-center">
          {/* Section Title */}
          <h2 className="font-dm-sans font-bold text-[54px] leading-[60px] tracking-[-3.24px] text-white text-center mb-16">
            Our Team
          </h2>
          
          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full justify-items-center">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                image={member.image}
                isPlaceholder={member.isPlaceholder}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
