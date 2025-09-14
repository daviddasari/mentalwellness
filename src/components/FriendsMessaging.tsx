import React, { useState } from 'react';
import { UserPlus, Search, Send, Phone, Video, MoreVertical, Heart, Shield, MessageCircle } from 'lucide-react';

const FriendsMessaging: React.FC = () => {
  const [selectedFriend, setSelectedFriend] = useState<string | null>('1');
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const friends = [
    {
      id: '1',
      name: 'Emma',
      avatar: 'E',
      status: 'online',
      lastMessage: 'Thanks for listening yesterday 💜',
      lastMessageTime: '2 min ago',
      unreadCount: 0,
      isSupporter: true,
    },
    {
      id: '2',
      name: 'Sarah',
      avatar: 'S',
      status: 'away',
      lastMessage: 'How are you feeling today?',
      lastMessageTime: '1 hour ago',
      unreadCount: 2,
      isSupporter: false,
    },
    {
      id: '3',
      name: 'Maya',
      avatar: 'M',
      status: 'online',
      lastMessage: 'The breathing exercise really helped!',
      lastMessageTime: '3 hours ago',
      unreadCount: 0,
      isSupporter: true,
    },
    {
      id: '4',
      name: 'Lily',
      avatar: 'L',
      status: 'offline',
      lastMessage: 'See you at group therapy tomorrow',
      lastMessageTime: '1 day ago',
      unreadCount: 1,
      isSupporter: false,
    },
  ];

  const messages = [
    {
      id: 1,
      senderId: '1',
      text: 'Hey! How was your therapy session today?',
      timestamp: new Date(Date.now() - 3600000),
      isOwn: false,
    },
    {
      id: 2,
      senderId: 'me',
      text: 'It went really well actually. We talked about setting boundaries and it felt so validating.',
      timestamp: new Date(Date.now() - 3500000),
      isOwn: true,
    },
    {
      id: 3,
      senderId: '1',
      text: 'That\'s amazing! I\'m so proud of you for prioritizing your mental health 💜',
      timestamp: new Date(Date.now() - 3400000),
      isOwn: false,
    },
    {
      id: 4,
      senderId: 'me',
      text: 'Thank you for always being so supportive. It means the world to me.',
      timestamp: new Date(Date.now() - 3300000),
      isOwn: true,
    },
    {
      id: 5,
      senderId: '1',
      text: 'Always here for you! Want to do a virtual coffee date this weekend?',
      timestamp: new Date(Date.now() - 120000),
      isOwn: false,
    },
  ];

  const selectedFriendData = friends.find(f => f.id === selectedFriend);
  const filteredFriends = friends.filter(friend => 
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    // Add message logic here
    setMessageText('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-400';
      case 'away': return 'bg-yellow-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Friends & Support Network</h2>
        <p className="text-gray-600">Connect with trusted friends who understand your journey</p>
      </div>

      {/* Safety Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-blue-900">Safe Space Guidelines</h3>
        </div>
        <p className="text-blue-800 text-sm">
          This is a private space for trusted connections. All conversations are encrypted and only visible to you and your friend.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ height: '600px' }}>
        <div className="flex h-full">
          {/* Friends List */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            {/* Search and Add */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex space-x-2 mb-3">
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search friends..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                  />
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg hover:shadow-lg transition-all">
                  <UserPlus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Friends List */}
            <div className="flex-1 overflow-y-auto">
              {filteredFriends.map((friend) => (
                <div
                  key={friend.id}
                  onClick={() => setSelectedFriend(friend.id)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedFriend === friend.id ? 'bg-purple-50 border-r-2 border-r-purple-600' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                        {friend.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(friend.status)} rounded-full border-2 border-white`}></div>
                      {friend.isSupporter && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Heart className="w-2 h-2 text-white" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 truncate">{friend.name}</h3>
                        <span className="text-xs text-gray-500">{friend.lastMessageTime}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{friend.lastMessage}</p>
                    </div>
                    
                    {friend.unreadCount > 0 && (
                      <div className="bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {friend.unreadCount}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedFriendData ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                          {selectedFriendData.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(selectedFriendData.status)} rounded-full border-2 border-white`}></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{selectedFriendData.name}</h3>
                        <p className="text-sm text-gray-600 capitalize">{selectedFriendData.status}</p>
                      </div>
                      {selectedFriendData.isSupporter && (
                        <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                          Support Buddy
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                        <Video className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                          message.isOwn
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.isOwn ? 'text-purple-200' : 'text-gray-500'
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type a supportive message..."
                      className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!messageText.trim()}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a friend to start chatting</h3>
                  <p className="text-gray-600">Connect with your support network</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Support Buddy Info */}
      <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Heart className="w-6 h-6 text-yellow-600" />
          <h3 className="text-lg font-semibold text-yellow-900">Support Buddy Program</h3>
        </div>
        <p className="text-yellow-800 text-sm mb-4">
          Support Buddies are friends who've volunteered to provide extra emotional support. 
          They're trained in active listening and crisis support basics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Available 24/7</h4>
            <p className="text-sm text-gray-600">Your support buddies commit to being available for urgent support</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Trained Listeners</h4>
            <p className="text-sm text-gray-600">Completed basic mental health first aid training</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Mutual Support</h4>
            <p className="text-sm text-gray-600">You can also become a support buddy for others</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsMessaging;