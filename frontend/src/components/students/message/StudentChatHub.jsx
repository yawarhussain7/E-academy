import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, Check, CheckCheck, Send, Paperclip, Image, FileText, 
  MoreVertical, Smile, SearchCode, 
  Trash2, Reply, Users, PlusCircle, Link2, 
  UserPlus, Hourglass, X, Camera
} from 'lucide-react';

export default function StudentChatHub() {
  // Mock Contact Log Dataset
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Dr. Arshad Malik",
      role: "Teacher",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      lastMessage: "Please submit your project proposal document before Monday midnight.",
      timestamp: "11:42 AM",
      unreadCount: 2,
      isOnline: true,
      category: "academic"
    },
    {
      id: 2,
      name: "FYP Coordination Hub",
      role: "Group",
      avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&auto=format&fit=crop&q=80",
      lastMessage: "Sadia: Uploaded the fixed dashboard code structure into git repo.",
      timestamp: "9:15 AM",
      unreadCount: 0,
      isOnline: false,
      category: "groups"
    },
    {
      id: 3,
      name: "Admin Portal Support",
      role: "System",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
      lastMessage: "Your fee validation challan verification has been fully updated.",
      timestamp: "Yesterday",
      unreadCount: 0,
      isOnline: true,
      category: "support"
    }
  ]);

  // Global Available System Groups Dataset
  const [availableGroups, setAvailableGroups] = useState([
    { id: 'g1', name: "Web Engineering Core - Section A", avatar: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&auto=format&fit=crop&q=80", description: "MERN Stack architectural patterns and lab session project collaborations.", members: 42, requestStatus: "idle" },
    { id: 'g2', name: "FYP Research Sync Room", avatar: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&auto=format&fit=crop&q=80", description: "Documentation and proposal evaluation benchmarks layout discussions.", members: 15, requestStatus: "requested" },
    { id: 'g3', name: "Mobile App Dev Initiative", avatar: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&auto=format&fit=crop&q=80", description: "Cross-platform engineering tracking streams with React Native.", members: 28, requestStatus: "idle" },
    { id: 'g4', name: "AI & Data Science Cohort", avatar: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=100&auto=format&fit=crop&q=80", description: "Dataset scrubbing and statistical modeling parameters review loops.", members: 34, requestStatus: "idle" }
  ]);

  const [activeContactId, setActiveContactId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [groupSearchQuery, setGroupSearchQuery] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [showAttachments, setShowAttachments] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);

  // Group Action Modal States
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

  // Form Fields State for Creating a Group Room
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDesc, setNewGroupDesc] = useState('');
  const [newGroupAvatar, setNewGroupAvatar] = useState('');

  // Conversation Stream Mapping State
  const [conversations, setConversations] = useState({
    1: [
      { id: 101, sender: 'them', avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80", text: "Assalam-o-Alaikum Sadia, did you review the DataGrid template issues?", time: "10:30 AM", status: "read" },
      { id: 102, sender: 'me', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80", text: "Walaikum Assalam Sir, yes I synced the category options to a full-width column layout successfully.", time: "10:35 AM", status: "read" },
      { id: 103, sender: 'them', avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80", text: "Excellent work. Please submit your project proposal document before Monday midnight.", time: "11:42 AM", status: "delivered" }
    ],
    2: [
      { id: 201, sender: 'them', avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80", text: "Let's push the new Vite repository setup changes tonight.", time: "Yesterday", status: "read" }
    ],
    3: [
      { id: 301, sender: 'them', avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80", text: "Your fee validation challan verification has been fully updated.", time: "Yesterday", status: "read" }
    ]
  });

  const activeContact = contacts.find(c => c.id === activeContactId);
  const currentMessages = conversations[activeContactId] || [];
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversations, activeContactId]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessageObj = {
      id: Date.now(),
      sender: 'me',
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
      replyTo: replyingTo ? replyingTo.text : null
    };

    setConversations(prev => ({
      ...prev,
      [activeContactId]: [...(prev[activeContactId] || []), newMessageObj]
    }));

    setInputMessage('');
    setReplyingTo(null);

    setTimeout(() => {
      setConversations(prev => {
        const stream = prev[activeContactId] || [];
        const targetedIndex = stream.findIndex(m => m.id === newMessageObj.id);
        if (targetedIndex !== -1) {
          const updatedStream = [...stream];
          updatedStream[targetedIndex].status = 'read';
          return { ...prev, [activeContactId]: updatedStream };
        }
        return prev;
      });
    }, 1200);
  };

  const handleJoinRequestDispatch = (groupId) => {
    setAvailableGroups(prev => prev.map(group => {
      if (group.id === groupId) {
        return { ...group, requestStatus: group.requestStatus === 'idle' ? 'requested' : 'idle' };
      }
      return group;
    }));
  };

  // Logic to dynamically instantiate a group with its custom imagery
  const handleCreateGroupSubmit = (e) => {
    e.preventDefault();
    if (!newGroupName.trim()) return;

    const fallbackAvatar = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&auto=format&fit=crop&q=80";
    const instantiatedGroup = {
      id: `g-${Date.now()}`,
      name: newGroupName,
      avatar: newGroupAvatar.trim() ? newGroupAvatar.trim() : fallbackAvatar,
      description: newGroupDesc || "No channel context documentation configured.",
      members: 1,
      requestStatus: "idle"
    };

    setAvailableGroups(prev => [instantiatedGroup, ...prev]);
    
    // Clear fields and drop structural frame modal toggle
    setNewGroupName('');
    setNewGroupDesc('');
    setNewGroupAvatar('');
    setShowCreateModal(false);
  };

  const filteredContacts = contacts.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAvailableGroups = availableGroups.filter(g =>
    g.name.toLowerCase().includes(groupSearchQuery.toLowerCase()) ||
    g.description.toLowerCase().includes(groupSearchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 bg-[#13151a] border border-gray-800/50 rounded-2xl shadow-2xl w-full h-[calc(100vh-140px)] min-h-137.5 overflow-hidden antialiased relative">
      
      {/* 📱 LEFT COLUMN PANEL: Contacts Feed & Search Matrix */}
      <div className="md:col-span-4 border-r border-gray-800/40 flex flex-col bg-[#111317]">
        <div className="p-4 bg-[#13151a] border-b border-gray-800/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Users className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white tracking-wide">Communication Hub</span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <button 
              onClick={() => { setGroupSearchQuery(''); setShowJoinModal(true); }}
              className="p-1.5 text-gray-400 hover:text-purple-400 bg-[#0d0e12] rounded-lg border border-gray-800/60 transition-all flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider"
            >
              <Link2 className="w-3 h-3" /> Join
            </button>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="p-1.5 text-gray-400 hover:text-purple-400 bg-[#0d0e12] rounded-lg border border-gray-800/60 transition-all flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider"
            >
              <PlusCircle className="w-3 h-3" /> Create
            </button>
          </div>
        </div>

        <div className="p-3 bg-[#13151a]/40">
          <div className="relative flex items-center w-full">
            <Search className="absolute left-3 w-3.5 h-3.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search conversations, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0d0e12] border border-gray-800 rounded-xl pl-9 pr-3 py-2 text-xs text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-600 transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-gray-800/20 divide-dashed">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => {
                setActiveContactId(contact.id);
                setContacts(prev => prev.map(c => c.id === contact.id ? { ...c, unreadCount: 0 } : c));
              }}
              className={`flex items-center gap-3 p-3.5 cursor-pointer text-left transition-all relative ${
                activeContactId === contact.id ? 'bg-purple-600/10 border-l-2 border-purple-500' : 'hover:bg-[#13151a]/40 bg-transparent'
              }`}
            >
              <div className="relative shrink-0">
                {contact.avatar ? (
                  <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-xl object-cover border border-gray-800" />
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-[#1c1e24] border border-gray-800 flex items-center justify-center text-gray-400 font-bold text-sm">
                    {contact.name.charAt(0)}
                  </div>
                )}
                {contact.isOnline && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#111317]" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h4 className="text-xs font-bold text-gray-200 truncate">{contact.name}</h4>
                  <span className="text-[10px] text-gray-600 whitespace-nowrap">{contact.timestamp}</span>
                </div>
                <p className="text-[11px] text-gray-500 truncate leading-normal pr-2">{contact.lastMessage}</p>
              </div>

              <div className="absolute right-3.5 bottom-3.5 flex flex-col items-end gap-1.5">
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider border ${
                  contact.role === 'Teacher' ? 'bg-amber-950/20 text-amber-400 border-amber-900/40' :
                  contact.role === 'Group' ? 'bg-purple-950/20 text-purple-400 border-purple-900/40' :
                  'bg-emerald-950/20 text-emerald-400 border-emerald-900/40'
                }`}>
                  {contact.role}
                </span>
                {contact.unreadCount > 0 && (
                  <span className="w-4 h-4 bg-purple-600 rounded-full text-[9px] font-bold text-white flex items-center justify-center animate-pulse">
                    {contact.unreadCount}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 💬 RIGHT COLUMN PANEL: Active Thread Messaging Canvas */}
      <div className="md:col-span-8 flex flex-col bg-[#0d0e12]/40 h-full relative">
        {activeContact ? (
          <>
            <div className="p-4 bg-[#111317] border-b border-gray-800/40 flex items-center justify-between text-left">
              <div className="flex items-center gap-3">
                {activeContact.avatar ? (
                  <img src={activeContact.avatar} alt={activeContact.name} className="w-9 h-9 rounded-xl object-cover border border-gray-800" />
                ) : (
                  <div className="w-9 h-9 rounded-xl bg-[#1c1e24] border border-gray-800 flex items-center justify-center text-gray-300 font-bold text-xs">
                    {activeContact.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="text-xs font-bold text-white tracking-wide">{activeContact.name}</h3>
                  <span className="text-[10px] text-gray-500 block mt-0.5">
                    {activeContact.isOnline ? "Active connection pipeline online" : "Offline index cache"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 text-gray-500 hover:text-gray-300 rounded-lg transition-all"><SearchCode className="w-3.5 h-3.5" /></button>
                <button className="p-2 text-gray-500 hover:text-gray-300 rounded-lg transition-all"><MoreVertical className="w-3.5 h-3.5" /></button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-linear-to-b from-[#0d0e12]/10 to-[#13151a]/20">
              {currentMessages.map((msg) => (
                <div key={msg.id} className={`flex items-end gap-2 w-full ${msg.sender === 'me' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <img src={msg.avatar} alt={msg.sender} className="w-7 h-7 rounded-lg object-cover border border-gray-800/80 shrink-0" />
                  <div className={`flex flex-col gap-1 max-w-sm ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                    <div className={`rounded-2xl p-3 text-xs leading-relaxed relative border shadow-md transition-all overflow-hidden min-w-fit ${
                      msg.sender === 'me' ? 'bg-purple-600 text-white border-purple-500 rounded-tr-none' : 'bg-[#13151a] text-gray-300 border-gray-800/60 rounded-tl-none'
                    }`}>
                      {msg.replyTo && (
                        <div className="mb-2 p-1.5 bg-black/20 text-[11px] rounded-lg border-l-2 border-purple-300/40 text-gray-300 text-left truncate max-w-xs">
                          <span className="block opacity-40 text-[9px] uppercase font-bold tracking-wider">Reference Loop</span>
                          <span className="block truncate">{msg.replyTo}</span>
                        </div>
                      )}
                      <p className="text-left whitespace-pre-wrap wrap-break-word">{msg.text}</p>
                      <div className="flex items-center justify-end gap-1 text-[9px] opacity-60 text-right select-none">
                        <span className="whitespace-nowrap">{msg.time}</span>
                        {msg.sender === 'me' && (
                          <span>
                            {msg.status === 'sent' && <Check className="w-3 h-3" />}
                            {msg.status === 'delivered' && <CheckCheck className="w-3 h-3" />}
                            {msg.status === 'read' && <CheckCheck className="w-3 h-3 text-purple-300" />}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messageEndRef} />
            </div>

            <div className="p-3 bg-[#111317] border-t border-gray-800/40 relative">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2 w-full">
                <input
                  type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-[#0d0e12] border border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-600 transition-all"
                />
                <button type="submit" disabled={!inputMessage.trim()} className="p-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-40 shadow-md transition-all"><Send className="w-4 h-4" /></button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-gray-600">
            <Users className="w-12 h-12 text-gray-800 mb-2" />
            <p className="text-xs">Select an active communication context pipeline to begin chat telemetry loops.</p>
          </div>
        )}
      </div>

      {/* ── MODALS LAYER ── */}
      {/* A. UPGRADED: Create Group Modal with Optional Profile Image Field */}
      {showCreateModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <form 
            onSubmit={handleCreateGroupSubmit}
            className="bg-[#13151a] border border-gray-800 rounded-2xl p-5 max-w-sm w-full text-left space-y-4 shadow-2xl animate-fade-in"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-gray-200 uppercase tracking-wider">Initialize Workspace Room</h3>
              <button type="button" onClick={() => setShowCreateModal(false)} className="p-1 text-gray-500 hover:text-white rounded-lg"><X className="w-4 h-4" /></button>
            </div>

            {/* Optional Avatar Live Configuration Node Group */}
            <div className="flex items-center gap-4 bg-[#0d0e12]/40 p-3 rounded-xl border border-gray-800/60">
              <div className="w-12 h-12 rounded-xl border border-gray-800 bg-[#111317] flex items-center justify-center text-gray-500 shrink-0 overflow-hidden relative group/avatar">
                {newGroupAvatar.trim() ? (
                  <img src={newGroupAvatar.trim()} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <Camera className="w-4 h-4 text-gray-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Space Cover Branding</span>
                <p className="text-[11px] text-gray-600 mt-0.5">Provide a remote image URL linkage node or leave empty to default.</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Group Name <span className="text-purple-400">*</span></label>
                <input required type="text" value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)} placeholder="e.g., CS-4A Study Core" className="w-full bg-[#0d0e12] border border-gray-800 text-xs rounded-xl px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500" />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Description</label>
                <input type="text" value={newGroupDesc} onChange={(e) => setNewGroupDesc(e.target.value)} placeholder="Brief channel context..." className="w-full bg-[#0d0e12] border border-gray-800 text-xs rounded-xl px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500" />
              </div>
              {/* Optional Profile Picture URL Link Input Node */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[10px] uppercase font-bold text-gray-500">Profile Image URL</label>
                  <span className="text-[9px] uppercase font-semibold text-gray-600 tracking-wider">Optional</span>
                </div>
                <input type="url" value={newGroupAvatar} onChange={(e) => setNewGroupAvatar(e.target.value)} placeholder="https://images.unsplash.com/photo-..." className="w-full bg-[#0d0e12] border border-gray-800 text-xs rounded-xl px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500 font-mono text-[11px]" />
              </div>
            </div>

            <div className="flex justify-end gap-2 text-xs pt-2">
              <button type="button" onClick={() => setShowCreateModal(false)} className="px-3 py-1.5 bg-[#0d0e12] border border-gray-800 rounded-xl font-medium text-gray-400 hover:text-white transition-colors">Cancel</button>
              <button type="submit" className="px-3 py-1.5 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all">Create Channel</button>
            </div>
          </form>
        </div>
      )}

      {/* B. Explore & Join Group Listing Modal */}
      {showJoinModal && (
        <div className="absolute inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-[#13151a] border border-gray-800 rounded-2xl p-5 max-w-md w-full text-left flex flex-col max-h-[85vh] shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800/60 shrink-0">
              <div>
                <h3 className="text-xs font-bold text-gray-200 uppercase tracking-wider">Explore Shared Spaces</h3>
                <p className="text-[11px] text-gray-500 mt-0.5">Discover active student modules and register inbound join requests.</p>
              </div>
              <button onClick={() => setShowJoinModal(false)} className="p-1 text-gray-400 hover:text-white rounded-lg bg-[#0d0e12] border border-gray-800/40 transition-colors"><X className="w-4 h-4" /></button>
            </div>

            <div className="py-3 shrink-0">
              <div className="relative flex items-center w-full">
                <Search className="absolute left-3 w-3.5 h-3.5 text-gray-600" />
                <input
                  type="text" placeholder="Filter channels by name or descriptive terms..." value={groupSearchQuery} onChange={(e) => setGroupSearchQuery(e.target.value)}
                  className="w-full bg-[#0d0e12] border border-gray-800 rounded-xl pl-9 pr-3 py-2 text-xs text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-600 transition-all"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1 my-2 divide-y divide-gray-800/30">
              {filteredAvailableGroups.map((group) => (
                <div key={group.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3 group/item">
                  <div className="flex items-center gap-3">
                    <img src={group.avatar} alt={group.name} className="w-9 h-9 rounded-xl object-cover border border-gray-800 shrink-0" />
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-gray-200 group-hover/item:text-purple-400 transition-colors">{group.name}</span>
                        <span className="text-[9px] bg-purple-950/40 border border-purple-900/40 text-purple-400 px-1.5 py-0.5 rounded-sm font-semibold">{group.members} active profiles</span>
                      </div>
                      <p className="text-[11px] text-gray-500 leading-normal max-w-xs truncate">{group.description}</p>
                    </div>
                  </div>
                  <button onClick={() => handleJoinRequestDispatch(group.id)} className={`shrink-0 text-[10px] font-bold px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5 tracking-wide transition-all ${group.requestStatus === 'requested' ? 'bg-amber-600/10 border-amber-500/30 text-amber-400' : 'bg-purple-600 text-white border-purple-500 hover:bg-purple-700'}`}>
                    {group.requestStatus === 'requested' ? (
                      <><Hourglass className="w-3 h-3 animate-spin" /><span>Pending</span></>
                    ) : (
                      <><UserPlus className="w-3 h-3" /><span>Request Access</span></>
                    )}
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-800/60 flex justify-end shrink-0">
              <button onClick={() => setShowJoinModal(false)} className="px-4 py-2 bg-[#0d0e12] border border-gray-800 rounded-xl font-bold text-xs text-gray-400 hover:text-white transition-colors">Close Register</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}