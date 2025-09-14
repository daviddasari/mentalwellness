import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import MoodTracking from './components/MoodTracking';
import Analytics from './components/Analytics';
import Community from './components/Community';
import AIChat from './components/AIChat';
import Support from './components/Support';
import HealthTracking from './components/HealthTracking';
import WellnessRecommendations from './components/WellnessRecommendations';
import FriendsMessaging from './components/FriendsMessaging';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard setActiveTab={setActiveTab} />;
      case 'mood':
        return <MoodTracking />;
      case 'analytics':
        return <Analytics />;
      case 'community':
        return <Community />;
      case 'friends':
        return <FriendsMessaging />;
      case 'chat':
        return <AIChat />;
      case 'support':
        return <Support />;
      case 'health':
        return <HealthTracking />;
      case 'wellness':
        return <WellnessRecommendations />;
      default:
        return <Dashboard setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderActiveTab()}
      </main>
    </div>
  );
}

export default App;