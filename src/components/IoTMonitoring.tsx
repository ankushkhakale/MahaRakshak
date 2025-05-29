
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wifi, WifiOff, Smartphone, Watch, Thermometer, Activity, AlertCircle, CheckCircle } from 'lucide-react';

interface IoTDevice {
  id: string;
  patientId: string;
  patientName: string;
  deviceType: 'smartwatch' | 'thermometer' | 'pulse_oximeter' | 'smartphone';
  status: 'online' | 'offline' | 'warning';
  batteryLevel: number;
  lastReading: {
    timestamp: string;
    value: number;
    unit: string;
  };
  thresholds: {
    min: number;
    max: number;
  };
}

interface IoTMonitoringProps {
  language: 'en' | 'mr';
}

export const IoTMonitoring = ({ language }: IoTMonitoringProps) => {
  const [devices, setDevices] = useState<IoTDevice[]>([]);
  const [connectedDevices, setConnectedDevices] = useState(0);

  const text = {
    en: {
      title: 'IoT Device Monitoring',
      subtitle: 'Real-time health device connectivity and data streaming',
      connectedDevices: 'Connected Devices',
      activeAlerts: 'Active Alerts',
      dataPoints: 'Data Points/Hour',
      deviceStatus: 'Device Status',
      battery: 'Battery',
      lastReading: 'Last Reading',
      threshold: 'Threshold',
      reconnect: 'Reconnect',
      viewHistory: 'View History',
      deviceTypes: {
        smartwatch: 'Smart Watch',
        thermometer: 'Digital Thermometer',
        pulse_oximeter: 'Pulse Oximeter',
        smartphone: 'Smartphone App'
      }
    },
    mr: {
      title: 'IoT डिव्हाइस मॉनिटरिंग',
      subtitle: 'रिअल-टाइम आरोग्य डिव्हाइस कनेक्टिव्हिटी आणि डेटा स्ट्रीमिंग',
      connectedDevices: 'कनेक्ट केलेले डिव्हाइसेस',
      activeAlerts: 'सक्रिय अलर्ट',
      dataPoints: 'डेटा पॉइंट्स/तास',
      deviceStatus: 'डिव्हाइस स्थिती',
      battery: 'बॅटरी',
      lastReading: 'शेवटचे रीडिंग',
      threshold: 'मर्यादा',
      reconnect: 'पुन्हा कनेक्ट करा',
      viewHistory: 'इतिहास पहा',
      deviceTypes: {
        smartwatch: 'स्मार्ट वॉच',
        thermometer: 'डिजिटल थर्मामीटर',
        pulse_oximeter: 'पल्स ऑक्सिमीटर',
        smartphone: 'स्मार्टफोन अॅप'
      }
    }
  };

  useEffect(() => {
    const mockDevices: IoTDevice[] = [
      {
        id: 'dev001',
        patientId: 'pat001',
        patientName: 'Rajesh Sharma',
        deviceType: 'smartwatch',
        status: 'online',
        batteryLevel: 85,
        lastReading: {
          timestamp: '2 mins ago',
          value: 95,
          unit: 'bpm'
        },
        thresholds: { min: 60, max: 100 }
      },
      {
        id: 'dev002',
        patientId: 'pat001',
        patientName: 'Rajesh Sharma',
        deviceType: 'thermometer',
        status: 'warning',
        batteryLevel: 25,
        lastReading: {
          timestamp: '1 min ago',
          value: 101.2,
          unit: '°F'
        },
        thresholds: { min: 97, max: 99 }
      },
      {
        id: 'dev003',
        patientId: 'pat002',
        patientName: 'Priya Patel',
        deviceType: 'pulse_oximeter',
        status: 'online',
        batteryLevel: 92,
        lastReading: {
          timestamp: '30 secs ago',
          value: 89,
          unit: '%'
        },
        thresholds: { min: 95, max: 100 }
      },
      {
        id: 'dev004',
        patientId: 'pat003',
        patientName: 'Amit Deshmukh',
        deviceType: 'smartphone',
        status: 'offline',
        batteryLevel: 0,
        lastReading: {
          timestamp: '15 mins ago',
          value: 98.6,
          unit: '°F'
        },
        thresholds: { min: 97, max: 99 }
      }
    ];

    setDevices(mockDevices);
    setConnectedDevices(mockDevices.filter(d => d.status === 'online').length);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setDevices(prevDevices => 
        prevDevices.map(device => ({
          ...device,
          lastReading: {
            ...device.lastReading,
            value: device.lastReading.value + (Math.random() - 0.5) * 2,
            timestamp: 'Just now'
          },
          batteryLevel: device.status === 'offline' ? 0 : Math.max(0, device.batteryLevel - Math.random() * 0.5)
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'smartwatch': return Watch;
      case 'thermometer': return Thermometer;
      case 'pulse_oximeter': return Activity;
      case 'smartphone': return Smartphone;
      default: return Activity;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const isReadingCritical = (device: IoTDevice) => {
    return device.lastReading.value < device.thresholds.min || 
           device.lastReading.value > device.thresholds.max;
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

        {/* IoT Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">{text[language].connectedDevices}</p>
                  <p className="text-3xl font-bold">{connectedDevices}/{devices.length}</p>
                </div>
                <Wifi className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100">{text[language].activeAlerts}</p>
                  <p className="text-3xl font-bold">{devices.filter(d => isReadingCritical(d)).length}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-yellow-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">{text[language].dataPoints}</p>
                  <p className="text-3xl font-bold">1,247</p>
                </div>
                <Activity className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Device List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {devices.map((device) => {
            const DeviceIcon = getDeviceIcon(device.deviceType);
            return (
              <Card key={device.id} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DeviceIcon className="h-5 w-5 mr-2 text-gray-600" />
                      <span>{text[language].deviceTypes[device.deviceType as keyof typeof text[typeof language]['deviceTypes']]}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {device.status === 'online' ? 
                        <Wifi className="h-4 w-4 text-green-500" /> : 
                        <WifiOff className="h-4 w-4 text-red-500" />
                      }
                      <Badge className={`${getStatusColor(device.status)} text-white`}>
                        {device.status}
                      </Badge>
                    </div>
                  </CardTitle>
                  <p className="text-sm text-gray-600">{device.patientName}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Device Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">{text[language].battery}</p>
                      <div className="flex items-center">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`h-2 rounded-full ${device.batteryLevel > 20 ? 'bg-green-500' : 'bg-red-500'}`}
                            style={{ width: `${device.batteryLevel}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{device.batteryLevel.toFixed(0)}%</span>
                      </div>
                    </div>

                    <div className={`p-3 rounded-lg ${isReadingCritical(device) ? 'bg-red-50 border border-red-200' : 'bg-gray-50'}`}>
                      <p className="text-sm text-gray-600">{text[language].lastReading}</p>
                      <p className="text-xl font-bold">
                        {device.lastReading.value.toFixed(1)} {device.lastReading.unit}
                      </p>
                      <p className="text-xs text-gray-500">{device.lastReading.timestamp}</p>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">{text[language].threshold}</p>
                    <p className="text-sm font-medium">
                      {device.thresholds.min} - {device.thresholds.max} {device.lastReading.unit}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {device.status === 'offline' && (
                      <Button size="sm" variant="outline" className="text-blue-600 border-blue-600">
                        {text[language].reconnect}
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      {text[language].viewHistory}
                    </Button>
                    {isReadingCritical(device) && (
                      <Badge className="bg-red-500 text-white flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Critical
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
