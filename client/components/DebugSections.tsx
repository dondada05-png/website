export default function DebugSections() {
  const sections = ['home', 'explore', 'stroomcoin', 'team', 'contact'];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white/10 backdrop-blur rounded-lg p-4 flex flex-col gap-2">
      <div className="text-white text-sm font-bold mb-2">Quick Navigation:</div>
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className="text-white text-sm bg-brand-blue hover:bg-brand-purple px-3 py-1 rounded transition-colors capitalize"
        >
          {section}
        </button>
      ))}
    </div>
  );
}
