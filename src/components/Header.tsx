import { Menu, X, Terminal } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
    if (id === "hero") {
  // Compensate for Hero's marginTop visually, scroll just enough to show full Hero
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - 100; // 100 matches your Hero marginTop
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-30 border-b border-[#00ff00]">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-[#00ff00] hover:text-[#00ff00] transition-colors flex items-center gap-2 glow"
        >
          <Terminal size={20} />
          <span>portfolio</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('about')} className="text-[#00aa00] hover:text-[#00ff00] transition-colors hover:glow">
            $ about
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-[#00aa00] hover:text-[#00ff00] transition-colors hover:glow">
            $ skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-[#00aa00] hover:text-[#00ff00] transition-colors hover:glow">
            $ projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-[#00aa00] hover:text-[#00ff00] transition-colors hover:glow">
            $ contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#00ff00]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-b border-[#00ff00] md:hidden">
            <div className="flex flex-col gap-4 px-6 py-4">
              <button onClick={() => scrollToSection('about')} className="text-[#00aa00] hover:text-[#00ff00] transition-colors text-left hover:glow">
                $ about
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-[#00aa00] hover:text-[#00ff00] transition-colors text-left hover:glow">
                $ skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-[#00aa00] hover:text-[#00ff00] transition-colors text-left hover:glow">
                $ projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#00aa00] hover:text-[#00ff00] transition-colors text-left hover:glow">
                $ contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
