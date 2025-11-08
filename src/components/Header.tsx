import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-30 border-b border-[#00ff00]">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Home Link */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-[#00ff00] hover:text-[#00ff00] transition-colors flex items-center gap-2 glow"
        >
          <Terminal size={20} />
          <span>portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link
            to="/about"
            onClick={closeMenu}
            className="text-[#00aa00] hover:text-[#00ff00] transition-colors hover:glow"
          >
            $ about
          </Link>
          <Link
            to="/skills"
            onClick={closeMenu}
            className="text-[#00aa00] hover:text-[#00ff00] transition-colors hover:glow"
          >
            $ skills
          </Link>
          <Link
            to="/projects"
            onClick={closeMenu}
            className="text-[#00aa00] hover:text-[#00ff00] transition-colors hover:glow"
          >
            $ projects
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-[#00aa00] hover:text-[#00ff00] transition-colors hover:glow"
          >
            $ contact
          </Link>
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
              <Link
                to="/about"
                onClick={closeMenu}
                className="text-[#00aa00] hover:text-[#00ff00] transition-colors text-left hover:glow"
              >
                $ about
              </Link>
              <Link
                to="/skills"
                onClick={closeMenu}
                className="text-[#00aa00] hover:text-[#00ff00] transition-colors text-left hover:glow"
              >
                $ skills
              </Link>
              <Link
                to="/projects"
                onClick={closeMenu}
                className="text-[#00aa00] hover:text-[#00ff00] transition-colors text-left hover:glow"
              >
                $ projects
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="text-[#00aa00] hover:text-[#00ff00] transition-colors text-left hover:glow"
              >
                $ contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
