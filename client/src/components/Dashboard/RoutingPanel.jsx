import React from 'react';
import { CheckCircle2, AlertTriangle, Info, Zap, CreditCard, Wallet, Globe } from 'lucide-react';

const RoutingPanel = () => {
  const decisions = [
    {
      title: "UPI selected over Card",
      reason: "₹12 Transaction fee saved",
      status: "Optimized",
      icon: Zap,
      color: "success",
      subIcon: CreditCard
    },
    {
      title: "Wallet Route Blocked",
      reason: "High fraud probability (87%)",
      status: "High Risk",
      icon: AlertTriangle,
      color: "danger",
      subIcon: Wallet
    },
    {
      title: "Cross-Border Optimized",
      reason: "2.1% lower conversion loss",
      status: "Efficient",
      icon: CheckCircle2,
      color: "blue-soft",
      subIcon: Globe
    }
  ];

  return (
    <div className="glass-card p-6 rounded-2xl h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-text-primary">AI Routing Suggestions</h3>
        <Info size={16} className="text-text-muted cursor-help" />
      </div>

      <div className="space-y-4">
        {decisions.map((item, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 ai-glow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10">
               <item.subIcon size={48} />
            </div>
            
            <div className="flex items-start gap-3">
              <div className={`mt-1 text-${item.color}`}>
                <item.icon size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-text-primary">{item.title}</h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded bg-${item.color}/10 text-${item.color}`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-text-muted">{item.reason}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutingPanel;
