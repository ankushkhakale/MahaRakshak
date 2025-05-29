
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Fix for default markers in Leaflet with Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface InteractiveMapProps {
  language: 'en' | 'mr';
}

export const InteractiveMap = ({ language }: InteractiveMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const text = {
    en: {
      title: 'COVID Hotspot Tracking Map',
      subtitle: 'Real-time visualization of suspected cases and containment zones',
      legend: {
        critical: 'Critical Cases',
        warning: 'Warning Cases',
        stable: 'Stable Cases',
        containment: 'Containment Zones'
      }
    },
    mr: {
      title: 'कोविड हॉटस्पॉट ट्रॅकिंग मॅप',
      subtitle: 'संशयित प्रकरणे आणि नियंत्रण झोनचे रिअल-टाइम व्हिज्युअलायझेशन',
      legend: {
        critical: 'गंभीर प्रकरणे',
        warning: 'चेतावणी प्रकरणे',
        stable: 'स्थिर प्रकरणे',
        containment: 'नियंत्रण झोन'
      }
    }
  };

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map centered on Maharashtra
    const map = L.map(mapRef.current).setView([19.7515, 75.7139], 7);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Sample data for COVID cases
    const covidData = [
      { lat: 19.0760, lng: 72.8777, status: 'critical', count: 15, city: 'Mumbai' },
      { lat: 18.5204, lng: 73.8567, status: 'warning', count: 8, city: 'Pune' },
      { lat: 21.1458, lng: 79.0882, status: 'stable', count: 3, city: 'Nagpur' },
      { lat: 19.9975, lng: 73.7898, status: 'warning', count: 6, city: 'Nashik' },
      { lat: 19.8762, lng: 75.3433, status: 'stable', count: 2, city: 'Aurangabad' }
    ];

    // Add markers for each location
    covidData.forEach(location => {
      const color = location.status === 'critical' ? 'red' : 
                   location.status === 'warning' ? 'orange' : 'green';
      
      const circle = L.circleMarker([location.lat, location.lng], {
        color: color,
        fillColor: color,
        fillOpacity: 0.7,
        radius: location.count + 5
      });

      circle.bindPopup(`
        <div>
          <h3><strong>${location.city}</strong></h3>
          <p>Status: ${location.status.toUpperCase()}</p>
          <p>Cases: ${location.count}</p>
          <p>Last updated: Just now</p>
        </div>
      `);

      circle.addTo(map);
    });

    // Add containment zones (example polygons)
    const containmentZone = L.polygon([
      [19.0760, 72.8777],
      [19.0860, 72.8877],
      [19.0960, 72.8777],
      [19.0860, 72.8677]
    ], {
      color: 'red',
      fillOpacity: 0.2
    });

    containmentZone.bindPopup('Containment Zone - Bandra Area');
    containmentZone.addTo(map);

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Map */}
          <div className="lg:col-span-3">
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div ref={mapRef} className="h-96 w-full rounded-lg"></div>
              </CardContent>
            </Card>
          </div>

          {/* Legend */}
          <div className="space-y-4">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Map Legend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-sm">{text[language].legend.critical}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-sm">{text[language].legend.warning}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm">{text[language].legend.stable}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-200 border-2 border-red-500 mr-3"></div>
                  <span className="text-sm">{text[language].legend.containment}</span>
                </div>
              </CardContent>
            </Card>

            {/* Real-time Updates */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Live Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span>System Online</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Last sync: Just now
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
