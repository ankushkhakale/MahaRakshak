
import { ExternalLink, FileText, Users, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from './ScrollReveal';

interface GovernmentDataProps {
  language: 'en' | 'mr';
}

export const GovernmentData = ({ language }: GovernmentDataProps) => {
  const text = {
    en: {
      title: 'Official Government COVID-19 Data',
      subtitle: 'Real-time data from Ministry of Health & Family Welfare',
      dashboard: 'COVID-19 India Dashboard',
      dashboardDesc: 'Access official statistics and trends from MOHFW',
      portals: 'Government Portals',
      portalList: [
        { name: 'MOHFW COVID Dashboard', url: 'https://covid19dashboard.mohfw.gov.in/', desc: 'Official COVID-19 statistics for India' },
        { name: 'MyGov Corona Helpdesk', url: 'https://www.mygov.in/covid-19/', desc: 'Government helpdesk and resources' },
        { name: 'Aarogya Setu', url: 'https://www.aarogyasetu.gov.in/', desc: 'Contact tracing and health status' },
        { name: 'Maharashtra Health Dept', url: 'https://arogya.maharashtra.gov.in/', desc: 'State health department portal' }
      ]
    },
    mr: {
      title: 'अधिकृत सरकारी कोविड-19 डेटा',
      subtitle: 'आरोग्य आणि कुटुंब कल्याण मंत्रालयाकडून रिअल-टाइम डेटा',
      dashboard: 'कोविड-19 भारत डॅशबोर्ड',
      dashboardDesc: 'MOHFW कडून अधिकृत आकडेवारी आणि ट्रेंड पहा',
      portals: 'सरकारी पोर्टल',
      portalList: [
        { name: 'MOHFW कोविड डॅशबोर्ड', url: 'https://covid19dashboard.mohfw.gov.in/', desc: 'भारतासाठी अधिकृत कोविड-19 आकडेवारी' },
        { name: 'मायगव्ह कोरोना हेल्पडेस्क', url: 'https://www.mygov.in/covid-19/', desc: 'सरकारी हेल्पडेस्क आणि संसाधने' },
        { name: 'आरोग्य सेतू', url: 'https://www.aarogyasetu.gov.in/', desc: 'संपर्क ट्रेसिंग आणि आरोग्य स्थिती' },
        { name: 'महाराष्ट्र आरोग्य विभाग', url: 'https://arogya.maharashtra.gov.in/', desc: 'राज्य आरोग्य विभाग पोर्टल' }
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

        {/* Main Dashboard Link */}
        <ScrollReveal delay={200}>
          <Card className="max-w-4xl mx-auto mb-12 hover:shadow-xl transition-all duration-500">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-maharashtra-blue flex items-center justify-center gap-3">
                <Activity className="h-8 w-8" />
                {text[language].dashboard}
              </CardTitle>
              <p className="text-gray-600">{text[language].dashboardDesc}</p>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                asChild
                size="lg" 
                className="bg-maharashtra-blue hover:bg-blue-700 text-white px-8 py-3"
              >
                <a 
                  href="https://covid19dashboard.mohfw.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Visit Official Dashboard
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Government Portals */}
        <ScrollReveal delay={400}>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              {text[language].portals}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {text[language].portalList.map((portal, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-gray-900 mb-2">{portal.name}</h4>
                        <p className="text-gray-600 text-sm mb-4">{portal.desc}</p>
                        <Button 
                          asChild
                          variant="outline" 
                          size="sm"
                          className="border-maharashtra-blue text-maharashtra-blue hover:bg-maharashtra-blue hover:text-white"
                        >
                          <a 
                            href={portal.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            Visit Portal
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                      <FileText className="h-6 w-6 text-maharashtra-blue ml-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
