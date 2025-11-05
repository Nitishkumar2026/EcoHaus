import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Event } from '../types';

interface EventBannerProps {
  event: Event;
}

const EventBanner: React.FC<EventBannerProps> = ({ event }) => {
  const navigate = useNavigate();
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/event/${event.id}`)}
      className="relative overflow-hidden rounded-lg bg-gradient-to-r from-accent-warm/20 to-accent-neon/20 border border-accent-warm/30 p-4 cursor-pointer"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Calendar size={16} className="text-accent-warm" />
          <span className="text-xs font-medium text-accent-warm uppercase tracking-wide">
            Upcoming DJ Night
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1">{event.title}</h3>
        <p className="text-text-secondary text-sm mb-3">
          {formattedDate} • {event.time} • {event.artists.join(', ')}
        </p>
        <div className="flex items-center gap-2 text-accent-neon text-sm font-medium">
          <span>View Details</span>
          <ArrowRight size={16} />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-warm/10 rounded-full blur-3xl" />
    </motion.div>
  );
};

export default EventBanner;
