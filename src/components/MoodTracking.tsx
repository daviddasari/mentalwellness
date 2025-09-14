import React, { useState } from 'react';
import { Calendar, Save, Sparkles } from 'lucide-react';

const MoodTracking: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [intensity, setIntensity] = useState<number>(5);
  const [note, setNote] = useState<string>('');
  const [factors, setFactors] = useState<string[]>([]);

  const moodOptions = [
    { emoji: '😁', label: 'Ecstatic', value: 'ecstatic', color: 'bg-green-400' },
    { emoji: '😊', label: 'Happy', value: 'happy', color: 'bg-green-300' },
    { emoji: '😌', label: 'Content', value: 'content', color: 'bg-blue-300' },
    { emoji: '😐', label: 'Neutral', value: 'neutral', color: 'bg-gray-300' },
    { emoji: '😟', label: 'Worried', value: 'worried', color: 'bg-yellow-400' },
    { emoji: '😢', label: 'Sad', value: 'sad', color: 'bg-orange-400' },
    { emoji: '😠', label: 'Angry', value: 'angry', color: 'bg-red-400' },
    { emoji: '😰', label: 'Anxious', value: 'anxious', color: 'bg-purple-400' },
  ];

  const factorOptions = [
    'Work', 'Relationships', 'Health', 'Sleep', 'Exercise', 'Weather', 
    'Family', 'Social Media', 'Finances', 'Hormones', 'Period'
  ];

  const toggleFactor = (factor: string) => {
    setFactors(prev => 
      prev.includes(factor) 
        ? prev.filter(f => f !== factor)
        : [...prev, factor]
    );
  };

  const handleSave = () => {
    // Save mood data
    alert('Mood saved successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">How are you feeling today?</h2>
          <p className="text-gray-600">Track your mood to better understand your patterns</p>
        </div>

        <div className="space-y-8">
          {/* Mood Selection */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Select your mood</h3>
            <div className="grid grid-cols-4 gap-4">
              {moodOptions.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => setSelectedMood(mood.value)}
                  className={`p-4 rounded-xl border-2 transition-all text-center hover:scale-105 ${
                    selectedMood === mood.value
                      ? `border-purple-500 ${mood.color} shadow-lg`
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="text-3xl mb-2">{mood.emoji}</div>
                  <div className="text-sm font-medium text-gray-700">{mood.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Intensity Slider */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Intensity: {intensity}/10
            </h3>
            <input
              type="range"
              min="1"
              max="10"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Mild</span>
              <span>Intense</span>
            </div>
          </div>

          {/* Contributing Factors */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What might be contributing?</h3>
            <div className="flex flex-wrap gap-2">
              {factorOptions.map((factor) => (
                <button
                  key={factor}
                  onClick={() => toggleFactor(factor)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    factors.includes(factor)
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  {factor}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional notes (optional)</h3>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="How was your day? What happened that affected your mood?"
              className="w-full p-4 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 resize-none h-32"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSave}
              disabled={!selectedMood}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-5 h-5" />
              <span>Save Mood Entry</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodTracking;