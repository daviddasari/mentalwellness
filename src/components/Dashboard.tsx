import React from 'react';
import { Calendar, TrendingUp, Users, MessageCircle, Heart, Activity } from 'lucide-react';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setActiveTab }) => {
  const quickStats = [
    { label: 'Current Mood', value: '😊 Good', change: '+2 from yesterday', color: 'bg-green-500' },
    { label: 'Streak', value: '7 days', change: 'Keep it going!', color: 'bg-purple-500' },
    { label: 'Community Posts', value: '12', change: '3 new replies', color: 'bg-blue-500' },
    { label: 'Next Cycle', value: '5 days', change: 'Period tracking', color: 'bg-pink-500' },
  ];

  const recentActivities = [
    { text: 'Completed breathing exercise', time: '2 hours ago', icon: Activity },
    { text: 'Logged mood as Happy', time: '4 hours ago', icon: Heart },
    { text: 'Participated in community discussion', time: '1 day ago', icon: Users },
    { text: 'Chat session with AI assistant', time: '2 days ago', icon: MessageCircle },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah</h2>
        <p className="text-gray-600">Here's how you're doing today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className={`w-3 h-3 rounded-full ${stat.color} mb-3`}></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
            <p className="text-xs text-gray-500">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setActiveTab('mood')}
                className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg p-4 text-left hover:shadow-lg transition-all transform hover:scale-105"
              >
                <Heart className="w-6 h-6 mb-2" />
                <h4 className="font-semibold">Log Mood</h4>
                <p className="text-sm opacity-90">Track your feelings</p>
              </button>
              
              <button
                onClick={() => setActiveTab('chat')}
                className="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-lg p-4 text-left hover:shadow-lg transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 mb-2" />
                <h4 className="font-semibold">AI Chat</h4>
                <p className="text-sm opacity-90">Get support</p>
              </button>
              
              <button
                onClick={() => setActiveTab('community')}
                className="bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-lg p-4 text-left hover:shadow-lg transition-all transform hover:scale-105"
              >
                <Users className="w-6 h-6 mb-2" />
                <h4 className="font-semibold">Community</h4>
                <p className="text-sm opacity-90">Connect safely</p>
              </button>
              
              <button
                onClick={() => setActiveTab('health')}
                className="bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-lg p-4 text-left hover:shadow-lg transition-all transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 mb-2" />
                <h4 className="font-semibold">Health Track</h4>
                <p className="text-sm opacity-90">Monitor cycles</p>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Icon className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.text}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;