import React, { useState } from 'react';
import { Calendar, Activity, Heart, Droplets, Moon, Thermometer } from 'lucide-react';

const HealthTracking: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('period');
  const [cycleDay, setCycleDay] = useState(14);

  const tabs = [
    { id: 'period', label: 'Period Tracking', icon: Calendar },
    { id: 'symptoms', label: 'Symptoms', icon: Activity },
    { id: 'mood', label: 'Cycle Mood', icon: Heart },
    { id: 'predictions', label: 'Predictions', icon: Thermometer },
  ];

  const cyclePhases = [
    { name: 'Menstrual', days: '1-5', color: 'bg-red-400', description: 'Period days' },
    { name: 'Follicular', days: '1-13', color: 'bg-blue-400', description: 'Energy building' },
    { name: 'Ovulation', days: '14', color: 'bg-green-400', description: 'Peak fertility' },
    { name: 'Luteal', days: '15-28', color: 'bg-yellow-400', description: 'PMS possible' },
  ];

  const symptoms = [
    { name: 'Cramps', severity: 3, icon: '🤕' },
    { name: 'Bloating', severity: 2, icon: '🤰' },
    { name: 'Headache', severity: 1, icon: '🧠' },
    { name: 'Fatigue', severity: 4, icon: '😴' },
    { name: 'Mood Swings', severity: 3, icon: '🎭' },
    { name: 'Breast Tenderness', severity: 2, icon: '💔' },
  ];

  const getCurrentPhase = (day: number) => {
    if (day >= 1 && day <= 5) return 'Menstrual';
    if (day >= 6 && day <= 13) return 'Follicular';
    if (day === 14) return 'Ovulation';
    return 'Luteal';
  };

  const renderCalendar = () => {
    const days = Array.from({ length: 28 }, (_, i) => i + 1);
    return (
      <div className="grid grid-cols-7 gap-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
            {day}
          </div>
        ))}
        {days.map(day => {
          const phase = getCurrentPhase(day);
          const isCurrentDay = day === cycleDay;
          const phaseColor = cyclePhases.find(p => p.name === phase)?.color || 'bg-gray-200';
          
          return (
            <button
              key={day}
              onClick={() => setCycleDay(day)}
              className={`h-10 w-10 rounded-full text-sm font-medium transition-all ${
                isCurrentDay 
                  ? `${phaseColor} text-white ring-2 ring-purple-600 ring-offset-2` 
                  : `${phaseColor} text-white hover:scale-110`
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Health & Cycle Tracking</h2>
        <p className="text-gray-600">Monitor your menstrual cycle and understand how it affects your wellbeing</p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-md mb-8">
        <div className="flex overflow-x-auto">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 whitespace-nowrap border-b-2 transition-colors ${
                  selectedTab === tab.id
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-purple-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {selectedTab === 'period' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cycle Calendar */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Cycle Calendar</h3>
            {renderCalendar()}
            
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {cyclePhases.map(phase => (
                <div key={phase.name} className="text-center">
                  <div className={`w-4 h-4 ${phase.color} rounded-full mx-auto mb-2`}></div>
                  <h4 className="text-sm font-medium text-gray-900">{phase.name}</h4>
                  <p className="text-xs text-gray-500">{phase.days}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Current Status */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Current Status</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl font-bold">{cycleDay}</span>
                </div>
                <p className="font-semibold text-gray-900">Day {cycleDay} of Cycle</p>
                <p className="text-sm text-gray-600">{getCurrentPhase(cycleDay)} Phase</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Next Period</span>
                  <span className="font-semibold">In {28 - cycleDay} days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Fertility</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    cycleDay >= 12 && cycleDay <= 16 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {cycleDay >= 12 && cycleDay <= 16 ? 'High' : 'Low'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Energy Level</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-4 rounded ${
                          i < (cycleDay <= 5 ? 2 : cycleDay <= 13 ? 4 : cycleDay === 14 ? 5 : 3)
                            ? 'bg-purple-600' 
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'symptoms' && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Track Symptoms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map(symptom => (
              <div key={symptom.name} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{symptom.icon}</span>
                  <h4 className="font-medium text-gray-900">{symptom.name}</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Severity</span>
                    <span className="font-medium">{symptom.severity}/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-red-400 h-2 rounded-full transition-all"
                      style={{ width: `${(symptom.severity / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTab === 'mood' && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Cycle & Mood Connection</h3>
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-2">Understanding Your Patterns</h4>
              <p className="text-purple-800 text-sm">
                Hormonal changes throughout your cycle can significantly impact mood and energy. 
                Tracking these patterns helps you prepare and manage symptoms more effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Phase-Specific Moods</h4>
                {cyclePhases.map(phase => (
                  <div key={phase.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 ${phase.color} rounded-full`}></div>
                      <span className="font-medium text-gray-900">{phase.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">{phase.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Mood Trends</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Overall Mood Score</span>
                    <span className="text-2xl font-bold text-purple-600">7.2/10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Best Phase</span>
                    <span className="font-medium text-green-600">Follicular</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Challenging Phase</span>
                    <span className="font-medium text-red-600">Late Luteal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'predictions' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Predictions</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Droplets className="w-5 h-5 text-red-600" />
                  <div>
                    <h4 className="font-medium text-red-900">Next Period</h4>
                    <p className="text-sm text-red-700">January 15, 2024</p>
                  </div>
                </div>
                <span className="text-red-600 font-semibold">5 days</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-green-600" />
                  <div>
                    <h4 className="font-medium text-green-900">Fertile Window</h4>
                    <p className="text-sm text-green-700">January 28 - Feb 2</p>
                  </div>
                </div>
                <span className="text-green-600 font-semibold">18 days</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Moon className="w-5 h-5 text-yellow-600" />
                  <div>
                    <h4 className="font-medium text-yellow-900">PMS Window</h4>
                    <p className="text-sm text-yellow-700">January 10-14</p>
                  </div>
                </div>
                <span className="text-yellow-600 font-semibold">Tomorrow</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Personalized Tips</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">For Tomorrow</h4>
                <p className="text-blue-800 text-sm">
                  PMS symptoms may start appearing. Consider extra self-care, 
                  gentle exercise, and staying hydrated.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">This Week</h4>
                <p className="text-purple-800 text-sm">
                  Energy levels may dip. Plan lighter workouts and prioritize sleep. 
                  Magnesium supplements might help with cramps.
                </p>
              </div>

              <div className="p-4 bg-pink-50 rounded-lg">
                <h4 className="font-medium text-pink-900 mb-2">Next Week</h4>
                <p className="text-pink-800 text-sm">
                  Post-period energy boost expected! Great time for challenging workouts 
                  and tackling important projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthTracking;