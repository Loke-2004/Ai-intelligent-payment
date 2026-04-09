import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, User, Command } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-[100px] px-10 flex items-center justify-between z-40"
    >
      <div className="flex items-center gap-6 flex-1">
        <h2 className="text-3xl font-black text-white tracking-tighter italic min-w-max">
          {title}
        </h2>
        
        {/* Futuristic Search Bar */}
        <div className="relative group max-w-xl w-full ml-8 hidden md:block">
          <div className="absolute inset-0 bg-accent-blue/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative glass-card border-white/5 bg-white/5 rounded-2xl flex items-center px-5 py-3 group-hover:border-white/10 transition-all">
            <Search className="text-text-muted mr-3" size={18} />
            <input 
              type="text" 
              placeholder="Search neural transactions (Cmd + K)" 
              className="bg-transparent border-none outline-none text-sm font-bold text-white w-full placeholder:text-text-muted/40 placeholder:font-black tracking-wide"
            />
            <div className="bg-white/5 border border-white/10 rounded-lg px-1.5 py-1 flex items-center gap-1 shadow-inner">
               <Command size={10} className="text-text-muted" />
               <span className="text-[10px] font-black text-text-muted">K</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile & Notifications */}
      <div className="flex items-center gap-5">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
        >
          <Bell size={20} className="text-text-muted group-hover:text-white" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-danger rounded-full border-2 border-primary animate-pulse" />
        </motion.button>

        <div className="w-[1px] h-8 bg-white/5" />

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 pl-2 cursor-pointer group"
        >
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black text-white leading-none">Loke Finance</p>
            <p className="text-[10px] font-bold text-accent-blue uppercase tracking-widest mt-1">Enterprise Tier</p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-ai-gradient rounded-2xl blur-md opacity-20 group-hover:opacity-60 transition-opacity" />
             <div className="relative w-12 h-12 bg-[#1E293B] border-2 border-white/10 rounded-2xl flex items-center justify-center shadow-glass overflow-hidden">
                <User size={24} className="text-white" />
             </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
