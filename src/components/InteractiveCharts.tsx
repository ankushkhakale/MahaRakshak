
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface InteractiveChartsProps {
  language: 'en' | 'mr';
}

const dailyData = [
  { date: 'May 19', cases: 23, recovered: 45, deaths: 1 },
  { date: 'May 20', cases: 34, recovered: 52, deaths: 0 },
  { date: 'May 21', cases: 28, recovered: 38, deaths: 2 },
  { date: 'May 22', cases: 41, recovered: 61, deaths: 1 },
  { date: 'May 23', cases: 28, recovered: 44, deaths: 0 },
];

const districtData = [
  { name: 'Mumbai', cases: 234, color: '#FF6B6B' },
  { name: 'Pune', cases: 156, color: '#4ECDC4' },
  { name: 'Nagpur', cases: 89, color: '#45B7D1' },
  { name: 'Nashik', cases: 67, color: '#FFA07A' },
  { name: 'Others', cases: 145, color: '#98D8C8' },
];

export const InteractiveCharts = ({ language }: InteractiveChartsProps) => {
  const text = {
    en: {
      title: 'COVID-19 Data Analytics Dashboard',
      subtitle: 'Real-time insights and trends across Maharashtra',
      dailyTrend: 'Daily Cases Trend',
      districtWise: 'District-wise Distribution',
      recoveryRate: 'Recovery Analytics',
      cases: 'New Cases',
      recovered: 'Recovered',
      deaths: 'Deaths'
    },
    mr: {
      title: 'कोविड-19 डेटा अॅनालिटिक्स डॅशबोर्ड',
      subtitle: 'महाराष्ट्रातील रिअल-टाइम अंतर्दृष्टी आणि ट्रेंड',
      dailyTrend: 'दैनिक केसेसचा ट्रेंड',
      districtWise: 'जिल्हानिहाय वितरण',
      recoveryRate: 'पुनर्प्राप्ती विश्लेषण',
      cases: 'नवे केसेस',
      recovered: 'बरे झालेले',
      deaths: 'मृत्यू'
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {text[language].title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {text[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Daily Trend Chart */}
          <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center text-maharashtra-blue">
                {text[language].dailyTrend}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dailyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="cases" 
                    stroke="#ef4444" 
                    strokeWidth={3}
                    dot={{ fill: '#ef4444', strokeWidth: 2, r: 6 }}
                    name={text[language].cases}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="recovered" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                    name={text[language].recovered}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* District Distribution */}
          <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center text-maharashtra-blue">
                {text[language].districtWise}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={districtData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="cases"
                  >
                    {districtData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recovery Analytics Bar Chart */}
        <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-center text-maharashtra-blue">
              {text[language].recoveryRate}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Bar dataKey="cases" fill="#ef4444" name={text[language].cases} radius={[4, 4, 0, 0]} />
                <Bar dataKey="recovered" fill="#10b981" name={text[language].recovered} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
