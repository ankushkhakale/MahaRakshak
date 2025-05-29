
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Activity, Thermometer, Heart, Droplets, MapPin, Phone, UserCheck } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  location: { lat: number; lng: number };
  vitals: {
    temperature: number;
    heartRate: number;
    oxygenSaturation: number;
    bloodPressure: { systolic: number; diastolic: number };
  };
  status: 'critical' | 'warning' | 'stable' | 'recovered';
  lastUpdate: string;
  phone: string;
  address: string;
}

interface IntelligentTrackingDashboardProps {
  language: 'en' | 'mr';
}

export const IntelligentTrackingDashboard = ({ language }: IntelligentTrackingDashboardProps) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [alertCount, setAlertCount] = useState(0);

  const text = {
    en: {
      title: 'Intelligent COVID Patient Tracking - Rakshak',
      subtitle: 'Real-time IoT-enabled health monitoring system',
      totalPatients: 'Total Patients',
      criticalAlerts: 'Critical Alerts',
      activeMonitoring: 'Active Monitoring',
      patientStatus: 'Patient Status',
      vitals: 'Vital Signs',
      location: 'Location',
      lastUpdate: 'Last Update',
      contactPatient: 'Contact Patient',
      viewOnMap: 'View on Map',
      alertHealthcare: 'Alert Healthcare Provider',
      status: {
        critical: 'Critical',
        warning: 'Warning',
        stable: 'Stable',
        recovered: 'Recovered'
      }
    },
    mr: {
      title: 'बुद्धिमान कोविड रुग्ण ट्रॅकिंग - राक्षक',
      subtitle: 'रिअल-टाइम IoT-सक्षम आरोग्य निरीक्षण प्रणाली',
      totalPatients: 'एकूण रुग्ण',
      criticalAlerts: 'गंभीर अलर्ट',
      activeMonitoring: 'सक्रिय निरीक्षण',
      patientStatus: 'रुग्णाची स्थिती',
      vitals: 'महत्वाचे चिन्हे',
      location: 'स्थान',
      lastUpdate: 'शेवटचे अपडेट',
      contactPatient: 'रुग्णाशी संपर्क',
      viewOnMap: 'नकाशावर पहा',
      alertHealthcare: 'आरोग्य प्रदात्याला अलर्ट',
      status: {
        critical: 'गंभीर',
        warning: 'चेतावणी',
        stable: 'स्थिर',
        recovered: 'बरे झाले'
      }
    }
  };

  // Simulate IoT data updates
  useEffect(() => {
    const mockPatients: Patient[] = [
      {
        id: '1',
        name: 'Rajesh Sharma',
        location: { lat: 19.0760, lng: 72.8777 },
        vitals: {
          temperature: 101.2,
          heartRate: 95,
          oxygenSaturation: 94,
          bloodPressure: { systolic: 140, diastolic: 90 }
        },
        status: 'warning',
        lastUpdate: '2 mins ago',
        phone: '+91 9876543210',
        address: 'Bandra, Mumbai'
      },
      {
        id: '2',
        name: 'Priya Patel',
        location: { lat: 18.5204, lng: 73.8567 },
        vitals: {
          temperature: 103.5,
          heartRate: 110,
          oxygenSaturation: 89,
          bloodPressure: { systolic: 160, diastolic: 95 }
        },
        status: 'critical',
        lastUpdate: '1 min ago',
        phone: '+91 9876543211',
        address: 'Pune, Maharashtra'
      },
      {
        id: '3',
        name: 'Amit Deshmukh',
        location: { lat: 21.1458, lng: 79.0882 },
        vitals: {
          temperature: 98.6,
          heartRate: 72,
          oxygenSaturation: 98,
          bloodPressure: { systolic: 120, diastolic: 80 }
        },
        status: 'stable',
        lastUpdate: '5 mins ago',
        phone: '+91 9876543212',
        address: 'Nagpur, Maharashtra'
      }
    ];

    setPatients(mockPatients);
    setAlertCount(mockPatients.filter(p => p.status === 'critical').length);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setPatients(prevPatients => 
        prevPatients.map(patient => ({
          ...patient,
          vitals: {
            ...patient.vitals,
            temperature: patient.vitals.temperature + (Math.random() - 0.5) * 0.5,
            heartRate: patient.vitals.heartRate + Math.floor((Math.random() - 0.5) * 10),
            oxygenSaturation: Math.max(85, Math.min(100, patient.vitals.oxygenSaturation + (Math.random() - 0.5) * 2))
          },
          lastUpdate: 'Just now'
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      case 'stable': return 'bg-green-500';
      case 'recovered': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const isVitalCritical = (vital: string, value: number) => {
    switch (vital) {
      case 'temperature': return value > 102;
      case 'heartRate': return value > 100 || value < 60;
      case 'oxygenSaturation': return value < 95;
      default: return false;
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

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">{text[language].totalPatients}</p>
                  <p className="text-3xl font-bold">{patients.length}</p>
                </div>
                <UserCheck className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100">{text[language].criticalAlerts}</p>
                  <p className="text-3xl font-bold">{alertCount}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-200 animate-pulse" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">{text[language].activeMonitoring}</p>
                  <p className="text-3xl font-bold">{patients.filter(p => p.status !== 'recovered').length}</p>
                </div>
                <Activity className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Patient List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {patients.map((patient) => (
            <Card key={patient.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{patient.name}</span>
                  <Badge className={`${getStatusColor(patient.status)} text-white`}>
                    {text[language].status[patient.status as keyof typeof text[typeof language]['status']]}
                  </Badge>
                </CardTitle>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {patient.address}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Vitals Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-3 rounded-lg ${isVitalCritical('temperature', patient.vitals.temperature) ? 'bg-red-50 border border-red-200' : 'bg-gray-50'}`}>
                    <div className="flex items-center">
                      <Thermometer className="h-4 w-4 mr-2 text-red-500" />
                      <span className="text-sm font-medium">Temp</span>
                    </div>
                    <p className="text-xl font-bold">{patient.vitals.temperature.toFixed(1)}°F</p>
                  </div>

                  <div className={`p-3 rounded-lg ${isVitalCritical('heartRate', patient.vitals.heartRate) ? 'bg-red-50 border border-red-200' : 'bg-gray-50'}`}>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-2 text-pink-500" />
                      <span className="text-sm font-medium">HR</span>
                    </div>
                    <p className="text-xl font-bold">{patient.vitals.heartRate} bpm</p>
                  </div>

                  <div className={`p-3 rounded-lg ${isVitalCritical('oxygenSaturation', patient.vitals.oxygenSaturation) ? 'bg-red-50 border border-red-200' : 'bg-gray-50'}`}>
                    <div className="flex items-center">
                      <Droplets className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="text-sm font-medium">SpO2</span>
                    </div>
                    <p className="text-xl font-bold">{patient.vitals.oxygenSaturation.toFixed(0)}%</p>
                  </div>

                  <div className="p-3 rounded-lg bg-gray-50">
                    <div className="flex items-center">
                      <Activity className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm font-medium">BP</span>
                    </div>
                    <p className="text-xl font-bold">{patient.vitals.bloodPressure.systolic}/{patient.vitals.bloodPressure.diastolic}</p>
                  </div>
                </div>

                <div className="text-xs text-gray-500">
                  {text[language].lastUpdate}: {patient.lastUpdate}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Phone className="h-4 w-4 mr-1" />
                    {text[language].contactPatient}
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {text[language].viewOnMap}
                  </Button>
                  {patient.status === 'critical' && (
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      {text[language].alertHealthcare}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
