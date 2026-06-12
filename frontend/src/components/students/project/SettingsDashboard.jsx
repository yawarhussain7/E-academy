import React, { useState } from 'react';
import { User, Bell, Shield, Sliders, CheckCircle2, CloudLightning } from 'lucide-react';

export default function SettingsDashboard() {
  const [activeTab, setActiveTab] = useState('profile');
  const [saveStatus, setSaveStatus] = useState(false);

  // Form states tracking real configurations
  const [profile, setProfile] = useState({
    username: 'Sadia Hossain Mim',
    handle: '@sadiahossainmim',
    bio: 'Fullstack engineering student specializing in distributed background tasks and modern UI design configurations.',
    primaryRole: 'fullstack'
  });

  const [notifications, setNotifications] = useState({
    onNewReview: true,
    onDownload: false,
    onWeeklyDigest: true
  });

  const [security, setSecurity] = useState({
    twoFactor: true,
    publicProfile: true
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const triggerSaveNotification = (e) => {
    e.preventDefault();
    setSaveStatus(true);
    setTimeout(() => setSaveStatus(false), 2500);
  };

  return (
    <div className="bg-[#13151a] border border-gray-800/50 rounded-2xl p-6 max-w-4xl mx-auto text-left animate-fade-in">
      
      {/* Header Segment */}
      <div className="border-b border-gray-800/40 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">Account & System Settings</h2>
          <p className="text-xs text-gray-500 mt-0.5">Manage your repository developer profile, notification preferences, and API security matrix tokens.</p>
        </div>
        {saveStatus && (
          <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-xl animate-pulse">
            <CheckCircle2 className="w-4 h-4" /> Changes Applied Successfully
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        
        {/* Left Column Navigation Tabs Sidebar */}
        <div className="flex flex-col gap-1">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 p-3 text-xs font-semibold rounded-xl transition-all border ${
              activeTab === 'profile'
                ? 'bg-purple-600/10 border-purple-500/30 text-purple-400'
                : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-[#1b1e25]'
            }`}
          >
            <User className="w-4 h-4" /> Developer Profile
          </button>

          <button
            onClick={() => setActiveTab('preferences')}
            className={`flex items-center gap-2 p-3 text-xs font-semibold rounded-xl transition-all border ${
              activeTab === 'preferences'
                ? 'bg-purple-600/10 border-purple-500/30 text-purple-400'
                : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-[#1b1e25]'
            }`}
          >
            <Sliders className="w-4 h-4" /> Hub Preferences
          </button>

          <button
            onClick={() => setActiveTab('notifications')}
            className={`flex items-center gap-2 p-3 text-xs font-semibold rounded-xl transition-all border ${
              activeTab === 'notifications'
                ? 'bg-purple-600/10 border-purple-500/30 text-purple-400'
                : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-[#1b1e25]'
            }`}
          >
            <Bell className="w-4 h-4" /> Notifications
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`flex items-center gap-2 p-3 text-xs font-semibold rounded-xl transition-all border ${
              activeTab === 'security'
                ? 'bg-purple-600/10 border-purple-500/30 text-purple-400'
                : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-[#1b1e25]'
            }`}
          >
            <Shield className="w-4 h-4" /> Security Assets
          </button>
        </div>

        {/* Right Column Dynamic Configuration Panes */}
        <div className="md:col-span-3 bg-[#0d0e12] border border-gray-800/60 rounded-2xl p-5">
          <form onSubmit={triggerSaveNotification}>
            
            {/* SUBSECTION 1: PROFILE MANAGEMENT */}
            {activeTab === 'profile' && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Public Developer Card Details</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Display Name</label>
                    <input
                      type="text"
                      name="username"
                      value={profile.username}
                      onChange={handleProfileChange}
                      className="w-full bg-[#13151a] border border-gray-800 text-xs rounded-xl px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">User Handle</label>
                    <input
                      type="text"
                      name="handle"
                      value={profile.handle}
                      onChange={handleProfileChange}
                      className="w-full bg-[#13151a] border border-gray-800 text-xs rounded-xl px-3 py-2 text-gray-400 font-mono focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Biographical Context Summary</label>
                  <textarea
                    rows="3"
                    name="bio"
                    value={profile.bio}
                    onChange={handleProfileChange}
                    className="w-full bg-[#13151a] border border-gray-800 text-xs rounded-xl px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500 resize-none leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Default Track Filter Specialization</label>
                  <select
                    name="primaryRole"
                    value={profile.primaryRole}
                    onChange={handleProfileChange}
                    className="w-full bg-[#13151a] border border-gray-800 text-xs rounded-xl px-2.5 py-2 text-gray-400 focus:outline-none focus:border-purple-500 cursor-pointer"
                  >
                    <option value="frontend">Frontend Architecture</option>
                    <option value="backend">Backend Infrastructure</option>
                    <option value="mobile">Mobile Systems</option>
                    <option value="fullstack">Fullstack Deployment Engineering</option>
                  </select>
                </div>
              </div>
            )}

            {/* SUBSECTION 2: HUB PREFERENCES */}
            {activeTab === 'preferences' && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Display & Workspace Configurations</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#13151a] rounded-xl border border-gray-800/40">
                    <div>
                      <span className="block text-xs font-semibold text-gray-300">Default Grid View Layout</span>
                      <span className="block text-[11px] text-gray-500 mt-0.5">Start workspace rendering on Project Cards instead of Reports.</span>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-purple-600 cursor-pointer" />
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#13151a] rounded-xl border border-gray-800/40">
                    <div>
                      <span className="block text-xs font-semibold text-gray-300">Developer Diagnostic Mode</span>
                      <span className="block text-[11px] text-gray-500 mt-0.5">Render raw stack objects info string along technology tags inside directory paths.</span>
                    </div>
                    <input type="checkbox" className="w-4 h-4 accent-purple-600 cursor-pointer" />
                  </div>
                </div>
              </div>
            )}

            {/* SUBSECTION 3: NOTIFICATIONS LOGIC */}
            {activeTab === 'notifications' && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Alert Triggers Routing</h3>
                
                <div className="space-y-3">
                  <label className="flex items-start gap-3 p-3 bg-[#13151a] rounded-xl border border-gray-800/40 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.onNewReview}
                      onChange={(e) => setNotifications(prev => ({ ...prev, onNewReview: e.target.checked }))}
                      className="w-4 h-4 mt-0.5 accent-purple-600"
                    />
                    <div>
                      <span className="block text-xs font-semibold text-gray-300">Peer Report Audits</span>
                      <span className="block text-[11px] text-gray-500 mt-0.5">Receive browser alerts whenever another student submits a rating score node.</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-3 bg-[#13151a] rounded-xl border border-gray-800/40 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.onDownload}
                      onChange={(e) => setNotifications(prev => ({ ...prev, onDownload: e.target.checked }))}
                      className="w-4 h-4 mt-0.5 accent-purple-600"
                    />
                    <div>
                      <span className="block text-xs font-semibold text-gray-300">Repository Clone Metrics</span>
                      <span className="block text-[11px] text-gray-500 mt-0.5">Send immediate reports when users request zip data download links.</span>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* SUBSECTION 4: SYSTEM SECURITY & KEYS */}
            {activeTab === 'security' && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Encryption Tokens & Permissions</h3>
                
                <div className="space-y-3">
                  <div className="p-3 bg-[#13151a] rounded-xl border border-gray-800/40 flex items-center justify-between">
                    <div>
                      <span className="block text-xs font-semibold text-gray-300">Academic Verification Key</span>
                      <span className="block font-mono text-[10px] text-purple-400 mt-0.5">SHA256 •••• •••• •••• ed39</span>
                    </div>
                    <button type="button" className="text-[10px] font-bold uppercase tracking-wider border border-gray-800 bg-gray-900 text-gray-400 px-2.5 py-1 rounded-lg hover:text-white transition-colors">Rotate Token</button>
                  </div>

                  <label className="flex items-start gap-3 p-3 bg-[#13151a] rounded-xl border border-gray-800/40 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={security.publicProfile}
                      onChange={(e) => setSecurity(prev => ({ ...prev, publicProfile: e.target.checked }))}
                      className="w-4 h-4 mt-0.5 accent-purple-600"
                    />
                    <div>
                      <span className="block text-xs font-semibold text-gray-300">Public Network Directory Visibility</span>
                      <span className="block text-[11px] text-gray-500 mt-0.5">Allow cross-class student instances to search your index tree profile.</span>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Global Settings Save Submit Button Block */}
            <div className="border-t border-gray-800/40 pt-4 mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md shadow-purple-950/20 flex items-center gap-1"
              >
                <CloudLightning className="w-3.5 h-3.5" /> Save Configuration Parameters
              </button>
            </div>

          </form>
        </div>

      </div>

    </div>
  );
}