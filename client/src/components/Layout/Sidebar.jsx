import React from 'react';
import { 
  Home, 
  ArrowLeftRight, 
  ShieldAlert, 
  Globe, 
  BarChart3, 
  Settings, 
  Zap,
  LayoutDashboard
} from 'lucide-react';

const Sidebar = ({ activeTab = 'Dashboard', setActiveTab }) => {
  const menuItems = [
    { id: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'Transactions', icon: ArrowLeftRight, label: 'Transactions' },
    { id: 'Fraud Monitor', icon: ShieldAlert, label: 'Fraud Monitor' },
    { id: 'Cross-Border', icon: Globe, label: 'Cross-Border' },
    { id: 'Analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'Settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[240px] bg-primary border-r border-white/5 flex flex-col z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-ai-gradient flex items-center justify-center ai-glow">
          <Zap size={20} className="text-white fill-white" />
        </div>
        <h1 className="text-lg font-bold text-text-primary tracking-tight">
          PayOrchestrate <span className="text-blue-soft italic">AI</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                isActive 
                  ? 'bg-white/10 text-text-primary border-l-4 border-blue-soft' 
                  : 'text-text-muted hover:bg-white/5 hover:text-text-primary'
              }`}
            >
              <item.icon size={20} className={`${isActive ? 'text-blue-soft' : 'group-hover:text-text-primary'}`} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t border-white/5">
        <div className="glass-card p-4 rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-ai-gradient p-[1px]">
            <div className="w-full h-full rounded-full bg-primary flex items-center justify-center overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-text-primary">Admin User</p>
            <p className="text-[10px] text-text-muted">Pro Plan (Free Tier)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
