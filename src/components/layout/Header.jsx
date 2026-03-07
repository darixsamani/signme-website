import { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';
import logo from '../../assets/logo-with-text-dark-background.svg';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Security', href: '#security' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          {/* <img 
            src="https://storage.googleapis.com/lexis-ia.firebasestorage.app/users/8VTY3BU052bqicuiGMkr4reWZMV2/projects/c04e583c-5db5-4842-ad2f-35e80f9de5c7/logos/logo-primary.svg" 
            alt="SignMe Logo" 
            className="h-10 w-auto"
          /> */}
          <img 
            src={logo} 
            alt="SignMe Logo" 
            className="h-8 w-auto"
          />
          <span className="text-2xl font-display font-extrabold gradient-text">SignMe</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-midnight font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="ghost" className="mr-2">Login</Button>
          <Button>Get Started</Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-midnight" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-midnight text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <hr />
          <Button variant="secondary">Login</Button>
          <Button>Get Started</Button>
        </div>
      )}
    </header>
  );
};