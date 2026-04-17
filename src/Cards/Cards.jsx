import React from "react";

function Cards() {
  return (
    <div>
      <div className="min-h-screen bg-[#0b0b0f] flex items-center justify-center gap-10 flex-wrap p-10 font-dm">
        
        <div className="relative w-[320px] min-h-[400px] rounded-[32px] border border-white/10 overflow-hidden cursor-pointer group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(108,61,255,0.3)] bg-[#15151e]">
          <div className="absolute w-[220px] h-[220px] rounded-full bg-[#6c3dff] blur-[60px] opacity-40 -top-[70px] -left-[50px] animate-drift"></div>
          <div className="absolute w-[180px] h-[180px] rounded-full bg-[#00e5a0] blur-[60px] opacity-30 -bottom-[60px] -right-[50px] animate-drift-2"></div>
          <div className="absolute w-[140px] h-[140px] rounded-full bg-[#ff6b9d] blur-[50px] opacity-25 top-[40%] left-[50%] animate-drift-4"></div>

          <div className="absolute inset-0 z-0">
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

            <button className="mt-auto w-full py-4 rounded-2xl bg-white text-black font-syne text-[14px] font-bold tracking-tight cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:bg-[#6c3dff] hover:text-white border-none">
              Launch Console
            </button>
          </div>
        </div>

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
              <span className="text-[11px] font-bold tracking-wider uppercase bg-[#f5f3ff] text-[#6c3dff] px-3 py-1 rounded-full">
                Premium
              </span>
              <div className="flex items-center gap-1 text-[13px] font-bold text-black">
                <span className="text-amber-400">★</span> 4.9
              </div>
            </div>

            <h2 className="font-syne text-[26px] font-bold text-black leading-tight mb-2">
              Design <span className="text-[#6c3dff]">Studio</span> Max
            </h2>

            <p className="text-[14px] text-gray-400 leading-relaxed mb-8">
              Craft pixel-perfect experiences with our industry-leading components.
            </p>

            <div className="h-px bg-gray-100 mb-6"></div>

            <div className="flex items-center justify-between mb-8">
               <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400"></div>
               </div>
               <div className="text-[18px] font-bold text-black font-syne">
                  $79<span className="text-[12px] font-normal text-gray-400">/mo</span>
               </div>
            </div>

            <button className="mt-auto w-full py-4 rounded-2xl bg-[#0b0b0f] text-white font-syne text-[14px] font-bold tracking-tight cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:bg-[#6c3dff] shadow-lg shadow-black/10 border-none">
              Start Free Trial
            </button>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Cards;
