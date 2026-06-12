import React, { useState } from 'react';
import { 
  User, Palette, Bell, ShieldAlert, Save, Moon, Sun, Monitor, 
  Trash2, ChevronRight, KeyRound, CreditCard, Lock, Eye, EyeOff,
  History, Download, ShieldCheck
} from 'lucide-react';

export default function GeneralPortalSettings({ onSaveSuccess }) {
  // Active Tab View Category State Switch
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'security' | 'payments' | 'appearance' | 'notifications' | 'advanced'

  // Form States
  const [profile, setProfile] = useState({
    username: 'Sadia Hossain Mim',
    handle: 'sadiahossainmim',
    email: 'sadia.mim@university.edu'
  });

  const [passwordState, setPasswordState] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPass, setShowPass] = useState(false);

  const [appearance, setAppearance] = useState('dark'); 
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    browserPings: false
  });

  const [advanced, setAdvanced] = useState({
    sessionTimeout: '2h',
    animationsSpeed: 'normal',
    hardwareAcceleration: true
  });

  const handleClearCache = () => {
    if (window.confirm("Are you sure you want to purge local storage tokens? This will reset custom display adjustments.")) {
      localStorage.clear();
      if (onSaveSuccess) onSaveSuccess("Local portal application caches purged.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSaveSuccess) {
      onSaveSuccess(`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} parameters synchronized!`);
    }
  };

  return (
    /* Expanded grid template routing full-width distribution smoothly across multi-columns */
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch w-full">
      
      {/* 🧭 LEFT SIDE: Categories link array matching dynamic grid space layout */}
      <div className="md:col-span-1 flex flex-col gap-1.5 border-b md:border-b-0 md:border-r border-gray-800/40 pb-4 md:pb-0 md:pr-4">
        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2 px-2 text-left">
          Categories
        </span>

        <button
          type="button" onClick={() => setActiveTab('profile')}
          className={`w-full flex items-center justify-between py-2.5 px-3 text-xs font-semibold rounded-xl border transition-all duration-200 group ${activeTab === 'profile' ? 'bg-purple-600/10 border-purple-500/30 text-purple-400 font-bold shadow-sm' : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-[#0d0e12]'}`}
        >
          <div className="flex items-center gap-2"><User className="w-4 h-4" /> <span>Profile</span></div>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${activeTab === 'profile' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1 group-hover:opacity-40'}`} />
        </button>

        {/* NEW: Security & Credentials Trigger */}
        <button
          type="button" onClick={() => setActiveTab('security')}
          className={`w-full flex items-center justify-between py-2.5 px-3 text-xs font-semibold rounded-xl border transition-all duration-200 group ${activeTab === 'security' ? 'bg-purple-600/10 border-purple-500/30 text-purple-400 font-bold shadow-sm' : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-[#0d0e12]'}`}
        >
          <div className="flex items-center gap-2"><KeyRound className="w-4 h-4" /> <span>Security</span></div>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${activeTab === 'security' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1 group-hover:opacity-40'}`} />
        </button>

        {/* NEW: Payments & Fee Ledgers Trigger */}
        <button
          type="button" onClick={() => setActiveTab('payments')}
          className={`w-full flex items-center justify-between py-2.5 px-3 text-xs font-semibold rounded-xl border transition-all duration-200 group ${activeTab === 'payments' ? 'bg-purple-600/10 border-purple-500/30 text-purple-400 font-bold shadow-sm' : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-[#0d0e12]'}`}
        >
          <div className="flex items-center gap-2"><CreditCard className="w-4 h-4" /> <span>Payments</span></div>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${activeTab === 'payments' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1 group-hover:opacity-40'}`} />
        </button>

        <button
          type="button" onClick={() => setActiveTab('appearance')}
          className={`w-full flex items-center justify-between py-2.5 px-3 text-xs font-semibold rounded-xl border transition-all duration-200 group ${activeTab === 'appearance' ? 'bg-purple-600/10 border-purple-500/30 text-purple-400 font-bold shadow-sm' : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-[#0d0e12]'}`}
        >
          <div className="flex items-center gap-2"><Palette className="w-4 h-4" /> <span>Appearance</span></div>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${activeTab === 'appearance' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1 group-hover:opacity-40'}`} />
        </button>

        <button
          type="button" onClick={() => setActiveTab('notifications')}
          className={`w-full flex items-center justify-between py-2.5 px-3 text-xs font-semibold rounded-xl border transition-all duration-200 group ${activeTab === 'notifications' ? 'bg-purple-600/10 border-purple-500/30 text-purple-400 font-bold shadow-sm' : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-[#0d0e12]'}`}
        >
          <div className="flex items-center gap-2"><Bell className="w-4 h-4" /> <span>Alerts</span></div>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${activeTab === 'notifications' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1 group-hover:opacity-40'}`} />
        </button>

        <button
          type="button" onClick={() => setActiveTab('advanced')}
          className={`w-full flex items-center justify-between py-2.5 px-3 text-xs font-semibold rounded-xl border transition-all duration-200 group ${activeTab === 'advanced' ? 'bg-purple-600/10 border-purple-500/30 text-purple-400 font-bold shadow-sm' : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-[#0d0e12]'}`}
        >
          <div className="flex items-center gap-2"><ShieldAlert className="w-4 h-4" /> <span>Advanced</span></div>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${activeTab === 'advanced' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1 group-hover:opacity-40'}`} />
        </button>
      </div>

      {/* 🛠️ RIGHT SIDE: Main workspace form */}
      <form onSubmit={handleSubmit} className="md:col-span-3 flex flex-col justify-between text-left min-h-90 bg-[#0d0e12]/30 p-5 rounded-xl border border-gray-800/20 w-full">
        
        <div className="w-full flex-1">
          {/* CATEGORY 1: USER PROFILE PANEL */}
          {activeTab === 'profile' && (
            <div className="space-y-4 animate-[fadeIn_0.25s_ease-out] w-full">
              <div>
                <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wide mb-1">Identity Profile</h3>
                <p className="text-[11px] text-gray-500">Manage public registry account names and email access routing nodes.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Username</label>
                  <input
                    type="text" value={profile.username}
                    onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    className="w-full bg-[#0d0e12] border border-gray-800 text-xs rounded-xl px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Handle</label>
                  <input
                    type="text" value={profile.handle}
                    onChange={(e) => setProfile({ ...profile, handle: e.target.value })}
                    className="w-full bg-[#0d0e12] border border-gray-800 text-xs rounded-xl px-3 py-2 text-purple-400 font-mono focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Email Address</label>
                <input
                  type="email" value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full bg-[#0d0e12] border border-gray-800 text-xs rounded-xl px-3 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          )}

          {/* NEW CATEGORY 2: SECURITY & PASSWORD MANAGEMENT */}
          {activeTab === 'security' && (
            <div className="space-y-4 animate-[fadeIn_0.25s_ease-out] w-full">
              <div>
                <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wide mb-1">Security Credentials</h3>
                <p className="text-[11px] text-gray-500">Update account master tokens and authorization phrases.</p>
              </div>
              
              <div className="space-y-3.5">
                <div className="relative">
                  <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Current Password</label>
                  <input
                    type={showPass ? "text" : "password"}
                    value={passwordState.currentPassword}
                    onChange={(e) => setPasswordState({ ...passwordState, currentPassword: e.target.value })}
                    className="w-full bg-[#0d0e12] border border-gray-800 text-xs rounded-xl px-3 py-2 pr-10 text-gray-200 focus:outline-none focus:border-purple-500"
                    placeholder="••••••••"
                  />
                  <button 
                    type="button" onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-7 text-gray-500 hover:text-gray-300"
                  >
                    {showPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">New Password</label>
                    <input
                      type={showPass ? "text" : "password"}
                      value={passwordState.newPassword}
                      onChange={(e) => setPasswordState({ ...passwordState, newPassword: e.target.value })}
                      className="w-full bg-[#0d0e12] border border-gray-800 text-xs rounded-xl px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Confirm New Password</label>
                    <input
                      type={showPass ? "text" : "password"}
                      value={passwordState.confirmPassword}
                      onChange={(e) => setPasswordState({ ...passwordState, confirmPassword: e.target.value })}
                      className="w-full bg-[#0d0e12] border border-gray-800 text-xs rounded-xl px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="p-3 bg-[#0d0e12] rounded-xl border border-gray-800/40 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <span className="block text-xs font-semibold text-gray-300">Two-Factor Authentication (2FA)</span>
                    <span className="block text-[10px] text-gray-500">Secure student identity session checks via verified device pins.</span>
                  </div>
                  <button type="button" className="ml-auto text-[11px] font-bold bg-purple-600/10 hover:bg-purple-600/20 text-purple-400 border border-purple-500/20 px-2.5 py-1 rounded-lg transition-all">
                    Setup
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* NEW CATEGORY 3: PAYMENTS & TUITION TRANSACTIONS */}
          {activeTab === 'payments' && (
            <div className="space-y-4 animate-[fadeIn_0.25s_ease-out] w-full">
              <div>
                <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wide mb-1">Challan & Fee Invoices</h3>
                <p className="text-[11px] text-gray-500">Track current semester dues, ledger statements, and online clear keys.</p>
              </div>

              {/* Outstanding Balance Block */}
              <div className="p-4 bg-purple-950/10 border border-purple-800/20 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">Current Outstanding Dues</span>
                  <div className="text-xl font-bold text-white mt-0.5">Rs. 48,500 <span className="text-xs text-gray-400 font-normal">(Fall Semester Fee)</span></div>
                </div>
                <button type="button" className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-md transition-all flex items-center gap-1.5 self-start sm:self-center">
                  <CreditCard className="w-3.5 h-3.5" /> Pay Outstanding Dues
                </button>
              </div>

              {/* Historical Challan Table */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider flex items-center gap-1">
                  <History className="w-3 h-3" /> Recent Transactions Archive
                </span>
                <div className="overflow-x-auto w-full bg-[#0d0e12] rounded-xl border border-gray-800/40">
                  <table className="w-full text-xs text-left text-gray-400">
                    <thead className="text-[10px] bg-[#13151a] text-gray-500 uppercase font-bold border-b border-gray-800/50">
                      <tr>
                        <th className="p-2.5">Description</th>
                        <th className="p-2.5">Challan ID</th>
                        <th className="p-2.5">Status</th>
                        <th className="p-2.5 text-right">Receipt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/30">
                      <tr>
                        <td className="p-2.5 font-medium text-gray-300">Spring Semester Registration</td>
                        <td className="p-2.5 font-mono text-[11px]">#CH-2026-992</td>
                        <td className="p-2.5"><span className="text-[10px] px-1.5 py-0.5 bg-emerald-950/50 text-emerald-400 border border-emerald-900/40 rounded-md font-bold">Paid</span></td>
                        <td className="p-2.5 text-right"><button type="button" className="text-purple-400 hover:text-purple-300"><Download className="w-3.5 h-3.5 ml-auto" /></button></td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium text-gray-300">Hostel Allocation Fee</td>
                        <td className="p-2.5 font-mono text-[11px]">#CH-2026-104</td>
                        <td className="p-2.5"><span className="text-[10px] px-1.5 py-0.5 bg-emerald-950/50 text-emerald-400 border border-emerald-900/40 rounded-md font-bold">Paid</span></td>
                        <td className="p-2.5 text-right"><button type="button" className="text-purple-400 hover:text-purple-300"><Download className="w-3.5 h-3.5 ml-auto" /></button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* CATEGORY 4: THEME APPEARANCE PANEL */}
          {activeTab === 'appearance' && (
            <div className="space-y-4 animate-[fadeIn_0.25s_ease-out] w-full">
              <div>
                <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wide mb-1">Portal Display Styles</h3>
                <p className="text-[11px] text-gray-500">Toggle custom hardware palette configuration scales.</p>
              </div>
              <div className="grid grid-cols-3 gap-2.5 w-full">
                <button
                  type="button" onClick={() => setAppearance('dark')}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 text-xs font-semibold transition-all ${appearance === 'dark' ? 'bg-purple-600/10 border-purple-500 text-white' : 'bg-[#0d0e12] border-gray-800 text-gray-500'}`}
                >
                  <Moon className="w-4 h-4" /> Dark
                </button>
                <button
                  type="button" onClick={() => setAppearance('light')}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 text-xs font-semibold transition-all ${appearance === 'light' ? 'bg-purple-600/10 border-purple-500 text-white' : 'bg-[#0d0e12] border-gray-800 text-gray-500'}`}
                >
                  <Sun className="w-4 h-4" /> Light
                </button>
                <button
                  type="button" onClick={() => setAppearance('system')}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 text-xs font-semibold transition-all ${appearance === 'system' ? 'bg-purple-600/10 border-purple-500 text-white' : 'bg-[#0d0e12] border-gray-800 text-gray-500'}`}
                >
                  <Monitor className="w-4 h-4" /> System
                </button>
              </div>
            </div>
          )}

          {/* CATEGORY 5: NOTIFICATIONS ALERT ROSTER PANEL */}
          {activeTab === 'notifications' && (
            <div className="space-y-4 animate-[fadeIn_0.25s_ease-out] w-full">
              <div>
                <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wide mb-1">Communication Pings</h3>
                <p className="text-[11px] text-gray-500">Control system criteria parameters for telemetry dispatch notifications.</p>
              </div>
              <label className="flex items-center justify-between p-3.5 bg-[#0d0e12] rounded-xl border border-gray-800/50 cursor-pointer hover:border-gray-700/60 transition-colors w-full">
                <div>
                  <span className="block text-xs font-medium text-gray-300">Email Updates Link</span>
                  <span className="block text-[10px] text-gray-500">Forward system environment error logs to your student inbox.</span>
                </div>
                <input
                  type="checkbox"
                  checked={notifications.emailAlerts}
                  onChange={(e) => setNotifications({ ...notifications, emailAlerts: e.target.checked })}
                  className="w-4 h-4 accent-purple-600 cursor-pointer"
                />
              </label>
            </div>
          )}

          {/* CATEGORY 6: ADVANCED OPERATIONS PANEL */}
          {activeTab === 'advanced' && (
            <div className="space-y-4 animate-[fadeIn_0.25s_ease-out] w-full">
              <div>
                <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wide mb-1">Advanced Control Matrix</h3>
                <p className="text-[11px] text-gray-500">Modify low-level client lifecycle variables and state token timers.</p>
              </div>
              
              <div className="space-y-2.5 w-full">
                <div className="p-3 bg-[#0d0e12] rounded-xl border border-gray-800/50 flex items-center justify-between w-full">
                  <div>
                    <span className="block text-xs font-medium text-gray-300">Session Remember Timeout</span>
                    <span className="block text-[10px] text-gray-500 mt-0.5">Define login token validation lifecycles.</span>
                  </div>
                  <select
                    value={advanced.sessionTimeout}
                    onChange={(e) => setAdvanced({ ...advanced, sessionTimeout: e.target.value })}
                    className="bg-[#13151a] border border-gray-800 text-xs rounded-lg px-2 py-1 text-gray-300 focus:outline-none"
                  >
                    <option value="30m">30 Minutes</option>
                    <option value="2h">2 Hours</option>
                    <option value="24h">24 Hours</option>
                  </select>
                </div>

                <div className="p-3 bg-red-950/10 border border-red-900/30 rounded-xl flex items-center justify-between gap-4 w-full">
                  <div>
                    <span className="block text-xs font-medium text-red-400">Purge Storage Token Cache</span>
                    <span className="block text-[10px] text-gray-500 mt-0.5">Reset stored user interface preferences and active state cache matrices.</span>
                  </div>
                  <button
                    type="button" onClick={handleClearCache}
                    className="bg-red-950/40 hover:bg-red-900/30 text-red-400 border border-red-900/50 font-bold text-[11px] px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-all shrink-0"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear Context
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Persistent Action Save Button Footer Node */}
        {activeTab !== 'payments' && (
          <div className="border-t border-gray-800/30 pt-4 mt-4 flex justify-end w-full">
            <button
              type="submit"
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-purple-950/20"
            >
              <Save className="w-3.5 h-3.5" /> Save Category Updates
            </button>
          </div>
        )}

      </form>
    </div>
  );
}