
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertCircle, Phone, MapPin, Clock } from 'lucide-react';

interface ReportingSectionProps {
  language: 'en' | 'mr';
}

export const ReportingSection = ({ language }: ReportingSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: '',
    symptoms: [],
    description: ''
  });

  const text = {
    en: {
      title: 'Report Suspected COVID Case',
      subtitle: 'Help your community by reporting suspected cases for early intervention',
      form: {
        name: 'Full Name',
        phone: 'Phone Number',
        district: 'District',
        symptoms: 'Symptoms (Check all that apply)',
        description: 'Additional Details',
        submit: 'Submit Report',
        emergency: 'For Emergency: Call 104'
      },
      symptomsList: [
        'Fever', 'Cough', 'Shortness of breath', 'Loss of taste/smell',
        'Body aches', 'Headache', 'Sore throat', 'Fatigue'
      ],
      districts: [
        'Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur',
        'Ahmednagar', 'Kolhapur', 'Sangli', 'Satara', 'Raigad', 'Thane'
      ],
      quickActions: {
        title: 'Quick Actions',
        actions: [
          { icon: Phone, title: 'Emergency Helpline', subtitle: 'Call 104 for immediate help', action: 'Call Now' },
          { icon: MapPin, title: 'Find Testing Center', subtitle: 'Locate nearest COVID testing facility', action: 'Find Centers' },
          { icon: Clock, title: 'Track Your Report', subtitle: 'Check status of your submitted report', action: 'Track Status' }
        ]
      }
    },
    mr: {
      title: 'संशयित कोविड केस नोंदवा',
      subtitle: 'लवकर हस्तक्षेपासाठी संशयित प्रकरणे नोंदवून तुमच्या समुदायाला मदत करा',
      form: {
        name: 'पूर्ण नाव',
        phone: 'फोन नंबर',
        district: 'जिल्हा',
        symptoms: 'लक्षणे (जे लागू आहेत ते सर्व निवडा)',
        description: 'अतिरिक्त तपशील',
        submit: 'अहवाल सबमिट करा',
        emergency: 'आणीबाणीसाठी: 104 वर कॉल करा'
      },
      symptomsList: [
        'ताप', 'खोकला', 'श्वास घेण्यात त्रास', 'चव/वास जाणे',
        'शरीर दुखणे', 'डोकेदुखी', 'घसा दुखणे', 'थकवा'
      ],
      districts: [
        'मुंबई', 'पुणे', 'नागपूर', 'नाशिक', 'औरंगाबाद', 'सोलापूर',
        'अहमदनगर', 'कोल्हापूर', 'सांगली', 'सातारा', 'रायगड', 'ठाणे'
      ],
      quickActions: {
        title: 'जलद क्रिया',
        actions: [
          { icon: Phone, title: 'आणीबाणी हेल्पलाइन', subtitle: 'तत्काळ मदतीसाठी 104 वर कॉल करा', action: 'आता कॉल करा' },
          { icon: MapPin, title: 'टेस्टिंग सेंटर शोधा', subtitle: 'जवळचे कोविड टेस्टिंग सुविधा शोधा', action: 'केंद्रे शोधा' },
          { icon: Clock, title: 'तुमचा अहवाल ट्रॅक करा', subtitle: 'तुमच्या सबमिट केलेल्या अहवालाची स्थिती तपासा', action: 'स्थिती ट्रॅक करा' }
        ]
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {text[language].title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {text[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  COVID-19 Suspect Report Form
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{text[language].form.name}</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{text[language].form.phone}</Label>
                    <Input 
                      id="phone" 
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label>{text[language].form.district}</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your district" />
                    </SelectTrigger>
                    <SelectContent>
                      {text[language].districts.map((district, index) => (
                        <SelectItem key={index} value={district.toLowerCase()}>
                          {district}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>{text[language].form.symptoms}</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {text[language].symptomsList.map((symptom, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`symptom-${index}`} />
                        <Label htmlFor={`symptom-${index}`} className="text-sm">{symptom}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">{text[language].form.description}</Label>
                  <Textarea 
                    id="description"
                    placeholder="Describe any additional symptoms or relevant information..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-red-600 hover:bg-red-700 flex-1">
                    {text[language].form.submit}
                  </Button>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    {text[language].form.emergency}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">{text[language].quickActions.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {text[language].quickActions.actions.map((action, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <div className="bg-maharashtra-blue p-2 rounded-lg">
                        <action.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{action.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{action.subtitle}</p>
                        <Button size="sm" variant="outline" className="text-xs">
                          {action.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Notice */}
            <Card className="bg-red-50 border-red-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <h4 className="font-bold text-red-800">Emergency Notice</h4>
                </div>
                <p className="text-red-700 text-sm mb-3">
                  If you are experiencing severe symptoms like difficulty breathing, chest pain, or high fever, please call emergency services immediately.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Call 104 - Emergency
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
