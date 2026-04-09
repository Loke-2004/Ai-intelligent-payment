import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';

const data = [
  { name: 'Mon', UPI: 4000, Card: 2400 },
  { name: 'Tue', UPI: 3000, Card: 1398 },
  { name: 'Wed', UPI: 2000, Card: 9800 },
  { name: 'Thu', UPI: 2780, Card: 3908 },
  { name: 'Fri', UPI: 1890, Card: 4800 },
  { name: 'Sat', UPI: 2390, Card: 3800 },
  { name: 'Sun', UPI: 3490, Card: 4300 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-4 rounded-xl border border-white/10 shadow-2xl">
        <p className="text-white font-bold mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></div>
            <span className="text-text-muted">{entry.name}:</span>
            <span className="text-text-primary">₹{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const ActivityChart = () => {
  return (
    <div className="glass-card p-6 rounded-2xl h-[400px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-text-primary">Payment Route Distribution</h3>
          <p className="text-xs text-text-muted">Transaction volume by method (Last 7 Days)</p>
        </div>
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-blue-soft"></div>
             <span className="text-[10px] text-text-muted uppercase tracking-wider">UPI</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-[#7C3AED]"></div>
             <span className="text-[10px] text-text-muted uppercase tracking-wider">Card</span>
           </div>
        </div>
      </div>

      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUPI" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorCard" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94A3B8', fontSize: 10 }} 
              dy={10}
            />
            <YAxis 
              hide={true}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="UPI" 
              stroke="#3B82F6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorUPI)" 
            />
            <Area 
              type="monotone" 
              dataKey="Card" 
              stroke="#7C3AED" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorCard)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;
