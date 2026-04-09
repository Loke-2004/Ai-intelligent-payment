import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

const CrossBorderOptimizer: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group shadow-glass"
    >
      <div className="flex justify-between items-start mb-12">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter">Global Liquidity Optimizer</h2>
          <p className="text-sm font-bold text-text-muted mt-2">AI-driven cross-border pathfinding</p>
        </div>
        <div className="w-16 h-16 bg-white/5 rounded-[1.5rem] flex items-center justify-center border border-white/5 group-hover:border-accent-cyan/30 transition-colors">
          <Globe2 size={32} className="text-accent-cyan animate-spin-slow" />
        </div>
      </div>

      {/* Visual Path Visualization */}
      <div className="relative h-48 mb-12 flex items-center justify-between px-10">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 -translate-y-1/2 overflow-hidden">
           <motion.div 
             animate={{ x: ['-100%', '100%'] }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             className="w-1/2 h-full bg-gradient-to-r from-transparent via-accent-cyan to-transparent"
           />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-[#1E293B] border border-white/5 flex items-center justify-center shadow-glass-inner">
             <span className="text-2xl font-black text-white">IN</span>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">Origin</p>
        </div>

        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative z-10 w-24 h-24 rounded-full bg-ai-gradient flex items-center justify-center shadow-ai-glow-strong border-4 border-primary"
        >
           <Zap size={32} className="text-white fill-white" />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-[#1E293B] border border-white/5 flex items-center justify-center shadow-glass-inner">
             <span className="text-2xl font-black text-white">US</span>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">Destination</p>
        </div>
      </div>

      {/* Optimization Stats */}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-white/5 border border-white/5 relative group/card overflow-hidden">
           <div className="absolute inset-0 bg-accent-cyan/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
           <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-2 flex items-center gap-2">
              <ArrowRight size={12} className="text-accent-cyan" />
              Fx Savings
           </p>
           <p className="text-3xl font-black text-white">₹8,420</p>
           <p className="text-[10px] font-bold text-success mt-1">Real-time quote locked</p>
        </div>
        <div className="p-6 rounded-3xl bg-white/5 border border-white/5 relative group/card overflow-hidden">
           <div className="absolute inset-0 bg-success/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
           <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-2 flex items-center gap-2">
              <ShieldCheck size={12} className="text-success" />
              Safety Score
           </p>
           <p className="text-3xl font-black text-white">99.9%</p>
           <p className="text-[10px] font-bold text-text-muted mt-1">Non-custodial bridge</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CrossBorderOptimizer;
