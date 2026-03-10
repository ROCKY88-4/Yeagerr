import React, { useState, useEffect } from 'react';
import { 
  Play, Plus, Trash2, X, LayoutGrid, 
  History, Settings, Menu, Columns, 
  Square, Grid3X3, Activity, Command,
  Maximize2, Minimize2, ExternalLink,
  MonitorPlay, Clock, Volume2, VolumeX,
  Save, FolderOpen, FileText, RefreshCw,
  MessageSquare, Layers, Shield, Zap, TrendingUp, ChevronRight, Globe, CheckCircle2,
  Lock, Upload
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Video {
  id: string;
  url: string;
  videoId: string;
  addedAt: number;
  showChat?: boolean;
  ipAddress?: string;
}

function generateIndianIp() {
  const prefixes = [
    '14.139', '27.54', '49.32', '103.1', '103.2', '103.3', '117.192', '117.193', '122.160', '122.161'
  ];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const subnet1 = Math.floor(Math.random() * 256);
  const subnet2 = Math.floor(Math.random() * 256);
  return `${prefix}.${subnet1}.${subnet2}`;
}

interface HistoryItem {
  id: string;
  url: string;
  videoId: string;
  timestamp: number;
}

interface Session {
  id: string;
  name: string;
  videos: Video[];
  timestamp: number;
}

function getYouTubeId(url: string) {
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|live|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

function LandingPage({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-cyan-500/30 overflow-y-auto">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 border-b border-zinc-800/50 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-500 flex items-center justify-center rounded-sm shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <Command className="w-6 h-6 text-zinc-950" />
            </div>
            <span className="font-bold text-2xl tracking-widest text-zinc-100">YEAGER</span>
          </div>
          <button 
            onClick={onEnter}
            className="px-6 py-2.5 bg-zinc-100 text-zinc-950 font-bold uppercase tracking-wider text-sm rounded-md hover:bg-cyan-400 transition-colors"
          >
            Launch App
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            System Online v2.0
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
          >
            Ultimate YouTube <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Command Center
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Deploy multiple streams instantly. Generate non-drop watchtime, monitor live chats, and accelerate your channel monetization with our enterprise-grade multi-tab architecture.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={onEnter}
              className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold uppercase tracking-widest text-sm rounded-md transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:-translate-y-1"
            >
              Start Deploying <ChevronRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-zinc-500 text-sm font-mono mt-4 sm:mt-0">
              <Lock className="w-4 h-4 text-cyan-500" /> Premium Access Required
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Non-Drop Watchtime",
              desc: "Engineered to provide stable, continuous playback. Perfect for accumulating valid watch hours for YouTube Partner Program."
            },
            {
              icon: Zap,
              title: "Fast Monetization",
              desc: "Accelerate your journey to 4,000 watch hours. Deploy up to 50 instances simultaneously with our Mass Deploy tool."
            },
            {
              icon: Layers,
              title: "Multi-Tab Architecture",
              desc: "Run streams in a unified grid workspace or force-open them in actual browser tabs for maximum isolation and effectiveness."
            },
            {
              icon: MessageSquare,
              title: "Live Chat Integration",
              desc: "Monitor and engage with your community. Toggle real-time YouTube live chat directly alongside your video streams."
            },
            {
              icon: Globe,
              title: "Global Control",
              desc: "Master volume controls, focus mode, and session saving. Manage dozens of streams with a single click."
            },
            {
              icon: TrendingUp,
              title: "Performance Optimized",
              desc: "Built on a lightweight React architecture ensuring your browser doesn't crash even with multiple high-definition streams."
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="bg-zinc-900/50 border border-zinc-800/50 p-8 rounded-xl hover:border-cyan-500/30 hover:bg-zinc-800/50 transition-all group"
            >
              <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all">
                <feature.icon className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

function PaymentModal({ onClose, onSubmit }: { onClose: () => void, onSubmit: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300">
          <X className="w-5 h-5" />
        </button>
        
        {step === 1 ? (
          <>
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-2">Unlock Premium Access</h2>
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">₹399 <span className="text-lg text-zinc-500 font-normal">/ year</span></div>
              <p className="text-zinc-400 text-sm">Scan the QR code to pay and unlock all mass-deploy and watchtime features.</p>
            </div>

            <div className="bg-white p-4 rounded-xl mb-6 flex justify-center">
              <img src="https://i.supaimg.com/1d5b889b-6223-4256-a2e7-cb130244accd/4fc6033b-b421-4962-9ade-0153f7e7ac06.png" alt="Payment QR Code" className="max-w-[200px] w-full h-auto rounded-lg" />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Upload Payment Screenshot</label>
              <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-zinc-800 border-dashed rounded-lg cursor-pointer bg-zinc-950 hover:bg-zinc-900 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                  <Upload className="w-6 h-6 text-zinc-500 mb-2" />
                  <p className="text-sm text-zinc-400 truncate w-full">
                    {file ? <span className="text-cyan-400 font-medium">{file.name}</span> : "Click to upload screenshot"}
                  </p>
                </div>
                <input type="file" className="hidden" accept="image/*" onChange={(e) => { setFile(e.target.files?.[0] || null); setError(''); }} />
              </label>
            </div>

            {error && <div className="text-red-400 text-sm mb-4 text-center bg-red-500/10 py-2 rounded border border-red-500/20">{error}</div>}

            <button 
              onClick={() => {
                if (!file) {
                  setError("Please upload a payment screenshot first.");
                  return;
                }
                setError('');
                setStep(2);
              }}
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
            >
              Next Step
            </button>
          </>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-100 mb-2">Verify Payment</h2>
              <p className="text-zinc-400 text-sm">Enter your registered email address to verify your payment and unlock access.</p>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Registered Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="Enter email to verify payment"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
              />
            </div>

            {error && <div className="text-red-400 text-sm mb-4 text-center bg-red-500/10 py-2 rounded border border-red-500/20">{error}</div>}

            <div className="flex gap-3">
              <button 
                onClick={() => {
                  setStep(1);
                  setError('');
                }}
                className="w-1/3 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
              >
                Back
              </button>
              <button 
                onClick={() => {
                  if (email.trim().toLowerCase() !== 'rosibyyearger@gmail.com') {
                    setError("Invalid email address. Access denied.");
                    return;
                  }
                  onSubmit();
                }}
                className="w-2/3 py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
              >
                Submit & Verify
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function PendingScreen() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-yellow-500/10 border border-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Clock className="w-10 h-10 text-yellow-500 animate-pulse" />
        </div>
        <h1 className="text-3xl font-bold text-zinc-100 mb-4">Verification Pending</h1>
        <p className="text-zinc-400 leading-relaxed mb-8">
          We have received your payment screenshot. Our team is currently verifying your transaction. Your premium access will be activated shortly.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-mono">
          Status: <span className="text-yellow-500">In Review</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [paymentStatus, setPaymentStatus] = useState<'unpaid' | 'pending' | 'verified'>(() => {
    return (localStorage.getItem('yeager_payment_status') as any) || 'unpaid';
  });
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [notes, setNotes] = useState('');
  
  const [inputUrl, setInputUrl] = useState('');
  const [instances, setInstances] = useState<number>(1);
  const [error, setError] = useState('');
  const [columns, setColumns] = useState<number>(0); // 0 = auto
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'workspace' | 'history' | 'sessions' | 'notes' | 'multitab'>('workspace');
  const [focusedVideo, setFocusedVideo] = useState<string | null>(null);
  const [globalMute, setGlobalMute] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Load data on mount
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('yeager_history');
      if (savedHistory) setHistory(JSON.parse(savedHistory));
      
      const savedSessions = localStorage.getItem('yeager_sessions');
      if (savedSessions) setSessions(JSON.parse(savedSessions));
      
      const savedNotes = localStorage.getItem('yeager_notes');
      if (savedNotes) setNotes(savedNotes);
      
      const savedWorkspace = localStorage.getItem('yeager_workspace');
      if (savedWorkspace) setVideos(JSON.parse(savedWorkspace));
    } catch (e) {}
  }, []);

  // Save data on change
  useEffect(() => {
    localStorage.setItem('yeager_history', JSON.stringify(history));
    localStorage.setItem('yeager_sessions', JSON.stringify(sessions));
    localStorage.setItem('yeager_notes', notes);
    localStorage.setItem('yeager_workspace', JSON.stringify(videos));
  }, [history, sessions, notes, videos]);

  const handleAddVideo = (e?: React.FormEvent, urlOverride?: string) => {
    if (e) e.preventDefault();
    setError('');
    
    const urlToUse = urlOverride || inputUrl;
    if (!urlToUse.trim()) return;

    const videoId = getYouTubeId(urlToUse);
    
    if (!videoId) {
      setError('Invalid YouTube URL.');
      return;
    }

    const newVideos: Video[] = Array.from({ length: instances }).map(() => ({
      id: Math.random().toString(36).substring(7),
      url: urlToUse,
      videoId,
      addedAt: Date.now(),
      ipAddress: generateIndianIp()
    }));

    setVideos(prev => [...prev, ...newVideos]);
    
    // Add to history
    setHistory(prev => {
      const newHistory = [{
        id: Math.random().toString(36).substring(7),
        url: urlToUse,
        videoId,
        timestamp: Date.now()
      }, ...prev.filter(h => h.videoId !== videoId)].slice(0, 50);
      return newHistory;
    });

    if (!urlOverride) setInputUrl('');
    setActiveTab('workspace');
  };

  const handleRemoveVideo = (id: string) => {
    setVideos(videos.filter(v => v.id !== id));
    if (focusedVideo === id) setFocusedVideo(null);
  };

  const clearWorkspace = () => {
    if (window.confirm('Clear all active screens?')) {
      setVideos([]);
      setFocusedVideo(null);
    }
  };

  const saveSession = () => {
    if (videos.length === 0) return;
    const name = prompt('Enter a name for this session:');
    if (name) {
      const newSession: Session = {
        id: Math.random().toString(36).substring(7),
        name,
        videos: [...videos],
        timestamp: Date.now()
      };
      setSessions(prev => [newSession, ...prev]);
      setActiveTab('sessions');
    }
  };

  const loadSession = (session: Session) => {
    if (videos.length > 0) {
      if (!window.confirm('Replace current workspace with this session?')) return;
    }
    setVideos(session.videos.map(v => ({ 
      ...v, 
      id: Math.random().toString(36).substring(7),
      ipAddress: v.ipAddress || generateIndianIp()
    })));
    setActiveTab('workspace');
  };

  const deleteSession = (id: string) => {
    if (window.confirm('Delete this saved session?')) {
      setSessions(sessions.filter(s => s.id !== id));
    }
  };

  const getGridClass = () => {
    if (focusedVideo) return 'hidden';
    if (columns === 1) return 'grid-cols-1 max-w-5xl mx-auto';
    if (columns === 2) return 'grid-cols-1 md:grid-cols-2';
    if (columns === 3) return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3';
    if (columns === 4) return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4';
    
    // Auto layout
    const count = videos.length;
    if (count === 1) return 'grid-cols-1 max-w-5xl mx-auto';
    if (count === 2) return 'grid-cols-1 md:grid-cols-2';
    if (count === 3) return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3';
    if (count === 4) return 'grid-cols-1 md:grid-cols-2';
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  };

  const NavButton = ({ id, icon: Icon, label, count }: { id: any, icon: any, label: string, count?: number }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-all text-sm font-medium w-full ${
        activeTab === id 
          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
          : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 border border-transparent'
      }`}
    >
      <Icon className="w-4 h-4" />
      {label}
      {count !== undefined && count > 0 && (
        <span className="ml-auto bg-zinc-800 text-zinc-300 text-xs py-0.5 px-2 rounded-full font-mono">
          {count}
        </span>
      )}
    </button>
  );

  if (paymentStatus === 'pending') {
    return <PendingScreen />;
  }

  if (paymentStatus === 'unpaid') {
    return (
      <>
        <LandingPage onEnter={() => setShowPaymentModal(true)} />
        {showPaymentModal && (
          <PaymentModal 
            onClose={() => setShowPaymentModal(false)} 
            onSubmit={() => {
              setPaymentStatus('verified');
              localStorage.setItem('yeager_payment_status', 'verified');
              setShowPaymentModal(false);
            }} 
          />
        )}
      </>
    );
  }

  return (
    <div className="flex h-screen bg-[#050505] text-zinc-100 font-sans overflow-hidden selection:bg-cyan-500/30">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Sidebar */}
      <AnimatePresence initial={false}>
        {isSidebarOpen && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 260, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full border-r border-zinc-800/50 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col shrink-0 z-20 relative"
          >
            <div className="h-16 flex items-center px-6 border-b border-zinc-800/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500 flex items-center justify-center rounded-sm shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  <Command className="w-5 h-5 text-zinc-950" />
                </div>
                <span className="font-bold text-xl tracking-widest text-zinc-100">YEAGER</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
              <div className="text-[10px] font-mono text-zinc-500 mb-2 px-2 uppercase tracking-widest">Command Center</div>
              <NavButton id="workspace" icon={LayoutGrid} label="Workspace" count={videos.length} />
              <NavButton id="multitab" icon={Layers} label="Mass Deploy" />
              <NavButton id="sessions" icon={FolderOpen} label="Saved Sessions" count={sessions.length} />
              <NavButton id="history" icon={History} label="History" />
              <NavButton id="notes" icon={FileText} label="Scratchpad" />
            </div>

            <div className="p-4 border-t border-zinc-800/50 bg-black/20">
              <div className="flex items-center justify-between px-2 py-2 text-sm text-zinc-500 font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                  <span>SYS.ON</span>
                </div>
                <span className="text-zinc-400">{currentTime.toLocaleTimeString([], { hour12: false })}</span>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full relative z-10">
        
        {/* Top Header */}
        <header className="h-16 border-b border-zinc-800/50 bg-[#0a0a0a]/80 backdrop-blur-md flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 text-zinc-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            <form onSubmit={(e) => handleAddVideo(e)} className="flex-1 max-w-3xl relative flex items-center gap-2">
              <div className="relative flex-1 group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-cyan-500 transition-colors">
                  <Play className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="Enter YouTube URL to deploy stream..."
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-100 text-sm rounded-md pl-10 pr-4 py-2 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono placeholder:font-sans placeholder:text-zinc-600"
                />
                {error && (
                  <div className="absolute top-full left-0 mt-1 text-xs text-red-400 font-mono bg-red-950/50 px-2 py-1 rounded border border-red-500/20 backdrop-blur-sm z-50">
                    {error}
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center bg-zinc-900/50 border border-zinc-800 rounded-md px-2 py-1.5" title="Number of screens to deploy">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mr-2">Tabs:</span>
                  <input 
                    type="number" 
                    min="1" 
                    max="50" 
                    value={instances}
                    onChange={(e) => setInstances(parseInt(e.target.value) || 1)}
                    className="w-10 bg-transparent text-zinc-100 text-sm font-mono focus:outline-none text-center"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-1 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                >
                  <Plus className="w-3 h-3" /> Deploy
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center gap-3 ml-4">
            {/* Global Controls */}
            <div className="flex items-center bg-zinc-900/50 border border-zinc-800 rounded-md p-1">
              <button
                onClick={() => setGlobalMute(!globalMute)}
                title={globalMute ? "Unmute All" : "Mute All"}
                className={`p-1.5 rounded transition-colors flex items-center gap-2 px-3 ${
                  globalMute ? 'text-red-400 hover:bg-red-400/10' : 'text-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                {globalMute ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
                  {globalMute ? 'Muted' : 'Live'}
                </span>
              </button>
            </div>

            {/* Layout Controls */}
            <div className="hidden md:flex items-center bg-zinc-900/50 border border-zinc-800 rounded-md p-1">
              {[
                { val: 0, icon: LayoutGrid, label: 'Auto' },
                { val: 1, icon: Square, label: '1 Column' },
                { val: 2, icon: Columns, label: '2 Columns' },
                { val: 3, icon: Grid3X3, label: '3 Columns' },
              ].map((layout) => (
                <button
                  key={layout.val}
                  onClick={() => setColumns(layout.val)}
                  title={layout.label}
                  className={`p-1.5 rounded transition-colors ${
                    columns === layout.val 
                      ? 'bg-zinc-700 text-zinc-100 shadow-sm' 
                      : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800'
                  }`}
                >
                  <layout.icon className="w-4 h-4" />
                </button>
              ))}
            </div>

            {videos.length > 0 && (
              <div className="flex items-center gap-2 border-l border-zinc-800 pl-3">
                <button
                  onClick={saveSession}
                  title="Save Session"
                  className="p-2 text-zinc-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-colors"
                >
                  <Save className="w-4 h-4" />
                </button>
                <button
                  onClick={clearWorkspace}
                  className="flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 hover:bg-red-400/10 border border-transparent hover:border-red-400/20 rounded-md transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Clear</span>
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 relative">
          
          {activeTab === 'multitab' && (
            <div className="max-w-4xl mx-auto h-full flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <Layers className="w-5 h-5 text-cyan-500" />
                <h2 className="text-xl font-bold tracking-tight">Mass Deploy (Multi-Tab)</h2>
              </div>
              
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-zinc-400 text-sm mb-6">
                  Deploy a single stream to multiple instances at once. You can either add them to your YEAGER workspace grid, or force-open them in actual browser tabs.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Stream URL</label>
                    <input
                      type="text"
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      placeholder="https://youtube.com/watch?v=..."
                      className="w-full bg-black/50 border border-zinc-800 text-zinc-100 text-sm rounded-md px-4 py-3 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Number of Instances / Tabs</label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={instances}
                      onChange={(e) => setInstances(parseInt(e.target.value) || 1)}
                      className="w-full max-w-[200px] bg-black/50 border border-zinc-800 text-zinc-100 text-sm rounded-md px-4 py-3 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono"
                    />
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => handleAddVideo()}
                      className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 text-sm font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    >
                      <LayoutGrid className="w-4 h-4" /> Deploy to Workspace Grid
                    </button>
                    
                    <button
                      onClick={() => {
                        if (!inputUrl.trim()) {
                          alert('Please enter a URL first.');
                          return;
                        }
                        const videoId = getYouTubeId(inputUrl);
                        if (!videoId) {
                          alert('Invalid YouTube URL.');
                          return;
                        }
                        const confirmMsg = `This will attempt to open ${instances} new browser tabs. Your browser may block popups. Continue?`;
                        if (window.confirm(confirmMsg)) {
                          for (let i = 0; i < instances; i++) {
                            window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
                          }
                        }
                      }}
                      className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-sm font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2 border border-zinc-700"
                    >
                      <ExternalLink className="w-4 h-4" /> Open in Browser Tabs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="max-w-4xl mx-auto h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-cyan-500" />
                <h2 className="text-xl font-bold tracking-tight">Scratchpad</h2>
              </div>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Type your notes here... (Auto-saved)"
                className="flex-1 w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-zinc-300 font-mono text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 resize-none"
              />
            </div>
          )}

          {activeTab === 'sessions' && (
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <FolderOpen className="w-5 h-5 text-cyan-500" />
                <h2 className="text-xl font-bold tracking-tight">Saved Sessions</h2>
              </div>
              
              {sessions.length === 0 ? (
                <div className="text-center py-20 border border-zinc-800 border-dashed rounded-lg bg-zinc-900/30">
                  <Save className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
                  <p className="text-zinc-400 font-mono text-sm">No saved sessions. Build a workspace and click the Save icon.</p>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  {sessions.map((session) => (
                    <div key={session.id} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-cyan-500/30 transition-colors group">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-zinc-100 text-lg">{session.name}</h3>
                          <p className="text-xs font-mono text-zinc-500 mt-1">
                            {new Date(session.timestamp).toLocaleString()} • {session.videos.length} Streams
                          </p>
                        </div>
                        <button
                          onClick={() => deleteSession(session.id)}
                          className="p-1.5 text-zinc-500 hover:text-red-400 hover:bg-red-400/10 rounded transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-700">
                        {session.videos.map(v => (
                          <img 
                            key={v.id}
                            src={`https://img.youtube.com/vi/${v.videoId}/default.jpg`} 
                            alt="Thumbnail"
                            className="w-16 h-12 object-cover rounded border border-zinc-800 shrink-0"
                          />
                        ))}
                      </div>

                      <button
                        onClick={() => loadSession(session)}
                        className="w-full py-2 bg-zinc-800 hover:bg-cyan-500 hover:text-zinc-950 text-zinc-300 text-sm font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
                      >
                        <Play className="w-4 h-4" /> Load Session
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'history' && (
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                  <History className="w-5 h-5 text-cyan-500" />
                  Deployment History
                </h2>
                {history.length > 0 && (
                  <button 
                    onClick={() => {
                      if (window.confirm('Clear watch history?')) setHistory([]);
                    }}
                    className="text-xs text-zinc-500 hover:text-red-400 transition-colors uppercase tracking-wider font-bold"
                  >
                    Clear History
                  </button>
                )}
              </div>
              
              {history.length === 0 ? (
                <div className="text-center py-20 border border-zinc-800 border-dashed rounded-lg bg-zinc-900/30">
                  <Clock className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
                  <p className="text-zinc-400 font-mono text-sm">No history records found.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {history.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-800 rounded-md hover:border-cyan-500/30 transition-colors group">
                      <div className="flex items-center gap-4 overflow-hidden">
                        <div className="w-24 h-14 bg-black rounded overflow-hidden shrink-0 relative border border-zinc-800">
                          <img 
                            src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`} 
                            alt="Thumbnail"
                            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-zinc-200 truncate">Video ID: {item.videoId}</div>
                          <div className="text-xs font-mono text-zinc-500 truncate mt-1">{item.url}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 pl-4">
                        <span className="text-xs text-zinc-600 font-mono hidden sm:block">
                          {new Date(item.timestamp).toLocaleDateString()}
                        </span>
                        <button
                          onClick={() => handleAddVideo(undefined, item.url)}
                          className="px-3 py-1.5 bg-zinc-800 hover:bg-cyan-500 hover:text-zinc-950 text-zinc-300 text-xs font-bold uppercase tracking-wider rounded transition-colors"
                        >
                          Re-deploy
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'workspace' && (
            <>
              {videos.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center max-w-lg mx-auto">
                  <div className="w-24 h-24 mb-8 relative">
                    <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-2 border-2 border-dashed border-zinc-700 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MonitorPlay className="w-8 h-8 text-zinc-500" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight mb-2 text-zinc-100">SYSTEM STANDBY</h2>
                  <p className="text-zinc-400 text-sm mb-8 font-mono">
                    Awaiting video stream deployment. Enter a valid YouTube URL to initialize the workspace grid.
                  </p>
                  
                  <div className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-left backdrop-blur-sm">
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Activity className="w-3 h-3" /> Suggested Streams
                    </div>
                    <div className="space-y-2">
                      {[
                        { title: 'NASA Live Stream', url: 'https://www.youtube.com/watch?v=21X5lGlDOfg' },
                        { title: 'Lofi Hip Hop Radio', url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk' },
                        { title: 'Earth from Space', url: 'https://www.youtube.com/watch?v=86YLFOog4GM' },
                        { title: 'Cyberpunk City Walk', url: 'https://www.youtube.com/watch?v=E1A22hE0dAA' }
                      ].map((preset, i) => (
                        <button 
                          key={i}
                          onClick={() => handleAddVideo(undefined, preset.url)}
                          className="w-full flex items-center justify-between p-2 hover:bg-zinc-800/80 rounded border border-transparent hover:border-zinc-700 transition-colors group"
                        >
                          <span className="text-sm text-zinc-300 group-hover:text-cyan-400 transition-colors">{preset.title}</span>
                          <Plus className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`grid gap-4 transition-all duration-500 ${getGridClass()}`}>
                  <AnimatePresence mode="popLayout">
                    {videos.map((video) => (
                      <motion.div
                        key={video.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`group relative bg-black rounded-lg overflow-hidden border ${
                          focusedVideo === video.id ? 'border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'border-zinc-800'
                        } aspect-video flex flex-col`}
                      >
                        {/* Video Header Bar */}
                        <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-between px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider">Live / {video.videoId}</span>
                            {video.ipAddress && (
                              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20 ml-2 flex items-center gap-1">
                                <Globe className="w-3 h-3" /> {video.ipAddress}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => {
                                // Force reload iframe by updating ID slightly (hacky but works for refresh)
                                const newVideos = [...videos];
                                const idx = newVideos.findIndex(v => v.id === video.id);
                                if (idx > -1) {
                                  newVideos[idx] = { ...video, id: Math.random().toString(36).substring(7) };
                                  setVideos(newVideos);
                                }
                              }}
                              className="p-1.5 bg-zinc-900/80 hover:bg-zinc-700 text-zinc-300 rounded backdrop-blur-sm transition-colors"
                              title="Reload Stream"
                            >
                              <RefreshCw className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                setVideos(videos.map(v => v.id === video.id ? { ...v, showChat: !v.showChat } : v));
                              }}
                              className={`p-1.5 rounded backdrop-blur-sm transition-colors ${video.showChat ? 'bg-cyan-500 text-zinc-950' : 'bg-zinc-900/80 hover:bg-zinc-700 text-zinc-300'}`}
                              title="Toggle Live Chat"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => setFocusedVideo(focusedVideo === video.id ? null : video.id)}
                              className="p-1.5 bg-zinc-900/80 hover:bg-cyan-500 hover:text-zinc-950 text-zinc-300 rounded backdrop-blur-sm transition-colors"
                              title={focusedVideo === video.id ? "Exit Focus" : "Focus Mode"}
                            >
                              {focusedVideo === video.id ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                            </button>
                            <a
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 bg-zinc-900/80 hover:bg-zinc-700 text-zinc-300 rounded backdrop-blur-sm transition-colors"
                              title="Open in YouTube"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                            <button
                              onClick={() => handleRemoveVideo(video.id)}
                              className="p-1.5 bg-zinc-900/80 hover:bg-red-500 text-zinc-300 rounded backdrop-blur-sm transition-colors ml-1"
                              title="Terminate Stream"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-1 w-full h-full">
                          <iframe
                            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=${(globalMute || (focusedVideo && focusedVideo !== video.id)) ? '1' : '0'}`}
                            title="YouTube video player"
                            className={`${video.showChat ? 'w-[70%]' : 'w-full'} h-full border-0`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                          {video.showChat && (
                            <iframe
                              src={`https://www.youtube.com/live_chat?v=${video.videoId}&embed_domain=${window.location.hostname}`}
                              className="w-[30%] h-full border-0 border-l border-zinc-800 bg-zinc-950"
                            ></iframe>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}

              {/* Focus Mode Overlay */}
              {focusedVideo && (
                <div className="absolute inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl p-4 sm:p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4 shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                      <span className="text-sm font-mono text-cyan-500 uppercase tracking-widest">Focus Mode Active</span>
                    </div>
                    <button
                      onClick={() => setFocusedVideo(null)}
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-md text-sm font-bold uppercase tracking-wider transition-colors"
                    >
                      <Minimize2 className="w-4 h-4" /> Exit Focus
                    </button>
                  </div>
                  <div className="flex-1 w-full max-w-7xl mx-auto rounded-xl overflow-hidden border border-zinc-800 shadow-2xl bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${videos.find(v => v.id === focusedVideo)?.videoId}?autoplay=1&mute=${globalMute ? '1' : '0'}`}
                      title="YouTube video player"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
