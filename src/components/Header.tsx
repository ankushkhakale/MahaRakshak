
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, Globe } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'mr';
  setLanguage: (lang: 'en' | 'mr') => void;
}

export const Header = ({ language, setLanguage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const text = {
    en: {
      nav: ['Dashboard', 'Report Case', 'Statistics', 'About', 'Contact'],
      emergency: 'Emergency: 104',
      login: 'Health Worker Login'
    },
    mr: {
      nav: ['डॅशबोर्ड', 'केस नोंदवा', 'आकडेवारी', 'आमच्याबद्दल', 'संपर्क'],
      emergency: 'आणीबाणी: 104',
      login: 'आरोग्य कर्मचारी लॉगिन'
    }
  };

  return (
    <header className="bg-white shadow-lg border-b-4 border-maharashtra-saffron sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-maharashtra-saffron to-maharashtra-orange p-2 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-maharashtra-blue">MahaRakshak</h1>
              <p className="text-xs text-gray-600 font-devanagari">तुमचं आरोग्य, आमचं कर्तव्य!</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {text[language].nav.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-maharashtra-blue font-medium transition-colors duration-200 hover:border-b-2 hover:border-maharashtra-saffron pb-1"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-red-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-soft mr-2"></div>
              <span className="text-red-700 font-medium text-sm">{text[language].emergency}</span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
              className="border-maharashtra-blue text-maharashtra-blue hover:bg-maharashtra-blue hover:text-white"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === 'en' ? 'मराठी' : 'ENG'}
            </Button>

            <Button className="bg-maharashtra-blue hover:bg-blue-700">
              {text[language].login}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {text[language].nav.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 hover:text-maharashtra-blue font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                >
                  {item}
                </a>
              ))}
              <div className="border-t pt-3 mt-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
                  className="w-full mb-2"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  {language === 'en' ? 'मराठी' : 'English'}
                </Button>
                <Button className="w-full bg-maharashtra-blue hover:bg-blue-700">
                  {text[language].login}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
