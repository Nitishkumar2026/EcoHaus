import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import RecordCard from '../components/RecordCard';
import { allRecords } from '../data/mockData';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredRecords = allRecords.filter(record =>
    record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-8">
      <div className="px-6 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Search</h1>
        
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
            />
            <input
              type="text"
              placeholder="Search records, artists, genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-surface border border-dark-border rounded-lg pl-12 pr-10 py-3 text-sm focus:outline-none focus:border-accent-neon transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
              >
                <X size={18} />
              </button>
            )}
          </div>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFilters(!showFilters)}
            className={`w-12 h-12 bg-dark-surface border rounded-lg flex items-center justify-center transition-colors ${showFilters ? 'border-accent-neon text-accent-neon' : 'border-dark-border'}`}
          >
            <SlidersHorizontal size={20} />
          </motion.button>
        </div>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-dark-surface border border-dark-border rounded-lg p-4 mb-6"
          >
            <h3 className="font-medium mb-3">Filters</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-text-muted mb-2 block">
                  Price Range
                </label>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  className="w-full accent-accent-neon"
                />
              </div>
            </div>
          </motion.div>
        )}

        {searchQuery && (
          <p className="text-text-muted text-sm mb-4">
            {filteredRecords.length} {filteredRecords.length === 1 ? 'result' : 'results'} for "{searchQuery}"
          </p>
        )}
      </div>

      <div className="px-6 pb-6">
        {searchQuery ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
            {filteredRecords.map((record, index) => (
              <RecordCard key={record.id} record={record} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search size={48} className="text-text-muted mx-auto mb-4" />
            <p className="text-text-muted">
              Search for your favorite records, artists, or genres
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
