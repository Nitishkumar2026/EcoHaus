import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Settings } from 'lucide-react';
import RecordCard from '../components/RecordCard';
import { featuredRecords } from '../data/mockData';

const ProfilePage: React.FC = () => {
  const favoriteRecords = featuredRecords.slice(0, 4);

  return (
    <div className="min-h-screen pt-8">
      <div className="px-6 mb-6 max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Profile</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-accent-warm/20 to-accent-neon/20 border border-accent-warm/30 rounded-lg p-6 mb-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-dark-surface rounded-full flex items-center justify-center border-2 border-accent-neon">
              <span className="text-2xl font-bold">M</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">Music Lover</h2>
              <p className="text-text-secondary text-sm">Member since 2024</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-dark-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-accent-neon">24</p>
              <p className="text-text-muted text-xs mt-1">Records</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent-neon">8</p>
              <p className="text-text-muted text-xs mt-1">Favorites</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent-neon">3</p>
              <p className="text-text-muted text-xs mt-1">Events</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-3 mb-6">
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full bg-dark-surface border border-dark-border rounded-lg p-4 flex items-center gap-3 hover:border-text-muted transition-colors"
          >
            <Heart size={20} className="text-accent-warm" />
            <span className="font-medium">Favorite Records</span>
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full bg-dark-surface border border-dark-border rounded-lg p-4 flex items-center gap-3 hover:border-text-muted transition-colors"
          >
            <Calendar size={20} className="text-accent-neon" />
            <span className="font-medium">Event RSVPs</span>
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full bg-dark-surface border border-dark-border rounded-lg p-4 flex items-center gap-3 hover:border-text-muted transition-colors"
          >
            <Settings size={20} className="text-text-muted" />
            <span className="font-medium">Settings</span>
          </motion.button>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Favorites</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {favoriteRecords.map((record, index) => (
              <RecordCard key={record.id} record={record} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
