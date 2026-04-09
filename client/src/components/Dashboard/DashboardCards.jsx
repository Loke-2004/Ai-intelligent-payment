import React from 'react';
import { 
  IndianRupee, 
  ShieldX, 
  Zap, 
  BrainCircuit, 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight
} from 'lucide-react';

const StatCard = ({ title, value, subtitle, icon: Icon, trend, trendColor, isAI = false }) => {
  return (
    <div className={`glass-card p-6 rounded-2xl relative overflow-hidden group ${isAI ? 'ai-glow-hover' : ''}`}>
      {isAI && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-ai-gradient opacity-[0.03] rounded-full -mr-16 -mt-16 group-hover:opacity-[0.08] transition-opacity"></div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${isAI ? 'bg-ai-gradient' : 'bg-white/5'}`}>
          <Icon size={24} className={isAI ? 'text-white' : 'text-blue-soft'} />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg ${
            trendColor === 'green' ? 'text-success bg-success/10' : 'text-danger bg-danger/10'
          }`}>
            <ArrowUpRight size={12} />
            {trend}
          </div>
        )}
      </div>

      <div>
        <h3 className="text-3xl font-bold text-text-primary mb-1 tracking-tight">{value}</h3>
        <p className="text-sm font-medium text-text-muted mb-1">{title}</p>
        <p className="text-[11px] text-text-muted/60">{subtitle}</p>
      </div>
      
      {isAI && (
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
           <span className="text-[10px] font-bold text-blue-soft uppercase tracking-wider">AI Powered</span>
           <BrainCircuit size={14} className="text-blue-soft/50" />
        </div>
      )}
    </div>
  );
};

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-6">
      <StatCard 
        title="Cost Saved Today"
        value="₹4,820"
        subtitle="Across 312 transactions"
        icon={IndianRupee}
        trend="+12%"
        trendColor="green"
      />
      <StatCard 
        title="Fraud Blocked"
        value="7 attempts"
        subtitle="₹1,23,400 protected"
        icon={ShieldX}
        trend="2 high-risk"
        trendColor="red"
      />
      <StatCard 
        title="Transactions Today"
        value="1,248"
        subtitle="98.4% success rate"
        icon={Zap}
        trend="+5%"
        trendColor="green"
      />
      <StatCard 
        title="Avg Routing Score"
        value="94.2"
        subtitle="AI confidence level"
        icon={BrainCircuit}
        isAI={true}
      />
    </div>
  );
};

export default DashboardCards;
