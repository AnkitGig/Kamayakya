import { useState } from "react";

const TABS = [
  { id: "factors", label: "Factors", color: "from-[#71c1d1] to-[#71c1d1]" },
  { id: "trigger", label: "Trigger", color: "from-[#71c1d1] to-[#71c1d1]" },
  { id: "method", label: "Method", color: "from-[#71c1d1] to-[#71c1d1]" },
];

const DATA = {
  factors: [
    {
      title: "Cash flow",
      description: "Sustainable financial health and liquidity",
    },
    {
      title: "Top-line growth",
      description: "Revenue expansion and market capture",
    },
    {
      title: "Bottom-line growth",
      description: "Profitability and margin improvement",
    },
    {
      title: "Promoter holding",
      description: "Insider confidence and alignment",
    },
    {
      title: "Management quality",
      description: "Leadership competence and vision",
    },
    {
      title: "Valuations",
      description: "Fair price relative to intrinsic value",
    },
  ],
  trigger: [
    {
      title: "Capacity expansion",
      description: "Strategic growth investments",
    },
    { title: "Debt reduction", description: "Improved balance sheet strength" },
    {
      title: "Change in management",
      description: "New leadership and direction",
    },
    { title: "Industry tailwinds", description: "Favorable sector dynamics" },
    {
      title: "Govt policies",
      description: "Regulatory support and incentives",
    },
    {
      title: "Turnaround plays",
      description: "Recovery and transformation stories",
    },
  ],
  method: [
    {
      title: "Solid data & research",
      description: "Deep fundamental analysis",
    },
    {
      title: "Management interactions",
      description: "Direct leadership insights",
    },
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
    TABS.find((tab) => tab.id === activeTab)?.color ||
    "from-blue-500 to-cyan-500";

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs font-semibold text-orange-600 mb-2">
            INVESTING PHILOSOPHY
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Our <span className="italic text-[#71c1d1]">Investment</span>{" "}
            Framework
          </h2>

          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We analyze businesses deeply and invest with long-term conviction.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10">
          <div className="flex gap-3 overflow-x-auto no-scrollbar justify-center">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`min-w-[120px] px-5 py-3 rounded-xl text-sm font-semibold transition-all
                  ${
                    activeTab === tab.id
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DATA[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow
             flex flex-col items-center text-center"
            >
              <img
                src={IMG_MAP[activeTab][index]}
                alt={item.title}
                className="w-40 h-40 object-contain rounded-lg mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
