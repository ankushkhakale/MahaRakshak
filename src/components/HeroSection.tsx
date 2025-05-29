
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertTriangle, Users, MapPin } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { ScrollReveal } from './ScrollReveal';

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
        { icon: AlertTriangle, value: 154, label: 'New Cases Since May 19' },
        { icon: Users, value: 2500000, label: 'Citizens Protected', suffix: '+' },
        { icon: MapPin, value: 36, label: 'Districts Covered' }
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
        { icon: AlertTriangle, value: 154, label: '19 मे पासून नवे केसेस' },
        { icon: Users, value: 2500000, label: 'संरक्षित नागरिक', suffix: '+' },
        { icon: MapPin, value: 36, label: 'जिल्हे समाविष्ट' }
      ]
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-maharashtra-saffron rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-maharashtra-blue rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-maharashtra-green rounded-full blur-3xl animate-pulse-soft"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <ScrollReveal delay={200}>
              <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6 hover:bg-red-200 transition-colors duration-300 cursor-pointer">
                <AlertTriangle className="w-4 h-4 mr-2 animate-pulse" />
                COVID-19 Alert: Stay Vigilant, Stay Safe
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 hover:text-maharashtra-blue transition-colors duration-500">
                {text[language].title}
                <span className="text-maharashtra-blue block animate-slide-in-right">{text[language].subtitle}</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <p className="text-2xl md:text-3xl font-devanagari text-maharashtra-saffron font-semibold mb-6 hover:scale-105 transition-transform duration-300">
                {text[language].slogan}
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={800}>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                {text[language].description}
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={1000}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  {text[language].reportCase}
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-maharashtra-blue text-maharashtra-blue hover:bg-maharashtra-blue hover:text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  {text[language].viewDashboard}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Enhanced Quick Stats */}
          <ScrollReveal delay={1200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {text[language].quickStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        <AnimatedCounter 
                          end={stat.value} 
                          suffix={stat.suffix || ''} 
                          duration={2000 + index * 500} 
                        />
                      </div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                    <div className="bg-gradient-to-br from-maharashtra-saffron to-maharashtra-orange p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
