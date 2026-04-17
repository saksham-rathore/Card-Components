import React from "react";

function Cards() {
  return (
    <div>
      <div className="min-h-screen bg-[#0f0f14] flex items-center justify-center gap-8 flex-wrap p-10 font-dm">
        <div className="card1-bg relative w-[300px] min-h-[360px] rounded-3xl border border-white/[0.08] overflow-hidden cursor-pointer flex flex-col transition-transform duration-300 hover:-translate-y-2">
          <div className="absolute w-[200px] h-[200px] rounded-full bg-[#6c3dff] blur-[50px] opacity-55 -top-[70px] -left-[50px] animate-drift"></div>
          <div className="absolute w-[160px] h-[160px] rounded-full bg-[#00e5a0] blur-[50px] opacity-55 -bottom-[50px] -right-[40px] animate-drift-2"></div>
          <div className="absolute w-[120px] h-[120px] rounded-full bg-[#ff6b9d] blur-[50px] opacity-55 top-[40%] left-[55%] animate-drift-4"></div>

          <div className="absolute w-[280px] h-[280px] rounded-full border border-white/[0.07] -top-[90px] -right-[90px] animate-spinSlow"></div>
          <div className="absolute w-[200px] h-[200px] rounded-full border border-white/[0.07] -bottom-[70px] -left-[70px] animate-spinSlowReverse"></div>

          <div className="absolute w-[3px] h-[3px] rounded-full bg-white/65 top-[14%] left-[18%] animate-twinkle"></div>
          <div className="absolute w-[3px] h-[3px] rounded-full bg-white/65 top-[28%] left-[72%] animate-twinkle-05"></div>
          <div className="absolute w-[3px] h-[3px] rounded-full bg-white/65 top-[58%] left-[28%] animate-twinkle-1"></div>
          <div className="absolute w-[3px] h-[3px] rounded-full bg-white/65 top-[74%] left-[66%] animate-twinkle-15"></div>
          <div className="absolute w-[3px] h-[3px] rounded-full bg-white/65 top-[44%] left-[86%] animate-twinkle-08"></div>
          <div className="absolute w-[3px] h-[3px] rounded-full bg-white/65 top-[19%] left-[52%] animate-twinkle-03"></div>

          <div className="relative z-10 flex flex-col gap-[18px] p-7 flex-1">
            <div className="inline-flex items-center gap-1.5 bg-[#6c3dff]/25 border border-[#6c3dff]/45 text-[#b794ff] text-[11px] font-medium tracking-[0.07em] uppercase px-3 py-1 rounded-full w-fit animate-pulseBadge">
              <span className="w-[5px] h-[5px] rounded-full bg-[#00e5a0]"></span>
              Live
            </div>

            <h2 className="font-syne text-[23px] font-bold text-white leading-tight">
              Cosmic <span className="grad-text">Analytics</span> Dashboard
            </h2>

            <p className="text-[13.5px] text-white/50 leading-relaxed">
              Real-time insights powered by next-gen AI. Track metrics that
              actually matter.
            </p>

            <div className="flex gap-3">
              <div className="flex-1 bg-white/5 border border-white/[0.09] rounded-2xl px-3 py-2.5">
                <div className="font-syne text-[19px] font-semibold text-white">
                  98.4%
                </div>
                <div className="text-[11px] text-white/40 mt-0.5">Accuracy</div>
              </div>
              <div className="flex-1 bg-white/5 border border-white/[0.09] rounded-2xl px-3 py-2.5">
                <div className="font-syne text-[19px] font-semibold text-white">
                  2.1ms
                </div>
                <div className="text-[11px] text-white/40 mt-0.5">Latency</div>
              </div>
            </div>

            <button className="btn-gradient btn-shimmer mt-auto w-full py-3 rounded-2xl text-white font-syne text-[13px] font-semibold tracking-[0.04em] cursor-pointer border-none hover:opacity-85 transition-opacity duration-200">
              Explore Now
            </button>
          </div>
        </div>

        <div className="shine-card w-[300px] min-h-[360px] rounded-3xl bg-white border border-black/[0.08] cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(108,61,255,0.12),0_4px_16px_rgba(0,0,0,0.08)]">
          <div className="header-gradient relative w-full h-[140px] flex items-center justify-center overflow-hidden">
            <div className="absolute w-[110px] h-[110px] rounded-full bg-[#7c3aed] opacity-35 -top-[30px] -right-[20px]"></div>
            <div className="absolute w-[90px] h-[90px] rounded-full bg-[#059669] opacity-35 -bottom-[25px] left-0"></div>
            <div className="absolute w-[70px] h-[70px] rounded-full bg-[#2563eb] opacity-35 top-[10px] left-[30%]"></div>

            <div className="relative z-10 w-[60px] h-[60px] bg-white rounded-[18px] border border-black/[0.07] flex items-center justify-center shadow-[0_4px_20px_rgba(108,61,255,0.15)]">
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6c3dff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 p-[22px] flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium tracking-[0.06em] uppercase bg-[#ede9fe] text-[#6d28d9] px-2.5 py-0.5 rounded-full">
                Design
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                <span className="text-amber-400 text-[13px]">★</span> 4.9
              </div>
            </div>

            <h3 className="font-syne text-[18px] font-semibold text-gray-900 leading-snug">
              UI Component Library Pro
            </h3>

            <p className="text-[13.5px] text-gray-500 leading-relaxed">
              A curated set of polished, accessible components for modern web
              apps.
            </p>

            <div className="h-px bg-gray-100 my-1"></div>

            <div className="flex items-center justify-between">
              <div className="flex gap-3.5">
                <div className="flex items-center gap-1 text-[12px] text-gray-400">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  3h course
                </div>
                <div className="flex items-center gap-1 text-[12px] text-gray-400">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                  1.2k
                </div>
              </div>
              <div className="font-syne text-[18px] font-semibold text-gray-900">
                $49<span className="text-xs font-normal text-gray-400">/yr</span>
              </div>
            </div>

            <button className="mt-auto w-full py-3 rounded-2xl bg-white border border-gray-200 text-gray-900 font-syne text-[13px] font-semibold tracking-[0.03em] cursor-pointer transition-all duration-150 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98]">
              Get Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
