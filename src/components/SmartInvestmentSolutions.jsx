export default function SmartInvestmentSolutions() {
  const logos = Array.from({ length: 20 }).map(
    (_, i) => `/assets/logos/logo${i + 1}.png`
  );

  const rows = [
    { data: logos.slice(0, 5), dir: "left" },
    { data: logos.slice(5, 10), dir: "right" },
    { data: logos.slice(10, 15), dir: "left" },
    { data: logos.slice(15, 20), dir: "right" },
  ];

  return (
    <section className="bg-gradient-to-br from-[#0f2f3a] to-[#123d4a] py-16 md:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <p className="text-center text-xs tracking-widest text-emerald-200 mb-2">
          SERVICES
        </p>

        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
          Smart <span className="italic text-[#4fd1c5]">Investment</span> Solutions
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* LEFT CARD */}
          <div className="bg-[#1b3f4a] rounded-2xl p-5 sm:p-6 border border-white/10 hover:shadow-2xl transition">
            {/* LOGO MARQUEE */}
            <div className="space-y-3 overflow-hidden mb-6">
              {rows.map((row, idx) => (
                <div key={idx}>
                  <div
                    className={`marquee-track ${
                      row.dir === "left" ? "marquee-left" : "marquee-right"
                    }`}
                  >
                    {[...row.data, ...row.data, ...row.data].map((src, i) => (
                      <div key={i} className="logo-item">
                        <img src={src} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
              <span className="text-emerald-400">✔</span>
              Smart Stock Recommendations
            </h3>

            <p className="text-xs sm:text-sm text-white/80">
              From Main Board to SMEs – curated stock picks with clear
              Buy/Hold/Sell alerts.
            </p>
          </div>

          {/* CENTER CARD */}
          <div className="bg-[#1b3f4a] rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center border border-white/10 hover:shadow-2xl transition">
            <div className="w-full aspect-video bg-black/20 rounded-xl mb-6 overflow-hidden">
              <video
                src="/assets/video/kmkbasket (1).webm"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-semibold mb-2 text-sm sm:text-base">
              Fundamental Research Reports & Videos
            </h3>

            <p className="text-xs sm:text-sm text-white/80 max-w-xs">
              Short & detailed analysis with video breakdowns so you invest with
              confidence.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#1b3f4a] rounded-2xl p-5 sm:p-6 space-y-4 border border-white/10 hover:shadow-2xl transition">
            {[
              "Action Update: SELL Triggered",
              "Hot Stock Update",
              "Target Met!",
              "New Stock Alert",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl px-4 py-3 text-gray-800 text-xs sm:text-sm shadow"
              >
                <p className="font-medium">{item}</p>
                <p className="text-[11px] text-gray-500">Just now</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MARQUEE CSS */}
      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
        }

        .logo-item {
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          flex-shrink: 0;
        }

        @media (min-width: 640px) {
          .logo-item {
            width: 42px;
            height: 42px;
            margin-right: 12px;
          }
        }

        .logo-item img {
          width: 70%;
          height: 70%;
          object-fit: contain;
          border-radius: 9999px;
        }

        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }

        @keyframes marqueeRight {
          from { transform: translateX(-33.333%); }
          to { transform: translateX(0); }
        }

        .marquee-left {
          animation: marqueeLeft 26s linear infinite;
        }

        .marquee-right {
          animation: marqueeRight 30s linear infinite;
        }

        @media (max-width: 640px) {
          .marquee-left,
          .marquee-right {
            animation-duration: 38s;
          }
        }
      `}</style>
    </section>
  );
}
