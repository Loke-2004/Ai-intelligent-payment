import React from 'react';
import { motion } from 'framer-motion';
import { Network, Zap, Cpu, ArrowRightLeft } from 'lucide-react';

const routes = [
  { id: 1, name: 'Core Banking Hub', speed: '14ms', reliability: '99.9%', active: true },
  { id: 2, name: 'Crypto Gateway', speed: '124ms', reliability: '94.2%', active: false },
  { id: 3, name: 'Legacy SWIFT', speed: '2400ms', reliability: '98.1%', active: false },
];

const RoutingPanel: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group shadow-ai-glow"
    >
      <div className="flex items-center gap-4 mb-10">
        <div className="p-4 bg-ai-gradient rounded-[1.5rem] shadow-ai-glow-strong">
          <Network size={24} className="text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter italic">Neuro-Routing™</h2>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
             <p className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Synapse Layer 4.2 Online</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {routes.map((route, index) => (
          <motion.div
            key={route.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 + 0.5 }}
            className={`p-6 rounded-[2rem] border transition-all duration-500 ${
              route.active 
                ? 'bg-white/5 border-accent-blue/30 shadow-glass-inner' 
                : 'bg-transparent border-white/5 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${route.active ? 'bg-accent-blue/20' : 'bg-white/5'}`}>
                    {route.active ? <Zap size={18} className="text-accent-blue" /> : <Cpu size={18} className="text-text-muted" />}
                 </div>
                 <span className="font-extrabold text-lg text-white">{route.name}</span>
              </div>
              {route.active && (
                <div className="px-3 py-1 rounded-full bg-success/10 border border-success/20 text-[10px] font-black text-success uppercase tracking-widest">
                  Optimal Path
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="bg-black/20 rounded-xl p-3 border border-white/5">
                  <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest mb-1">Latency</p>
                  <p className="text-sm font-black text-white">{route.speed}</p>
               </div>
               <div className="bg-black/20 rounded-xl p-3 border border-white/5">
                  <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest mb-1">Uptime</p>
                  <p className="text-sm font-black text-white">{route.reliability}</p>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Connection Line */}
      <div className="absolute top-0 right-10 h-full w-[1px] bg-gradient-to-b from-transparent via-accent-blue/20 to-transparent" />
    </motion.div>
  );
};

export default RoutingPanel;
