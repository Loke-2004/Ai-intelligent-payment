import React from 'react';
import { Bell, Search, Moon } from 'lucide-react';

const Header = ({ title }) => {
  return (
    <header className="h-[72px] flex items-center justify-between px-8 border-b border-white/5 bg-primary/50 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold text-text-primary">{title}</h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group flex items-center">
          <Search size={18} className="absolute left-3 text-text-muted group-focus-within:text-blue-soft transition-colors" />
          <input 
            type="text" 
            placeholder="Search transactions..."
            className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-text-primary focus:outline-none focus:border-blue-soft/50 w-64 transition-all"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 text-text-muted hover:text-text-primary transition-colors">
            <Moon size={20} />
          </button>
          <button className="p-2 text-text-muted hover:text-text-primary transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full border-2 border-primary"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
