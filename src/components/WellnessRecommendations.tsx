import React, { useState } from 'react';
import { Play, Pause, Heart, Leaf, Droplets, Wind } from 'lucide-react';

const WellnessRecommendations: React.FC = () => {
  const [activeExercise, setActiveExercise] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  const breathingExercises = [
    {
      id: 'box',
      name: '4-7-8 Breathing',
      description: 'Inhale for 4, hold for 7, exhale for 8',
      duration: 240,
      icon: Wind,
      color: 'bg-blue-500'
    },
    {
      id: 'equal',
      name: 'Equal Breathing',
      description: 'Inhale and exhale for equal counts',
      duration: 300,
      icon: Droplets,
      color: 'bg-green-500'
    }
  ];

  const bodyExercises = [
    {
      category: 'Stretching',
      exercises: [
        { name: 'Neck Roll', duration: '30 seconds', difficulty: 'Easy' },
        { name: 'Shoulder Shrugs', duration: '1 minute', difficulty: 'Easy' },
        { name: 'Cat-Cow Stretch', duration: '2 minutes', difficulty: 'Easy' },
        { name: 'Child\'s Pose', duration: '3 minutes', difficulty: 'Easy' }
      ]
    },
    {
      category: 'Yoga',
      exercises: [
        { name: 'Sun Salutation', duration: '5 minutes', difficulty: 'Medium' },
        { name: 'Warrior Pose', duration: '2 minutes', difficulty: 'Medium' },
        { name: 'Downward Dog', duration: '1 minute', difficulty: 'Easy' },
        { name: 'Corpse Pose', duration: '10 minutes', difficulty: 'Easy' }
      ]
    },
    {
      category: 'Meditation',
      exercises: [
        { name: 'Body Scan', duration: '15 minutes', difficulty: 'Easy' },
        { name: 'Mindful Walking', duration: '10 minutes', difficulty: 'Easy' },
        { name: 'Loving Kindness', duration: '12 minutes', difficulty: 'Medium' },
        { name: 'Breath Focus', duration: '8 minutes', difficulty: 'Easy' }
      ]
    }
  ];

  const quickTips = [
    {
      title: 'Hydration Reminder',
      description: 'Drink a glass of water to boost energy and clarity',
      icon: Droplets,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Fresh Air Break',
      description: 'Step outside for 5 minutes to reset your mind',
      icon: Leaf,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Heart Check-in',
      description: 'Place hand on heart, take 3 deep breaths',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    }
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startExercise = (id: string) => {
    setActiveExercise(id);
    setCurrentTime(0);
  };

  const stopExercise = () => {
    setActiveExercise(null);
    setCurrentTime(0);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Wellness & Stress Relief</h2>
        <p className="text-gray-600">Simple exercises and techniques to help you relax and recharge</p>
      </div>

      {/* Quick Relief Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {quickTips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className={`w-12 h-12 ${tip.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${tip.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          );
        })}
      </div>

      {/* Breathing Exercises */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Guided Breathing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {breathingExercises.map((exercise) => {
            const Icon = exercise.icon;
            const isActive = activeExercise === exercise.id;
            
            return (
              <div key={exercise.id} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 ${exercise.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{exercise.name}</h4>
                    <p className="text-sm text-gray-600">{exercise.description}</p>
                  </div>
                </div>

                {isActive && (
                  <div className="mb-4">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        {formatTime(currentTime)}
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${(currentTime / exercise.duration) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex space-x-3">
                  {!isActive ? (
                    <button
                      onClick={() => startExercise(exercise.id)}
                      className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
                    >
                      <Play className="w-4 h-4" />
                      <span>Start</span>
                    </button>
                  ) : (
                    <button
                      onClick={stopExercise}
                      className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
                    >
                      <Pause className="w-4 h-4" />
                      <span>Stop</span>
                    </button>
                  )}
                  <span className="text-sm text-gray-600 py-2">
                    {Math.floor(exercise.duration / 60)} minutes
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Body Exercises */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {bodyExercises.map((category, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
            <div className="space-y-4">
              {category.exercises.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{exercise.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      exercise.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      exercise.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {exercise.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{exercise.duration}</p>
                  <button className="w-full bg-purple-50 text-purple-700 py-2 rounded-lg hover:bg-purple-100 transition-colors">
                    Start Exercise
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Daily Wellness Plan */}
      <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Today's Wellness Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">Morning</div>
            <div className="text-sm text-gray-600">5-min meditation</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">Midday</div>
            <div className="text-sm text-gray-600">Breathing break</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">Afternoon</div>
            <div className="text-sm text-gray-600">Gentle stretching</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-pink-600 mb-1">Evening</div>
            <div className="text-sm text-gray-600">Relaxation yoga</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessRecommendations;