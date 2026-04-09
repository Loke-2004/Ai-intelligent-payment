import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: '00:00', direct: 4000, routed: 2400 },
  { name: '04:00', direct: 3000, routed: 1398 },
  { name: '08:00', direct: 2000, routed: 9800 },
  { name: '12:00', direct: 2780, routed: 3908 },
  { name: '16:00', direct: 1890, routed: 4800 },
  { name: '20:00', direct: 2390, routed: 3800 },
  { name: '23:59', direct: 3490, routed: 4300 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card bg-primary/90 p-4 rounded-2xl border-white/10 shadow-ai-glow">
        <p className="text-xs font-bold text-text-muted mb-2 uppercase tracking-widest">{label}</p>
        <div className="space-y-1">
          <p className="text-sm font-bold text-accent-blue flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-blue" />
            AI Optimized: {payload[0].value}
          </p>
          <p className="text-sm font-bold text-accent-purple flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-purple" />
            Standard Path: {payload[1].value}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const ActivityChart: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-8 rounded-[2.5rem] h-[450px] relative overflow-hidden group"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Routing Efficiency</h2>
          <p className="text-sm font-medium text-text-muted">Real-time path optimization monitoring</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-accent-blue" />
             <span className="text-xs font-bold text-text-muted">AI Optimized</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-accent-purple" />
             <span className="text-xs font-bold text-text-muted">Standard</span>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRouted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorDirect" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 700 }}
              dy={10}
            />
            <YAxis 
              hide 
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2 }} />
            <Area 
              type="monotone" 
              dataKey="routed" 
              stroke="#0EA5E9" 
              strokeWidth={4}
              fillOpacity={1} 
              fill="url(#colorRouted)" 
              animationDuration={2000}
            />
            <Area 
              type="monotone" 
              dataKey="direct" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              strokeDasharray="5 5"
              fillOpacity={1} 
              fill="url(#colorDirect)" 
              animationDuration={2500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute bottom-4 left-8 right-8 flex justify-between animate-pulse">
         <div className="text-[10px] font-bold text-accent-blue/50 tracking-widest uppercase">Encryption: AES-256 Enabled</div>
         <div className="text-[10px] font-bold text-accent-purple/50 tracking-widest uppercase">Stream Verified</div>
      </div>
    </motion.div>
  );
};

export default ActivityChart;
