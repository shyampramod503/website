import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-[#00A3E0] text-white py-2 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Call: +1 555 014 7823</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
            <span>Sun: 10:00 AM - 2:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-lg' 
            : 'top-10 bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" onClick={() => scrollToSection('#hero')} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#00A3E0] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                  <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 2.5 1 3.5.5 1 1 2 1 3.5 0 2.5 1 5 2 5.5.5.3 1 .5 1.5.5h1c.5 0 1-.2 1.5-.5 1-.5 2-3 2-5.5 0-1.5.5-2.5 1-3.5.5-1 1-2 1-3.5 0-2.5-2.5-5-6-5zm-2 5c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm4 0c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z"/>
                </svg>
              </div>
              <div className={`transition-colors duration-300 ${isScrolled ? 'text-[#0A2540]' : 'text-white'}`}>
                <span className="text-xl font-bold block leading-tight">BRIGHTWAVE</span>
                <span className="text-xs tracking-widest">DENTAL STUDIO</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-[#00A3E0] ${
                    isScrolled ? 'text-[#0A2540]' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="btn-primary text-sm"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-[#0A2540]' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="container-custom py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-[#0A2540] font-medium py-2 border-b border-gray-100 hover:text-[#00A3E0] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="btn-primary text-center mt-4"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
