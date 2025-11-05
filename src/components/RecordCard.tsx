import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Record } from '../types';

interface RecordCardProps {
  record: Record;
  index?: number;
}

const RecordCard: React.FC<RecordCardProps> = ({ record, index = 0 }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/record/${record.id}`)}
      className="cursor-pointer group"
    >
      <div className="relative aspect-square overflow-hidden rounded-md bg-dark-card">
        <img
          src={record.coverUrl}
          alt={record.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        {record.featured && (
          <div className="absolute top-2 right-2 bg-accent-warm px-2 py-1 rounded-sm">
            <span className="text-xs font-medium text-white">FEATURED</span>
          </div>
        )}
      </div>
      <div className="mt-3">
        <h3 className="font-medium text-sm line-clamp-1">{record.title}</h3>
        <p className="text-text-secondary text-xs mt-1">{record.artist}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-text-muted text-xs uppercase tracking-wide">
            {record.genre}
          </span>
          <span className="text-accent-neon font-medium text-sm">
            ₹{record.price.toFixed(2)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default RecordCard;
