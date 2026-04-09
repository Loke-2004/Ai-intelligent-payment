import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ShieldAlert, ShieldX, Activity } from 'lucide-react';

const risks = [
  { id: 1, type: 'Blocked', amount: '₹12,400', location: 'London, UK', status: 'high', time: '2m ago' },
  { id: 2, type: 'Verified', amount: '₹4,200', location: 'Mumbai, IN', status: 'safe', time: '5m ago' },
  { id: 3, type: 'Flagged', amount: '₹31,000', location: 'New York, US', status: 'medium', time: '8m ago' },
  { id: 4, type: 'Blocked', amount: '₹8,900', location: 'Berlin, DE', status: 'high', time: '12m ago' },
  { id: 5, type: 'Verified', amount: '₹1,500', location: 'Tokyo, JP', status: 'safe', time: '15m ago' },
];

const RiskFeed: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card p-8 rounded-[2.5rem] h-[450px] flex flex-col relative overflow-hidden group shadow-glass-inner"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            AI Threat Monitor
            <motion.div
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-danger rounded-full"
            />
          </h2>
          <p className="text-xs font-bold text-text-muted uppercase tracking-widest mt-1">Live Global Feed</p>
        </div>
        <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
          <Activity size={20} className="text-accent-blue animate-pulse" />
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        <AnimatePresence>
          {risks.map((risk, index) => (
            <motion.div
              key={risk.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.03)' }}
              className="p-4 rounded-2xl border border-white/[0.03] bg-white/[0.01] flex items-center justify-between group/item cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${
                  risk.status === 'high' ? 'bg-danger/10 text-danger border-danger/20' :
                  risk.status === 'medium' ? 'bg-warning/10 text-warning border-warning/20' :
                  'bg-success/10 text-success border-success/20'
                } border`}>
                  {risk.status === 'high' ? <ShieldX size={18} /> :
                   risk.status === 'medium' ? <ShieldAlert size={18} /> :
                   <ShieldCheck size={18} />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-white capitalize">{risk.type}</p>
                    <span className="text-[10px] font-bold text-text-muted/50">• {risk.time}</span>
                  </div>
                  <p className="text-[11px] font-bold text-text-muted">{risk.location}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-extrabold text-white">{risk.amount}</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                   <div className={`w-1 h-3 rounded-full ${risk.status === 'high' ? 'bg-danger' : risk.status === 'medium' ? 'bg-warning' : 'bg-success'}`} />
                   <span className="text-[9px] font-black uppercase tracking-tighter opacity-50">Score {risk.status === 'high' ? '98' : risk.status === 'medium' ? '64' : '15'}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5">
         <button className="w-full py-3 rounded-xl border border-white/5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] hover:bg-white/5 transition-colors">
            View Analytics Report
         </button>
      </div>
    </motion.div>
  );
};

export default RiskFeed;
