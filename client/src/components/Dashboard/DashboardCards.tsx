import React from 'react';
import { motion } from 'framer-motion';
import { 
  IndianRupee, 
  ShieldX, 
  Zap, 
  BrainCircuit, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ElementType;
  trend?: string;
  trendColor?: 'green' | 'red';
  isAI?: boolean;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle, icon: Icon, trend, trendColor, isAI = false, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`glass-card p-6 rounded-[2rem] relative overflow-hidden group ${isAI ? 'ai-aura' : ''}`}
    >
      {/* Background Glow */}
      <div className={`absolute -right-4 -top-4 w-32 h-32 blur-3xl opacity-5 transition-opacity group-hover:opacity-10 ${isAI ? 'bg-accent-purple' : 'bg-accent-blue'}`} />
      
      <div className="flex justify-between items-start mb-6">
        <div className={`p-4 rounded-2xl ${isAI ? 'bg-ai-gradient shadow-ai-glow' : 'bg-white/5 border border-white/5 shadow-glass-inner'} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
          <Icon size={24} className="text-white" />
        </div>
        {trend && (
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl border ${
              trendColor === 'green' 
                ? 'text-success bg-success/10 border-success/20' 
                : 'text-danger bg-danger/10 border-danger/20'
            }`}
          >
            <ArrowUpRight size={14} strokeWidth={3} />
            {trend}
          </motion.div>
        )}
      </div>

      <div className="relative z-10">
        <h3 className="text-4xl font-extrabold text-white mb-2 tracking-tighter tabular-nums drop-shadow-sm">
          {value}
        </h3>
        <p className="text-sm font-bold text-text-primary mb-1 flex items-center gap-2">
          {title}
          {isAI && <Sparkles size={14} className="text-accent-purple animate-pulse" />}
        </p>
        <p className="text-xs font-medium text-text-muted/70">{subtitle}</p>
      </div>

      {/* Futuristic Sparkline (Decorative) */}
      <div className="mt-6 h-10 w-full relative opacity-30 group-hover:opacity-60 transition-opacity">
        <svg viewBox="0 0 100 20" className="w-full h-full preserve-3d">
          <motion.path
            d={`M 0 15 Q 10 ${Math.random() * 10} 20 15 T 40 12 T 60 18 T 80 10 T 100 15`}
            fill="none"
            stroke={isAI ? '#8B5CF6' : '#0EA5E9'}
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </div>
      
      {isAI && (
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
           <span className="text-[10px] font-extrabold text-accent-purple uppercase tracking-[0.2em]">Cognitive Core Enabled</span>
           <div className="flex gap-1">
              <div className="w-1 h-1 bg-accent-purple rounded-full animate-ping" />
              <div className="w-1 h-1 bg-accent-purple rounded-full animate-ping [animation-delay:0.2s]" />
              <div className="w-1 h-1 bg-accent-purple rounded-full animate-ping [animation-delay:0.4s]" />
           </div>
        </div>
      )}
    </motion.div>
  );
};

const DashboardCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-6">
      <StatCard 
        index={0}
        title="Cost Saved Today"
        value="₹4,820"
        subtitle="Across 312 transactions"
        icon={IndianRupee}
        trend="+12%"
        trendColor="green"
      />
      <StatCard 
        index={1}
        title="Fraud Blocked"
        value="7 attempts"
        subtitle="₹1,23,400 protected"
        icon={ShieldX}
        trend="2 high-risk"
        trendColor="red"
      />
      <StatCard 
        index={2}
        title="Transactions Today"
        value="1,248"
        subtitle="98.4% success rate"
        icon={Zap}
        trend="+5%"
        trendColor="green"
      />
      <StatCard 
        index={3}
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
