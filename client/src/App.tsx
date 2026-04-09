import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import DashboardCards from './components/Dashboard/DashboardCards';
import ActivityChart from './components/Dashboard/ActivityChart';
import RiskFeed from './components/Dashboard/RiskFeed';
import RoutingPanel from './components/Dashboard/RoutingPanel';
import CrossBorderOptimizer from './components/Dashboard/CrossBorderOptimizer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-primary flex text-text-primary selection:bg-accent-purple/30">
      {/* 🔮 Moving Mesh Background */}
      <div className="mesh-container">
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
      </div>

      {/* Fixed Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 ml-[240px] flex flex-col min-w-0 relative">
        <Header title={activeTab} />

        <div className="flex-1 overflow-y-auto pb-12 custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeTab === 'Dashboard' ? (
                <div className="max-w-[1600px] mx-auto w-full">
                  {/* Top Row: Stat Cards */}
                  <DashboardCards />

                  {/* Middle Row: Chart & Risk Feed */}
                  <div className="grid grid-cols-1 xl:grid-cols-10 gap-8 px-10 py-4">
                    <div className="xl:col-span-6">
                      <ActivityChart />
                    </div>
                    <div className="xl:col-span-4">
                      <RiskFeed />
                    </div>
                  </div>

                  {/* Bottom Row: Routing & Cross-Border */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-10 py-6">
                    <RoutingPanel />
                    <CrossBorderOptimizer />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[calc(100vh-150px)]">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="glass-card p-12 rounded-[2rem] text-center max-w-md mx-6 border-white/5"
                  >
                    <div className="w-24 h-24 bg-ai-gradient/10 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-ai-glow">
                      <span className="text-5xl animate-bounce">🚧</span>
                    </div>
                    <h3 className="text-3xl font-extrabold mb-4 bg-ai-gradient bg-clip-text text-transparent italic">
                      {activeTab} Module
                    </h3>
                    <p className="text-text-muted mb-10 leading-relaxed font-medium">
                      Our intelligence layer is currently optimizing the {activeTab.toLowerCase()} protocols. 
                      Neural verification in progress...
                    </p>
                    <button 
                      onClick={() => setActiveTab('Dashboard')}
                      className="group relative px-8 py-4 bg-ai-gradient rounded-2xl font-bold text-white transition-all hover:shadow-ai-glow-strong hover:scale-[1.02] active:scale-95 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Return to Core Dashboard
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default App;
