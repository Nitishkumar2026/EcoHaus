import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import RecordCard from '../components/RecordCard';
import { allRecords } from '../data/mockData';

const categories = ['All', 'Techno', 'House', 'Ambient', 'Indian Electronica'];

const BrowsePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredRecords = selectedCategory === 'All'
    ? allRecords
    : allRecords.filter(record => record.genre === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header title="Browse" subtitle="Curated vinyl collection" />
      
      <div className="p-6">
        <div className="hidden md:block mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Browse</h1>
            <p className="text-text-secondary text-md mt-1">Explore our curated vinyl collection.</p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide mb-6">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                selectedCategory === category
                  ? 'bg-accent-neon text-dark-bg border-accent-neon'
                  : 'bg-dark-surface text-text-secondary border-dark-border hover:bg-dark-border'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="mb-4">
          <p className="text-text-muted text-sm">
            Showing {filteredRecords.length} {filteredRecords.length === 1 ? 'record' : 'records'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
          {filteredRecords.map((record, index) => (
            <RecordCard key={record.id} record={record} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
