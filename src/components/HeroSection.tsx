
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertTriangle, Users, MapPin } from 'lucide-react';

interface HeroSectionProps {
  language: 'en' | 'mr';
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  const text = {
    en: {
      title: 'Real-Time COVID Suspect Tracking',
      subtitle: 'for Maharashtra',
      slogan: 'तुमचं आरोग्य, आमचं कर्तव्य!',
      description: 'MahaRakshak enables community-driven COVID-19 suspect tracking across Maharashtra. Report symptoms, track hotspots, and help prevent the spread.',
      reportCase: 'Report Suspected Case',
      viewDashboard: 'View Dashboard',
      quickStats: [
        { icon: AlertTriangle, value: '154', label: 'New Cases Since May 19' },
        { icon: Users, value: '2.5M+', label: 'Citizens Protected' },
        { icon: MapPin, value: '36', label: 'Districts Covered' }
      ]
    },
    mr: {
      title: 'रिअल-टाइम कोविड संशयित ट्रॅकिंग',
      subtitle: 'महाराष्ट्रासाठी',
      slogan: 'तुमचं आरोग्य, आमचं कर्तव्य!',
      description: 'महाराक्षक महाराष्ट्रातील समुदाय-चालित कोविड-19 संशयित ट्रॅकिंग सक्षम करते. लक्षणे नोंदवा, हॉटस्पॉट्स ट्रॅक करा आणि प्रसार रोखण्यास मदत करा.',
      reportCase: 'संशयित केस नोंदवा',
      viewDashboard: 'डॅशबोर्ड पहा',
      quickStats: [
        { icon: AlertTriangle, value: '154', label: '19 मे पासून नवे केसेस' },
        { icon: Users, value: '2.5M+', label: 'संरक्षित नागरिक' },
        { icon: MapPin, value: '36', label: 'जिल्हे समाविष्ट' }
      ]
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-maharashtra-saffron rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-maharashtra-blue rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <AlertTriangle className="w-4 h-4 mr-2" />
              COVID-19 Alert: Stay Vigilant, Stay Safe
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
              {text[language].title}
              <span className="text-maharashtra-blue block">{text[language].subtitle}</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-devanagari text-maharashtra-saffron font-semibold mb-6 animate-fade-in">
              {text[language].slogan}
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
              {text[language].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                {text[language].reportCase}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-maharashtra-blue text-maharashtra-blue hover:bg-maharashtra-blue hover:text-white px-8 py-3 text-lg">
                {text[language].viewDashboard}
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {text[language].quickStats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                  <div className="bg-gradient-to-br from-maharashtra-saffron to-maharashtra-orange p-3 rounded-lg">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
