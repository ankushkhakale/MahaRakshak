
import { AlertCircle, FileText, Phone, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from './ScrollReveal';

interface GovernmentGuidelinesProps {
  language: 'en' | 'mr';
}

export const GovernmentGuidelines = ({ language }: GovernmentGuidelinesProps) => {
  const text = {
    en: {
      title: 'COVID-19 Guidelines & Protocols',
      subtitle: 'Official guidelines from Central and State Government',
      centralGov: 'Central Government Guidelines',
      stateGov: 'Maharashtra State Guidelines',
      helpline: 'Helpline Numbers',
      centralGuidelines: [
        { title: 'COVID-19 Clinical Management Protocol', type: 'Medical Guidelines' },
        { title: 'Home Isolation Guidelines', type: 'General Public' },
        { title: 'Vaccination Guidelines', type: 'Immunization' },
        { title: 'Travel & Transport Guidelines', type: 'Movement' }
      ],
      stateGuidelines: [
        { title: 'Maharashtra COVID-19 SOP', type: 'State Protocol' },
        { title: 'District-wise Containment Guidelines', type: 'Local Administration' },
        { title: 'Educational Institution Guidelines', type: 'Schools & Colleges' },
        { title: 'Business & Industry Guidelines', type: 'Commercial Activities' }
      ],
      helplineNumbers: [
        { name: 'National Helpline', number: '1075', available: '24x7' },
        { name: 'Maharashtra Helpline', number: '020-26127394', available: '24x7' },
        { name: 'Mental Health Helpline', number: '08046110007', available: '24x7' },
        { name: 'Child Helpline', number: '1098', available: '24x7' }
      ]
    },
    mr: {
      title: 'कोविड-19 मार्गदर्शक तत्त्वे आणि प्रोटोकॉल',
      subtitle: 'केंद्र आणि राज्य सरकारकडून अधिकृत मार्गदर्शक तत्त्वे',
      centralGov: 'केंद्र सरकारची मार्गदर्शक तत्त्वे',
      stateGov: 'महाराष्ट्र राज्याची मार्गदर्शक तत्त्वे',
      helpline: 'हेल्पलाइन नंबर',
      centralGuidelines: [
        { title: 'कोविड-19 क्लिनिकल व्यवस्थापन प्रोटोकॉल', type: 'वैद्यकीय मार्गदर्शक तत्त्वे' },
        { title: 'घरी अलगीकरण मार्गदर्शक तत्त्वे', type: 'सामान्य जनता' },
        { title: 'लसीकरण मार्गदर्शक तत्त्वे', type: 'रोगप्रतिकारक' },
        { title: 'प्रवास आणि वाहतूक मार्गदर्शक तत्त्वे', type: 'हालचाल' }
      ],
      stateGuidelines: [
        { title: 'महाराष्ट्र कोविड-19 SOP', type: 'राज्य प्रोटोकॉल' },
        { title: 'जिल्हानिहाय नियंत्रण मार्गदर्शक तत्त्वे', type: 'स्थानिक प्रशासन' },
        { title: 'शैक्षणिक संस्था मार्गदर्शक तत्त्वे', type: 'शाळा आणि महाविद्यालये' },
        { title: 'व्यवसाय आणि उद्योग मार्गदर्शक तत्त्वे', type: 'व्यावसायिक क्रियाकलाप' }
      ],
      helplineNumbers: [
        { name: 'राष्ट्रीय हेल्पलाइन', number: '1075', available: '24x7' },
        { name: 'महाराष्ट्र हेल्पलाइन', number: '020-26127394', available: '24x7' },
        { name: 'मानसिक आरोग्य हेल्पलाइन', number: '08046110007', available: '24x7' },
        { name: 'बाल हेल्पलाइन', number: '1098', available: '24x7' }
      ]
    }
  };

  return (
    <section className="py-16 bg-white">
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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Central Government Guidelines */}
            <ScrollReveal delay={200}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-maharashtra-blue">
                    <FileText className="h-6 w-6" />
                    {text[language].centralGov}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {text[language].centralGuidelines.map((guideline, index) => (
                      <div key={index} className="border-l-4 border-maharashtra-blue pl-4 py-2">
                        <h4 className="font-semibold text-gray-900">{guideline.title}</h4>
                        <p className="text-sm text-gray-600">{guideline.type}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* State Government Guidelines */}
            <ScrollReveal delay={400}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-maharashtra-orange">
                    <FileText className="h-6 w-6" />
                    {text[language].stateGov}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {text[language].stateGuidelines.map((guideline, index) => (
                      <div key={index} className="border-l-4 border-maharashtra-orange pl-4 py-2">
                        <h4 className="font-semibold text-gray-900">{guideline.title}</h4>
                        <p className="text-sm text-gray-600">{guideline.type}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Helpline Numbers */}
          <ScrollReveal delay={600}>
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-red-700">
                  <Phone className="h-6 w-6" />
                  {text[language].helpline}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {text[language].helplineNumbers.map((helpline, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-red-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{helpline.name}</h4>
                          <p className="text-2xl font-bold text-red-600">{helpline.number}</p>
                          <p className="text-sm text-gray-600">{helpline.available}</p>
                        </div>
                        <AlertCircle className="h-8 w-8 text-red-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
