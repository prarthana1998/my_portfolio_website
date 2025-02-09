import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education'];

  const NavLink = ({ section }: { section: string }) => (
    <button
      onClick={() => {
        setActiveSection(section.toLowerCase());
        setIsMenuOpen(false);
      }}
      className={`${
        activeSection === section.toLowerCase()
          ? 'text-blue-600 font-mono'
          : 'text-gray-600 hover:text-blue-600'
      } transition-colors duration-200`}
    >
      {section}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-amber-300 shadow-md z-50">
      <div className="container mx-auto px-6 py-4 ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-mono text-black-800">Prarthana Kandwal</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <NavLink key={section} section={section} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            {sections.map((section) => (
              <div key={section} className="px-2">
                <NavLink section={section} />
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;