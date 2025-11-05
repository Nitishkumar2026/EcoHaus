import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import RecordCard from '../components/RecordCard';
import EventBanner from '../components/EventBanner';
import { featuredRecords, upcomingEvents } from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header subtitle="Bandra, Mumbai" />
      
      <div className="p-6 space-y-8">
        <div className="hidden md:block mb-4">
            <h1 className="text-3xl font-bold tracking-tight">Home</h1>
            <p className="text-text-secondary text-md mt-1">Discover new arrivals and upcoming events.</p>
        </div>

        <EventBanner event={upcomingEvents[0]} />

        <section>
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-lg md:text-xl font-semibold">Featured Records</h2>
            <span className="text-accent-neon text-xs uppercase tracking-wide">
              New Arrivals
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
            {featuredRecords.map((record, index) => (
              <RecordCard key={record.id} record={record} index={index} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-4">Staff Picks</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-surface border border-dark-border rounded-lg p-4"
          >
            <div className="flex gap-4 items-center">
              <img
                src={featuredRecords[0].coverUrl}
                alt={featuredRecords[0].title}
                className="w-20 h-20 rounded object-cover"
              />
              <div className="flex-1">
                <p className="text-xs text-accent-warm uppercase tracking-wide mb-1">
                  This Week's Vibe
                </p>
                <h3 className="font-medium mb-1">{featuredRecords[0].title}</h3>
                <p className="text-text-secondary text-sm">
                  {featuredRecords[0].artist}
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
