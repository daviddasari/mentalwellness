import React from 'react';
import { Heart, BarChart3, Users, MessageCircle, HeadphonesIcon, Calendar, Sparkles, UserPlus } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Heart },
    { id: 'mood', label: 'Mood', icon: Sparkles },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'friends', label: 'Friends', icon: UserPlus },
    { id: 'chat', label: 'AI Chat', icon: MessageCircle },
    { id: 'support', label: 'Support', icon: HeadphonesIcon },
    { id: 'health', label: 'Health', icon: Calendar },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-purple-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Serenity
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
          
          <div className="md:hidden">
            <select 
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="bg-purple-50 border border-purple-200 rounded-lg px-3 py-2 text-sm"
            >
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;