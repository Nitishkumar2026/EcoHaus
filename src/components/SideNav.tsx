import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Disc3, Search, User, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const SideNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/browse', icon: Disc3, label: 'Browse' },
    { path: '/search', icon: Search, label: 'Search' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 fixed top-0 left-0 h-full bg-dark-bg border-r border-dark-border p-6 z-50">
      <div className="flex items-baseline gap-2 mb-12">
        <Music className="text-accent-neon" />
        <h1 className="text-xl font-bold tracking-tight">EchoHaus</h1>
      </div>

      <nav className="flex flex-col gap-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <motion.button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors text-left relative ${
                isActive ? 'bg-dark-surface' : 'hover:bg-dark-surface/50'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              <Icon
                size={22}
                className={`transition-colors ${
                  isActive ? 'text-accent-neon' : 'text-text-secondary'
                }`}
              />
              <span
                className={`font-medium text-sm transition-colors ${
                  isActive ? 'text-text-primary' : 'text-text-secondary'
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeSideTab"
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-accent-neon rounded-r-full"
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      <div className="mt-auto text-center text-text-muted text-xs">
        <p>&copy; 2025 EchoHaus Records</p>
        <p>Bandra, Mumbai</p>
      </div>
    </aside>
  );
};

export default SideNav;
