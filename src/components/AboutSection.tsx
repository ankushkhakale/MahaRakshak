
import { Shield, Target, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface AboutSectionProps {
  language: 'en' | 'mr';
}

export const AboutSection = ({ language }: AboutSectionProps) => {
  const text = {
    en: {
      title: 'About MahaRakshak',
      subtitle: 'Born from necessity, built for Maharashtra',
      description: 'In response to the recent surge of 154 new COVID-19 cases since 19th May 2025, as reported by the Ministry of Health and Family Welfare, MahaRakshak offers a focused solution for early detection and containment.',
      mission: 'Our Mission',
      missionText: 'To prevent a repeat of the 2020 crisis by enabling community-level tracking and swift public health response across Maharashtra.',
      values: [
        {
          icon: Shield,
          title: 'Protection First',
          description: 'Your health and privacy are our top priorities in everything we build.'
        },
        {
          icon: Target,
          title: 'Precision Tracking',
          description: 'Hyperlocal focus on Maharashtra\'s unique geographical and demographic needs.'
        },
        {
          icon: Users,
          title: 'Community Driven',
          description: 'Empowering every citizen to contribute to collective health and safety.'
        },
        {
          icon: Zap,
          title: 'Rapid Response',
          description: 'Real-time alerts and immediate action capabilities for health authorities.'
        }
      ],
      impact: {
        title: 'Our Impact Goals',
        goals: [
          'Early detection of COVID-19 hotspots before they become critical',
          'Empowering health workers with actionable, localized data',
          'Building community awareness and proactive health behavior',
          'Supporting government decision-making with real-time insights'
        ]
      },
      commitment: 'Our commitment to Maharashtra goes beyond technology — we\'re building a healthier, more resilient future for all.'
    },
    mr: {
      title: 'महाराक्षकाबद्दल',
      subtitle: 'गरजेतून जन्मलेले, महाराष्ट्रासाठी तयार केलेले',
      description: '19 मे 2025 पासून 154 नवीन कोविड-19 प्रकरणांच्या अलीकडील वाढीला प्रतिसाद म्हणून, आरोग्य आणि कुटुंब कल्याण मंत्रालयाने नोंदवल्याप्रमाणे, महाराक्षक लवकर शोध आणि प्रतिबंधासाठी एक केंद्रित समाधान देते.',
      mission: 'आमचे ध्येय',
      missionText: 'महाराष्ट्रभर समुदाय-स्तरीय ट्रॅकिंग आणि जलद सार्वजनिक आरोग्य प्रतिसाद सक्षम करून 2020 च्या संकटाची पुनरावृत्ती टाळणे.',
      values: [
        {
          icon: Shield,
          title: 'संरक्षण प्रथम',
          description: 'आम्ही जे काही बांधतो त्यात तुमचे आरोग्य आणि गोपनीयता आमच्या सर्वोच्च प्राधान्यांपैकी आहेत.'
        },
        {
          icon: Target,
          title: 'परिशुद्ध ट्रॅकिंग',
          description: 'महाराष्ट्राच्या अनन्य भौगोलिक आणि लोकसंख्याशास्त्रीय गरजांवर अतिस्थानिक फोकस.'
        },
        {
          icon: Users,
          title: 'समुदाय चालित',
          description: 'सामूहिक आरोग्य आणि सुरक्षिततेसाठी योगदान देण्यासाठी प्रत्येक नागरिकास सक्षम करणे.'
        },
        {
          icon: Zap,
          title: 'जलद प्रतिसाद',
          description: 'आरोग्य अधिकाऱ्यांसाठी रिअल-टाइम अलर्ट आणि त्वरित कृती क्षमता.'
        }
      ],
      impact: {
        title: 'आमची प्रभाव उद्दिष्टे',
        goals: [
          'कोविड-19 हॉटस्पॉट्स गंभीर होण्यापूर्वी त्यांचा लवकर शोध',
          'आरोग्य कर्मचाऱ्यांना कृती-योग्य, स्थानिकीकृत डेटासह सक्षम करणे',
          'समुदायिक जागरूकता आणि सक्रिय आरोग्य वर्तन निर्माण करणे',
          'रिअल-टाइम अंतर्दृष्टीसह सरकारी निर्णय घेण्यास समर्थन करणे'
        ]
      },
      commitment: 'महाराष्ट्राप्रति आमची बांधिलकी तंत्रज्ञानाच्या पलीकडे आहे — आम्ही सर्वांसाठी एक निरोगी, अधिक लवचिक भविष्य बांधत आहोत.'
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {text[language].title}
            </h2>
            <p className="text-xl text-maharashtra-blue font-medium mb-6">
              {text[language].subtitle}
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {text[language].description}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-maharashtra-saffron/10 to-maharashtra-orange/10 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
              {text[language].mission}
            </h3>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              {text[language].missionText}
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {text[language].values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-maharashtra-blue to-blue-600 p-3 rounded-lg flex-shrink-0">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Goals */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              {text[language].impact.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {text[language].impact.goals.map((goal, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-maharashtra-green w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment */}
          <div className="text-center">
            <p className="text-lg text-gray-700 italic max-w-2xl mx-auto leading-relaxed">
              "{text[language].commitment}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
