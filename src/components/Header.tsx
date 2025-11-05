import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'EchoHaus', subtitle }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-6 pt-8 pb-6 md:hidden"
    >
      <div className="flex items-baseline gap-2">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <span className="text-accent-neon text-xs font-medium">RECORDS</span>
      </div>
      {subtitle && (
        <p className="text-text-secondary text-sm mt-1">{subtitle}</p>
      )}
    </motion.header>
  );
};

export default Header;
