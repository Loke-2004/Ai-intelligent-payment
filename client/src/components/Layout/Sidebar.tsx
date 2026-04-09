import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  ShieldCheck, 
  Globe2, 
  BarChart3, 
  Settings,
  BrainCircuit,
  Zap
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Transactions', icon: ArrowLeftRight },
  { name: 'Fraud Monitor', icon: ShieldCheck },
  { name: 'Cross-Border', icon: Globe2 },
  { name: 'Analytics', icon: BarChart3 },
  { name: 'Settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-0 h-screen w-[260px] p-6 z-50 flex flex-col"
    >
      <div className="glass-card h-full rounded-[2.5rem] p-6 flex flex-col border-white/5 shadow-glass-inner">
        {/* Branding */}
        <div className="flex items-center gap-3 px-2 mb-12 group cursor-pointer">
          <div className="w-10 h-10 bg-ai-gradient rounded-xl flex items-center justify-center shadow-ai-glow transition-transform group-hover:scale-110 group-hover:rotate-3">
             <BrainCircuit className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight">PayOrchestrate</h1>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">AI Agent Active</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            
            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full group relative flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 ${
                  isActive 
                    ? 'text-white' 
                    : 'text-text-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 bg-ai-gradient rounded-2xl shadow-ai-glow"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon 
                  size={20} 
                  className={`relative z-10 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'group-hover:text-accent-blue'}`} 
                />
                <span className={`relative z-10 font-bold text-sm tracking-wide ${isActive ? 'text-white' : ''}`}>
                  {item.name}
                </span>
                
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute right-3 w-1.5 h-1.5 bg-white rounded-full relative z-10"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* System Health */}
        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="glass-card bg-white/5 rounded-2xl p-4 border-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Neural Load</span>
              <span className="text-[10px] font-bold text-accent-blue">24.2%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '24.2%' }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 className="h-full bg-ai-gradient"
               />
            </div>
            <div className="mt-3 flex items-center gap-2">
               <Zap size={10} className="text-warning fill-warning" />
               <span className="text-[9px] font-bold text-text-muted">Processing 84.1k tps</span>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
