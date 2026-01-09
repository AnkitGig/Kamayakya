import { useState } from "react";

const TABS = [
  { id: "factors", label: "Factors", color: "from-[#0b5d50] to-[#0f766e]" },
  { id: "trigger", label: "Trigger", color: "from-[#0b5d50] to-[#0f766e]" },
  { id: "method", label: "Method", color: "from-[#0b5d50] to-[#0f766e]" },
];

const DATA = {
  factors: [
    { title: "Cash flow", description: "Sustainable financial health and liquidity" },
    { title: "Top-line growth", description: "Revenue expansion and market capture" },
    { title: "Bottom-line growth", description: "Profitability and margin improvement" },
    { title: "Promoter holding", description: "Insider confidence and alignment" },
    { title: "Management quality", description: "Leadership competence and vision" },
    { title: "Valuations", description: "Fair price relative to intrinsic value" },
  ],
  trigger: [
    { title: "Capacity expansion", description: "Strategic growth investments" },
    { title: "Debt reduction", description: "Improved balance sheet strength" },
    { title: "Change in management", description: "New leadership and direction" },
    { title: "Industry tailwinds", description: "Favorable sector dynamics" },
    { title: "Govt policies", description: "Regulatory support and incentives" },
    { title: "Turnaround plays", description: "Recovery and transformation stories" },
  ],
  method: [
    { title: "Solid data & research", description: "Deep fundamental analysis" },
    { title: "Management interactions", description: "Direct leadership insights" },
    { title: "Channel checks", description: "Ground-level verification" },
  ],
};

const IMG_MAP = {
  factors: [
    "/assets/PHILOSOPHY/factor1.png",
    "/assets/PHILOSOPHY/factor2.png",
    "/assets/PHILOSOPHY/factor3.png",
    "/assets/PHILOSOPHY/factor4.png",
    "/assets/PHILOSOPHY/factor5.png",
    "/assets/PHILOSOPHY/factor6.png",
  ],
  trigger: [
    "/assets/PHILOSOPHY/trigger1.png",
    "/assets/PHILOSOPHY/trigger2.png",
    "/assets/PHILOSOPHY/trigger3.png",
    "/assets/PHILOSOPHY/trigger4.png",
    "/assets/PHILOSOPHY/trigger5.png",
    "/assets/PHILOSOPHY/trigger6.png",
  ],
  method: [
    "/assets/PHILOSOPHY/method1.png",
    "/assets/PHILOSOPHY/method2.png",
    "/assets/PHILOSOPHY/method3.png",
  ],
};


export default function InvestingPhilosophy() {
  const [activeTab, setActiveTab] = useState("factors");

  const activeColor =
    TABS.find(tab => tab.id === activeTab)?.color || "from-blue-500 to-cyan-500";

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs font-semibold text-orange-600 mb-2">
            INVESTING PHILOSOPHY
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Our <span className="italic text-emerald-600">Investment</span> Framework
          </h2>

          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We analyze businesses deeply and invest with long-term conviction.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10">
          <div className="flex gap-3 overflow-x-auto no-scrollbar justify-center">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`min-w-[120px] px-5 py-3 rounded-xl text-sm font-semibold transition-all
                  ${activeTab === tab.id
                    ? `text-white bg-gradient-to-r ${tab.color}`
                    : "bg-white text-gray-700 border"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DATA[activeTab].map((item, index) => (
            <div
              key={index}
              className="group bg-white p-5 sm:p-7 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={
                  IMG_MAP[activeTab][
                  index % IMG_MAP[activeTab].length
                  ]
                }
                alt={item.title}
                className="w-12 h-12 mb-3 object-contain"
              />


              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <div
                className={`mt-4 h-1 w-0 group-hover:w-full transition-all bg-gradient-to-r ${activeColor}`}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-900 px-6 py-6 rounded-2xl">
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold">
                Ready to invest with conviction?
              </p>
              <p className="text-gray-400 text-sm">
                Join our research-driven approach
              </p>
            </div>

            <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold">
              Explore Opportunities
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
