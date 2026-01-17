import { useState } from "react";

const TABS = [
  { id: "factors", label: "Process over predictions" },
  { id: "trigger", label: "Risk before returns" },
  { id: "method", label: "Data, not narratives" },
];

const DATA = {
  factors: [
    {
      title: "Rule-Based Decisions",
      description: "Act on defined rules, not assumptions",
    },
    {
      title: "Consistency Wins",
      description: "Repeat proven actions over time",
    },
    {
      title: "Emotional Control",
      description: "Remove fear and greed from decisions",
    },
    {
      title: "Execution Excellence",
      description: "Quality execution matters more than ideas",
    },
    {
      title: "System Improvement",
      description: "Refine processes step by step",
    },
    {
      title: "Process-Driven Outcomes",
      description: "Results follow disciplined systems",
    },
  ],
  trigger: [
    {
      title: "Capital Protection",
      description: "Safeguard funds before seeking growth",
    },
    {
      title: "Downside Awareness",
      description: "Know the risk before the reward",
    },
    {
      title: "Loss Prevention",
      description: "Avoid losses to stay in the game",
    },
  ],
  method: [
    {
      title: "Data-Backed Decisions",
      description: "Numbers validate every move",
    },
    {
      title: "Evidence Over Opinion",
      description: "Ignore stories without proof",
    },
    {
      title: "Measure First",
      description: "You can’t improve what you don’t track",
    },
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

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-[#f8fbfd] to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-gray-500 mb-2">
            INVESTING PHILOSOPHY
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="italic text-[#71c1d1]">Investment</span>{" "}
            Framework
          </h2>

          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A disciplined approach combining fundamentals, triggers, and
            research-backed execution.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-1 shadow-md flex gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-[#71c1d1] to-[#4fb3c8] text-white shadow"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA[activeTab].map((item, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur rounded-2xl p-6
              border border-gray-100 shadow-md hover:shadow-xl
              hover:-translate-y-1 transition-all duration-300
              flex flex-col items-center text-center"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center">
                <img
                  src={IMG_MAP[activeTab][index]}
                  alt={item.title}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
