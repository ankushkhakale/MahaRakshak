
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertTriangle, Users, MapPin, Activity } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { ScrollReveal } from './ScrollReveal';

interface HeroSectionProps {
  language: 'en' | 'mr';
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  const text = {
    en: {
      title: 'Intelligent COVID Patient Tracking',
      subtitle: 'Rakshak System for Maharashtra',
      slogan: 'तुमचं आरोग्य, आमचं कर्तव्य!',
      description: 'MahaRakshak integrates IoT health devices for real-time monitoring of COVID patients. Track vitals remotely, receive instant alerts on threshold breaches, and enable healthcare providers to respond swiftly.',
      startTracking: 'Start Patient Tracking',
      viewDashboard: 'View Live Dashboard',
      quickStats: [
        { icon: Activity, value: 247, label: 'Patients Under Monitoring' },
        { icon: Users, value: 89, label: 'IoT Devices Connected', suffix: '+' },
        { icon: MapPin, value: 36, label: 'Districts Covered' }
      ]
    },
    mr: {
      title: 'बुद्धिमान कोविड रुग्ण ट्रॅकिंग',
      subtitle: 'महाराष्ट्रासाठी राक्षक प्रणाली',
      slogan: 'तुमचं आरोग्य, आमचं कर्तव्य!',
      description: 'महाराक्षक कोविड रुग्णांच्या रिअल-टाइम निरीक्षणासाठी IoT आरोग्य उपकरणे एकत्रित करते. दूरस्थपणे महत्वाचे चिन्हे ट्रॅक करा, थ्रेशोल्ड उल्लंघनावर तत्काळ अलर्ट मिळवा आणि आरोग्य प्रदात्यांना त्वरित प्रतिसाद देण्यास सक्षम करा.',
      startTracking: 'रुग्ण ट्रॅकिंग सुरू करा',
      viewDashboard: 'लाइव्ह डॅशबोर्ड पहा',
      quickStats: [
        { icon: Activity, value: 247, label: 'निरीक्षणाधीन रुग्ण' },
        { icon: Users, value: 89, label: 'जोडलेले IoT उपकरणे', suffix: '+' },
        { icon: MapPin, value: 36, label: 'समाविष्ट जिल्हे' }
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
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6 hover:bg-green-200 transition-colors duration-300 cursor-pointer">
                <Activity className="w-4 h-4 mr-2 animate-pulse" />
                Live IoT Monitoring Active
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
                  className="bg-maharashtra-blue hover:bg-blue-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  {text[language].startTracking}
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
