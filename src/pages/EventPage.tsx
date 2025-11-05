import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Ticket } from 'lucide-react';
import { upcomingEvents } from '../data/mockData';

const EventPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isRsvped, setIsRsvped] = useState(false);
  
  const event = upcomingEvents.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-text-muted">Event not found</p>
      </div>
    );
  }

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      <div className="relative h-64 md:h-80">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-10 w-10 h-10 bg-dark-bg/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-dark-border"
        >
          <ArrowLeft size={20} />
        </motion.button>

        <img
          src={event.posterUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent" />
      </div>

      <div className="px-6 md:px-8 -mt-20 relative z-10 pb-6 space-y-6 max-w-3xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h1>
          <div className="flex items-center gap-2">
            <Ticket size={16} className="text-accent-warm" />
            <span className="text-accent-warm font-medium">
              ₹{event.price.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="space-y-4 bg-dark-surface border border-dark-border rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Calendar size={20} className="text-accent-neon mt-0.5" />
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Date</p>
              <p className="font-medium">{formattedDate}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock size={20} className="text-accent-neon mt-0.5" />
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Time</p>
              <p className="font-medium">{event.time}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-accent-neon mt-0.5" />
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Venue</p>
              <p className="font-medium">{event.venue}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users size={20} className="text-accent-neon mt-0.5" />
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Lineup</p>
              <p className="font-medium">{event.artists.join(' • ')}</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-surface border border-dark-border rounded-lg p-4">
          <h3 className="font-semibold mb-2">About The Event</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            Join us for an unforgettable night of underground electronic music in the heart of Mumbai. Experience the raw energy of India's techno scene in an intimate venue.
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsRsvped(!isRsvped)}
          className={`w-full rounded-lg py-4 flex items-center justify-center gap-3 font-semibold transition-colors ${
            isRsvped
              ? 'bg-dark-surface border border-accent-neon text-accent-neon'
              : 'bg-accent-neon text-dark-bg'
          }`}
        >
          {isRsvped ? 'RSVP Confirmed ✓' : 'RSVP for Event'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EventPage;
