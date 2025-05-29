
import { Smartphone, MapPin, Users, Brain, Shield, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeaturesSectionProps {
  language: 'en' | 'mr';
}

export const FeaturesSection = ({ language }: FeaturesSectionProps) => {
  const text = {
    en: {
      title: 'How MahaRakshak is Different',
      subtitle: 'Built specifically for Maharashtra with unique features that set us apart',
      features: [
        {
          icon: MapPin,
          title: 'Hyperlocal Focus',
          description: 'Unlike national-level apps, MahaRakshak zooms in on Maharashtra\'s district and taluka-level data for precise tracking.',
          highlight: 'District & Taluka Level'
        },
        {
          icon: Users,
          title: 'Public Participation',
          description: 'Encourages community-driven suspect tracking, not just clinical case recording. Every citizen can contribute.',
          highlight: 'Community Driven'
        },
        {
          icon: Smartphone,
          title: 'Web-First Design',
          description: 'No app installation needed — runs smoothly on any browser, even low-end smartphones. Accessible to everyone.',
          highlight: 'Device Agnostic'
        },
        {
          icon: Brain,
          title: 'AI-Powered Insights',
          description: 'Advanced analytics and prediction models help identify potential hotspots before they become critical.',
          highlight: 'Smart Predictions'
        },
        {
          icon: Shield,
          title: 'Privacy Protected',
          description: 'Your personal data is encrypted and protected. Only anonymized data is used for public health insights.',
          highlight: 'Secure & Private'
        },
        {
          icon: Clock,
          title: 'Real-Time Updates',
          description: 'Get instant notifications about cases in your area and government health advisories.',
          highlight: 'Live Monitoring'
        }
      ],
      usp: {
        title: 'Unique Selling Proposition',
        points: [
          'Localized + Inclusive: First COVID suspect tracker designed for Maharashtra, in Marathi-English format',
          'Real-Time, Community-Enabled: Harnesses public data to empower both citizens and health workers',
          'Built for Action: Not just a tracker — it\'s a decision-making tool for authorities and an alert system for citizens',
          'Future-Ready: Modular design supports AI-based risk prediction, vaccination tracking, or travel pass integration'
        ]
      }
    },
    mr: {
      title: 'महाराक्षक कसा वेगळा आहे',
      subtitle: 'महाराष्ट्रासाठी विशेषतः तयार केलेली अनोखी वैशिष्ट्ये',
      features: [
        {
          icon: MapPin,
          title: 'अतिस्थानिक फोकस',
          description: 'राष्ट्रीय स्तरावरील ॲप्सच्या विपरीत, महाराक्षक महाराष्ट्राच्या जिल्हा आणि तालुका स्तरावरील डेटावर केंद्रित आहे.',
          highlight: 'जिल्हा आणि तालुका स्तर'
        },
        {
          icon: Users,
          title: 'सार्वजनिक सहभाग',
          description: 'केवळ क्लिनिकल केस रेकॉर्डिंग नाही तर समुदाय-चालित संशयित ट्रॅकिंगला प्रोत्साहन देते. प्रत्येक नागरिक योगदान देऊ शकतो.',
          highlight: 'समुदाय चालित'
        },
        {
          icon: Smartphone,
          title: 'वेब-फर्स्ट डिझाइन',
          description: 'ॲप इन्स्टॉलेशनची गरज नाही — कोणत्याही ब्राउझरवर, अगदी कमी दर्जाच्या स्मार्टफोनवरही सहजपणे चालते.',
          highlight: 'डिव्हाइस अज्ञेयवादी'
        },
        {
          icon: Brain,
          title: 'AI-पॉवर्ड अंतर्दृष्टी',
          description: 'प्रगत विश्लेषणे आणि अंदाज मॉडेल्स संभावित हॉटस्पॉट्स गंभीर होण्यापूर्वी ओळखण्यास मदत करतात.',
          highlight: 'स्मार्ट अंदाज'
        },
        {
          icon: Shield,
          title: 'गोपनीयता संरक्षित',
          description: 'तुमचा वैयक्तिक डेटा एन्क्रिप्टेड आणि संरक्षित आहे. सार्वजनिक आरोग्य अंतर्दृष्टीसाठी फक्त अनामिक डेटा वापरला जातो.',
          highlight: 'सुरक्षित आणि खाजगी'
        },
        {
          icon: Clock,
          title: 'रिअल-टाइम अपडेट्स',
          description: 'तुमच्या क्षेत्रातील प्रकरणे आणि सरकारी आरोग्य सल्ल्यांबद्दल तत्काळ सूचना मिळवा.',
          highlight: 'थेट निरीक्षण'
        }
      ],
      usp: {
        title: 'अनन्य विक्री प्रस्ताव',
        points: [
          'स्थानिकीकृत + समावेशक: महाराष्ट्रासाठी डिझाइन केलेला पहिला कोविड संशयित ट्रॅकर, मराठी-इंग्रजी स्वरूपात',
          'रिअल-टाइम, समुदाय-सक्षम: नागरिक आणि आरोग्य कर्मचारी दोघांना सक्षम करण्यासाठी सार्वजनिक डेटाचा वापर करते',
          'कृतीसाठी तयार: केवळ ट्रॅकर नाही — अधिकाऱ्यांसाठी निर्णय घेण्याचे साधन आणि नागरिकांसाठी चेतावणी प्रणाली',
          'भविष्यासाठी तयार: मॉड्यूलर डिझाइन AI-आधारित जोखीम अंदाज, लसीकरण ट्रॅकिंग किंवा प्रवास पास एकीकरणास समर्थन देते'
        ]
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {text[language].title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {text[language].subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {text[language].features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-maharashtra-saffron to-maharashtra-orange p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-bold text-maharashtra-blue bg-blue-50 px-2 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* USP Section */}
        <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            {text[language].usp.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {text[language].usp.points.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-maharashtra-green w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
