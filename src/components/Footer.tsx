
import { Shield, Mail, Phone, MapPin, Twitter, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'mr';
}

export const Footer = ({ language }: FooterProps) => {
  const text = {
    en: {
      slogan: 'तुमचं आरोग्य, आमचं कर्तव्य!',
      description: 'MahaRakshak is Maharashtra\'s first community-driven COVID-19 suspect tracking platform, built to protect and empower every citizen.',
      quickLinks: {
        title: 'Quick Links',
        links: ['Dashboard', 'Report Case', 'Statistics', 'Testing Centers', 'Health Guidelines']
      },
      contact: {
        title: 'Contact Information',
        emergency: 'Emergency Helpline: 104',
        support: 'Support: 1800-XXX-XXXX',
        email: 'info@maharakshak.gov.in',
        address: 'Maharashtra Health Department, Mumbai'
      },
      legal: {
        title: 'Legal',
        links: ['Privacy Policy', 'Terms of Service', 'Data Protection', 'Accessibility']
      },
      copyright: '2025 Government of Maharashtra. All rights reserved.',
      builtWith: 'Built with ❤️ for Maharashtra'
    },
    mr: {
      slogan: 'तुमचं आरोग्य, आमचं कर्तव्य!',
      description: 'महाराक्षक हा महाराष्ट्राचा पहिला समुदाय-चालित कोविड-19 संशयित ट्रॅकिंग प्लॅटफॉर्म आहे, जो प्रत्येक नागरिकाचे संरक्षण आणि सक्षमीकरण करण्यासाठी तयार केला गेला आहे.',
      quickLinks: {
        title: 'द्रुत दुवे',
        links: ['डॅशबोर्ड', 'केस नोंदवा', 'आकडेवारी', 'टेस्टिंग सेंटर्स', 'आरोग्य मार्गदर्शक तत्त्वे']
      },
      contact: {
        title: 'संपर्क माहिती',
        emergency: 'आणीबाणी हेल्पलाइन: 104',
        support: 'समर्थन: 1800-XXX-XXXX',
        email: 'info@maharakshak.gov.in',
        address: 'महाराष्ट्र आरोग्य विभाग, मुंबई'
      },
      legal: {
        title: 'कायदेशीर',
        links: ['गोपनीयता धोरण', 'सेवा अटी', 'डेटा संरक्षण', 'प्रवेशयोग्यता']
      },
      copyright: '2025 महाराष्ट्र सरकार. सर्व हक्क राखीव.',
      builtWith: 'महाराष्ट्रासाठी ❤️ ने तयार केले'
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-maharashtra-saffron to-maharashtra-orange p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MahaRakshak</h3>
                <p className="text-sm text-gray-400 font-devanagari">{text[language].slogan}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {text[language].description}
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{text[language].quickLinks.title}</h4>
            <ul className="space-y-2">
              {text[language].quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{text[language].contact.title}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-sm text-gray-400">{text[language].contact.emergency}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">{text[language].contact.support}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">{text[language].contact.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">{text[language].contact.address}</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{text[language].legal.title}</h4>
            <ul className="space-y-2">
              {text[language].legal.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {text[language].copyright}
            </p>
            <p className="text-gray-400 text-sm">
              {text[language].builtWith}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
