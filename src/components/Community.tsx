import React, { useState } from 'react';
import { Users, MessageSquare, Heart, Plus, Shield } from 'lucide-react';

const Community: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Topics' },
    { id: 'anxiety', label: 'Anxiety Support' },
    { id: 'depression', label: 'Depression' },
    { id: 'relationships', label: 'Relationships' },
    { id: 'work', label: 'Work Stress' },
    { id: 'hormonal', label: 'Hormonal Health' },
    { id: 'period', label: 'Period Talk' },
  ];

  const posts = [
    {
      id: 1,
      category: 'anxiety',
      title: 'Dealing with work presentation anxiety',
      content: 'I have a big presentation tomorrow and my anxiety is through the roof. Any tips for calming down?',
      author: 'Anonymous Butterfly',
      time: '2 hours ago',
      replies: 12,
      likes: 24,
      isSupported: false,
    },
    {
      id: 2,
      category: 'period',
      title: 'PMS mood swings - how do you cope?',
      content: 'My mood swings during PMS are getting worse. I feel like a different person. What strategies work for you?',
      author: 'Anonymous Sunflower',
      time: '4 hours ago',
      replies: 18,
      likes: 31,
      isSupported: true,
    },
    {
      id: 3,
      category: 'relationships',
      title: 'Setting boundaries with family',
      content: 'Learning to say no to family demands has been challenging but necessary for my mental health.',
      author: 'Anonymous Rose',
      time: '1 day ago',
      replies: 7,
      likes: 15,
      isSupported: false,
    },
    {
      id: 4,
      category: 'work',
      title: 'Burnout recovery tips?',
      content: 'Recently took time off for burnout. What helped you get back on track without overwhelming yourself?',
      author: 'Anonymous Lily',
      time: '2 days ago',
      replies: 23,
      likes: 42,
      isSupported: true,
    },
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Users className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold text-gray-900">Safe Community</h2>
          <Shield className="w-6 h-6 text-green-600" />
        </div>
        <p className="text-gray-600 mb-4">Connect with others in a safe, anonymous environment</p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">Community Guidelines</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• All interactions are anonymous for your privacy</li>
            <li>• Be kind and supportive to fellow members</li>
            <li>• Share experiences, not medical advice</li>
            <li>• Report any inappropriate content</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Categories */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-600 hover:bg-purple-50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all">
              <Plus className="w-4 h-4" />
              <span>New Post</span>
            </button>
          </div>
        </div>

        {/* Posts */}
        <div className="lg:w-3/4 space-y-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {post.author.split(' ')[1][0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.time}</p>
                  </div>
                </div>
                {post.isSupported && (
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Community Supported
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.content}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">{post.replies} replies</span>
                  </button>
                </div>
                
                <div className="flex space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    post.category === 'anxiety' ? 'bg-yellow-100 text-yellow-800' :
                    post.category === 'period' ? 'bg-pink-100 text-pink-800' :
                    post.category === 'relationships' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {categories.find(c => c.id === post.category)?.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;