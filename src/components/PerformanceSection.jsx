import React from "react";

const PerformanceSectionPro = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-[2rem] lg:rounded-[2.5rem] bg-[#71c1d1] p-6 sm:p-10 lg:p-16 overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-teal-400/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>

          {/* MAIN GRID */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
                Real performance.
                <br />
                <span className="text-[#24354d] ">
                  Total transparency.
                </span>
              </h2>

              <p className="text-white max-w-lg mx-auto lg:mx-0 text-base sm:text-lg mb-7">
                Every recommendation is tracked in real-time. No hidden data. No
                cherry-picked results. Just honest numbers that earn your trust.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white text-[#042f2e] font-semibold shadow-lg hover:scale-105 transition">
                  Unlock Free Access
                </button>
                <button className="w-full sm:w-auto px-7 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition">
                  View Past Exits
                </button>
              </div>
            </div>

            {/* RIGHT ANALYTICS */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md sm:max-w-lg">

                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-4 sm:p-6 space-y-5">

                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-black text-sm sm:text-base">
                      42 Live Recommendations
                    </h3>
                    <span className="text-xs bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                      ● 3 New
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-[#71c1d1] p-4 text-center">
                      <p className="text-sm opacity-80 text-black">Avg Live Returns</p>
                      <img
                        src="/assets/Real-Performance/commerce.png"
                        alt=""
                        className="w-14 h-14 mx-auto my-2"
                      />
                      <div className="h-2 bg-white/30 rounded-full mt-3">
                        <div className="h-2 w-3/4 bg-white rounded-full"></div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-gray-50 p-4">
                      <p className="text-sm font-semibold text-black mb-2">
                        Performance Split
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full border-8 border-emerald-500 border-t-yellow-400 border-r-red-400"></div>
                        <div className="text-xs space-y-1">
                          <p className="text-emerald-600">● High</p>
                          <p className="text-yellow-500">● Medium</p>
                          <p className="text-red-500">● Low</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gainer / Loser */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-2xl p-4 text-center">
                      <p className="text-sm font-semibold text-black mb-2">
                        ↑ Top Gainer
                      </p>
                      <img
                        src="/assets/Real-Performance/graph.png"
                        alt=""
                        className="w-14 h-14 mx-auto"
                      />
                      <p className="text-xs text-emerald-600 mt-2">
                        Target 7 • Active
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-4 text-center text-black ">
                      <p className="text-sm font-semibold mb-2">
                        ↓ Top Loser
                      </p>
                      <img
                        src="/assets/Real-Performance/lost.png"
                        alt=""
                        className="w-14 h-14 mx-auto"
                      />
                      <p className="text-xs mt-2 opacity-90">
                        Target 1 • Active
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSectionPro;
