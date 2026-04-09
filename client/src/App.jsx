import React, { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import DashboardCards from './components/Dashboard/DashboardCards';
import ActivityChart from './components/Dashboard/ActivityChart';
import RiskFeed from './components/Dashboard/RiskFeed';
import RoutingPanel from './components/Dashboard/RoutingPanel';
import CrossBorderOptimizer from './components/Dashboard/CrossBorderOptimizer';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-primary flex text-text-primary">
      {/* Fixed Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 ml-[240px] flex flex-col min-w-0 bg-[#081629] bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.05),transparent_50%)]">
        <Header title={activeTab} />

        <div className="flex-1 overflow-y-auto pb-12">
          {activeTab === 'Dashboard' ? (
            <div className="max-w-[1600px] mx-auto w-full">
              {/* Top Row: Stat Cards */}
              <DashboardCards />

              {/* Middle Row: Chart & Risk Feed */}
              <div className="grid grid-cols-1 xl:grid-cols-10 gap-6 px-8 py-6">
                <div className="xl:col-span-6">
                  <ActivityChart />
                </div>
                <div className="xl:col-span-4">
                  <RiskFeed />
                </div>
              </div>

              {/* Bottom Row: Routing & Cross-Border */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-8 py-6">
                <RoutingPanel />
                <CrossBorderOptimizer />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-150px)]">
              <div className="glass-card p-12 rounded-3xl text-center max-w-md mx-6">
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🚧</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{activeTab} Page</h3>
                <p className="text-text-muted mb-8">
                  The {activeTab} orchestration module is currently being optimized by the AI agent. 
                  Check back soon for real-time insights.
                </p>
                <button 
                  onClick={() => setActiveTab('Dashboard')}
                  className="px-6 py-3 bg-blue-soft text-white rounded-xl font-bold hover:bg-blue-soft/90 transition-all shadow-lg shadow-blue-soft/20"
                >
                  Back to Main Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
