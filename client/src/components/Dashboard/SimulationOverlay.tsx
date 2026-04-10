import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, ShieldCheck, Zap, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';

interface SimulationOverlayProps {
  step: number;
  onClose?: () => void;
}

const SimulationOverlay: React.FC<SimulationOverlayProps> = ({ step }) => {
  const steps = [
    { 
      id: 1, 
      label: 'Security & Risk Assessment', 
      icon: ShieldCheck, 
      sub: 'Scanning 84.1M historical patterns...',
      color: '#EF4444'
    },
    { 
      id: 2, 
      label: 'Intelligent Route Selection', 
      icon: Zap, 
      sub: 'Optimizing for latency and success rate...',
      color: '#0EA5E9'
    },
    { 
      id: 3, 
      label: 'Cross-Border Variance Check', 
      icon: Globe2, 
      sub: 'Evaluating 12 global liquidity pools...',
      color: '#8B5CF6'
    }
  ];

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-md"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ai-gradient opacity-10 blur-[120px] rounded-full animate-pulse-aura" />
        </div>

        <motion.div 
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          className="relative glass-card max-w-lg w-full rounded-[3rem] p-10 border-white/10 shadow-2xl"
        >
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 bg-ai-gradient rounded-[2rem] flex items-center justify-center shadow-ai-glow-strong mb-6 relative">
              <BrainCircuit className="text-white relative z-10" size={40} />
              <div className="absolute inset-0 bg-white/20 rounded-[2rem] animate-ping opacity-20" />
            </div>
            <h2 className="text-3xl font-black italic tracking-tighter text-white mb-2">Neural Processing</h2>
            <div className="flex items-center gap-2 text-accent-blue font-bold text-xs uppercase tracking-widest">
              <Sparkles size={14} className="animate-spin-slow" />
              Real-time Optimization Active
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((s) => {
              const isActive = step === s.id;
              const isPast = step > s.id;
              const Icon = s.icon;

              return (
                <motion.div 
                  key={s.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: isActive || isPast ? 1 : 0.2,
                    scale: isActive ? 1.02 : 1
                  }}
                  className={`flex items-start gap-4 p-5 rounded-2xl transition-all ${isActive ? 'bg-white/5 border border-white/10 shadow-glass-inner' : ''}`}
                >
                  <div className={`mt-1 p-2 rounded-lg transition-colors ${isActive || isPast ? 'bg-white/10' : 'bg-transparent'}`}>
                    {isPast ? (
                      <CheckCircle2 size={20} className="text-success" />
                    ) : (
                      <Icon size={20} style={{ color: isActive ? s.color : 'inherit' }} className={isActive ? 'animate-pulse' : ''} />
                    )}
                  </div>
                  <div>
                    <h4 className={`font-bold transition-colors ${isActive ? 'text-white' : 'text-text-muted'}`}>{s.label}</h4>
                    <p className="text-xs text-text-muted mt-1 font-medium">{s.sub}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-center">
             <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-4">
                <motion.div 
                  className="h-full bg-ai-gradient"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
             </div>
             <p className="text-[10px] font-black text-text-muted/40 uppercase tracking-[0.3em]">Cognitive Core Verification v4.2</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SimulationOverlay;
