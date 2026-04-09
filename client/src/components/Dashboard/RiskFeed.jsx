import React from 'react';
import { ShieldCheck, ShieldAlert, ShieldX, Clock } from 'lucide-react';

const risks = [
  { id: 'TXN-8492', amount: '₹12,400', status: 'Safe', time: '2m ago', color: 'green' },
  { id: 'TXN-8491', amount: '₹45,000', status: 'Suspicious', time: '5m ago', color: 'amber' },
  { id: 'TXN-8490', amount: '₹1,20,000', status: 'Blocked', time: '12m ago', color: 'red' },
  { id: 'TXN-8489', amount: '₹2,100', status: 'Safe', time: '15m ago', color: 'green' },
  { id: 'TXN-8488', amount: '₹8,500', status: 'Safe', time: '18m ago', color: 'green' },
];

const RiskFeed = () => {
  return (
    <div className="glass-card p-6 rounded-2xl h-[400px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-text-primary">Live Risk Monitor</h3>
        <span className="flex items-center gap-1.5 text-[10px] font-bold text-danger uppercase tracking-widest pulse-animation">
          <div className="w-1.5 h-1.5 rounded-full bg-danger"></div>
          Live
        </span>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        {risks.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                item.color === 'green' ? 'bg-success/10 text-success' : 
                item.color === 'amber' ? 'bg-warning/10 text-warning' : 'bg-danger/10 text-danger'
              }`}>
                {item.color === 'green' ? <ShieldCheck size={18} /> : 
                 item.color === 'amber' ? <ShieldAlert size={18} /> : 
                 <ShieldX size={18} className="pulse-animation" />}
              </div>
              <div>
                <p className="text-sm font-bold text-text-primary">{item.id}</p>
                <p className="text-[10px] text-text-muted flex items-center gap-1">
                  <Clock size={10} /> {item.time}
                </p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-sm font-bold text-text-primary">{item.amount}</p>
              <span className={`text-[10px] font-bold uppercase ${
                item.color === 'green' ? 'text-success' : 
                item.color === 'amber' ? 'text-warning' : 'text-danger'
              }`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-4 w-full py-2 text-xs font-semibold text-text-muted hover:text-text-primary hover:bg-white/5 rounded-lg transition-all">
        View Full Audit Log
      </button>
    </div>
  );
};

export default RiskFeed;
