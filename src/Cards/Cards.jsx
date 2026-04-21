import React, { useState, useEffect, useRef } from "react";

function Cards() {
  const [period, setPeriod] = useState("1Y");
  const [tradeTab, setTradeTab] = useState("BUY");
  const [btcAmount, setBtcAmount] = useState(4.6);
  const [usdAmount, setUsdAmount] = useState(532680);
  const [price, setPrice] = useState(67420.15);
  const [scanPos, setScanPos] = useState(440);
  
  // Stats counters
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => prev + (Math.random() - 0.5) * 50);
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !statsVisible) {
        setStatsVisible(true);
        animateCount(setCount1, 64);
        animateCount(setCount2, 38);
        animateCount(setCount3, 120);
      }
    }, { threshold: 0.4 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsVisible]);

  const animateCount = (setter, target, duration = 1800) => {
    let start = performance.now();
    const update = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setter(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };

  return (
    <div className="bg-[#eef0f5] font-dm min-h-screen px-6 py-12 md:px-12 md:py-20 flex flex-col gap-32 overflow-hidden">
      
      {/* 1. Dashboard Info Cards (Top Row) */}
      <div className="flex items-center justify-center gap-12 flex-wrap">
        {/* Card 1: Cosmic Analytics */}
        <div className="relative w-[320px] min-h-[400px] rounded-[32px] border border-white/10 overflow-hidden cursor-pointer group bg-[#15151e] shadow-2xl">
          <div className="absolute w-[220px] h-[220px] rounded-full bg-[#6c3dff] blur-[60px] opacity-40 -top-[70px] -left-[50px] animate-drift"></div>
          <div className="absolute inset-0 z-0 text-white">
            <div className="absolute w-[2px] h-[2px] rounded-full bg-white/40 top-[15%] animate-twinkle"></div>
          </div>
          <div className="relative z-10 p-8">
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 text-[11px] font-semibold uppercase px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00e5a0] animate-pulse"></span>Live Metrics
            </span>
            <h2 className="font-syne text-[26px] font-bold text-white mb-3">Cosmic <span className="grad-text">Analytics</span> Pro</h2>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="text-[20px] font-bold text-white">99.9%</div>
                <div className="text-[11px] text-white/40 uppercase">Uptime</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="text-[20px] font-bold text-white">1.2s</div>
                <div className="text-[11px] text-white/40 uppercase">Sync</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Design Studio Max */}
        <div className="relative w-[320px] min-h-[400px] rounded-[32px] border border-black/5 overflow-hidden cursor-pointer group bg-white shadow-xl">
          <div className="h-[140px] relative overflow-hidden bg-gray-50 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center border border-black/5">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#6c3dff]" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /></svg>
            </div>
          </div>
          <div className="p-8">
            <span className="text-[11px] font-bold uppercase bg-[#f5f3ff] text-[#6c3dff] px-3 py-1 rounded-full mb-4 inline-block">Premium</span>
            <h2 className="font-syne text-[26px] font-bold text-black mb-2">Design <span className="text-[#6c3dff]">Studio</span> Max</h2>
            <p className="text-[14px] text-gray-400 mb-8">Craft pixel-perfect experiences with industry components.</p>
            <button className="w-full py-4 rounded-2xl bg-[#0b0b0f] text-white font-bold cursor-pointer hover:bg-[#6c3dff] transition-all">Start Free Trial</button>
          </div>
        </div>
      </div>

      {/* 2. Holographic Wallet */}
      <div className="flex flex-col items-center justify-center py-12">
        <div className="relative w-[320px] h-[670px] rounded-[50px] overflow-hidden bg-white shadow-[0_60px_120px_rgba(0,0,0,0.5)] border-[12px] border-gray-900">
          <div className="holo-bg absolute inset-0 opacity-80"></div>
          <div className="relative z-10 p-8 pt-24 text-center">
            <h1 className="font-syne text-[36px] font-extrabold text-gray-950 leading-tight mb-12">Take Your Wallet Everywhere</h1>
            <div className="space-y-4">
              <button className="w-full py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 font-bold shadow-sm">Login</button>
              <button className="w-full py-4 rounded-2xl bg-gray-950 text-white font-bold">Sign up</button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BTC Chart & Trading Table */}
      <div className="flex flex-col gap-12 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* BTC Chart */}
          <div className="flex-1 bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-white font-bold text-xl">₿</div>
                <div className="font-syne font-bold text-xl">Bitcoin <span className="text-gray-400 font-normal ml-2">BTC</span></div>
              </div>
              <div className="flex bg-gray-100 p-1 rounded-xl">
                {['1D', '7D', '1M', '1Y'].map(p => <button key={p} onClick={() => setPeriod(p)} className={`px-4 py-1.5 rounded-lg text-sm font-medium ${period === p ? 'bg-blue-600 text-white' : 'text-gray-500'}`}>{p}</button>)}
              </div>
            </div>
            <div className="text-5xl font-extrabold mb-12">${price.toLocaleString(undefined, {minimumFractionDigits:2})}</div>
            <div className="relative h-60 bg-blue-50/30 rounded-3xl overflow-hidden border border-blue-50">
              <svg className="w-full h-full" viewBox="0 0 760 200" preserveAspectRatio="none">
                <path d="M40,160 C80,120 100,170 140,130 C180,90 210,155 250,145 C290,135 320,170 360,155 C400,140 420,80 440,60 C460,40 480,100 520,110 C560,120 590,130 620,115 C650,100 680,118 720,120" fill="none" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
                <line x1={scanPos} y1="0" x2={scanPos} y2="200" stroke="#2563eb" strokeDasharray="6 4" opacity="0.4" />
              </svg>
            </div>
          </div>

          {/* Trading Panel */}
          <div className="xl:w-[360px] bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex bg-gray-100 p-1 rounded-2xl mb-8">
              {['BUY', 'SELL', 'Swap'].map(t => <button key={t} onClick={() => setTradeTab(t)} className={`flex-1 py-3 rounded-xl text-sm font-bold ${tradeTab === t ? 'bg-white shadow-sm' : 'text-gray-500'}`}>{t}</button>)}
            </div>
            <div className="space-y-6">
              <div><span className="text-sm font-bold text-gray-500">I'm {tradeTab === 'BUY' ? 'Buying' : 'Selling'}</span><input type="number" value={btcAmount} onChange={handleBtcChange} className="w-full bg-gray-50 p-5 rounded-2xl border-none font-bold text-xl mt-2 outline-none" /></div>
              <div><span className="text-sm font-bold text-gray-500">Spending (USD)</span><input type="text" value={usdAmount.toLocaleString()} readOnly className="w-full bg-gray-50 p-5 rounded-2xl border-none font-bold text-xl mt-2 outline-none" /></div>
              <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all">Place Order</button>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="font-syne font-bold text-2xl mb-8">Market Assets</h3>
          <table className="w-full text-left">
            <thead><tr className="text-sm text-gray-400 border-b border-gray-100"><th className="pb-4">Asset</th><th className="pb-4">Price</th><th className="pb-4 text-center">Trend</th></tr></thead>
            <tbody>
              {[{n:'Bitcoin',s:'BTC',p:'$64,280',c:'+3.1%'},{n:'Ethereum',s:'ETH',p:'$4,320',c:'-3.2%'}].map(coin => (
                <tr key={coin.s} className="border-b border-gray-50"><td className="py-6 font-bold flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">{coin.s[0]}</div>{coin.n}</td><td className="py-6 font-bold">{coin.p}</td><td className={`py-6 text-center font-bold ${coin.c.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>{coin.c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Forme Studio Landing Section */}
      <div className="mt-40 bg-ink text-pale rounded-[80px] p-12 md:p-24 relative overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto py-20">
          <span className="text-accent uppercase tracking-widest text-[12px] font-bold mb-8 block">Brand Experience</span>
          <h1 className="font-serif text-hero mb-12">Crafting moments that move people.</h1>
          <p className="text-xl text-mid font-light leading-relaxed mb-16">The intersection of motion, logic, and pure mathematical beauty.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-24">
            <div className="p-10 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all">
              <h3 className="font-serif text-2xl mb-4">SVG Motion</h3>
              <p className="text-mid font-light">Purposeful animation choreographed sequences.</p>
            </div>
            <div className="p-10 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all">
              <h3 className="font-serif text-2xl mb-4">Data Storytelling</h3>
              <p className="text-mid font-light">Complex information transformed into elegant visual stories.</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="grid grid-cols-3 gap-12 mt-40 max-w-5xl mx-auto text-center py-20 border-t border-white/10">
          <div><div className="font-serif text-stat text-accent">{count1}</div><div className="text-mid uppercase text-sm mt-4">Projects</div></div>
          <div><div className="font-serif text-stat text-accent">{count2}</div><div className="text-mid uppercase text-sm mt-4">Clients</div></div>
          <div><div className="font-serif text-stat text-accent">{count3}k</div><div className="text-mid uppercase text-sm mt-4">Impact</div></div>
        </div>

        {/* CTA */}
        <div className="text-center mt-60 py-40">
          <h2 className="font-serif text-5xl mb-12">Ready to move the needle?</h2>
          <button className="bg-white text-ink px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all">Start a Project</button>
        </div>

        <footer className="mt-40 pt-12 border-t border-white/5 text-center text-mid text-sm">
          <p>&copy; 2026 Forme Studio — All motion, all the time.</p>
        </footer>
      </div>
    </div>
  );
}

export default Cards;
