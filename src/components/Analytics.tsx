import React from 'react';
import { TrendingUp, Calendar, BarChart3, PieChart } from 'lucide-react';

const Analytics: React.FC = () => {
  const weeklyData = [
    { day: 'Mon', mood: 7, sleep: 8, exercise: 1 },
    { day: 'Tue', mood: 5, sleep: 6, exercise: 0 },
    { day: 'Wed', mood: 8, sleep: 7, exercise: 1 },
    { day: 'Thu', mood: 6, sleep: 8, exercise: 0 },
    { day: 'Fri', mood: 9, sleep: 7, exercise: 1 },
    { day: 'Sat', mood: 8, sleep: 9, exercise: 1 },
    { day: 'Sun', mood: 7, sleep: 8, exercise: 0 },
  ];

  const moodDistribution = [
    { mood: 'Happy', percentage: 35, color: 'bg-green-400' },
    { mood: 'Content', percentage: 25, color: 'bg-blue-400' },
    { mood: 'Neutral', percentage: 20, color: 'bg-gray-400' },
    { mood: 'Worried', percentage: 15, color: 'bg-yellow-400' },
    { mood: 'Sad', percentage: 5, color: 'bg-red-400' },
  ];

  const insights = [
    {
      title: 'Mood Trend',
      description: 'Your mood has been improving over the past week!',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Sleep Impact',
      description: 'Better sleep correlates with higher mood scores.',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Exercise Benefits',
      description: 'Days with exercise show 15% better mood ratings.',
      icon: BarChart3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Wellness Analytics</h2>
        <p className="text-gray-600">Discover patterns and insights about your mental health journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className={`w-12 h-12 ${insight.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${insight.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{insight.title}</h3>
              <p className="text-gray-600">{insight.description}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Mood Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Weekly Mood Trend</h3>
          <div className="space-y-4">
            {weeklyData.map((day, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
                <div className="flex-1">
                  <div className="bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(day.mood / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-8 text-sm font-medium text-gray-900">{day.mood}/10</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mood Distribution */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Mood Distribution (Last 30 Days)</h3>
          <div className="space-y-4">
            {moodDistribution.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-20 text-sm font-medium text-gray-700">{item.mood}</div>
                <div className="flex-1">
                  <div className="bg-gray-200 rounded-full h-4">
                    <div 
                      className={`${item.color} h-4 rounded-full transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-12 text-sm font-medium text-gray-900">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Correlation Analysis */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Factor Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-2xl font-bold">8.2</span>
            </div>
            <h4 className="font-semibold text-gray-900">Average Sleep</h4>
            <p className="text-sm text-gray-600">Hours per night</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-2xl font-bold">4</span>
            </div>
            <h4 className="font-semibold text-gray-900">Exercise Days</h4>
            <p className="text-sm text-gray-600">This week</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-2xl font-bold">7.1</span>
            </div>
            <h4 className="font-semibold text-gray-900">Mood Average</h4>
            <p className="text-sm text-gray-600">Out of 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;