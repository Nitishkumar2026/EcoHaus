import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Heart, ShoppingCart } from 'lucide-react';
import { allRecords } from '../data/mockData';

const RecordDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  
  const record = allRecords.find(r => r.id === id);

  if (!record) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-text-muted">Record not found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      <div className="md:p-8">
        <div className="relative md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(-1)}
            className="absolute top-6 left-6 z-10 w-10 h-10 bg-dark-bg/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-dark-border"
          >
            <ArrowLeft size={20} />
          </motion.button>

          <div className="md:col-span-1 aspect-square bg-dark-card md:rounded-lg md:overflow-hidden">
            <img
              src={record.coverUrl}
              alt={record.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-2 px-6 py-6 md:px-0 md:py-4 space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1 pr-4">
                  <h1 className="text-2xl md:text-4xl font-bold mb-1">{record.title}</h1>
                  <p className="text-text-secondary text-lg md:text-xl">{record.artist}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-bold text-accent-neon">
                    ₹{record.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-dark-border">
              <div>
                <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Genre</p>
                <p className="font-medium">{record.genre}</p>
              </div>
              <div>
                <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Year</p>
                <p className="font-medium">{record.year}</p>
              </div>
              <div>
                <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Label</p>
                <p className="font-medium">{record.label}</p>
              </div>
              <div>
                <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Format</p>
                <p className="font-medium">12" Vinyl</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full bg-dark-surface border border-dark-border rounded-lg py-4 flex items-center justify-center gap-3 font-medium hover:border-text-muted transition-colors"
              >
                <Play size={20} className="text-accent-neon" />
                Listen Preview
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent-neon text-dark-bg rounded-lg py-4 flex items-center justify-center gap-3 font-semibold hover:bg-opacity-90 transition-opacity"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </motion.button>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsFavorite(!isFavorite)}
              className="w-full bg-dark-surface border border-dark-border rounded-lg p-4 flex items-center justify-center gap-3 font-medium hover:border-text-muted transition-colors"
            >
              <Heart
                size={20}
                className={`transition-all ${isFavorite ? 'fill-accent-warm text-accent-warm' : 'text-text-secondary'}`}
              />
              <span>{isFavorite ? 'Added to Favorites' : 'Add to Favorites'}</span>
            </motion.button>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecordDetailPage;
