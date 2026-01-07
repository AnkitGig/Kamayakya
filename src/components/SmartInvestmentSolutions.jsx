import React from "react";

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
    <section className="bg-[#062f2e] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-orange-400 text-xs tracking-widest mb-2">
          SERVICES
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
          Smart <span className="italic">Investment</span> Solutions
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* LEFT CARD */}
          <div className="bg-[#0b3f3d] rounded-2xl p-6">
            {/* SEAMLESS LOGO GRID */}
            <div className="space-y-3 overflow-hidden mb-6">
              {rows.map((row, idx) => (
                <div key={idx} className="relative overflow-hidden">
                  <div
                    className={`marquee-track ${row.dir === "left"
                        ? "marquee-left"
                        : "marquee-right"
                      }`}
                  >
                    {[...row.data, ...row.data, ...row.data].map((src, i) => (
                      <div key={i} className="logo-item">
                        <img
                          src={src}
                          alt={`logo-${i}`}
                          onError={(e) =>
                            (e.currentTarget.style.display = "none")
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-green-400">✔</span>
              Smart Stock Recommendations
            </h3>
            <p className="text-sm text-white/80">
              From Main Board to SMEs – curated stock picks with clear
              Buy/Hold/Sell alerts.
            </p>
          </div>

          {/* CENTER */}
          <div className="bg-[#0b3f3d] rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-90 h-70 bg-white/10 rounded-2xl mb-6 overflow-hidden">
              <video
                src="/assets/video/kmkbasket (1).webm"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-fill"
              />
            </div>
            <h3 className="font-semibold mb-2">
              Fundamental Research Reports & Videos
            </h3>
            <p className="text-sm text-white/80 max-w-xs">
              Short + detailed analysis with video breakdowns so you invest with
              confidence.
            </p>
          </div>

          {/* RIGHT */}
          <div className="bg-[#0b3f3d] rounded-2xl p-6 space-y-4">
            {[
              "Action Update: SELL Triggered",
              "Hot Stock Update",
              "Target Met!",
              "New Stock Alert",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl px-4 py-3 text-gray-800 text-sm shadow"
              >
                <p className="font-medium">{item}</p>
                <p className="text-xs text-gray-500">Just now</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
        }

        .logo-item {
          width: 42px;
          height: 42px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .logo-item img {
          width: 28px;
          height: 28px;
          object-fit: contain;
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
          animation: marqueeLeft 18s linear infinite;
        }

        .marquee-right {
          animation: marqueeRight 22s linear infinite;
        }
      `}</style>
    </section>
  );
}
