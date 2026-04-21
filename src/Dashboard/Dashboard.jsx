import React, { useState, useEffect } from "react";

function Dashboard() {
  const [period, setPeriod] = useState("1Y");
  const [tradeTab, setTradeTab] = useState("BUY");
  const [btcAmount, setBtcAmount] = useState(4.6);
  const [usdAmount, setUsdAmount] = useState(532680);
  const [price, setPrice] = useState(67420.15);
  const [scanPos, setScanPos] = useState(440);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate price slightly
      setPrice(prev => prev + (Math.random() - 0.5) * 50);
      
      // Move scan position
      setScanPos(prev => {
        const next = prev + 2;
        return next > 720 ? 40 : next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleBtcChange = (e) => {
    const val = parseFloat(e.target.value) || 0;
    setBtcAmount(val);
    setUsdAmount(val * (price > 0 ? price : 115800));
  };

  return (
    <div className="bg-[#eef0f5] text-gray-900 rounded-[64px] mx-4 md:mx-12 my-24 p-8 md:p-12 overflow-hidden relative shadow-2xl">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        <div className="text-center mb-4">
          <h2 className="font-syne text-[42px] font-bold text-gray-950 leading-tight mb-4">Interactive <span className="text-blue-600">Crypto</span> Terminal</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Real-time data visualization and trading tools designed for the modern investor.</p>
        </div>

        {/* Top Cards Row */}
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {/* Card 1: Cosmic Analytics */}
          <div className="relative w-[320px] min-h-[400px] rounded-[32px] border border-white/10 overflow-hidden cursor-pointer group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(108,61,255,0.3)] bg-[#15151e]">
            <div className="absolute w-[220px] h-[220px] rounded-full bg-[#6c3dff] blur-[60px] opacity-40 -top-[70px] -left-[50px] animate-drift"></div>
            <div className="absolute w-[180px] h-[180px] rounded-full bg-[#00e5a0] blur-[60px] opacity-30 -bottom-[60px] -right-[50px] animate-drift-2"></div>
            <div className="absolute w-[140px] h-[140px] rounded-full bg-[#ff6b9d] blur-[50px] opacity-25 top-[40%] left-[50%] animate-drift-4"></div>

            <div className="absolute inset-0 z-0 text-white">
              <div className="absolute w-[2px] h-[2px] rounded-full bg-white/40 top-[15%] left-[20%] animate-twinkle"></div>
              <div className="absolute w-[2px] h-[2px] rounded-full bg-white/40 top-[35%] left-[75%] animate-twinkle-05"></div>
              <div className="absolute w-[2px] h-[2px] rounded-full bg-white/40 top-[65%] left-[30%] animate-twinkle-1"></div>
              <div className="absolute w-[2px] h-[2px] rounded-full bg-white/40 top-[80%] left-[70%] animate-twinkle-15"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full p-8">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full w-fit mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00e5a0] animate-pulse"></span>
                Live Metrics
              </div>
              <h2 className="font-syne text-[26px] font-bold text-white leading-tight mb-3">
                Cosmic <span className="grad-text">Analytics</span> Pro
              </h2>
              <p className="text-[14px] text-white/50 leading-relaxed mb-8">
                Experience real-time data visualization powered by neural-link processing.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 transition-colors group-hover:bg-white/10">
                  <div className="text-[20px] font-bold text-white font-syne">99.9%</div>
                  <div className="text-[11px] text-white/40 uppercase tracking-wider">Uptime</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 transition-colors group-hover:bg-white/10">
                  <div className="text-[20px] font-bold text-white font-syne">1.2s</div>
                  <div className="text-[11px] text-white/40 uppercase tracking-wider">Sync</div>
                </div>
              </div>
              <button className="mt-auto w-full py-4 rounded-2xl bg-white text-black font-syne text-[14px] font-bold tracking-tight cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:bg-[#6c3dff] hover:text-white border-none shadow-premium">
                Launch Console
              </button>
            </div>
          </div>

          {/* Card 2: Design Studio Max */}
          <div className="relative w-[320px] min-h-[400px] rounded-[32px] border border-black/5 overflow-hidden cursor-pointer group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] bg-white">
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shine-overlay"></div>
            <div className="h-[140px] relative overflow-hidden bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9]">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--accent-primary)_0%,_transparent_70%)]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-black/5 rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#6c3dff]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            <div className="relative z-10 flex flex-col h-full p-8 -mt-4 bg-white rounded-t-[32px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold tracking-wider uppercase bg-[#f5f3ff] text-[#6c3dff] px-3 py-1 rounded-full">Premium</span>
                <div className="flex items-center gap-1 text-[13px] font-bold text-black">
                  <span className="text-amber-400">★</span> 4.9
                </div>
              </div>
              <h2 className="font-syne text-[26px] font-bold text-black leading-tight mb-2">Design <span className="text-[#6c3dff]">Studio</span> Max</h2>
              <p className="text-[14px] text-gray-400 leading-relaxed mb-8">Craft pixel-perfect experiences with our industry-leading components.</p>
              <div className="h-px bg-gray-100 mb-6"></div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400"></div>
                </div>
                <div className="text-[18px] font-bold text-black font-syne">$79<span className="text-[12px] font-normal text-gray-400">/mo</span></div>
              </div>
              <button className="mt-auto w-full py-4 rounded-2xl bg-[#0b0b0f] text-white font-syne text-[14px] font-bold tracking-tight cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:bg-[#6c3dff] shadow-lg shadow-black/10 border-none">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>

        {/* Holographic Wallet Card Section */}
        <div className="flex flex-col items-center justify-center py-12">
          <div
            className="relative w-[320px] h-[670px] rounded-[50px] overflow-hidden"
            style={{ boxShadow: "0 0 0 10px #1a1a1a, 0 0 0 12px #2e2e2e, 0 60px 120px rgba(0,0,0,0.7)" }}
          >
            <div className="absolute inset-0 bg-white"></div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="holo-bg absolute inset-0 opacity-80"></div>
              <div className="absolute inset-0 animate-waveFloat">
                <svg className="wave-svg absolute top-0 right-0 w-[260px] opacity-90" viewBox="0 0 260 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="wave1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ff6edb" />
                      <stop offset="25%" stopColor="#ff9f43" />
                      <stop offset="50%" stopColor="#ffe04a" />
                      <stop offset="75%" stopColor="#54e8a4" />
                      <stop offset="100%" stopColor="#74b9ff" />
                    </linearGradient>
                  </defs>
                  <path d="M200 0 C240 80, 280 160, 220 260 C170 340, 260 400, 240 500 L260 500 L260 0 Z" fill="url(#wave1)" opacity="0.9" />
                  <path d="M180 0 C230 100, 200 200, 250 300 C280 370, 220 440, 260 500 L260 500 L260 0 Z" fill="url(#wave1)" opacity="0.5" />
                </svg>
              </div>
              
              <div className="absolute inset-0 animate-waveFloat2" style={{ animationDelay: '1s' }}>
                <svg className="wave-svg absolute top-0 right-[-20px] w-[220px] opacity-70" viewBox="0 0 220 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="wave2" x1="1" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="30%" stopColor="#60a5fa" />
                      <stop offset="60%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <path d="M160 0 C200 120, 140 220, 200 320 C240 400, 180 450, 220 500 L220 500 L220 0 Z" fill="url(#wave2)" opacity="0.85" />
                </svg>
              </div>

              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 320 670" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradWallet" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#fff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="260" y1="0" x2="380" y2="670" stroke="url(#lineGradWallet)" strokeWidth="0.5" />
                <line x1="230" y1="0" x2="350" y2="670" stroke="url(#lineGradWallet)" strokeWidth="0.3" />
                <line x1="290" y1="0" x2="410" y2="670" stroke="url(#lineGradWallet)" strokeWidth="0.4" />
              </svg>

              <div className="absolute bottom-0 left-0 right-0 h-[55%]" style={{ background: "linear-gradient(to top, rgba(255,255,255,1) 40%, rgba(255,255,255,0.85) 65%, transparent 100%)" }}></div>
            </div>

            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-40"></div>

            <div className="absolute top-0 left-0 right-0 h-[44px] z-30 flex items-center justify-between px-6 pt-3">
              <span className="text-[13px] font-semibold text-gray-900 tracking-tight">9:41</span>
              <div className="flex items-center gap-1">
                <svg width="17" height="12" viewBox="0 0 17 12" fill="#111">
                  <rect x="0" y="4" width="3" height="8" rx="1" />
                  <rect x="4.5" y="2.5" width="3" height="9.5" rx="1" />
                  <rect x="9" y="1" width="3" height="11" rx="1" />
                </svg>
                <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                  <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="#111" strokeOpacity="0.35" />
                  <rect x="2" y="2" width="16" height="8" rx="2" fill="#111" />
                </svg>
              </div>
            </div>

            <div className="logo-svg absolute top-[90px] left-1/2 -translate-x-1/2 z-20">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 4 C20 4, 28 12, 20 20 C12 12, 20 4 20 4Z" fill="#111" />
                <path d="M36 20 C36 20, 28 28, 20 20 C28 12, 36 20 36 20Z" fill="#111" />
                <path d="M20 36 C20 36, 12 28, 20 20 C28 28, 20 36 20 36Z" fill="#111" />
                <path d="M4 20 C4 20, 12 12, 20 20 C12 28, 4 20 4 20Z" fill="#111" />
              </svg>
            </div>

            <div className="text-block absolute bottom-[110px] left-0 right-0 px-7 z-20">
              <h1 className="font-syne text-[40px] font-extrabold text-gray-950 leading-[1.1] tracking-tight">
                Take<br />your<br />wallet<br />everywhere
              </h1>
            </div>

            <div className="btn-row absolute bottom-[36px] left-0 right-0 px-7 z-20 flex items-center gap-4">
              <button className="btn-shimmer flex-1 py-3.5 rounded-2xl bg-white border border-gray-200 text-gray-900 font-syne text-[14px] font-semibold tracking-wide shadow-sm transition-all duration-150 hover:bg-gray-50 active:scale-95">
                Login
              </button>
              <button className="flex-1 py-3.5 rounded-2xl bg-gray-950 text-white font-syne text-[14px] font-semibold tracking-wide transition-all duration-150 hover:bg-gray-800 active:scale-95 relative overflow-hidden">
                Sign up
                <span className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)" }}></span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-8">
          {/* BTC Chart Card */}
          <div className="flex-1 bg-white rounded-3xl p-6 shadow-sm animate-fadeUp">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center">
                  <span className="font-syne font-bold text-white text-sm">₿</span>
                </div>
                <div>
                  <span className="font-syne font-bold text-gray-900 text-base">Bitcoin</span>
                  <span className="text-gray-400 text-sm ml-1">(BTC)</span>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
                {['1D', '7D', '1M', '1Y'].map((p) => (
                  <button
                    key={p}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${period === p ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
                    onClick={() => setPeriod(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-baseline gap-3 mb-5 animate-countUp" style={{ animationDelay: '0.3s' }}>
              <span className="font-syne font-extrabold text-4xl text-gray-950 tracking-tight">
                ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className="flex items-center gap-1 text-emerald-500 font-semibold text-sm bg-emerald-50 px-2 py-0.5 rounded-full">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 2L9 8H1L5 2Z" fill="#10b981"/></svg>
                +12.80%
              </span>
            </div>
            <div className="relative w-full" style={{ height: '240px' }}>
              <svg id="mainChart" className="w-full h-full" viewBox="0 0 760 230" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="46" x2="760" y2="46" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="0" y1="92" x2="760" y2="92" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="0" y1="138" x2="760" y2="138" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="0" y1="184" x2="760" y2="184" stroke="#f3f4f6" strokeWidth="1" />
                <rect x={scanPos - 24} y="0" width="48" height="210" fill="#eff6ff" rx="4" className="transition-all duration-100 ease-linear" />
                <path className="chart-fill" d="M40,160 C80,120 100,170 140,130 C180,90 210,155 250,145 C290,135 320,170 360,155 C400,140 420,80 440,60 C460,40 480,100 520,110 C560,120 590,130 620,115 C650,100 680,118 720,120 L720,210 L40,210 Z" fill="url(#chartGrad)" />
                <path className="chart-line" d="M40,160 C80,120 100,170 140,130 C180,90 210,155 250,145 C290,135 320,170 360,155 C400,140 420,80 440,60 C460,40 480,100 520,110 C560,120 590,130 620,115 C650,100 680,118 720,120" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx={scanPos} cy="60" r="5" fill="#2563eb" className="animate-pulse" />
                <line x1={scanPos} y1="0" x2={scanPos} y2="210" stroke="#2563eb" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" className="transition-all duration-100 ease-linear" />
              </svg>
              <div className="tooltip-pop absolute bg-gray-900 text-white rounded-2xl px-4 py-3 text-xs shadow-xl pointer-events-none" style={{ top: '10px', left: `${(scanPos / 760) * 100}%`, transform: 'translateX(-50%)' }}>
                <div className="text-gray-400 mb-1 text-[11px]">June 2026</div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-syne font-bold text-xl">44,008</span>
                  <span className="text-blue-400 font-semibold">BTC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trading Panel */}
          <div className="xl:w-[340px] bg-white rounded-3xl p-6 shadow-sm animate-fadeUp" style={{ animationDelay: '0.15s' }}>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L3 4v4c0 3.3 2.2 6.4 5 7 2.8-.6 5-3.7 5-7V4L8 1z" stroke="#374151" strokeWidth="1.5" strokeLinejoin="round" /></svg>
              </div>
              <span className="font-syne font-bold text-gray-900 text-base">Crypto Trading</span>
            </div>
            <div className="flex bg-gray-100 rounded-2xl p-1 mb-5">
              {['BUY', 'SELL', 'Swap'].map((t) => (
                <button key={t} className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${tradeTab === t ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-800'}`} onClick={() => setTradeTab(t)}>{t}</button>
              ))}
            </div>
            <div className="mb-4">
              <p className="text-xs text-gray-500 font-medium mb-2">I'm {tradeTab === 'BUY' ? 'Buying' : 'Selling'}</p>
              <div className="flex items-center justify-between bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
                <input type="number" value={btcAmount} className="bg-transparent font-syne font-bold text-gray-900 text-lg w-24 outline-none" onChange={handleBtcChange} />
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center"><span className="text-white text-[9px] font-bold">₿</span></div>
                  <span className="font-semibold text-gray-800 text-sm">BTC</span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs text-gray-500 font-medium mb-2">I'm Spending</p>
              <div className="flex items-center justify-between bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
                <input type="text" value={usdAmount.toLocaleString()} className="bg-transparent font-syne font-bold text-gray-900 text-lg w-28 outline-none" readOnly />
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">🇺🇸</span>
                  <span className="font-semibold text-gray-800 text-sm">USD</span>
                </div>
              </div>
            </div>
            <button className="place-btn w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-syne font-bold text-sm rounded-2xl transition-all duration-150 tracking-wide mt-4">
              Place Order
            </button>
          </div>
        </div>

        {/* Transactions Table Section */}
        <div className="bg-white rounded-3xl shadow-sm p-6 animate-fadeUp">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="5" height="10" rx="1" fill="white" opacity="0.8" /><rect x="9" y="6" width="5" height="7" rx="1" fill="white" /></svg>
              </div>
              <div>
                <p className="font-syne font-bold text-gray-900 text-base">Recent transactions</p>
                <p className="text-gray-400 text-xs">Keep track of all transactions here</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.5" stroke="#9ca3af" strokeWidth="1.5" /><path d="M10 10L13 13" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" /></svg>
                <input placeholder="Search" className="bg-transparent text-sm text-gray-600 outline-none w-28 placeholder-gray-400" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-400 font-medium border-b border-gray-100">
                  <th className="pb-3 text-left">Assets</th>
                  <th className="pb-3 text-left">Price</th>
                  <th className="pb-3 text-left">24h Change</th>
                  <th className="pb-3 text-center">24h Trend</th>
                  <th className="pb-3 text-left">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Bitcoin', symbol: 'BTC', price: '$64,280.50', change: '+3.1%', icon: '₿', color: 'bg-amber-400' },
                  { name: 'Ethereum', symbol: 'ETH', price: '$4,320.75', change: '-3.2%', icon: 'Ξ', color: 'bg-indigo-500' },
                  { name: 'Solana', symbol: 'SOL', price: '$520.40', change: '+1.8%', icon: 'S', color: 'bg-violet-500' },
                ].map((coin) => (
                  <tr key={coin.symbol} className="coin-row border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors">
                    <td className="py-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl ${coin.color} flex items-center justify-center flex-shrink-0 text-white font-bold`}>
                          {coin.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{coin.name}</p>
                          <p className="text-gray-400 text-xs">{coin.symbol}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 font-syne font-semibold text-gray-900 text-sm">{coin.price}</td>
                    <td className="py-3.5">
                      <span className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full w-fit ${coin.change.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
                        {coin.change}
                      </span>
                    </td>
                    <td className="py-3.5">
                      <svg className="mx-auto" width="90" height="36" viewBox="0 0 90 36">
                        <polyline
                          className="mini-line"
                          points="0,20 15,15 30,25 45,10 60,30 75,5 90,15"
                          fill="none"
                          stroke={coin.change.startsWith('+') ? '#10b981' : '#ef4444'}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </td>
                    <td className="py-3.5 text-gray-700 text-sm font-medium">$1.2T</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
