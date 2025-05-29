
import { TrendingUp, TrendingDown, Activity, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedCounter } from './AnimatedCounter';
import { ScrollReveal } from './ScrollReveal';

interface StatsSectionProps {
  language: 'en' | 'mr';
}

export const StatsSection = ({ language }: StatsSectionProps) => {
  const text = {
    en: {
      title: 'Real-Time Maharashtra COVID Statistics',
      subtitle: 'Updated every 15 minutes with latest data from health authorities',
      stats: [
        { icon: Activity, label: 'Active Cases', value: 1247, change: '+12%', trend: 'up' },
        { icon: Shield, label: 'Recovered Cases', value: 45892, change: '+0.8%', trend: 'up' },
        { icon: TrendingDown, label: 'Daily New Cases', value: 43, change: '-23%', trend: 'down' },
        { icon: Activity, label: 'Under Observation', value: 892, change: '+5%', trend: 'up' }
      ],
      districts: 'Top Affected Districts',
      districtList: [
        { name: 'Mumbai', cases: 234, growth: '+8%' },
        { name: 'Pune', cases: 156, growth: '+12%' },
        { name: 'Nagpur', cases: 89, growth: '+3%' },
        { name: 'Nashik', cases: 67, growth: '+15%' }
      ]
    },
    mr: {
      title: 'रिअल-टाइम महाराष्ट्र कोविड आकडेवारी',
      subtitle: 'आरोग्य अधिकाऱ्यांकडून नवीनतम डेटासह दर 15 मिनिटांनी अपडेट केले जाते',
      stats: [
        { icon: Activity, label: 'सक्रिय केसेस', value: 1247, change: '+12%', trend: 'up' },
        { icon: Shield, label: 'बरे झालेले केसेस', value: 45892, change: '+0.8%', trend: 'up' },
        { icon: TrendingDown, label: 'दैनिक नवे केसेस', value: 43, change: '-23%', trend: 'down' },
        { icon: Activity, label: 'निरीक्षणाधीन', value: 892, change: '+5%', trend: 'up' }
      ],
      districts: 'सर्वाधिक बाधित जिल्हे',
      districtList: [
        { name: 'मुंबई', cases: 234, growth: '+8%' },
        { name: 'पुणे', cases: 156, growth: '+12%' },
        { name: 'नागपूर', cases: 89, growth: '+3%' },
        { name: 'नाशिक', cases: 67, growth: '+15%' }
      ]
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-maharashtra-blue transition-colors duration-300">
              {text[language].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {text[language].subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {text[language].stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer border-l-4 border-l-maharashtra-blue">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 group-hover:text-maharashtra-blue transition-colors">
                    {stat.label}
                  </CardTitle>
                  <div className="bg-gradient-to-br from-maharashtra-blue to-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-4 w-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    <AnimatedCounter end={stat.value} duration={1500 + index * 300} />
                  </div>
                  <div className={`flex items-center text-sm ${stat.trend === 'up' ? 'text-red-600' : 'text-green-600'}`}>
                    {stat.trend === 'up' ? 
                      <TrendingUp className="h-4 w-4 mr-1 animate-pulse" /> : 
                      <TrendingDown className="h-4 w-4 mr-1 animate-pulse" />
                    }
                    {stat.change} from yesterday
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Enhanced District Breakdown */}
        <ScrollReveal delay={800}>
          <Card className="max-w-2xl mx-auto hover:shadow-xl transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center hover:text-maharashtra-blue transition-colors">
                {text[language].districts}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {text[language].districtList.map((district, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-102 cursor-pointer group"
                  >
                    <div className="font-medium text-gray-900 group-hover:text-maharashtra-blue transition-colors">
                      {district.name}
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-bold text-gray-900">
                        <AnimatedCounter end={district.cases} duration={1000 + index * 200} />
                      </span>
                      <span className="text-sm text-red-600 bg-red-100 px-2 py-1 rounded-full hover:bg-red-200 transition-colors">
                        {district.growth}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};
