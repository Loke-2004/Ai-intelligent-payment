import React from 'react';
import { ArrowRight, Plane, Landmark, Zap, BadgeCheck } from 'lucide-react';

const CrossBorderOptimizer = () => {
  const routes = [
    { name: 'Wise (Optimized)', fee: '0.45%', speed: '4 hrs', active: true },
    { name: 'SWIFT Direct', fee: '1.2%', speed: '24-48 hrs', active: false },
    { name: 'Standard Forex', fee: '2.1%', speed: '3-5 days', active: false },
  ];

  return (
    <div className="glass-card p-6 rounded-2xl h-full flex flex-col">
      <h3 className="text-lg font-bold text-text-primary mb-6">Cross-Border Route Optimizer</h3>
      
      {/* Visual Route */}
      <div className="flex items-center justify-between px-4 py-8 bg-white/5 rounded-2xl mb-8 relative border border-white/5">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-soft/10 text-blue-soft rounded-full flex items-center justify-center mb-2 mx-auto border border-blue-soft/20">
            IN
          </div>
          <span className="text-[10px] font-bold text-text-muted">India (INR)</span>
        </div>
        
        <div className="flex-1 px-4 relative">
          <div className="h-[2px] bg-gradient-to-r from-blue-soft/20 via-blue-soft to-blue-soft/20 w-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary border-2 border-blue-soft flex items-center justify-center text-blue-soft pulse-animation">
              <Plane size={14} />
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mb-2 mx-auto border border-success/20">
            US
          </div>
          <span className="text-[10px] font-bold text-text-muted">USA (USD)</span>
        </div>
      </div>

      <div className="space-y-3">
        {routes.map((route, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
              route.active 
                ? 'bg-blue-soft/5 border-blue-soft/30 shadow-lg' 
                : 'bg-white/5 border-white/5 hover:border-white/10'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${route.active ? 'bg-blue-soft text-white' : 'bg-white/5 text-text-muted'}`}>
                {route.active ? <Zap size={16} /> : <Landmark size={16} />}
              </div>
              <div>
                <p className={`text-sm font-bold ${route.active ? 'text-text-primary' : 'text-text-muted'}`}>
                  {route.name}
                </p>
                <p className="text-[10px] text-text-muted">{route.speed}</p>
              </div>
            </div>
            
            <div className="text-right flex items-center gap-3">
               <div>
                <p className={`text-sm font-bold ${route.active ? 'text-success' : 'text-text-muted'}`}>{route.fee}</p>
                <p className="text-[10px] text-text-muted uppercase tracking-tighter">Fee</p>
               </div>
               {route.active && <BadgeCheck size={20} className="text-blue-soft" />}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-[10px] text-center text-text-muted italic flex items-center justify-center gap-1">
        <Landmark size={10} /> Powered by AI routing engine for optimized conversion paths
      </p>
    </div>
  );
};

export default CrossBorderOptimizer;
