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
      <div className="w-56 h-80 sm:w-60 sm:h-88 rounded-[22px] bg-black mb-6 overflow-hidden relative cursor-pointer">
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
        <div className="team-member-title font-roboto font-bold text-base sm:text-[22px] leading-[1.2] text-white mb-2">
          {title}
        </div>
        <div className="team-member-name font-roboto font-bold text-base sm:text-[22px] leading-[1.2] text-white">
          {name}
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Salvator André Rusango",
      title: "Chief Executive Officer (CEO)",
      image: "/rusango.jpg?v=1",
      isPlaceholder: false
    },
    {
      name: "Avellin Bonaparte Uteramahoro",
      title: "Chief Operational Officer (COO)",
      image: "/avellin.jpg",
      isPlaceholder: false
    },
    {
      name: "Ricardo Tuyishimire",
      title: "Corporate Development Director",
      image: "/ricardo.jpg",
      isPlaceholder: false
    },
    {
      name: "Kevin Mucyo",
      title: "Chief Technology Officer (CTO)",
      image: "/kevin.JPG",
      isPlaceholder: false
    }
  ];

  return (
    <section id="team" className="relative w-full bg-black py-20">
      <div className="container mx-auto px-12 max-w-7xl">
        <div className="flex flex-col items-center">
          {/* Section Title */}
          <h2 className="font-dm-sans font-bold text-3xl sm:text-4xl md:text-[54px] leading-tight text-white text-center mb-12 sm:mb-16">
            Our Team
          </h2>
          
          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 w-full justify-items-center">
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
