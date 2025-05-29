
import { Heart, Shield, Briefcase, Home } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from './ScrollReveal';

interface GovernmentInitiativesProps {
  language: 'en' | 'mr';
}

export const GovernmentInitiatives = ({ language }: GovernmentInitiativesProps) => {
  const text = {
    en: {
      title: 'Government Initiatives & Schemes',
      subtitle: 'Support programs for COVID-19 patients and affected families',
      initiatives: [
        {
          icon: Heart,
          title: 'PM-CARES Fund',
          description: 'Emergency relief fund for COVID-19 treatment and support for affected families',
          benefits: ['Free treatment in government hospitals', 'Financial assistance for families', 'Medical equipment support']
        },
        {
          icon: Shield,
          title: 'Pradhan Mantri Garib Kalyan Yojana',
          description: 'Comprehensive package for poor and vulnerable sections during COVID-19',
          benefits: ['Free food grains for 3 months', 'Direct cash transfer', 'Free cooking gas cylinders']
        },
        {
          icon: Briefcase,
          title: 'Employment Support Schemes',
          description: 'Job security and employment generation during pandemic',
          benefits: ['MGNREGA job guarantee', 'Skill development programs', 'Self-employment opportunities']
        },
        {
          icon: Home,
          title: 'Maharashtra State Schemes',
          description: 'State-specific support programs for COVID-19 relief',
          benefits: ['Mahatma Jyotiba Phule Jan Arogya Yojana', 'State disaster relief fund', 'Local employment schemes']
        }
      ]
    },
    mr: {
      title: 'सरकारी उपक्रम आणि योजना',
      subtitle: 'कोविड-19 रुग्ण आणि प्रभावित कुटुंबांसाठी सहाय्य कार्यक्रम',
      initiatives: [
        {
          icon: Heart,
          title: 'पीएम-केअर्स फंड',
          description: 'कोविड-19 उपचार आणि प्रभावित कुटुंबांसाठी आपत्कालीन मदत फंड',
          benefits: ['सरकारी रुग्णालयात मोफत उपचार', 'कुटुंबांसाठी आर्थिक सहाय्य', 'वैद्यकीय उपकरणे सहाय्य']
        },
        {
          icon: Shield,
          title: 'प्रधानमंत्री गरीब कल्याण योजना',
          description: 'कोविड-19 दरम्यान गरीब आणि असुरक्षित वर्गासाठी व्यापक पॅकेज',
          benefits: ['3 महिन्यांसाठी मोफत अन्नधान्य', 'थेट रोख हस्तांतरण', 'मोफत स्वयंपाकाचे गॅस सिलिंडर']
        },
        {
          icon: Briefcase,
          title: 'रोजगार सहाय्य योजना',
          description: 'साथीच्या आजारादरम्यान नोकरीची सुरक्षा आणि रोजगार निर्मिती',
          benefits: ['मनरेगा नोकरीची हमी', 'कौशल्य विकास कार्यक्रम', 'स्वरोजगार संधी']
        },
        {
          icon: Home,
          title: 'महाराष्ट्र राज्य योजना',
          description: 'कोविड-19 मदतीसाठी राज्य-विशिष्ट सहाय्य कार्यक्रम',
          benefits: ['महात्मा ज्योतिबा फुले जन आरोग्य योजना', 'राज्य आपत्ती मदत फंड', 'स्थानिक रोजगार योजना']
        }
      ]
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {text[language].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {text[language].subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {text[language].initiatives.map((initiative, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <Card className="h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="bg-gradient-to-br from-maharashtra-blue to-blue-600 p-3 rounded-lg">
                      <initiative.icon className="h-6 w-6 text-white" />
                    </div>
                    {initiative.title}
                  </CardTitle>
                  <p className="text-gray-600">{initiative.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {initiative.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-maharashtra-blue rounded-full flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
